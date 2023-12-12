/* Custom Hooks */

import { useEffect, useState } from "react"

const useFetch = (url)=>{

    const [data, setData] = useState()

    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(resuls =>{
                setData(resuls.products)
            })
        })
    }, [])

    return data
}

export default useFetch;