import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import HabitsDoneContext from "../contexts/HabitsDoneContext";
import UserContext from "../contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import { getToday } from "../services/trackIt";
import dayjs from "dayjs";
import TodayList from "./TodayList";
import { ThreeDots } from "react-loader-spinner";

export default function Today() {
    const { habitsDone, setHabitsDone } = useContext(HabitsDoneContext);
    const { user } = useContext(UserContext);
    const [toDo, setToDo] = useState(null);
    const today = dayjs();
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    useEffect(() => {
        updatingToday();
    }, []);

    function updatingToday() {
        getToday(user.token)
            .then(resposta => {
                setToDo(resposta.data);
            })
            .catch(resposta => {
                alert('erro ao carregar os hábitos de hoje')
            })
    }

    function progress() {
        let total = toDo.length;
        let done = 0;
        toDo.map((task) => {
            if (task.done === true) {
                done += 1;
            }
            return '';
        })
        setHabitsDone((done / total * 100).toFixed(2));
    }

    function renderPage() {
        if (toDo === null) {
            return (
                <Loading>
                <ThreeDots 
                    color="#FFFFFF"
                    height={13}
                    width={51}/>
                </Loading>
            )
        } else {
            return (
                <>
                    <Top>
                        <Title>{week[today.$W]}, {today.$D}/{today.$M + 1}</Title>
                        <Subtitle>
                            {habitsDone === 0 ?
                                <>Nenhum hábito concluído ainda</>
                                :
                                <>{habitsDone}% dos hábitos concluídos</>
                            }
                        </Subtitle>
                    </Top>
                    {toDo.map((task, index) => {
                        return (
                            <TodayList
                                key={index}
                                task={task}
                                progress={progress}
                                updatingToday={updatingToday}
                            />
                        )

                    })}
                </>
            )
        }
    }

    return (
        <>
            <Header />
            <Container>
                {renderPage()}
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
    margin-top: 5px;
`;

const Loading = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;