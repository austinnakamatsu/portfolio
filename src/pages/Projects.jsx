import styled from '@emotion/styled'

// Container for the section
const ProjectsSection = styled.section`
  /* backdrop-filter: blur(0.15rem); */
  /* max-width: 1200px; */
  /* margin: 0 auto; */
`

// Section Title
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color:  ${props => props.theme.text};
  /* margin-bottom: 4rem; */
  letter-spacing: -0.02em;
`

// Project Card (image always on right)
const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  margin-bottom: 0.5rem;
  padding: 2.5rem;
  border-radius: 28px;
  max-width: 80rem;
  margin: 0 auto;  
  color: ${props => props.theme.text};
  backdrop-filter: blur(0.25rem);
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.12);
    background: rgba(255, 255, 255, 0.12);

    img {
      transform: scale(1.03);
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`

// Image wrapper
const ProjectImage = styled.div`
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 24px;
    transition: transform 0.4s ease;
  }
`

// Info section
const ProjectInfo = styled.div`
  max-width: 500px;

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.text};
    letter-spacing: -0.01em;
  }

  p {
    margin: 1.25rem 0 2rem;
    line-height: 1.6;
    color: ${props => props.theme.text};
    font-size: 1.05rem;
    font-weight: 400;
  }

  a {
    display: inline-block;
    background: #0071e3;
    color: #fff;
    padding: 0.65rem 1.4rem;
    border-radius: 12px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: #005bb5;
      transform: translateY(-2px);
    }
  }
`

// Skill tags
const SkillTag = styled.span`
  background: #f5f5f7;
  color: #000;
  padding: 0.45rem 1rem;
  border-radius: 20px;
  margin: 0.25rem;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
`

const projects = [
  {
    id: 1,
    title: "Star Wars DB",
    description: "Modern Star Wars App built with React that lets users explore characters, planets, and films from a simplified local version of the Star Wars API. With smooth navigation powered by React Router, the app provides an easy way to browse different categories in an interactive and approachable interface.",
    image: "/starWars.png",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    githubUrl: "https://github.com/austinnakamatsu/starWarsDB",
    liveUrl: "https://austinnakamatsu.github.io/starWarsDB/"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Modern Weather App that lets users quickly check the weather for any city. Supports city search with autocomplete, detecting your current location, or choosing a spot on a map. The app shows current conditions, a 3-hour forecast, and a 5-day outlook. It also includes timezone support, recent searches, and a clean modern interface.",
    image: "weatherApp.png",
    skills: ["JavaScript", "React", "HTML", "CSS"],
    githubUrl: "https://github.com/austinnakamatsu/weatherApp",
    liveUrl: "https://austinnakamatsu.github.io/weatherApp/"
  },
  {
    id: 3,
    title: "Candy Store",
    description: "A lightweight store app that allows users to add items to their cart and simulate checkout. Built with React and Redux, it demonstrates scalable state management and highlights how global state can simplify data flow in e-commerce-style applications.",
    image: "pennyStore2.png",
    skills: ["JavaScript", "React", "Redux", "CSS"],
    githubUrl: "https://github.com/austinnakamatsu/pennyStore",
    liveUrl: "https://austinnakamatsu.github.io/pennyStore/"
  }
]


export default function Projects() {
  const handleClick = (url) => {
    if (url) window.open(url, "_blank")
  }

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Projects</SectionTitle>
      {projects.map(project => (
        <ProjectCard key={project.id} onClick={() => handleClick(project.liveUrl)}>
          <ProjectInfo>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.skills.map(skill => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            {project.githubUrl && (
              <div style={{ marginTop: "2rem" }}>
                <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // prevents card click
                >
                View Source Code
                </a>
            </div>

            )}
          </ProjectInfo>
          <ProjectImage>
            <img src={project.image} alt={project.title} />
          </ProjectImage>
        </ProjectCard>
      ))}
    </ProjectsSection>
  )
}
