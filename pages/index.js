// Components
import Link from 'next/link'
import FA from 'react-fontawesome'
import Title from '../components/title'
import { Image } from '../components/figure'

// Layouts
import Page from '../layouts/page'

const ReactRotatingText = require('react-rotating-text')
const shuffle = require('shuffle-array')

export default () => (
  <Page>
    <Title />

    <section>
      <div id="image">
        <Image src="/static/mattmezza.png" width={150} />
      </div>
      <h2>{`Hi. I'm`}</h2>
      <h1>Matteo</h1>
      <div id="what-I-am">
        &nbsp;
        <ReactRotatingText
          items={shuffle([
            ' Entrepreneur',
            ' Coder',
            ' Manager',
            ' Engineer',
            ' Mentor'
          ])}
          cursor={false}
          typingInterval={100}
          color={'#fff'}
        />
      </div>
    </section>

    <nav>
      <a href={`https://twitter.com/_mattmezza_`}><FA name="twitter" /></a>
      <a href={`https://facebook.com/matteo.merola`}><FA name="facebook" /></a>
      <a href={`skype://matteomerola?call`}><FA name="skype" /></a>
      <a href={`tel://+393409341277`}><FA name="phone" /></a>
      <a href={`https://telegram.me/mattmezza`}><FA name="telegram" /></a>
      <a href={`https://instagram.com/chiamamimatt`}><FA name="instagram" /></a>
      <a href={`https://linkedin.com/in/matteomerola`}>
        <FA name="linkedin" />
      </a>
      <a href={`https://soundcloud.com/OfficialMatt`}>
        <FA name="soundcloud" />
      </a>
      <a href={`mailto:matteo@merola.co`}><FA name="envelope" /></a>
      <a href={`https://github.com/mattmezza`}><FA name="github" /></a>
      <Link href="/thoughts" prefetch><a>My Thoughts 💭</a></Link>
    </nav>

    <style jsx global>
      {`
      #what-I-am span {
        background: #000;
        color: #fff;
        font-weight: 500;
        padding: 5px;
        margin-top: 15px;
        text-transform: uppercase;
        letter-spacing: .5em;
      }
    `}
    </style>
    <style jsx>
      {`
      #what-I-am {
        padding: 30px;
      }
      #image {
        margin: 0;
        padding: 0px;
      }
      #what-I-am, #image {
        width: 100%;
      }
      section h1 {
        font-size: 57px;
        right: 35px;
        top: 65px;
        font-weight: 400;
        margin: 0;
        position: absolute;
        padding-right: 35px;
        line-height: 1.2em;
        text-align: left;
      }

      section h1:focus {
        outline: none;
      }

      section h2 {
        font-size: 20px;
        right: 35px;
        top: 35px;
        font-weight: 200;
        margin: 0;
        position: absolute;
        padding-right: 35px;
        line-height: 30px;
        text-align: right;
      }

      section div {
        display: none;
      }

      nav {
        position: absolute;
        left: 25px;
        bottom: 27px;
      }

      nav a {
        text-decoration: none;
        color: #000;
        font-size: 16px;
        padding: 10px;
        display: block;
        cursor: pointer;
      }

      @media (min-width: 768px) {
        section {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          height: inherit;
          align-items: center;
          justify-content: center;
          align-content: center;
          user-select: none;
          cursor: default;
        }

        section h2 {
          position: relative;
          display: inline-block;
          left: auto;
          top: auto;
          padding-right: 0;
          font-size: 27px;
          font-weight: 300;
          padding-bottom: 0;
        }

        section h1 {
          position: relative;
          display: inline-block;
          left: auto;
          top: auto;
          padding-right: 0;
          font-size: 73px;
          font-weight: 400;
          padding-bottom: 0;
        }

        section div {
          display: block;
        }

        section h2 {
          margin: 8px 40px 0 0;
          display: inline-block;
          font-weight: 200;
        }

        nav {
          left: 30px;
          right: 30px;
          white-space: nowrap;
          text-align: center;
          bottom: 30px;
          font-size: 0;
        }

        nav a {
          font-size: 15px;
          padding: 4px 10px;
          color: #454545;
          display: inline-block;
          border-radius: 6px;
          margin: 0 5px;
          transition: all .2s;
        }

        nav a:hover {
          background: #efefef;
        }
      }

      @media (max-height: 390px) and (min-width: 768px) {
        nav {
          display: none;
        }
      }
    `}
    </style>
  </Page>
)
