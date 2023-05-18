import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TailedBeastDetailPage(props){
    const {id} = useParams();
    const url = 'https://api.narutodb.xyz/character/' + id;
    const [tailedBeast, setTailedBeast] = useState(null);
    const fetchTailedBeast = async () =>{
        try {
            const response = await fetch(url);
            const tailedBeastData = await response.json()
            setTailedBeast(tailedBeastData)

        } catch (error) {
            
        }
    }
    console.log(tailedBeast)
    useEffect(() => {
        fetchTailedBeast();
    }, []) 
    const loading = () => {
        return <h1>🔥 Chakra loading 🔥</h1>
    }
    const loaded = () => {
        const uniqueTraitExists = 'uniqueTraits' in tailedBeast;
        const jutsuExists = 'jutsu' in tailedBeast;
        const debutExists = 'debut' in tailedBeast;
        const debut = tailedBeast.debut;
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
                    <h2>{tailedBeast.name}</h2>
                    <div>
                    <img referrerPolicy="no-referrer" alt={tailedBeast.name} src={tailedBeast.images}></img>
                        <h3>{tailedBeast.name} debuted in:</h3>
                        <ul>{debutType.map((type , idx) => {
                            return(
                        <li>{type}: {debutArray[idx]}</li>
                            )
                        })}
                        </ul>
                        <h4>Possess the following jutsus</h4>
                        <ul>
                            {tailedBeast.jutsu.map(jtsu => {
                                return(
                                    <li>{jtsu}</li>
                                )
                            })}
                        </ul>
                        <h4>Check out {tailedBeast.name} unique traits:</h4>
                        <ul>
                            {tailedBeast.uniqueTraits.map(trait => {
                                return(
                                    <li>{trait}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <h4>Check out {tailedBeast.name} jinchurikis:</h4>
                        <ul>
                            {tailedBeast.personal.jinchūriki.map(jin => {
                                return(
                                    <li>{jin}</li>
                                )
                            })}
                        </ul>
                </div>
            )
        } else if(!debutExists && !jutsuExists && !uniqueTraitExists){
                return (
                    <div>
                        <img referrerPolicy="no-referrer" alt={tailedBeast.name} src={tailedBeast.images}></img>
                        <h2>{tailedBeast.name}</h2>
                        <div>
                            <h3>{`${tailedBeast.name} does not have a debut, jutsu, or unique trait in record. `}</h3>
                        </div>
                        <h4>Check out {tailedBeast.name} jinchurikis:</h4>
                        <ul>
                            {tailedBeast.personal.jinchūriki.map(jin => {
                                return(
                                    <li>{jin}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }else if(debutExists && jutsuExists){
                return(
                    <div>
                        <img referrerPolicy="no-referrer" alt={tailedBeast.name} src={tailedBeast.images}></img>
                        <h2>{tailedBeast.name}</h2>
                        <div>
                            <h3>{tailedBeast.name} debuted in:</h3>
                            <ul>{debutType.map((type , idx) => {
                            return(
                        <li>{type}: {debutArray[idx]}</li>
                            )
                        })}
                        </ul>
                            <h4>Possess the following jutsus</h4>
                        <ul>
                            {tailedBeast.jutsu.map(jtsu => {
                                return(
                                    <li>{jtsu}</li>
                                )
                            })}
                        </ul>
                        <h4>Check out {tailedBeast.name} jinchurikis:</h4>
                        <ul>
                            {tailedBeast.personal.jinchūriki.map(jin => {
                                return(
                                    <li>{jin}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                )
            }else if(!debutExists && jutsuExists){
                return(
                    <div>
                        <img referrerPolicy="no-referrer" alt={tailedBeast.name} src={tailedBeast.images}></img>
                        <h2>{tailedBeast.name}</h2>
                        <div>
                            <h3>{`${tailedBeast.name} does not have a debut in record`}</h3>
                            <h4>Possess the following jutsus</h4>
                        <ul>
                            {tailedBeast.jutsu.map(jtsu => {
                                return(
                                    <li>{jtsu}</li>
                                )
                            })}
                        </ul>
                        <h4>Check out {tailedBeast.name} jinchurikis:</h4>
                        <ul>
                            {tailedBeast.personal.jinchūriki.map(jin => {
                                return(
                                    <li>{jin}</li>
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
                            <img referrerPolicy="no-referrer" alt={tailedBeast.name} src={tailedBeast.images}></img>
                            <h2>{tailedBeast.name}</h2>
                            <div>
                                <h3>{tailedBeast.name} debuted in:</h3>
                                <ul>{debutType.map((type , idx) => {
                                    return(
                                        <li>{type}: {debutArray[idx]}</li>
                                    )
                                })}
                                </ul>
                                <h4>{tailedBeast.name} does not possess jutsus, or unique traits.</h4>
                                <h4>Check out {tailedBeast.name} jinchurikis:</h4>
                        <ul>
                            {tailedBeast.personal.jinchūriki.map(jin => {
                                return(
                                    <li>{jin}</li>
                                )
                            })}
                        </ul>
                            </div>
                        </div>
                    )
            }
        }
    }
    return <section>{tailedBeast ? loaded(): loading()}</section>
}