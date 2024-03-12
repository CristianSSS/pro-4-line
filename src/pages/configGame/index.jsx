import GameConfigForm from "../../components/GameConfigForm";

export default function ConfigGame({handlerFormData}){
    return(
        <div className="container mx-auto">

        <div className="w-full h-screen flex justify-center items-center">
            <GameConfigForm handlerFormData={handlerFormData} />
        </div>

        
        </div>
    )
}