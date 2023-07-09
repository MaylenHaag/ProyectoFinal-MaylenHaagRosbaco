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
            
                  <NavLink to={`category/dermo`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active " aria-current="page">
                    Dermo
                  </NavLink>
                    
                  </li>
                  <li className="nav-item">
            
                  <NavLink to={`category/bebes`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active" aria-current="page">
                    Bebés
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/hogar`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active" aria-current="page">
                    Hogar
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/belleza`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active" aria-current="page">
                    Belleza
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/limpieza`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active" aria-current="page">
                    Limpieza
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/cuidadoPersonal`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active" aria-current="page">
                    Cuidado Personal
                  </NavLink>
                  </li>
                  <li className="nav-item">
                  
                  <NavLink to={`category/nutricionYDeportes`} class={({isActive}) => isActive ? 'ActiveOption' : 'Option'} className="nav-link active" aria-current="page">
                    Nutrición y Deportes
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
