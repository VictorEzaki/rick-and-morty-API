import './styles.css'

export default function () {
    return (
        <div id='filter'>
            <h2 id="filter-title">Filtros</h2>
            <div id="status">
                <h3 id='filter-status'>Status</h3>

                <label htmlFor="vivo">
                    <input type="radio" id='vivo' value='vivo' name='status' />
                    Vivo
                </label>

                <label htmlFor="morto">
                    <input type="radio" id='morto' value='morto' name='status' />
                    Morto
                </label>

                <label htmlFor="desconhecido">
                    <input type="radio" id='desconhecido' value='desconhecido' name='status' />
                    Desconhecido
                </label>
            </div>

            <div id="genero">
                <h3 id='filter-gender'>Gênero</h3>
                <label htmlFor="feminino">
                    <input type="radio" id='feminino' value='feminino' name='gender' />
                    Feminino
                </label>
                
                <label htmlFor="masculino">
                    <input type="radio" id='masculino' value='masculino' name='gender' />
                    Masculino
                </label>

                <label htmlFor="sem-genero">
                    <input type="radio" id='sem-genero' value='sem-genero' name='gender' />
                    Sem gênero
                </label>

                <label htmlFor="unknow">
                    <input type="radio" id='unknow' value='desconhecido' name='gender' />
                    Desconhecido
                </label>
            </div>
        </div>
    )
}