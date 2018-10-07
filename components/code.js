// Components
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/dist/light'

// Helpers
import { Component } from 'react'
import { github } from 'react-syntax-highlighter/styles/hljs'

const styles = {
  margin: '30px 0',
  padding: '14px',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
  wordWrap: 'normal',
  fontSize: '14.4px',
  lineHeight: '1.5em',
  WebkitOverflowScrolling: 'touch',
  fontFamily:
    'Menlo, Monaco, Lucida Console, Liberation Mono, Courier New, monospace, serif'
}

class Code extends Component {
  constructor(props) {
    super(props)

    if (!props.language || !props.syntax) {
      throw new Error('Please define the `language` and `syntax`')
    }

    registerLanguage(props.language, props.syntax)
  }

  render() {
    return (
      <SyntaxHighlighter
        language={this.props.language}
        style={github}
        customStyle={styles}
      >
        {this.props.children}
      </SyntaxHighlighter>
    )
  }
}

const InlineCode = ({ children }) => (
  <code>
    {children}

    <style jsx>
      {`
        code {
          background: #f3f3f3;
          padding: 2px 4px;
          border-radius: 3px;
          font-size: 0.85em;
          color: #3a3a3a;
          hyphens: none;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            Courier New, monospace, serif;
        }
      `}
    </style>
  </code>
)

export { Code, InlineCode }
