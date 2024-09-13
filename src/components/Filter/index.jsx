import './styles.css'

export default function Filter({ busca, setBusca }) {

    function montarFiltro(type, value) {
        const filtros = new URLSearchParams(busca);
        const filtro = filtros.get(type)

        if (filtro === value) {
            filtros.delete(type)
        } else {
            filtros.set(type, value)
        }

        setBusca("&" + filtros.toString())
    }

    function marcarFiltro(type, value) {
        const filtros = new URLSearchParams(busca);
        const filtro = filtros.get(type);

        if (filtro === value) {
            return 'filtro-ativo';
        }
        return '';
    }



    return (
        <div id='filter'>
            <h2 id="filter-title">Filtros</h2>
            <div id="status">
                <h3 id='filter-status'>Status</h3>

                <span className={marcarFiltro('status', 'live')} onClick={() => montarFiltro('status', 'live')}>
                    Vivo
                </span>

                <span className={marcarFiltro('status', 'dead')} onClick={() => montarFiltro('status', 'dead')}>
                    Morto
                </span>

                <span className={marcarFiltro('status', 'unknown')} onClick={() => montarFiltro('status', 'unknown')}>
                    Desconhecido
                </span>
            </div>

            <div id="genero">
                <h3 id='filter-gender'>Gênero</h3>
                <span className={marcarFiltro('gender', 'female')} onClick={() => montarFiltro('gender', 'female')}>
                    Feminino
                </span>

                <span className={marcarFiltro('gender', 'male')} onClick={() => montarFiltro('gender', 'male')}>
                    Masculino
                </span>

                <span className={marcarFiltro('gender', 'genderless')} onClick={() => montarFiltro('gender', 'genderless')}>
                    Sem gênero
                </span>

                <span className={marcarFiltro('gender', 'unknown')} onClick={() => montarFiltro('gender', 'unknown')}>
                    Desconhecido
                </span>
            </div>
        </div>
    )
}