import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroPage.css';

const CadastroPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        if(!nome || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos!');
            return;
        }

        if(senha !== confirmarSenha) {
            alert('Senhas não coincidem!');
        }

        if(senha.length < 6) {
            alert('Senha deve ter no mínimo 6 caracteres!');
        }

        alert('Cadastro realizado com sucesso!');
        navigate('/login');
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Confirmar Senha</label>
                    <input
                        type="password"
                        name="confirmarSenha"
                        value={formData.confirmarSenha}
                        onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                        placeholder="Confirme sua senha"
                        required
                    />
                </div>
                <button type="submit" className='button-cadastro'>Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPage;