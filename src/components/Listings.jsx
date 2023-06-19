import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from './Card';
import { Loading } from '../pages/Loading';



export const Listings = () => {



    const [list, setList] = useState(null);




    useEffect(() => {

        const res = axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                setList(res.data.results);
            })
            .catch((e) => console.log(e.message));

    }, [])
    // dependency - params






















    return (
        <div className='h-96 w-full'>




            {
                list ?

                    <div className='grid grid-cols-2 py-10 gap-4 
                                    sm:grid-cols-3
                                    md:grid-cols-4 lg:grid-cols-5'>




                        {
                            list.map((pokemon) => (

                                <Card key={pokemon.name} pokemon={pokemon.name} />
                            ))
                        }

                    </div>

                    :

                    <Loading />
            }






        </div>
    )
}
