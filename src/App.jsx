import './App.css'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import { useRouteError } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Background } from './components/Background'

//Dark mode css
const lightTheme = {
    background: '#ffffff',
    text: '#333333',
    nav: {
      background: '#333',
      text: 'white'
    }
}
const darkTheme = {
    background: '#1a1a1a',
    text: '#ffffff',
    nav: {
        background: '#222',
        text: 'white'
    }
}

// Page css
const Body = styled.div`
    margin: 0;
    padding: 0;
`
const NavBar = styled.nav`
    background-color: #333;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
    left: 0; 
    right: 0; 
    display: flex;
    justify-content: space-between; /* 👈 name on left, links on right */
    align-items: center;

    overflow: visible;
    
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        font-size: large;
        margin: 0;
        padding: 0;
        align-items: center;
    }
    
    ul > li {
        transition: 0.1s ease-in-out;
    }
    
    ul > li:hover {
        transform: scale(1.05);
    }
    img {
        height: 2rem;
        cursor: pointer;
    }
`
const NavLink = styled.a`
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding-bottom: 2px;
    border-bottom: 2px solid ${props => props.isActive ? 'white' : 'transparent'};
    transition: border-bottom-color 0.2s, color 0.1s;

    &:hover {
        color: #aaa;
    }
`
const Section = styled.section`
    padding: 2rem;
    scroll-margin-top: 4rem;
    /* background-color: ${props => props.theme.background}; */
    background-color: transparent;
    color: ${props => props.theme.text};
`

const HomeSection = styled.section`
    /* padding: 2rem; */
    scroll-margin-top: 4rem;
    /* background-color: ${props => props.theme.background}; */
    background-color: transparent;
    color: ${props => props.theme.text};
`

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.6); /* translucent so background shows */
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: 2rem;
  backdrop-filter: blur(6px); /* soft blur like your cards */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => {
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Background themeMode={isDarkMode ? 'dark' : 'light'} />
            <Body>
                <NavBar>
                    <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
                    Austin Nakamatsu
                    </div>
                    <ul>
                        <li>
                            <NavLink 
                                onClick={(e) => scrollToSection(e, 'home')}
                                isActive={activeSection === 'home'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                onClick={(e) => scrollToSection(e, 'about')}
                                isActive={activeSection === 'about'}>
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                onClick={(e) => scrollToSection(e, 'projects')}
                                isActive={activeSection === 'projects'}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                onClick={(e) => scrollToSection(e, 'contact')}
                                isActive={activeSection === 'contact'}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleDarkMode}>
                                {isDarkMode ? '🌙 Dark' : '☀️ Light'}
                            </NavLink>
                        </li>
                        <li>
                            <a href="https://github.com/austinnakamatsu"
                                target="_blank" 
                                rel="noopener noreferrer">
                                <FaGithub size={24} color="white" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/austinnakamatsu/"
                                target="_blank" 
                                rel="noopener noreferrer">
                                <FaLinkedin size={24} color="white" />
                            </a>
                        </li>   
                    </ul>
                </NavBar>
                <main>
                    <HomeSection id="home">
                        <Home/>
                    </HomeSection>  
                        <Section id="about">
                            <AboutMe/>
                        </Section>                    
                        <Section id="projects">
                            <Projects/>
                        </Section>                    
                        <Section id="contact">
                            <Contact/>
                        </Section>   
                </main>
                <Footer>
                    © {new Date().getFullYear()} Austin Nakamatsu. All rights reserved.
                </Footer>
            </Body>
        </ThemeProvider>
    )
}