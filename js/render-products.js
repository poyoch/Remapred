document.addEventListener("DOMContentLoaded", () => {
  // Current language determined by html lang attribute
  const lang = document.documentElement.lang || 'es';

  let products = window.fotricProducts || [];
  
  // Filter by brand (marca) from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  const marcaFiltro = urlParams.get('marca');
  if (marcaFiltro) {
    const marcaUpper = marcaFiltro.toUpperCase();
    products = products.filter(p => p.nombre.toUpperCase().startsWith(marcaUpper));

    const sidebar = document.getElementById('filters-sidebar');
    if (sidebar && marcaUpper === 'IRISS') {
      sidebar.style.display = 'none';
    }
  }
  
  // Ensure products are sorted by price ascending, but items without price (null) go at the end
  products.sort((a, b) => {
    if (a.precioUSD === null && b.precioUSD === null) return 0;
    if (a.precioUSD === null) return 1;
    if (b.precioUSD === null) return -1;
    return a.precioUSD - b.precioUSD;
  });

  const container = document.getElementById('products-container');
  const tableContainer = document.getElementById('comparative-table-container');

  if (container) {
    renderProductCards(products, container, lang);
    setupFilters(products, container, lang);
  }

  
});



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

    
    // Limit specs to 3 for catalog
    const catalogSpecsHtml = availableSpecs.slice(0, 3).map(spec => {
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

function setupFilters(products, container, lang) {
  const tipoChecks = document.querySelectorAll('.filter-tipo');
  const resolucionChecks = document.querySelectorAll('.filter-resolucion');
  const gamaChecks = document.querySelectorAll('.filter-gama');

  function getSelectedValues(checkboxes) {
    return Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }

  function applyFilters() {
    const selectedTipo = getSelectedValues(tipoChecks);
    const selectedRes = getSelectedValues(resolucionChecks);
    const selectedGama = getSelectedValues(gamaChecks);

    const filtered = products.filter(p => {
      // Filter by tipo (Térmica / Acústica)
      let matchTipo = true;
      if (selectedTipo.length > 0) {
        const pGama = (getText(p.gama, 'es') || '').toLowerCase();
        const isAcoustic = pGama.includes('acústica') || pGama.includes('acoustic');
        const isThermal = !isAcoustic; // Everything else is thermal
        
        matchTipo = (selectedTipo.includes('Acústica') || selectedTipo.includes('Acoustic')) && isAcoustic ||
                    (selectedTipo.includes('Térmica') || selectedTipo.includes('Thermal')) && isThermal;
      }

      // Filter by resolucion
      let matchRes = true;
      if (selectedRes.length > 0) {
        const resSpec = p.especificaciones.find(s => {
          const lbl = getText(s.etiqueta, 'es') || '';
          return lbl.toLowerCase().includes('resolución') || lbl.toLowerCase().includes('resolucion');
        });
        const resValue = resSpec && resSpec.valor ? getText(resSpec.valor, lang) : '';
        matchRes = selectedRes.some(r => resValue.includes(r));
      }

      // Filter by gama
      let matchGama = true;
      if (selectedGama.length > 0) {
        const pGama = (getText(p.gama, lang) || '') + ' ' + (getText(p.gama, 'es') || '');
        matchGama = selectedGama.some(g => pGama.toLowerCase().includes(g.toLowerCase()));
      }

      return matchTipo && matchRes && matchGama;
    });

    if (filtered.length === 0) {
      const msg = lang === 'en' ? 'No products found with these filters.' : 'No se encontraron productos con estos filtros.';
      container.innerHTML = `<div class="col-span-full text-center py-10 text-slate-500">${msg}</div>`;
    } else {
      renderProductCards(filtered, container, lang);
    }
  }

  tipoChecks.forEach(cb => cb.addEventListener('change', applyFilters));
  resolucionChecks.forEach(cb => cb.addEventListener('change', applyFilters));
  gamaChecks.forEach(cb => cb.addEventListener('change', applyFilters));
}

