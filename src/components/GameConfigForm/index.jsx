import Inpunt from "../Input";
import { Link } from "react-router-dom";

export default function GameConfigForm({handlerFormData}){

  const getDataInput=()=>{

    handlerFormData({
      name:
    });
  }
    return(
      <form action="">
        <Inpunt className="my-2" label="Nombre" />
        <Inpunt className="my-2" label="Sala" />
        <Inpunt className="my-2" label="---" />
        
        <Link onClick={getDataInput} to="/game">Empezar partida</Link>

      </form>
    )
}