import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
        <Link href="/" className="bank-card bg-bank-gradient">
            <div className="bank-card_content bg-bank-gradient">
                <div>
                    <h1 className="text-base leading-6 font-semibold text-white">
                        {account.name || userName}
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-xs leading-4 font-semibold text-white">{userName}</h1>
                        <h2 className="text-xs leading-4 font-semibold text-white">●● / ●●</h2>
                    </div>
                    <p className="text-sm leading-5 font-semibold tracking-[1.1px] text-white">
                       ●●●● ●●●● ●●●●<span className='text-base leading-6'>1234</span>
                    </p>
                </article>
            </div>
            <div className="bank-card_icon bg-bank-gradient">
                <Image src="/icons/Paypass.svg" alt="pay" width={20} height={24} />
                <Image src="/icons/mastercard.svg" alt="mastercard" width={45} height={32} className="ml-5" />
            </div>
            <Image src="/icons/lines.png" alt="lines" width={316} height={190} className="absolute top-0 left-0" />
        </Link>
        {/* COPY */}
    </div>
  )
}

export default BankCard