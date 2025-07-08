import Logo from './components/Logo'
import meta from './meta.json'


const config = {
  logo: function LogoWrapper() {
    return <Logo />;
  },
  
  
  search: false, 
  

 

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
    }
  },

  primaryHue: 330,
}

export default config
