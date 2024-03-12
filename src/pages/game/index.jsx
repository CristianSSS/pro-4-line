import GameConfigForm from "../../components/GameConfigForm";

export default function GameScreen(){
    return(
        <div className="container mx-auto">

            <div className="w-full h-screen flex justify-center items-center">
                <GameConfigForm />
            </div>

            
        </div>
    )
}