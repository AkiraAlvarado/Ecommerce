import { TOKEN } from "../constans/env"

export const token = () => localStorage.getItem(TOKEN)
export const setToken = (token) => localStorage.setItem(TOKEN, token)
export const  removeToken = () => localStorage.removeItem(TOKEN)