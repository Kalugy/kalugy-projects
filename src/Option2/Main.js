import './Main.css';
import Background from '../background-op.png';
import Photo from '../Photo.jpg';
import './Animation.css'
import {StackButtom} from "../StackButtom/StackButton"

import data from './Content.json';

function Main() {
    return (
      <div className='main-section2'>
         <StackButtom content={data}/>
         <div className='animate-circle'></div>
         <div className='animate-background'></div>
         <div className='animate-background2'></div>
         <div className='animate-background3'></div>
         <div className='animate-background4'></div>
         <div className='animate-background5'></div>
         <div className='animate-background6'></div>
         <div className='animate-background7'></div>
         <div className='animate-background8'></div>
         <div className='animate-background9'></div>
         <div className='animate-background10'></div>
         <div className='animate-background11'></div>
         <div className='animate-background12'></div>
         <div className='animate-background13'></div>
         <div className='animate-background14'></div>
         <div className='animate-background15'></div>
         <div className='animate-background16'></div>
         <div className='animate-background17'></div>
         <div className='animate-background18'></div>
         <div className='animate-background19'></div>
         <div className='animate-background20'></div>
         <div className='animate-background21'></div>
         <div className='animate-background22'></div>
         <div className='animate-background23'></div>
         <div className='animate-background24'></div>
         <div className='animate-background25'></div>
         <div className='animate-background26'></div>
         <div className='animate-background27'></div>
         <div className='animate-background28'></div>
         <div className='animate-background29'></div>
         <div className='animate-background30'></div>
         <div className='animate-background31'></div>
         <div className='animate-background32'></div>
         <div className='animate-background33'></div>
         <div className='animate-background34'></div>
         <div className='animate-background35'></div>
         <div className='animate-background36'></div>
         <div className='animate-background37'></div>
         <div className='animate-background38'></div>
         <div className='animate-background39'></div>
         <div className='animate-background40'></div>
         <div className='animate-background41'></div>
         <div className='animate-background42'></div>
         <div className='animate-background43'></div>
         <div className='animate-background44'></div>
         <div className='animate-background45'></div>
         <div className='animate-background46'></div>
         <div className='animate-background47'></div>
         <div className='animate-background48'></div>
         <div className='animate-background49'></div>
         <div className='animate-background50'></div>
         <section>
            <img src={Photo} className="profile-pick title-option2" alt="profile"/>
            <div className="overlay title-option2">
              <h1>Julian Trujillo</h1>
            </div>
          </section>
          <section>
            <div className='overlay2'>
              <h1 className='title-option2'>Software Developer</h1>
              <p>
                I am a Computer Systems Engineering. I like to learn and develop projects. I am working on applications and challenges from software.
              </p>
              <p>
                I am interested in Front ends I am improving everyday and keep learning about them as a person i am very creative, resilient, open mind, commitment and self managment.  
              </p>
              <h1 className='title-option2'>Projects</h1>
              <ul className='list-examples'>
                <li className='line-1 anim-typewriter'>Three.js Cube Rubik</li>
                <li>Angular FireChat</li>
                <li>Blog Example React</li>
                <li>IA - TIC TAC TOE</li>
                <li>Find your Career</li>
                <li>Unity Game Prototype</li>
                <li>Unreal Game Prototype</li>
                <li>Portfolio Example</li>
              </ul>
              <h1 className='title-option2'>Experience</h1>
              <ul className='list-examples'>
                <li>Big Pass Edenred 2021 - 2022 (6 Months)</li>
                <li>Quind 2019 - 2021 (1 Year 4 Months )</li>
                <li>Freelancer 2019 (2 Months)</li>
                <li>Freelancer 2019 (2 Months)</li>
              </ul>
              <h1 className='title-option2'>Study</h1>
              <p> 
                Systems and Computer Engineering, Universidad Tecnologica de Pereira 2014-2019
              </p>
              <h1 className='title-option2'>Awards</h1>
              <p> 
                Barranqueros: La Ruta del Emprendimiento Innovador UTP - 1 Puesto Categoria Huevos
              </p>
            </div>
          </section>
      </div>
    );
  }
  
  export default Main;