import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import './CharactersPage.css'

export default function CharactersPage(props){
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(' https://api.narutodb.xyz/character?page=1&limit=19')
            const characterData = await response.json();
            console.log(characterData.characters)
            setCharacters(characterData.characters)

        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchCharacters();
    }, [])
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () =>{
        return (
            <div className="page">
                <h1 id="title1">List of Characters in alphabetic order</h1>
                <div className="characters">
                    <div className="first">
                        <img src="http://pre12.deviantart.net/91c4/th/pre/i/2012/064/9/a/uzumaki_naruto_vs_uchiha_sasuke_by_xabracadabra-d4rsna5.jpg"/>
                    </div>
                    <div className="second">
                    {
                        characters.map(char => {
                            return (
                                <div id="tribute-info2"> <CharacterCard characters={char} key={char.id}/></div>
                        )
                        })
                    }
                    </div>
            </div>
            </div>
        )
    }
    return <section>{characters ? loaded(): loading()}</section> 
}