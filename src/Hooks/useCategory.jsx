import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UseCategory = () => {

    const [category, setCategory] = useState([])
    const [errMsg, setErrMsg] = useState('')

    const CATEG_API = 'https://dummyjson.com/products/categories';

    useEffect(()=>{
      const fetchCategory = async() =>{
        try{
          const categResponse = await axios.get(CATEG_API)
        const categData  = categResponse.data
        setCategory(categData)
        }
        catch(e){
          console.log('error', e);
          
        }
        
      }
      fetchCategory()
    },[])

  return { category, errMsg, setErrMsg}
}
