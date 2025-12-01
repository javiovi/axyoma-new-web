# Guía de Imágenes - Axyoma

## 📸 Imágenes por Página

### Home (index.html)

| Sección | Nombre | Dimensiones Recomendadas | Ruta |
|---------|--------|--------------------------|------|
| Hero | hero-main.jpg | 600x400px (móvil), 800x500px (desktop) | `assets/images/hero-main.jpg` |
| About | team-about.jpg | 600x400px | `assets/images/team-about.jpg` |
| Casos 1 | case-agro.jpg | 400x300px | `assets/images/case-agro.jpg` |
| Casos 2 | case-health.jpg | 400x300px | `assets/images/case-health.jpg` |
| Casos 3 | case-industry.jpg | 400x300px | `assets/images/case-industry.jpg` |
| Featured News 1 | news-convos.jpg | 600x400px | `assets/images/news-convos.jpg` |
| Featured News 2 | news-change.jpg | 600x400px | `assets/images/news-change.jpg` |

### Nosotros (pages/nosotros.html)

| Sección | Nombre | Dimensiones | Ruta |
|---------|--------|------------|------|
| Team | team-group.jpg | 600x400px | `assets/images/team-group.jpg` |

### Servicios (pages/servicios.html)

| Servicio | Nombre | Dimensiones | Ruta |
|----------|--------|------------|------|
| Consultoría | service-strategy.jpg | 400x300px | `assets/images/service-strategy.jpg` |
| Marketing | service-marketing.jpg | 400x300px | `assets/images/service-marketing.jpg` |
| Diseño | service-design.jpg | 400x300px | `assets/images/service-design.jpg` |
| Productora | service-video.jpg | 400x300px | `assets/images/service-video.jpg` |
| Publicidad | service-ads.jpg | 400x300px | `assets/images/service-ads.jpg` |
| Desarrollo | service-dev.jpg | 400x300px | `assets/images/service-dev.jpg` |
| Data | service-data.jpg | 400x300px | `assets/images/service-data.jpg` |

### Casos (pages/casos.html)

| Sección | Nombre | Dimensiones | Ruta |
|---------|--------|------------|------|
| Principal | agroadvance-hero.jpg | 800x500px | `assets/images/agroadvance-hero.jpg` |
| Sobre 1 | agroadvance-team.jpg | 300x250px | `assets/images/agroadvance-team.jpg` |
| Sobre 2 | agroadvance-facility.jpg | 300x250px | `assets/images/agroadvance-facility.jpg` |
| Sobre 3 | agroadvance-product.jpg | 300x250px | `assets/images/agroadvance-product.jpg` |
| Alianza | agroadvance-field.jpg | 600x400px | `assets/images/agroadvance-field.jpg` |

### Clientes (pages/clientes.html)

Logos de clientes (blanco/gris, fondo transparente):

| Cliente | Nombre | Dimensiones | Ruta |
|---------|--------|------------|------|
| Cliente 1 | logo-client1.svg | 200x100px | `assets/images/logos/client1.svg` |
| Cliente 2 | logo-client2.svg | 200x100px | `assets/images/logos/client2.svg` |
| ... | ... | ... | ... |

### Novedades (pages/novedades.html)

| Artículo | Nombre | Dimensiones | Ruta |
|----------|--------|------------|------|
| Conversaciones | news-convos-detail.jpg | 400x300px | `assets/images/news-convos.jpg` |
| El cambio | news-change-detail.jpg | 400x300px | `assets/images/news-change.jpg` |
| Reportes (9x) | report-productivity-[1-9].jpg | 300x250px | `assets/images/reports/productivity-[1-9].jpg` |

### Súmate (pages/sumate.html)

| Sección | Nombre | Dimensiones | Ruta |
|---------|--------|------------|------|
| Hero | team-jobs.jpg | 600x400px | `assets/images/team-jobs.jpg` |

## 🎯 Especificaciones Técnicas

### Formatos Recomendados
- **Fotografías**: JPG (compresión 80-85)
- **Logos/Iconos**: SVG (escalable, sin pérdida)
- **Gráficos**: PNG (si necesita transparencia)
- **Fondos**: WebP (si el navegador soporta)

### Optimización
- Máximo 200KB por imagen (después de compresión)
- Usar herramientas: TinyPNG, ImageOptim, Squoosh
- Proporciones: 16:9 para heros, 1:1 para cuadrados

### Responsive
Para mejores resultados, crear versiones múltiples:
```
image.jpg (original)
image-md.jpg (mediano, 600px ancho)
image-sm.jpg (pequeño, 400px ancho)
```

## 📝 Ejemplo: Cómo Reemplazar Placeholders

### Antes (placeholder)
```html
<div class="hero__image-placeholder">
  Imagen Hero
</div>
```

### Después (con imagen real)
```html
<img
  src="../assets/images/hero-main.jpg"
  alt="Transformación digital con Axyoma"
  class="hero__image"
  loading="lazy"
>
```

O con lazy loading nativo:
```html
<picture>
  <source media="(max-width: 768px)" srcset="../assets/images/hero-main-sm.jpg">
  <img
    src="../assets/images/hero-main.jpg"
    alt="Transformación digital con Axyoma"
    loading="lazy"
  >
</picture>
```

## 🎨 Logos de Clientes

Guardar en: `assets/images/logos/`

Todos deben ser:
- Fondo transparente (PNG o SVG)
- En escala de grises o color neutral
- Tamaño mínimo: 200x100px
- Máximo 50KB por archivo

## 📱 Iconos

Actualmente se usan emojis. Opciones para cambiar:

1. **FontAwesome** (agregar CDN):
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

2. **SVG Inline** (sin dependencias):
```html
<svg class="icon" viewBox="0 0 24 24">
  <path d="..."/>
</svg>
```

3. **Iconos personalizados** (recomendado para marca):
```html
<img src="assets/icons/strategy.svg" alt="Estrategia" class="service__icon">
```

## 📊 Estructura de Carpetas Recomendada

```
assets/images/
├── logos/
│   ├── client1.svg
│   ├── client2.svg
│   └── ...
├── reports/
│   ├── productivity-1.jpg
│   ├── productivity-2.jpg
│   └── ...
├── hero-main.jpg
├── team-about.jpg
├── case-agro.jpg
├── news-convos.jpg
└── ...
```

## ✅ Checklist Antes de Publicar

- [ ] Todas las imágenes comprimidas (max 200KB cada una)
- [ ] Alt text descriptivo en cada imagen
- [ ] Imágenes responsivas (múltiples tamaños)
- [ ] Logos de clientes en escala de grises
- [ ] Testing visual en móvil, tablet y desktop
- [ ] Performance: Google PageSpeed >85
- [ ] Imágenes en formatos modernos (WebP con fallback)

## 📞 Notas

- Las imágenes pueden agregarse después de que el HTML/CSS esté listo
- Los placeholders facilitan el maquetación primero, imágenes después
- Mantener estructura de carpetas consistente para fácil mantenimiento
