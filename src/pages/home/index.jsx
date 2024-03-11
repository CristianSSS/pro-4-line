import Button from "../../components/Button";
export default function Home(){
    return(
       <div className="container mx-auto">

            <div className="w-full h-screen flex justify-center items-center">
                <Button addClassName={"hola"}>Jugar</Button>
            </div>

       </div>
    );
}