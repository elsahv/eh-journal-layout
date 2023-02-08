import Head from "next/head";
import Link from "next/link";
import sanityClient from "../utils/client";
import Aside from "../components/Aside";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";

// STYLES
export const IndexGrid = styled.div`
  display: grid;
  grid-template-areas: "ls rs rs rs ";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const IndexContainer = styled.div`
  background: #fff;
  // opacity: 0.9;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-left: solid 1px #000;
  border-bottom: solid 1px #000;
  @media only screen and (max-width: 1024px) {
  padding: 60px 10px 0px 20px;
  }
  }

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-bottom: none;
    padding: 50px 0 0 7px;
  }
`;

export const WebsitesGrid = styled.div`
  opacity: 0.9;
  // background: teal;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3em;

  @media only screen and (max-width: 1024px) {
    padding: 20px 30px 0 0;
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
  @media only screen and (max-width: 834px) {
    padding: auto;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px;
    grid-gap: 3em;
  }
`;
// END STYLES

const Home = ({ websites }) => {
  return (
    <>
      <Head>
        <title>Elsa Hovey | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <IndexGrid>
          <Aside />
          <IndexContainer>
            <section className="section-spacing">
              <h2 className="title">Latest Designs</h2>
              {/* <p>
                - Welcome to my portfolio!
                For the last couple years, {"I've"} gained an interest in
                programming using Javascript and Javascript frameworks. Along
                with my passion for learning unique web designs, I have built
                (and am currently building!) a few different websites. My most
                ambitious project involves building a web design side hustle for
                <a href="https://writingtobetterhealth.com">
                  Dietitans/Nutritionists.
                </a>
              </p> */}

              <p>
                - Listed below are some of my more complete featured projects,
                you can also see the code for my other projects
                <a href="https://github.com/elsahv">in progress.</a>I am always
                looking for opportunities to further my skills, and work with
                other like minded people in tech. If you would like to contact
                me can reach me
                <Link href="/#contact">here.</Link>
              </p>
              <WebsitesGrid>
                {websites &&
                  websites.map((website, index) => (
                    <span key={index}>
                      <Card website={website} />
                    </span>
                  ))}
              </WebsitesGrid>
            </section>

            <section className="section-spacing">
              <h2 className="title">Contact</h2>
              <p>
                Has my portfolio piqued your interest? If so, you can reach me
                at devdesignsbyelsa@gmail.com, or simply fill out the form
                below!
              </p>
              <p style={{ paddingTop: "15px" }}>
                Looking forward to hearing from you!
              </p>
              <ContactForm />
            </section>
          </IndexContainer>
        </IndexGrid>
      </motion.div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const websites = await sanityClient.fetch(query);
  if (!websites.length) {
    return {
      props: {
        websites: [],
      },
    };
  } else {
    return {
      props: {
        websites,
      },
    };
  }
};
