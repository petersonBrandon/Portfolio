import { useState } from 'react';
import '../styles/Navigation.css'
import NavBtns from './NavBtns';

const Navigation = () => { 
    const [isChecked, setChecked] = useState(false); 

    const handleCheck = () => {
        setChecked(!isChecked);
    }

    const handleNonMobile = () => {
        setChecked(false);
    }

    return (
        <div className='navContainer'>
            <nav className='navBar'>
                <NavBtns handleCheck={handleNonMobile}/>
            </nav>
            <div className='navMobile'>
                <input type="checkbox" checked={isChecked} onClick={handleCheck} />
                <span></span>
                <span></span>
                <span></span>
                <nav>
                    <NavBtns handleCheck={handleCheck}/>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
