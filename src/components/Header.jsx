import { Heading, Image, Text} from "@chakra-ui/react"
import logo from '../assets/light-bulb.svg'
const Header = () => {
  return (
    <>
        <Image src={logo} width={100} marginBottom='1rem' marginTop='1rem' />
        <Heading color='white ' marginBottom='1rem'>
            AI keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your Textn and we'll extract the keyword for you
        </Text>
    </>
  )
}

export default Header