import { Box, Image, Text, Flex } from '@chakra-ui/react'
import logo from '../assets/openai.svg'

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Image src={logo} marginRight={1} width={5} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  )
}

export default Footer
