import { Heading, Image, Text } from '@chakra-ui/react'
import logo from '../assets/lambda.svg'

const Header = () => {
  return (
    <>
      {/* <Image src={logo} width={100} marginBottom={'1rem'} /> */}
      <Heading
        css={{
          backgroundImage: 'linear-gradient(to right, #003366, #00CCFF)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
        marginBottom={'1rem'}
      >
        AI Function Generator
      </Heading>
      <Text
        fontSize={17}
        textAlign={'center'}
        fontWeight={'semibold'}
        css={{
          backgroundImage: 'linear-gradient(to right, #B2EBF2, #E1F5FE)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Provide a brief description of the desired function in your favorite
        language (Eg. Javascript)
      </Text>
    </>
  )
}

export default Header
