import axios from 'axios';

// Configure a URL base da API
const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

// Função para cadastro administrador
export const createAdmin = async (adminData) => {
  try {
    const response = await api.post('/api/administradores/cadastro', adminData);
    return response.data;
  } catch (error) {
   console.error("Erro ao cadastrar administrador", error);
   throw error;
  }
}

//Função para login administrador
export const loginAdministrador = async (loginData) => {
  try {
    const response = await api.post('/api/administradores/login', loginData);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    throw error;
  }
}

//Função para listar eventos de um administrador
export const getEventos = async (adminId) => {
  try {
    const response = await api.get(`/api/eventos/listar/${adminId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar eventos", error);
    throw error;
  }
}

//Função para criar evento
export const criarEvento = async (eventoData) => {
  const formData = new FormData();
  formData.append('nome', eventoData.nome);
  formData.append('descricao', eventoData.descricao);
  formData.append('data', eventoData.data);
  formData.append('localizacao', eventoData.localizacao);
  formData.append('imagem', eventoData.imagem);

  try {
    const response = await fetch('/api/eventos/criar',{
      method: 'POST',
      body: formData,
    });
    if(!response.ok){
      throw new Error('Erro ao criar evento');
    }
    return await response.json();
    } catch (error) {
      console.error("Erro ao criar evento", error);
      throw error;
    }
}

//Função para atualizar evento
export const atualizarEvento = async (eventoId, eventoData) => {
  try {
    const response = await api.put(`/api/eventos/atualizar/${eventoId}`, eventoData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar evento", error);
    throw error;
  }
}

//Função para excluir evento
export const excluirEvento = async (eventoId) => {  
  try {
    const response = await api.delete(`/api/eventos/excluir/${eventoId}`);
    return {message: 'Evento excluído com sucesso'};
  } catch (error) {
    console.error("Erro ao excluir evento", error);
    throw error;
  } 
}
  
//Função para listar eventos
export const listarEventos = async () => {
  try {
    const response = await api.get('/api/eventos/listar');
    return response.data;
  } catch (error) {
    console.error("Erro ao listar eventos", error);
    throw error;
  }
}
export default api;
