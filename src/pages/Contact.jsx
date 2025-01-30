import styled from '@emotion/styled'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

const ContactSection = styled.section`
    min-height: 100vh;
    padding: 2rem;
    scroll-margin-top: 4rem;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
`

const FormContainer = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: ${props => props.theme.background === '#ffffff' 
        ? 'white' 
        : '#2d2d2d'};
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-weight: 500;
        color: ${props => props.theme.text};
    }

    input, textarea {
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        background: ${props => props.theme.background === '#ffffff' 
            ? 'white' 
            : '#1a1a1a'};
        color: ${props => props.theme.text};
        
        &:focus {
            outline: none;
            border-color: #666;
        }
    }

    textarea {
        min-height: 150px;
        resize: vertical;
    }
`

const SubmitButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: ${props => props.theme.background === '#ffffff' 
        ? '#333333' 
        : '#ffffff' 
    };
    color: ${props => props.theme.background === '#ffffff' 
        ? '#ffffff'
        : '#333333'
    };
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${props => props.theme.background === '#ffffff' 
            ? '#444' 
            : '#555'};
    }

    &:disabled {
        background-color: ${props => props.theme.background === '#ffffff' 
            ? '#999' 
            : '#666'};
        cursor: not-allowed;
    }
`

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        // page will refresh without this
        e.preventDefault();

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Ensure the information submitted is correct",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "gray",
            confirmButtonText: "Send"
        })
        if (!result.isConfirmed){
            return;
        }
        setIsSubmitting(true);
        try{
            // back-end of the form
            const formData = new FormData(e.target);
            formData.append("access_key", ACCESS_KEY);
            console.log(ACCESS_KEY)
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent.",
                icon: "success"
            });
            setFormData({name: '', email: '', message: ''})
        }
        catch{
            Swal.fire({
                title: "Error!",
                text: "There was a problem sending your message.",
                icon: "error"
            });
        }
        finally{
            setIsSubmitting(false)
        }
    };

    return (
        <ContactSection id="contact">
            <h1>Contact</h1>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <SubmitButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </SubmitButton>
                </Form>
            </FormContainer>
        </ContactSection>
    )
}