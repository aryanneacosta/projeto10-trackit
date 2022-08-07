import { useContext, useEffect } from "react";
import styled from "styled-components";
import HabitsContext from "../contexts/HabitsContext";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import { getToday } from "../services/trackIt";
import dayjs from "dayjs";



export default function Today() {
    const { habits, setHabits } = useContext(HabitsContext);
    const { user } = useContext(UserContext);
    const today = dayjs();
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    useEffect(() => {
        getToday(user.token)
            .then(resposta => {
                setHabits(resposta.data)
                console.log(habits)
            })
            .catch(() => {
                alert('erro ao carregar os hábitos de hoje')
            })
    }, []);

    return (
        <>
        <Header />
        <Container>
            <Top>
                <Title>{week[today.$W]}, {today.$D}/{today.$M + 1}</Title>
                <Subtitle></Subtitle>
            </Top>
            <Habit></Habit>
        </Container>
        <Footer />
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    background-color: var(--cinza-fundo);
`;

const Top = styled.div`
    height: 107px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 18px;
`;

const Title = styled.div`
    color: var(--azul-escuro);
    font-size: 23px;
    font-family: 'Lexend Deca';
`;

const Subtitle = styled.div`
    color: #BABABA;
    font-size: 18px;
    font-family: 'Lexend Deca';
`;

const Habit = styled.div`
    height: 94px;
    width: 340px;
    background-color: white;
    margin-left: 18px;
    border-radius: 5px;
`;