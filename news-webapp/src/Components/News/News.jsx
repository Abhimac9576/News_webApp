import React, { useEffect, useState } from 'react'
import Page from '../NewsPage/Page'


function News() {
  
  const [news,setNews]  = useState([])
  const [keys,setKeys] = useState()


  useEffect(()=>{

    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d0d0bf756a374583b60bfeeb0d5e54ab')
    .then((response)=>response.json())
    .then((res)=> setNews(res.articles) )
    

    

  },[])

  console.log(news)
  

 

  return (
    <>
    <div className='w-full flex flex-col justify-center'>
      <div className='w-full flex justify-center'>
        <img className='w-9/12' src="../src/assets/news.jpg" alt="" />
      </div>

      <div className='w-full flex justify-center' >
        <h1 className='text-4xl font-serif font-bold text-white bg-red-600 p-4  m-4 rounded-xl'>Breaking News</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-10'>
       
     {
      news.map((data)=>
      <Page 
      title={data["title"]}
      imageUrl={data["urlToImage"]}
      newsUrl={data["url"]}
      newsName={data["source"]["name"]}
      />
      )

     }
        
      
     
        
       

          

      </div>
    

    </div>
    
    
    </>
  )
}

export default News


