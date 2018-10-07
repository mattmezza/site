// Helpers
import isAbsolute from 'is-absolute-url'

// Components
import Link from 'next/link'

const isAnchor = href => href.charAt(0) === '#'

export default ({ href, children }) => (
  <span>
    {isAnchor(href) ? (
      <a href={href}>{children}</a>
    ) : isAbsolute(href) ? (
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    ) : (
      <Link href={href} prefetch>
        <a>{children}</a>
      </Link>
    )}

    <style jsx>
      {`
        a {
          color: #0033ce;
          text-decoration: none;
          border-bottom: 1px dashed currentColor;
        }
      `}
    </style>
  </span>
)
