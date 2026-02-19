# Zweifel Capital - Website

Website corporativo para **Zweifel Capital**, un family office dedicado a inversiones alternativas en Latinoamérica y España, con foco en agricultura, tierra y activos reales.

## Stack Tecnológico

- **Framework:** Next.js 14.2.16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4.1.9 con variables CSS (OKLCH)
- **Componentes UI:** shadcn/ui (basado en Radix UI)
- **Fuentes:** Inter (sans-serif) + Playfair Display (serif/títulos)
- **Iconos:** Lucide React
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

## Estructura del Proyecto

```
Zweifel-Capital/
├── app/
│   ├── globals.css          # Variables de colores y tema global
│   ├── layout.tsx           # Layout raíz (fuentes, metadata, analytics)
│   └── page.tsx             # Página principal (single-page)
├── components/
│   ├── navigation.tsx       # Navbar fija con logo, links y menú móvil
│   ├── hero-section.tsx     # Banner principal con imagen de fondo, stats
│   ├── about-section.tsx    # Sección "About" con cards de fundadores + timeline
│   ├── services-section.tsx # Estrategia de inversión, áreas y ventajas
│   ├── offices-section.tsx  # Oficinas (London, Nassau) con imágenes
│   ├── contact-section.tsx  # Contacto (email, WhatsApp, ubicaciones)
│   ├── footer.jsx           # Footer con disclaimer legal
│   ├── theme-provider.tsx   # Provider de temas (next-themes)
│   └── ui/                  # Componentes shadcn/ui (button, card, etc.)
├── public/images/           # Imágenes estáticas
│   ├── logo.png
│   ├── hero-farmland.jpg
│   ├── kurt-zweifel.jpg
│   ├── delfina-zweifel.jpg
│   ├── construction.jpg / construction2.jpg / construction3.jpg
│   ├── capital-markets.jpg
│   ├── london.jpg / office-london.jpg
│   ├── nassau.jpg / nassau2.jpg / office-nassau.jpg
│   └── ...
├── lib/                     # Utilidades (cn helper)
├── hooks/                   # Custom hooks
└── styles/                  # CSS adicional (backup)
```

## Secciones de la Página

La web es **single-page** con scroll suave entre secciones:

1. **Navigation** - Navbar fija con links: Home, About, Strategy, Offices, Contact + botón "Get in Touch"
2. **Hero** - Imagen de fondo (farmland), tagline "40+ Years", título principal, CTAs, barra de stats
3. **About** - Cards de fundadores (Kurt y Delfina Zweifel) con fotos, bios y timeline de la empresa
4. **Strategy** - Áreas de inversión (Agriculture & Land, Real Estate), ventajas competitivas, principios
5. **Offices** - London (1 Knightsbridge Green) y Nassau (Lyford Cay Drive) con fotos
6. **Contact** - Info de contacto, botones de email y WhatsApp
7. **Footer** - Contacto, oficinas, disclaimer legal, copyright

## Colores y Estilos

### Esquema Actual (branch `main` / `estilo-anterior`)
Tema claro con acentos **amber/dorado** hardcodeados en los componentes:
- **Fondo:** blanco / slate-50
- **Texto:** slate-700 / slate-900
- **Acentos:** amber-400, amber-500, amber-600 (botones, highlights, iconos)
- **Secciones oscuras:** slate-900 (hero overlay, "Our Edge", footer)

### Variables CSS en `globals.css`
Los colores del tema se definen con variables CSS en formato OKLCH:
- `--primary`: azul corporativo `oklch(0.35 0.15 240)`
- `--accent`: verde `oklch(0.45 0.12 150)`
- `--background`: blanco `oklch(0.99 0.005 240)`

**NOTA IMPORTANTE:** Los componentes actualmente usan colores **amber** hardcodeados (ej: `bg-amber-500`, `text-amber-600`) en vez de las variables CSS. Para cambiar colores hay que modificar TANTO `globals.css` como cada componente individualmente.

## Evolución de Estilos (Historial Git)

| Commit | Branch | Estilo | Descripción |
|--------|--------|--------|-------------|
| `fb24169` | main | Grayscale | Tema original sin color, todo en grises |
| `6e63293` | estilos | Grayscale | Cambio de estilos (sin cambios de color) |
| `6d3201d` | estilos | Grayscale | Logo estilo |
| `a45841f` | estilos | **Dark Navy Blue** | Tema oscuro premium con azul corporativo |
| `23dd221` | main | - | Se agregaron fotos |
| `2114d64` | main | **Light + Amber** | UI actual con amber/dorado, nueva sección offices |

### Esquema Dark Navy (commit `a45841f` en branch `estilos`)
```css
--background: oklch(0.15 0.03 240);  /* Navy oscuro */
--primary: oklch(0.55 0.15 240);     /* Azul corporativo */
--accent: oklch(0.65 0.10 200);      /* Azul claro */
--border: oklch(0.30 0.03 240);      /* Borde sutil */
--secondary: oklch(0.22 0.03 240);   /* Slate oscuro */
```

### Esquema Actual Light + Green (commit `2114d64`)
```css
--background: oklch(0.99 0.005 240);  /* Blanco */
--primary: oklch(0.35 0.15 240);      /* Azul corporativo */
--accent: oklch(0.45 0.12 150);       /* Verde */
```

## Branches

- **`main`** - Branch principal, versión actual con estilo light + amber
- **`estilo-anterior`** - Branch actual de trabajo (basado en main)
- **`estilos`** - Tiene el estilo dark navy blue (commit `a45841f`)
- **`develop`** - Branch de desarrollo

## Datos de Contacto (hardcodeados en componentes)

- **Email Delfina:** delfina@zweifelcapital.com
- **Email Kurt:** kurt@zweifelcapital.com
- **Teléfono/WhatsApp:** +44 077 359 36395
- **LinkedIn Delfina:** linkedin.com/in/delfina-zweifel-b9030241/
- **Oficina London:** 1 Knightsbridge Green, SW1X 7NE, London, UK
- **Oficina Nassau:** Lyford Cay Drive, P.O. Box N-7776, Bahamas

## Pendientes / Próximos Pasos

- [ ] **Volver al estilo azul y verde anterior** - Reemplazar todos los colores amber hardcodeados por azul/verde, y que los componentes usen las variables CSS del tema
- [ ] Considerar usar las variables CSS (`--primary`, `--accent`) en los componentes en vez de colores hardcodeados para facilitar cambios de tema futuros
- [ ] Revisar responsive en móvil
- [ ] Optimizar imágenes (formatos WebP/AVIF)

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint
npm run lint
```


Tipos de Commit
Tipo	Uso	Ejemplo
feat	Nueva funcionalidad	feat: agregar filtro por etapa en leads
fix	Corrección de bug	fix: corregir cálculo de días vencidos
perf	Mejora de rendimiento	perf: optimizar query de leads con SQL directo
refactor	Refactorización sin cambio funcional	refactor: extraer lógica de filtros a hook
style	Cambios de estilo/formato	style: ajustar espaciado en cards móviles
docs	Documentación	docs: agregar guía de usuario
chore	Tareas de mantenimiento	chore: actualizar dependencias
test	Tests	test: agregar tests para API de leads
build	Cambios de build/deploy	build: configurar variables de Vercel
