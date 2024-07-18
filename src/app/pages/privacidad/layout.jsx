

export const metadata = {

    //GENERIC
    title: 'PRIVACIDAD | THE PLACE',
    description: 'Página de política de privacidad de la empresa The Place Valencia.',
    applicationName: 'THE PLACE',
    keywords: ['politica privacidad the place'],
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
    
    
    
  
  
    
  }




  const PrivacidadLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivacidadLayout;