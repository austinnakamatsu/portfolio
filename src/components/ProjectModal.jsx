import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    padding: 2rem;
    border-radius: 8px;
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`

export default function ProjectModal({ project, onClose }) {
    const theme = useTheme()

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <h2>{project.title}</h2>
                {/* Add more detailed project information here -- maybe date?*/}
            </ModalContent>
        </ModalOverlay>
    );
} 