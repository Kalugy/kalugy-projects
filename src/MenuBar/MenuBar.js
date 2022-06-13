import "./MenuBar.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";
  
  

function MenuBar(){
    return(
        <div>
            <input type="checkbox" className="menu-button" id="active"></input>
            <label htmlFor="active" className="menu-btn"><span></span></label>
            <label htmlFor="active" className="close"></label>
            
            <div className="menu-navbar-wrapper">
                
                <BrowserRouter>
                <ul>
                    <li><Link to="test"><label htmlFor="active" className="closest">TestMenu</label>  </Link></li>
                    
                </ul>
                    <Routes>
                    <Route path="/" element={<h1>dsa</h1>} />
                    <Route path="test" element={<Test />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}


function Test() {
    return (
      <div>
        <nav>
            <div>dsadasdsadas</div>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Routes>
          <Route path=":id" element={<h1>dsa</h1>} />
          <Route path="me" element={<h1>dsa</h1>} />
        </Routes>
      </div>
    );
  }

export default MenuBar