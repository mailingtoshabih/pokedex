import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Listings } from '../components/Listings'
import { Footer } from '../components/Footer'
import { Savedcard } from '../components/Savedcard'







export const Bookmark = () => {

    const [list, setList] = useState(null);


    useEffect(() => {

        window.scroll(0, 0);

        const local = { ...localStorage };

        const savedList = Object.entries(local).map(([k, v]) => ({
            v
        }))

        setList(savedList)
    }, [])








    return (
        <div>
            <Navbar />


            <div className='px-3 sm:px-10'>



                <p className='my-5 text-gray-800 text-2xl font-light'>
                    Saved Pokemons
                </p>


                {/* <Listings /> */}



                <div className='w-full'>




                    {
                        !list?.length < 1 ?

                            <div className='grid grid-cols-2 py-10 gap-8 
                                sm:grid-cols-3
                                 lg:grid-cols-4 xl:grid-cols-5' >




                                {
                                    list?.map((pokemon, idx) => (
                                        <Savedcard key={idx} id={pokemon.id} pokemon={pokemon.v} />
                                    ))
                                }

                            </div>
                            
                            :

                            <div>

                                <p className='mt-40 mb-60 mx-auto w-fit font-bold text-3xl sm:text-5xl text-violet-400 animate-pulse text-center'>
                                    Bookmarks Empty

                                    <span className='text-xl font-extralight text-gray-800 block'>Add some pokemons...</span>
                                </p>


                            </div>


                    }






                </div>




            </div>



            <Footer />
        </div>
    )
}
