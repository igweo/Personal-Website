import {
  Box,
  Flex,
  HStack,
  Heading,
  Button,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
const MotionBox = motion(Box)
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('#feefd3', 'gray.800')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <MotionBox whileHover={{ scale: 1.05 }}>
            <Box>
              <Heading as='h1' size='md'>
                Onyekachi Igwe
              </Heading>
            </Box>
          </MotionBox>
          <Box mr='150'>
            <MotionBox whileHover={{ scale: 1.05 }}>
              <HStack>
                <Link isExternal href='https://github.com/igweo/website'>
                  <BsGithub />
                </Link>
                <Link isExternal href='https://github.com/igweo/website'>
                  <Text>Source</Text>
                </Link>
              </HStack>
            </MotionBox>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <MotionBox whileHover={{ rotate: 360 }}>
                <Button
                  onClick={toggleColorMode}
                  bgColor={colorMode === 'light' ? 'blue.300' : 'yellow.500'}
                  _hover={colorMode === 'light' ? 'blue.300' : 'yellow.500'}
                >
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </MotionBox>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
