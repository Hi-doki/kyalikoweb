import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
    padding 0rem 2rem
`

const Navbar = () => {
  return (
    <div className="grid gap-5 sm:flex h-40 sm:h-20 bg-black bg-opacity-50 place-content-center text-center sm:p-0 p-5 sm:place-content-between items-center font-semibold selection:bg-gray-500 selection:bg-opacity-25">
        <div className="text-center">
            <Link href="/" passHref>
                <StyledLink>kyaliko</StyledLink>
            </Link>
        </div>
        <div className="grid grid-cols-2 sm:flex gap-2">
            <Link href="/about" passHref>
                <StyledLink>About</StyledLink>
            </Link>
            <Link href="/contact" passHref>
                <StyledLink>Contact</StyledLink>
            </Link>
            <Link href="/projects" passHref>
                <StyledLink>Projects</StyledLink>
            </Link>
            <Link href="/promote" passHref>
                <StyledLink>Promote</StyledLink>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;