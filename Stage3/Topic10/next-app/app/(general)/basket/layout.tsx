
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'My Basket',
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans ">
            {children}
        </div>
    )
}