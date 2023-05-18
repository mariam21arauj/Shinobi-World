import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetailPage(props){
    const {id} = useParams();
    const url = 'https://api.narutodb.xyz/character/' + id;
    const [characterDetail, setCharacterDetail] = useState(null);
    const fetchCharacterDetail = async () =>{
        try {
            const response = await fetch(url);
            const characterDetailData = await response.json()
            setCharacterDetail(characterDetailData)

        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchCharacterDetail();
    }, []) 
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () => {
        const uniqueTraitExists = 'uniqueTraits' in characterDetail;
        const jutsuExists = 'jutsu' in characterDetail;
        const debutExists = 'debut' in characterDetail;
        const debut = characterDetail.debut;
        const debutArray = [];
        const debutType = [];
        if(debutExists){
            for(const [key, value] of Object.entries(debut)){
                debutType.push(key); debutArray.push(value)
            }
        }
        if(debutExists && uniqueTraitExists && jutsuExists){
            return (
                <div>
                    <h2>{characterDetail.name}</h2>
                    <div>
                    <img referrerPolicy="no-referrer" alt={characterDetail.name} src={characterDetail.images}></img>
                        <h3>{characterDetail.name} debuted in:</h3>
                        <ul>{debutType.map((type , idx) => {
                            return(
                        <li>{type}: {debutArray[idx]}</li>
                            )
                        })}
                        </ul>
                        <h4>Possess the following jutsus</h4>
                        <ul>
                            {characterDetail.jutsu.map(jtsu => {
                                return(
                                    <li>{jtsu}</li>
                                )
                            })}
                        </ul>
                        <h4>Check out {characterDetail.name} unique traits:</h4>
                        <ul>
                            {characterDetail.uniqueTraits.map(trait => {
                                return(
                                    <li>{trait}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        } else if(!debutExists && !jutsuExists && !uniqueTraitExists){
                return (
                    <div>
                        <img referrerPolicy="no-referrer" alt={characterDetail.name} src={characterDetail.images}></img>
                        <h2>{characterDetail.name}</h2>
                        <div>
                            <h3>{`${characterDetail.name} does not have a debut, jutsu, or unique trait in record. `}</h3>
                        </div>
                    </div>
                )
            }else if(debutExists && jutsuExists){
                return(
                    <div>
                        <img referrerPolicy="no-referrer" alt={characterDetail.name} src={characterDetail.images}></img>
                        <h2>{characterDetail.name}</h2>
                        <div>
                            <h3>{characterDetail.name} debuted in:</h3>
                            <ul>{debutType.map((type , idx) => {
                            return(
                        <li>{type}: {debutArray[idx]}</li>
                            )
                        })}
                        </ul>
                            <h4>Possess the following jutsus</h4>
                        <ul>
                            {characterDetail.jutsu.map(jtsu => {
                                return(
                                    <li>{jtsu}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                )
            }else if(!debutExists && jutsuExists){
                return(
                    <div>
                        <img referrerPolicy="no-referrer" alt={characterDetail.name} src={characterDetail.images}></img>
                        <h2>{characterDetail.name}</h2>
                        <div>
                            <h3>{`${characterDetail.name} does not have a debut in record`}</h3>
                            <h4>Possess the following jutsus</h4>
                        <ul>
                            {characterDetail.jutsu.map(jtsu => {
                                return(
                                    <li>{jtsu}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                )
            } else{
                if(debutExists && !jutsuExists){
                    return (
                        <div>
                            <img referrerPolicy="no-referrer" alt={characterDetail.name} src={characterDetail.images}></img>
                            <h2>{characterDetail.name}</h2>
                            <div>
                                <h3>{characterDetail.name} debuted in:</h3>
                                <ul>{debutType.map((type , idx) => {
                                    return(
                                        <li>{type}: {debutArray[idx]}</li>
                                    )
                                })}
                                </ul>
                                <h4>{characterDetail.name} does not possess jutsus, or unique traits.</h4>
                            </div>
                        </div>
                    )
            }
        }
    }
    return <section>{characterDetail ? loaded(): loading()}</section>
}