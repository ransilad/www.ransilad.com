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
  image: '/images/portfolio/cover/inlet.webp',
  topic: 'Comunidades',
  tags: ['ReactJS', 'React Native', 'HTML', 'CSS', 'AWS', 'Gitlab', 'Google Analytics', 'Google Tag Manager'],
  description: 'Plataforma que facilita la conexión entre comunidades.'
}, {
  id: 'voyhoy',
  category: ['all', 'web', 'api'],
  title: 'Voyhoy',
  image: '/images/portfolio/cover/voyhoy.webp',
  topic: 'Viajes',
  tags: ['AngularJS', 'HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL', 'AWS', 'Github', 'Adyen', 'PayU', 'Paypal', 'Voucherify', 'Optimizely'],
  description: 'Plataforma que permite a los usuarios planificar sus viajes, incluyendo la posibilidad de ' +
    'conexiones entre diferentes tipos de transporte, lo que denominamos Smart Ticket.'
}, {
  id: 'damath',
  category: ['all', 'web'],
  title: 'Damath',
  image: '/images/portfolio/cover/damath.webp',
  topic: 'Diseño',
  tags: ['Design', 'HTML', 'CSS', 'JavaScript', 'Wordpress'],
  description: 'Sitio web para gestionar ventas de productos cortados con láser.'
}, {
  id: 'techk',
  category: ['all', 'web', 'api'],
  title: 'techk',
  image: '/images/portfolio/cover/techk.webp',
  topic: 'Ventas',
  url: 'https://www.instoreview.com/inicio',
  tags: ['Nextjs', 'HTML', 'CSS', 'JavaScript', 'Python', 'Docker'],
  description: 'Plataforma que permite clasificar los productos que entran a las tiendas.'
}, {
  id: 'cocha',
  category: ['all', 'web', 'api'],
  title: 'Cocha',
  image: '/images/portfolio/cover/cocha.webp',
  topic: 'Viajes',
  url: 'https://www.cocha.com/',
  tags: ['Angular 7', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Bitbucket', 'MySql'],
  description: 'Sistema web que ayudar a los vendedores a gestionar los pasajes de sus clientes.'
}, {
  id: 'tendy',
  category: ['all', 'web', 'api', 'mobile'],
  title: 'Tendy',
  image: '/images/portfolio/cover/tendy.webp',
  topic: 'Finanzas',
  url: 'https://tendy.cash/',
  tags: ['VueJS', 'React Native', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'AWS', 'Github'],
  description: 'Plataforma que permite “Otorgar propinas de una forma fácil y anónima”.'
}, {
  id: 'idc',
  category: ['all', 'web'],
  title: 'IDC',
  image: '/images/portfolio/cover/idc.webp',
  topic: 'Comunidades',
  tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'AWS', 'Github'],
  description: 'Sistema de gestión de contenido y educación.'
}, {
  id: 'a21',
  category: ['all', 'mobile'],
  title: 'A21',
  image: '/images/portfolio/cover/a21.webp',
  topic: 'Viajes',
  url: 'https://www.antarctica21.com/',
  tags: ['React Native', 'HTML', 'CSS', 'JavaScript', 'Redux'],
  description: 'Aplicación móvil que permite gestionar toda la experiencia del viaje, desde la reserva hasta el check-out'
}, {
  id: 'dtemite',
  category: ['all', 'mobile', 'api'],
  title: 'Dtemite',
  image: '/images/portfolio/cover/dtemite.webp',
  topic: 'Finanzas',
  tags: ['Python', 'Flask', 'Bitbucket', 'Redis'],
  description: 'API para la automatización de procesos de facturación contra el SII.'
}, {
  id: 'nrp',
  category: ['all', 'web'],
  title: 'NextRoundPartners',
  image: '/images/portfolio/cover/nrp.webp',
  topic: 'Diseño',
  url: 'https://www.nextroundpartners.com/',
  tags: ['ReactJS', 'Design', 'HTML', 'CSS'],
  description: 'Sitio web para la empresa NextRoundPartners.'
}, {
  id: 'ona',
  category: ['all', 'web'],
  title: 'OnaStudio',
  image: '/images/portfolio/cover/ona.webp',
  topic: 'Diseño',
  url: 'https://www-onastudio-co.vercel.app/',
  tags: ['NextJS', 'Design', 'HTML', 'CSS'],
  description: 'Sitio web para la empresa OnaStudio.'
}, {
  id: 'lopesa',
  category: ['all', 'web', 'mobile'],
  title: 'Lopesa',
  image: '/images/portfolio/cover/lopesa.webp',
  topic: 'Ventas',
  tags: ['Angular 12', 'HTML', 'CSS', 'JavaScript', 'Ionic', 'Github'],
  description: 'Plataforma que permite gestionar productos.'
}, {
  id: 'switchmultimpresor',
  category: ['all', 'web'],
  title: 'Switch Multi Impresor',
  image: '/images/portfolio/cover/bch_switchmultimpresor.webp',
  topic: 'Banca',
  tags: ['Angular 9', 'HTML', 'CSS', 'JavaScript', 'Bitbucket'],
  description: 'Sistema bancario que permite gestionar proveedores.'
}, {
  id: 'cobranzas',
  category: ['all', 'web'],
  title: 'Cobranzas',
  image: '/images/portfolio/cover/bch-cobranzas.webp',
  topic: 'Banca',
  tags: ['AngularJS', 'HTML', 'CSS', 'JavaScript', 'Bitbucket', 'Grunt'],
  description: 'Sistema bancario que permite gestionar cobros no realizados por los clientes.'
}, {
  id: 'agendamiento',
  category: ['all', 'web'],
  title: 'Agendamiento',
  image: '/images/portfolio/cover/bch-agendamiento.webp',
  topic: 'Banca',
  tags: ['AngularJS', 'HTML', 'CSS', 'JavaScript', 'Bitbucket', 'Grunt'],
  description: 'Sistema bancario que permite gestionar el agendamiento interno de los recursos.'
}, {
  id: 'contact-center',
  category: ['all', 'web'],
  title: 'Contact Center',
  image: '/images/portfolio/cover/bch-contact-center.webp',
  topic: 'Banca',
  tags: ['Angular 9', 'HTML', 'CSS', 'JavaScript', 'Bitbucket', 'SonarQube'],
  description: 'Sistema bancario que permite gestionar las llamadas telefónicas realizada por los clientes.'
}, {
  id: 'svp-condominio',
  category: ['all', 'web'],
  title: 'SVP Condominio',
  image: '/images/portfolio/cover/svp-condominio.webp',
  topic: 'Condominios',
  url: 'https://condominio-svp.vercel.app/',
  tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Github'],
  description: 'Plataforma que permite gestionar toda la información de su condominio.'
}, {
  id: 'arrows-sports',
  category: ['all', 'web'],
  title: 'Arrows Santiago Sports',
  image: '/images/portfolio/cover/arrows-sports.webp',
  topic: 'Gimnasio',
  url: 'https://arrows.santiagosport.cl/',
  tags: ['Nextjs', 'HTML', 'CSS', 'JavaScript', 'Github'],
  description: 'Sitio web para la empresa Arrows Santiago Sports.'
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
