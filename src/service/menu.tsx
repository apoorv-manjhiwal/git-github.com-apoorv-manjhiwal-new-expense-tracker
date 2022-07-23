import axios from 'axios';
import IDataList from '../model/IDataList';

// get the json data 
const getDataFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3000/items`)
            .then( response => response.data )
};

// it is use to store the data
const pushDataFromUser = ( newpurchase : Omit<IDataList, 'id'> ) => {
    return axios.post<IDataList>(
        `http://localhost:3000/items`,
        newpurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.data )
};

export { 
    getDataFromServer,
    pushDataFromUser 
}