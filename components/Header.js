import tw from 'tailwind-styled-components'
import Image from 'next/image'
import logo from '../assets/logo.jpeg'

const Header = () => {
  return (
    <Container>
        <HeaderContainer>
            <Image 
                width={200}
                height={70}
                src={logo}
                alt='logo'
            />
        </HeaderContainer>
    </Container>
  )
}

export default Header

const HeaderContainer = tw.div`
  mt-[30px]
`
const Container = tw.div`
    flex
    justify-center
    h-20
`