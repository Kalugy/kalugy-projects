import './Main.css';
import Background from '../background-op.png';
import Photo from '../Photo.jpg';


function Main() {
    return (
      <div className='main-section'>
         <img src={Background} className="responsive-image" alt="background"/>
         <img src={Photo} className="profile-pick" alt="profile"/>
          <div className="overlay">
            <h1>Julian Trujillo</h1>
          </div>
          <div className='overlay2'>
            <h1>Desarrollador de software</h1>
            
            <p>
              I am a Computer Systems Engineering. I like to learn. I am working on applications and challenges from software.
            </p>
            <p>
              I am interested in Front ends I am improving everyday and keep learning about them as a person i am very creative, resilient, open mind, commitment and self managment.  
            </p>
            <h1>Proyectos</h1>
            <ul className='list-examples'>
              <li>Three.js Cube Rubik</li>
              <li>Angular FireChat</li>
              <li>Blog Example React</li>
              <li>IA - TIC TAC TOE</li>
              <li>Find your Career</li>
              <li>Unity Game Prototype</li>
              <li>Unreal Game Prototype</li>
              <li>Portfolio Example</li>
            </ul>
            <h1>Experiencia</h1>
            <ul className='list-examples'>
              <li>Big Pass Edenred 2021 - 2022 (6 Months)</li>
              <li>Quind 2019 - 2021 (1 Year 4 Months )</li>
              <li>Freelancer 2019 (2 Months)</li>
              <li>Freelancer 2019 (2 Months)</li>
            </ul>
            <h1>Estudios</h1>
            <p> 
               Ingeniero de Sistemas, Universidad Tecnologica de Pereira 2014-2019
            </p>
            <h1>Awards</h1>
            <p> 
              Barranqueros: La Ruta del Emprendimiento Innovador UTP - 1 Puesto Categoria Huevos
            </p>
            
          </div>
      </div>
    );
  }
  
  export default Main;