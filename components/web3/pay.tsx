'use client'

import { useAccount, useWriteContract } from 'wagmi';
import { parseGwei } from 'viem'
import { fundMeAbi } from '../../abis'
import classes from './pay.module.css';
import Button from "../ui/button";

export default function Pay() {
	const { address, chain } = useAccount()
	const { writeContract } = useWriteContract()

	function pay() {
		if (address) {
			if (chain?.name === 'Sepolia') {
				writeContract({
					abi: fundMeAbi,
					address: address,
					functionName: 'mint',
					args: [address, parseGwei('0.001')]
				})
			} else {
				alert("请切换到Sepolia网络")
			}
		} else {
			alert("请点击右上角连接钱包")
		}
	}

	return (
		<section className={classes.pay}>
			<Button onClick={pay}>点击打赏</Button>
		</section>
	)
}