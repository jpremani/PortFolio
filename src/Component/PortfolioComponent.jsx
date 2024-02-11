import "../Styles/HomeComponent.css";
import News from '../Image/NewsApplication.png';
import Weather from '../Image/Weather.png';
import Portfolio from '../Image/Portfolio.png';
import Tiktactoe from '../Image/TikTacToe.png';

export default function PortfolioComponent() {
    
  return (
    <div>
      <section className="section-Portfolio" id="portfolio-section">
        <div className="Portfolio-container">
          <h2 className="common-heading">Latest Work</h2>
          <div className="LineComponent">
            <div className="circle"></div>
            <div className="Line"></div>
          </div>
          <p className="par2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            deleniti illum facilis, nam voluptatem excepturi mollitia quam nobis
            placeat, laudantium quis accusamus ut non est libero voluptates,
            laborum labore earum.
          </p>
        </div>
        {/* <div className="Portfolio-Buttons">
            <div className="button btn1" data-btn-num='1' >Web-Site</div>
            <div className="button btn2" data-btn-num='2' >Application</div>
            <div className="button btn3" data-btn-num='3' >Game</div>
        </div> */}
        <div className="Portfolio-Grid">
            <div className="img-overlay p-btn--2" id='1'>
                <img src={Weather} alt="weather"></img>
                <div className="overlay">
                    <a href="www.google.com" target="_blank" className="common-heading">Weather Application</a>
                </div>
            </div>
            <div className="img-overlay p-btn--3" id='2'>
                <img src={Tiktactoe} alt="TicTakToe"></img>
                <div className="overlay">
                    <a href="www.google.com" target="_blank" className="common-heading">Tic Tac Toe</a>
                </div>

            </div>
            <div className="img-overlay p-btn--2" id='3'>
                <img src={News} alt="News Application"></img>
                <div className="overlay">
                    <a href="www.google.com" target="_blank" className="common-heading">News Application</a>
                </div>

            </div>
            <div className="img-overlay p-btn--1 p-btn--2" id='4'> 
                <img src={Portfolio} alt="Portfolio"></img>
                <div className="overlay">
                    <a href="www.google.com" target="_blank" className="common-heading">Portfolio</a>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}
