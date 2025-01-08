import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../../services/api';  // Importando funções da API

const Cadastro = ({ user }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        image: null,
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                password: '',
                image: user.image,
            });
        }
    }, [user]);

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

        if (user) {
            // Atualizar o usuário
            try {
                const updatedUser = {
                    name: formData.name,
                    email: formData.email,
                    image: formData.image,
                };
                await updateUser(user.id, updatedUser); // Passando o ID do usuário
                console.log("Usuário atualizado");
            } catch (error) {
                console.error("Erro ao atualizar o usuário:", error);
            }
        } else {
            // Criar novo usuário
            try {
                const newUser = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    image: formData.image,
                };
                await createUser(newUser);
                console.log("Novo usuário criado");
            } catch (error) {
                console.error("Erro ao criar o usuário:", error);
            }
        }
    };

    return (
        <>

            <div>
                <h2>Cadastro</h2>
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

        </>
    );
};

export default Cadastro;
