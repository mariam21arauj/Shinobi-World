import { useEffect, useState } from "react";
import TailedBeastCard from "../../components/TailedBeastCard/TailedBeastCard";

export default function TailedBeastsPage(props){
    const [tailedBeasts, setTailedBeasts] = useState([]);

    const fetchTailedBeasts = async () => {
        try {
            const response = await fetch(' https://api.narutodb.xyz/tailed-beast')
            const tailedBeastsData = await response.json();
            console.log(tailedBeastsData.tailedBeasts)
            setTailedBeasts(tailedBeastsData.tailedBeasts)

        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchTailedBeasts();
    }, [])
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () => {
        return (
            <div>
                <div className="container">
                {
                    tailedBeasts.map(beast => {
                        return <TailedBeastCard tailedBeasts={beast} key={beast.name}/>
                    })
                }
            </div>
            </div>
        )
    }
    return <section>{tailedBeasts ? loaded(): loading()}</section>
}