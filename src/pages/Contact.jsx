import styled from '@emotion/styled'

const ContactSection = styled.section`
    min-height: 100vh;
    padding: 2rem;
    scroll-margin-top: 4rem;
`

export default function Contact() {
    return (
        <ContactSection id="contact">
            <h1>Contact</h1>
            <ul>
                <li>
                    Provide my info ??
                </li>
                <li>Make a form for employers to answer?</li>
            </ul>
        </ContactSection>
    )
}