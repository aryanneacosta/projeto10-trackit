import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import UserContext from "../contexts/UserContext";
import NewHabit from "./NewHabit";
import { getHabits } from "../services/trackIt";
import HabitsList from "./HabitsList";

export default function Habits() {
    const [newHabit, setNewHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getHabits(user.token)
            .then(resposta => {
                console.log(resposta.data)
                setHabits(resposta.data);
            })
            .catch(resposta => {
                console.log(resposta.data)
            })
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Top>
                    <Title>Meus hábitos</Title>
                    <Plus onClick={() => { setNewHabit(true) }}>
                        <ion-icon name="add"></ion-icon>
                    </Plus>
                </Top>
                {newHabit ?
                    <NewHabit setNewHabit={setNewHabit} />
                    :
                    <></>
                }

                {habits.map((habits, index) => 
                    <HabitsList
                        key={index}
                        name={habits.name}
                        days={habits.days}
                    />
                )}

                {habits.length > 0 ?
                    <></>
                    :
                    <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
                }

            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    background-color: var(--cinza-fundo);
    margin-top: 70px;
    margin-bottom: 70px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 28px;
    margin-bottom: 20px;
`;

const Title = styled.div`
    font-size: 23px;
    font-family: 'Lexend Deca';
    color: var(--azul-escuro);
`;

const Plus = styled.div`
    height: 35px;
    width: 40px;
    background-color: var(--azul);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon[name='add'] {
        color: white;
        height: 25px;
        width: 25px;
        z-index: 0;
    }
`;

const Message = styled.div`
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #666666;
`;