import Header from "./assets/Header";
import Method from "./assets/Methods";
import MissionVision from "./assets/MissionVision";
import Footer from "./assets/Footer";
import Board from "./assets/Board";
import Contact from "./assets/Contact";

const Home = ()=>{
    return(
        <section>
            <Header />
            <Method />
            <MissionVision />
            <Board />
            <Contact />
            <Footer />
        </section>
    )
}

export default Home;