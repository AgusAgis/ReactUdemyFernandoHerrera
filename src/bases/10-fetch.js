const apiKey = 'UHMPzt3RJ87W3K9OSGANJWgm9LQwqBwn';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCall
    .then(resp => resp.json())  //Promesas encadenadas
    .then(({data}) => {
        const {url} = data.images.original;
        // console.log(url)
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)