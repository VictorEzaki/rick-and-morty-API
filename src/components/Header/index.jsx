import './styles.css'
import rickHeader from '../../assets/title-rick-gif.gif'
import buttonHome from '../../assets/button-home.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header">
                <Link to="/">
                    <img id='home' src={buttonHome} alt="" />
                </Link>
                <h1 id="header-title"><img src={rickHeader} alt="Título Rick and Morty" /></h1>
            </header>
        </>
    )
}