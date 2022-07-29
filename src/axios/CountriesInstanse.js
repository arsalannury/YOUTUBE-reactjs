import axios from 'axios';


const InstanseCountries = axios.create({
    baseURL : "https://reacttraining-8cad3-default-rtdb.firebaseio.com"
})

export default InstanseCountries;