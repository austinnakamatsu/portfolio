import styled from '@emotion/styled'

const AboutContainer = styled.section`
    scroll-margin-top: 6rem;
    max-width: 85rem;
    margin: 0 auto;
    line-height: 1.6;
`

const ResumeLink = styled.a`
  display: inline-block;
  margin: 1.5rem 0;
  padding: 0.75rem 1.25rem;
  background: #0077b6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #023e8a;
    transform: translateY(-2px);
  }
`

const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: 85rem;
  margin: 0 auto; 

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: center;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: transform 0.3s;
  }

  & > *:hover {
    transform: scale(1.05);
  }

  video, img {
    border-radius: 12px;
    height: auto;
    max-height: 500px;
    width: auto;
  }
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
  max-width: 60rem;
  margin: 0 auto; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* stack on mobile */
  }
`

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 450px;
  line-height: 1.6;
  padding: 1.5rem 2rem;
  backdrop-filter: blur(0.15rem);

  h4 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.background === '#ffffff' 
        ? '#3aa3dc'
        :  '#3cbbff' 
    };
  }

  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.text};
  }
`

const AboutTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color:  ${props => props.theme.text};
  letter-spacing: -0.02em;
`

export default function AboutMe() {
  return (
    <AboutContainer id="aboutme">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        {/* Left Column */}
        <Card>
          <h4>Who I Am</h4>
          <p>
            Hi, I’m <strong>Austin Nakamatsu</strong>, a recent graduate of 
            <strong> Oregon State University</strong> with a Bachelor’s in 
            <strong> Computer Science (Cum Laude)</strong>. 
            I have <strong>one year of industry experience</strong>, 
            including <strong>six months focused on full-stack development</strong>. 
            I enjoy building full-stack applications that make a real-world impact and help make lives easier.
          </p>
        </Card>

        <Card>
          <h4>What I Do</h4>
          <p>
            I specialize in <strong>full-stack development</strong>, with experience overseeing the end-to-end development of 
            numerous <strong> web applications</strong>. I've worked with numerous technologies such as 
            <strong> React, Blazor, Azure DevOps, .NET, SQL, C#, JavaScript, and Git</strong>, and I’ve built everything from RESTful APIs 
            to dynamic front-end interfaces and optimized database systems.
          </p>
        </Card>

        {/* Right Column */}
        <Card>
          <h4>What Drives Me</h4>
            <p>
                I’m passionate about developing <strong>innovative solutions</strong> that make a meaningful impact. 
                Whether it’s building new applications, modernizing legacy systems, or designing impactful features, 
                my goal is to create technology that <strong>benefits people</strong> by simplifying processes 
                and making everyday life easier.
            </p>
        </Card>

        <Card>
          <h4>Currently</h4>
            <p>
                I’m currently seeking opportunities for a <strong>Full-Stack Developer</strong> role where I can make a real-world impact 
                while continuing to grow both technically and professionally.
            </p>
        </Card>
      </AboutContent>


      <ResumeLink 
        href="resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View My Resume
      </ResumeLink>

      <article>
        <h3>Swipe through some snapshots of my life off the screen!</h3>

        <GalleryContainer>
          <img src="Hanauma.jpg" alt="Pic of Hanauma Bay" />
          <video src="Snow.mp4" autoPlay muted loop />
          <video src="Sunset.mp4" autoPlay muted loop />
          <img src="Pikes.jpg" alt="Pic of Pikes Peak" />
        </GalleryContainer>
      </article>
    </AboutContainer>
  )
}
