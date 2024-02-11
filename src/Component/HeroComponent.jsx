import '../Styles/HomeComponent.css';
import MyPic from '../Image/MyPic.png';
export default function HeroComponent(){
    return(
        <div>
            <main>
                <section className='section-hero'>
                    <div className='hero'>
                    <div className='Hero-Container'>
                        <div className='Hero-Left-Side'>
                            <p className='par1'>this is me</p>
                            <h1>JAY PREMANI</h1>
                            <p className='par2'>A Full Stack Web Developer,youtuber and freelancer. A Full stack Developer and software developer and Freelancer</p>
                            <div className='button'>
                                <a href='#' className='btn btn-primary'>Hire Me</a>
                            </div>
                        </div>
                        <div className='Hero-Right-Side'>
                            <img src={MyPic} alt='Loading' className='Hero-Img'></img>

                        </div>

                    </div>
                    </div>
                </section>
            </main>
        </div>
    )
}