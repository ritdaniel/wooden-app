import logo from './img/logo.jpg';
export function NavBar(){
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img className="navbar__img--logo" src={logo} alt="logo" width="33%"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href=""  role="button" aria-expanded="false">
                                Maceteros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="" >Jardineras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="">Repisas</a>
                        </li>
                        <li className="form-inline my-2 my-lg-0">
                            <a className="nav-link" aria-current="page" href="">Porta LLaves</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}