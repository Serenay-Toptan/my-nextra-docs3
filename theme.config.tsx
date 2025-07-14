import Logo from './components/Logo'
import meta from './meta.json'

const config = {
  logo: function LogoWrapper() {
    return (
      <div className="custom-logo">
        <Logo />
      </div>
    )
  },

  search: false,
  sidebar: false,

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
      <a
        href="https://v0-open-in-v0-chi-ten.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
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

  navbar: {
    extraContent: (
      <div className="custom-menu">
        <ul className="custom-menu-list">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
    ),
  },
}

export default config
