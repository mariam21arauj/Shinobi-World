import { useState, useEffect } from "react";
import ClanCard from "../../components/ClanCard/ClanCard";
export default function ClansPage(props){
    const [clans, setclans] = useState([]);

    const fetchClans = async () => {
        try {
            const response = await fetch('https://api.narutodb.xyz/clan?page=1&limit=100')
            const clansData = await response.json();
            setclans(clansData.clans)

        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchClans();
    }, [])
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () => {
        return (
            <div>
                <div className="container">
                {
                    clans.map(cl => {
                        return <ClanCard clans={cl} key={cl.name}/>
                    })
                }
            </div>
            </div>
        )
    }
    return <section>{clans ? loaded(): loading()}</section>
    
}