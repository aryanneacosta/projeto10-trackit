import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from './../assets/logo.png';
import { useState } from "react";
import { postRegistration } from "../services/trackIt";

export default function Registration() {
    const [form, setForm] = useState({ email: '', name: '', image: '', password: '' })

    function registration(event) {
        event.preventDefault();
        const body = {
            email: form.email,
            name: form.name,
            image: form.image,
            password: form.password
        }
        console.log(body)

        postRegistration(body)
            .then(resposta => {
                console.log(resposta.data)
            })
            .catch(resposta => {
                console.log(resposta.data)
            })
    }

    return (
        <Container>
        <Logo>
            <img src={logo} alt='logo' />
        </Logo>
        <Input>
            <form onSubmit={registration}>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    placeholder='email'
                    required
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type='password'
                    name='password'
                    value={form.password}
                    placeholder='senha'
                    required
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <input
                    type='name'
                    name='name'
                    value={form.name}
                    placeholder='nome'
                    required
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type='text'
                    name='image'
                    value={form.image}
                    placeholder='foto'
                    required
                    onChange={e => setForm({ ...form, image: e.target.value })}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </Input>
        <Link to={'/'}>
            <Register>
                Já tem uma conta? Faça login!
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