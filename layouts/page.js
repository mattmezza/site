// Helpers
import Progress from 'nprogress'

// Components
import Head from 'next/head'
import Router from 'next/router'

// Other
import package_ from '../package'

let progress

const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

// Only show progress bar if page
// transition takes longer than 200 milliseconds
Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

// Log a sweet message in the browser
// Showing the version and GitHub repository
if (global.document) {
  const info = [
    `Version: ${package_.version}`,
    `Find the code here: https://github.com/${package_.repository}`,
    `Have a great day! :)`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  document.location = `https://github.com/${package_.repository}`
  event.preventDefault()
}

export default ({ children }) => (
  <main onDoubleClick={viewSource}>
    <Head>
      <link rel="mask-icon" href="/static/curly-brackets.svg" color="#000000" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="icon" href="/static/touch-icon.png" type="image/png" />
      <link
        rel="stylesheet"
        href="/static/font-awesome/css/font-awesome.min.css"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta
        name="description"
        content="A thought or two about software and development."
      />
      <meta name="twitter:site" content={`@_mattmezza_`} />
    </Head>

    <script src="/static/analytics.google" />

    {children}

    <style jsx global>
      {`
      @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600');
      body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      html, body {
        height: 100%;
      }

      body > div:first-child,
      body > div:first-child > div:first-child,
      body > div:first-child > div:first-child > div {
        height: inherit;
      }

      main {
        padding: 30px;
        box-sizing: border-box;
        position: relative;
        min-height: 100%;
      }

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #4492ff;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #4492ff, 0 0 5px #4492ff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      @media (min-width: 768px) {
        main {
          padding: 45px;
        }
      }
    `}
    </style>
  </main>
)
