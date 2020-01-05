export const submitUserAction = (data) => {
   const url = 'http://localhost:3333/auth/register';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
        
    }).then(response => response.json())
    .then(json => {console.log(json)})
};