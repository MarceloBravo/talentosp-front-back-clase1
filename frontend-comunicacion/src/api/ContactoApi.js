import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

async function sendEmail(data) {
    try {
        const response = await axios.post(`${API_URL}/api/comntacto`, data);
        return response.data;
    } catch (error) {
        console.error('Error enviando el email:', error);
        throw error;
    }
}

export { sendEmail };

