import styled from 'styled-components'
import TwitterIcon from 'react-icons/lib/fa/twitter'

const Footer = styled.footer`
  background: black;
  margin: 0;
  padding: 2rem 0;
`

const TwitterLink = styled.a`
  color: #4099FF;
  display: block;
  font-family: 'Roboto', cursive;
  font-size: 2rem;
  text-align: center;
  text-decoration: none;
`

export default () => (
  <Footer>
    <TwitterLink href='https://twitter.com/sonidobragueta'>
      <TwitterIcon size={64} />
      {' '}
      @sonidobragueta
    </TwitterLink>
  </Footer>
)
