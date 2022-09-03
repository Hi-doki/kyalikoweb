import styled from 'styled-components'

const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`

const Footer = () => {
  return (
    <FooterSection className="translate-y-full">
        <p>
          Kyaliko.
          
          Work In Progress ATM
        </p>
    </FooterSection>
  )
}

export default Footer