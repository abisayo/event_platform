import Image from "next/image"
import Link from "next/link"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-center flex-col min-h-screen w-full bg-primary-50 
        bg-dotted-pattern bg-cover bg-fixed bg-center">
            <Link href="/">
                <Image src="/assets/images/logo.svg" alt="Evently logo"
                    width={128} height={38} className="mb-10" />
            </Link>
            {children}
        </div>
    )
}

export default Layout