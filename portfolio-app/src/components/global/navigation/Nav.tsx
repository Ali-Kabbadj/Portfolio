'use client'

import Link from 'next/link'
import { ModeToggle } from '../theming/ModeToggle'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



export function Nav() {
    const { resolvedTheme } = useTheme()
    return (
        <nav className="flex justify-between items-center py-3">
            <Link href="/">
                <div>
                    <span className="text-3xl font-bold">
                        ALI.
                    </span>
                    <span className="text-3xl text-primary font-bold bg-background rounded-sm px-1 py-0">
                        K
                    </span>
                </div>
            </Link>
            <div className="flex items-center space-x-4">
                <FaGithubSquare className='text-4xl hover:text-primary' onClick={() => window.open('https://github.com/ali-kabbadj', '_blank')} />
                <FaLinkedin className='text-4xl hover:text-primary' onClick={() => window.open('https://www.linkedin.com/in/ali-kabbadj/', '_blank')} />
                <ModeToggle />
                
                <SignedIn>
                    <div className="py-1 px-4">
                        <UserButton
                            appearance={{
                                baseTheme:
                                    resolvedTheme === 'dark' ? dark : undefined,
                            }}
                        />
                    </div>
                </SignedIn>
            </div>
        </nav>
    )
}
