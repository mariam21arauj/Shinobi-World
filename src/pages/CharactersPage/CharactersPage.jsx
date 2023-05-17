import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

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
            <div className="container">
            {
                characters.map(char => {
                    return <CharacterCard characters={char} key={char.id}/>
                })
            }
        </div>
        </div>
    )
}