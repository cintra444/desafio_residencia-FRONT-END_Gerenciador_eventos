import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            // Update usuario
            const updatedUser = {
                name: formData.name,
                email: formData.email,
                image: formData.image,
            };
            localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
            // Cria um novo usuario
            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                image: formData.image,
            };
            localStorage.setItem('user', JSON.stringify(newUser));
        }

        console.log(formData);
    };

    return (
        <>
            <Navbar />
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
            <Footer />
        </>
    );
};

export default Cadastro;