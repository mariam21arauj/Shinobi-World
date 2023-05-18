import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ClanDetailPage(props){
    const {id} = useParams();
    const url = 'https://api.narutodb.xyz/clan/' + id;
    const [clanDetail, setclanDetail] = useState(null);
    const fetchClanDetail = async () =>{
        try {
            const response = await fetch(url);
            const clanDetailData = await response.json()
            setclanDetail(clanDetailData)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchClanDetail();
    }, []) 
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () => {
            return (
                <div>
                    <h2>{clanDetail.name}</h2>
                    <div>
                        <h3>{clanDetail.name} clan possess the following members: </h3>
                        <ul>
                            {clanDetail.characters.map(char => {
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
        } 
    return <section>{clanDetail ? loaded(): loading()}</section>
}