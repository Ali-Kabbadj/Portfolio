import '~/styles/globals.css'
import { Roboto_Mono } from 'next/font/google'
import { type Metadata } from 'next'
import { ThemeProvider } from '@/components/global/theming/ThemeProvider'
import { Nav } from '@/components/global/navigation/Nav'

export const metadata: Metadata = {
    title: 'ALI KABBADJ - Developer',
    description: 'ALI KABBADJ - Developer',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const RobotoFont = Roboto_Mono({
    weight: ['400','500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
})
 
export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${RobotoFont.className}`}
            suppressHydrationWarning
        >
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="container mx-auto px-4 sm:px-24">
                        <Nav />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
