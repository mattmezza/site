// Layouts
import Essay from '../layouts/essay'

// Components
import Meta from '../components/meta'

export default options => content => () => (
  <Essay>
    <Meta {...options} />
    {content}
  </Essay>
)
