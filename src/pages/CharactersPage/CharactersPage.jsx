import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CharactersPage(props){
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(' https://api.narutodb.xyz/character')
            const characterData = await response.json();
            console.log(characterData.characters)
            setCharacters(characterData.characters)

        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchCharacters();
    }, [])
    return (
        <div>
            {characters.map(char => {
                console.log(characters)
                const {name, id} = char
                return(
                    <Link to={`/character/${id}`} key={id}>
                        <h1>Character: {name}</h1>
                    </Link>
                )
            })}
        </div>
    )
}