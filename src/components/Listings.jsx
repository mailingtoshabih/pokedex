import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Card } from './Card';
import { Loading } from '../pages/Loading';



export const Listings = () => {


    let offset = 0;
    const [list, setList] = useState(null);
    const listInnerRef = useRef();


    const handleScroll = (e) => {

        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("bottom")
        }


    }






    useEffect(() => {

        axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=1000`)
            .then(res => {
                setList(list ? [...list, ...res.data.results] : [...res.data.results]);
            })
            .catch((e) => console.log(e.message));



    }, [offset]);


    // dependency - params












    return (
        <div className='w-full'>




            {
                list ?

                    <div className='grid grid-cols-2 py-10 gap-8 
                                    sm:grid-cols-3
                                    lg:grid-cols-4 xl:grid-cols-5' >




                        {
                            list.slice(0, 20).map((pokemon, idx) => (
                                <Card key={idx} pokemon={pokemon} />
                            ))
                        }

                    </div>

                    :

                    <Loading />
            }






        </div>
    )
}
