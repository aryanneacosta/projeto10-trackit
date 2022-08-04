import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function Footer() {
    const percentage = 23;

    return (
        <Bottom>
            <Link to={'/habitos'}>
                <Menu>Hábitos</Menu>
            </Link>

            <Link to={'/hoje'}>
                <Goal>
                    <Circle>
                        <CircularProgressbarWithChildren
                            value={percentage}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                pathTransitionDuration: 0.5,
                                pathColor: '#ffffff',
                            })}
                        >
                            <div>Hoje</div>
                        </CircularProgressbarWithChildren>
                    </Circle>
                </Goal>
            </Link>

            <Link to={'/historico'}>
                <Menu>Histórico</Menu>
            </Link>

        </Bottom>
    );
}

const Bottom = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--cinza-fundo);
    background-color: white;
`;

const Menu = styled.div`
    color: var(--azul);
    font-size: 18px;
    font-family: 'Lexend Deca'; 

    :first-child {
        margin-left: 36px;
    }

    :last-child {
        margin-right: 31px;
    }
`;

const Goal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    height: 91px;
    width: 91px;
    background-color: var(--azul);
    border-radius: 50%;

`;

const Circle = styled.div`
    height: 79px;
    width: 79px;
    margin: 6px 6px 6px 6px;

    div {
        font-size: 18px;
        color: white;
        font-family: 'Lexend Deca';
    }
`;