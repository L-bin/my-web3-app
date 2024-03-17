'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useWriteContract } from 'wagmi';
import { formatEther, parseGwei } from 'viem'
import styles from '../../styles/Home.module.css';
import { fundMeAbi } from '../../abis'

export default function Web3(){
    const { address } = useAccount()
    const { data, isLoading} = useBalance({address})
    const { writeContract } = useWriteContract()
    return (
        <div className={styles.main}>
            <ConnectButton />
            <h1 className={styles.title}>Balance</h1>
            {data?.value !== undefined && <p className={styles.description}>{formatEther(data.value)}</p>}
            <button onClick={()=>{
                if (!address) return
                if (data?.value == undefined) return
                writeContract({
                    abi: fundMeAbi,
                    address: address,
                    functionName: 'mint',
                    args: [address, parseGwei('0.001')]
                })
            }}>点击交易</button>
        </div>
    )    
}