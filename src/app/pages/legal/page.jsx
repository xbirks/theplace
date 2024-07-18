
import React from 'react';
import Link from 'next/link';


const EMPRESA = "The Place Valencia";

export default function Legal() {
  return (
    <div className="legal__master">
      <h1>AVISO LEGAL</h1>
      <p>
En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI), se proporcionan a continuación los datos identificativos del responsable de este sitio web: </p> <br></br><br></br>

<span>
<p className="legal__bold">Nombre del sitio web:</p> <Link href="https://placevlc.com"></Link><br></br>
<p className="legal__bold">Denominación social:</p> The Place Valencia<br></br>
<p className="legal__bold">NIF:</p> PENDIENTE<br></br>
<p className="legal__bold">Domicilio social:</p> PENDIENTE<br></br>
<p className="legal__bold">Correo electrónico de contacto:</p> <Link href="mailto:hugo@placevlc.com">hugo@placevlc.com</Link><br></br>
<p className="legal__bold">Número de teléfono:</p> <Link href="tel:+34604975558">604 975 558</Link><br></br>
<p className="legal__bold">Datos de Inscripción en el Registro Mercantil:</p>
La empresa está inscrita en el Registro Mercantil de PENDIENTE INFO.</span>




<h2>Objeto</h2>

<p>Este aviso legal establece las condiciones generales que regulan el acceso y uso del sitio web. El acceso y uso del mismo implica la aceptación de estas condiciones generales.<br></br><br></br>

{EMPRESA} se reserva el derecho de modificar o actualizar los contenidos y servicios, las condiciones generales de acceso y uso, y cualquier elemento que forme parte del diseño y configuración del sitio web, en cualquier momento y sin previo aviso.</p>


<h2>Uso</h2>

<p>El usuario es responsable de proporcionar información veraz y lícita al registrarse en el sitio web. Si se asigna una contraseña al usuario tras el registro, este se compromete a utilizarla diligentemente y a mantenerla en secreto. Los usuarios son responsables de la custodia y confidencialidad de cualquier identificador y/o contraseña suministrados por {EMPRESA}, y deben notificar inmediatamente a la empresa cualquier uso indebido de los mismos.<br></br><br></br>

Los usuarios deben usar el sitio web y sus contenidos de manera diligente, correcta y lícita. Queda prohibido:<br></br><br></br>

- Utilizar los contenidos con fines ilegales, inmorales o contrarios al orden público.<br></br>
- Reproducir, copiar, distribuir, transformar o modificar los contenidos sin autorización.<br></br>
- Utilizar los contenidos para enviar publicidad o mensajes no solicitados.</p>



<h2>Propiedad intelectual</h2>

<p>Todos los contenidos del sitio web son propiedad intelectual e industrial de {EMPRESA} o de terceros, incluyendo textos, imágenes, gráficos, iconos, tecnología, software, y otros contenidos audiovisuales, así como su diseño gráfico y códigos fuente. Queda prohibido cualquier uso de estos contenidos sin autorización previa.</p>


<h2>Enlaces al portal</h2>

<p>Cualquier usuario que desee establecer un enlace desde su página web al presente portal deberá obtener autorización previa y por escrito de {EMPRESA}.</p>


<h2>Responsabilidades y garantías</h2>

<p>{EMPRESA} no garantiza la licitud, fiabilidad, utilidad, veracidad o exactitud de los servicios o la información del sitio web. La empresa ha adoptado medidas necesarias para garantizar el funcionamiento del sitio web, pero no se responsabiliza por daños que puedan derivarse del acceso o uso indebido del mismo.</p>


<h2>Legislación y jurisdicción aplicable</h2>

<p>Las relaciones entre {EMPRESA} y el usuario se regirán por la legislación española y cualquier disputa se someterá a los juzgados y tribunales de Valencia (España), con renuncia expresa a cualquier otro fuero.</p>
     
    </div>
  );
}