import { Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import { useState } from 'react'
import FunctionModal from './components/FunctionModal'

const App = () => {
  const [generatedFunction, setGeneratedFunction] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const generateFunction = async (text) => {
    setLoading(true)
    setIsOpen(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Generate a function from the text I will provide, use javascript (es6) by default if no other programming language is specified Write only the necesary for the function and all in English unless the user specifies another language. Be brief and follow the best practices of the language, do not write code comments, only code. If the information provided in the text is not precise enough to be understood by a human or machine, it returns a message indicating that it needs to generate a function. This is the text:\n\n ${text}`,
        temperature: 0.5,
        max_tokens: 300,
        frequency_penalty: 0.7,
      }),
    }

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)
    const json = await response.json()

    const data = json.choices[0].text

    console.log(data)
    setGeneratedFunction(data)
    setLoading(false)
  }

  const closeModal = () => setIsOpen(false)
  return (
    <Box bgGradient="linear(to-b, #06090E, #111824)" color={'white'} height={'100vh'} paddingTop={90}>
      <Container maxW={'3xl'} centerContent>
        <Header />
        <Form generateFunction={generateFunction} />
        <Footer />
      </Container>
      <FunctionModal
        generatedFunction={generatedFunction}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      ></FunctionModal>
    </Box>
  )
}

export default App
