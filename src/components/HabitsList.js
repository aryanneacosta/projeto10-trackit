import { useContext } from "react";
import styled from "styled-components";
import { deleteHabits } from "../services/trackIt";
import UserContext from "../contexts/UserContext";

const week = [
    { name: 'D' },
    { name: 'S' },
    { name: 'T' },
    { name: 'Q' },
    { name: 'Q' },
    { name: 'S' },
    { name: 'S' }
];

export default function HabitsList({ name, days, id, updating }) {
    const { user } = useContext(UserContext);

    function renderDays(day, index) {
        let weekday = days.includes(index)
        if (weekday === true) {
            return (
                <Day
                    key={index}
                    isSelected={true}
                >
                    {day.name}
                </Day>
            )
        } else {
            return (
                <Day
                    key={index}
                    isSelected={false}
                >
                    {day.name}
                </Day>
            )
        }
    }

    function deleteHabit(id) {
        let confirm = window.confirm('tem certeza que quer deletar esse hábito?');
        if (confirm) {
            deleteHabits(id, user.token)
                .then(resposta => {
                    updating()
                })
                .catch(resposta => {
                    console.log(resposta.data)
                })
        }
    }

    return (
        <Container>
            <HabitHeader>
                <HabitTitle>{name}</HabitTitle>
                <div onClick={() => deleteHabit(id)}>
                <ion-icon name="trash"></ion-icon>
                </div>
            </HabitHeader>
            <Weekdays>
                {week.map((day, index) => renderDays(day, index))}
            </Weekdays>
        </Container >
    );
}

const Container = styled.div`
    width: 340px;
    margin-left: 17px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 5px;
    padding-bottom: 15px;
`;

const HabitHeader = styled.div`
    width: 315px;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;

    ion-icon[name='trash'] {
        margin-top: 13px;
        height: 20px;
        width: 18px;
        color: #666666;
    }
`;

const HabitTitle = styled.div`
    font-size: 20px;
    font-family: 'Lexend Deca';
    color: #666666;
    margin-top: 13px;
`;

const Weekdays = styled.div`
    margin-left: 17px;
    margin-top: 8px;
    display: flex;
`;

const Day = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--cinza-login);
    color: ${props => props.isSelected ? '#FFFFFF' : '#D4D4D4'};
    background-color: ${props => props.isSelected ? '#D4D4D4' : '#FFFFFF'};
    font-size: 20px;
    font-family: 'Lexend Deca';
    border-radius: 5px;
    margin-right: 5px;
`;