import {useLoaderData} from "react-router-dom";
import Character from "../components/home/Character";
import './styles/home.css'
import '../components/searchbar/main.css'

export default function Home() {
    const {characters} = useLoaderData();
    const data = characters.results;

    return (
        <>
            <section id="gallery" className="gallery">
                <div className="container-fluid">
                    <div className="row gy-4 justify-content-center">
                        {
                        data.map(character => (
                            <Character character={character}
                                key={
                                    character.id
                                }/>
                        ))
                    } </div>
                </div>
            </section>
        </>
    );
}
