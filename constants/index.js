export const CATEGORIES = [{
  id: 'all',
  name: 'Todas las categorías'
}, {
  id: 'web',
  name: 'Sitios web'
}, {
  id: 'mobile',
  name: 'Aplicaciones móviles'
}, {
  id: 'api',
  name: 'APIs'
}]

export const PORTFOLIO_ITEMS = [{
  id: 'inlet',
  category: ['all', 'web', 'mobile'],
  title: 'Inlet',
  image: '/images/portfolio/cover/inlet.png',
  topic: 'Comunidades',
  tags: ['ReactJS', 'React Native', 'HTML', 'CSS', 'AWS', 'Gitlab', 'Google Analytics', 'Google Tag Manager'],
  description: 'Plataforma que facilita la conexión entre comunidades.'
}, {
  id: 'voyhoy',
  category: ['all', 'web', 'api'],
  title: 'Voyhoy',
  image: '/images/portfolio/cover/voyhoy.png',
  topic: 'Viajes',
  tags: ['AngularJS', 'HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL', 'AWS', 'Github', 'Adyen', 'PayU', 'Paypal', 'Voucherify', 'Optimizely'],
  description: 'Plataforma que permite a los usuarios planificar sus viajes, incluyendo la posibilidad de ' +
    'conexiones entre diferentes tipos de transporte, lo que denominamos Smart Ticket.'
}, {
  id: 'damath',
  category: ['all', 'web'],
  title: 'Damath',
  image: '/images/portfolio/cover/damath.png',
  topic: 'Diseño',
  tags: ['Design', 'HTML', 'CSS', 'JavaScript', 'Wordpress'],
  description: 'Sitio web para gestionar ventas de productos cortados con láser.'
}, {
  id: 'techk',
  category: ['all', 'web', 'api'],
  title: 'techk',
  image: '/images/portfolio/cover/techk.png',
  topic: 'Ventas',
  url: 'https://www.instoreview.com/inicio',
  tags: ['Nextjs', 'HTML', 'CSS', 'JavaScript', 'Python', 'Docker'],
  description: 'Plataforma que permite clasificar los productos que entran a las tiendas.'
}, {
  id: 'cocha',
  category: ['all', 'web', 'api'],
  title: 'Cocha',
  image: '/images/portfolio/cover/cocha.png',
  topic: 'Viajes',
  url: 'https://www.cocha.com/',
  tags: ['Angular 7', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Bitbucket', 'MySql'],
  description: 'Sistema web que ayudar a los vendedores a gestionar los pasajes de sus clientes.'
}, {
  id: 'tendy',
  category: ['all', 'web', 'api', 'mobile'],
  title: 'Tendy',
  image: '/images/portfolio/cover/tendy.png',
  topic: 'Finanzas',
  url: 'https://tendy.cash/',
  tags: ['VueJS', 'React Native', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'AWS', 'Github'],
  description: 'Plataforma que permite “Otorgar propinas de una forma fácil y anónima”.'
}, {
  id: 'idc',
  category: ['all', 'web'],
  title: 'IDC',
  image: '/images/portfolio/cover/idc.png',
  topic: 'Comunidades',
  tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'AWS', 'Github'],
  description: 'Sistema de gestión de contenido y educación.'
}, {
  id: 'a21',
  category: ['all', 'mobile'],
  title: 'A21',
  image: '/images/portfolio/cover/a21.png',
  topic: 'Viajes',
  url: 'https://www.antarctica21.com/',
  tags: ['React Native', 'HTML', 'CSS', 'JavaScript', 'Redux'],
  description: 'Aplicación móvil que permite gestionar toda la experiencia del viaje, desde la reserva hasta el check-out'
}, {
  id: 'dtemite',
  category: ['all', 'mobile', 'api'],
  title: 'Dtemite',
  image: '/images/portfolio/cover/dtemite.png',
  topic: 'Finanzas',
  tags: ['Python', 'Flask', 'Bitbucket', 'Redis'],
  description: 'API para la automatización de procesos de facturación contra el SII.'
}, {
  id: 'nrp',
  category: ['all', 'web'],
  title: 'NextRoundPartners',
  image: '/images/portfolio/cover/nrp.png',
  topic: 'Diseño',
  url: 'https://www.nextroundpartners.com/',
  tags: ['ReactJS', 'Design', 'HTML', 'CSS'],
  description: 'Sitio web para la empresa NextRoundPartners.'
}, {
  id: 'ona',
  category: ['all', 'web'],
  title: 'OnaStudio',
  image: '/images/portfolio/cover/ona.png',
  topic: 'Diseño',
  url: 'https://www-onastudio-co.vercel.app/',
  tags: ['NextJS', 'Design', 'HTML', 'CSS'],
  description: 'Sitio web para la empresa OnaStudio.'
}, {
  id: 'lopesa',
  category: ['all', 'web', 'mobile'],
  title: 'Lopesa',
  image: '/images/portfolio/cover/lopesa.png',
  topic: 'Ventas',
  tags: ['Angular 12', 'HTML', 'CSS', 'JavaScript', 'Ionic', 'Github'],
  description: 'Plataforma que permite gestionar productos.'
}, {
  id: 'switchmultimpresor',
  category: ['all', 'web'],
  title: 'Switch Multi Impresor',
  image: '/images/portfolio/cover/bch_switchmultimpresor.png',
  topic: 'Banca',
  tags: ['Angular 9', 'HTML', 'CSS', 'JavaScript', 'Bitbucket'],
  description: 'Sistema bancario que permite gestionar proveedores.'
}, {
  id: 'cobranzas',
  category: ['all', 'web'],
  title: 'Cobranzas',
  image: '/images/portfolio/cover/bch-cobranzas.png',
  topic: 'Banca',
  tags: ['AngularJS', 'HTML', 'CSS', 'JavaScript', 'Bitbucket', 'Grunt'],
  description: 'Sistema bancario que permite gestionar cobros no realizados por los clientes.'
}, {
  id: 'agendamiento',
  category: ['all', 'web'],
  title: 'Agendamiento',
  image: '/images/portfolio/cover/bch-agendamiento.png',
  topic: 'Banca',
  tags: ['AngularJS', 'HTML', 'CSS', 'JavaScript', 'Bitbucket', 'Grunt'],
  description: 'Sistema bancario que permite gestionar el agendamiento interno de los recursos.'
}, {
  id: 'contact-center',
  category: ['all', 'web'],
  title: 'Contact Center',
  image: '/images/portfolio/cover/bch-contact-center.png',
  topic: 'Banca',
  tags: ['Angular 9', 'HTML', 'CSS', 'JavaScript', 'Bitbucket', 'SonarQube'],
  description: 'Sistema bancario que permite gestionar las llamadas telefónicas realizada por los clientes.'
}, {
  id: 'svp-condominio',
  category: ['all', 'web'],
  title: 'SVP Condominio',
  image: '/images/portfolio/cover/svp-condominio.png',
  topic: 'Condominios',
  url: 'https://condominio-svp.vercel.app/',
  tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Github'],
  description: 'Plataforma que permite gestionar toda la información de su condominio.'
}]
