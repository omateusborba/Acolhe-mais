import { Link } from "react-router-dom"
import logo from './img/Acolhe-removebg-preview (1).png';

export default function Menu() {
    return (
        <>
            <div className="navbar">

                <img src={logo} alt="acolhe-mais-logo" className="logo tittle" />
                <ul>
                    <li>
                        <Link to='/' className='my-link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/pessoas' className='my-link'>Pessoas assistidas</Link>
                    </li>
                    <li>
                        <Link to='/recursos' className='my-link'>Recursos</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
