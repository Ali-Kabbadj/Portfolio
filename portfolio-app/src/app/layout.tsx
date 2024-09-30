import '~/styles/globals.css'
import { Roboto_Mono } from 'next/font/google'
import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './_components/header'
import ActiveSectionContextProvider from '~/context/active-section-context'
import ThemeContextProvider from '~/context/theme-context'
import { ModeToggle } from '~/components/global/theming/ModeToggle'

export const metadata: Metadata = {
    title: 'ALI KABBADJ - Developer',
    description: 'ALI KABBADJ - Developer',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const RobotoFont = Roboto_Mono({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
})

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <html
                lang="en"
                className={`${RobotoFont.className} !scroll-smooth`}
                suppressHydrationWarning
            >
                <body className="relative bg-background text-foreground antialiased">
                    <ThemeContextProvider>
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-primary/20 dark:bg-primary/10"></div>
                            <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-secondary/20 dark:bg-secondary/10"></div>

                            {/* Content wrapper */}
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <ActiveSectionContextProvider>
                                    <Header />
                                    <main className="pt-28 sm:pt-36">
                                        <div className="mx-auto max-w-7xl">
                                            <div className="relative px-4 sm:px-8 lg:px-12">
                                                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                                    {children}
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </ActiveSectionContextProvider>
                                <ModeToggle />
                            </div>
                        </div>
                    </ThemeContextProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}