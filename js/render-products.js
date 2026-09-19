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
    if (marcaFiltro) {
      const marcaUpper = marcaFiltro.toUpperCase();
      
      const sidebar = document.getElementById('filters-sidebar');
      if (sidebar) sidebar.style.display = 'none';

      const carouselEl = createBrandCarousel(marcaUpper, lang);
      if (carouselEl) {
         const mainEl = document.querySelector('main');
         if (mainEl && mainEl.parentNode) {
             mainEl.parentNode.insertBefore(carouselEl, mainEl);
         } else {
             container.parentNode.insertBefore(carouselEl, container);
         }
      }
    }

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

function createBrandCarousel(marca, lang) {
  const isEn = lang === 'en';
  let images = [];
  
  const logoSrc = marca === 'FOTRIC' ? 'img/fotric-logo.png' : 'img/iriss-logo.svg';

  if (marca === 'FOTRIC') {
      images = [
          {
             src: 'img/marcas/fotric_hero_1_1789699620251.jpg',
             title: isEn ? 'Strategic Partner of FOTRIC' : 'Aliado Estratégico de FOTRIC',
             subtitle: isEn ? 'Advanced Thermography Solutions' : 'Soluciones Avanzadas en Termografía',
             justify: 'justify-start',
             gradient: 'bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent'
          },
          {
             src: 'img/marcas/fotric_hero_2_1789699754997.jpg',
             title: isEn ? 'Precision and Reliability' : 'Precisión y Confiabilidad',
             subtitle: isEn ? 'High-end diagnostics for industry' : 'Diagnósticos de alta gama para la industria',
             justify: 'justify-center',
             gradient: 'bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40'
          },
          {
             src: 'img/marcas/fotric_hero_3_1789699765199.jpg',
             title: isEn ? 'Smart Manufacturing' : 'Manufactura Inteligente',
             subtitle: isEn ? 'Automated inspection systems' : 'Sistemas de inspección automatizados',
             justify: 'justify-end',
             gradient: 'bg-gradient-to-l from-slate-900/90 via-slate-900/50 to-transparent'
          }
      ];
  } else if (marca === 'IRISS') {
      images = [
          {
             src: 'img/marcas/iriss_hero_1_1789699801381.jpg',
             title: isEn ? 'Strategic Partner of IRISS' : 'Aliado Estratégico de IRISS',
             subtitle: isEn ? 'Safety and Inspection Windows' : 'Ventanas de Inspección Infrarroja y Seguridad',
             justify: 'justify-start',
             gradient: 'bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent'
          },
          {
             src: 'img/marcas/iriss_hero_2_1789699819790.jpg',
             title: isEn ? 'Uncompromised Safety' : 'Seguridad Sin Compromisos',
             subtitle: isEn ? 'Monitor critical systems securely' : 'Monitorea sistemas críticos de forma segura',
             justify: 'justify-center',
             gradient: 'bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40'
          },
          {
             src: 'img/marcas/iriss_hero_3_1789699830961.jpg',
             title: isEn ? 'Continuous Monitoring' : 'Monitoreo Continuo',
             subtitle: isEn ? 'Prevent failures before they happen' : 'Prevén fallas antes de que ocurran',
             justify: 'justify-end',
             gradient: 'bg-gradient-to-l from-slate-900/90 via-slate-900/50 to-transparent'
          }
      ];
  } else {
      return null;
  }

  const wrapper = document.createElement('div');
  wrapper.className = `w-full h-[65vh] min-h-[500px] max-h-[800px] relative overflow-hidden group bg-black mb-12 shadow-xl`;
  
  // Carousel Images
  const slidesContainer = document.createElement('div');
  slidesContainer.className = "absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out flex";
  
  let slidesHtml = '';
  images.forEach((img) => {
      let alignClass = 'items-start text-left';
      if (img.justify === 'justify-center') alignClass = 'items-center text-center';
      if (img.justify === 'justify-end') alignClass = 'items-end text-right';

      slidesHtml += `
          <div class="w-full h-full flex-shrink-0 relative">
              <img src="${img.src}" class="w-full h-full object-cover">
              <div class="absolute inset-0 ${img.gradient}"></div>
              
              <div class="absolute inset-0 flex items-center pointer-events-none z-10">
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex ${img.justify}">
                      <div class="max-w-3xl flex flex-col ${alignClass}">
                          <div class="bg-white p-3 md:p-4 rounded-xl shadow-2xl mb-6 inline-flex items-center justify-center">
                              <img src="${logoSrc}" alt="${marca}" class="h-10 md:h-14 object-contain">
                          </div>
                          <h2 class="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">${img.title}</h2>
                          <p class="text-slate-200 mt-4 text-lg md:text-2xl font-light drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">${img.subtitle}</p>
                      </div>
                  </div>
              </div>
          </div>
      `;
  });
  slidesContainer.innerHTML = slidesHtml;
  wrapper.appendChild(slidesContainer);

  // Controls
  const prevBtn = document.createElement('button');
  prevBtn.className = "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 border border-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 focus:outline-none";
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left text-xl"></i>';
  
  const nextBtn = document.createElement('button');
  nextBtn.className = "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/30 border border-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 focus:outline-none";
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right text-xl"></i>';

  // Indicators
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20";
  let indicatorsHtml = '';
  images.forEach((_, i) => {
      indicatorsHtml += `<button class="w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/80'}" data-slide="${i}"></button>`;
  });
  indicatorsContainer.innerHTML = indicatorsHtml;

  wrapper.appendChild(prevBtn);
  wrapper.appendChild(nextBtn);
  wrapper.appendChild(indicatorsContainer);

  // Logic
  let currentSlide = 0;
  const totalSlides = images.length;
  let autoPlayInterval;

  const updateSlide = () => {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      const dots = indicatorsContainer.querySelectorAll('button');
      dots.forEach((dot, i) => {
          if (i === currentSlide) {
              dot.className = "w-8 h-3 rounded-full transition-all bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]";
          } else {
              dot.className = "w-3 h-3 rounded-full transition-all bg-white/40 hover:bg-white/80";
          }
      });
  };

  const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
  };

  const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide();
  };

  const startAutoPlay = () => {
      autoPlayInterval = setInterval(nextSlide, 5000);
  };

  const stopAutoPlay = () => {
      clearInterval(autoPlayInterval);
  };

  nextBtn.addEventListener('click', () => { nextSlide(); stopAutoPlay(); startAutoPlay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); stopAutoPlay(); startAutoPlay(); });
  
  indicatorsContainer.querySelectorAll('button').forEach((dot, i) => {
      dot.addEventListener('click', () => {
          currentSlide = i;
          updateSlide();
          stopAutoPlay();
          startAutoPlay();
      });
  });

  wrapper.addEventListener('mouseenter', stopAutoPlay);
  wrapper.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();

  return wrapper;
}

