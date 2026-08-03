// Capa de datos para productos FOTRIC
// Usamos { es: "...", en: "..." } para soportar i18n más adelante.

const products = [
  {
    id: "fotric-tp320a",
    nombre: "FOTRIC TP320A",
    gama: { es: "Serie Portátil - Uso móvil", en: "Portable Series - Mobile use" },
    precioUSD: 359.99,
    imagen: "img/productos/fotric-tp320a-dispositivo.png",
    imagenes: [
      "img/productos/fotric-tp320a-dispositivo.png",
      "img/productos/fotric-tp320a-android.png",
      "img/productos/fotric-tp320a-kit.png"
    ],
    urlFabricante: "#",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "320x240 (Super Res. 640x480)", en: "320x240 (Super Res. 640x480)" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "<35 mK", en: "<35 mK" } },
      { etiqueta: { es: "Campo de visión (FOV)", en: "Field of view (FOV)" }, valor: { es: "60° x 45°", en: "60° x 45°" } },
      { etiqueta: { es: "Enfoque", en: "Focus" }, valor: { es: "Libre", en: "Free" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 550 °C", en: "-20 °C to 550 °C" } },
      { etiqueta: { es: "Precisión", en: "Accuracy" }, valor: { es: "±2 °C o ±2 %", en: "±2 °C or ±2 %" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: null },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: null },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "Se alimenta del celular (USB-C)", en: "Powered by smartphone (USB-C)" } },
      { etiqueta: { es: "Protección / caída", en: "Protection / drop" }, valor: { es: "IP40 · 1 m", en: "IP40 · 1 m" } },
      { etiqueta: { es: "Peso", en: "Weight" }, valor: { es: "40 g", en: "40 g" } }
    ],
    aplicaciones: { es: "Se conecta directo a un smartphone Android (app FOTRIC Genie): inspección industrial, armarios eléctricos, HVAC doméstico, calefacción de suelo radiante y exploración nocturna al aire libre", en: "Connects directly to an Android smartphone (FOTRIC Genie app): industrial inspection, electrical cabinets, domestic HVAC, underfloor heating, and outdoor night exploration." },
    beneficios: [
      { es: "Plug-and-play, sin batería propia ni tiempo de arranque", en: "Plug-and-play, no internal battery or boot time" },
      { es: "Extremadamente compacta y ligera (40 g)", en: "Extremely compact and lightweight (40 g)" },
      { es: "10 paletas de colores", en: "10 color palettes" },
      { es: "Compatible con el software AnalyzIR Professional para informes", en: "Compatible with AnalyzIR Professional software for reporting" }
    ],
    faqs: [
      { q: { es: "¿Cuál es la resolución infrarroja? ¿Admite superresolución?", en: "What is the infrared resolution? Does it support super resolution?" }, a: { es: "La resolución infrarroja es de 320x240. Admite la función Super Resolution, que mejora la imagen a 640x480 para obtener mayor detalle.", en: "The infrared resolution is 320x240. It supports Super Resolution, which enhances the image to 640x480 for greater detail." } },
      { q: { es: "¿Cuál es el rango y la precisión de la medición de temperatura?", en: "What is the temperature measurement range and accuracy?" }, a: { es: "Rango de temperatura: -20 °C a 550 °C (-4 °F a 1022 °F). Precisión: ±2 °C o ±2 %, lo que sea mayor.", en: "Temperature range: -20 °C to 550 °C (-4 °F to 1022 °F). Accuracy: ±2 °C or ±2 %, whichever is greater." } },
      { q: { es: "¿Qué smartphones son compatibles con el TP320A? ¿Funciona con iOS/iPhones?", en: "Which smartphones are compatible with the TP320A? Does it work with iOS/iPhones?" }, a: { es: "El TP320A está diseñado exclusivamente para dispositivos Android y no es compatible con iPhones de Apple. Requiere Android 12 o superior y OTG activado.", en: "The TP320A is exclusively designed for Android devices and is not compatible with Apple iPhones. It requires Android 12 or higher and OTG enabled." } },
      { q: { es: "¿Puedo usar software de PC para analizar imágenes?", en: "Can I use PC software to analyze images?" }, a: { es: "Sí. El TP320A es compatible con el software Analyz IR Professional.", en: "Yes. The TP320A is compatible with the Analyz IR Professional software." } },
      { q: { es: "¿El TP320A tiene su propia batería? ¿Consume mucha batería de mi teléfono?", en: "Does the TP320A have its own battery? Does it consume a lot of phone battery?" }, a: { es: "El TP320A no tiene batería propia. Se alimenta a través del teléfono mediante USB Tipo-C con un consumo típico de tan solo 0,5 W.", en: "The TP320A does not have its own battery. It is powered by the phone via USB Type-C with a typical consumption of only 0.5 W." } },
      { q: { es: "¿Para qué se puede utilizar el TP320A?", en: "What can the TP320A be used for?" }, a: { es: "Inspección de la vivienda, revisión de HVAC, detección de puntos calientes en paneles eléctricos, y observación de animales de noche.", en: "Home inspection, HVAC checks, hot spot detection in electrical panels, and nighttime animal observation." } }
    ],
    descargas: [
      { titulo: { es: "Guía de Inicio Rápido", en: "Quick Start Guide" }, url: "img/productos/fotric-tp320a-guia-inicio-rapido.pdf" }
    ]
  },
  {
    id: "fotric-tk5",
    nombre: "FOTRIC TK5",
    cssScale: "scale-[1.3]",
    gama: { es: "Serie Baja - Inspección general", en: "Entry Series - General inspection" },
    precioUSD: 709.99,
    imagen: "img/productos/fotric-tk5-frontal.png",
    imagenes: [ "img/productos/fotric-tk5-frontal.png" ],
    urlFabricante: "#",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "320x240", en: "320x240" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "40 mK", en: "40 mK" } },
      { etiqueta: { es: "Campo de visión (FOV)", en: "Field of view (FOV)" }, valor: { es: "49° x 37°", en: "49° x 37°" } },
      { etiqueta: { es: "Enfoque", en: "Focus" }, valor: { es: "Libre", en: "Free" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 450 °C", en: "-20 °C to 450 °C" } },
      { etiqueta: { es: "Precisión", en: "Accuracy" }, valor: { es: "±2 °C o ±2 %", en: "±2 °C or ±2 %" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "5 MP", en: "5 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "Táctil IPS 3,5\"", en: "3.5\" IPS Touchscreen" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "5000 mAh = 5 h", en: "5000 mAh = 5 h" } },
      { etiqueta: { es: "Protección / caída", en: "Protection / drop" }, valor: { es: "IP54 · 2 m", en: "IP54 · 2 m" } },
      { etiqueta: { es: "Peso", en: "Weight" }, valor: { es: "720 g", en: "720 g" } }
    ],
    aplicaciones: { es: "Mantenimiento eléctrico, climatización (HVAC), detección de humedad en edificios e inspecciones de viviendas", en: "Electrical maintenance, HVAC, building moisture detection and home inspections" },
    beneficios: [
      { es: "Detector cerámico de grado profesional", en: "Professional-grade ceramic detector" },
      { es: "4 modos de imagen (IR, T-DEF, imagen en imagen, digital)", en: "4 image modes (IR, T-DEF, picture-in-picture, digital)" },
      { es: "Tecnología TWB", en: "TWB technology" },
      { es: "Resistente al polvo, agua y caídas", en: "Dust, water and drop resistant" },
      { es: "Calificación 4,8/5", en: "Rated 4.8/5" }
    ],
    faqs: [
      { q: { es: "¿Cuál es la resolución infrarroja y el rango de medición de temperatura?", en: "What is the infrared resolution and temperature measurement range?" }, a: { es: "El TK5 cuenta con una resolución infrarroja de 320x240 y mide desde -20 °C hasta 450 °C.", en: "The TK5 has an infrared resolution of 320x240 and measures from -20 °C to 450 °C." } },
      { q: { es: "¿Para qué aplicaciones industriales está diseñado el TK5?", en: "What industrial applications is the TK5 designed for?" }, a: { es: "Mantenimiento eléctrico, climatización de edificios y revisiones mecánicas básicas.", en: "Electrical maintenance, building HVAC, and basic mechanical checks." } },
      { q: { es: "¿Qué modos de imagen están disponibles para ayudar a localizar fallos?", en: "What imaging modes are available to help locate faults?" }, a: { es: "Infrarrojo completo, luz visible, imagen en imagen (PIP) y nuestro modo de fusión T-DEF patentado.", en: "Full infrared, visible light, picture-in-picture (PIP), and our patented T-DEF fusion mode." } },
      { q: { es: "¿Cuánto dura la batería? ¿Se puede reemplazar en el lugar de uso?", en: "How long does the battery last? Can it be replaced in the field?" }, a: { es: "La batería de 5000 mAh dura más de 5 horas y es completamente reemplazable.", en: "The 5000 mAh battery lasts over 5 hours and is fully replaceable." } },
      { q: { es: "¿Puedo analizar imágenes y generar informes profesionales en un PC?", en: "Can I analyze images and generate professional reports on a PC?" }, a: { es: "Sí, usando el puerto USB o tarjeta TF con el software AnalyzIR Professional.", en: "Yes, using the USB port or TF card with AnalyzIR Professional software." } },
      { q: { es: "¿Qué tan resistente es el dispositivo en entornos de campo difíciles?", en: "How rugged is the device in harsh field environments?" }, a: { es: "Tiene clasificación IP54 (polvo y salpicaduras) y soporta caídas de hasta 2 metros.", en: "It has an IP54 rating (dust and splash) and withstands drops of up to 2 meters." } }
    ],
    descargas: [
      { titulo: { es: "Ficha Técnica (Datasheet)", en: "Datasheet" }, url: "img/productos/fotric-tk5-datasheet.pdf" },
      { titulo: { es: "Guía de Inicio Rápido", en: "Quick Start Guide" }, url: "img/productos/fotric-tk5-guia-inicio-rapido.pdf" },
      { titulo: { es: "Manual de Usuario", en: "User Manual" }, url: "img/productos/fotric-tk5-manual-usuario.pdf" }
    ]
  },
  {
    id: "fotric-tk6",
    nombre: "FOTRIC TK6",
    cssScale: "scale-[1.3]",
    gama: { es: "Serie Baja - Inspección general", en: "Entry Series - General inspection" },
    precioUSD: 829.99,
    imagen: "img/productos/fotric-tk6-dos-camaras.png",
    imagenes: [
      "img/productos/fotric-tk6-dos-camaras.png",
      "img/productos/fotric-tk6-lado.png"
    ],
    urlFabricante: "#",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "384x288", en: "384x288" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "40 mK", en: "40 mK" } },
      { etiqueta: { es: "Campo de visión (FOV)", en: "Field of view (FOV)" }, valor: { es: "28° x 21°", en: "28° x 21°" } },
      { etiqueta: { es: "Enfoque", en: "Focus" }, valor: { es: "Libre", en: "Free" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 550 °C", en: "-20 °C to 550 °C" } },
      { etiqueta: { es: "Precisión", en: "Accuracy" }, valor: { es: "±2 °C o ±2 %", en: "±2 °C or ±2 %" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "5 MP", en: "5 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "Táctil IPS 3,5\"", en: "3.5\" IPS Touchscreen" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "5000 mAh = 5 h", en: "5000 mAh = 5 h" } },
      { etiqueta: { es: "Protección / caída", en: "Protection / drop" }, valor: { es: "IP54 · 2 m", en: "IP54 · 2 m" } },
      { etiqueta: { es: "Peso", en: "Weight" }, valor: { es: "720 g", en: "720 g" } }
    ],
    aplicaciones: { es: "Ideal para inspecciones eléctricas donde se necesita mayor resolución y mediciones hasta 550°C", en: "Ideal for electrical inspections where higher resolution and measurements up to 550°C are needed" },
    beneficios: [
      { es: "Resolución superior (384x288) respecto al TK5", en: "Superior resolution (384x288) compared to the TK5" },
      { es: "Mejor detección de detalles a distancia gracias a su FOV de 28°", en: "Better detail detection at a distance thanks to its 28° FOV" },
      { es: "Batería intercambiable", en: "Interchangeable battery" },
      { es: "Alarma inteligente incorporada", en: "Built-in smart alarm" }
    ],
    faqs: [
      { q: { es: "¿Cuáles son las especificaciones de resolución infrarroja y medición de temperatura de la TK6?", en: "What are the infrared resolution and temperature measurement specs of the TK6?" }, a: { es: "La resolución infrarroja es de 384x288. Rango de temperatura: -20 °C a 550 °C. Precisión: ±2 °C o ±2 %.", en: "The infrared resolution is 384x288. Temperature range: -20 °C to 550 °C. Accuracy: ±2 °C or ±2 %." } },
      { q: { es: "¿En qué industrias se utiliza más comúnmente el TK6?", en: "In which industries is the TK6 most commonly used?" }, a: { es: "Sistemas eléctricos, inspección de edificios, mecánica y manufactura.", en: "Electrical systems, building inspection, mechanical, and manufacturing." } },
      { q: { es: "¿El TK6 tiene diferentes modos de imagen?", en: "Does the TK6 have different imaging modes?" }, a: { es: "Sí, incluye imágenes térmicas, luz visible, PIP y fusión térmica patentada (T-DEF).", en: "Yes, it includes thermal imaging, visible light, PIP, and patented thermal fusion (T-DEF)." } },
      { q: { es: "¿Cómo se maneja la autonomía y el reemplazo de la batería?", en: "How is battery autonomy and replacement handled?" }, a: { es: "Tiene una batería de 5000 mAh recargable y fácilmente reemplazable en campo.", en: "It has a 5000 mAh rechargeable battery that is easily field-replaceable." } },
      { q: { es: "¿Se puede utilizar el TK6 para el análisis y la elaboración de informes térmicos?", en: "Can the TK6 be used for thermal analysis and reporting?" }, a: { es: "Sí, es totalmente compatible con el software de análisis de imágenes térmicas AnalyzIR Professional.", en: "Yes, it is fully compatible with AnalyzIR Professional thermal image analysis software." } },
      { q: { es: "¿El dispositivo está diseñado para soportar entornos industriales?", en: "Is the device designed to withstand industrial environments?" }, a: { es: "Sí, cuenta con una clasificación IP54 para resistencia al polvo y al agua.", en: "Yes, it features an IP54 rating for dust and water resistance." } }
    ],
    descargas: [
      { titulo: { es: "Ficha Técnica (Datasheet)", en: "Datasheet" }, url: "img/productos/fotric-tk6-datasheet.pdf" },
      { titulo: { es: "Manual de Usuario", en: "User Manual" }, url: "img/productos/fotric-tk6-manual-usuario.pdf" }
    ]
  },
  {
    id: "fotric-tk7",
    nombre: "FOTRIC TK7",
    cssScale: "scale-[1.1]",
    gama: { es: "Serie Media - Inspecciones especializadas", en: "Mid-range Series - Specialized inspections" },
    precioUSD: 1259.99,
    imagen: "img/productos/fotric-tk7-frontal.png",
    imagenes: [ "img/productos/fotric-tk7-frontal.png" ],
    urlFabricante: "#",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "384x288", en: "384x288" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "40 mK", en: "40 mK" } },
      { etiqueta: { es: "Campo de visión (FOV)", en: "Field of view (FOV)" }, valor: { es: "28° x 21°", en: "28° x 21°" } },
      { etiqueta: { es: "Enfoque", en: "Focus" }, valor: { es: "Manual", en: "Manual" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 650 °C", en: "-20 °C to 650 °C" } },
      { etiqueta: { es: "Precisión", en: "Accuracy" }, valor: { es: "±2 °C o ±2 %", en: "±2 °C or ±2 %" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "8 MP", en: "8 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "Táctil IPS 3,5\"", en: "3.5\" IPS Touchscreen" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "5000 mAh = 5 h", en: "5000 mAh = 5 h" } },
      { etiqueta: { es: "Protección / caída", en: "Protection / drop" }, valor: { es: "IP54 · 2 m", en: "IP54 · 2 m" } },
      { etiqueta: { es: "Peso", en: "Weight" }, valor: { es: "730 g", en: "730 g" } }
    ],
    aplicaciones: { es: "Inspecciones de tableros eléctricos, monitoreo de motores industriales, revisión de equipos de alta temperatura y servicios de consultoría termográfica", en: "Electrical panel inspections, industrial motor monitoring, high-temperature equipment checks, and thermographic consulting services" },
    beneficios: [
      { es: "Rango extendido de temperatura hasta 650 °C", en: "Extended temperature range up to 650 °C" },
      { es: "Enfoque manual para mayor nitidez y control en campo", en: "Manual focus for greater sharpness and field control" },
      { es: "Cámara visual mejorada a 8 MP", en: "Upgraded 8 MP visual camera" },
      { es: "Software superior AnalyzIR", en: "Superior AnalyzIR software" },
      { es: "Función de grabación de video radiométrico", en: "Radiometric video recording feature" }
    ],
    faqs: [
      { q: { es: "¿Cuál es la resolución y la sensibilidad térmica del TK7?", en: "What is the resolution and thermal sensitivity of the TK7?" }, a: { es: "Tiene una resolución infrarroja de 384x288 y una alta sensibilidad térmica (NETD) de 40 mK.", en: "It has an infrared resolution of 384x288 and a high thermal sensitivity (NETD) of 40 mK." } },
      { q: { es: "¿El TK7 es adecuado para inspeccionar equipos de alta temperatura?", en: "Is the TK7 suitable for inspecting high-temperature equipment?" }, a: { es: "Absolutamente. El TK7 mide temperaturas desde -20 °C hasta unos amplios 650 °C.", en: "Absolutely. The TK7 measures temperatures from -20 °C up to a broad 650 °C." } },
      { q: { es: "¿Cómo me ayuda la cámara de luz visible a localizar fallas?", en: "How does the visible light camera help me locate faults?" }, a: { es: "El TK7 integra una potente cámara de luz visible de 8 MP. Esto permite combinar la imagen IR con lo visual.", en: "The TK7 integrates a powerful 8 MP visible light camera, allowing IR images to be blended with the visual spectrum." } },
      { q: { es: "¿Puede el TK7 grabar videos térmicos, no solo imágenes fijas?", en: "Can the TK7 record thermal videos, not just still images?" }, a: { es: "Sí, el dispositivo admite la grabación de video térmico en formato MP4 estándar para monitorear tendencias térmicas dinámicas.", en: "Yes, the device supports thermal video recording in standard MP4 format to monitor dynamic thermal trends." } },
      { q: { es: "¿Es fácil extraer datos e informes del dispositivo?", en: "Is it easy to extract data and reports from the device?" }, a: { es: "Sí. Las transferencias de datos se realizan de manera fluida a través de USB, Wi-Fi o tarjeta SD.", en: "Yes. Data transfers are seamless via USB, Wi-Fi, or SD card." } }
    ],
    descargas: [
      { titulo: { es: "Ficha Técnica (Datasheet)", en: "Datasheet" }, url: "img/productos/fotric-tk7-datasheet.pdf" },
      { titulo: { es: "Manual de Usuario", en: "User Manual" }, url: "img/productos/fotric-tk7-manual-usuario.pdf" }
    ]
  },
  {
    id: "fotric-tk8",
    nombre: "FOTRIC TK8",
    cssScale: "scale-[1.1]",
    gama: { es: "Serie Media - Inspecciones especializadas", en: "Mid-range Series - Specialized inspections" },
    precioUSD: 1489.99,
    imagen: "img/productos/fotric-tk8-frontal.png",
    imagenes: [ "img/productos/fotric-tk8-frontal.png" ],
    urlFabricante: "#",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "384x288", en: "384x288" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "30 mK", en: "30 mK" } },
      { etiqueta: { es: "Campo de visión (FOV)", en: "Field of view (FOV)" }, valor: { es: "28° x 21°", en: "28° x 21°" } },
      { etiqueta: { es: "Enfoque", en: "Focus" }, valor: { es: "Manual", en: "Manual" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 650 °C", en: "-20 °C to 650 °C" } },
      { etiqueta: { es: "Precisión", en: "Accuracy" }, valor: { es: "±2 °C o ±2 %", en: "±2 °C or ±2 %" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "8 MP", en: "8 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "Táctil IPS 3,5\"", en: "3.5\" IPS Touchscreen" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "Hasta 8 h", en: "Up to 8 h" } },
      { etiqueta: { es: "Protección / caída", en: "Protection / drop" }, valor: { es: "IP54 · 2 m", en: "IP54 · 2 m" } },
      { etiqueta: { es: "Peso", en: "Weight" }, valor: { es: "730 g", en: "730 g" } }
    ],
    aplicaciones: { es: "Auditorías energéticas avanzadas, investigación y desarrollo (I+D), y entornos críticos donde diferencias mínimas de temperatura son relevantes", en: "Advanced energy audits, research and development (R&D), and critical environments where minimal temperature differences are relevant" },
    beneficios: [
      { es: "Sensibilidad excepcional de 30 mK (detecta variaciones minúsculas)", en: "Exceptional 30 mK sensitivity (detects minute variations)" },
      { es: "Batería de larga duración (hasta 8 horas continuas)", en: "Long battery life (up to 8 continuous hours)" },
      { es: "Software para análisis radiométrico en vivo", en: "Software for live radiometric analysis" },
      { es: "Conectividad total: Wi-Fi, Bluetooth, USB-C", en: "Full connectivity: Wi-Fi, Bluetooth, USB-C" },
      { es: "Anotaciones de voz y texto integradas", en: "Integrated voice and text annotations" }
    ],
    faqs: [
      { q: { es: "¿Qué hace que la TK8 se destaque entre las cámaras de alta precisión?", en: "What makes the TK8 stand out among high-precision cameras?" }, a: { es: "La TK8 ofrece una sensibilidad térmica (NETD) excepcional de <30 mK, lo que le permite detectar incluso las diferencias de temperatura más pequeñas.", en: "The TK8 offers an exceptional thermal sensitivity (NETD) of <30 mK, allowing it to detect even the smallest temperature differences." } },
      { q: { es: "¿Las imágenes térmicas del TK8 son lo suficientemente nítidas para la inspección a distancia?", en: "Are the TK8 thermal images sharp enough for remote inspection?" }, a: { es: "Sí, con una resolución de 384x288 combinada con óptica de precisión de un FOV de 28°, proporciona detalles nítidos.", en: "Yes, with a 384x288 resolution combined with precision optics of a 28° FOV, it provides crisp detail." } },
      { q: { es: "¿Cuánto dura la batería para jornadas laborales prolongadas?", en: "How long does the battery last for long work days?" }, a: { es: "La cámara está optimizada para la eficiencia, ya que ofrece hasta 8 horas de funcionamiento continuo con una sola carga.", en: "The camera is optimized for efficiency, offering up to 8 hours of continuous operation on a single charge." } },
      { q: { es: "¿Cómo ayuda el TK8 con el análisis y la elaboración de informes in situ?", en: "How does the TK8 assist with on-site analysis and reporting?" }, a: { es: "Permite agregar rápidamente anotaciones de voz y de texto directamente a sus imágenes térmicas antes de exportarlas a AnalyzIR.", en: "It allows you to quickly add voice and text annotations directly to your thermal images before exporting to AnalyzIR." } },
      { q: { es: "¿El TK8 es fácil de integrar en flujos de trabajo profesionales modernos?", en: "Is the TK8 easy to integrate into modern professional workflows?" }, a: { es: "Por supuesto. Cuenta con amplias opciones de conectividad que incluyen Wi-Fi para transferencias rápidas y Bluetooth para auriculares.", en: "Absolutely. It features extensive connectivity options including Wi-Fi for fast transfers and Bluetooth for headsets." } }
    ],
    descargas: [
      { titulo: { es: "Ficha Técnica (Datasheet)", en: "Datasheet" }, url: "img/productos/fotric-tk8-datasheet.pdf" },
      { titulo: { es: "Manual de Usuario", en: "User Manual" }, url: "img/productos/fotric-tk8-manual-usuario.pdf" },
      { titulo: { es: "Certificado de Calibración", en: "Calibration Certificate" }, url: "img/productos/fotric-tk8-calibracion.pdf" }
    ]
  }
];

window.fotricProducts = products;
