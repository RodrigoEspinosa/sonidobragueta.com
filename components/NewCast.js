import styled from 'styled-components'

const MIXCLOUD_BASE_WIDGET_URL = 'https://www.mixcloud.com/widget/iframe'

const castIframeSrcHelper = (url) => `${MIXCLOUD_BASE_WIDGET_URL}/?feed=${encodeURIComponent(url)}&hide_cover=1&mini=1&light=1&hide_artwork=1`

const CastIframe = ({ url }) => (
  <iframe width='100%' height={120} src={castIframeSrcHelper(url)} frameBorder={0} />
)

const CastStyle = styled.div`
  background-size: cover;
  background: #fff center center;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px,
              rgba(39, 44, 49, 0.03) 1px 3px 8px;
  display: flex;
  flex-direction: ${({ latest }) => latest ? 'row' : 'column' };
  flex: 1 1 ${({ latest }) => latest ? '100%' : '300px' };
  margin: 0 20px 40px;
  min-height: 300px;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0 0 1px rgba(39, 44, 49, 0.1), 0 3px 16px rgba(39, 44, 49, 0.07);
    transition: all 0.3s ease;
    transform: translate3D(0, -1px, 0);
  }
`

const CastPictureLink = styled.a`
  border-radius: ${props => props.latest ? '5px 0 0 5px' : '5px 5px 0'};
  display: block;
  flex: ${props => props.latest ? '1 1 auto' : 1};
  overflow: hidden;
  position: relative;
`

const CastPicture = styled.img`
  background-color: grey;
  background-image: url("${props => props.background}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props => props.latest ? '100%' : '200px'};
  position: ${props => props.latest ? 'absolute' : 'static'};
  width: ${props => props.latest ? '100%' : 'auto'};
`

const CastTitle = styled.h2`
  margin-top: 0;
`

const CastContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 1rem;
`

export default ({ name, latest, url, pictures }) => (
  <CastStyle latest={latest}>
    <CastPictureLink latest={latest}>
      <CastPicture background={pictures.large} latest={latest} />
    </CastPictureLink>

    <CastContent>
      <CastTitle>{name}</CastTitle>
      <CastIframe url={url} />
    </CastContent>
  </CastStyle>
)
