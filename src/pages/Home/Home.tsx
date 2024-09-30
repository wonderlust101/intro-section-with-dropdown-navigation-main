import Header from "../../components/Header";
import Hero from "./Hero";

import "./Home.scss";

export default function Home() {
    return (
        <div className="home">
            <Header/>

            <main className="grid-bleed">
                <Hero/>
            </main>
        </div>
    );
}