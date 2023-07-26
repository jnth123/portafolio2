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
          <div className="project">
            <div className="project-image8"></div>
            <h3>Semana 8: examen parcial 1</h3>
            <a href="https://es.legacy.reactjs.org/docs/components-and-props.html" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Ver más de Componentes</button></a>
          </div>
        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image9"></div>
            <h3>Semana 9: UseStates</h3>
            <p>En esta semana se realizo el uso de Hooks que permiten añadir el estado de React a un componente funcional y sirve para manejar el estado de los elementos de un componente de manera que permite actualizar el estado de una variable y solo renderizar el tag html</p>
            <div className='cuerpobtn'>
              <a href="https://somospnt.com/blog/289-conociendo-en-profundidad-el-react-hook-usestate-6#:~:text=El%20Hook%20useState%20es%20un,el%20estado%20cambia%20el%20componente" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Ver mas de UseStates</button></a>
              <a href="https://drive.google.com/file/d/1Kgp0MGkDld3aXt1H8jZsXMXiUinAzK6K/view?usp=sharing" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Descargar codigo de la clase</button></a>
            </div>
          </div>
          <div className="project">
            <div className="project-image10"></div>
            <h3>Semana 10: Practica en React con JS</h3>
            <p className='justificar'></p>
            <p>En esta semana se realizo una paractica para desarrollar codigo para un programa de citas medicas y gestion de empleados en react usando Java Script</p>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mobinius.com%2Fblogs%2Fbenefits-of-using-react-js-in-the-dynamic-world-of-web-development%2F&psig=AOvVaw3Wp8g_aN31F-TRVIYMlO7s&ust=1690460648433000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCOjBtOaurIADFQAAAAAdAAAAABAE" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Ver más de JS con react</button></a>
            <a href="https://drive.google.com/file/d/197dgsmOXZ-w23HxNZreOX9T27kXfns0z/view?usp=drive_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>descargar cod de ejercicios</button></a>
          </div>
        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image11"></div>
            <h3>Semana 11: Practica vite con React</h3>
            <p>En esta semana se realizo una practica con vite y react para guardar datos de pacientes asusiando una animagen a estos registros todo desde un formulacio</p>
            <div className='cuerpobtn'>
              <a href="https://drive.google.com/file/d/1Kk1ngf7fEb9bt_z4_DNCxiumFqIGcrlD/view?usp=share_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Descargar codigo solución</button></a>
            </div>
          </div>
          <div className="project">
            <div className="project-image12"></div>
            <h3>Semana 12: Tienda realizada en next</h3>
            <p>En esta semana se realizo una web de una tienda usando next para registro de productos</p>
            <a href="https://es.legacy.reactjs.org/docs/components-and-props.html" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Descargar codigo</button></a>
          </div>
        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image13"></div>
            <h3>Semana 13: Intelligence Id</h3>
            <p>En esta semana una breve a¿introduccion a intelligence Idea</p>
            <div className='cuerpobtn'>
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FIntelliJ_IDEA&psig=AOvVaw2vRPIk5UXCSRZKhI04Zift&ust=1690462591692000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCJCsioW2rIADFQAAAAAdAAAAABAE" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Ver mas de intelligence</button></a>
              <a href="https://drive.google.com/file/d/1Kk1ngf7fEb9bt_z4_DNCxiumFqIGcrlD/view?usp=share_link" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>Descargar codigo solución</button></a>
            </div>
          </div>
          <div className="project">
            <div className="project-image14"></div>
            <h3>Semana 14: Clases con spring</h3>
            <p>En esta semana el docente nos dio una clase para poder descargar modelos para desarrollar aplicaciones web usando Spring</p>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.campusmvp.es%2Frecursos%2Fpost%2Fjava-los-5-mejores-frameworks-para-desarrollo-web.aspx&psig=AOvVaw2KcZVaugFyGGFR7nvGpVmH&ust=1690462843620000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCMj8hv22rIADFQAAAAAdAAAAABAE" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 2')}>Descargar proyecto de Spring</button></a>
          </div>
        </div>
        <div className="projects-section">
          <div className="project">
            <div className="project-image15"></div>
            <h3>Semana 15: Spring parte 2</h3>
            <p>En esta semana el docente nos una clase de desarrollo web en spring para el desarrollo de una api</p>
            <div className='cuerpobtn'>
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.codmind.com%2Fmi-primer-api-rest-con-spring-boot%2F&psig=AOvVaw1DHMlWoZqlIvQPzRhda0LX&ust=1690463061800000&source=images&cd=vfe&opi=89978449&ved=0CBMQjhxqFwoTCPjMpuW3rIADFQAAAAAdAAAAABAE" target='_blank'><button onClick={() => console.log('Redirigir al proyecto 1')}>como desarrollar una api</button></a>
            </div>
          </div>
          <div className="project">
            <div className="project-image8"></div>
            <h3>Semana 16: Parcial 2</h3>
            <p className='justificar'>se desarrollo el examen parcial 2 que constaba de desarrollar un login para registro de docentes usando un CRUD y una api</p>
             </div>
        </div>
      </div>
    </div>
  );
}

export default App;
