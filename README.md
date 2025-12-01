# AXYOMA - Sitio Web

Agencia de Marketing Digital 360°. Sitio web profesional, responsive y preparado para integración con WordPress.

## 📁 Estructura del Proyecto

```
axyoma-new-web/
├── index.html                 # Página de inicio
├── pages/                     # Páginas adicionales
│   ├── nosotros.html         # Sobre la agencia
│   ├── servicios.html        # Servicios ofrecidos
│   ├── casos.html            # Casos de éxito / Proyectos
│   ├── clientes.html         # Clientes
│   ├── novedades.html        # Blog / Novedades
│   ├── contacto.html         # Formulario de contacto
│   └── sumate.html           # Trabaja con nosotros
├── css/                       # Estilos
│   ├── style.css             # Archivo CSS principal
│   ├── components/           # CSS de componentes reutilizables
│   │   ├── header.css        # Navegación y header
│   │   ├── footer.css        # Footer
│   │   ├── buttons.css       # Botones y CTAs
│   │   └── cards.css         # Tarjetas y componentes
│   └── pages/                # Estilos específicos por página
│       └── home.css          # Estilos de home
├── js/                        # JavaScript
│   ├── main.js               # Archivo JS principal
│   ├── modules/              # Módulos JS (uso futuro)
│   └── vendor/               # Librerías externas (uso futuro)
├── assets/                    # Recursos estáticos
│   ├── fonts/                # Tipografías locales (opcional)
│   ├── images/               # Imágenes del sitio
│   └── placeholders/         # Imágenes placeholder temporales
└── README.md                  # Este archivo
```

## 🎨 Tecnologías Utilizadas

- **HTML5** - Semántico y accesible
- **CSS3** - Metodología BEM, variables CSS, Grid y Flexbox
- **Bootstrap** - Sistema de grid responsivo (Grid personalizado)
- **JavaScript Vanilla** - Sin dependencias externas
- **Tipografías:**
  - `Archivo` - Fuente principal (sans-serif)
  - `Old Standard TT` - Fuente secundaria para títulos en itálica

## 🎯 Características

✅ **Totalmente Responsive** - Mobile-first, tablet y desktop
✅ **Semántico** - HTML5 preparado para WordPress
✅ **BEM CSS** - Código limpio y escalable
✅ **Sin dependencias** - JavaScript vanilla puro
✅ **Accesible** - ARIA labels y buenas prácticas
✅ **Performance** - Lazy loading e Intersection Observer
✅ **SEO Ready** - Meta tags y estructura semántica

## 📱 Páginas Incluidas

### Home (index.html)
- Hero section con propuesta de valor
- Sección sobre la agencia
- Servicios principales (4 items)
- Metodología de trabajo
- Casos de éxito (3 items)
- Logos de clientes
- Novedades destacadas
- CTA de contacto

### Nosotros (pages/nosotros.html)
- Historia y misión
- Presentación del equipo
- Valores y propósito
- CTA de contacto

### Servicios (pages/servicios.html)
- 7 servicios principales detallados:
  - Consultoría Estratégica
  - Comunicación & Marketing Digital 360°
  - Diseño & Branding
  - Productora Audiovisual
  - Publicidad & Marketing de Resultados
  - Desarrollo Web & Experiencia Digital
  - Data & Automatización

### Proyectos (pages/casos.html)
- Caso de estudio detallado (AGROADVANCE)
- Descripción del trabajo realizado
- Valor generado
- CTA hacia sitio del cliente

### Clientes (pages/clientes.html)
- Logos de clientes (grid responsivo)
- Razones para confiar en nosotros
- CTA de contacto

### Novedades (pages/novedades.html)
- Artículos destacados
- Grid de informes y reportes
- Blog section lista para agregar contenido

### Contacto (pages/contacto.html)
- Formulario completo con campos:
  - Nombre, Apellido
  - Empresa, Dirección
  - Teléfono, Email
  - Tamaño empresa (select)
  - Sector (select)
  - País, Ciudad
  - Mensaje
- Validación básica en cliente
- Información de contacto adicional

### Súmate (pages/sumate.html)
- Búsquedas activas de personal
- Descripción de posiciones
- Cultura y valores
- CTA de postulación

## 🚀 Cómo Usar

### 1. Instalación local
```bash
# Clonar o descargar el proyecto
cd axyoma-new-web

# Abrir en servidor local (recomendado)
# Usar Live Server en VS Code o similar
# NO abrir directamente como archivo local
```

### 2. Agregar Imágenes
- Reemplazar contenido de `<!-- PLACEHOLDER -->` con etiquetas `<img>`
- Guardar imágenes en `assets/images/`
- Ejemplo:
```html
<!-- Antes -->
<div class="hero__image-placeholder">Imagen Hero</div>

<!-- Después -->
<img src="../assets/images/hero.jpg" alt="Hero Image" class="hero__image">
```

### 3. Personalizar Contenido
- Editar textos en los HTML
- Cambiar colores primarios en `css/style.css` (variable `--color-primary`)
- Modificar fonts en `@import` statements

### 4. Agregar Nuevas Páginas
```html
<!-- Template básico -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Página - Axyoma</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <!-- HEADER (copiar desde index.html) -->

  <main>
    <!-- Tu contenido -->
  </main>

  <!-- FOOTER (copiar desde index.html) -->

  <script src="../js/main.js"></script>
</body>
</html>
```

## 🎨 Paleta de Colores

```css
--color-primary: #0066ff (Azul)
--color-dark: #000000 (Negro)
--color-dark-secondary: #111111 (Negro más oscuro)
--color-light: #ffffff (Blanco)
--color-gray: #666666 (Gris)
```

## 📐 Espaciado (Sistema de escala)

```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)
--spacing-xxl: 4rem (64px)
```

## 🔤 Tipografía

```css
--font-primary: 'Archivo' (body, menus, botones)
--font-secondary: 'Old Standard TT' (títulos en itálica)
```

## 📊 Sistema de Grid

Grid responsivo de 12 columnas:
```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- Contenido -->
  </div>
</div>
```

## 🔧 Funcionalidades JavaScript

- ✅ Menú móvil (hamburguesa)
- ✅ Links de navegación activos
- ✅ Formulario de contacto con validación
- ✅ Smooth scroll
- ✅ Intersection Observer para animaciones
- ✅ Shadow del header al hacer scroll
- ✅ Lazy load de imágenes
- ✅ Manejo de teclado (ESC para cerrar menú)

## 🌐 Integración con WordPress

Para migrar a WordPress:

1. **Usar como template personalizado:**
   - Copiar estructura HTML a files de WordPress theme
   - Mantener naming de clases para reutilizar CSS

2. **WP Functions:**
   - Usar `wp_nav_menu()` para navegación
   - Usar `wp_footer()` y `wp_head()`
   - Integrar formularios con plugins (Gravity Forms, WPForms)

3. **Estrutura recomendada:**
   ```
   wp-content/themes/axyoma/
   ├── index.php
   ├── home.php
   ├── page.php
   ├── header.php
   ├── footer.php
   ├── functions.php
   ├── style.css (importar archivos del proyecto)
   └── assets/ (images, css, js)
   ```

## 📝 Notas Importantes

⚠️ **Sin imágenes ni iconos:**
- El sitio usa placeholders para imágenes
- Comentarios indicando dónde van iconos
- Preparado para agregar después

⚠️ **Formulario de contacto:**
- Validación básica en cliente
- NO envía datos a servidor actualmente
- Integrar con servicio de backend (Node.js, PHP, Formspree, etc.)

⚠️ **Links de navegación:**
- Algunos links apuntan a `#` (hacer click no hace nada)
- Reemplazar con URLs reales cuando estén definidas

## 🎓 Convenciones de Código

### BEM (Block Element Modifier)
```css
.block {} /* El componente */
.block__element {} /* Parte del componente */
.block--modifier {} /* Variación del componente */
```

### Ejemplos:
```html
<div class="card"> <!-- Block -->
  <img class="card__image"> <!-- Element -->
  <h3 class="card__title"> <!-- Element -->
  <div class="card__footer"> <!-- Element -->
    <a class="card__footer-link"> <!-- Sub-element -->
```

## 🔐 Seguridad

- HTML5 semántico
- Atributos `rel="noopener noreferrer"` en links externos
- Validación de formularios en cliente y recomendable en servidor
- Sin inline styles (excepto algunos casos necesarios)
- ARIA labels para accesibilidad

## 📱 Breakpoints de Responsive

```css
576px   - Extra pequeño (sm)
768px   - Pequeño (md)
992px   - Mediano (lg)
1200px  - Grande (xl)
1400px  - Extra grande (xxl)
```

## 🚀 Próximos Pasos

1. ✅ Agregar todas las imágenes del proyecto
2. ✅ Reemplazar logos placeholder con logos reales
3. ✅ Integrar formulario de contacto con backend
4. ✅ Agregar Google Analytics
5. ✅ Optimizar imágenes (WebP, compresión)
6. ✅ Implementar lazy loading de imágenes
7. ✅ Migrar a WordPress (si aplica)
8. ✅ Agregar blog/novedades dinámicas
9. ✅ Testing en navegadores y dispositivos reales
10. ✅ Deploy a servidor de producción

## 📧 Soporte

Para preguntas o modificaciones, contactar al equipo de desarrollo.

---

**Última actualización:** Diciembre 2025
**Versión:** 1.0.0
**Estado:** Listo para desarrollo
