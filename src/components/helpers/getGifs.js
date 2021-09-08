//helpers: funciones que reciben algo y retornan algo

export const getGifs = async(category) => {
    //console.log('me llego esta categoria', category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ipcsgMPL6C2ztKNjIHLJ3DMKJdWh465V`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //setImages(gifs)
    return gifs
}

