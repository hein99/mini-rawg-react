import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '422d7a132b114f7eb27c2ca8387829bf',
  },
})

export default apiClient;