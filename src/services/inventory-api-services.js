
import useFetch from './use-fetch';

const URL = 'http://127.0.0.1:8000/api/';
const TOKEN = '4b480f02e1b4e8ae7c03600e5d19553ebc46b912';


export class InventoryAPI {
    
    static getItemsList(items) {
        return useFetch(URL + items, 'GET');
    };

    static addNewDrone(body) {
        return useFetch(URL + 'drones/', 'POST', TOKEN, body);
    };

    static addNewCamera(body) {
        return useFetch(URL + 'cameras/', 'POST', TOKEN, body);
    };
}