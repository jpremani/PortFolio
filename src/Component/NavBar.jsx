import '../Styles/HomeComponent.css'
export default function NavBar(){
    return(
        <div className='NavBar-Header'>
            <p className='Nav-Bar-logo'>Jay Premani</p>
            <nav className='Nav-Bar-navbar'>
                <ul className='Nav-Bar-navlist'>
                    <li><a href='/www.google.com' target='_blank'>Home</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li></li>
                    
                </ul>

            </nav>


            
        </div>
    )
}