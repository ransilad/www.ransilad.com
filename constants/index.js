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
  image: '/images/portfolio/inlet.avif',
  topic: 'Comunidades',
  tags: ['ReactJS', 'React Native', 'JavaScript', 'HTML', 'CSS', 'AWS', 'Gitlab', 'Google Analytics', 'Google Tag Manager'],
  description: 'Plataforma que facilita la conexión entre comunidades.'
}, {
  id: 'voyhoy',
  category: ['all', 'web', 'api'],
  title: 'Voyhoy',
  image: '/images/portfolio/voyhoy.avif',
  topic: 'Viajes',
  tags: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Python', 'PostgreSQL', 'AWS', 'Github', 'Adyen', 'PayU', 'Paypal', 'Voucherify', 'Optimizely'],
  description: 'Plataforma que permite a los usuarios planificar sus viajes, incluyendo la posibilidad de ' +
    'conexiones entre diferentes tipos de transporte, lo que denominamos Smart Ticket.'
}, {
  id: 'damath',
  category: ['all', 'web'],
  title: 'Damath',
  image: '/images/portfolio/damath.avif',
  topic: 'Diseño',
  tags: ['Design', 'HTML', 'CSS', 'Wordpress'],
  description: 'Sitio web para gestionar ventas de productos cortados con láser.'
}, {
  id: 'techk',
  category: ['all', 'web', 'api'],
  title: 'techk',
  image: '/images/portfolio/techk.avif',
  topic: 'Ventas',
  url: 'https://www.instoreview.com/inicio',
  tags: ['Nextjs', 'JavaScript', 'HTML', 'CSS', 'Python', 'Docker'],
  description: 'Plataforma que permite clasificar los productos que entran a las tiendas.'
}, {
  id: 'cocha',
  category: ['all', 'web', 'api'],
  title: 'Cocha',
  image: '/images/portfolio/cocha.avif',
  topic: 'Viajes',
  url: 'https://www.cocha.com/',
  tags: ['Angular 7', 'JavaScript', 'Bootstrap', 'HTML', 'CSS', 'NodeJS', 'Bitbucket', 'MySql'],
  description: 'Sistema web que ayudar a los vendedores a gestionar los pasajes de sus clientes.'
}, {
  id: 'tendy',
  category: ['all', 'web', 'api', 'mobile'],
  title: 'Tendy',
  image: '/images/portfolio/tendy.avif',
  topic: 'Finanzas',
  url: 'https://tendy.cash/',
  tags: ['VueJS', 'React Native', 'JavaScript', 'HTML', 'CSS', 'NodeJS', 'AWS', 'Github'],
  description: 'Plataforma que permite “Otorgar propinas de una forma fácil y anónima”.'
}, {
  id: 'idc',
  category: ['all', 'web'],
  title: 'IDC',
  image: '/images/portfolio/idc.avif',
  topic: 'Comunidades',
  tags: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'AWS', 'Github'],
  description: 'Sistema de gestión de contenido y educación.'
}, {
  id: 'a21',
  category: ['all', 'mobile'],
  title: 'A21',
  image: '/images/portfolio/a21.avif',
  topic: 'Viajes',
  url: 'https://www.antarctica21.com/',
  tags: ['React Native', 'JavaScript', 'HTML', 'CSS', 'Redux'],
  description: 'Aplicación móvil que permite gestionar toda la experiencia del viaje, desde la reserva hasta el check-out'
}, {
  id: 'dtemite',
  category: ['all', 'mobile', 'api'],
  title: 'Dtemite',
  image: '/images/portfolio/dtemite.avif',
  topic: 'Finanzas',
  url: 'https://www.dtemite.cl/',
  tags: ['Python', 'Flask', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Redux', 'Bitbucket', 'Redis'],
  description: 'ERP que centraliza la información referente al SII en un solo sitio.'
}, {
  id: 'nrp',
  category: ['all', 'web'],
  title: 'NextRoundPartners',
  image: '/images/portfolio/nrp.avif',
  topic: 'Diseño',
  url: 'https://www.nextroundpartners.com/',
  tags: ['ReactJS', 'JavaScript', 'Design', 'HTML', 'CSS', 'Bootstrap'],
  description: 'Sitio web para la empresa NextRoundPartners.'
}, {
  id: 'ona',
  category: ['all', 'web'],
  title: 'OnaStudio',
  image: '/images/portfolio/ona.avif',
  topic: 'Diseño',
  url: 'https://www-onastudio-co.vercel.app/',
  tags: ['NextJS', 'JavaScript', 'Design', 'HTML', 'CSS'],
  description: 'Sitio web para la empresa OnaStudio.'
}, {
  id: 'lopesa',
  category: ['all', 'web', 'mobile'],
  title: 'Lopesa',
  image: '/images/portfolio/lopesa.avif',
  topic: 'Ventas',
  tags: ['Angular 12', 'JavaScript', 'HTML', 'CSS', 'Ionic', 'Bootstrap', 'Github'],
  description: 'Plataforma que permite gestionar productos.'
}, /* {
  id: 'switchmultimpresor',
  category: ['all', 'web'],
  title: 'Switch Multi Impresor',
  image: '/images/portfolio/cover/bch_switchmultimpresor.webp',
  topic: 'Banca',
  tags: ['Angular 9', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Bitbucket'],
  description: 'Sistema bancario que permite gestionar proveedores.'
}, {
  id: 'cobranzas',
  category: ['all', 'web'],
  title: 'Cobranzas',
  image: '/images/portfolio/cover/bch-cobranzas.webp',
  topic: 'Banca',
  tags: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Bitbucket', 'Grunt'],
  description: 'Sistema bancario que permite gestionar cobros no realizados por los clientes.'
}, {
  id: 'agendamiento',
  category: ['all', 'web'],
  title: 'Agendamiento',
  image: '/images/portfolio/cover/bch-agendamiento.webp',
  topic: 'Banca',
  tags: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Bitbucket', 'Grunt'],
  description: 'Sistema bancario que permite gestionar el agendamiento interno de los recursos.'
}, {
  id: 'contact-center',
  category: ['all', 'web'],
  title: 'Contact Center',
  image: '/images/portfolio/cover/bch-contact-center.webp',
  topic: 'Banca',
  tags: ['Angular 9', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Bitbucket', 'SonarQube'],
  description: 'Sistema bancario que permite gestionar las llamadas telefónicas realizada por los clientes.'
}, */ {
  id: 'svp-condominio',
  category: ['all', 'web'],
  title: 'SVP Condominio',
  image: '/images/portfolio/svp-condominio.avif',
  topic: 'Condominios',
  url: 'https://condominio-svp.vercel.app/',
  tags: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Github'],
  description: 'Plataforma que permite gestionar toda la información de su condominio.'
}, {
  id: 'arrows-sports',
  category: ['all', 'web'],
  title: 'Arrows Santiago Sports',
  image: '/images/portfolio/arrows-sports.avif',
  topic: 'Gimnasio',
  url: 'https://arrows.santiagosport.cl/',
  tags: ['Nextjs', 'HTML', 'CSS', 'JavaScript', 'Github', 'TailwindCSS'],
  description: 'Sitio web para la empresa Arrows Santiago Sports.'
}, {
  id: 'blog-arrows-sports',
  category: ['all', 'web'],
  title: 'Blog Arrows Santiago Sports',
  image: '/images/portfolio/blog-arrows-sports.avif',
  topic: 'Gimnasio',
  url: 'https://blog.arrows.santiagosport.cl/',
  tags: ['Astro', 'HTML', 'CSS', 'JavaScript', 'Github', 'TailwindCSS'],
  description: 'Blog para la empresa Arrows Santiago Sports.'
}]

export const TESTIMONIALS = [{
  name: 'Roger Robinson',
  position: 'Product Manager',
  testimonial: 'Dentro de nuestro equipo de desarrolladores, Abel siempre era el más confiable. Al dar una tarea o proyecto a Abel, él primero planificaba bien, haciendo las investigaciones necesarias. Luego lo completaba con agilidad, entregando un producto que en su primer borrador ya estaba casi listo para lanzar. Abel casi nunca cometía errores, por su diligente ética de estudiar bien los problemas antes de saltar a una solución. Abel posee una creatividad para solucionar problemas que nunca dejó de asombrarnos, a la vez haciendo más fácil mi vida como su jefe. Cuando surgía una tarea o proyecto especialmente importante para la empresa, entre los gerentes decíamos: “démosla a Abel.”',
  image: '/images/testimonials/roger.webp'
}, {
  name: 'Víctor Navarro',
  position: 'Senior Software Engineer Backend',
  testimonial: 'Abel es una persona muy esforzada, que se enfoca en la resolución de objetivos tanto en los proyectos que participamos como personales. Se capacita constantemente y tiene ganas de aprender todos los días. Es una persona entusiasta, muy agradable y que demuestra mucho compromiso con su equipo. Fue un agrado haber compartido con Abel mientras estuve en Cocha, es un ingeniero y un hombre de calidad, tanto técnica como humana.',
  image: '/images/testimonials/victor.webp'
}, {
  name: 'Angel Rivera',
  position: 'Senior Software Engineer Backend',
  testimonial: 'Gran colaborador en el equipo de desarrollo, tanto profesionalmente y como persona. Cuenta con una gran capacidad de aprendizaje y adaptación, muy buen trabajo en equipo y análisis para resolución de problemas.',
  image: '/images/testimonials/angel.webp'
}]
