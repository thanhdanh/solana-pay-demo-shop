import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'

export default function HomePage() {
  // We get the public key of the connected wallet, if there is one
  const publicKey = 'DH2YSh3NaxzRSPgJKNKy2JxvWyBUDrCdBh3cqHxaKEkC'

  return (
    <div className="flex flex-col items-stretch max-w-4xl gap-8 pt-24 m-auto">
      <SiteHeading>Cookies Inc</SiteHeading>

      {/* We add the Solana wallet connect button */}
      <div className="basis-1/4">
        <WalletMultiButton className='!bg-gray-900 hover:scale-105' />
      </div>

      {/* We disable checking out without a connected wallet */}
      <Products submitTarget='/checkout' enabled={publicKey !== null} />
    </div>
  )
}
