import { useState } from 'react';
import '../styles/Navigation.css'
import NavBtns from './NavBtns';

const Navigation = () => { 
    const [isChecked, setChecked] = useState(false); 

    const handleCheck = () => {
        setChecked(!isChecked);
        console.log(isChecked);
    }

    const handleNonMobile = () => {
        setChecked(false);
    }

    return (
        <div className='navContainer'>
            <NavBtns className="navBar" handleCheck={handleNonMobile}/>
            <div className='navMobile'>
                <input type="checkbox" checked={isChecked} onClick={handleCheck} />
                <div className='hamburgerContainer'>
                    <div className={`hamburger  ${isChecked ? ' open' : ''}`} onClick={handleCheck}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <NavBtns handleCheck={handleCheck}/>
            </div>
        </div>
    );
};

export default Navigation;
