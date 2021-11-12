import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'http://213.139.208.216:5000' 
})

export const API = {
    getAll(){
        return instance.get(``)
    }
}