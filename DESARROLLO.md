# Guía de Desarrollo - Axyoma

## 🚀 Empezar a Desarrollar

### Requisitos
- Editor de código (VS Code recomendado)
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (Live Server, http-server, o similar)
- Git (opcional, para control de versiones)

### 1. Configurar Servidor Local

#### Opción A: VS Code Live Server (recomendado)
```bash
# Instalar extensión "Live Server" en VS Code
# Click derecho en index.html → "Open with Live Server"
# El sitio abrirá automáticamente en http://localhost:5500
```

#### Opción B: Node.js http-server
```bash
# Instalar globalmente (una sola vez)
npm install -g http-server

# Ejecutar en la carpeta del proyecto
http-server

# Abrir en http://localhost:8080
```

#### Opción C: Python
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Abrir en http://localhost:8000
```

### 2. Estructura de Desarrollo

```
Editar archivos → Guardar → Navegador actualiza automáticamente
```

Con Live Server, los cambios se reflejan en tiempo real.

## 📝 Editar Contenido

### Textos
Buscar y reemplazar en los archivos HTML:

```bash
# Buscar (Ctrl+F)
# Reemplazar (Ctrl+H)

# Ejemplos comunes:
- "Axyoma" → Tu nombre de agencia
- "Rosario" → Tu ciudad
- "hola@axyoma.com" → Tu email
```

### Colores
Editar en `css/style.css`:

```css
:root {
  /* Cambiar color primario */
  --color-primary: #0066ff; /* Azul actual */

  /* Cambiar a otro color */
  --color-primary: #ff6600; /* Naranja */
  --color-primary: #00ff66; /* Verde */
  --color-primary: #6600ff; /* Púrpura */
}
```

### Tipografías
Cambiar fuentes en `css/style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital@0;1&display=swap');

/* Cambiar por otras fuentes de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## 🔍 Testing y QA

### Responsive Design
```bash
# En navegador, presionar F12 (DevTools)
# Ir a Device Toolbar (Ctrl+Shift+M)
# Probar en:
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- Desktop (1920px)
```

### Performance
```bash
# Google Chrome DevTools
F12 → Lighthouse → Generate Report

# Checklist:
- Performance: >85
- Accessibility: >90
- Best Practices: >90
- SEO: >90
```

### Validación HTML/CSS
```bash
# HTML Validator: https://validator.w3.org/
# CSS Validator: https://jigsaw.w3.org/css-validator/

# Herramientas online para validar
```

### Testing Cross-Browser
Probar en:
- ✅ Chrome (último versión)
- ✅ Firefox (último versión)
- ✅ Safari (si acceso a Mac)
- ✅ Edge (Microsoft)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 🐛 Debugging

### Console Errors
```bash
# Abrir DevTools (F12)
# Ir a Console tab
# Ver si hay errores rojo

# Errores comunes:
- 404: archivo no encontrado
- CORS: problema con recursos externos
- Syntax Error: error en JavaScript
```

### Elementos Inspeccionados
```bash
F12 → Elements/Inspector
# Click derecho en elemento → Inspect
# Ver HTML, CSS aplicado, box model
```

### Breakpoints y Debugger
```bash
# Para JavaScript
F12 → Sources → Establecer breakpoints
# Ejecutar paso a paso
```

## 📂 Agregar Nuevas Secciones

### Crear nueva sección en página existente

1. Copiar estructura HTML de una sección similar
2. Actualizar textos e IDs
3. Crear CSS en archivo correspondiente

Ejemplo:
```html
<!-- Nueva sección en home -->
<section class="section testimonios">
  <div class="section__container">
    <h2 class="section__title">Testimonios</h2>
    <!-- Contenido -->
  </div>
</section>
```

### Crear nueva página

1. Copiar estructura de página existente (ej: pages/servicios.html)
2. Cambiar contenido
3. Actualizar links en navegación (header)
4. Crear CSS si es necesario (pages/nueva-pagina.css)

```bash
cp pages/servicios.html pages/nueva-pagina.html
# Editar nueva-pagina.html
# Agregar import en css/style.css
```

## 🔗 Enlaces y Navegación

### Links internos
```html
<!-- Mismo nivel -->
<a href="pages/servicios.html">Servicios</a>

<!-- Nivel arriba -->
<a href="../index.html">Inicio</a>

<!-- Con ancla -->
<a href="#proyecto">Ir a proyecto</a>
```

### Validar links
```bash
# Herramienta: https://www.w3.org/QA/Tools/Broken-Links/
# O extensión de Chrome: "Check My Links"
```

## 🎬 Animaciones y Transiciones

### Agregar animaciones CSS
```css
.elemento {
  transition: all 300ms ease-in-out;
}

.elemento:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Keyframes (animaciones más complejas)
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.elemento {
  animation: slideIn 0.6s ease-out;
}
```

## 🔐 Seguridad

### Checklist
- [ ] No hay datos sensibles en comentarios HTML
- [ ] APIs keys no expuestas en JavaScript
- [ ] Links externos con `rel="noopener noreferrer"`
- [ ] Inputs del formulario con validación
- [ ] HTTPS en producción
- [ ] Content Security Policy headers

## 🚢 Deploy / Publicar

### Antes de publicar
- [ ] Reemplazar todos los placeholders con imágenes reales
- [ ] Cambiar "AXYOMA" por el nombre correcto
- [ ] Validar formulario de contacto (integrar backend)
- [ ] Testing en navegadores múltiples
- [ ] Optimizar imágenes
- [ ] Google Analytics integrado
- [ ] Meta tags actualizados
- [ ] 404 page configurada

### Opciones de Hosting
1. **Netlify** (recomendado para static)
   ```bash
   # Conectar repo GitHub, auto-deploy
   ```

2. **Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **GitHub Pages**
   ```bash
   # Gratis, pero limitado
   ```

4. **Servidor tradicional (cPanel, DirectAdmin)**
   ```bash
   # FTP upload de archivos
   ```

## 📊 Analítica

### Google Analytics
```html
<!-- Agregar al footer antes de </body> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
- [ ] Registrar sitio
- [ ] Enviar sitemap.xml
- [ ] Verificar indexación

## 🆘 Problemas Comunes

### Las imágenes no cargan
```
Verificar:
1. Ruta correcta (relativa o absoluta)
2. Nombre archivo exacto (mayúsculas/minúsculas)
3. Formato soportado (JPG, PNG, WebP)
4. Permisos de archivo
```

### CSS no aplica
```
Verificar:
1. Sintaxis CSS correcta
2. Especificidad (usar !important en último recurso)
3. Browser cache (Ctrl+Shift+R para limpiar)
4. Archivo CSS importado en HTML
```

### JavaScript no funciona
```
Verificar:
1. Console errors (F12)
2. Ruta del script correcta
3. Script cargado al final del <body>
4. Sintaxis JavaScript correcta
```

### Formulario no envía
```
Verificar:
1. Backend endpoint configurado
2. Método POST/GET correcto
3. Content-Type header
4. CORS si es necesario
5. Validación cliente y servidor
```

## 📚 Recursos Útiles

### Documentación
- MDN Web Docs: https://developer.mozilla.org
- W3C CSS: https://www.w3.org/Style/CSS/
- HTML Living Standard: https://html.spec.whatwg.org/

### Herramientas
- VS Code: https://code.visualstudio.com/
- DevTools Chrome: https://developer.chrome.com/docs/devtools/
- Color Picker: https://coolors.co/
- Font Pairing: https://www.fontpair.co/
- Image Compression: https://tinypng.com/

### Inspiración
- Dribbble: https://dribbble.com/
- Behance: https://www.behance.net/
- Awwwards: https://www.awwwards.com/
- CodePen: https://codepen.io/

## 🤝 Versionado con Git

```bash
# Inicializar git (primera vez)
git init
git add .
git commit -m "Initial commit"

# Hacer cambios
git add .
git commit -m "Descripción de cambios"

# Ver historial
git log

# Revertir cambios
git revert HEAD~1
```

## ✅ Checklist Final

Antes de considerar el proyecto "listo":

- [ ] Todas las páginas abren sin errores
- [ ] Navegación funciona correctamente
- [ ] Responsive en móvil (375px+)
- [ ] Formulario valida e intenta enviar
- [ ] No hay imágenes placeholder visibles
- [ ] Textos finales (no "lorem ipsum")
- [ ] Links internos funcionan
- [ ] Links externos se abren en nueva pestaña
- [ ] Performance Lighthouse >80
- [ ] Accesibilidad implementada
- [ ] SEO básico (meta tags, títulos)
- [ ] Compatibilidad navegadores (últimas 2 versiones)

---

¿Necesitas ayuda? Revisa este archivo o contacta al equipo de desarrollo.
