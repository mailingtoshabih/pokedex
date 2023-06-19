import baby from "../assets/baby.png"

export const Card = ({ pokemon }) => {
    return (
        <div className='relative'>


            <div className='p-10 h-60 rounded-xl 
                shadow-2xl shadow-gray-200 cursor-pointer
              hover:shadow-violet-200 duration-500'>


                <div className='w-full h-40'>
                    <img src="" alt="" />
                </div>




                <div className='flex justify-between'> 

                    <p className='capitalize font-bold text-gray-700'>
                        {pokemon && pokemon}
                    </p>

                    <div className=' duration-500 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    </div>

                </div>



            </div>







            <div className='absolute inset-0 h-60 rounded-xl
                 bg-gradient-to-b from-transparent via-transparent to-white -z-10'>

            </div>



        </div>
    )
}
