$content = Get-Content '.\js\render-products.js' -Raw -Encoding UTF8

# We want to simplify the product card in the catalog.
# Current template has: <div class="mb-4">...Especificaciones Clave...</div>, Aplicaciones, Beneficios.
# Let's replace the whole card innerHTML assignment.

$searchStr = 'card.innerHTML = `
      <div class="product-img-wrapper h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded">
          <img src="${product.imagen}" alt="${nombre}" 
               onerror="this.src=''img/productos/placeholder.svg''"
               class="max-h-full object-contain mix-blend-multiply">
      </div>
      <div class="flex-grow flex flex-col">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-primary text-lg leading-tight">${nombre}</h3>
            <span class="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap ml-2">${gama}</span>
          </div>
          <p class="font-bold text-xl text-accent mb-4">${precio}</p>
          
          <div class="mb-4">
            <h4 class="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Especificaciones Clave</h4>
            <ul class="mb-4">
              ${topSpecsHtml}
            </ul>
          </div>
          
          <div class="mb-4">
            <h4 class="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Aplicaciones</h4>
            <p class="text-xs text-slate-600 leading-relaxed">${aplicaciones}</p>
          </div>

          <div class="mb-6 flex-grow">
            <h4 class="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Beneficios</h4>
            <ul class="space-y-1">
              ${beneficiosHtml}
            </ul>
          </div>
      </div>
      <a href="producto.html?id=${product.id}" class="w-full text-center bg-primary text-white font-medium py-2.5 rounded hover:bg-slate-700 transition-colors mt-auto inline-block">
          Ver Detalles
      </a>
    `;'

# Notice the single quotes used above to escape PowerShell string literal if needed, but we used single quote for string, so double quotes inside are literal.
# Wait, the original has onerror="this.src='img/productos/placeholder.svg'". So my search string has '' which evaluates to ' in powershell single string.

$replaceStr = '
    // Limit specs to 3 for catalog
    const catalogSpecsHtml = availableSpecs.slice(0, 3).map(spec => {
      return `<li class="text-xs text-slate-500 mb-1">
                <span class="font-semibold">${getText(spec.etiqueta, lang)}:</span> ${getText(spec.valor, lang)}
              </li>`;
    }).join("");

    card.innerHTML = `
      <div class="product-img-wrapper h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded">
          <img src="${product.imagen}" alt="${nombre}" 
               onerror="this.src=''img/productos/placeholder.svg''"
               class="max-h-full object-contain mix-blend-multiply">
      </div>
      <div class="flex-grow flex flex-col">
          <div class="flex flex-col mb-2">
            <span class="inline-block bg-accent/10 text-accent text-[10px] font-bold px-2 py-1 rounded w-max mb-2">${gama}</span>
            <h3 class="font-bold text-primary text-lg leading-tight">${nombre}</h3>
          </div>
          
          <ul class="mb-4 mt-2 border-l-2 border-slate-200 pl-3">
            ${catalogSpecsHtml}
          </ul>
          
          <div class="mt-auto pt-4">
            <p class="font-bold text-xl text-primary mb-4">${precio}</p>
            <a href="producto.html?id=${product.id}" class="w-full text-center bg-accent text-white font-bold py-2.5 rounded hover:bg-orange-600 transition-colors inline-block hover-lift">
                Ver Detalles
            </a>
          </div>
      </div>
    `;'

$content = $content.Replace($searchStr, $replaceStr)
Set-Content -Path '.\js\render-products.js' -Value $content -Encoding UTF8
