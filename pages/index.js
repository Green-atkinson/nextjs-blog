  import Head from 'next/head';
  import Layout, { siteTitle } from '../components/layout';
  import utilStyles from '../styles/utils.module.css';
  import { getSortedPostsData } from '../lib/posts';

  export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

  export default function Home({ allPostsData }) {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
          <section className={utilStyles.headingMd}>
            <p>
              Hey, I'm John! I'm a Computer Science and Advertising major at the University of Georgia. As an Eagle Scout, Ron Brown SC, and MLT SWE Fellow, I'm passionate about using tech to positively impact products and people around the world. One unique thing about me is I practice Brazillian Jujitsu in my free time.
            </p>
            <p>
              A little more about me...
            </p>
            
            <p>
              My interest in tech grew tremendously when I was a Harvard summer student, where I took the opportunity to interview computer engineers working on deep-sea explorers. Since then, I've been actively involved in the tech community, serving as the Logistics and Marketing organizer for my university's flagship hackathon. In this role, I helped grow our $40,000 organization to have the most pre-registration attendees to date. I'm proud to say that we also held the first event centered around sustainability.
            </p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      </Layout>
    );
  }