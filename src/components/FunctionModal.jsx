import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  Box,
  CircularProgress,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useClipboard,
} from '@chakra-ui/react'
import { FaClipboard } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { synthwave84 as dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const FunctionModal = ({ isOpen, closeModal, generatedFunction, loading }) => {
  const [copied, setCopied] = useState(false)
  const { onCopy } = useClipboard(generatedFunction)

  const resetCopiedState = () => {
    setCopied(false)
  }

  const customStyle = {
    margin: 0,
    borderRadius: '4px',
    width: '100%',
    height: '100%',
    fontFamily: 'Fira Code',
    backgroundColor: '#0C111d',
  }

  const customTheme = {
    ...dark,
    'pre[class*="language-"]': {
      ...dark['pre[class*="language-"]'],
      backgroundImage: 'linear(to-b, #06090E, #111824)',
    },
  }
  console.log(dark)

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        closeModal()
        resetCopiedState()
      }}
      centerContent
    >
      <ModalOverlay />
      <ModalContent
        maxW="2xl"
        bgGradient="linear(to-b, #080C16, #172A46)"
        boxShadow="rgba(0, 0, 0, 0.7) 0px 20px 30px -10px, rgba(0, 0, 0, 0.5) 0px 1px 8px 0px"
        color="#FFFFFF"
      >
        <ModalHeader>
          <Flex alignItems="center">
            <Box fontWeight={400} fontSize={15} flex="1">
              Copy your function!
            </Box>
            <ModalCloseButton />
          </Flex>
        </ModalHeader>
        <ModalBody
          display="flex"
          flexDir="column"
          flexGrow={1}
          py={2}
          paddingBottom={10}
        >
          {loading ? (
            <Flex justifyContent="center" alignItems="center" flexGrow={1}>
              <CircularProgress isIndeterminate color="blue.400" />
            </Flex>
          ) : (
            <>
              <Box flexGrow={1} position="relative" width="100%">
                <SyntaxHighlighter
                  language="javascript"
                  style={customTheme}
                  showLineNumbers={true}
                  wrapLines={true}
                  customStyle={customStyle}
                  startingLineNumber={1}
                >
                  {`${generatedFunction.trim()} \n`}
                </SyntaxHighlighter>
                <IconButton
                  icon={<FaClipboard color="#B2EBF2" />}
                  aria-label="Copy"
                  padding={1}
                  size="xs"
                  colorScheme="blackAlpha"
                  position="absolute"
                  top={4}
                  right={5}
                  onClick={() => {
                    onCopy()
                    setCopied(true)
                  }}
                />
              </Box>
              {copied && (
                <Alert
                  status="success"
                  mt={4}
                  variant="solid"
                  colorScheme="blue"
                  bgGradient="linear(to-r, #0C111D, #1B2A48)"
                  borderRadius="md"
                  color="white"
                >
                  <AlertIcon color="green.400" />
                  Copied!
                </Alert>
              )}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default FunctionModal
