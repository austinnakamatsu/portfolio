import styled from '@emotion/styled'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY

const ContactSection = styled.section`
    /* min-height: 100vh; */
    padding: 2rem;
    color: ${props => props.theme.text};
`

const FormContainer = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    backdrop-filter: blur(0.15rem);
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto; /* centers form horizontally */
  text-align: center; /* centers <p> text */

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color:  ${props => props.theme.text};
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-family: inherit; /* 👈 makes placeholder & input text inherit from parent font */
    border: 1px solid #555;
    border-radius: 8px;
    background-color: ${props => props.theme.background === '#ffffff' 
        ? '#ffffff'
        :  '#333333' 
    };
    color: ${props => props.theme.background === '#ffffff' 
        ? '#333333'
        : '#ffffff'
    };
    outline: none;

    &::placeholder {
      font-family: inherit; /* 👈 placeholder font matches */
      font-size: 1rem;
      color: #aaa;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;


const SubmitButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: ${props => props.theme.background === '#ffffff' 
        ?  '#ffffff'
        :  '#333333' 
    };
    color: ${props => props.theme.background === '#ffffff' 
        ? '#333333'
        : '#ffffff'
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

const ContactTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color:  ${props => props.theme.text};
    letter-spacing: -0.02em;
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
            // console.log(ACCESS_KEY)
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });
            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Your message has been sent.",
                    icon: "success"
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: data.message || "There was a problem sending your message.",
                    icon: "error"
                });
            }
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
            <ContactTitle>Contact Me</ContactTitle>            
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <p>Have a question or want to work together? Fill out the form below and I'll get back to you as soon as I can!</p>
                        <input
                            placeholder='Name'
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            placeholder='Email'
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            placeholder='Message'
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </SubmitButton>
                    </FormGroup>                   
                </Form>
            </FormContainer>
        </ContactSection>
    )
}