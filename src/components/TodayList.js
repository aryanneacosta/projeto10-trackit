import styled from "styled-components";

export default function TodayList({ task, progress, updatingToday}) {
    progress();

    return (
        <Habit>
            <HabitStats>
                <Title>{task.name}</Title>
                <Info>Sequência atual: dias</Info>
                <Info>Seu recorde: dias</Info>
            </HabitStats>
            <ion-icon name="checkbox"></ion-icon>
        </Habit>
    );
}

const Habit = styled.div`
    height: 94px;
    width: 340px;
    background-color: white;
    margin-left: 18px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    ion-icon[name='checkbox'] {
        color: #EBEBEB;
        height: 69px;
        width: 69px;
    }
`;

const HabitStats = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    color: #666666;
    font-size: 20px;
    font-family: 'Lexend Deca';
`;

const Info = styled.div`
    color: #666666;
    font-size: 13px;
    font-family: 'Lexend Deca';
`;