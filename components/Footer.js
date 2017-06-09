import styled from 'styled-components'
import TwitterIcon from 'react-icons/lib/fa/twitter'

const Footer = styled.footer`
  margin: 60px 0;
`

const TwitterLink = styled.a`
  border-bottom: 2px solid #4099FF;
  color: #4099FF;
  display: block;
  font-family: 'Roboto', cursive;
  font-size: 40px;
  padding: 20px 0;
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
