import { defineConfig } from 'astro/config';

/*impotar, incorporar tailwind*/
import tailwind from '@astrojs/tailwind';

// https://astro.build/config

// Añadir los elemento de la integracion
export default defineConfig({
    integrations: [tailwind()]
});
