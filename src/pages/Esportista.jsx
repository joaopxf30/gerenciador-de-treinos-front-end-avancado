import { useMemo, useState } from "react"
import { useLocation } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Item from "../components/Item"
import banner from "../assets/banner.png"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export default function EsportistaPage() {
  const { state: esportista } = useLocation()
  const [treinosList, setTreinosList] = useState(esportista.treinos)
  const [queryTreino, setQueryTreino] = useState("")
  
  const filteredTreino = useMemo(() => {
    return treinosList.filter(treino => {
    return treino.descricao.toLowerCase().includes(queryTreino.toLowerCase())
  })}, [treinosList, queryTreino])

  const geraNovoTreino = (descricaoTreino) => {
    return ({
      "id": uuidv4(),
      "descricao": descricaoTreino,
      "data": null,
      "esporte": null,
      "duracao": null,
      "calorias": null,
      "bpm": null
    })
  }

  const addTreino = (newTreino) => {
    setTreinosList(currentList =>
      [...currentList, geraNovoTreino(newTreino)]
  )}
    
  return (
    <div className="treinos-registrados">

      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="container-add-search">
        <div className="container-search-bar">
          <SearchBar 
            textPlaceholder={"treino"} 
            action={setQueryTreino} 
            query={queryTreino}
          />
        </div>
        <div className="container-submit-bar">
          <SubmitBar
            textPlaceholder={"treino"}
            action={addTreino}
          />
        </div>
      </section>

      <section className="main-treinos">
        {filteredTreino.map((info, index) => (
          <Item 
            info={info}
            label={info.descricao} 
            IconComponent={FitnessCenterIcon}
            routeURL={`/esportista/${esportista.nome}/treino/${info.id}`}
            key={index} 
          />
        ))}
      </section>

    </div>
  )
}