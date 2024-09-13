import './styles.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

export default function ApiRickAndMorty() {

    const [conteudo, setConteudo] = useState(<></>);
    const [busca, setBusca] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    async function getCharacter() {
        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}${busca}`,
            reqOptions
        )

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return { info: data.info, char: data.results }
    }

    async function buildCards() {
        const { char: todosPersongens, info } = await getCharacter()
        setTotalPages(info.pages)

        return(
            todosPersongens.map(personagem => 
                <Card data={personagem} /> 
            )
        )
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCards())
        }

        getConteudo()
    }, [page, busca])




    return (
        <>
            <Header />

            <main id='main-api'>
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
                <Filter
                    busca={busca}
                    setBusca={setBusca}
                />
                <div className='list-api'>
                    {conteudo}
                </div>

            </main>

            <Footer />
        </>
    )
}