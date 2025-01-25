import styled from '@emotion/styled'

const ProjectsSection = styled.section`
    min-height: 100vh;
    padding: 2rem;
    scroll-margin-top: 4rem;
`

export default function Projects() {
    return (
        <ProjectsSection id="projects">
            <h1>Projects</h1>
            <ul>
                <li>Make cards for each project -- make them clickable (navlinks)</li>
                <li>Have a preview</li>
                <li>Skills for each project</li>
                <li>Hover shows title/something??</li>
                <li>Project Ideas:
                    Todo
                    Weather
                    Recipe Finder
                    App that uses AI (motivation app or gym app or maybe a chatbot)
                    App that uses a database (could probably store data from Contact page)
                </li>
            </ul>
        </ProjectsSection>
    )
}