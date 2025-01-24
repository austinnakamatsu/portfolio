import './App.css'
import {
    Link,
    NavLink,
    Outlet
} from 'react-router'

import styled from '@emotion/styled'

//css
const Body = styled.div`
    /* background-image: linear-gradient(45deg, lightgreen, lightblue); */
    margin: -0.5rem;
`

const NavBar = styled.nav`
    background-color: #333;
    padding: 1rem;
    
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        font-size: large;
    }
    
    ul > li {
        transition: 0.1s ease-in-out;
    }
    
    ul > li:hover {
        transform: scale(1.05);
        a {
            color: #aaa;
        }
    }
    
    ul > li > a {
        color: white;
        text-decoration: none;
    }
`

const HomeWrapper = styled.div`
    margin: 2rem;
`

export default function App(props){
  const { children } = props
  return (
      <Body>
        <NavBar>
            <ul>

                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/AboutMe">About Me</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li>Dark Mode</li>
            </ul>
        </NavBar>
        <main>{children || <Outlet />}</main>
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