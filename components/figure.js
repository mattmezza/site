// Components
import Back from './back'

const getClasses = (isCover, isWindow, isCircle) => {
  const list = []

  if (isCover) {
    list.push('cover')
  }

  if (isWindow) {
    list.push('frame')
  }

  if (isCircle) {
    list.push('circle')
  }

  return list.join(' ')
}

const Embed = ({ src, width, height }) => {
  if (!width || !height) {
    throw new Error('Please define the height and width')
  }

  const padding = (height / width) * 100

  const containerStyle = {
    paddingBottom: `${padding}%`
  }

  return (
    <aside style={containerStyle}>
      <iframe src={src} frameBorder="0" allowFullScreen />

      <style jsx>
        {`
          aside {
            height: 0;
            overflow: hidden;
            position: relative;
          }

          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          @media (min-width: 768px) {
            aside {
              margin: 40px 0;
            }
          }
        `}
      </style>
    </aside>
  )
}

const Image = ({ width, src, isCover, isWindow, isCircle }) => (
  <figure className={getClasses(isCover, isWindow, isCircle)}>
    <img width={width} src={src} />

    {isCover && <Back to="/thoughts" insideCover />}

    <style jsx>
      {`
        img {
          max-width: 100%;
        }

        figure.circle img {
          border-radius: 50%;
        }

        figure {
          margin: 20px 0;
          text-align: center;
        }

        .frame {
          margin: 40px 0;
        }

        .frame img {
          border-radius: 8px;
          border: 1px solid #b9b9b9;
          box-shadow: 0px 0px 30px 1px rgba(170, 170, 170, 1);
        }

        .cover {
          margin: -45px -30px 30px -30px;
          position: relative;
        }

        .cover img {
          max-width: none;
          width: 100%;
          object-fit: cover;
        }

        @media (min-width: 680px) {
          .cover img {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }
        }

        @media (min-width: 768px) {
          figure {
            margin: 40px 0;
          }

          .frame {
            margin: 50px 0;
          }

          .cover {
            margin: 0 0 40px 0;
            width: 100%;
            border-radius: 6px;
            overflow: hidden;
            font-size: 0;
            line-height: 0;
          }

          .cover img {
            border-radius: 0;
          }
        }
      `}
    </style>
  </figure>
)

export default Image
export { Image, Embed }
