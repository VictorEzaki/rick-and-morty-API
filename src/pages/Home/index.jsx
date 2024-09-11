import './styles.css'
import rick from '../../assets/background-rick-gif.gif'

export default function Home() {
    return(
        <>
            <main id='main'>
                <div id='main-button'>
                    <img src={rick} alt="Gif rick and morty" />
                </div>
            </main>
        </>
    )
}