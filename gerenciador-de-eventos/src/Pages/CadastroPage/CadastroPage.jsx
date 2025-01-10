import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroPage.css';
import { createAdmin } from '../../services/api';

const CadastroPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nome, email, senha, confirmarSenha } = formData;

        // Validação dos campos
        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos!');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('Senhas não coincidem!');
            return;
        }

        if (senha.length < 6) {
            alert('Senha deve ter no mínimo 6 caracteres!');
            return;
        }

        try {
            setLoading(true);
            setError(null);

        
           await createAdmin({ nome, email, senha });
           alert('Cadastro realizado com sucesso!');
           navigate('/login');
           
        } catch (error) {
            alert(`Ocorreu um erro ao cadastrar o usuário: ${error.response ? error.response.data.message : error.message}`);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <div className="cadastro-container">
                <h2>Cadastro de Administrador</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="error-message">{error}</p>}
                    <div className="input-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            placeholder="Confirme sua senha"
                            required
                        />
                    </div>
                    <button type="submit" className='button-cadastro' disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
            </div>

        </>
    );
};

export default CadastroPage;
