import {Outlet} from "react-router-dom";
import SearchBar from "../components/searchbar/SearchBar";

export default function AppLayout() {
    return (
        <>
            <section className="wrapper">
                <div>
                    <nav className="container">
                        <SearchBar/>
                    </nav>
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </section>
        </>
    );
}
