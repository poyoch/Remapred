document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang || 'es';
  const products = window.fotricProducts || [];
  
  // Parse URL to get the product ID
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  const container = document.getElementById('single-product-container');
  if (!container) return;

  const product = products.find(p => p.id === productId);

  if (!product) {
    // Show not found
    container.innerHTML = `
      <div class="text-center py-16">
        <i class="fa-solid fa-triangle-exclamation text-6xl text-slate-300 mb-6"></i>
        <h2 class="text-2xl font-bold text-slate-800 mb-4">Producto no encontrado</h2>
        <p class="text-slate-600 mb-8">El producto que buscas no existe o ha sido eliminado.</p>
        <a href="productos.html" class="inline-block bg-primary text-white font-medium py-3 px-8 rounded hover:bg-slate-700 transition-colors">
            Volver al catálogo
        </a>
      </div>
    `;
    
    // Update banner title
    const bannerTitle = document.getElementById('product-banner-title');
    if (bannerTitle) bannerTitle.textContent = "Producto No Encontrado";
    return;
  }

  function getText(field, lang) {
    if (!field) return null;
    if (typeof field === 'string') return field;
    return field[lang] || field['es'] || '';
  }

  // Extract properties
  const nombre = product.nombre;
  const gama = getText(product.gama, lang);
  const aplicaciones = getText(product.aplicaciones, lang);
  const urlFabricante = product.urlFabricante;

  // Update page title and banner title
  document.title = `${nombre} - REMAPRED`;
  const bannerTitle = document.getElementById('product-banner-title');
  if (bannerTitle) bannerTitle.textContent = nombre;

  // Specs rows
  const availableSpecs = product.especificaciones.filter(s => s.valor !== null);
  const specsHtml = availableSpecs.map((spec, idx) => {
    const isAlternate = idx % 2 !== 0;
    return `
      <div class="flex flex-col sm:flex-row py-3 px-4 ${isAlternate ? 'bg-slate-50 rounded' : ''}">
        <span class="w-full sm:w-1/3 font-semibold text-slate-700 mb-1 sm:mb-0">${getText(spec.etiqueta, lang)}</span>
        <span class="w-full sm:w-2/3 text-slate-600">${getText(spec.valor, lang)}</span>
      </div>
    `;
  }).join('');

  // Benefits
  const beneficiosHtml = product.beneficios.map(b => {
    const text = getText(b, lang);
    return `<li class="flex items-start text-slate-700 mb-2">
              <i class="fa-solid fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
              <span class="leading-relaxed">${text}</span>
            </li>`;
  }).join('');

  // Render HTML
  container.innerHTML = `
    <div class="flex flex-col lg:flex-row gap-10">
      
      <!-- Left: Image -->
      <div class="w-full lg:w-5/12">
        <div class="sticky top-28">
          <!-- Main Image -->
          <div class="bg-slate-50 border border-slate-100 rounded-lg p-8 flex items-center justify-center mb-4 h-96">
            <img id="main-product-image" src="${product.imagen}" alt="${nombre}" 
                 onerror="this.src='img/productos/placeholder.svg'"
                 class="max-h-full max-w-full object-contain mix-blend-multiply transition-opacity duration-300 ${product.cssScale || ''}">
          </div>
          
          <!-- Thumbnails (Only show if there is more than 1 image) -->
          ${product.imagenes && product.imagenes.length > 1 ? `
            <div class="flex gap-4 overflow-x-auto pb-2">
              ${product.imagenes.map((imgSrc, idx) => `
                <button onclick="document.getElementById('main-product-image').src='${imgSrc}'" class="h-20 w-20 flex-shrink-0 bg-slate-50 border border-slate-200 rounded-lg p-2 hover:border-primary focus:outline-none focus:ring-2 focus:ring-accent transition-colors">
                  <img src="${imgSrc}" alt="${nombre} vista ${idx+1}" class="w-full h-full object-contain mix-blend-multiply">
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
      
      <!-- Right: Details -->
      <div class="w-full lg:w-7/12 flex flex-col">
        
        <div class="mb-4">
          <div class="flex items-center justify-between mb-4">
            <span class="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm">${gama}</span>
            ${nombre.toUpperCase().includes('FOTRIC') ? '<img src="img/fotric-logo.png" alt="FOTRIC" class="h-12 object-contain">' : ''}
            ${nombre.toUpperCase().includes('IRISS') ? '<img src="img/iriss-logo.svg" alt="IRISS" class="h-12 object-contain">' : ''}
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight">${nombre}</h2>
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <span class="text-amber-800 font-bold flex items-center text-sm md:text-base">
              <i class="fa-solid fa-file-invoice-dollar mr-2 text-accent text-lg"></i>
              ${lang === 'en' ? 'Price upon request' : 'Cotización directa a solicitud'}
            </span>
            <p class="text-xs text-slate-600 mt-1">
              ${lang === 'en' ? 'Contact us via WhatsApp or email to receive a personalized quotation.' : 'Contáctenos por WhatsApp o correo electrónico para recibir una cotización personalizada.'}
            </p>
          </div>
        </div>
        
        <hr class="border-slate-200 my-8">
        
        <!-- Specifications -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <i class="fa-solid fa-list-check text-primary mr-3"></i> Especificaciones Técnicas
          </h3>
          <div class="border border-slate-200 rounded-lg overflow-hidden">
            ${specsHtml}
          </div>
        </div>
        
        <!-- Applications -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-slate-800 mb-4 flex items-center">
            <i class="fa-solid fa-briefcase text-primary mr-3"></i> ${lang === 'en' ? 'Recommended Applications' : 'Aplicaciones Recomendadas'}
          </h3>
          <p class="text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-lg border border-slate-100">${aplicaciones}</p>
        </div>
        
        <!-- Benefits -->
        <div class="mb-10">
          <h3 class="text-xl font-bold text-slate-800 mb-4 flex items-center">
            <i class="fa-solid fa-star text-primary mr-3"></i> ${lang === 'en' ? 'Key Benefits' : 'Beneficios Clave'}
          </h3>
          <ul class="space-y-2 ml-1">
            ${beneficiosHtml}
          </ul>
        </div>
        
        
        <!-- Downloads -->
        ${product.descargas && product.descargas.length > 0 ? `
        <div class="mb-10">
          <h3 class="text-xl font-bold text-slate-800 mb-4 flex items-center">
            <i class="fa-solid fa-download text-primary mr-3"></i> ${lang === 'en' ? 'Downloads and Manuals' : 'Descargas y Manuales'}
          </h3>
          <div class="flex flex-col gap-3">
            ${product.descargas.map(d => `
              <a href="${d.url}" target="_blank" class="flex items-center p-4 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 hover:border-primary transition-colors">
                <i class="fa-regular fa-file-pdf text-red-500 text-2xl mr-4"></i>
                <span class="font-semibold text-slate-700">${getText(d.titulo, lang)}</span>
                <i class="fa-solid fa-arrow-down ml-auto text-slate-400"></i>
              </a>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <!-- Action Buttons -->
        <div class="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/51989171589?text=${encodeURIComponent(lang === 'en' ? 'Hello, I would like to request a quote for model ' + nombre : 'Hola, deseo cotizar el modelo ' + nombre)}" target="_blank" class="flex-1 text-center bg-[#25D366] text-white font-bold py-3.5 px-5 rounded-lg hover:bg-[#1ebe57] transition-all flex items-center justify-center shadow-md hover-lift">
            <i class="fa-brands fa-whatsapp text-xl mr-2"></i> ${lang === 'en' ? 'Quote via WhatsApp' : 'Cotizar por WhatsApp'}
          </a>
          <a href="mailto:ventas@remapred.com?subject=${encodeURIComponent(lang === 'en' ? 'Quote Request - Model ' + nombre : 'Cotización Modelo ' + nombre)}&body=${encodeURIComponent(lang === 'en' ? 'Hello, I would like to request a quote for model ' + nombre + '.' : 'Hola, deseo cotizar el modelo ' + nombre + '.')}" class="flex-1 text-center bg-accent text-white font-bold py-3.5 px-5 rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center shadow-md hover-lift">
            <i class="fa-solid fa-envelope mr-2"></i> ${lang === 'en' ? 'Quote via Email' : 'Cotizar por Correo'}
          </a>
        </div>

      </div>
    </div>
    
    
    <!-- FAQs Section -->
    ${product.faqs && product.faqs.length > 0 ? `
    <div class="mt-16 border-t border-slate-200 pt-12 max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold text-slate-800 mb-8 text-center">${lang === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}</h3>
      <div class="space-y-4">
        ${product.faqs.map((faq, idx) => `
          <details class="group border border-slate-200 rounded-lg bg-white overflow-hidden">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-800 hover:bg-slate-50 transition-colors">
              <span class="font-bold">${getText(faq.q, lang)}</span>
              <span class="transition group-open:rotate-180">
                <i class="fa-solid fa-chevron-down text-slate-400"></i>
              </span>
            </summary>
            <div class="text-slate-600 p-5 pt-0 leading-relaxed border-t border-slate-100 bg-slate-50">
              ${getText(faq.a, lang)}
            </div>
          </details>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- Recommended Products -->
    <div class="mt-20 border-t border-slate-200 pt-12">
      <h3 class="text-2xl font-bold text-slate-800 mb-8 text-center">${lang === 'en' ? 'Other cameras you might like' : 'Otras cámaras que podrían interesarte'}</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${
          products.filter(p => p.id !== productId).slice(0, 3).map(p => `
            <a href="producto${lang === 'en' ? '-en' : ''}.html?id=${p.id}" class="block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-xl transition-shadow hover-lift">
              <div class="h-32 w-full flex items-center justify-center mb-4">
                <img src="${p.imagen}" alt="${p.nombre}" onerror="this.src='img/productos/placeholder.svg'" class="max-h-full object-contain mix-blend-multiply">
              </div>
              <div class="text-center">
                <span class="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded mb-2">${getText(p.gama, lang)}</span>
                <h4 class="font-bold text-primary mb-1">${p.nombre}</h4>
                <span class="text-xs font-semibold text-accent flex items-center justify-center gap-1 mt-1">
                  <i class="fa-solid fa-file-invoice-dollar"></i> ${lang === 'en' ? 'Quote upon request' : 'Cotización a solicitud'}
                </span>
              </div>
            </a>
          `).join('')
        }
      </div>
    </div>
  `;
});





