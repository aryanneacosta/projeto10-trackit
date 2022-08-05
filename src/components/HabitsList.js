import { useState } from "react";
import styled from "styled-components";

const week = [
    { name: 'D' },
    { name: 'S' },
    { name: 'T' },
    { name: 'Q' },
    { name: 'Q' },
    { name: 'S' },
    { name: 'S' }
];

export default function HabitsList({ name, days }) {
    const [isSelected, setIsSelected] = useState(false);

    function renderDays(day, index) {
        
        let weekday = days.includes(index)
        if (weekday) {
            return (
                <Day
                    key={index}
                    isSelected={true}
                > {day}
                </Day>
            )
        } else {
            return (
                <Day
                    key={index}
                    isSelected={isSelected}
                > {day}
                </Day>
            )
        }
    }

    return (
        <Container>
            <HabitHeader>
                <HabitTitle>{name}</HabitTitle>
                <ion-icon name="trash"></ion-icon>
            </HabitHeader>
            <Weekdays>
                {week.map((day, index) => renderDays(day, index))}
            </Weekdays>
        </Container>
    );
}

const Container = styled.div`
    height: 90px;
    width: 340px;
    margin-left: 17px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 5px;
`;

const HabitHeader = styled.div`
    width: 315px;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;

    ion-icon[name='trash'] {
        margin-top: 13px;
        height: 15px;
        width: 13px;
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