# Minijuegos Open Source

Este proyecto es una colección de **minijuegos Open Source** desarrollados con [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/) y [shadcn](https://ui.shadcn.com/). Diseñado para ser modular y fácil de extender.

Cada minijuego está implementado como una página independiente, lo que facilita la navegación y el mantenimiento del código. Enfocado en la colaboración, el proyecto sigue una estructura clara y utiliza tecnologías modernas para ofrecer una experiencia de desarrollo fluida y eficiente.

## ¿Cómo contribuir?

¡Gracias por tu interés en contribuir! Sigue estas pautas para asegurarte de que tu aporte se integre correctamente al proyecto:

### Estructura del proyecto

- **Cada juego es una página**: cada minijuego se encuentra como una página independiente dentro del proyecto.

- **Uso de `useSetRecentlyPlayed`**: en el componente principal del juego, debes incluir el custom hook `useSetRecentlyPlayed` para registrar el juego en la sección "Jugado recientemente".

  - Este hook acepta un único parámetro: el nombre del minijuego, que debe coincidir exactamente con el nombre de la URL.

- **Organización por carpetas**:

  - Todos los componentes, constantes, contextos, custom hooks, etc., específicos de un juego deben crearse dentro de la carpeta `/src/[tipo]/[juego]`.
  - Los componentes, constantes, contextos, custom hooks, etc. generales (que no pertenecen a un juego específico) deben almacenarse en `/src/[tipo]/general`.

- **Exportaciones centralizadas**: cada carpeta debe incluir un archivo `index.ts` para exportar todos los archivos de esa carpeta.

### Estilo y componentes de UI

- El width máximo para desktop es de 1000px, por lo que se recomienda utilizar `sm:w-[1000px]`.

- El proyecto utiliza [shadcn](https://ui.shadcn.com/) para los componentes de la interfaz de usuario, asegurando consistencia y una experiencia visual moderna. Por favor, sigue este estándar al agregar o modificar componentes.

---

_Hecho con ❤️ por Nacho._
