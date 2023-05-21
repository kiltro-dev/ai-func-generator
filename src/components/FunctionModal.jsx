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
            <Box flex="1">Copy your function</Box>
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
                  style={dark}
                  showLineNumbers={true}
                  wrapLines={true}
                  customStyle={{
                    margin: 0,
                    borderRadius: '4px',
                    width: '100%',
                    height: '100%',
                    fontFamily: 'Fira Code',
                  }}
                >
                  {generatedFunction}
                </SyntaxHighlighter>
                <IconButton
                  icon={<FaClipboard color="#00BFFF" />}
                  aria-label="Copy"
                  padding={1}
                  size="xs"
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
