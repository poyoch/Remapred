document.addEventListener("DOMContentLoaded", () => {
  // Current language determined by html lang attribute
  const lang = document.documentElement.lang || 'es';

  let products = window.fotricProducts || [];
  
  // Filters from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  const marcaFiltro = urlParams.get('marca');
  const catFiltro = urlParams.get('cat');
  const subFiltro = urlParams.get('sub');

  if (marcaFiltro) {
    const marcaUpper = marcaFiltro.toUpperCase();
    products = products.filter(p => p.nombre.toUpperCase().startsWith(marcaUpper));

    const sidebar = document.getElementById('filters-sidebar');
    if (sidebar && marcaUpper === 'IRISS') {
      sidebar.style.display = 'none';
    }
  }

  if (catFiltro) {
    if (catFiltro === 'ventanas') {
      products = products.filter(p => p.id.includes('iriss') || p.id.includes('ventana'));
      const sidebar = document.getElementById('filters-sidebar');
      if (sidebar) sidebar.style.display = 'none';
    } else if (catFiltro === 'termograficas') {
      products = products.filter(p => {
        const id = p.id.toLowerCase();
        return !id.includes('-td') && !id.includes('-mu') && !id.includes('acustica') && !id.includes('iriss');
      });
    } else if (catFiltro === 'acusticas') {
      products = products.filter(p => p.id.includes('-td') || p.id.includes('-mu') || p.id.includes('acustica'));
    }
  }

  if (subFiltro) {
    products = products.filter(p => {
      const sub = (p.subcategoria && p.subcategoria.es) ? p.subcategoria.es.toLowerCase() : '';
      if (subFiltro === 'portatiles') return sub.includes('portátil') || sub.includes('ligero');
      if (subFiltro === 'mantenimiento') return sub.includes('mantenimiento');
      if (subFiltro === 'avanzado') return sub.includes('avanzado');
      if (subFiltro === 'fijo') return sub.includes('fijo');
      if (subFiltro === 'id') return sub.includes('investigación') || sub.includes('desarrollo');
      if (subFiltro === 'fugas') return sub.includes('fugas') || sub.includes('descargas');
      return true;
    });
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
  // Dynamic Sidebar Filtering
  const availableTipos = new Set();
  const availableRes = new Set();
  const availableGamas = new Set();

  products.forEach(p => {
      // Tipo
      const id = p.id.toLowerCase();
      const isAcoustic = id.includes('-td') || id.includes('-mu') || id.includes('acustica') || id.includes('acoustic');
      const isWindow = id.includes('iriss') || id.includes('ventana') || id.includes('window');
      const isThermal = !isAcoustic && !isWindow;
      
      if (isAcoustic) availableTipos.add('Acústica');
      if (isWindow) availableTipos.add('Ventana');
      if (isThermal) availableTipos.add('Térmica');

      // Resolucion
      if (p.especificaciones) {
          const resSpec = p.especificaciones.find(e => e.etiqueta && (e.etiqueta.es.includes('Resoluci') || e.etiqueta.en === 'Infrared resolution'));
          if (resSpec && resSpec.valor) {
              const resVal = resSpec.valor.es || resSpec.valor;
              if (resVal.includes('1280x1024')) availableRes.add('1280x1024');
              if (resVal.includes('640x480')) availableRes.add('640x480');
              if (resVal.includes('384x288')) availableRes.add('384x288');
              if (resVal.includes('320x240')) availableRes.add('320x240');
              if (resVal.includes('240x320')) availableRes.add('240x320');
              if (resVal.includes('160x120')) availableRes.add('160x120');
          }
      }

      // Gama
      if (p.gama) {
          const gamaStr = (p.gama.es || '').toLowerCase();
          if (gamaStr.includes('tf')) availableGamas.add('Serie TF');
          else if (gamaStr.includes(' c') || gamaStr === 'serie c') availableGamas.add('Serie C');
          else if (gamaStr.includes('ti')) availableGamas.add('Serie Ti');
          else if (gamaStr.includes('tp')) availableGamas.add('Serie TP');
          else if (gamaStr.includes('tk')) availableGamas.add('Serie TK');
          else if (gamaStr.includes('mix')) availableGamas.add('MiX');
          else if (gamaStr.includes('v') && !gamaStr.includes('mix')) availableGamas.add('Serie V');
          else if (gamaStr.includes('p') && !gamaStr.includes('tp') && !gamaStr.includes('mix')) availableGamas.add('Serie P');
          else if (gamaStr.includes('600')) availableGamas.add('Serie 600');
          else if (gamaStr.includes('td')) availableGamas.add('Serie TD');
          else if (gamaStr.includes('h') || gamaStr.includes('flex')) availableGamas.add('Serie H');
      }
  });

  const labels = document.querySelectorAll('#filters-sidebar label');
  labels.forEach(label => {
      const input = label.querySelector('input');
      if (!input) return;
      const val = input.value;
      
      let shouldShow = false;
      if (input.classList.contains('filter-tipo')) {
          if (availableTipos.has(val)) shouldShow = true;
      } else if (input.classList.contains('filter-resolucion')) {
          if (availableRes.has(val)) shouldShow = true;
      } else if (input.classList.contains('filter-gama')) {
          if (availableGamas.has(val)) shouldShow = true;
      }

      if (!shouldShow) {
          label.style.display = 'none';
      }
  });

  // Hide empty blocks
  ['.filter-tipo', '.filter-resolucion', '.filter-gama'].forEach(cls => {
      const inputs = document.querySelectorAll(cls);
      let anyVisible = false;
      inputs.forEach(input => {
          if (input.closest('label').style.display !== 'none') anyVisible = true;
      });
      if (!anyVisible && inputs.length > 0) {
          const block = inputs[0].closest('.mb-8');
          if (block) block.style.display = 'none';
      }
  });
  // Update sidebar visibility based on category
  if (catFiltro) {
      const labels = document.querySelectorAll('#filters-sidebar label');
      labels.forEach(label => {
          const input = label.querySelector('input');
          if (!input) return;
          const val = input.value;
          let shouldShow = true;
          
          if (catFiltro === 'termograficas') {
              if (val === 'Acústica' || val === 'Acoustic' || val === 'Ventana' || val === 'Window') shouldShow = false;
              if (val.includes('TD') || val.includes('H Series') || val === 'Serie H' || val.includes('MiX')) shouldShow = false;
          } else if (catFiltro === 'acusticas') {
              if (val === 'Térmica' || val === 'Thermal' || val === 'Ventana' || val === 'Window') shouldShow = false;
              if (input.classList.contains('filter-resolucion')) shouldShow = false;
              const thermalSeries = ['Serie TF', 'TF Series', 'Serie C', 'C Series', 'Serie Ti', 'Ti Series', 'Serie TP', 'TP Series', 'Serie TK', 'TK Series', 'Serie P', 'P Series', 'Serie 600', '600 Series', 'Serie V', 'V Series'];
              if (thermalSeries.includes(val)) shouldShow = false;
          }
          
          if (!shouldShow) {
              label.style.display = 'none';
          }
      });
      
      // Also hide empty filter sections
      if (catFiltro === 'acusticas') {
          const resBlock = document.querySelector('.filter-resolucion');
          if (resBlock) {
             const parentDiv = resBlock.closest('.mb-8');
             if (parentDiv) parentDiv.style.display = 'none';
          }
      }
  }
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
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = products.filter(p => {
      // Filter by tipo (Térmica / Acústica / Ventana)
      let matchTipo = true;
      if (selectedTipo.length > 0) {
        const id = p.id.toLowerCase();
        
        // Use ID for robust matching regardless of encoding
        const isAcoustic = id.includes('-td') || id.includes('-mu') || id.includes('acustica') || id.includes('acoustic');
        const isWindow = id.includes('iriss') || id.includes('ventana') || id.includes('window');
        const isThermal = !isAcoustic && !isWindow; 
        
        const checkAcoustic = selectedTipo.includes('Acústica') || selectedTipo.includes('Acoustic');
        const checkThermal = selectedTipo.includes('Térmica') || selectedTipo.includes('Thermal');
        const checkWindow = selectedTipo.includes('Ventana') || selectedTipo.includes('Window');

        matchTipo = (checkAcoustic && isAcoustic) || (checkThermal && isThermal) || (checkWindow && isWindow);
      }

      // Filter by resolucion
      let matchRes = true;
      if (selectedRes.length > 0) {
        const resSpec = p.especificaciones.find(s => {
          const lbl = getText(s.etiqueta, 'es') || '';
          return lbl.toLowerCase().includes('resoluci') || lbl.toLowerCase().includes('resoluci');
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

            // Filter by Search term
      let matchSearch = true;
      if (searchTerm) {
        const pNombre = p.nombre.toLowerCase();
        const pGama2 = (getText(p.gama, lang) || '') + ' ' + (getText(p.gama, 'es') || '');
        const pApps = (getText(p.aplicaciones, lang) || '');
        matchSearch = pNombre.includes(searchTerm) || pGama2.toLowerCase().includes(searchTerm) || pApps.toLowerCase().includes(searchTerm);
      }

      return matchTipo && matchRes && matchGama && matchSearch;
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
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.addEventListener('input', applyFilters);
}


