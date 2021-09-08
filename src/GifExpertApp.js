import React , {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch'])
    
    // const handleAdd = () => {
    //     //setCategories(cate => [...cate, 'Heroe del escudo'])
    //     setCategories([...categories, 'Heroe del escudo'])
    // }
    // <button onClick={handleAdd}>agregar</button>

    return (
        <>
           <h2>GiftExpertApp</h2> 
           <AddCategory setCategories={setCategories} />
           <p>las categorias son:{categories}</p>
           <hr />
            <ol>
                {
                    categories.map( (c,i) => 
                    <GifGrid category={c} key={c} />
                        // <li key={i}> {c} </li>
                    )
                }
            </ol>
        </>
    )
}

