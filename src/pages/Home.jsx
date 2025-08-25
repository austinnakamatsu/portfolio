import styled from '@emotion/styled'
import { FaChevronDown } from "react-icons/fa";

const HomeSection = styled.section`
  /* min-height: 100vh; */
  padding: 4rem 2rem;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  text-align: center;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap; /* wrap for smaller screens */
  margin-bottom: 3rem;

  img {
    border-radius: 50%;
    border: 4px solid #555;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`

const TextContent = styled.div`
  max-width: 600px;
  text-align: left;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  backdrop-filter: blur(0.15rem);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${props => props.theme.background === '#ffffff' 
        ? '#5e5d5d'
        :  '#aaa' 
    };
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.6;
    font-size: 1.1rem;
  }
`

const SkillsWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  justify-content: center;

  li {
    position: relative;
    background-color: ${props => props.theme.background};
    padding: 1rem;
    border-radius: 12px;
    transition: transform 0.2s, background 0.2s;
    cursor: pointer;
  }

  li:hover {
    transform: scale(1.1);
    background: #444;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 50px;
  }

  li::after {
    content: attr(data-label);
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }

  li:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(4px);
  }
`


const CallToAction = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background: #007acc;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.2s, transform 0.2s;
  }

  a:hover {
    background: #005f99;
    transform: translateY(-2px);
  }
`

const ScrollIndicator = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(8px);
    }
    60% {
      transform: translateY(4px);
    }
  }

  span {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    color: ${props => props.theme.background === '#ffffff' 
        ? '#5e5d5d'
        :  '#aaa' 
    };
  }
`;

export default function Home() {
  return (
    <HomeSection>
      <ContentWrapper>
        <img src="GradPic.jpg" alt="Austin Nakamatsu" />
        <TextContent>
          <h1>Austin Nakamatsu</h1>
          <h2>Full-Stack Developer • Software Engineer</h2>
          <p>
            I’m a recent Computer Science graduate from Oregon State University with a strong passion for
            developing full-stack web and mobile applications. I enjoy turning ideas into impactful,
            user-friendly solutions.
          </p>
        </TextContent>
      </ContentWrapper>

      <SkillsWrapper>
       <SkillsList>
            <li data-label="Blazor"><img src="icons/blazor.svg" alt="Blazor" /></li>
            <li data-label="C#"><img src="icons/c--4.svg" alt="C#" /></li>
            <li data-label="C++"><img src="icons/c.svg" alt="C++" /></li>
            <li data-label=".NET"><img src="icons/dotnet-icon.svg" alt=".NET" /></li>
            <li data-label="Git"><img src="icons/git-icon.svg" alt="Git" /></li>
            <li data-label="JavaScript"><img src="icons/javascript-svgrepo-com.svg" alt="JavaScript" /></li>
            <li data-label="Microsoft SQL Server"><img src="icons/microsoft-sql-server-1.svg" alt="SQL Server" /></li>
            <li data-label="Python"><img src="icons/python-svgrepo-com.svg" alt="Python" /></li>
            <li data-label="React"><img src="icons/react-svgrepo-com.svg" alt="React" /></li>
        </SkillsList>
      </SkillsWrapper>

      <CallToAction>
        <ScrollIndicator onClick={() => document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" })}>
            <FaChevronDown />
            <span>Scroll Down</span>
        </ScrollIndicator>
      </CallToAction>
    </HomeSection>
  )
}
