import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg barraNav">
          <div className="container-fluid">
            <Link to='/'>
              <h2 className="logo">Farmacia Solidaria</h2>
            </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse"      id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
            
                  <NavLink to={`category/dermo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active " aria-current="page">
                      Dermo
                    </a>
                  </NavLink>
                    
                  </li>
                  <li className="nav-item">
            
                  <NavLink to={`category/bebes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active" aria-current="page">
                      Bebés
                    </a>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/hogar`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active" aria-current="page">
                      Hogar
                    </a>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/belleza`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active" aria-current="page">
                      Belleza
                    </a>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/limpieza`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active" aria-current="page">
                      Limpieza
                    </a>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/cuidadoPersonal`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active" aria-current="page">
                      Cuidado Personal
                    </a>
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/nutricionYDeportes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <a className="nav-link active" aria-current="page">
                      Nutrición y Deportes
                    </a>
                  </NavLink>
                  </li>
                </ul>



                
                <CartWidget />
              </div>
          </div>
        </nav>
    )
}

export default NavBar
