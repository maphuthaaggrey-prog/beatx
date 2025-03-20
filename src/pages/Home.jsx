import HomeComponent from "../components/HomeComponent";
import { Helmet } from "react-helmet";
const Home = () => {
    return ( 
        <>
        <Helmet>
            <title>Veteran Beatx</title>
            <meta name="url" content={window.location.href} />
       </Helmet>
            <HomeComponent />
        </>
     );
}
export default Home;