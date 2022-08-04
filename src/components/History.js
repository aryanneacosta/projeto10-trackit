import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function History() {
    return (
        <>
            <Header />
            <Container>
                <Title>Histórico</Title>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: var(--cinza-fundo);
    margin-top: 70px;
    margin-bottom: 70px;
    padding-top: 28px;

    p {
        font-size: 18px;
        font-family: 'Lexend Deca';
        color: #666666;
        margin-left: 15px;
        margin-top: 17px;
    }
`;

const Title = styled.div`
    font-size: 23px;
    font-family: 'Lexend Deca';
    color: var(--azul-escuro);
    margin-left: 17px;
`;