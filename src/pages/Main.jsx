import { Link } from "react-router-dom";

export default function Main(props){
    return(
        <section className="main-page">
            <h1>Welcome to Shinobi World</h1>
            <article>
                Welcome, User. This app is designed to help you navigate the Naruto World
                and learn more about their characters, the Clans, Villages, and Tailed Beasts.
            </article>
            <div>
            <Link to="/characters">Characters</Link>
            &nbsp; | &nbsp;
            <Link to="/villages">Villages</Link>
            &nbsp; | &nbsp;
            <Link to="/tailedbeasts">Tailed Beasts</Link>
            &nbsp; | &nbsp;
            <Link to="/clans">Clans</Link>
            </div>
        </section>
    )
}