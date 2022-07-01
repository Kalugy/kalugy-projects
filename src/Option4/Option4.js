

function Option4js(){
    return(
    <div className="main-content-blog"> 
        Main Content
        <header className="header" id="header">
            <nav className="navbar container">
                <a href="./">
                    <h2 className="logo">Julian</h2>
                </a>
                <div className="menu" id="menu">
                    <ul className="list">
                        <li className="list-item">
                            <a href="#" className="list-link current">Home</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">Categories</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">Review</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">News</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">Membership</a>
                        </li>
                        <li className="list-item">
                            <a href="#" className="list-link">Contact</a>
                        </li>
                        <li className="list-item screen-lg-hidden">
                            <a href="#" className="list-link">Sign in</a>
                        </li>
                        <li className="list-item screen-lg-hidden">
                            <a href="#" className="list-link">Sign up</a>
                        </li>
                    </ul>
                </div>
               <div className="list list-right">
                    <div className="button btn place-items-center" id="theme-toggle-btn">
                        <i className="ri-sun-line sun-icon"></i>
                        <i className="ri-moon-line moon-icon"></i>
                    </div>
                </div> 
                
            </nav>
        </header>
    </div>);
}

export default Option4js;