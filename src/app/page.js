"use client"
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react';
import { BsFillSunFill, BsWhatsapp } from 'react-icons/bs'
import { GiSunCloud } from 'react-icons/gi'
import { MdClear, MdCastle, MdFastfood, MdOutlineMessage } from 'react-icons/md'
import { FaCity, FaTwitter } from 'react-icons/fa'

export default function Home() {
  const videoRef = useRef(null);
  const placeholders = ['Try: Spend A Day In...', 'Try: A 7-Day Trip Plan...', 'Try: A 4-Day Itinarey...', 'Try: A weekend Retreat For Family...'];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const inputRef = useRef(null);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);

    }, 1000);

    inputRef.current.focus();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      <div className=''>
        <div className='relative  w-[100%] '>
          <video ref={videoRef} autoPlay muted playsInline loop className='w-[100vw]  h-[270px] object-cover' src="https://images-cf.ixigo.workers.dev/videos/shimla">
            <source src="https://www.ixigo.com/product-videos/shimla-desktop.mp4" type="video/mp4" />
          </video>

          <div className=' absolute top-0 bg_gradient w-[100%] pt-8 h-[100%]'>
            <div className='flex text-xl justify-center items-center w-[100%]'>
              <p className='flex items-center text-white mr-8'>
                <span>Clear 23{'\u00B0'}C</span>
                <span className='text-[1.5rem] text-yellow-500 ml-3 mr-8 '>
                  <BsFillSunFill className='rotatingIcon' />
                </span>
                <span className='w-[2.5px] h-6 bg-white rounded-t-lg rounded-b-lg'></span>
              </p>

              <p className='text-white mr-3  px-2 py-1 rounded-lg bg-yellow-400'>AQI 61</p>
              <p className='text-white'>Moderate</p>
            </div>
            <p className='flex justify-center items-center text-white text-xl tracking-widest mr-2 mt-2'>
              Shimla
            </p>
          </div>
        </div>
      </div>

      <div className='h-[300px] flex justify-center items-center  '>

        <div className=' w-[72%] flex justify-start items-start space-x-4 -translate-y-[1rem] '>
          <p className='text-xl p-2 rounded-full bg-white'>
            <MdClear />
          </p>
          <div className='bg-white flex-1 rounded-tl-[1.5rem]'>
            <p className='px-[2rem] py-[2rem] text-xl shadow-lg flex items-center  space-x-4'><span>Science Shimla Experience</span> <span className='text-[1.5rem] text-cyan-500'> <GiSunCloud /></span></p>

            <div className='h-[400px] overflow-y-scroll pb-[3rem]'>
              {/* DAY 1 */}
              <div className='flex justify-start px-[2.5rem] space-x-3 mt-[1.5rem]'>
                <div className='flex flex-col items-center'>
                  <p className='w-3 h-3 rounded-full bg-blue-400'></p>
                  <p className='w-0.5 flex-1 bg-blue-500'></p>
                </div>

                {/* First div */}
                <div className=' bg-gray-100 p-[1rem] rounded-[1.2rem]'>
                  <p className='text-lg space-x-2 flex items-center'>
                    <strong className='text-gray-800'>Day 1:</strong>
                    <span className='text-gray-800'>Exploring the City</span>
                    <span className='text-orange-600'>
                      <MdCastle />
                    </span>
                  </p>
                  <p className='mt-2 text-[0.9rem] text-gray-500'>Explore the charming city of Shimla and its iconic landmarks.</p>
                  <div className='p-[1rem] bg-white rounded-[1.2rem] shadow-2xl mt-4 space-y-2'>
                    <p className='text-gray-800 text-[0.9rem]'>
                      <strong>Morning:</strong>
                      <span className='ml-1'>
                        Start your day with a visit to the <span className='text-blue-600 underline font-[600]'>Jakhu Temple</span>, dedicated to the Hindu monkey god Hanuman. Enjoy panoramic views of Shimla from the temple.
                      </span>
                    </p>
                    <p className='text-gray-800 text-[0.9rem]'>
                      <strong>Afternoon:</strong>
                      <span className='ml-1'>
                        Explore the <span className='text-blue-600 underline font-[600]'>Ridge</span>, a cultural and social hub of Shimla. Visit the <span className='font-[600]'>Christ Church</span>, an architectural marvel and one of the oldest churches in North India.
                      </span>
                    </p>
                    <p className='text-gray-800 text-[0.9rem] '>
                      <strong>Evening:</strong>
                      <span className='ml-1 '>
                        Take a leisurely stroll along <span className='font-[600]'>The Mall</span>, a bustling shopping street. Indulge in some local snacks and explore the various shops. End your day with a delicious dinner at <span className='text-blue-600 underline font-[600]'>Cafe Simla Times</span>, a popular cafe offering Continental, Pizza, Fast Food, and beverages.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* DAY 2 */}
              <div className='flex justify-start px-[2.5rem] space-x-3 mt-8'>
                <div className='flex flex-col items-center'>
                  <p className='w-3 h-3 rounded-full bg-blue-400'></p>
                  <p className='w-0.5 flex-1 bg-blue-500'></p>
                </div>

                {/* First div */}
                <div className=' bg-gray-100 p-[1rem] rounded-[1.2rem]'>
                  <p className='text-lg space-x-2 flex items-center'>
                    <strong className='text-gray-800'>Day 2:</strong>
                    <span className='text-gray-800'>Natural Beauty and Adventure</span>
                    <span className='text-orange-600'>
                      <MdCastle />
                    </span>
                  </p>
                  <p className='mt-2 text-[0.9rem] text-gray-500'>Immerse yourself in the natural beauty of Shimla and enjoy thrilling activities.</p>
                  <div className='p-[1rem] bg-white rounded-[1.2rem] shadow-2xl mt-4 space-y-2'>
                    <p className='text-gray-800 text-[0.9rem]'>
                      <strong>Morning:</strong>
                      <span className='ml-1'>
                        Embark on a scenic drive to the <span className='font-[600]'>Kufri</span>, a picturesque hill station located just outside Shimla. Enjoy horse riding and visit the <span className='font-[600]'>Himalayan Nature Park</span> to witness the diverse wildlife of the region.
                      </span>
                    </p>
                    <p className='text-gray-800 text-[0.9rem]'>
                      <strong>Afternoon:</strong>
                      <span className='ml-1'>
                        Head to the <span className='font-[600]'>Chail Palace</span>, a former summer retreat of the Maharaja of Patiala. Explore the palace and its beautiful surroundings.
                      </span>
                    </p>
                    <p className='text-gray-800 text-[0.9rem] '>
                      <strong>Evening:</strong>
                      <span className='ml-1 '>
                        Experience a beer tasting session at the <span className='font-[600]'>Shimla Brewing Company</span>, known for its Continental, North Indian cuisine, pizzas, and burgers. Enjoy the lively ambiance and unique flavors of locally brewed beers.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* DAY 3 */}
              <div className='flex justify-start px-[2.5rem] space-x-3 mt-8'>
                <div className='flex flex-col items-center'>
                  <p className='w-3 h-3 rounded-full bg-blue-400'></p>
                  <p className='w-0.5 flex-1 bg-blue-500'></p>
                </div>

                {/* First div */}
                <div className=' bg-gray-100 p-[1rem] rounded-[1.2rem]'>
                  <p className='text-lg space-x-2 flex items-center'>
                    <strong className='text-gray-800'>Day 3:</strong>
                    <span className='text-gray-800'>Cultural Heritage and Shopping</span>
                    <span className='text-orange-600'>
                      <MdCastle />
                    </span>
                  </p>
                  <p className='mt-2 text-[0.9rem] text-gray-500'>Discover the rich cultural heritage of Shimla and indulge in some shopping.</p>
                  <div className='p-[1rem] bg-white rounded-[1.2rem] shadow-2xl mt-4 space-y-2'>
                    <p className='text-gray-800 text-[0.9rem]'>
                      <strong>Morning:</strong>
                      <span className='ml-1'>
                        Visit the <span className='font-[600]'>Viceregal Lodge</span>, a splendid British colonial structure that once served as the summer residence of the British Viceroy of India. Explore the beautiful architecture and gardens.
                      </span>
                    </p>
                    <p className='text-gray-800 text-[0.9rem]'>
                      <strong>Afternoon:</strong>
                      <span className='ml-1'>
                        Immerse yourself in the Himachali culture at the <span className='font-[600]'>State Museum</span>, showcasing the history, art, and traditions of the region.
                      </span>
                    </p>
                    <p className='text-gray-800 text-[0.9rem] '>
                      <strong>Evening:</strong>
                      <span className='ml-1 '>
                        Explore the bustling <span className='font-[600]'>Lakkar Bazaar</span>, known for its wooden crafts and souvenirs. Shop for local handicrafts, woolen clothing, and accessories. End your day with an exquisite dinner at <span className='font-[600]'>The Brew Estate</span>, a popular restaurant offering savory North Indian and Continental cuisine.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <p className='px-[2.5rem] mt-6 text-gray-800'>
                Enjoy your trip to Shimla and immerse yourself in the scenic beauty, adventure, and cultural heritage it has to offer!
              </p>
            </div>

            <div className=' flex justify-center px-[2rem] py-[1rem]'>
              <input className=' w-[100%] p-[0.5rem] rounded-lg outline-none border border-gray-200 text-gray-400' ref={inputRef} type="text" placeholder={placeholders[currentPlaceholderIndex]} />
            </div>


          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 p-4 space-y-4">
        {/* Content of the fixed div */}
        <p className='text-[1.5rem] bg-purple-700 text-white rounded-full p-[1rem]'>
          <MdOutlineMessage />
        </p>
        <p className='text-[1.5rem] bg-cyan-500 text-white rounded-full p-[1rem]'>
          <FaTwitter />
        </p>
        <p className='text-[1.5rem] bg-green-500 text-white rounded-full p-[1rem]'>
          <BsWhatsapp />
        </p>
      </div>

    </div>
  )
}
