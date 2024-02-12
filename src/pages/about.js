import React from 'react'
import { Layout, Seo } from '../components'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout>
      <Seo
        title="About Page"
        description="About Chris Harley Front End Developer based in Charlotte NC"
      />
      <section
        css={css`
          padding: 1rem;
          font-weight: 400;

          .paragraphs {
            margin-bottom: 1rem;
          }

          .info {
            margin-bottom: 4rem;
          }

          .email {
            color: var(--color-primary);
          }

          .resume-link {
            display: block;
            padding: 1rem 2rem;
            background: var(--color-dark);
            color: var(--color-light);
            text-align: center;
            font-size: 1rem;
            font-style: inherit;
          }

          .image {
            background: var(--color-dark);
            border-radius: var(--border-radius);
          }

          @media screen and (min-width: 1000px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            max-width: 1000px;
            margin: auto;
          }
        `}
      >
        <div className="info">
          <div className="paragraphs">
            <p>
              Hi, I'm Chris Harley. I'm a frontend developer and love working in
              JavaScript, specifically using TypeScript, React, and headless
              content management systems. I have experience in UX design and
              enjoy solving problems for users through human-centered design,
              and bringing those concepts to life with code.
            </p>
            <br />
            <p>
              Recently, I've been delving into NextJS, exploring its latest
              features and patterns, as well as familiarizing myself with
              Tailwind CSS and reusable UI component libraries like Shadcn. I'm
              passionate about building modern websites that are not only
              blazingly fast and secure but also deliver a superb user
              experience while strictly adhering to all accessibility standards.
            </p>
            <br />
            <p>
              Feel free to contact me, id love to chat:{' '}
              <a
                href="mailto:chrisharley81@gmail.com"
                className="email"
                target="_blank"
                rel="noreferrer"
              >
                chrisharley81@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="image-section">
          <StaticImage
            src="../images/about.png"
            alt="Chris Harley Bio Image"
            layout="fullWidth"
            placeholder="tracedSVG"
            class="image"
          />
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
