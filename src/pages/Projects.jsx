import styled from '@emotion/styled'
import { useState } from 'react'

const ProjectsSection = styled.section`
    min-height: 100vh;
    padding: 2rem;
    scroll-margin-top: 4rem;
`

// Styled components for the project cards
const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
`

const ProjectCard = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    position: relative;
    

    &:hover {
        transform: translateY(-10px);
        
        .project-overlay {
            opacity: 1;
        }
    }
`

const ProjectImage = styled.div`
    height: 200px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`

const ProjectOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProjectContent = styled.div`
    padding: 1.5rem;
    ;
`

const SkillTag = styled.span`
    background: #f0f0f0; 
    color: #333333;     
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    margin: 0.25rem;
    display: inline-block;
    font-size: 0.875rem;
`

// Project data
const projects = [
    {
        id: 1,
        title: "Todo App",
        description: "A full-stack todo application with user authentication and task management",
        // image: "",
        skills: ["Fill in later"],
        // previewUrl: "", -- enter the website here
        // githubUrl: "" -- do I need this
    },
    {
        id: 2,
        title: "Star Wars DB",
        description: "Basic Star Wars database with a React router",
        image: "/img/starwarsSS.png",
        skills: ["Javascript", "CSS", "HTML", "React"],
        // previewUrl: "", -- enter the website here
        githubUrl: "https://github.com/austinnakamatsu/starWarsDB"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather information with detailed forecasts",
        image: "/img/weatherSS.png",
        skills: ["Javascript", "CSS", "HTML", "React"],
        // previewUrl: "", -- enter the website here
        githubUrl: "https://github.com/austinnakamatsu/weatherApp"
    },
    {
        id: 4,
        title: "Penny Store",
        description: "A basic store that uses redux and \"store\" elements to keep track of data",
        image: "/img/pennyStoreSS.png",
        skills: ["Javascript", "CSS", "HTML", "React"],
        // previewUrl: "", -- enter the website here
        githubUrl: "https://github.com/austinnakamatsu/pennyStore"
    },
    {
        id: 5,
        title: "Recipe Finder",
        description: "Search and save your favorite recipes with filtering options",
        // image: "",
        skills: ["Fill in later"],
        // previewUrl: "", -- enter the website here
    },
    {
        id: 6,
        title: "AI Fitness Coach",
        description: "Personal workout recommendations using AI",
        // image: "",
        skills: ["Fill in later"],
        // previewUrl: "", -- enter the website here
    },

    // More projects that I come up with
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        // You could navigate to a detailed view or open a modal
        window.open(project.previewUrl, '_blank');
    };

    return (
        <ProjectsSection id="projects">
            <h1>Projects</h1>
            <ProjectGrid>
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        onClick={() => handleProjectClick(project)}
                    >
                        {/* thank you chatgpt */}
                        <ProjectImage image={project.image} />
                        <ProjectContent>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div>
                                {project.skills.map(skill => (
                                    <SkillTag key={skill}>{skill}</SkillTag>
                                ))}
                            </div>
                        </ProjectContent>
                        <ProjectOverlay className="project-overlay">
                            <h3>{project.title}</h3>
                            <p>Click to view project</p>
                            <div>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                   onClick={e => e.stopPropagation()}>
                                    View Source
                                </a>
                            </div>
                        </ProjectOverlay>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    )
}