import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    height: 80px;
    background: #00000050;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
`;

const StyledLink = styled.a`
    padding 0rem 2rem
`

const Navbar = () => {
  return (
    <Nav>
        <div>
            <Link href="/" passHref>
                <StyledLink>kyaliko</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/about" passHref>
                <StyledLink>About</StyledLink>
            </Link>
            <Link href="/contact" passHref>
                <StyledLink>Contact</StyledLink>
            </Link>
            <Link href="/projects" passHref>
                <StyledLink>Projects</StyledLink>
            </Link>
            <Link href="/404" passHref>
                <StyledLink>404</StyledLink>
            </Link>
        </div>
    </Nav>
  )
}

export default Navbar;