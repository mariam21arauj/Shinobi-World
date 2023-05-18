import { useEffect, useState } from "react";
import VillageCard from "../../components/VillageCard/VillageCard";

export default function VillagesPage(props){
    const [villages, setVillages] = useState([]);

    const fetchVillages = async () => {
        try {
            const response = await fetch(' https://api.narutodb.xyz/village')
            const villageData = await response.json();
            console.log(villageData.villages)
            setVillages(villageData.villages)

        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchVillages();
    }, [])
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded =() =>{
        return (
            <div>
                <h1>List of Villages</h1>
                <div className="container">
                {
                    villages.map(vill => {
                        return <VillageCard villages={vill} key={vill.name}/>
                    })
                }
            </div>
            </div>
        )
    }
    return <section>{villages ? loaded(): loading()}</section>
}