import { defineStore } from "pinia";

const useAuth = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    regexCorreo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    //baseURL: '',
    user: '',
    users : [
      {name:'Jorge Manuel', lastName: 'Samaniego Calderon',email:'jsamaniego@gmail.com',password: '12345'},
      {name:'Sergio', lastName: 'Perez Miranda',email:'sperez@gmail.com',password: '12345'},
      {name:'Manuel Erick', lastName: 'Loyola Jara',email:'mloyola@gmail.com',password: '12345'},
    ]
  }),
  persist: {
    storage : sessionStorage,
  },
  actions: {

    async register(name:string,lastname:string,email:string, password:string) {

      const newUser = {name: name, lastName: lastname, email: email, password: password};
      
      let resultado = this.users.push(newUser);

      if(!resultado) {
        let response = {status: false,message:'Usuario no Registrado'}
        return response
      }else {
        this.token = 'TokenOk'
        this.user = name
        let response = {status: true,message:'Usuario Registrado'}
        return response
      }
    
    },

    async login(email:string,password:string){
      const resultado = this.users.find((user)=> user.email === email && user.password == password);

      if(!resultado) {
        let response = {status: false, message:'Usuario no Registrado',resultado: resultado}
        return response
      }else {
        this.token = 'TokenOk'
        let response = {status: true, message:'Ok', resultado: resultado}
        this.user = resultado.name
        return response
      }
      
    },

    async logout() {
      this.token = null
      let response = {status: true,message:'Logout'}
      return response
    }
  }
})

export default useAuth