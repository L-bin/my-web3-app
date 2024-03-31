import Link from "next/link"
import classes from "./main-header.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Web3事件</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>浏览所有事件</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden lg:flex lg:justify-end">
        <ConnectButton />
      </div>
    </header>
  )
}

export default MainHeader