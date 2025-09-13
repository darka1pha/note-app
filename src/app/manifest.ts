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
    theme_color: '#ffffff',
    icons: [
      {
        src: '/assets/manifest-icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/assets/manifest-icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/manifest-icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/manifest-icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/assets/manifest-icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    dir: 'ltr',
    categories: ['productivity'],
    lang: 'en-US',
    orientation: 'portrait-primary',
  };
}
