import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-buttons">
          <a href="https://www.facebook.com/jonathana.mayhuasmayorca" target="_blank"><button onClick={() => console.log('Redirigir a página 1')}>Ir a mi Facebook </button></a>
          <a href="https://wa.me/+51935721702" target='_blank'><button onClick={() => console.log('Redirigir a página 2')}>Mandame un Whatsapp</button></a>
          <a href="https://www.udemy.com/course/curso-de-desarrollo-web-completo-2/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.ES_cc.LATAM&utm_term=_._ag_121424001339_._ad_515898216146_._kw__._de_c_._dm__._pl__._ti_dsa-1190286617479_._li_9073217_._pd__._&matchtype=&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEdvkx3r0yAq5im7sSJwLqSbNS0a_FlkuC9MHxxOmM3FbB7cvgU8GFgaAtDeEALw_wcB" target='_blank'><button onClick={() => console.log('Redirigir a página 3')}>sobre el curso</button></a>
        </div>
      </header>
      <div className="content">
        <div className="portfolio-section">
        
          <h1>Mi portafolio Electrónico</h1>
          <div className="portfolio-info">
            <div className="portfolio-image"></div>
            <p>
            Buenos días/tardes a todos, <br></br>

            Mi nombre es Jonathan Mayhuasca Mayorca y me complace estar aquí frente a ustedes hoy. Permítanme compartir un poco sobre quién soy y qué puedo <br></br>
            aportar.

            Soy una persona apasionada por el area tecnologica. Durante los últimos años, he trabajado diligentemente en esta área y he adquirido una sólida <br></br>
            experiencia en manejos de software de dispositivos moviles. Me enorgullece decir que he tenido la oportunidad de colaborar con muchas personas y 
            <br></br> contribuir en proyectos clave que han generado impacto positivo.
            </p>
          </div>
        </div>
        <div>
          <h1>Tabla de contenido</h1>
        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image"></div>
            <h3>Semana 1: Practica emmet</h3>
            <p className='justificar'>Emmet es un conjunto de complementos para editores de texto que permiten la codificación y edición de alta velocidad en HTML, XML, 
            XSL y otros formatos de código estructurado a través de la asistencia de contenido. Emmet, escribe código HTML y CSS a base de abreviaciones.</p>
            <p className='justificar'> En esta semana se realizo una practica calificada que constaba de 5 ejercicios para desarrollar su codigo emmet en visual studio code</p>
            <div className='cuerpobtn'>
              <a href="https://docs.google.com/document/d/12ndlAIgW5SmR9dxViCO5aYmsM7NGbJuI/edit?usp=sharing&ouid=101326811942071042864&rtpof=true&sd=true" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Ver Practica</button></a>
              <a href="https://emmet.io/" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Ver más sobre emmet</button></a>
            </div>
            
          </div>
          <div className="project">
            <div className="project-image2"></div>
            <h3>Semana 2: Bootstrap</h3>
            <p className='justificar'>Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. 
            Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como 
            extensiones de JavaScript adicionales </p>
            <p>En esta semana se realizo el desarrollo de una pagina web usando HTML, Css y java script de manera grupal</p>
            <div className='cuerpobtn'>
              <a href="https://drive.google.com/file/d/1laFHnvrXf1zFg7pl8zF2IrG4-Sytf_Tu/view?usp=share_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>descargar codigo</button></a>
              <a href="https://getbootstrap.com/" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Como usar Bootstrap</button></a>
            </div>
            
          </div>

        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image3"></div>
            <h3>Semana 3: JavaScript</h3>
            <p className='justificar'>JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,
              basado en prototipos, imperativo, débilmente tipado y dinámico.</p>
              <p>En esta semana realizamos un ejercicio que constaba de una bola con movimiento con botones para 
                controlar su movimiento
              </p>
              <div className='cuerpobtn'>
                <a href="https://drive.google.com/file/d/1zwCJmiShAt06SxKhqNEubzhKHCxqrquA/view?usp=share_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>descargar Codigo</button></a>
                <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Ver más sobre javascript</button></a>
              </div>
              
          </div>
          <div className="project">
            <div className="project-image4"></div>
            <h3>Semana 4: Archivos Json</h3>
            <p className='justificar'>El formato JSON se utiliza para estructurar datos en forma de texto y permite el intercambio de información entre aplicaciones de manera sencilla, liviana y rápida. Por eso, es tan importante saber cómo se estructura y 
              las principales diferencias con el modelo XML.</p>
            <p>en esta semana se realizo una practica con el uso de Json y Html donde se debe mostrar 6 productos con sus caracteristicas y una imagen obtenida desde una Url</p>
            <div className='cuerpobtn'>
              <a href="https://drive.google.com/file/d/1laFHnvrXf1zFg7pl8zF2IrG4-Sytf_Tu/view?usp=share_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Descargar codigo</button></a>
              <a href="https://rockcontent.com/es/blog/archivo-json/" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Ver más sobre Json</button></a>
            </div>
              
          </div>

        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image5"></div>
            <h3>Semana 5: Programación con React</h3>
            <p className='justificar'> React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como Thumbnail</p>
            <p>En esta semana se realizo una clase de instalación de React con Vite desde CMD de windows y sus comandos</p>
            <div className='cuerpobtn'>
              <a href="https://carlosazaustre.es/react-vite" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Como instalar react</button></a>
              <a href="https://es.react.dev/" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Como usar React</button></a>
            </div>
            
          </div>
          <div className="project">
            <div className="project-image6"></div>
            <h3>Semana 6: componentes de react</h3>
            <p className='justificar'>Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. Esta página proporciona una introducción a la idea de los componentes</p>
            <p>En esta semana el docente nos dio a conocer sobre los componentes de react, su funcionamiento y usos</p>
            <a href="https://es.legacy.reactjs.org/docs/components-and-props.html" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Ver más de Componentes</button></a>
            
          </div>

        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image7"></div>
            <h3>Semana 7: Practica calificada de React</h3>
            <p>En esta semana se realizo una practica calificada de React con Bootstrap, que constaba de 5 preguntas a desarrollar su codigo en React</p>
            <div className='cuerpobtn'>
              <a href="https://drive.google.com/file/d/1gTCcbyMkvvak6JafVe9jBGMBzIgul728/view?usp=sharing" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Ver practica</button></a>
              <a href="https://drive.google.com/file/d/1Kk1ngf7fEb9bt_z4_DNCxiumFqIGcrlD/view?usp=share_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Descargar codigo solución</button></a>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
