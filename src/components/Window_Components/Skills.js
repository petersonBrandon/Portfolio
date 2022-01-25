import React from 'react';
import { useSelector } from 'react-redux';

import reactLogo from "../../images/react_logo.png";
import reduxLogo from '../../images/redux_logo.png';
import cssLogo from '../../images/css_logo.png';
import jsLogo from '../../images/js_logo.png';
import htmlLogo from '../../images/html_logo.png';
import gitLogo from '../../images/git_logo.png';
import gitHubLogo from '../../images/GitHub_logo.png';
import cppLogo from '../../images/c++_logo.png';
import nodeLogo from '../../images/nodejs_logo.png';
import pythonLogo from '../../images/python_logo.png';
import expressLogo from '../../images/expressjs_logo.png';
import vscode_logo from '../../images/vscode_logo.png';

import SkillCard from '../SkillCard';

const Skills = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window skills ${ activeWindow[2] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Skills</h1>
            <div className='skillsListContainer'>
                <SkillCard title="React" pageReference="https://reactjs.org/" imgSource={ reactLogo }/>
                <SkillCard title="Redux" pageReference="https://redux.js.org/" imgSource={ reduxLogo }/>
                <SkillCard title="Node.js" pageReference="https://nodejs.org/en/" imgSource={ nodeLogo }/>
                <SkillCard title="CSS" pageReference="https://www.w3schools.com/Css/" imgSource={ cssLogo }/>
                <SkillCard title="JavaScript" pageReference="https://www.javascript.com/" imgSource={ jsLogo }/>
                <SkillCard title="HTML" pageReference="https://www.w3schools.com/html/" imgSource={ htmlLogo }/>
                <SkillCard title="Git" pageReference="https://git-scm.com/" imgSource={ gitLogo }/>
                <SkillCard title="GitHub" pageReference="https://github.com/petersonBrandon" imgSource={ gitHubLogo }/>
                <SkillCard title="ExpressJs" pageReference="https://expressjs.com/" imgSource={ expressLogo }/>
                <SkillCard title="C++" pageReference="https://www.w3schools.com/cpp/default.asp" imgSource={ cppLogo }/>
                <SkillCard title="Python" pageReference="https://www.python.org/" imgSource={ pythonLogo }/>
                <SkillCard title="VSCode" pageReference="https://code.visualstudio.com" imgSource={ vscode_logo }/>
            </div>          
        </div>
    );
};

export default Skills;
