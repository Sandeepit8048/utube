import React, { useEffect, useState } from 'react'
import Img from '../assets/got.avif'
function MovieAPI() {
    const [data , setData] = useState([0]);
     
  useEffect(()=>{
    async function Moviefetch() {
         const dataapi = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
         const response = await dataapi.json();
            
         setData(response);

        }
        Moviefetch();
    }, [])
    console.log(data);

  return (
    < >
        {
            data.map((item)=>{
                
                return (
               
                    <div>
                         <img src={item.Poster} alt="" />
                         <p>Time: {item.Runtime}</p>
                         <p>Movie-Name: {item.Title}</p>
                          <p>Year: {item.Year}</p>
                          {/* <img src={Img} alt="" /> */}
                          

                    </div>
                )
                
})
        }
    </>
  )
}

export default MovieAPI
