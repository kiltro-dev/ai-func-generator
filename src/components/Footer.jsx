import { Box, Image, Text, Flex } from '@chakra-ui/react'
import logo from '../assets/openai.svg'

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Image src={logo} marginRight={1} width={5} />
        <Text
          css={{
            backgroundImage: 'linear-gradient(to right, #d5fdF5, #E1F5FE)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Powered By Open AI
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
