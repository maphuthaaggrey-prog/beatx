import logo from '../assets/logo.png';
import React, { useState, useEffect, useRef } from 'react';
import { albums } from '../components/albums';
import { beats } from '../components/beats';
import { mixtapes } from '../components/mixtapes';
import { singles } from '../components/singles';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState({});


    const inputRef = useRef(null); 
    const location = useLocation();
  
  
    useEffect(() => {
        if (location.pathname === "/search" && inputRef.current) {
            inputRef.current.focus(); 
        }
    }, [location.pathname]); 
  

    // Handle search input change
    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        setQuery(searchQuery);

        if (searchQuery.trim() === '') {
            // If the search query is empty, clear the results
            setFilteredResults({});
            return;
        }

        // Filter results based on the query
        const results = [];

        // Search through albums
        albums.forEach(album => {
            if (album.name.toLowerCase().includes(searchQuery) || album.album.toLowerCase().includes(searchQuery)) {
                results.push({ type: 'Album', ...album });
            }
        });

        // Search through singles
        singles.forEach(song => {
            if (song.name.toLowerCase().includes(searchQuery) || song.single.toLowerCase().includes(searchQuery)) {
                results.push({ type: 'Song', ...song });
            }
        });

        // Search through beats
        beats.forEach(beat => {
            if (beat.name.toLowerCase().includes(searchQuery) || beat.beat.toLowerCase().includes(searchQuery)) {
                results.push({ type: 'Beat', ...beat });
            }
        });

        // Search through mixtapes
        mixtapes.forEach(mixtape => {
            if (mixtape.name.toLowerCase().includes(searchQuery) || mixtape.mixtape.toLowerCase().includes(searchQuery)) {
                results.push({ type: 'Mixtape', ...mixtape });
            }
        });

        // Categorize results
        const categorizedResults = {};
        results.forEach(result => {
            if (!categorizedResults[result.type]) {
                categorizedResults[result.type] = [];
            }
            categorizedResults[result.type].push(result);
        });

        setFilteredResults(categorizedResults);
    };

    const navigate = useNavigate();      
    const handleGoBack = (e) => {
      e.preventDefault();
      navigate(-1); 
    };

    return (
        <main id="song-wrap">
            <div className="navbar">
                <a href="#close" className="back" id="back-button" onClick={handleGoBack}>
                    <i className="fa-solid fa-arrow-left"></i>
                </a>
                <i>
                    <a href="./Index.html">
                        <img src={logo} id="search-icon" alt="logo" />
                    </a>
                </i>
            </div>

            <div className="search-container">
                <input
                    type="text"
                    id="searchInput"
                    style={{ width: '87.4%' }}
                    placeholder="Search for albums, singles, beats, or mixtapes..."
                    value={query}
                    ref={inputRef} 
                    onChange={handleSearch}
                />
                <div id="single-image-container">
                    {query.trim() === '' ? (
                        // Display nothing if the search query is empty
                        null
                    ) : Object.keys(filteredResults).length === 0 ? (
                        // Display "No results found" only if the user has entered a query
                        <p>No results found.</p>
                    ) : (
                        // Display categorized results
                        Object.keys(filteredResults).map(category => (
                            <div key={category} className="category">
                                <div>
                                     <h1>{category}</h1>
                                </div>
                                
                                <div>
                                    {filteredResults[category].map(result => (
                                        <div key={result.id} className="result-item">
                                            <Link
                                                to={
                                                    result.type === "Album"
                                                        ? `/album/${result.id}` 
                                                        : result.type === "Single"
                                                        ? `/song/${result.id}` 
                                                        : result.type === "Beat"
                                                        ? `/beat/${result.id}` 
                                                        : result.type === "Mixtape"
                                                        ? `/mixtape/${result.id}` 
                                                        : "/" 
                                                }
                                                key={result.id} 
                                                className="result-link" 
                                                aria-label={`View ${result.name}`} 
                                            >
                                                <img src={result.image} alt={`${result.type} ${result.id}`} />
                                                <p id="cover-name">{result.name}</p>
                                                <p id="album-name">
                                                    {result.album || result.single || result.beat || result.mixtape}
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
};

export default SearchPage;