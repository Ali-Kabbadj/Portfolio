import Link from 'next/link'
import { ModeToggle } from '../theming/ModeToggle'
// project is using css varibale and taiwind css for styling
// and shadcn library for ui components

export function Nav() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link href="/">
        <span className="text-xl font-bold">Ali Kabbadj</span>
      </Link>
      <ModeToggle />
    </nav>
  )
}
