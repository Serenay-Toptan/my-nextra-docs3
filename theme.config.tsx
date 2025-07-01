import React from 'react';
import meta from './meta.json';

const config = {
  logo: (
    <>
      <img src="/vercel.svg" alt="Vercel Logo" width={24} style={{ marginRight: 8 }} />
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>✨ Serenay Toptan Docs</span>
    </>
  ),
  
  project: {
    link: 'https://github.com/Serenay-Toptan/my-nextra-docs3',
  },
  docsRepositoryBase: 'https://github.com/Serenay-Toptan/my-nextra-docs3/blob/main',
  footer: {
    text: `MIT ${new Date().getFullYear()} © Serenay Toptan.`,
  },
  banner: {
    key: 'new-release',
    text: (
      <a href="https://v0-open-in-v0-chi-ten.vercel.app" target="_blank" rel="noopener noreferrer">
        🎉 Check out the new version of our docs site!
      </a>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${meta.title}`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
      },
    };
  },
  primaryHue: 330,
};

export default config;
