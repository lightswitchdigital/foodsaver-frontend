import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'https://foodsaver-api.lightswitch.digital' 
})

export const API = {
    getAll(){
        return instance.get(``)
    }
}