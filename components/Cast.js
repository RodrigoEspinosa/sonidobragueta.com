import random from 'random-item'
import styled from 'styled-components'

const MIXCLOUD_BASE_WIDGET_URL = 'https://www.mixcloud.com/widget/iframe'

const BG_COLORS = [
  // '#2f2933',
  '#01a2a6',
  '#29d9c2',
  '#bdf271',
  '#ffffa6'
]

const castIframeSrcHelper = (url) => `${MIXCLOUD_BASE_WIDGET_URL}/?feed=${encodeURIComponent(url)}&hide_cover=1&light=1`

const CastIframe = ({ url }) => (
  <iframe width='100%' height={120} src={castIframeSrcHelper(url)} frameBorder={0} />
)

const CastStyle = styled.div`
  border: 1px solid ${() => random(BG_COLORS)};
  flex: 1 1 auto;
  margin: 10px;
  min-height: 400px;
  padding: 20px 20px;
  position: relative;
`

const CastPicture = styled.div`
  background-image: url(${(props) => props.pictures.extra_large});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  &::before {
    background: linear-gradient(to bottom right, ${() => random(BG_COLORS)}, ${() => random(BG_COLORS)});
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const CastTitle = styled.h2`
  margin: 2px 0;
  font-family: 'Barrio', sans-serif;
  font-size: 1em;
  text-shadow: 2px 2px 0 #ffffa6, 4px 4px 0 #ffffa6;
  margin: 10px 0;
  color: #2f2933;
  text-align: left;
`

export default ({ name, url, pictures }) => (
  <CastStyle pictures={pictures}>
    <CastPicture pictures={pictures} />
    <CastTitle>{name}</CastTitle>
    <CastIframe url={url} />
  </CastStyle>
)
