import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
       
        if(!email || !password) {
            setError('Por favor, preencha todos os campos!');
            return;
        }

        // Simulação de login (como estamos utilizando mock)
        if (email === 'admin@admin.com' && password === '123456') {
            setError('');
            if(remember) {
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
            }
            navigate('/');
        } else {
            setError('Email ou senha incorretos!');
        }
    };

    return (
        <>
            
            <div className="login-page">
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
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
                >
                    Cadastrar Administrador    
                </button>
            </div>
           
        </>
    );
};

export default LoginPage;
