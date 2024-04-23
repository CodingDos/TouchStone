import api from './apiConfig';

export const getAiResponse = async (options) => {
    console.log(options)
    try {
        const response = await api.post('/api/gemini/', options);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};

