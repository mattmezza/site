// Packages
import toID from 'to-id'

const Anchor = ({ content }) => {
  let idBase = content

  if (Array.isArray(content)) {
    idBase = content
      .map(item => {
        if (typeof item === 'string') {
          return item
        }

        return item.props.children
      })
      .join('')
  }

  const id = toID(idBase)

  return (
    <span>
      <a href={`#${id}`} id={id}>
        #
      </a>

      <style jsx>
        {`
          span {
            position: absolute;
            margin-left: -15px;
            width: 15px;
          }

          a {
            text-decoration: none;
            color: #4492ff;
            padding-top: 30px;
            visibility: hidden;
          }

          a:focus {
            outline: none;
          }
        `}
      </style>
    </span>
  )
}

const Wrapper = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        margin-top: 30px;
      }

      div:hover :global(a) {
        visibility: visible;
      }
    `}</style>
  </div>
)

export const H1 = ({ children }) => (
  <Wrapper>
    <h1>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h1 {
          font-weight: 700;
          font-size: 23px;
          line-height: 1.5em;
        }
      `}</style>
    </h1>
  </Wrapper>
)

export const H2 = ({ children }) => (
  <Wrapper>
    <h2>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h2 {
          font-weight: 700;
          font-size: 18px;
          line-height: 1.5em;
        }
      `}</style>
    </h2>
  </Wrapper>
)

export const H3 = ({ children }) => (
  <Wrapper>
    <h3>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h3 {
          font-weight: 700;
          font-size: 15px;
          line-height: 1.5em;
        }
      `}</style>
    </h3>
  </Wrapper>
)

export const H4 = ({ children }) => (
  <Wrapper>
    <h4>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h4 {
          font-weight: 700;
          font-size: 13px;
          line-height: 1.5em;
        }
      `}</style>
    </h4>
  </Wrapper>
)

export const H5 = ({ children }) => (
  <Wrapper>
    <h5>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h5 {
          font-weight: 700;
          font-size: 10px;
          line-height: 1.5em;
        }
      `}</style>
    </h5>
  </Wrapper>
)

export const H6 = ({ children }) => (
  <Wrapper>
    <h6>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h6 {
          font-weight: 700;
          font-size: 9px;
          line-height: 1.5em;
        }
      `}</style>
    </h6>
  </Wrapper>
)
