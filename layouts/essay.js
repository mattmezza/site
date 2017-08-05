import ReactDisqusComments from 'react-disqus-comments'

// Layouts
import Page from './page'

export default ({ children }) => (
  <Page>
    <article>
      {children}
      <ReactDisqusComments
        shortname="matteo-merola-co"
        onNewComment={() =>
          console.log(`I don't give a f**k about your comment...`)}
      />
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
