import MusicComponent from "../components/MusicComponent";
import { Helmet } from "react-helmet";
const Music = () => {
    return ( 
        <>
                <Helmet>
                    <title>Music</title>
                </Helmet>
               <MusicComponent />        
        </>

     );
}
 
export default Music;