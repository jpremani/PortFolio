import '../Styles/HomeComponent.css';
import HeroComponent from './HeroComponent';
import NavBar from './NavBar';
import PortfolioComponent from './PortfolioComponent';
import StrengthComponent from './StrengthComponent';
export default function HomeComponent(){
    return(
        <div > 
            <NavBar/>
            <div className='HomeComponent'>
            <HeroComponent/>
            <PortfolioComponent/>
            <StrengthComponent/>
            </div>
        </div>
    )
}