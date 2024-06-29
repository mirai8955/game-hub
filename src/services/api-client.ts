import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7ef9c0e69f494d2e9295988fadf8363e'
    }
})