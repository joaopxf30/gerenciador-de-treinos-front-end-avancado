import { useMemo, useState } from "react"
import Item from "../components/Item"
import banner from "../assets/banner.png"
import atletasData from "../atletas.json"
import SearchBar from "../components/SearchBar"
import SubmitBar from "../components/SubmitBar"
import { extractName } from "../utils/functions"
import PersonIcon from "@mui/icons-material/Person";

export default function atletasPage() {
  const [atletasList, setAtletasList] = useState(extractName(atletasData.atletas))
  const [queryName, setQueryName] = useState("")
  
  const filteredAthletesName = useMemo(() => {
    return atletasList.filter(item => {
    return item.toLowerCase().includes(queryName.toLowerCase())
  })}, [atletasList, queryName])

  const addAthleteName = (newAthlete) => {
    setAtletasList(currentList =>
      [...currentList, newAthlete]
  )}

  return (
    <div className="esportistas-registrados">

      <section className="banner">
        <img src={banner} alt="Banner"/>
      </section>

      <section className="container-add-search">
        <div id="home-search-bar">
          <SearchBar 
            textPlaceholder={"esportista"} 
            action={setQueryName} 
            query={queryName}
          />
        </div>
        <div id="home-submit-bar">
          <SubmitBar 
            textPlaceholder={"esportista"} 
            action={addAthleteName}
          />
        </div>
      </section>

      <section className="main-athletes">
        {filteredAthletesName.map((name, index) => (
          <Item 
            key={index} 
            labelText={name} 
            IconComponent={PersonIcon}
          />
        ))}
      </section>
      <footer></footer>
    </div>
  )
}