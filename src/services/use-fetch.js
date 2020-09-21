
const useFetch =(url, method, token=null, body=null) => (
    fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token && {'Authorization': `Token ${token}`})
        },
        ...(body && {body: JSON.stringify(body)} )
    }).then(resp => resp.json())
)

export default useFetch;
