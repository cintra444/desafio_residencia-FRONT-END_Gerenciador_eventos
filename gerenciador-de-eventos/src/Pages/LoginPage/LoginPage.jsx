import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdministrador } from '../../services/api';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Por favor, preencha todos os campos!');
            return;
        }
        console.log('Email:', email);
console.log('Password:', password);

        try {
            const loginData = { email, password };
            const response = await loginAdministrador(loginData);

            if(response && response.token) {
                setError('');
                localStorage.setItem('token', response.token);
                if (remember) {
                    localStorage.setItem('email', email);
                } else {
                    localStorage.removeItem('email');
                }
                navigate(`/eventos/${response.adminId}`);
            } else {
                setError('Email ou senha incorretos!');
            }
            } catch (error) {
                console.error('Erro ao fazer login:', error);
                setError('Erro ao fazer login. Tente novamente.');
            }
    };
          

    return (
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
                <div className='form-group-checkbox'>
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label>
                        Gravar senha
                    </label>
                </div>
                <button type="submit" className='login-button'>Entrar</button>
            </form>
            <button
                className={`register-button ${error ? 'show-register' : ''}`}
                onClick={() => navigate('/cadastro')}
            >
                Cadastrar Administrador
            </button>
        </div>
    );
};

export default LoginPage;
