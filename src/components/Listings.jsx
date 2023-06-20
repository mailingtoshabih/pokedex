import { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Card } from './Card';
import { Loading } from '../pages/Loading';

import InfiniteScroll from 'react-infinite-scroll-component';





export const Listings = () => {



    const [offset, setOffset] = useState(0);
    const [list, setList] = useState([]);


    const fetchData = async () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            .then(res => {
                setList(prev => [...prev, ...res.data.results]);
                setOffset(offset + 20);
            })
            .catch((e) => console.log(e.message));
    }





    useEffect(() => {
        fetchData();
    }, []);













    return (
        <div className='w-full'>



            <div>
                {
                    list &&

                    <InfiniteScroll
                        dataLength={list.length}
                        next={fetchData}
                        hasMore={true}
                        loader={<Loading />}>



                        <div className='grid grid-cols-2 py-10 gap-8 
                        sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' >

                            {
                                list.map((pokemon, idx) => (
                                    <Card key={idx} pokemon={pokemon} />
                                ))
                            }

                        </div>



                    </InfiniteScroll>


                }
            </div>






        </div>
    )
}
