import React, {useState} from 'react'
import {CreateWallet} from '../components/wallet/CreateWallet';
import RecoveryPhase from "../components/wallet/RecoveryPhase"

// const defaultData = {
//   recovery: ""
// }

// const steps = [
//     { id: "wallet" },
//     { id: "recovery" },
//     { id: "import" },
//     { id: "review" },
//     { id: "submit" },
//   ];


  const WalletPage = () => {
    const [steps, setSteps] = useState(1)
    return (
            <div>
                {steps === 1 && <CreateWallet setSteps={setSteps} />}
                {steps === 2 && <RecoveryPhase setSteps={setSteps} />}
        </div>
    )
}

export default WalletPage;
