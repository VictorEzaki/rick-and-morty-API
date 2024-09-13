import './styles.css'
import rickHeader from '../../assets/title-rick-gif.gif'
import buttonHome from '../../assets/button-home.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header">
                <Link to="/">
                    <img src={rickHeader} alt="Título Rick and Morty" />
                </Link>
            </header>
        </>
    )
}