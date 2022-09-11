import CartWidget from "./CartWidget"
import fish from "../assets/img/fish.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-white shadow-sm mt-2 mb-5">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand"><img src={fish} className='mx-5 my-3' alt="logo" width="200"/></Link>
                <select className="form-select w-25 position-absolute top-50 start-50 translate-middle">
                    <option value>Qué estás buscando?</option>
                    <option value="1">Cañas</option>
                    <option value="2">Reels</option>
                    <option value="3">Indumentaria</option>
                </select>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-dark">Excursiones</a></li>
                        <li className="nav-item"><a className="nav-link text-dark">Contacto</a></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default NavBar