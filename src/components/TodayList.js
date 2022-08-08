import { useContext, useState } from "react";
import styled from "styled-components";
import { postTodayDone } from "../services/trackIt";
import { postTodayUndone } from "../services/trackIt";
import UserContext from "../contexts/UserContext";

export default function TodayList({ task, progress, updatingToday}) {
    const [done, setDone] = useState(task.done);
    const { user } = useContext(UserContext);
    progress();

    function isDone() {
        if (done === false) {
            postTodayDone(task.id, { }, user.token)
                .then(() => updatingToday());
                setDone(true);
        } else {
            postTodayUndone(task.id, { }, user.token)
                .then(() => updatingToday());
                setDone(false);
        }
    }

    return (
        <Habit>
            <HabitStats>
                <Title>{task.name}</Title>
                <Infos>
                    <Info>Sequência atual:</Info>
                    <Day checked={done}>{task.currentSequence} dia(s)</Day>
                </Infos>
                <Infos>
                    <Info>Seu recorde:</Info>
                    <Day checked={
                            task.highestSequence === task.currentSequence 
                            &&
                            done === true
                            &&
                            task.highestSequence > 0
                            ?
                        true
                        :
                        false
                    }>{task.highestSequence} dia(s)</Day>
                </Infos>
            </HabitStats>
            <Check 
                checked={done} 
                onClick={() => isDone()}
            >
                <ion-icon name="checkmark-outline"></ion-icon>
            </Check>
        </Habit>
    );
}

const Habit = styled.div`
    width: 340px;
    background-color: white;
    margin-left: 18px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 12px;
    padding-top: 13px;
`;

const HabitStats = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

const Title = styled.div`
    color: #666666;
    font-size: 20px;
    font-family: 'Lexend Deca';
`;

const Infos = styled.div`
    display: flex;
`

const Info = styled.div`
    color: #666666;
    font-size: 13px;
    font-family: 'Lexend Deca';
    margin-right: 3px;
`;

const Day = styled.div`
    color:${props => props.checked? '#8FC549' : '#666666'};
    font-size: 13px;
    font-family: 'Lexend Deca';
`; 

const Check = styled.div`
    height: 69px;
    width: 69px;
    margin-right: 13px;
    background-color: ${props => props.checked? '#8FC549' : '#EBEBEB'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon[name='checkmark-outline'] {
        height: 59px;
        width: 59px;
        color: white;
    }
`;