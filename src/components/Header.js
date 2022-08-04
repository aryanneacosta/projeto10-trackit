import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <Top>
            <div>TrackIt</div>
            <img src={user.image} alt={user.name} />
        </Top>
    );
}

const Top = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--azul-escuro);
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
       color: white;
       font-size: 40px;
       font-family: 'Playball';
       margin-left: 18px;
    }

    img {
        height: 51px;
        width: 51px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;
