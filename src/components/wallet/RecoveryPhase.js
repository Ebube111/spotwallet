import React from 'react'
import {Button} from '../button/Button'
import Box from "../container/Box"
import "./wallet.css"
// import { newPassphrase } from "../../js/passphrase"
// import digital from './digital.png'

const CreateWallet = ({setSteps}) => {
    return (
        <Box className={"w-96 px-6 "}>
                <div className='flex flex-col justify-center align-middle'>
                    {/* <img className='items-center' src={digital} alt="digital" style={{width: 150, height: 150}} /> */}
                    <h1 className='text-center text-4xl py-5 text-gray-300 font-semibold'>Secret Recovery Phase</h1>
                    <h3 className='text-gray-300 text-sm text-center py-5'>This is the only way you would be able to recover your account please store it somewhere safe</h3>
                    <div className='w-40 h-12 bg-white'>
                        {/* {newPassphrase} */}
                    </div>
                </div>
                <Button primary roundedLg full text={"Ok, I saved it somewhere"} onClick={() => setSteps(1)} />
        </Box>
    )
}

export default CreateWallet
