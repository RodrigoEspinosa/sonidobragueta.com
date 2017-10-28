import styled from 'styled-components'

const MIXCLOUD_BASE_WIDGET_URL = 'https://www.mixcloud.com/widget/iframe'

const castIframeSrcHelper = (url) => `${MIXCLOUD_BASE_WIDGET_URL}/?feed=${encodeURIComponent(url)}&hide_cover=1&mini=1&light=1&hide_artwork=1`

const CastIframe = ({ url }) => (
  <iframe width='100%' height={60} src={castIframeSrcHelper(url)} frameBorder={0} />
)

const CastStyle = styled.div`
  background: white;
  border-radius: 5px;
  border: 1rem solid white;
  display: flex;
  flex-direction: ${({ latest }) => latest ? 'row' : 'column' };
  flex: 1 1 ${({ latest }) => latest ? '100%' : '300px' };
  margin: 0 20px 40px;
  min-height: 300px;
  overflow: hidden;
  transition: all 0.5s ease;
`

const CastPicture = styled.img`
  background-image: url("${props => props.background}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto 90%;
  display: block;
  flex: ${props => props.latest ? '1 1 auto' : 1};
  height: ${props => props.latest ? '100%' : '200px'};
  position: relative;
  width: auto;
`

const CastTitle = styled.h2`
  color: #ce137a;
  font-size: 2rem;
  font-weight: 100;
  margin: 0.5em 0;
  padding: 0;
  margin-top: 0;
  font-family: 'Barrio', cursive;
  text-align: left;
  text-shadow: 1px 1px #524e51,
               2px 2px #524e51,
               3px 3px #524e51,
               4px 4px #524e51;
`

const CastContent = styled.div`
  align-items: space-between;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: ${props => props.latest ? '0 1rem' : '1rem 0 0 0'};
`

export default ({ name, latest, url, pictures }) => (
  <CastStyle latest={latest}>
    <CastPicture background={pictures.large} latest={latest} />

    <CastContent latest={latest}>
      <CastTitle>{name}</CastTitle>
      <CastIframe url={url} />
    </CastContent>
  </CastStyle>
)
