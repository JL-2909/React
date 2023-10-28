import { useEffect, useState } from "react";
function App() {
  const [characters, setCharacters] = useState([]);
  const [countPage, setCountPage] = useState(1)
  useEffect(() => {

    const URL_API_CHARACTER = `https://rickandmortyapi.com/api/character?page=${countPage}`;
    const renderCharacters = async () => {
      const respuestaDelServidor = await fetch (URL_API_CHARACTER)
      const convercionAJson = await respuestaDelServidor.json()
      setCharacters(convercionAJson.results)
    }
    renderCharacters()
  },[countPage])
  console.log(characters)

  return(
    <> 
     <div className="padre bg-black">
       <button className="bg-green-700 m-10 w-80 " onClick={() => setCountPage(countPage - 1)} disabled= {countPage=== 1}>ATRAS</button>
        <button className="bg-green-700 w-80" onClick={() => setCountPage(countPage + 1)}>SIGUIENTE</button>
        <p className="page text-green-400 text-center">page{countPage}</p>
    
        <div className="tarjetas flex display:flex; flex-wrap  justify-around pt-1 pb-10">
          {characters.map(({name,image,status,species},index)=>
          (<div key={index} className="card  w-30 mt-5"><h2 className="text-center text-green-400">{name}</h2><img  src={image}/><p className="text-blue-300 text-center">{status}</p><p  className="text-blue-300 text-center">{species}</p></div>))
          }
         </div> 
         </div>
    
    </>
  )
  
}

export default App;
