import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    // Version 1 - Basic Fetch
    // fetch('https://pokeapi.co/api/v2/pokemon/807')
    // .then(response => {
    //         return response.json();
    //     }).then(response => {
    //             console.log(response);
    //         }).catch(err => {
    //                 console.log(err);
    //             })

    // Version 2 - useEffect
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    // Version 3 - Axios
    // useEffect(() => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    //         .then(response => console.log(response.data.results))
    // }, [])

    const [visible, setVisible] = useState(false);
    const toggleVis = () => {
        setVisible(
            !visible
        )
    }

    return (
        <div>
            <input type="button" className="btn btn-primary btn-md" onClick={toggleVis} value="Fetch Pokemon"/>
            {visible ? pokemon.map((poke,i) => <li key={i}>{poke.name}</li>) : null}
        </div>
    )
}

export default Pokemon;