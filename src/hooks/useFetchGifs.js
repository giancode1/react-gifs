import { useState } from "react"

export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })
    setTimeout(()=>{
        setState({
            data: [1,2,3,4,5],
            loading: false,
        })
    },1000)
    return state // {data:[], loadinf: true}
}











