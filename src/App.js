import { useEffect, useState} from 'react';
import './App.css';
import News from './News';



function App() {


  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("global");

  useEffect(()=>{

 
   fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=e0d4625cd6e948b9854eab04a9c3cbaf')
    .then((response)=>response.json())
    .then((news)=>{
     setArticles(news.articles);
     console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err)
    })

  },[category])
  return (

    <div className="App">

    <header className='header'>
      <h1>Global News</h1>
      <input type='text' onChange={(event)=>{
        if(event.target.value!=="")
        {
          setCategory(event.target.value);
        }
        else
        {
          setCategory("global")
        }
       

      }} placeholder='Search News'/>

    </header>


     <section className="news-articles">
    {
       articles.map((article)=>{
        return(
          <News article ={article}/>
        )
       })
    }
     
     </section> 

      </div>
  );
}

export default App;
