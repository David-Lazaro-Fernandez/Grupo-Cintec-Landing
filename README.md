<br />
<p align="center">
    <img src="./public/dave.png"  alt="Logo" width="70px" >

  <h1 align="center">Grupo Cintec Langing Page</h1>

</p>

## Acerca de

¡Bienvenidos al repositorio de la landing page de Grupo Cintec!

Aquí encontrarán el código y la documentación necesaria para poder utilizar el proyecto en cualquier lugar.

## Getting Started

La aplicación esta construida con las siguientes tecnologías. 

| Tecnología | Descripción | Link                                          |
| ---------- | ----------- | --------------------------------------------- |
| Next.Js    | Framework   | <https://nextjs.org/>                         |
| Tailwind   | CSS Library | <https://tailwindcss.com/>                     |
| Shadcn     | UI Library  | <https://ui.shadcn.com/>                       |
| Node       | Runtime     | <https://nodejs.org/en>                        |
| Npm        | Package     | <https://www.npmjs.com/>                       |
| Typescript | Language    | <https://www.typescriptlang.org/>               |


## Setting Up The Environment

El entorno de un proyecto de Next.js se refiere a la configuración y las dependencias necesarias para desarrollar y ejecutar la aplicación. Next.js utiliza Node.js y npm (Node Package Manager) para gestionar las dependencias del proyecto.

Para configurar el entorno de un proyecto de Next.js, se recomienda seguir los siguientes pasos:

1. Clonar o crear un nuevo repositorio de Next.js.
2. Navegar hasta el directorio del proyecto en la terminal.
3. Ejecutar el comando `npm install` para instalar todas las dependencias necesarias.
4. El comando `npm install` descargará e instalará todas las dependencias especificadas en el archivo **package.json** del proyecto. Esto incluye las dependencias de Next.js, así como cualquier otra dependencia adicional que se haya agregado al proyecto.

5. Una vez que se hayan instalado todas las dependencias, se puede ejecutar el servidor de desarrollo utilizando el comando `npm run dev`. Esto iniciará el servidor de desarrollo de Next.js y se podrá acceder a la aplicación en http://localhost:3000 en el navegador.

Recuerda que también se puede utilizar `yarn` o `pnpm` en lugar de `npm` para instalar las dependencias y ejecutar los comandos, dependiendo de las preferencias del proyecto.

---

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

---

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Puede comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que edita el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Estructura del proyecto

```
.
├── .next/
├── app/
│   ├── components/
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
├── components/ui
│   ├── accordion.tsx
│   └── ...
├── lib
│   └── utils.ts
├── node_modules/
├── public/
│   ├── brands/
│   ├── funcionamos/
│   ├── logo.pnng 
|   └── ...
├── .gitignore
├── package.json
├── package-lock.json
├── .eslintrc.json
├── .gitignore
├── components.json
├── LICENSE
├── next-env.d.ts
├── next.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```


1. **.next/**: Esta carpeta es generada automáticamente por Next.js. Contiene los archivos generados durante el proceso de construcción, como los archivos JavaScript y CSS optimizados para producción, así como otros artefactos de compilación. Es una carpeta que generalmente no necesitas modificar manualmente.

2. **app/**: Esta carpeta es donde generalmente se encuentran los componentes y páginas específicos de tu aplicación. Puedes organizar los archivos como desees, pero lo común es tener subcarpetas para los componentes reutilizables y archivos de páginas individuales.

   - **components/**: Aquí es donde generalmente se encuentran los componentes reutilizables de tu aplicación. Estos componentes pueden ser utilizados en múltiples páginas de tu aplicación.
   
   - **page.tsx**: Este archivo probablemente define la estructura de una página específica de tu aplicación utilizando componentes de React.
   
   - **layout.tsx**: Es común tener un componente de diseño (layout) que define la estructura general de todas las páginas de tu aplicación. Este archivo probablemente contiene componentes de diseño como encabezados, pies de página, barras laterales, etc.

3. **components/ui/**: Esta carpeta parece contener componentes de interfaz de usuario específicos. Por ejemplo, `accordion.tsx` podría ser un componente de interfaz de usuario para un acordeón.

4. **lib/**: Esta carpeta suele contener utilidades o funciones auxiliares que son compartidas en toda la aplicación. El archivo `utils.ts` probablemente contiene funciones de utilidad genéricas que pueden ser utilizadas en varios lugares de tu aplicación.

5. **node_modules/**: Esta carpeta es donde se instalan las dependencias de tu proyecto utilizando npm o yarn. No necesitas interactuar directamente con esta carpeta, ya que las dependencias se manejan automáticamente a través de los gestores de paquetes.

6. **public/**: Esta carpeta es donde se almacenan archivos estáticos, como imágenes, fuentes o archivos de datos. Por ejemplo, `logo.png` probablemente sea el logotipo de tu aplicación que se utiliza en diferentes partes del sitio.

7. **.gitignore**: Este archivo especifica qué archivos y carpetas deben ser ignorados por Git, es decir, no ser rastreados ni versionados por el control de versiones.

8. **package.json** y **package-lock.json**: Estos archivos son parte de la configuración de tu proyecto Node.js. `package.json` contiene metadatos sobre tu proyecto y las dependencias del mismo, mientras que `package-lock.json` es un archivo generado automáticamente que asegura la consistencia de las versiones de las dependencias instaladas.

9. **.eslintrc.json**: Este archivo contiene la configuración para ESLint, una herramienta de análisis estático de código para identificar problemas en tu código JavaScript o TypeScript.

10. **README.md**: Este archivo suele contener información sobre tu proyecto, como instrucciones de instalación, uso, contribución, etc.

11. **next-env.d.ts**: Este archivo es generado automáticamente por Next.js para proveer tipado TypeScript para los módulos de Next.js.

12. **next.config.mjs**: Este archivo es donde puedes definir la configuración personalizada de Next.js para tu proyecto.

13. **tailwind.config.ts**: Si estás utilizando Tailwind CSS en tu proyecto, este archivo contendría la configuración personalizada para Tailwind CSS.

14. **tsconfig.json**: Este archivo contiene la configuración del compilador TypeScript para tu proyecto.

15. **LICENSE**: Este archivo contiene la licencia bajo la cual se distribuye tu proyecto. Es importante elegir una licencia adecuada para tu proyecto.

## Build The App

Para poder desplegar la app primero hay que asegurarse de que no tenga ningun tipo de error dentro de su construcción. 

Para poder construir la app hay que correr el siguiente comando

```bash
npm run build
```

Si todo sale bien deberías ver una lista como esta 
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
 ✓ Generating static pages (5/5) 
 ✓ Collecting build traces    
 ✓ Finalizing page optimization

 Y listo la página estará lista para producción 🚀