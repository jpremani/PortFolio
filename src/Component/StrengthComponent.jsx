import "../Styles/HomeComponent.css";
import java from '../Image/java.png';
import React from '../Image/React.png';
import Web_Design from '../Image/Web-Design.png';
export default function StrengthComponent() {
  return (
    <section className="StrengthComponent">
      <div className="Strength-Container">
        <h2 className="StrengthName">Strength</h2>
        <div className="LineComponent">
          <div className="circle"></div>
          <div className="Line"></div>
        </div>
        <p className="par2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit ratione molestias dolorum est repellat inventore, deserunt adipisci commodi ut in cumque nulla sit libero fuga veniam ab iure animi.</p>
        <div>
            <div className="Icon-container">
                <div className="Web_Design Service-Box">
                <img src={Web_Design} alt="Web-Design" ></img>
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolore reprehenderit nostrum magni repellat. Ea iste earum nostrum illo autem vero minus voluptate, eaque eligendi, rem dolor, libero pariatur eum?</p>
                </div>

                <div className="React Service-Box">
                <img src={React} alt="Web-Design" ></img>
                <h3>REACT-JS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero maxime nostrum itaque, nihil excepturi quos amet nulla quod ipsam voluptates at porro? Nesciunt totam quaerat ipsum blanditiis fugiat quisquam repellat.</p>
                </div>

                <div className="Java Service-Box">
                <img src={java} alt="Web-Design" ></img>
                <h3>JAVA</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sit aspernatur laborum architecto, expedita animi est, deserunt doloribus quis voluptatem consequuntur ratione ullam eveniet dignissimos hic fugiat nesciunt quas omnis?</p>
                </div>
            
            </div>
            
        </div>
      </div>
    </section>
  );
}
