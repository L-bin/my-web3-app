'use client'

import { useAccount, useSwitchChain, useWriteContract } from 'wagmi';
import { parseAbi } from 'viem'
import { fundMeAbi } from '../../abis'
import classes from './pay.module.css';
import Button from "../ui/button";
import { useConnectModal } from '@rainbow-me/rainbowkit';

export default function Pay() {
	const { openConnectModal } = useConnectModal();
	const { isConnected, chain } = useAccount()
	const { switchChainAsync } = useSwitchChain()
	const { isPending, writeContract } = useWriteContract()

	function pay() {
		writeContract({
			abi: parseAbi(['function mint(uint256 tokenId)']),
			address: '0x13C8B8bd86d53F1C54CC57C2c13Eb47d6D7eCaF9',
			functionName: 'mint',
			args: [BigInt(69420)]
		})
	}

	function click() {
		// Sepolia网络
		if (chain?.id === 11_155_111) {
			pay()
		} else {
			switchChainAsync({ chainId: 11_155_111 })
		}
	}

	return (
		<section className={classes.pay}>
			<Button onClick={isConnected ? click : openConnectModal} disabled={isPending}>点击打赏</Button>
		</section>
	)
}