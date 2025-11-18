#  Proyecto de Automatización con Playwright

Este repositorio contiene un proyecto de pruebas automatizadas desarrollado con [Playwright](https://playwright.dev/), orientado a validar flujos web de forma robusta y moderna.

---

##  Tecnologías utilizadas

- **Node.js / npm:** `v10.9.2`
- **Playwright:** Framework de automatización para testing end-to-end.
- **Visual Studio Code:** Editor recomendado con extensión oficial para Playwright.

---

##  Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js + npm 10.9.2**

```bash
# Puedes instalar una versión específica de Node.js usando nvm
nvm install 10.9.2
nvm use 10.9.2
```

---

##  Instalación del proyecto

1. **Inicializa el proyecto con Playwright**

```bash
npm init playwright@latest
```

Sigue las instrucciones del asistente para configurar tu entorno de pruebas.

2. **Instala las dependencias**

```bash
npm install
```

---

##  Ejecución de pruebas

###  Ejecutar en modo virtual (UI de Playwright)

```bash
npx playwright test --ui
```

Esto abrirá una interfaz visual donde puedes ejecutar y depurar tus tests fácilmente.

---

## Resultados de pruebas

Después de cada ejecución, Playwright genera evidencia visual de los tests en la carpeta:

```
/test-results/
```

Aquí encontrarás:
- Capturas de pantalla screenshot: se puede habilitar en playwright.config.ts  en el metedo defineConfig la opcion use:'on',
- Videos  se puede habilitar en playwright.config.ts  en el metedo defineConfig la opcion use: video: 'on'
- Reportes HTML

---

## Extensión recomendada para VS Code

Si usas [Visual Studio Code](https://code.visualstudio.com/), puedes instalar la extensión:

> **Playwright Test for VSCode**

Te permite:
- Correr tests directamente desde el editor
- Ver resultados y errores
- Depurar paso a paso

---

## Estructura del proyecto (sugerida)

```bash
mi-proyecto-automatizado/
├── tests/             # Archivos de prueba
├── pages/             # Page Object Models
├── utils/             # Configuración y helpers
├── test-results/      # Resultados automáticos
├── README.md
└── package.json
```

