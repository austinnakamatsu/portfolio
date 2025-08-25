// src/components/ErrorPage.jsx
import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.text};
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Message = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
`

export default function ErrorPage() {
  return (
    <Container>
      <Title>404 — Page Not Found</Title>
      <Message>
        Why did you break it! Or did I break it? Or something else must've happened. 
        Either way, this page isn't what you expected. I’ll tell my IT guy — he’s pretty good with computers…
      </Message>
    </Container>
  )
}
