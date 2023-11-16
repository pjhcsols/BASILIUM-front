import React from 'react'
import { 
    BasiliumAPI 
} from '../components/Backend/Axios'

function Parsing() {
    const ParsingLogic = () => {
        BasiliumAPI
            .get('/products')
            .then(data=>{

            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        
    )
}

export default Parsing