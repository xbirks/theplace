

export const metadata = {

    //GENERIC
    title: 'LEGAL | THE PLACE',
    description: 'Página de aviso legal de la empresa The Place Valencia.',
    applicationName: 'THE PLACE',
    keywords: ['aviso legal the place'],
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




  const LegalLayout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default LegalLayout;