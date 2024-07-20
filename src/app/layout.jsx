import "./style.scss";
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";


export const metadata = {

  //GENERIC
  title: 'THE PLACE | Gestión inmobiliaria y servicios internacionales',
  description: '10 años ayudando a gestionar tu patrimonio inmobiliario. Ofrecemos servicios personalizados para explorar oportunidades del mercado.',
  applicationName: 'THE PLACE',
  keywords: ['búsqueda de vivienda personalizada Valencia', 'búsqueda de vivienda personalizada Alboraya', 'búsqueda de vivienda personalizada Torrent', 'gestión de visado Valencia', 'gestión de visado Paterna', 'gestión de visado Aldaia', 'estudio de abogados de extranjería Valencia', 'estudio de abogados de extranjería Burjassot', 'estudio de abogados de extranjería Xirivella', 'traslados Valencia', 'traslados Mislata', 'traslados Moncada', 'coordinación de traslados Valencia', 'coordinación de traslados Picanya', 'coordinación de traslados Paiporta', 'contratación de seguros Valencia', 'contratación de seguros Rocafort', 'contratación de seguros Benetússer', 'seguro médico de extranjería Valencia', 'seguro médico de extranjería La Eliana', 'seguro médico de extranjería Alaquàs', 'seguro del hogar Valencia', 'seguro del hogar Paterna', 'seguro del hogar Alboraya', 'seguro de mascotas Valencia', 'seguro de mascotas Torrent', 'seguro de mascotas Mislata', 'asesoramiento legal integral Valencia', 'asesoramiento legal integral Burjassot', 'asesoramiento legal integral Manises', 'orientación legal Valencia', 'orientación legal Aldaia', 'orientación legal Alaquàs', 'orientación sucesoria Valencia', 'orientación sucesoria Moncada', 'orientación sucesoria Picanya', 'servicios internacionales Valencia', 'servicios internacionales Paterna', 'servicios internacionales Alboraya', 'venta de propiedades Valencia', 'venta de propiedades Burjassot', 'venta de propiedades Moncada', 'alquiler de propiedades Valencia', 'alquiler de propiedades La Eliana', 'alquiler de propiedades Aldaia', 'gestión de patrimonio inmobiliario Valencia', 'gestión de patrimonio inmobiliario Paterna', 'gestión de patrimonio inmobiliario Manises', 'experiencia en el sector inmobiliario Valencia', 'experiencia en el sector inmobiliario Rocafort', 'experiencia en el sector inmobiliario Benetússer', 'the place VLC', 'the place Valencia', 'the place Alboraya', 'gestión inmobiliaria Burjassot', 'gestión inmobiliaria Xirivella', 'gestión inmobiliaria Moncada', 'servicios inmobiliarios Valencia', 'servicios inmobiliarios Paterna', 'servicios inmobiliarios Aldaia', 'patrimonio inmobiliario Valencia', 'patrimonio inmobiliario Mislata', 'patrimonio inmobiliario Moncada', 'contacto de confianza Valencia', 'contacto de confianza Aldaia', 'contacto de confianza Manises', 'experiencia en Valencia', 'experiencia en Burjassot', 'experiencia en Xirivella', 'profesional local en Valencia', 'profesional local en Paterna', 'profesional local en Alaquàs', 'gestión de propiedades Valencia', 'gestión de propiedades Rocafort', 'gestión de propiedades Benetússer', 'venta de propiedades Valencia', 'venta de propiedades Burjassot', 'venta de propiedades Moncada', 'alquiler de propiedades Valencia', 'alquiler de propiedades La Eliana', 'alquiler de propiedades Aldaia', 'servicios inmobiliarios internacionales Valencia', 'servicios inmobiliarios internacionales Paterna', 'servicios inmobiliarios internacionales Alboraya', 'gestión inmobiliaria Valencia', 'gestión inmobiliaria Paterna', 'gestión inmobiliaria Aldaia', 'mercado inmobiliario Valencia', 'mercado inmobiliario Rocafort', 'mercado inmobiliario Benetússer'],
  authors: [{ name: 'Andrés Ortega', url: 'https://www.ermo.es' }],
  creator: 'Andrés Ortega',
  publisher: 'Andrés Ortega',
  robots: 'index, follow',
  revisitAfter: '7 days',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  contentLanguage: 'es',
  language: 'es',
  
  // META
  openGraph: {
    title: 'THE PLACE | Gestión inmobiliaria y servicios internacionales',
    description: '10 años ayudando a gestionar tu patrimonio inmobiliario. Ofrecemos servicios personalizados para explorar oportunidades del mercado.',
    url: 'https://www.placevlc.com',
    type: 'website',
    images: [
      {
        url: 'https://placevlc.com/seo/meta-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Descripción de la imagen',
      },
    ],
    site_name: 'THE PLACE | Gestión inmobiliaria y servicios internacionales',
    locale: 'es_ES',
  },

  // TWITTER
  twitter: {
    card: 'summary_large_image',
    site: '@placevlc',
    creator: '@placevlc',
    title: 'THE PLACE | Gestión inmobiliaria y servicios internacionales',
    description: '10 años ayudando a gestionar tu patrimonio inmobiliario. Ofrecemos servicios personalizados para explorar oportunidades del mercado.',
    image: 'https://placevlc.com/seo/twitter-1200-600.jpg',
    imageAlt: 'Gestión inmobiliaria y servicios internacionales en Valencia',
  },

  //APPLE
  appleTouchIcon: 'https://placevlc.com/seo/180x180_apple_touch_icon.png', 
  appleTouchStartupImage: 'https://placevlc.com/seo/180x180_apple_touch_icon.png',

  


  //SECURITY
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://www.placevlc.com; script-src 'self' https://apis.google.com",
  referrerPolicy: 'no-referrer-when-downgrade', 
  xContentTypeOptions: 'nosniff', 
  xFrameOptions: 'DENY', 
  xXssProtection: '1; mode=block',
  permissionsPolicy: "geolocation=(self)",

  
}
 

export default function RootLayout({ children }) {
  return (

    <html lang="es">

      <head>
      <link rel="stylesheet" href="https://use.typekit.net/jei6cdb.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Hanuman:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
      <meta name="theme-color" content="#DB914E" />
      <meta name="background-color" content="#DB914E" />
      </head>
    
  
      <body>
       <div className="master__place"> 
      <Header/>
        {children}
      <Footer />
      </div>
      </body>
    </html>
  );
}

