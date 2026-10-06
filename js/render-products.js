document.addEventListener("DOMContentLoaded", () => {
  // Current language determined by html lang attribute
  const lang = document.documentElement.lang || 'es';

  const container = document.getElementById('products-container');
  if (!container) return;

  let products = (window.fotricProducts || []).slice();
  const sidebar = document.getElementById('filters-sidebar');

  // Filters from URL if present (links from the "Productos" menu)
  const urlParams = new URLSearchParams(window.location.search);
  const marcaFiltro = (urlParams.get('marca') || '').toLowerCase();
  const catFiltro = urlParams.get('cat');
  const subFiltro = urlParams.get('sub');

  if (marcaFiltro) {
    products = products.filter(p => p.nombre.toLowerCase().startsWith(marcaFiltro));
    if (marcaFiltro === 'iriss' && sidebar) sidebar.style.display = 'none';
  }

  if (catFiltro && CATEGORY_TYPES[catFiltro]) {
    const tipo = CATEGORY_TYPES[catFiltro];
    products = products.filter(p => getProductType(p) === tipo);
    if (tipo === 'window' && sidebar) sidebar.style.display = 'none';
  }

  // Ensure products are sorted by price ascending, but items without price (null) go at the end
  products.sort((a, b) => {
    if (a.precioUSD === null && b.precioUSD === null) return 0;
    if (a.precioUSD === null) return 1;
    if (b.precioUSD === null) return -1;
    return a.precioUSD - b.precioUSD;
  });

  showCategoryContext(catFiltro, marcaFiltro, lang);
  renderProductCards(products, container, lang);
  // Legacy ?sub=... links pre-select the matching "Línea de Producto" checkbox
  setupFilters(products, container, lang, SUB_PARAM_TO_LINE[subFiltro]);
});

// ---------------------------------------------------------------------------
// Product taxonomy helpers
// ---------------------------------------------------------------------------

// ?cat= values used by the header menu -> internal product type
const CATEGORY_TYPES = {
  termograficas: 'thermal',
  acusticas: 'acoustic',
  '2en1': 'mix',
  ventanas: 'window'
};

const CATEGORY_LABELS = {
  termograficas: { icon: 'fa-temperature-high text-orange-500', es: 'Cámaras Termográficas', en: 'Thermal Cameras' },
  acusticas: { icon: 'fa-volume-high text-blue-500', es: 'Cámaras Acústicas', en: 'Acoustic Cameras' },
  '2en1': { icon: 'fa-layer-group text-purple-500', es: 'Cámaras 2 en 1', en: '2-in-1 Cameras' },
  fotric: { icon: 'fa-camera text-accent', es: 'Fotric - Cámaras Termográficas y Acústicas', en: 'Fotric - Thermal & Acoustic Cameras' }
};

// Product lines ("Líneas de Producto") = product.subcategoria.es, in display order
const LINE_ORDER = [
  'Portátiles y de Uso Ligero',
  'Mantenimiento Industrial General',
  'Industrial Avanzado y Alta Exigencia',
  'Monitoreo Fijo',
  'Investigación y Desarrollo',
  'Detección de Fugas y Descargas'
];

const SUB_PARAM_TO_LINE = {
  portatiles: 'Portátiles y de Uso Ligero',
  mantenimiento: 'Mantenimiento Industrial General',
  avanzado: 'Industrial Avanzado y Alta Exigencia',
  fijo: 'Monitoreo Fijo',
  id: 'Investigación y Desarrollo',
  fugas: 'Detección de Fugas y Descargas'
};

const SERIES_ORDER = [
  'Serie TF', 'Serie C', 'Serie TP', 'Serie TK', 'Serie Ti', 'Serie P', 'Serie V',
  'Serie 600', 'Serie 220Pro', 'Serie 220Link', 'Serie TD', 'Serie H', 'MiX'
];

const SERIES_GROUP_LABELS = {
  'Serie TD': { es: 'Serie TD / TD2', en: 'TD / TD2 Series' },
  'Serie H': { es: 'Serie H / H-Flex', en: 'H / H-Flex Series' },
  'MiX': { es: 'Serie MiX (2 en 1)', en: 'MiX Series (2-in-1)' }
};

function getProductType(p) {
  const id = (p.id || '').toLowerCase();
  const gama = ((p.gama && p.gama.es) || '').toLowerCase();
  if (id.includes('iriss') || id.includes('ventana') || id.includes('window')) return 'window';
  if (gama.includes('mix')) return 'mix';
  if (id.includes('acustica') || id.includes('-td') || id.includes('-mu')) return 'acoustic';
  return 'thermal';
}

function getLineKeys(p) {
  return (p.subcategoriaUso && p.subcategoriaUso.es) ? [p.subcategoriaUso.es] : [];
}

function getSeriesKeys(p) {
  const g = (p.gama && p.gama.es) || '';
  if (!g) return [];
  if (/mix/i.test(g)) return ['MiX'];
  if (/^Serie TD/i.test(g)) return ['Serie TD'];
  if (/^Serie H/i.test(g)) return ['Serie H'];
  return [g];
}

function getResolutionKeys(p) {
  const spec = (p.especificaciones || []).find(s => /resoluci/i.test(getText(s.etiqueta, 'es') || ''));
  const value = spec && spec.valor ? (getText(spec.valor, 'es') || '') : '';
  const found = value.match(/\d{2,4}\s*x\s*\d{2,4}/gi) || [];
  return [...new Set(found.map(r => r.replace(/\s+/g, '')))];
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function showCategoryContext(catFiltro, marcaFiltro, lang) {
  const el = document.getElementById('filters-context');
  if (!el) return;
  const info = CATEGORY_LABELS[catFiltro] || (marcaFiltro === 'fotric' ? CATEGORY_LABELS.fotric : null);
  if (!info) return;
  const allUrl = lang === 'en' ? 'productos-en.html' : 'productos.html';
  el.innerHTML = `
    <div class="flex items-start justify-between gap-2">
      <span class="font-semibold text-primary"><i class="fa-solid ${info.icon} mr-1.5"></i>${escapeHtml(info[lang] || info.es)}</span>
      <a href="${allUrl}" class="text-xs text-slate-400 hover:text-accent whitespace-nowrap" title="${lang === 'en' ? 'View all products' : 'Ver todos los productos'}"><i class="fa-solid fa-xmark"></i></a>
    </div>`;
  el.classList.remove('hidden');
}

function getText(field, lang) {
  if (!field) return null;
  if (typeof field === 'string') return field;
  return field[lang] || field['es'] || '';
}

function renderProductCards(products, container, lang) {
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = "product-card border border-slate-200 rounded-lg p-5 bg-white hover:shadow-xl transition-shadow flex flex-col hover-lift";

    const nombre = product.nombre;
    const gama = getText(product.gama, lang);
    const aplicaciones = getText(product.aplicaciones, lang);
    const urlFabricante = product.urlFabricante;
    
    // Generate benefits list
    const beneficiosHtml = product.beneficios.map(b => {
      const text = getText(b, lang);
      return `<li class="flex items-start text-xs text-slate-600 mb-1">
                <i class="fa-solid fa-check text-green-500 mt-0.5 mr-2 flex-shrink-0"></i>
                <span>${text}</span>
              </li>`;
    }).join('');

    // Generate specs list (taking top 5 available specs)
    const availableSpecs = product.especificaciones.filter(s => s.valor !== null);
    const topSpecsHtml = availableSpecs.slice(0, 5).map(spec => {
      return `<li class="text-xs text-slate-500 mb-1">
                <span class="font-semibold">${getText(spec.etiqueta, lang)}:</span> ${getText(spec.valor, lang)}
              </li>`;
    }).join('');

    // Select top 3 specs, and also always include "Pantalla" (Display) if it exists.
    const selectedSpecs = availableSpecs.slice(0, 3);
    const pantallaSpec = availableSpecs.find(s => {
       const lbl = getText(s.etiqueta, 'es') || '';
       return lbl.toLowerCase().includes('pantalla');
    });
    // Add "Pantalla" if it wasn't already in the top 3
    if (pantallaSpec && !selectedSpecs.includes(pantallaSpec)) {
       selectedSpecs.push(pantallaSpec);
    }

    const catalogSpecsHtml = selectedSpecs.map(spec => {
      return `<li class="text-xs text-slate-500 mb-1">
                <span class="font-semibold">${getText(spec.etiqueta, lang)}:</span> ${getText(spec.valor, lang)}
              </li>`;
    }).join("");

    let brandLogoHtml = '';
    if (nombre.toUpperCase().includes('FOTRIC')) {
        brandLogoHtml = '<img src="img/fotric-logo.png" alt="FOTRIC" class="h-6 object-contain ml-auto">';
    } else if (nombre.toUpperCase().includes('IRISS')) {
        brandLogoHtml = '<img src="img/iriss-logo.svg" alt="IRISS" class="h-6 object-contain ml-auto">';
    }

    card.innerHTML = `
      <div onclick="window.location.href='producto${lang === 'en' ? '-en' : ''}.html?id=${product.id}'" class="cursor-pointer h-full flex flex-col">
          <div class="product-img-wrapper h-64 w-full flex items-center justify-center mb-4 overflow-hidden rounded relative">
              <img src="${product.imagen}" alt="${nombre}" 
                   onerror="this.src='img/productos/placeholder.svg'"
                   class="max-h-full object-contain mix-blend-multiply ${product.cssScale || ''}">
          </div>
          <div class="flex-grow flex flex-col">
              <div class="flex flex-col mb-2">
                <div class="flex items-center w-full mb-2">
                    <span class="inline-block bg-accent/10 text-accent text-[10px] font-bold px-2 py-1 rounded w-max">${gama}</span>
                    ${brandLogoHtml}
                </div>
                <h3 class="font-bold text-primary text-lg leading-tight">${nombre}</h3>
              </div>
              
              <ul class="mb-4 mt-2 border-l-2 border-slate-200 pl-3">
                ${catalogSpecsHtml}
              </ul>
              
              <div class="mt-auto pt-4 border-t border-slate-100 flex flex-col">
                <span class="text-xs font-semibold text-accent mb-3 flex items-center gap-1.5">
                  <i class="fa-solid fa-file-invoice-dollar"></i> ${lang === 'en' ? 'Quote upon request' : 'Cotización a solicitud'}
                </span>
                <div class="w-full text-center bg-accent text-white font-bold py-2.5 rounded hover:bg-orange-600 transition-colors inline-block hover-lift">
                    ${lang === 'en' ? 'View Details & Quote' : 'Ver Detalles y Cotizar'}
                </div>
              </div>
          </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ---------------------------------------------------------------------------
// Sidebar filters
//  - "Líneas de Producto" is the main driver: all lines are always visible.
//  - Resolution and Series options are rebuilt from the products of the
//    selected lines (all of them when no line is selected) and are also
//    linked to each other (choosing a resolution only leaves its series, etc).
// ---------------------------------------------------------------------------
function setupFilters(products, container, lang, preselectLine) {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-filters');

  const facets = [
    {
      key: 'linea',
      el: document.getElementById('filter-lineas'),
      values: getLineKeys,
      label: (k, p) => escapeHtml(getText(p.subcategoriaUso, lang) || k),
      sort: (a, b) => orderIndex(LINE_ORDER, a) - orderIndex(LINE_ORDER, b)
    },
    {
      key: 'resolucion',
      el: document.getElementById('filter-resoluciones'),
      values: getResolutionKeys,
      label: k => k === '640x480' ? `${k} <span class="text-xs text-orange-500 font-semibold">Pro</span>` : k,
      sort: (a, b) => {
        const [aw, ah] = a.split('x').map(Number);
        const [bw, bh] = b.split('x').map(Number);
        return (bw * bh - aw * ah) || (bw - aw);
      }
    },
    {
      key: 'gama',
      el: document.getElementById('filter-gamas'),
      values: getSeriesKeys,
      label: (k, p) => escapeHtml(SERIES_GROUP_LABELS[k] ? SERIES_GROUP_LABELS[k][lang] || SERIES_GROUP_LABELS[k].es : (getText(p.gama, lang) || k)),
      sort: (a, b) => orderIndex(SERIES_ORDER, a) - orderIndex(SERIES_ORDER, b) || a.localeCompare(b)
    }
  ].filter(f => f.el);

  function orderIndex(list, key) {
    const i = list.indexOf(key);
    return i === -1 ? list.length : i;
  }

  // 1. Build the checkboxes from the products of the current page/category
  facets.forEach(f => {
    const labels = new Map();
    products.forEach(p => f.values(p).forEach(v => {
      if (!labels.has(v)) labels.set(v, f.label(v, p));
    }));
    const keys = [...labels.keys()].sort(f.sort);

    f.el.innerHTML = keys.map(k => `
      <label class="filter-option flex items-center space-x-2 cursor-pointer group/opt">
        <input type="checkbox" value="${escapeHtml(k)}" class="filter-${f.key} rounded border-slate-300 text-accent focus:ring-accent accent-accent">
        <span class="text-sm text-slate-600 group-hover/opt:text-primary transition-colors">${labels.get(k)}</span>
      </label>`).join('');

    f.inputs = Array.from(f.el.querySelectorAll('input'));
    f.block = f.el.closest('[data-filter-block]') || f.el.parentElement;
    if (keys.length === 0 && f.block) f.block.style.display = 'none';

    f.inputs.forEach(cb => cb.addEventListener('change', update));
  });

  // Pre-select a line coming from a legacy ?sub=... link
  if (preselectLine) {
    const lineFacet = facets.find(f => f.key === 'linea');
    const cb = lineFacet && lineFacet.inputs.find(i => i.value === preselectLine);
    if (cb) cb.checked = true;
  }

  function getSelection() {
    const sel = {};
    facets.forEach(f => { sel[f.key] = f.inputs.filter(cb => cb.checked).map(cb => cb.value); });
    return sel;
  }

  // Does product p satisfy the selection of every facet except `skipKeys`?
  function matches(p, sel, skipKeys) {
    return facets.every(f => {
      if (skipKeys.includes(f.key)) return true;
      const chosen = sel[f.key];
      if (!chosen || chosen.length === 0) return true;
      const vals = f.values(p);
      return chosen.some(v => vals.includes(v));
    });
  }

  // Products used to decide which options of facet `f` are available
  function poolFor(f, sel) {
    return products.filter(p => matches(p, sel, [f.key]));
  }

  function matchesSearch(p, term) {
    if (!term) return true;
    const nombre = p.nombre.toLowerCase();
    const gama = ((getText(p.gama, lang) || '') + ' ' + (getText(p.gama, 'es') || '')).toLowerCase();
    const apps = (getText(p.aplicaciones, lang) || '').toLowerCase();
    return nombre.includes(term) || gama.includes(term) || apps.includes(term);
  }

  function update() {
    let sel = getSelection();

    // Uncheck options that are no longer available (e.g. a series that does
    // not exist in the newly selected line) and recompute until stable.
    for (let guard = 0; guard < 5; guard++) {
      let changed = false;
      facets.forEach(f => {
        const available = new Set();
        poolFor(f, sel).forEach(p => f.values(p).forEach(v => available.add(v)));
        f.inputs.forEach(cb => {
          if (cb.checked && !available.has(cb.value)) { cb.checked = false; changed = true; }
        });
      });
      if (!changed) break;
      sel = getSelection();
    }

    // Show / hide options and update counters
    facets.forEach(f => {
      const counts = new Map();
      const pool = poolFor(f, sel);
      pool.forEach(p => f.values(p).forEach(v => counts.set(v, (counts.get(v) || 0) + 1)));

      let visible = 0;
      f.inputs.forEach(cb => {
        const label = cb.closest('label');
        const n = counts.get(cb.value) || 0;
        const show = (n > 0 || cb.checked);
        label.classList.toggle('hidden', !show);
        
        if (show) visible++;
      });
      if (f.block) f.block.style.display = visible === 0 ? 'none' : '';
    });

    // Render the products
    const term = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filtered = products.filter(p => matches(p, sel, []) && matchesSearch(p, term));

    if (filtered.length === 0) {
      const msg = lang === 'en' ? 'No products found with these filters.' : 'No se encontraron productos con estos filtros.';
      container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500">${msg}</div>`;
    } else {
      renderProductCards(filtered, container, lang);
    }

    const anySelected = Object.values(sel).some(v => v.length > 0);
    if (clearBtn) clearBtn.classList.toggle('hidden', !anySelected);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      facets.forEach(f => f.inputs.forEach(cb => { cb.checked = false; }));
      update();
    });
  }
  if (searchInput) searchInput.addEventListener('input', update);

  update();
}
