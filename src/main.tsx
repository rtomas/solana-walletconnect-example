import ReactDOM from "react-dom/client";
// App.tsx

import { createWeb3Modal, defaultSolanaConfig } from '@web3modal/solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@web3modal/solana/chains'

import {
  PhantomWalletAdapter,
  HuobiWalletAdapter,
  SolflareWalletAdapter,
  TrustWalletAdapter,
} from '@solana/wallet-adapter-wallets'

import "./style.css"

// 0. Setup chains
const chains = [solana, solanaTestnet, solanaDevnet]

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_PROJECT_ID;
if (!projectId) throw new Error("Project ID is undefined");

// 2. Create solanaConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Solana Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const solanaConfig = defaultSolanaConfig({
  metadata,
  chains,
  projectId
})

// 3. Create modal
createWeb3Modal({
  solanaConfig,
  chains,
  projectId,
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // metamask
    'c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a'  // uniswap wallet
]
  wallets: [  
    /* new PhantomWalletAdapter(),
    new HuobiWalletAdapter(),
    new SolflareWalletAdapter(),
    new TrustWalletAdapter() */
  ]
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="centered-div">
    <w3m-button />
  </div>
);
