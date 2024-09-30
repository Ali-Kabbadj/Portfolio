import { type Metadata } from 'next'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

export const metadata: Metadata = {
    title: 'ALI KABBADJ - Portfolio - Admin Dashboard',
    description: 'ALI KABBADJ - Portfolio - Admin Dashboard',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function AdminLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                {children}
            </SignedIn>
        </div>
    )
}
