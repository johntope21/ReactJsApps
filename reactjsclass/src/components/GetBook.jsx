import "../App.css";
import { Link } from "react-router-dom";

const GetBook = ()=>{
    return(
        <section className ="books" >
            <div className="nav-bar">
                <Link to="/"><img src ="men logo.png" alt ="men logo"/></Link>
                <ul>
                    <li><Link to ="#">Podcast</Link></li>
                    <li><Link to ="#">Support/Donation</Link></li>
                    <li><Link to ="#">Gallery</Link></li>
                    <li><Link to ="#">Blogging</Link></li>
                    <li><Link to ="#">Get A Book</Link></li>
                    <li><Link to ="#">Facebook</Link></li>
                </ul>

                <button>=</button>
            </div>
                <div className="gen">
                    <img src ="books.jpg" alt="books" />
                <div className="lab">
                    <h2>ABOUT THE BOOK</h2>
                    <p>The war is at home and the battlefield is the lives of our youths, the society is confused and the family is bewildered, it is up to us to win this battle and prepare the next generation to live with the consciousness of future in their day to day living.
                         Freedom is responsibility is written as eyes opener from a burden heart to help the youths of this age to navigate successfully through the raging turbulent storm of the postmodern world. It is packed with practical and ageless principles that will guide the simple through the information superhighways of the 21st century and live impactful life. It is loaded with insight, foresight and wise counsel that will deliver anyone from the trap of deception and pseudo lifestyle of this age. It is the passion of the writer that the youths must adequately inform to be balanced in their daily decisions. Surely this book is a treasured partner in the journey to meaningful life. It is a four -chapter book, chapter one put freedom in practical and profitable balance stressing that every free time of life must be invested as every wasted time will create pain later in life.
                         Chapter two stressed the place of personal discipline in the global community where there is so much distraction. Personal discipline is a great asset in the postmodern world.
                         Chapter three speaks about the place of work and diligence as against the popular notion of more pleasure and lees work. He encourages the readers to know that every stage is a preparation for the next stage of life, stressing that tomorrow dividend is resting on today investments.
                         Chapter four encourage the readers to take responsibility for every action of their life. Life in totality is the sum of all the various actions of our life. It is an easy to read formant full of nuggets and practical experiences.</p>
                        <button>Grab Your Copy</button>
               </div>
            </div>
        </section>
    )
}

export default GetBook;