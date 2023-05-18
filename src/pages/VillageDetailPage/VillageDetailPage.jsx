import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VillageDetailPage(props){
    const {id} = useParams();
    const url = 'https://api.narutodb.xyz/village/' + id;
    const [villageDetail, setVillageDetail] = useState(null);
    const fetchVillageDetail = async () =>{
        try {
            const response = await fetch(url);
            const villageDetailData = await response.json()
            setVillageDetail(villageDetailData)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchVillageDetail();
    }, []) 
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () => {
        let charactersExists = 'characters' in villageDetail
        console.log(charactersExists)
        if(charactersExists){
            return (
                <div>
                    <h2>{villageDetail.name}</h2>
                    <div>
                        <h3>{villageDetail.name} Village possess the following members: </h3>
                        <ul>
                            {villageDetail.characters.map(char => {
                                return(
                                    <div>
                                        <li>{char.name}</li> 
                                        <img referrerPolicy="no-referrer" alt={char.name} src={char.images}></img>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        } else {
            // TODO: fix this conditional so that villages with an empty array of characters displays this message //
            if(charactersExists = []){
                return (
                    <div>
                        <h2>{villageDetail.name}</h2>
                        <div>
                            <h3>{villageDetail.name} does not have any characters in record </h3>    
                        </div>
                    </div>
                )
            }
        } 
    }
            
    return <section>{villageDetail ? loaded(): loading()}</section>
}