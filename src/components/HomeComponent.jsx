import { Link } from 'react-router-dom'
import SingleImageContainer from './singlesComponent'
import AlbumContainer from './AlbumContainer'
import BeatsContainer from './BeatsContainer'
import MixtapesContainer from './MixtapesContainer'
import { Helmet } from 'react-helmet'
const HomeComponent = () => {
    return (  
        <>    
        <Helmet>
            <title>Veteran Beatx</title>
        </Helmet>        
                <div className="hero">
                    <section>
                        <h1>Veteran Beatx</h1>
                        <div className="search">
                            <Link to="/search"><button>Search songs, albums, beats and mixtapes...</button></Link>
                        </div>
                    </section>
                </div>
                <main className="target-section">
                            <AlbumContainer />
                            <SingleImageContainer />
                            <BeatsContainer />
                            <MixtapesContainer /> 
                </main>
        </>
    );
}
export default HomeComponent;