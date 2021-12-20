import React from 'react'
import { Button } from '../button/Button'
import Box from "../container/Box"
import "./wallet.css"
// import digital from './digital.png'

export const CreateWallet = ({setSteps}) => {
    return (
        <Box className={"w-96 px-6 "}>
                <div className='flex flex-col justify-center align-middle'>
                    {/* <img className='items-center' src={digital} alt="digital" style={{width: 150, height: 150}} /> */}
                    <h1 className='text-center text-4xl py-5 text-gray-300 font-semibold'>Spot Wallet</h1>
                    <h3 className='text-gray-300 text-center py-5'>The original Bitcoin NFT wallet. Use this to unlock
                    the portal into the CryptoCorridor</h3>
                    <Button primary text={"Create a new Wallet"} full roundedLg onClick={() => setSteps(2)} />
                    <Button secondary text={"I have a Wallet"} full roundedLg onClick={() => setSteps(2)} />
                </div>
        </Box>
    )
}

