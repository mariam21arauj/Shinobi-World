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
        const debutExists = 'debut' in characterDetail
        // const appearsInExists = 'appearsIn' in characterDetail.debut;
        console.log(uniqueTraitExists)
        console.log()
        if(debutExists && uniqueTraitExists && jutsuExists){
            return (
                <div>
                    <h2>{characterDetail.name}</h2>
                    <div>
                        <h3>{`${characterDetail.name} appears in: ${characterDetail.debut.appearsIn}`}</h3>
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
        } else if(!debutExists){
                return (
                    <div>
                        <h2>{characterDetail.name}</h2>
                        <div>
                            <h3>{`${characterDetail.name} hello `}</h3>
                        </div>
                    </div>
                )
            }else if(debutExists && jutsuExists){
                return(
                    <div>
                <h2>{characterDetail.name}</h2>
                <div>
                    <h3>{`${characterDetail.name} hello `}</h3>
                </div>
            </div>
                )
            } else{
                if(debutExists){
                    return (
                        <div>
                            <h2>{characterDetail.name}</h2>
                            <div>
                                <h3>{`${characterDetail.name} hello `}</h3>
                            </div>
                        </div>
                    )
            }
        }
    }
    return <section>{characterDetail ? loaded(): loading()}</section>
}