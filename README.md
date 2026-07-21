# 🚀 Dilmer Ramirez - Portafolio Web Moderno

<div align="center">

![Angular](https://img.shields.io/badge/Angular-16.2.12-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Portafolio personal moderno con UI/UX responsivo, glassmorphism y animaciones fluidas**

[🌐 Ver Demo en Vivo](https://dilmer-ramirez.web.app)

</div>

---

## 📊 Resumen del Proyecto

| Métrica | Valor |
|---------|-------|
| 📁 Componentes | 9 |
| 📝 Archivos TypeScript | 19 |
| 💻 Líneas de Código | 1,927+ |
| 📦 Tamaño Build | ~299 KB (gzip: ~78 KB) |
| 🎨 Temas | Dark/Light Mode |
| 📱 Responsive | ✅ Mobile-First |

---

## 🎨 Características Principales

### ✨ Diseño Moderno
- **Glassmorphism** - Efectos de cristal translúcido con backdrop-filter
- **Gradient Mesh** - Fondos con gradientes radiales animados
- **Fluid Typography** - Tipografía responsive con clamp()
- **CSS Custom Properties** - Sistema de diseño completo con variables

### 🎬 Animaciones
- **Scroll Animations** - Elementos aparecen al hacer scroll (Intersection Observer)
- **Spring Animations** - Transiciones elásticas con cubic-bezier
- **Loading Skeleton** - Shimmer animation mientras carga el PDF
- **Micro-interacciones** - Hover effects, pulse, float animations

### 🌓 Dark/Light Mode
- Toggle automático basado en preferencias del sistema
- Persistencia en localStorage
- Transiciones suaves entre temas

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints optimizados (768px, 1024px)
- Navbar hamburger menu en móvil

---

## 🏗️ Arquitectura

```
src/app/
├── entity/                    # Modelos de datos
│   └── skillmodel.ts
├── view/                      # Componentes por feature
│   ├── main/                  # Hero + Experiencia
│   ├── about/                 # Sobre mí + CV Viewer
│   ├── professional-skill/    # Habilidades técnicas
│   ├── projects/              # Proyectos destacados
│   ├── contact/               # Formulario de contacto
│   └── component/             # Componentes compartidos
│       ├── navbar-view/       # Navegación glassmorphism
│       ├── footer/            # Pie de página
│       └── pdf-viewer/        # Visor PDF con skeleton
├── app.module.ts              # Módulo principal
├── app-routing.module.ts      # Enrutamiento
└── app.component.*            # Componente raíz
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
| Tecnología | Versión | Uso |
|------------|---------|-----|
| Angular | 16.2.12 | Framework principal |
| TypeScript | 5.1.3 | Tipado estático |
| Bootstrap | 5.3.3 | Grid system |
| Font Awesome | 6.5.1 | Iconos |
| RxJS | 7.8.0 | Programación reactiva |

### Herramientas
| Herramienta | Propósito |
|-------------|-----------|
| Firebase Hosting | Deployment |
| Angular CLI | Build & Serve |
| Git | Control de versiones |

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm 9+
- Angular CLI 16+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/dilmer23/web-personal-dev.git
cd web-personal-dev

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
ng serve

# 4. Abrir en navegador
# http://localhost:4200
```

---

## 📦 Build y Deploy

### Build de Producción
```bash
ng build --configuration production
```

### Deploy a Firebase
```bash
# Instalar Firebase CLI (si no lo tienes)
npm install -g firebase-tools

# Login\ firebase login

# Deploy
firebase deploy --only hosting
```

### URLs de Producción
- 🔗 **Principal:** https://dilmer-ramirez.web.app
- 🔗 **Alternativa:** https://dilmer-ramirez.firebaseapp.com

---

## 📸 Secciones del Portafolio

### 🏠 Hero Section
- Badge de disponibilidad animado
- Título con gradiente animado
- Botones de LinkedIn y Email
- Foto de perfil con efecto glow

### 💼 Experiencia Laboral
- Timeline vertical con animaciones
- Indicador de empleo actual
- Cards glassmorphism

### 🛠️ Habilidades
- Grid de categorías (Frontend/Backend)
- Tags de tecnologías
- Iconos con gradientes

### 📁 Proyectos
- Grid responsivo de proyectos
- Overlay con links a GitHub
- Tech tags por proyecto

### 👤 Sobre Mí
- Bio personal
- Botón Ver CV (visor PDF modal)
- Botón Descargar CV

### 📧 Contacto
- Métodos de contacto (Email, LinkedIn, GitHub)
- Formulario con validación CSS

---

## 🎨 Design System

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| Primary | #3b82f6 | Botones, acentos |
| Primary Dark | #1d4ed8 | Hover states |
| Accent Cyan | #06b6d4 | Gradientes |
| Accent Purple | #8b5cf6 | Gradientes |
| Background Light | #f8fafc | Tema claro |
| Background Dark | #0a0f1a | Tema oscuro |

### Tipografía
- **Display:** Space Grotesk (títulos)
- **Body:** Inter (texto general)

### Espaciado
- Utiliza escala de 4px (0.25rem a 6rem)
- Border radius: 6px a 9999px (full)

---

## 🔧 Configuración

### Variables de Entorno
El proyecto no requiere variables de entorno adicionales para desarrollo local.

### Firebase
```json
{
  "projects": {
    "default": "dilmer-ramirez"
  }
}
```

---

## 📈 Performance

| Métrica | Valor |
|---------|-------|
| Build Time | ~10s |
| Bundle Size | 299 KB |
| Transfer Size | ~78 KB gzip |
| Lighthouse Score | 90+ (estimado) |

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crear branch feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Add nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Dilmer Ramirez**
- 🔗 [LinkedIn](https://www.linkedin.com/in/dilmer-ramirez23)
- 🐙 [GitHub](https://github.com/dilmer23)
- 📧 dilmertiguas@gmail.com

---

<div align="center">

Hecho con ❤️ y Angular

</div>
