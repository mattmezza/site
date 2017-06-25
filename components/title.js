// Components
import Head from 'next/head'
import general from '../data/general'

export default ({ value }) => (
  <Head>
    <title>{value ? `${value} — ${general.suffix}` : general.suffix}</title>
  </Head>
)
