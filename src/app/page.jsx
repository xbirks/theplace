import Intro from './components/intro/intro.jsx';
import InmueblesPadre from './components/inmuebles-index/inmuebles-padre.jsx';
import InternacionalesPadre from './components/internacionales-index/internacionales-padre.jsx';
import NosotrosPadre from './components/nosotros-index/nosotros-padre.jsx';
import InteresPadre from './components/interes-index/interes-padre.jsx';
import FaqPadre from './components/faq/faq-padre.jsx';



export default function HomePage() {
  return (
    <>
        <Intro />
        <InmueblesPadre />
        <InternacionalesPadre />
        <NosotrosPadre />
        <InteresPadre />
        <FaqPadre />
    
  </>
  );
}
