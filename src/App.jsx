import './App.css'
import styled from '@emotion/styled'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import {
    useRouteError
} from 'react-router-dom'
import { useEffect, useState } from 'react'

const Body = styled.div`
    margin: -0.5rem;
`

const NavBar = styled.nav`
    background-color: #333;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        font-size: large;
        margin: 0;
        padding: 0;
    }
    
    ul > li {
        transition: 0.1s ease-in-out;
    }
    
    ul > li:hover {
        transform: scale(1.05);
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
    min-height: 100vh;
    padding: 2rem;
    scroll-margin-top: 4rem;
`

export default function App() {
    const [activeSection, setActiveSection] = useState('home');

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
        <Body>
            <NavBar>
                <ul>
                    <li>
                        <NavLink 
                            onClick={(e) => scrollToSection(e, 'home')}
                            isActive={activeSection === 'home'}
                        >
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
                    <li>Dark Mode</li>
                </ul>
            </NavBar>
            <main>
                <Section id="home">
                    <Home/>
                </Section>
                
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
        </Body>
    )
}

export function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </>
    )
}