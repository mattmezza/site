// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <article>
      {children}
    </article>

    <style jsx>
      {`
      article {
        margin: 0 auto;
        word-wrap: break-word;
        hyphens: auto;
        max-width: 768px;
      }
    `}
    </style>
  </Page>
)
