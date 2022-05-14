import tw from "tailwind-styled-components"
import { useAddress, useDisconnect, useMetamask , useEditionDrop } from '@thirdweb-dev/react'
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading'

const Minting = () => {

    const [totalSupply, setTotalSupply] = useState(0);
    const [inProgress, setInProgress] = useState(false);
    const [completed, setCompleted] = useState(false)
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnetWallet = useDisconnect();
    const editionDrop = useEditionDrop("0xe6CF75ccF31c7a937DDEbB706D86f50F13BF71C2")

    console.log(address);

    const mint = async () => {
        if(editionDrop && address){
            setInProgress(true);
            const tx = await editionDrop.claimTo(address, 0, 1)
            console.log(tx);
            setInProgress(false)
            setCompleted(true)
        }
    }
    const viewOpenSea = () => {
        const url = "https://testnets.opensea.io/assets/0xe6cf75ccf31c7a937ddebb706d86f50f13bf71c2/0"
        window.open(url, "_blank");
    }
    const startOver = () => {
        setCompleted(false);
        setInProgress(false);
        disconnetWallet();
    }
    useEffect(() =>{
        const getTotal = async () =>{
            if(editionDrop){
                const total = await editionDrop.totalSupply(0);
                setTotalSupply(total.toNumber());
            }
        }
        getTotal();
}, [editionDrop])

  return (
    <Container>
        <Mint>
            <TitleContainer>
                <Title>
                    Welcome to <br/>the Bored Ape<br/> Yatch club.
                </Title>
                <Count>
                    {address && totalSupply}
                </Count>
            </TitleContainer>
            <ButtonContainer>
                {
                    address 
                    ? <>
                        {
                            completed
                            ? <FilledButton onClick={viewOpenSea}>
                                View OpenSea
                            </FilledButton>
                            :<FilledButton 
                                disabled={inProgress}
                                onClick={mint}>
                            {
                                inProgress
                                ?<ReactLoading type="bubbles" color="#000" heigt={64}/>
                                :<>
                                Mint
                                </>
                            }
                            
                        </FilledButton>
                        }
                        
                        <UnFilledButton 
                            disabled={inProgress}
                            onClick={disconnetWallet}>
                            Disconnect
                        </UnFilledButton>
                    </>
                    :<FilledButton onClick={connectWithMetamask}>
                        Connect Wallet
                    </FilledButton>
                }
            </ButtonContainer>
        </Mint>
       
    </Container>  

    )
}

export default Minting

const Count = tw.div`
    flex
    grow
    items-center
    justify-center

`
const FilledButton = tw.button`
    flex
    justify-center
    items-center
    flex-1
    bg-[#bfc500] hover:bg-white text-black font-bold py-2 px-4 rounded uppercase h-14
`
const ButtonContainer = tw.div`
    mt-2
    flex
    gap-4
`
const UnFilledButton = tw.div`
    flex
    justify-center
    items-center
    flex-1
    bg-black
    text-[#bfc500]
    border-2
    border-[#bfc500]
    hover:bg-[#bfc500]
    hover:text-black
    cursor-pointer
    
`
const Mint = tw.div`
    max-w-screen-sm
    lg:w-1/3
    md:w-1/2
    bg-black
    lg:mt-[-210px]
    z-50
    flex
    flex-col
    pb-4
    pr-4
 
`
const Title = tw.h2`
    uppercase
    text-3xl
    italic
    font-bold
    mt-3
`

const TitleContainer = tw.div`

`
const Container = tw.div`
    max-w-screen-lg
    w-full
    z-50
`