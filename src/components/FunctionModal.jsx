import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CircularProgress,
  Container,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Generar la función aquí
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        closeModal()
        resetCopiedState()
      }}
      onKeyDown={handleKeyDown}
    >
      <ModalOverlay />
      <ModalContent maxW="3xl">
        <ModalHeader>
          <Flex alignItems="center">
            <Box flex="1">{/* Aquí puedes agregar el título deseado */}</Box>
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
                  icon={<FaClipboard />}
                  aria-label="Copy"
                  size="sm"
                  colorScheme="blue"
                  position="absolute"
                  top={2}
                  right={2}
                  onClick={() => {
                    onCopy()
                    setCopied(true)
                  }}
                />
              </Box>
              {copied && (
                <Alert status="success" mt={4}>
                  <AlertIcon />
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
