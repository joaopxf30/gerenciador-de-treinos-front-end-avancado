import { useState, useRef } from "react";
import Button from "./Button";
import EditIcon from '@mui/icons-material/Edit';

export default function Information({ valorInicial }) {
  const [valor, setValor] = useState(valorInicial)
  const inputReference = useRef();

  const trocaInput = (e) => {
    setValor(e.target.value)
  }
  
  return (
    <div className="information-container">
      <input className="information"
        ref={inputReference}
        onChange={trocaInput}
        type="text"
        value={valor}
      />
      <Button IconComponent={EditIcon} color="white"/>
    </div>
  )

}