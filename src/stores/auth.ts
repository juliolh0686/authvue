import { defineStore } from "pinia";
import type User from '@/interfaces/IUser'
// import type User from '@/interface/User'
import type { Ref } from 'vue'

const useAuth = defineStore('auth', {
  state: () => ({
    token: null,
    baseURL: '',
    user: '',
    users : [
      {name:'Julio', lastName: 'Loarte',email:'juliolh06@gmail.com',password: '12345'},
      {name:'Julio', lastName: 'Loarte',email:'julio@gmail.com',password: '12345'},
    ]
  }),
  actions: {

    async register(name:string,lastname:string,email:string, password:string) {

      const newUser = {name: name, lastName: lastname, email: email, password: password};
      // Agregar el nuevo usuario al array
      this.users.push(newUser);
    
    },

    async login(email:string,password:string){
      const resultado = this.users.find((user)=> user.email === email && user.password == password);

      if(!resultado) {
        let response = {status: false,message:'Usuario no Registrado'}
        return response
      }else {
        let response = {status: true,resultado}
        return response
      }
      
    },

    async logout() {

    }
  }
})

export default useAuth