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

function createBrandCarousel(marca, lang) {
  const isEn = lang === 'en';
  let images = [];
  let bgGradient = '';
  let logoHtml = '';
  let titleHtml = '';
  
  if (marca === 'FOTRIC') {
      images = [
          { src: 'img/productos/banner1.jpg', title: 'Soluciones FOTRIC' },
          { src: 'img/productos/banner2.avif', title: 'Innovación Termográfica' },
          { src: 'img/productos/fotric-tp320a-dispositivo.png', title: 'Serie TP300' }
      ];
      bgGradient = 'bg-white border-b border-slate-200';
      logoHtml = '<img src="img/fotric-logo.png" alt="FOTRIC" class="h-10 md:h-14 object-contain">';
      titleHtml = `<h2 class="text-3xl md:text-5xl font-bold text-primary mt-4">${isEn ? 'Strategic Partner of FOTRIC' : 'Aliado Estratégico de FOTRIC'}</h2>
                   <p class="text-slate-500 mt-4 text-base md:text-lg">${isEn ? 'Advanced Thermography Solutions' : 'Soluciones Avanzadas en Termografía'}</p>`;
  } else if (marca === 'IRISS') {
      images = [
          { src: 'img/productos/banner3.avif', title: 'Seguridad Industrial IRISS' },
          { src: 'img/productos/banner4.png', title: 'Ventanas de Inspección' },
          { src: 'img/productos/iriss-vpt-50.jpg', title: 'VPT-50' }
      ];
      bgGradient = 'bg-white border-b border-slate-200';
      logoHtml = '<img src="img/iriss-logo.svg" alt="IRISS" class="h-10 md:h-14 object-contain">';
      titleHtml = `<h2 class="text-3xl md:text-5xl font-bold text-primary mt-4">${isEn ? 'Strategic Partner of IRISS' : 'Aliado Estratégico de IRISS'}</h2>
                   <p class="text-slate-500 mt-4 text-base md:text-lg">${isEn ? 'Safety and Inspection Windows' : 'Ventanas de Inspección Infrarroja y Seguridad'}</p>`;
  } else {
      return null;
  }

  const wrapper = document.createElement('div');
  wrapper.className = `w-full h-[500px] overflow-hidden flex flex-col md:flex-row items-stretch ${bgGradient}`;
  
  // Text Side
  const textSide = document.createElement('div');
  textSide.className = "w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50";
  textSide.innerHTML = `
      <div class="inline-block">${logoHtml}</div>
      ${titleHtml}
  `;
  wrapper.appendChild(textSide);

  // Carousel Side
  const carouselSide = document.createElement('div');
  carouselSide.className = "w-full md:w-1/2 h-full relative overflow-hidden group bg-slate-100";

  
  const slidesContainer = document.createElement('div');
  slidesContainer.className = "w-full h-full relative transition-transform duration-700 ease-in-out flex";
  
  let slidesHtml = '';
  images.forEach((img, index) => {
      slidesHtml += `
          <div class="w-full h-full flex-shrink-0 relative flex items-center justify-center">
              <img src="${img.src}" alt="${img.title}" class="w-full h-full object-cover mix-blend-multiply opacity-90" onerror="this.src='img/productos/placeholder.svg'">
              <div class="absolute bottom-6 bg-white/90 backdrop-blur border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  ${img.title}
              </div>
          </div>
      `;
  });
  slidesContainer.innerHTML = slidesHtml;
  carouselSide.appendChild(slidesContainer);

  // Controls
  const prevBtn = document.createElement('button');
  prevBtn.className = "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white border border-slate-200 shadow-md rounded-full text-slate-600 hover:text-accent flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 focus:outline-none";
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  
  const nextBtn = document.createElement('button');
  nextBtn.className = "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white border border-slate-200 shadow-md rounded-full text-slate-600 hover:text-accent flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 focus:outline-none";
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

  // Indicators
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20";
  let indicatorsHtml = '';
  images.forEach((_, i) => {
      indicatorsHtml += `<button class="w-2.5 h-2.5 rounded-full transition-all border border-slate-300 ${i === 0 ? 'bg-accent border-accent w-6' : 'bg-white hover:bg-slate-200'}" data-slide="${i}"></button>`;
  });
  indicatorsContainer.innerHTML = indicatorsHtml;

  carouselSide.appendChild(prevBtn);
  carouselSide.appendChild(nextBtn);
  carouselSide.appendChild(indicatorsContainer);
  wrapper.appendChild(carouselSide);

  // Logic
  let currentSlide = 0;
  const totalSlides = images.length;
  let autoPlayInterval;

  const updateSlide = () => {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      const dots = indicatorsContainer.querySelectorAll('button');
      dots.forEach((dot, i) => {
          if (i === currentSlide) {
              dot.className = "w-6 h-2.5 rounded-full transition-all bg-accent border border-accent";
          } else {
              dot.className = "w-2.5 h-2.5 rounded-full transition-all bg-white border border-slate-300 hover:bg-slate-200";
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
      autoPlayInterval = setInterval(nextSlide, 4500);
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

