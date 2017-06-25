// Helpers
import moment from 'moment'

// Components
import Link from 'next/link'
import Title from '../components/title'
import Back from '../components/back'

// Layouts
import Page from '../layouts/page'

// Other
import posts from '../data/thoughts'

const parseDate = date => moment(date, 'DD-MM-YYYY')

// Assign a URL to each post and
// sort them by date (most recent one first)
const preparePosts = () =>
  posts
    .map(post =>
      Object.assign(
        {
          url: `/${parseDate(post.date).year()}/${post.id}`
        },
        post
      )
    )
    .sort((a, b) => parseDate(b.date).diff(parseDate(a.date)))

export default () => (
  <Page>
    <Title />

    <h1>{`My Thoughts`}</h1>
    <Back />

    <ul>
      {preparePosts().map(post => (
        <li key={post.id}>
          <Link href={post.url} prefetch>
            <a>
              <b>{post.title}</b>
              <span>{parseDate(post.date).format('MMMM Do YYYY')}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
      ul {
        margin: 0;
        padding: 0 0 10px 0;
        list-style: none;
      }

      li {
        margin: 25px 0;
        text-decoration: none;
      }

      li:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: none;
        display: block;
      }

      b {
        color: #000;
        font-size: 17px;
        display: inline-block;
        font-weight: normal;
        line-height: 21px;
      }

      span {
        display: block;
        color: #c1c1c1;
        font-size: 13px;
        margin-top: 4px;
      }

      h1 {
        margin: 5px 0 40px 0;
        font-size: 35px;
        font-weight: 300;
      }

      @media (min-width: 768px) {
        a {
          display: inline-block;
        }

        span {
          display: inline-block;
          margin-left: 20px;
        }

        b {
          color: #5a5a5a;
          font-size: 16px;
        }

        ul {
          padding-bottom: 0;
        }

        a:hover b {
          color: #000;
        }

        h1 {
          font-size: 40px;
          margin-top: 0;
        }
      }

      @media (min-width: 992px) {
        span {
          opacity: 0;
        }

        li {
          margin: 22px 0;
        }

        a:hover span {
          opacity: 1;
        }
      }
    `}
    </style>
  </Page>
)
