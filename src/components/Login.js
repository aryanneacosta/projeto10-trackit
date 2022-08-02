import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from './../assets/logo.png';

export default function Login() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt='logo' />
            </Logo>
            <Input>
                <form>
                    <input
                        type='email'
                        name='email'
                        value={'email'}
                        placeholder='email'
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        value={'password'}
                        placeholder='password'
                        required
                    />
                    <button>Entrar</button>
                </form>
            </Input>
            <Link to={'/cadastro'}>
                <Register>
                    Não tem uma conta? Cadastre-se
                </Register>
            </Link>

        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
`;

const Logo = styled.div`
    img {
        height: 180px;
        width: 180px;
    }
`;

const Input = styled.div`
    margin-top: 32px;

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        height: 45px;
        width: 303px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: var(--cinza-login);
        font-size: 18px;
        font-family: 'Lexend Deca';
    }

    input:first-child {
        margin-bottom: 6px;
    }
    
    button {
        height: 45px;
        width: 303px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--azul);
        color: white;
        font-family: 'Lexend Deca';
        font-size: 21px;
        border: 1px solid var(--azul);
        border-radius: 5px;
        margin-top: 6px;
        margin-bottom: 25px;
    }
`;

const Register = styled.div`
        font-size: 14px;
        color: var(--azul);
        font-family: 'Lexend Deca';
        text-decoration: underline;
`;