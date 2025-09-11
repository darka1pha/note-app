import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Notiva - Note Taking App',
    short_name: 'Notiva',
    description: 'An open source note taking app',
    start_url: '/',
    scope: '.',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    dir: 'ltr',
    categories: ['productivity'],
    lang: 'en-US',
    orientation: 'portrait-primary',
  };
}
