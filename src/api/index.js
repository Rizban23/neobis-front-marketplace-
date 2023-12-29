const URL = 'https://neomobimarket-production.up.railway.app';

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type" : 'application/json',
    }
});

export const login = async (data) =>{
    const res = await instance.post('/api/auth', data)
    return res.data
}

export const register = async (data) =>{
    console.log(data)
    const res = await instance.post('/api/register', data)
    return res.data

}