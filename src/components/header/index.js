import { Link } from 'react-router-dom'
import './style.css'

const Header = () => (
    <header>
        <div className='centralizer'>
            <img src='assets/logo.png' />
            <nav>
                <Link className='link-header' to="/">Home</Link>
                <Link className='link-header' to="/flavors">Sabores</Link>
                <Link className='link-header' to="/about">Sobre</Link>
            </nav>
        </div>
    </header>
)

export default Header