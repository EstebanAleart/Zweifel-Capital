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
│   ├── globals.css          # Variables de colores y tema global (OKLCH)
│   ├── layout.tsx           # Layout raíz (fuentes, metadata, analytics)
│   └── page.tsx             # Página principal (single-page)
├── components/
│   ├── navigation.tsx       # Navbar fija: Home, About, Strategy, Contact + "Get in Touch"
│   ├── hero-section.tsx     # Carousel de 3 imágenes con crossfade, stats, CTAs
│   ├── about-section.tsx    # Who We Are + cards de fundadores con bios expandibles
│   ├── services-section.tsx # Strategy + Investment Focus + Our Edge (todo integrado)
│   ├── offices-section.tsx  # Our Presence: London + Buenos Aires (sin fotos de ciudades)
│   ├── contact-section.tsx  # Card por persona: email + teléfono + botón Gmail
│   ├── footer.jsx           # Footer con oficinas, disclaimer legal, copyright
│   ├── theme-provider.tsx   # Provider de temas (next-themes)
│   └── ui/                  # Componentes shadcn/ui (button, card, etc.)
├── public/images/           # Imágenes estáticas
│   ├── logo.png             # Logo Zweifel Capital (azul corporativo)
│   ├── hero-farmland1.jpg   # Hero carousel - imagen 1
│   ├── hero-farmland2.jpg   # Hero carousel - imagen 2
│   ├── hero-farmland3.jpg   # Hero carousel - imagen 3
│   ├── hero-farmland4.jpg   # Imagen en Strategy (Land & Sustainable)
│   ├── kurt-zweifel.jpg     # Foto Kurt (se muestra en B&W con CSS grayscale)
│   ├── delfina-zweifel.jpg  # Foto Delfina (se muestra en B&W con CSS grayscale)
│   ├── construction.jpg     # Imagen en Strategy (Real Estate)
│   ├── construction2.jpg / construction3.jpg
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

1. **Navigation** (`navigation.tsx`)
   - Navbar fija con logo a la izquierda
   - Links agrupados a la derecha: Home, About, Strategy, Contact
   - Botón "Get in Touch" → abre Gmail Compose a delfina@zweifelcapital.com
   - Menú hamburguesa en móvil

2. **Hero** (`hero-section.tsx`)
   - Carousel de 3 imágenes (hero-farmland1/2/3) con crossfade cada 6 segundos
   - Indicadores de imagen (dots) clickeables
   - Tagline: "35+ Years of Investment Heritage"
   - Headline: "Real Assets. Real Partnerships. Real Returns."
   - CTAs: "Learn More" → About | "View Our Strategy" → Strategy
   - Stats: 35+ Years | 2 Continents | 100% Independent Ownership

3. **About / Who We Are** (`about-section.tsx`)
   - 3 párrafos sobre la empresa
   - Cards de fundadores con fotos en **blanco y negro** (CSS `grayscale`)
   - **Kurt Zweifel** — Co-Founder & Chief Investment Officer
     - Ubicación: Buenos Aires, Zurich
     - Trabajo: Sulzer, Lockwood Greene, Agribusiness Entrepreneur
     - Educación: Diplom-Ingenieur ETH Zürich
     - LinkedIn + botón "Read Full Biography" expandible
   - **Delfina Zweifel** — Co-Founder & Chief Executive Officer
     - Ubicación: New York, London, Nassau, Geneva
     - Trabajo: J.P. Morgan, Vivaldi Group, Faro Capital, Welz
     - Educación: Goizueta Business School, Southern Methodist University
     - LinkedIn + botón "Read Full Biography" expandible

4. **Strategy** (`services-section.tsx`) — incluye 4 sub-secciones:
   - **Header**: "Real Assets. Patient Capital. Long-Term Value."
   - **Investment Focus**: 2 cards con imagen (Real Estate + Land & Sustainable) + 2 items sin imagen (Co-Investment Partnerships + Cross-Border Access)
   - **Investment Principles**: 5 principios con checkmarks
   - **Our Edge**: sección oscura con 4 pilares (Partnership Alignment, Global Perspective, Transparency & Governance, Responsible Stewardship) + Multi-Generational Values

5. **Our Presence** (`offices-section.tsx`)
   - Solo texto, sin fotos de ciudades
   - London: 7 Stratton Street, Mayfair, W1J 8LE
   - Buenos Aires: Argentina

6. **Contact** (`contact-section.tsx`)
   - Una card por persona con email y teléfono
   - Delfina: delfina@zweifelcapital.com | +44 7868 140 409
   - Kurt: kurt@zweifelcapital.com | +54 9 2392 40-1456
   - Botones "Contact Delfina" / "Contact Kurt" → abren **Gmail Compose** en nueva pestaña

7. **Footer** (`footer.jsx`)
   - Brand: "Zweifel Capital - Co-Investment Platform - Alternative Investments - Real Assets"
   - Contacto: emails y teléfonos de ambos
   - Oficinas: London (7 Stratton Street, Mayfair) + Nassau (Lyford Cay Club, Lyford Cay Drive)
   - Disclaimer legal
   - Copyright dinámico + link LinkedIn

## Paleta de Colores

### Esquema Actual: Azul + Esmeralda
Tema claro con dos colores principales:

**Azul corporativo** (matching logo) — para botones y elementos primarios:
- `bg-blue-800 hover:bg-blue-900` — Botones (CTA, Get in Touch, Contact)
- `hover:text-blue-800` — Links del nav en hover
- `bg-blue-800` — Iconos de oficinas, iconos de investment focus

**Esmeralda** — para acentos y highlights:
- `text-emerald-600` — Labels de sección, títulos destacados, subtítulos de cards
- `text-emerald-400` — Texto sobre fondos oscuros (hero, Our Edge, footer, títulos fundadores)
- `text-emerald-500` — Checkmarks de principios
- `text-emerald-300` — Tagline del hero
- `bg-emerald-100` — Fondo de iconos en contact
- `bg-emerald-500/20` — Badge del hero

**Neutros:**
- `bg-white` / `bg-slate-50` — Fondos de secciones
- `text-slate-900` / `text-slate-700` / `text-slate-600` — Textos
- `bg-slate-900` — Secciones oscuras (hero overlay, Our Edge, footer)

### Variables CSS en `globals.css`
```css
--primary: oklch(0.35 0.15 240);   /* Azul corporativo */
--accent: oklch(0.45 0.12 150);    /* Verde/esmeralda */
--background: oklch(0.99 0.005 240); /* Blanco */
```

**Nota:** Los componentes usan clases de Tailwind directas (`blue-800`, `emerald-600`, etc.) en vez de las variables CSS. Para cambiar colores hay que modificar cada componente.

## Branches

- **`main`** — Branch principal
- **`estilo-anterior`** — Branch de trabajo actual (todas las correcciones de la clienta)
- **`estilos`** — Tiene el estilo dark navy blue antiguo (commit `a45841f`)
- **`develop`** — Branch de desarrollo

## Datos de Contacto (hardcodeados en componentes)

| Dato | Valor |
|------|-------|
| Email Delfina | delfina@zweifelcapital.com |
| Email Kurt | kurt@zweifelcapital.com |
| Teléfono Delfina | +44 7868 140 409 |
| Teléfono Kurt | +54 9 2392 40-1456 |
| LinkedIn Delfina | linkedin.com/in/delfina-zweifel-b9030241/ |
| LinkedIn Kurt | linkedin.com/in/kurt-zweifel/ |
| Oficina London | 7 Stratton Street, Mayfair, W1J 8LE, London |
| Oficina Nassau | Lyford Cay Club, Lyford Cay Drive, Nassau, Bahamas |
| Oficina Buenos Aires | Buenos Aires, Argentina |

## Comportamiento de Botones

| Botón | Ubicación | Acción |
|-------|-----------|--------|
| Get in Touch | Navigation | Gmail Compose → delfina@zweifelcapital.com |
| Learn More | Hero | Scroll → About section |
| View Our Strategy | Hero | Scroll → Strategy section |
| Read Full Biography | About (x2) | Expande/colapsa bio completa (state local) |
| Contact Delfina | Contact | Gmail Compose → delfina@zweifelcapital.com |
| Contact Kurt | Contact | Gmail Compose → kurt@zweifelcapital.com |

## Funcionalidades Especiales

- **Hero Carousel**: 3 imágenes rotan cada 6 segundos con crossfade (`transition-opacity duration-1500`). Indicadores de puntos clickeables abajo.
- **Fotos B&W**: Fotos de fundadores con `grayscale` CSS. Posición ajustada con `objectPosition` inline style.
- **Bios Expandibles**: Cada fundador tiene un `useState` que controla la visibilidad de la biografía completa.
- **Gmail Compose**: Los botones de contacto abren `https://mail.google.com/mail/?view=cm&to=...` en nueva pestaña.
- **Scroll Suave**: Navegación con `scrollIntoView({ behavior: "smooth" })`.

## Pendientes / Próximos Pasos

- [ ] Revisar responsive en móvil
- [ ] Optimizar imágenes (formatos WebP/AVIF)
- [ ] Considerar usar variables CSS (`--primary`, `--accent`) en componentes para facilitar cambios de tema futuros
- [ ] Mergear `estilo-anterior` a `main` cuando esté aprobado por la clienta

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

## Tipos de Commit

| Tipo | Uso | Ejemplo |
|------|-----|---------|
| feat | Nueva funcionalidad | feat: agregar filtro por etapa en leads |
| fix | Corrección de bug | fix: corregir cálculo de días vencidos |
| perf | Mejora de rendimiento | perf: optimizar query de leads con SQL directo |
| refactor | Refactorización sin cambio funcional | refactor: extraer lógica de filtros a hook |
| style | Cambios de estilo/formato | style: ajustar espaciado en cards móviles |
| docs | Documentación | docs: agregar guía de usuario |
| chore | Tareas de mantenimiento | chore: actualizar dependencias |
| test | Tests | test: agregar tests para API de leads |
| build | Cambios de build/deploy | build: configurar variables de Vercel |
