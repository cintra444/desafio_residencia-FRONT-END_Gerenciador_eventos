import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
       
        if(!email || !password) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if(remember) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
        navigate('/');
    };

    return (
        <>
        <Navbar/>
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='form-group'>
                    <label>Email do Administrador</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        Gravar senha
                    </label>
                </div>
                <button type="submit" className='login-button'>Entrar</button>
            </form>
            <button
            className='register-button'
            onClick={() => navigate('/cadastro')}
            >Cadastrar Administrador    
            </button>
        </div>
        <Footer/>
        </>
    );
};

export default LoginPage;