import { useMemo, useState } from "react"
import Item from "../components/Item"
import banner from "../assets/banner.png"
import atletasData from "../atletas.json"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import { extractTreinos } from "../utils/functions"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function EsportistaPage() {
  const [infoEsportista, setInfoEsportista] = useState("")
  const [treinosList, setTreinosList] = useState([])
  const [queryName, setQueryName] = useState("")
  
  const filteredTreino = useMemo(() => {
    return treinosList.filter(item => {
    return item.toLowerCase().includes(queryName.toLowerCase())
  })}, [treinosList, queryName])


  const addTreino = (newTreino) => {
    setTreinosList(currentList =>
      [...currentList, newTreino]
  )}
    
  return (
    <div className="treinos-registrados">

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <section className="container-add-search">
        <div id="treino-submit-bar">
          <SubmitBar
            textPlaceholder={"treino"}
            action={addTreino}
          />
        </div>
        <div id="treino-search-bar">
            <SearchBar 
              textPlaceholder={"treino"} 
              action={setQueryName} 
              query={queryName}
            />
        </div>
      </section>

      <section className="main-treinos">
        {filteredTreino.map((name, index) => (
          <Item 
            key={index} 
            labelText={name} 
            IconComponent={FitnessCenterIcon}
          />
        ))}
      </section>

      <footer></footer>

    </div>
  )
}