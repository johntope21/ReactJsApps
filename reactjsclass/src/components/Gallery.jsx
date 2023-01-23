import "../App.css";
import { Link } from "react-router-dom";
import Header from "./assets/Header";


const Gallery = ()=>{
    return(
        <section id="gallery">
        <Header />

            <div className="Gal">
                <div className="gal1">
                    <img src="men1.jpg" alt="men1" />
                    <img src="men2.jpg" alt="men1" />
                 </div>
                    <div className="gal2">
                    <img src="man3.jpg" alt="men1" />
                    <img src="man4.jpg" alt="men1" />
                    <img src="man5.jpg" alt="men1" />
                    </div>
            </div>
        </section>
    )
}

export default Gallery;