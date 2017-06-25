// Layouts
import Post from '../../layouts/essay'

// Components
import P from '../../components/paragraph'
import Quote from '../../components/quote'
import Meta from '../../components/meta'
import HR from '../../components/hr'
import Link from '../../components/link'
import { InlineCode } from '../../components/code'

export default () => (
  <Post>
    <Meta id="developers-and-self-esteem" hasCover />

    <P>
      Ever since the beginning of time, developers are known for the
      {` "`}
      F**k you my code is better than yours
      {`" `}
      principle that is always valid no matter contexts, technologies or skills. And in some cases they are right cause there
      {`'`}
      s a lot of shitty code out there (and QA engineers would probably agree on this). We tend to start very early with this approach even though we should not.
    </P>

    <P>
      I have always wondered why we have such this attitude. It might be because we are so proud of our work that we truly believe we have the perfect solution.
    </P>

    <P>
      Being a developer requires strong abnegation and commitment. We could be programming a Tic-Tac-Toe command line game like
      {' '}
      (
      <Link href="https://github.com/mattmezza/tictactoe-cpp">this</Link>
      {' '}
      or a more complex system like
      {' '}
      (
      <Link href="https://github.com/myunimol/api">this</Link>
      ) but in both cases we are creating something that wasn
      {`'`}
      t there before, we are not replicating, we create new things. That
      {`'`}
      s what makes what we do so magical. We enrich this world with our software whether it is stupidly simple or insanely complex.
    </P>

    <P>
      Said this, I
      {`'`}
      m wondering where this exaggerated self-esteem comes from. I am looking back in time, when I began developing (the old good times!) I remember that I didn
      {`'`}
      t know github, didn{`'`}
      t know what an Open Source project was and I am quite sure I didn
      {`'`}
      t know that what I was programming probably already existed (and I am asking now, what if I knew that?!?!?!).
    </P>

    <P>
      I really consider Open Source software something that even neophytes should be aware of. It
      {`'`}
      s true that a neophyte doesn
      {`'`}
      t know shit about most of the libraries already available but the question here is
    </P>

    <Quote>
      Does a novice programmer need to know precisely how the OS works?
    </Quote>

    <P>
      I guess that the answer is clear. Most of the programming courses start by teaching the basics of programming languages using
      {' '}
      <InlineCode>C</InlineCode>
      {' '}
      or
      {' '}
      <InlineCode>C++</InlineCode>
      . Do learners know what
      {' '}
      <InlineCode>int main(int argc, char **argv)</InlineCode>
      {' '}
      stands for? Or do they know what the
      {' '}
      <InlineCode>{`&`}</InlineCode>
      {' '}
      in
      {' '}
      <InlineCode>scanf ({`"`}%d{`"`},{`&`}i);</InlineCode>
      {' '}
      is for? No. They just use it, as is, black box. On top of that black box they build their
      {' '}
      {`"`}
      awesome
      {`"`}
      {' '}
      shitty command line programs 😀
    </P>

    <P>
      What if we educate them with the basic notions of Open Source and
      {' '}
      {`"`}
      Don
      {`'`}
      t reinvent the wheel
      {`"`}
      . They could focus more on others
      {`'`}
      {' '}
      code and less on their own giving them the ability to create by using existing modules rather than re-writing everything from scratch. We learn not only by writing code but also and mainly by reading it! In this way we could actually reduce developers
      {`'`}
      {' '}
      self-esteem allowing them to improve existing code rather than creating new one.
    </P>

    <Quote>
      Stop the code pollution, please!
    </Quote>

    <P>
      We live in a perfect moment in time to do that, we
      {`'`}
      ve got free platform and tools that give us a very simple way to exchange ideas and works among each other and to start dialogs that lead to better communication and understanding.
    </P>

    <P>
      It
      {`'`}
      s a fact, look at the way the JS world has been ridiculously (and
      {' '}
      <Link href="http://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/">
        dangerously
      </Link>
      ) modularized into very small and open source packages that do stuff, each one with different responsibilities. It just works, you require that tiny little module that does that simple task you don
      {`'`}
      t want to code by yourself and you are done.
    </P>

    <Quote>
      Anyways, my code will always be the best code I
      {`'`}
      ve ever read bi***es! 🤘
    </Quote>
    <HR />
  </Post>
)
