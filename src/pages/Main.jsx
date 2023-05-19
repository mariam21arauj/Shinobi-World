import { Link } from "react-router-dom";
import "./Main.css"

export default function Main(props){
    return(
        <section className="main-page">
            <h1 id='title'>Welcome to Shinobi World</h1>
            <article className="tribute-info1">
                Welcome, User. This app is designed to help you navigate the Naruto World
                and learn more about their characters, the Clans, Villages, and Tailed Beasts.
            </article>
            <div id="img-div" className="relative">
                <div id="img-control" className="relative">
                <img src="https://i.postimg.cc/Wz0b7h39/naruto.png" alt="tribute_image" id="image"/>
                </div>
                <figcaption id="img-caption">..</figcaption>
            </div>
            <div className="urls">
            <div id="tribute-info" ><Link id="tribute-link" to="/characters">Characters</Link></div>
           
            <div id="tribute-info" ><Link id="tribute-link" to="/villages">Villages</Link></div>
            
            <div id="tribute-info"><Link id="tribute-link" to="/tailedbeasts">Tailed Beasts</Link></div>
          
            <div id="tribute-info" ><Link id="tribute-link" to="/clans">Clans</Link></div>
            </div>
        </section>
    )
}