import P from './paragraph'
import { UL, OL, LI } from './list'
import Link from './link'
import Quote from './quote'
import { Image } from './figure'
import HR from './hr'
import { H1, H2, H3, H4 } from './heading'

export default {
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  a: Link,
  hr: HR,
  blockquote: Quote,
  img: Image,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4
}
