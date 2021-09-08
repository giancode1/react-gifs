import React ,{useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem'
import {getGifs} from './helpers/getGifs'


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs(category)
        //.then(imgs => setImages(imgs))
        .then(setImages)
    }, [category])
 
    return (
        <>
        <h3>Si: {category}</h3>
        <div className="card-grid"> 
        {   
            // images.map( ({id,title}) => 
            //     <li key={id}>{title}</li>
            // )
            images.map( img => 
                <GifGridItem 
                    key={img.id} 
                    //img={img} 
                    {...img}   //otra forma
                />
            )
        }      
        </div>
        </>
    )
}
