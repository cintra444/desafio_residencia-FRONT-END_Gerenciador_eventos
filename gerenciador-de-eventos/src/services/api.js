import axios from 'axios';

// Configure a URL base para o MockAPI
const api = axios.create({
  baseURL: 'https://mockapi.io/projects/{project_id}/', // Substitua {project_id} pelo ID real do seu projeto
});

// Função para obter todos os usuários
export const getUsers = async () => {
  try {
    const response = await api.get('users');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

// Função para criar um novo usuário
export const createUser = async (userData) => {
  try {
    const response = await api.post('users', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

// Função para atualizar um usuário
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await api.put(`users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};

// Função para excluir um usuário
export const deleteUser = async (userId) => {
  try {
    await api.delete(`users/${userId}`);
    return { message: 'Usuário excluído com sucesso!' };
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    throw error;
  }
};

export default api;
