import tw from "tailwind-styled-components"
const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        The world&apos;s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).<br/> Buy, sell, and discover exclusive digital items.
        <DesignedBy>
          Designed by Ndayisenga John Claude 
        </DesignedBy>
      </FooterContainer>
      
    </Container>
  )
}

export default Footer

const DesignedBy = tw.div`
  flex
  justify-center
  mt-5
  text-yellow-800
  font-bold
`
const FooterContainer = tw.div`
  max-w-screen-lg
  w-full
  flex
  flex-col
`

const Container = tw.div`
  flex
  justify-center
  my-5
`
