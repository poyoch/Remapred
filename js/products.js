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

,

  // ─── SERIE V — TÉRMICAS AVANZADAS ───────────────────────────────────────
  {
    id: "fotric-v5",
    nombre: "FOTRIC V5",
    gama: { es: "Serie V - Térmica Avanzada", en: "V Series - Advanced Thermal" },
    precioUSD: null,
    imagen: "https://static.wixstatic.com/media/571718_e0d9d2c0b45249108634fd7144c7e08d~mv2.png",
    imagenes: ["https://static.wixstatic.com/media/571718_e0d9d2c0b45249108634fd7144c7e08d~mv2.png"],
    urlFabricante: "https://www.fotric.com/products/v5/",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "384x288", en: "384x288" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "<40 mK", en: "<40 mK" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 1550 °C", en: "-20 °C to 1550 °C" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "13 MP", en: "13 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "5.0 pulgadas HD táctil", en: "5.0 inch HD touchscreen" } },
      { etiqueta: { es: "Tipo de enfoque", en: "Focus type" }, valor: { es: "TurboFocus (Auto/Manual)", en: "TurboFocus (Auto/Manual)" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "≥ 4 horas", en: "≥ 4 hours" } },
      { etiqueta: { es: "Lentes", en: "Lenses" }, valor: { es: "Intercambiables", en: "Interchangeable" } }
    ],
    aplicaciones: { es: "Medición de hornos, calderas, tuberías de vapor y equipos a altísimas temperaturas (hasta 1550 °C). Fundición, metalurgia e industria pesada.", en: "Measurement of furnaces, boilers, steam pipes and equipment at extremely high temperatures (up to 1550 °C). Foundry, metallurgy and heavy industry." },
    beneficios: [
      { es: "Rango de temperatura excepcional hasta 1550 °C", en: "Exceptional temperature range up to 1550 °C" },
      { es: "Pantalla HD de 5 pulgadas para trabajo en campo", en: "5-inch HD display for fieldwork" },
      { es: "TurboFocus: enfoque automático y manual ultrarrápido", en: "TurboFocus: ultra-fast automatic and manual focus" },
      { es: "Lentes intercambiables para múltiples aplicaciones", en: "Interchangeable lenses for multiple applications" },
      { es: "Cámara visual de 13 MP integrada", en: "Integrated 13 MP visual camera" }
    ],
    faqs: [
      { q: { es: "¿Para qué industrias está diseñada la V5?", en: "For which industries is the V5 designed?" }, a: { es: "Fundición, metalurgia, petroquímica e industria pesada donde se requieren mediciones a temperaturas extremas de hasta 1550 °C.", en: "Foundry, metallurgy, petrochemical and heavy industry where measurements at extreme temperatures up to 1550 °C are required." } },
      { q: { es: "¿Qué ventaja ofrece TurboFocus?", en: "What advantage does TurboFocus offer?" }, a: { es: "Permite cambiar entre enfoque automático ultrarrápido y manual con precisión, adaptándose a escenas complejas o en movimiento.", en: "Allows switching between ultra-fast auto focus and precise manual focus, adapting to complex or moving scenes." } }
    ],
    descargas: []
  },
  {
    id: "fotric-v7",
    nombre: "FOTRIC V7",
    gama: { es: "Serie V - Térmica Avanzada (Tope de Gama)", en: "V Series - Advanced Thermal (Top of Range)" },
    precioUSD: null,
    imagen: "https://static.wixstatic.com/media/571718_84994c3e1aee4f859a04b4ec670cc6e5~mv2.png",
    imagenes: ["https://static.wixstatic.com/media/571718_84994c3e1aee4f859a04b4ec670cc6e5~mv2.png"],
    urlFabricante: "https://www.fotric.com/products/v7/",
    especificaciones: [
      { etiqueta: { es: "Resolución infrarroja", en: "Infrared resolution" }, valor: { es: "640x480", en: "640x480" } },
      { etiqueta: { es: "Sensibilidad térmica", en: "Thermal sensitivity" }, valor: { es: "<30 mK", en: "<30 mK" } },
      { etiqueta: { es: "Rango de temperatura", en: "Temperature range" }, valor: { es: "-20 °C a 1550 °C", en: "-20 °C to 1550 °C" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "13 MP", en: "13 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "5.0 pulgadas HD táctil", en: "5.0 inch HD touchscreen" } },
      { etiqueta: { es: "Tipo de enfoque", en: "Focus type" }, valor: { es: "TurboFocus (Auto/Manual)", en: "TurboFocus (Auto/Manual)" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "≥ 4 horas", en: "≥ 4 hours" } },
      { etiqueta: { es: "Lentes", en: "Lenses" }, valor: { es: "Intercambiables", en: "Interchangeable" } }
    ],
    aplicaciones: { es: "Análisis predictivo, inspecciones de alta tensión y reportes de altísima precisión. Para termógrafos certificados (Nivel II/III) e ingenieros de confiabilidad (CBM).", en: "Predictive analysis, high-voltage inspections and high-precision reports. For certified thermographers (Level II/III) and reliability engineers (CBM)." },
    beneficios: [
      { es: "Resolución máxima 640x480 — el tope de gama FOTRIC", en: "Maximum 640x480 resolution — FOTRIC top of the range" },
      { es: "Sensibilidad <30 mK para detectar diferencias mínimas de temperatura", en: "<30 mK sensitivity to detect minimal temperature differences" },
      { es: "Rango hasta 1550 °C para entornos de temperatura extrema", en: "Range up to 1550 °C for extreme temperature environments" },
      { es: "Lentes intercambiables y pantalla HD de 5 pulgadas", en: "Interchangeable lenses and 5-inch HD screen" },
      { es: "Ideal para termógrafos certificados Nivel II/III", en: "Ideal for Level II/III certified thermographers" }
    ],
    faqs: [
      { q: { es: "¿En qué se diferencia la V7 de la V5?", en: "How does the V7 differ from the V5?" }, a: { es: "La V7 es el tope de gama con resolución 640x480 (vs 384x288 de la V5) y mayor sensibilidad (<30 mK vs <40 mK). Para el profesional que no acepta márgenes de error.", en: "The V7 is the top of range with 640x480 resolution (vs 384x288 for V5) and greater sensitivity (<30 mK vs <40 mK). For the professional who accepts no margin for error." } },
      { q: { es: "¿Para qué perfil profesional es la V7?", en: "For what professional profile is the V7?" }, a: { es: "Termógrafos certificados (Nivel II/III), ingenieros de confiabilidad (CBM) e inspectores de redes eléctricas que requieren máxima precisión.", en: "Certified thermographers (Level II/III), reliability engineers (CBM) and power grid inspectors requiring maximum precision." } }
    ],
    descargas: []
  },

  // ─── SERIE ACÚSTICA — DETECCIÓN DE FUGAS ─────────────────────────────────
  {
    id: "fotric-h4",
    nombre: "FOTRIC H4",
    gama: { es: "Serie Acústica - Industrial Pro", en: "Acoustic Series - Industrial Pro" },
    precioUSD: null,
    imagen: "https://static.wixstatic.com/media/571718_8f9757b094bb4679a3c2b4a5a4b2de6f~mv2.png",
    imagenes: ["https://static.wixstatic.com/media/571718_8f9757b094bb4679a3c2b4a5a4b2de6f~mv2.png"],
    urlFabricante: "https://www.fotric.com/products/h4/",
    especificaciones: [
      { etiqueta: { es: "Tipo de sensor", en: "Sensor type" }, valor: { es: "112 Micrófonos MEMS", en: "112 MEMS Microphones" } },
      { etiqueta: { es: "Rango de frecuencia", en: "Frequency range" }, valor: { es: "2 kHz - 100 kHz", en: "2 kHz - 100 kHz" } },
      { etiqueta: { es: "Alcance de detección", en: "Detection range" }, valor: { es: "0.3 m a 200 m", en: "0.3 m to 200 m" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "13 MP", en: "13 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "5.0 pulgadas táctil", en: "5.0 inch touchscreen" } },
      { etiqueta: { es: "Tipo de enfoque", en: "Focus type" }, valor: { es: "Automático", en: "Automatic" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "> 4 horas", en: "> 4 hours" } },
      { etiqueta: { es: "Modos de detección", en: "Detection modes" }, valor: { es: "Fuga de gas / Descarga parcial automática", en: "Gas leak / Auto partial discharge" } }
    ],
    aplicaciones: { es: "Detección de efecto corona, descargas parciales y fugas de gas hasta 200 m. Subestaciones eléctricas, redes de transmisión e industria petroquímica.", en: "Detection of corona effect, partial discharges and gas leaks up to 200 m. Electrical substations, transmission networks and petrochemical industry." },
    beneficios: [
      { es: "Alcance de hasta 200 m — el mayor de la línea acústica FOTRIC", en: "Range up to 200 m — the longest in the FOTRIC acoustic line" },
      { es: "112 micrófonos MEMS para máxima sensibilidad acústica", en: "112 MEMS microphones for maximum acoustic sensitivity" },
      { es: "Autodetección de descargas parciales (corona, superficial, flotante)", en: "Auto-detection of partial discharges (corona, surface, floating)" },
      { es: "Cálculo aproximado de flujo y costeo de fugas", en: "Approximate flow calculation and leak cost estimation" },
      { es: "Pantalla de 5 pulgadas para trabajo cómodo en campo", en: "5-inch screen for comfortable fieldwork" }
    ],
    faqs: [
      { q: { es: "¿Qué diferencia a la H4 de la H4MINI?", en: "What differentiates the H4 from the H4MINI?" }, a: { es: "La H4 tiene alcance hasta 200 m (vs 100 m del H4MINI), pantalla de 5 pulgadas y autodetección de descargas parciales. Es la opción más potente para subestaciones y alta tensión.", en: "The H4 has a range up to 200 m (vs 100 m for H4MINI), a 5-inch screen and auto partial discharge detection. It is the most powerful option for substations and high voltage." } },
      { q: { es: "¿Puede detectar descargas parciales automáticamente?", en: "Can it detect partial discharges automatically?" }, a: { es: "Sí, el modo PD clasifica automáticamente el tipo de descarga: corona, superficial o flotante, con visualización PRPD.", en: "Yes, the PD mode automatically classifies the discharge type: corona, surface or floating, with PRPD visualization." } }
    ],
    descargas: []
  },
  {
    id: "fotric-h4mini",
    nombre: "FOTRIC H4MINI",
    gama: { es: "Serie Acústica - Portátil", en: "Acoustic Series - Portable" },
    precioUSD: null,
    imagen: "https://static.wixstatic.com/media/0fa391_949dee3c5b9842539c8efd8cf74acd56~mv2.png",
    imagenes: ["https://static.wixstatic.com/media/0fa391_949dee3c5b9842539c8efd8cf74acd56~mv2.png"],
    urlFabricante: "https://www.fotric.com/products/h4mini/",
    especificaciones: [
      { etiqueta: { es: "Tipo de sensor", en: "Sensor type" }, valor: { es: "112 Micrófonos MEMS", en: "112 MEMS Microphones" } },
      { etiqueta: { es: "Rango de frecuencia", en: "Frequency range" }, valor: { es: "2 kHz - 100 kHz", en: "2 kHz - 100 kHz" } },
      { etiqueta: { es: "Alcance de detección", en: "Detection range" }, valor: { es: "0.3 m a 100 m", en: "0.3 m to 100 m" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "13 MP", en: "13 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "3.5 pulgadas táctil", en: "3.5 inch touchscreen" } },
      { etiqueta: { es: "Tipo de enfoque", en: "Focus type" }, valor: { es: "Automático", en: "Automatic" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "≥ 4 horas", en: "≥ 4 hours" } },
      { etiqueta: { es: "Modos de detección", en: "Detection modes" }, valor: { es: "Fuga de gas / Medición de flujo", en: "Gas leak / Flow measurement" } }
    ],
    aplicaciones: { es: "Inspección ágil de válvulas, tuberías y fugas en espacios reducidos. Uso con una sola mano. Para técnicos de servicio de campo y especialistas en sistemas neumáticos.", en: "Agile inspection of valves, pipes and leaks in confined spaces. One-handed use. For field service technicians and pneumatic system specialists." },
    beneficios: [
      { es: "112 micrófonos de precisión en formato compacto y ligero", en: "112 precision microphones in a compact, lightweight form" },
      { es: "Uso con una sola mano — máxima portabilidad en campo", en: "One-handed use — maximum portability in the field" },
      { es: "Medición y costeo aproximado de flujo de fugas", en: "Approximate flow measurement and leak cost estimation" },
      { es: "Alcance hasta 100 m en entornos industriales", en: "Range up to 100 m in industrial environments" }
    ],
    faqs: [
      { q: { es: "¿Qué ventaja tiene la H4MINI sobre la TD2E?", en: "What advantage does the H4MINI have over the TD2E?" }, a: { es: "La H4MINI tiene 112 micrófonos (vs 64 del TD2E), mayor alcance (100 m vs 60 m) y medición de flujo. El TD2E es la opción de entrada más económica.", en: "The H4MINI has 112 microphones (vs 64 for TD2E), longer range (100 m vs 60 m) and flow measurement. The TD2E is the most economical entry option." } },
      { q: { es: "¿Se puede usar con una sola mano?", en: "Can it be used with one hand?" }, a: { es: "Sí, diseño compacto pensado para uso con una sola mano, perfecto para inspecciones en movimiento o en espacios reducidos.", en: "Yes, compact design for one-handed use, perfect for inspections on the move or in confined spaces." } }
    ],
    descargas: []
  },
  {
    id: "fotric-td2e",
    nombre: "FOTRIC TD2E",
    gama: { es: "Serie Acústica - Entrada Industrial", en: "Acoustic Series - Industrial Entry" },
    precioUSD: null,
    imagen: "https://static.wixstatic.com/media/0fa391_1356242bddca46789c14fc213589287a~mv2.png",
    imagenes: ["https://static.wixstatic.com/media/0fa391_1356242bddca46789c14fc213589287a~mv2.png"],
    urlFabricante: "https://www.fotric.com/products/td2e/",
    especificaciones: [
      { etiqueta: { es: "Tipo de sensor", en: "Sensor type" }, valor: { es: "64 Micrófonos MEMS", en: "64 MEMS Microphones" } },
      { etiqueta: { es: "Rango de frecuencia", en: "Frequency range" }, valor: { es: "2 kHz - 100 kHz", en: "2 kHz - 100 kHz" } },
      { etiqueta: { es: "Alcance de detección", en: "Detection range" }, valor: { es: "0.3 m a 60 m", en: "0.3 m to 60 m" } },
      { etiqueta: { es: "Cámara visual", en: "Visual camera" }, valor: { es: "5 MP", en: "5 MP" } },
      { etiqueta: { es: "Pantalla", en: "Display" }, valor: { es: "3.5 pulgadas táctil", en: "3.5 inch touchscreen" } },
      { etiqueta: { es: "Tipo de enfoque", en: "Focus type" }, valor: { es: "Automático", en: "Automatic" } },
      { etiqueta: { es: "Batería / autonomía", en: "Battery / autonomy" }, valor: { es: "> 3 horas", en: "> 3 hours" } },
      { etiqueta: { es: "Modos de detección", en: "Detection modes" }, valor: { es: "Fuga de aire comprimido / Gas a presión", en: "Compressed air / Pressurized gas leak" } }
    ],
    aplicaciones: { es: "Detección rápida de fugas de aire comprimido en líneas de producción. Para técnicos de mantenimiento, mecánicos industriales y responsables de costos operativos.", en: "Quick detection of compressed air leaks in production lines. For maintenance technicians, industrial mechanics and operational cost managers." },
    beneficios: [
      { es: "El kit de entrada más accesible de la línea acústica FOTRIC", en: "The most accessible entry kit in the FOTRIC acoustic line" },
      { es: "64 micrófonos MEMS para detección precisa de fugas industriales", en: "64 MEMS microphones for precise industrial leak detection" },
      { es: "Detecta y cuantifica fugas de aire comprimido al instante", en: "Detects and quantifies compressed air leaks instantly" },
      { es: "Alcance hasta 60 m — suficiente para la mayoría de plantas industriales", en: "Range up to 60 m — sufficient for most industrial plants" },
      { es: "Reduce costos operativos detectando pérdidas de energía", en: "Reduces operational costs by detecting energy losses" }
    ],
    faqs: [
      { q: { es: "¿Qué tipo de fugas puede detectar el TD2E?", en: "What type of leaks can the TD2E detect?" }, a: { es: "Detecta fugas de aire comprimido, vacío y gases a presión en líneas de producción industrial, con alcance hasta 60 metros.", en: "Detects compressed air, vacuum and pressurized gas leaks in industrial production lines, with a range of up to 60 meters." } },
      { q: { es: "¿Es el TD2E el equipo correcto para comenzar en acústica?", en: "Is the TD2E the right equipment to start in acoustics?" }, a: { es: "Sí, es el punto de entrada ideal. Para mayor alcance o medición de flujo, considera la H4MINI. Para subestaciones y alta tensión, la H4 es la opción profesional.", en: "Yes, it is the ideal entry point. For greater range or flow measurement, consider the H4MINI. For substations and high voltage, the H4 is the professional option." } }
    ],
    descargas: []
  },
  // ─── SERIE IRISS VPT ─────────────────────────────────────────────────────
  {
    id: "iriss-vpt-50",
    nombre: "IRISS VPT-50",
    gama: { es: "Serie Platinum VPT", en: "Platinum VPT Series" },
    precioUSD: null,
    imagen: "img/productos/iriss-vpt-50.jpg",
    imagenes: ["img/productos/iriss-vpt-50.jpg"],
    urlFabricante: "https://iriss.com",
    especificaciones: [
      { etiqueta: { es: "Dimensiones totales", en: "Overall dimensions" }, valor: { es: "9,1 cm (3,6 pulgadas) de diámetro", en: "9.1 cm (3.6 inches) diameter" } },
      { etiqueta: { es: "Dimensiones de apertura", en: "Aperture dimensions" }, valor: { es: "5,1 cm (2,0 pulgadas) de diámetro", en: "5.1 cm (2.0 inches) diameter" } },
      { etiqueta: { es: "Espesor total", en: "Overall thickness" }, valor: { es: "2,6 cm (1,0 pulgadas)", en: "2.6 cm (1.0 inches)" } },
      { etiqueta: { es: "Calificación ambiental", en: "Environmental rating" }, valor: { es: "IP67 / NEMA 6", en: "IP67 / NEMA 6" } },
      { etiqueta: { es: "Temperatura de funcionamiento", en: "Operating temperature" }, valor: { es: "-40 °C a 273 °C", en: "-40 °C to 273 °C" } },
      { etiqueta: { es: "Cuerpo material", en: "Body material" }, valor: { es: "Nylon UL 94 5VA; cubierta de aluminio", en: "Nylon UL 94 5VA; aluminum cover" } },
      { etiqueta: { es: "Material de la junta", en: "Gasket material" }, valor: { es: "UL 94 5VA TPE", en: "UL 94 5VA TPE" } },
      { etiqueta: { es: "Material de ferretería", en: "Hardware material" }, valor: { es: "Acero inoxidable 316", en: "316 Stainless Steel" } },
      { etiqueta: { es: "Rango de voltaje", en: "Voltage range" }, valor: { es: "Cualquier", en: "Any" } },
      { etiqueta: { es: "Material Óptico", en: "Optic material" }, valor: { es: "Poly-View™ Polímero transmisivo", en: "Poly-View™ Transmissive polymer" } }
    ],
    aplicaciones: { es: "IR de onda media e IR de onda larga; Ultravioleta (UV); Inspección visual; Aplicaciones de Media/Alta Tensión.", en: "Mid-wave and long-wave IR; Ultraviolet (UV); Visual inspection; Medium/High Voltage applications." },
    beneficios: [
      { es: "Permite inspecciones infrarrojas y visuales seguras", en: "Enables safe infrared and visual inspections" },
      { es: "Puesta a tierra automáticamente", en: "Automatically grounded" },
      { es: "Rejilla de refuerzo de aluminio (estándar IP22/IP2x)", en: "Aluminum reinforcing grill (IP22/IP2x standard)" },
      { es: "Compatible con cualquier cámara termográfica", en: "Compatible with any thermal camera" },
      { es: "Certificaciones: UL, cUL, CSA, ABS, DNV, Lloyds, IEEE", en: "Certifications: UL, cUL, CSA, ABS, DNV, Lloyds, IEEE" }
    ],
    faqs: [
      { q: { es: "¿Qué tipo de inspecciones permite?", en: "What type of inspections does it allow?" }, a: { es: "Permite inspecciones por infrarrojo (onda media y larga), ultravioleta y visuales de forma segura.", en: "It allows infrared (mid and long wave), ultraviolet, and visual inspections safely." } },
      { q: { es: "¿Es seguro usarlo en aplicaciones de alto voltaje?", en: "Is it safe to use in high voltage applications?" }, a: { es: "Sí, cuenta con certificaciones internacionales y cumple con estándares estrictos como IEEE C37 20.2.a.3.6 para resistir arcos eléctricos.", en: "Yes, it has international certifications and meets strict standards like IEEE C37 20.2.a.3.6 to withstand arc flashes." } }
    ],
    descargas: []
  },
  {
    id: "iriss-vpt-75",
    nombre: "IRISS VPT-75",
    gama: { es: "Serie Platinum VPT", en: "Platinum VPT Series" },
    precioUSD: null,
    imagen: "img/productos/iriss-vpt-75.jpg",
    imagenes: ["img/productos/iriss-vpt-75.jpg"],
    urlFabricante: "https://iriss.com",
    especificaciones: [
      { etiqueta: { es: "Dimensiones totales", en: "Overall dimensions" }, valor: { es: "12,1 cm (4,8 pulgadas) de diámetro", en: "12.1 cm (4.8 inches) diameter" } },
      { etiqueta: { es: "Dimensiones de apertura", en: "Aperture dimensions" }, valor: { es: "7,6 cm (3,0 pulgadas) de diámetro", en: "7.6 cm (3.0 inches) diameter" } },
      { etiqueta: { es: "Espesor total", en: "Overall thickness" }, valor: { es: "2,6 cm (1,0 pulgadas)", en: "2.6 cm (1.0 inches)" } },
      { etiqueta: { es: "Calificación ambiental", en: "Environmental rating" }, valor: { es: "IP67 / NEMA 6", en: "IP67 / NEMA 6" } },
      { etiqueta: { es: "Temperatura de funcionamiento", en: "Operating temperature" }, valor: { es: "-40 °C a 273 °C", en: "-40 °C to 273 °C" } },
      { etiqueta: { es: "Cuerpo material", en: "Body material" }, valor: { es: "Nylon UL 94 5VA; cubierta de aluminio", en: "Nylon UL 94 5VA; aluminum cover" } },
      { etiqueta: { es: "Material de la junta", en: "Gasket material" }, valor: { es: "UL 94 5VA TPE", en: "UL 94 5VA TPE" } },
      { etiqueta: { es: "Material de ferretería", en: "Hardware material" }, valor: { es: "Acero inoxidable 316", en: "316 Stainless Steel" } },
      { etiqueta: { es: "Rango de voltaje", en: "Voltage range" }, valor: { es: "Cualquier", en: "Any" } },
      { etiqueta: { es: "Material Óptico", en: "Optic material" }, valor: { es: "Poly-View™ Polímero transmisivo", en: "Poly-View™ Transmissive polymer" } }
    ],
    aplicaciones: { es: "IR de onda media e IR de onda larga; Ultravioleta (UV); Inspección visual; Aplicaciones de Media/Alta Tensión.", en: "Mid-wave and long-wave IR; Ultraviolet (UV); Visual inspection; Medium/High Voltage applications." },
    beneficios: [
      { es: "Permite inspecciones infrarrojas y visuales seguras", en: "Enables safe infrared and visual inspections" },
      { es: "Puesta a tierra automáticamente", en: "Automatically grounded" },
      { es: "Rejilla de refuerzo de aluminio (estándar IP22/IP2x)", en: "Aluminum reinforcing grill (IP22/IP2x standard)" },
      { es: "Compatible con cualquier cámara termográfica", en: "Compatible with any thermal camera" },
      { es: "Certificaciones: UL, cUL, CSA, ABS, DNV, Lloyds, IEEE", en: "Certifications: UL, cUL, CSA, ABS, DNV, Lloyds, IEEE" }
    ],
    faqs: [
      { q: { es: "¿Qué tipo de inspecciones permite?", en: "What type of inspections does it allow?" }, a: { es: "Permite inspecciones por infrarrojo (onda media y larga), ultravioleta y visuales de forma segura.", en: "It allows infrared (mid and long wave), ultraviolet, and visual inspections safely." } },
      { q: { es: "¿Es seguro usarlo en aplicaciones de alto voltaje?", en: "Is it safe to use in high voltage applications?" }, a: { es: "Sí, cuenta con certificaciones internacionales y cumple con estándares estrictos como IEEE C37 20.2.a.3.6 para resistir arcos eléctricos.", en: "Yes, it has international certifications and meets strict standards like IEEE C37 20.2.a.3.6 to withstand arc flashes." } }
    ],
    descargas: []
  },
  {
    id: "iriss-vpt-100",
    nombre: "IRISS VPT-100",
    gama: { es: "Serie Platinum VPT", en: "Platinum VPT Series" },
    precioUSD: null,
    imagen: "img/productos/iriss-vpt-100.jpg",
    imagenes: ["img/productos/iriss-vpt-100.jpg"],
    urlFabricante: "https://iriss.com",
    especificaciones: [
      { etiqueta: { es: "Dimensiones totales", en: "Overall dimensions" }, valor: { es: "15,1 cm (5,95 pulgadas) de diámetro", en: "15.1 cm (5.95 inches) diameter" } },
      { etiqueta: { es: "Dimensiones de apertura", en: "Aperture dimensions" }, valor: { es: "10,2 cm (4,0 pulgadas) de diámetro", en: "10.2 cm (4.0 inches) diameter" } },
      { etiqueta: { es: "Espesor total", en: "Overall thickness" }, valor: { es: "2,6 cm (1,0 pulgadas)", en: "2.6 cm (1.0 inches)" } },
      { etiqueta: { es: "Calificación ambiental", en: "Environmental rating" }, valor: { es: "IP67 / NEMA 6", en: "IP67 / NEMA 6" } },
      { etiqueta: { es: "Temperatura de funcionamiento", en: "Operating temperature" }, valor: { es: "-40 °C a 273 °C", en: "-40 °C to 273 °C" } },
      { etiqueta: { es: "Cuerpo material", en: "Body material" }, valor: { es: "Nylon UL 94 5VA; cubierta de aluminio", en: "Nylon UL 94 5VA; aluminum cover" } },
      { etiqueta: { es: "Material de la junta", en: "Gasket material" }, valor: { es: "UL 94 5VA TPE", en: "UL 94 5VA TPE" } },
      { etiqueta: { es: "Material de ferretería", en: "Hardware material" }, valor: { es: "Acero inoxidable 316", en: "316 Stainless Steel" } },
      { etiqueta: { es: "Rango de voltaje", en: "Voltage range" }, valor: { es: "Cualquier", en: "Any" } },
      { etiqueta: { es: "Material Óptico", en: "Optic material" }, valor: { es: "Poly-View™ Polímero transmisivo", en: "Poly-View™ Transmissive polymer" } }
    ],
    aplicaciones: { es: "IR de onda media e IR de onda larga; Ultravioleta (UV); Inspección visual; Aplicaciones de Media/Alta Tensión.", en: "Mid-wave and long-wave IR; Ultraviolet (UV); Visual inspection; Medium/High Voltage applications." },
    beneficios: [
      { es: "Permite inspecciones infrarrojas y visuales seguras", en: "Enables safe infrared and visual inspections" },
      { es: "Puesta a tierra automáticamente", en: "Automatically grounded" },
      { es: "Rejilla de refuerzo de aluminio (estándar IP22/IP2x)", en: "Aluminum reinforcing grill (IP22/IP2x standard)" },
      { es: "Compatible con cualquier cámara termográfica", en: "Compatible with any thermal camera" },
      { es: "Certificaciones: UL, cUL, CSA, ABS, DNV, Lloyds, IEEE", en: "Certifications: UL, cUL, CSA, ABS, DNV, Lloyds, IEEE" }
    ],
    faqs: [
      { q: { es: "¿Qué tipo de inspecciones permite?", en: "What type of inspections does it allow?" }, a: { es: "Permite inspecciones por infrarrojo (onda media y larga), ultravioleta y visuales de forma segura.", en: "It allows infrared (mid and long wave), ultraviolet, and visual inspections safely." } },
      { q: { es: "¿Es seguro usarlo en aplicaciones de alto voltaje?", en: "Is it safe to use in high voltage applications?" }, a: { es: "Sí, cuenta con certificaciones internacionales y cumple con estándares estrictos como IEEE C37 20.2.a.3.6 para resistir arcos eléctricos.", en: "Yes, it has international certifications and meets strict standards like IEEE C37 20.2.a.3.6 to withstand arc flashes." } }
    ],
    descargas: []
  }

];

window.fotricProducts = products;
