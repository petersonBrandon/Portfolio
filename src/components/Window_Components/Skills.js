import React from 'react';
import { useSelector } from 'react-redux';

import reactLogo from "../../images/react_logo.png";
import reduxLogo from '../../images/redux_logo.png';
import cssLogo from '../../images/css_logo.png';
import jsLogo from '../../images/js_logo.png';
import htmlLogo from '../../images/html_logo_alt.png';
import gitLogo from '../../images/git_logo.png';
import gitHubLogo from '../../images/GitHub_logo.png';
import cppLogo from '../../images/c++_logo.png';
import nodeLogo from '../../images/nodejs_logo.png';
import pythonLogo from '../../images/python_logo.png';
import expressLogo from '../../images/expressjs_logo.png';
import vscode_logo from '../../images/vscode_logo.png';

import LogoCard from './LogoCard';

const Skills = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window skills ${ activeWindow[2] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Skills</h1>
            <div className='skillsListContainer'>
                <LogoCard title="React" pageReference="https://reactjs.org/" imgSource={ reactLogo }/>
                <LogoCard title="Redux" pageReference="https://redux.js.org/" imgSource={ reduxLogo }/>
                <LogoCard title="Node.js" pageReference="https://nodejs.org/en/" imgSource={ nodeLogo }/>
                <LogoCard title="CSS" pageReference="https://www.w3schools.com/Css/" imgSource={ cssLogo }/>
                <LogoCard title="JavaScript" pageReference="https://www.javascript.com/" imgSource={ jsLogo }/>
                <LogoCard title="HTML" pageReference="https://www.w3schools.com/html/" imgSource={ htmlLogo }/>
                <LogoCard title="Git" pageReference="https://git-scm.com/" imgSource={ gitLogo }/>
                <LogoCard title="GitHub" pageReference="https://github.com/petersonBrandon" imgSource={ gitHubLogo }/>
                <LogoCard title="ExpressJs" pageReference="https://expressjs.com/" imgSource={ expressLogo }/>
                <LogoCard title="C++" pageReference="https://www.w3schools.com/cpp/default.asp" imgSource={ cppLogo }/>
                <LogoCard title="Python" pageReference="https://www.python.org/" imgSource={ pythonLogo }/>
                <LogoCard title="VSCode" pageReference="https://code.visualstudio.com" imgSource={ vscode_logo }/>
            </div>          
        </div>
    );
};

export default Skills;
