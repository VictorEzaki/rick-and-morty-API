import './styles.css'
import { genero, status, especie } from '../../functions/translate'

export default function Card({ data: personagem }) {
    return (
        <>
            <div id="card">
                    <img src={personagem.image} alt="" />
                    <h2 id='card-name'>{personagem.name}</h2>
                    <h3>Status: { status(personagem.status) }</h3>
                    <h3>Espécie: { especie(personagem.species) }</h3>
                    <h3>Gênero: { genero(personagem.gender) }</h3>
            </div>
        </>
    )
}