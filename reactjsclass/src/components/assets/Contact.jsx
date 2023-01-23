import "../../App.css";

const Contact = ()=>{
    return(
        <section id="contact">
            <div className="last">
                    <div className="both">
                        <div className="game">
                            <form>
                            <div>
                            <input  type="text" placeholder="Name" />
                            </div>
                            <div>
                            <input  type="Email" placeholder="Email" />
                            </div>
                            <div>
                            <textarea cols="40" rows="10" placeholder="Message Here"/>
                            </div>
                            <div className="okin">
                            <button>Send Message</button>
                            </div>
                            </form>
                        </div>
                    
                
                <div className="fan">
                    <h1>Contact Us</h1>
                    <p>Covenant House,</p>
                    <p>15 Akinleye Martins Street off Airways</p>
                    <p>Akure Ondo State, Nigeria</p>
                    <p>Tel: +2348032278964</p>
                    <p>+2348034886315, +2348034729487</p>
                    <p>E-mail:menonmission22@gmail.com</p>
                </div>
                </div>
                </div>
            
            
        </section>
    )
}

export default Contact;