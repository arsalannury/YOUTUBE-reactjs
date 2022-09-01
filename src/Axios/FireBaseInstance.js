import axios from "axios";


const FireBaseInstance = axios.create({
    baseURL: `https://reacttraining-8cad3-default-rtdb.firebaseio.com/`
});

export default FireBaseInstance;