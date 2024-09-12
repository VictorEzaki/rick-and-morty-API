import './styles.css'
import rick from '../../assets/background-rick-gif.gif'
import seta from '../../assets/seta.gif'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <>
            <main id='main'>
                <img id='seta' src={seta} alt="Gif de uma seta" />
                <div id='main-button'>
                    <Link to="/ApiRickAndMorty"><img id='background' src={rick} alt="Gif rick and morty" /></Link>
                </div>
            </main>
        </>
    )
}