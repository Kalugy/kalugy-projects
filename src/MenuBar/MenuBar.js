import "./MenuBar.css"


function MenuBar(){
    return(
        <div>
            <input type="checkbox" className="menu-button" id="active"></input>
            <label htmlFor="active" className="menu-btn"><span></span></label>
            <label htmlFor="active" className="close"></label>
            <div className="menu-navbar-wrapper">
                <ul>
                    <h1>2D</h1>
                    <li><a>Version1</a></li>
                    <li><a>Version2</a></li>
                    <li><a>Version3</a></li>
                    <li><a>Version4</a></li>
                    <li><a>Version5</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar