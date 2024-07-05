import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Player.css';
// import axios from '../axios';

const baseUrl = "https://api.themoviedb.org/3";
// const API_KEY = 'e47cd6090103665b34c6c78617e434fc';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDdjZDYwOTAxMDM2NjViMzRjNmM3ODYxN2U0MzRmYyIsIm5iZiI6MTcyMDExNTEwMC4xOTY0MjMsInN1YiI6IjY2N2JlY2I2MGY1MjhlNmJiNzE4NGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKsR4F8Q4bnGrEP1s0D4nckb2B1XERL5rOkoN8VIXUo';

function Player() {
    const { id } = useParams();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${AUTH_TOKEN}`
            }
        };

        const fetchVideoData = async () => {
            try {
                const response = await fetch(`${baseUrl}/movie/${id}/videos?language=en-US`, options);
                const data = await response.json();
                console.log("API Response:", data); // Log the response for debugging
                if (data.results && data.results.length > 0) {
                    setApiData(data.results[0]);
                } else {
                    console.error("No video results found.");
                }
            } catch (error) {
                console.error("Error fetching the video details:", error);
            }
        };

        fetchVideoData();
    }, [id]);

    return (
        <div className="player">
            {apiData.key ? (
                <iframe
                    src={`https://www.youtube.com/embed/${apiData.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="trailer"
                ></iframe>
            ) : (
                <p>Loading...</p>
            )}
            <div className='player-info'>
                <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ""}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
}


export default Player;
