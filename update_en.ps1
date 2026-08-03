# 1. Update js/render-products.js with UI translations
$content = Get-Content '.\js\render-products.js' -Raw -Encoding UTF8

$content = $content.Replace('Ver Detalles', '${lang === ''en'' ? ''View Details'' : ''Ver Detalles''}')
$content = $content.Replace('No se encontraron productos con estos filtros.', '${lang === ''en'' ? ''No products found with these filters.'' : ''No se encontraron productos con estos filtros.''}')
$content = $content.Replace('Gama', '${lang === ''en'' ? ''Tier'' : ''Gama''}')
$content = $content.Replace('Precio', '${lang === ''en'' ? ''Price'' : ''Precio''}')
$content = $content.Replace('<th scope="col" class="px-4 py-4 w-48 font-bold">Especificación</th>', '<th scope="col" class="px-4 py-4 w-48 font-bold">${lang === ''en'' ? ''Specification'' : ''Especificación''}</th>')

Set-Content -Path '.\js\render-products.js' -Value $content -Encoding UTF8

# 2. Update js/render-producto.js with UI translations
$content = Get-Content '.\js\render-producto.js' -Raw -Encoding UTF8

$content = $content.Replace('* Precios de lista, no incluyen impuestos ni envío.', '${lang === ''en'' ? ''* List prices, do not include taxes or shipping.'' : ''* Precios de lista, no incluyen impuestos ni envío.''}')
$content = $content.Replace('Especificaciones Técnicas', '${lang === ''en'' ? ''Technical Specifications'' : ''Especificaciones Técnicas''}')
$content = $content.Replace('Aplicaciones Recomendadas', '${lang === ''en'' ? ''Recommended Applications'' : ''Aplicaciones Recomendadas''}')
$content = $content.Replace('Beneficios Clave', '${lang === ''en'' ? ''Key Benefits'' : ''Beneficios Clave''}')
$content = $content.Replace('Descargas y Manuales', '${lang === ''en'' ? ''Downloads and Manuals'' : ''Descargas y Manuales''}')
$content = $content.Replace('Preguntas Frecuentes', '${lang === ''en'' ? ''Frequently Asked Questions'' : ''Preguntas Frecuentes''}')
$content = $content.Replace('Otras cámaras que podrían interesarte', '${lang === ''en'' ? ''Other cameras you might like'' : ''Otras cámaras que podrían interesarte''}')
$content = $content.Replace('Cotízame', '${lang === ''en'' ? ''Quote me'' : ''Cotízame''}')

Set-Content -Path '.\js\render-producto.js' -Value $content -Encoding UTF8

# 3. Create productos-en.html by copying from productos.html and translating HTML
$html = Get-Content '.\productos.html' -Raw -Encoding UTF8

$html = $html.Replace('<html lang="es">', '<html lang="en">')
$html = $html.Replace('<title>Productos - REMAPRED</title>', '<title>Products - REMAPRED</title>')
$html = $html.Replace('>Inicio<', '>Home<')
$html = $html.Replace('>Productos<', '>Products<')
$html = $html.Replace('>Servicios<', '>Services<')
$html = $html.Replace('>Sobre Nosotros<', '>About Us<')
$html = $html.Replace('>Contacto<', '>Contact<')
$html = $html.Replace('>Filtrar Por<', '>Filter By<')
$html = $html.Replace('>Resolución<', '>Resolution<')
$html = $html.Replace('>Gama<', '>Tier<')
$html = $html.Replace('>Entrada<', '>Entry<')
$html = $html.Replace('value="Entrada"', 'value="Entry"')
$html = $html.Replace('>Media<', '>Mid-range<')
$html = $html.Replace('value="Media"', 'value="Mid-range"')
$html = $html.Replace('>Profesional<', '>Professional<')
$html = $html.Replace('value="Profesional"', 'value="Professional"')
$html = $html.Replace('Todos los derechos reservados', 'All rights reserved')
$html = $html.Replace('Términos y Condiciones', 'Terms and Conditions')
$html = $html.Replace('Política de Privacidad', 'Privacy Policy')

# Also change the language dropdown active states
# In productos.html it is: 
# <a href="productos-en.html" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-accent">EN</a>
# <a href="productos.html" class="block px-4 py-2 text-sm text-accent hover:bg-slate-50">ES</a>
# We reverse the accent class for the EN page
$html = $html.Replace('text-accent hover:bg-slate-50">ES', 'text-slate-700 hover:bg-slate-50 hover:text-accent">ES')
$html = $html.Replace('hover:text-accent">EN', '">EN') # intermediate
$html = $html.Replace('text-slate-700 hover:bg-slate-50 ">EN', 'text-accent hover:bg-slate-50">EN')
$html = $html.Replace('ES <i', 'EN <i')

Set-Content -Path '.\productos-en.html' -Value $html -Encoding UTF8
