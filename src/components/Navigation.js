import { useState } from 'react';
import '../styles/Navigation.css'
import NavBtns from './NavBtns';

const Navigation = () => { 
    const [isChecked, setChecked] = useState(false); 

    const handleClick = () => {
        setChecked(!isChecked);
    }

    return (
        <div className='navContainer'>
            <nav className='navBar'>
                <NavBtns />
            </nav>
            <div className='navMobile'>
                <input type="checkbox" checked={isChecked} onClick={handleClick} />
                <span></span>
                <span></span>
                <span></span>
                <nav>
                    <NavBtns checked={handleClick}/>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
