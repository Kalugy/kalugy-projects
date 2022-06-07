import './Main.css';
import Background from '../background-op.png';

function Main() {
    return (
      <div className='main-section'>
         <img src={Background} className="responsive-image"/>
            <div className="overlay">Fotico</div>
            <div className="overlay">
            <h1>What is Lorem Ipsum?</h1>
            
            </div>
      </div>
    );
  }
  
  export default Main;