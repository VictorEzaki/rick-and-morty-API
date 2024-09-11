import './styles.css'

export default function () {
    return (
        <nav id='nav'>
            <h2 id="nav-filter">Filtros</h2>
            <div id="status">
                <h3 id='filter-status'>Status</h3>

                <label htmlFor="vivo">
                    <input type="radio" id='alive' value='vivo' name='status' />
                    Vivo
                </label>

                <label htmlFor="morto">
                    <input type="radio" id='dead' value='morto' name='status' />
                    Morto
                </label>

                <label htmlFor="desconhecido">
                    <input type="radio" id='unknow' value='desconhecido' name='status' />
                    Desconhecido
                </label>
            </div>

            <div id="genero">
                <h3 id='filter-gender'>Gênero</h3>
                <label htmlFor="feminino">
                    <input type="radio" id='woman' value='feminino' name='gender' />
                    Feminino
                </label>
                
                <label htmlFor="masculino">
                    <input type="radio" id='man' value='masculino' name='gender' />
                    Masculino
                </label>

                <label htmlFor="sem-genero">
                    <input type="radio" id='sem-genero' value='sem-genero' name='gender' />
                    Sem gênero
                </label>

                <label htmlFor="desconhecido">
                    <input type="radio" id='unknow' value='desconhecido' name='gender' />
                    Desconhecido
                </label>
            </div>
        </nav>
    )
}