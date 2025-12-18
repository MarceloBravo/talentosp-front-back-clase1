import instance from 'axiosInstance'

async function sendEmail(data) {
    try {
        const response = await instance.post(`/api/contacto`, data);
        return response.data;
    } catch (error) {
        console.error('Error enviando el email:', error);
        throw error;
    }
}

export { sendEmail };

