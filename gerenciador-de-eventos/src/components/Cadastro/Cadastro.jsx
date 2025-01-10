import React, { useState } from 'react';
import { createAdmin } from '../../services/api';  

const Cadastro = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('password', formData.password);
        if (formData.image) {
            form.append('image', formData.image);
        }

        try {
            await createAdmin(form);  // Apenas criando um novo administrador
            console.log("Novo administrador criado");
        } catch (error) {
            console.error("Erro ao criar administrador:", error);
        }
    };

    return (
        <div className="container">
            <h2>Cadastro de Administrador</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Imagem:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default Cadastro;
