
import useFetch from './use-fetch';

const URL = 'http://127.0.0.1:8000/api/';
const TOKEN = '4b480f02e1b4e8ae7c03600e5d19553ebc46b912';


export class InventoryAPI {
    
    static getItemsList(items) {
        return useFetch(URL + items, 'GET')
            .then(resp => resp.json());
    };

    static addNewDrone(body) {
        return useFetch(URL + 'drones/', 'POST', TOKEN, body)
        .then(resp => resp.json());
    };

    static addNewCamera(body) {
        return useFetch(URL + 'cameras/', 'POST', TOKEN, body)
        .then(resp => resp.json());
    };

    static addNewItem(items, body) {
        return useFetch(URL + items, 'POST', TOKEN, body);
    };

    static async deleteItem(items, id) {
        return await useFetch(URL + items + '/' + id, 'DELETE', TOKEN);
    }
}