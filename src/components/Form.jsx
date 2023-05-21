import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const Form = ({ generateFunction }) => {
  const [text, setText] = useState('')
  const toast = useToast()

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty',
        description: 'Please enter some text to generate a function',
        status: 'error',
        duration: 5000,
        isClosable: false,
      })
    } else {
      generateFunction(text)
    }
  }
  return (
    <>
      <Textarea
        bg={'#0F1B2D'}
        color={'white'}
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="The function should be written in Javascript and it should..."
      />
      <Button
        marginTop={4}
        width={'100%'}
        bgGradient="linear(to-r, #040719, #204075)"
        _hover={{ bgGradient: 'linear(to-r, #204075, #00BFFF)' }}
        onClick={submitText}
      >
        Generate Function
      </Button>
    </>
  )
}

export default Form
