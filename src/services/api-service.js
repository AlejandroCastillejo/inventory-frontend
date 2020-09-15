
export class API {
    
    static useFetch(url, method, token=null, body=null) {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(token && {'Authorization': `Token ${token}`})
            },
            ...(body && {body: JSON.stringify(body)} )
        }).then(resp => resp.json())
    }

}