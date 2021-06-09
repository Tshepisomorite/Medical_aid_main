

function GenerateAuthToken(){
    const url = 'https://rest.smsportal.com/v1/Authentication';
    const options = {method: 'GET', 
    headers: {
        Accept: 'application/json',
        Authorization: Basic + '2ad515aa-5a5b-40af-b1c5-3a1901d9e796:JdnPfPVZ7MKdJ261I8tSd75rAnLQyImq'
    }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
} 