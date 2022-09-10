import CartWidget from "./CartWidget"
import fish from "../assets/img/fish.png"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-white shadow-sm mt-2 mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={fish} className='mx-5 my-3' alt="logo" width="200"/>
                </a>
                <select className="form-select w-25 position-absolute top-50 start-50 translate-middle">
                    <option value>Qué estás buscando?</option>
                    <option value="1">Cañas</option>
                    <option value="2">Combos</option>
                    <option value="3">Reels</option>
                    <option value="4">Materiales de atado</option>
                    <option value="5">Líneas</option>
                    <option value="6">Indumentaria</option>
                    <option value="7">Leaders, Tippets</option>
                    <option value="8">Otros</option>
                </select>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Excursiones</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Contacto</a></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
export default NavBar