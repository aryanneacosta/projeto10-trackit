import { useContext, useState } from "react";
import styled from "styled-components";
import { postHabits } from "../services/trackIt";
import UserContext from "../contexts/UserContext";

const week = [
    { name: 'D', isSelected: false },
    { name: 'S', isSelected: false },
    { name: 'T', isSelected: false },
    { name: 'Q', isSelected: false },
    { name: 'Q', isSelected: false },
    { name: 'S', isSelected: false },
    { name: 'S', isSelected: false }
];

export default function NewHabit({ setNewHabit }) {
    const [name, setName] = useState('');
    const [weekdays, setWeekdays] = useState(week);
    const [selectedDays, setSelectedDays] = useState([]);
    const { user } = useContext(UserContext);

    function selected(dayIndex) {
        const newWeek = weekdays.map((day, index) => {
            if (index === dayIndex) {
                return {
                    ...day,
                    isSelected: true

                }
            } else {
                return {
                    ...day
                }
            }
        })
        setSelectedDays([...selectedDays, dayIndex]);
        setWeekdays([...newWeek]);
        console.log(selectedDays)
    }

    function habit() {
        const body = {
            name: name,
            days: selectedDays
        };

        postHabits(body, user.token)
            .then(resposta => {
                console.log(resposta.data)
            })
            .catch(resposta => {
                console.log(resposta.data)
            })
    }


    return (
        <Input>
            <form>
                <input
                    type='text'
                    name="name"
                    value={name.name}
                    placeholder="nome do hábito"
                    required
                    onChange={e => setName(e.target.value)}
                />
            </form>
            <Weekdays>
                {weekdays.map((day, index) =>
                    <Day
                        key={index}
                        onClick={() => selected(index)}
                        isSelected={day.isSelected}
                    >{day.name}</Day>
                )}
            </Weekdays>
            <Buttons>
                <Cancel onClick={() => { setNewHabit(false) }}>Cancelar</Cancel>
                <Button onClick={habit}>Salvar</Button>
            </Buttons>
        </Input>
    );
}

const Input = styled.div`
    height: 180px;
    width: 340px;
    background-color: white;
    margin-left: 17px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    input {
        margin-left: 19px;
        margin-top: 18px;
        height: 45px;
        width: 303px;
        border: 1px solid var(--cinza-login);
        color: var(--cinza-login);
        font-size: 20px;
        font-family: 'Lexend Deca';
        border-radius: 5px;
    }
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

const Buttons = styled.div`
    margin-left: 148px;
    margin-top: 30px;
    width: 176px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Cancel = styled.div`
    font-size: 16px;
    font-family: 'Lexend Deca';
    color: var(--azul);
`;

const Button = styled.button`
    height: 35px;
    width: 84px;
    border-radius: 5px;
    background-color: var(--azul);
    border: 1px solid var(--azul);
    color: white;
    font-size: 16px;
    font-family: 'Lexend Deca';
    display: flex;
    justify-content: center;
    align-items: center;
`;