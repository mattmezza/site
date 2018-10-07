const OL = ({ children }) => (
  <ol>
    {children}

    <style jsx>
      {`
        ol {
          list-style: decimal;
          margin: 30px 0;
          padding: 0 0 0 22px;
        }
      `}
    </style>
  </ol>
)

const UL = ({ children }) => (
  <ul>
    {children}

    <style jsx>
      {`
        ul {
          margin: 30px 0;
          list-style: disc;
          padding: 0 0 0 18px;
        }
      `}
    </style>
  </ul>
)

const LI = ({ children, shallow }) => {
  const classes = []

  if (shallow) {
    classes.push('shallow')
  }

  return (
    <li className={classes.join(' ')}>
      {children}

      <style jsx>
        {`
          li {
            margin-bottom: 15px;
            line-height: 25px;
          }

          li.shallow {
            margin-bottom: 10px;
          }
        `}
      </style>
    </li>
  )
}

export { OL, UL, LI }
