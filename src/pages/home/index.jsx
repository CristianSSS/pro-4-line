import { Link } from "react-router-dom";
import Button from "../../components/Button";
export default function Home(){
    return(
       <div className="container mx-auto">

            <div className="w-full h-screen flex justify-center items-center">
                {/* <Button className="border-solid border-2 py-4 px-10" >Jugar</Button> */}

                <Link className="border-solid border-2 py-4 px-10" to={"/play"}>Jugar</Link>
            </div>

       </div>
    );
}