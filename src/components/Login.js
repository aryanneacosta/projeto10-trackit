import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from './../assets/logo.png';
import { useContext, useState } from "react";
import { postLogin } from './../services/trackIt';
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext";

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function login(event) {
        event.preventDefault();
        setLoading(true);

        postLogin({
            email: form.email,
            password: form.password
        })
            .then(resposta => {
                setLoading(false)
                setUser(resposta.data)
                navigate('/hoje')
            })
            .catch(resposta => {
                alert('e-mail ou senha incorretos! Tente novamente ou faça seu cadastro!')
                setLoading(false)
            })
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt='logo' />
            </Logo>
            <Input>
                <form onSubmit={login}>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        placeholder='email'
                        required
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        disabled={loading}
                    />
                    <input
                        type='password'
                        name='password'
                        value={form.password}
                        placeholder='senha'
                        required
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        disabled={loading}
                    />
                    <button
                        type='submit'
                        disabled={loading}>
                        {loading ?
                            <ThreeDots 
                                color="#FFFFFF"
                                height={13}
                                width={51} />
                            :
                            'Entrar'
                        }
                    </button>
                </form>
            </Input>
            <Link to={'/cadastro'}>
                <Register>
                    Não tem uma conta? Cadastre-se!
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
        margin-bottom: 25px;
    }
`;

const Register = styled.div`
        font-size: 14px;
        color: var(--azul);
        font-family: 'Lexend Deca';
        text-decoration: underline;
`;