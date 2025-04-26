import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90DEG, #002f52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px 25px;
    margin: 10px auto;
    border-radius: 12px;
    width: 60%;
    max-width: 600px;
    transition: all 0.3s ease;
    cursor: pointer;

    p {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        margin: 0;
        flex: 1;
    }

    img {
        width: 80px;
        height: auto;
        border-radius: 4px;
        object-fit: cover;
    }

    &:hover {
        transform: translateY(-3px);
        background-color: rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
`



function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            
            <Input 
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value

                    if (textoDigitado.trim() === '') {
                        setLivrosPesquisados([])
                        return
                    }

                    const resultadoPesquisa = livros.filter(livro =>
                        livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                    )

                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            { livrosPesquisados.map(livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa