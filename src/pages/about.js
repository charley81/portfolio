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
              I'm Chris Harley, a UX Engineer with expertise in frontend web
              development, the Jamstack, Gatsby, and headless CMS's. I
              specialize in designing and implementing user-centric interfaces
              that are visually appealing, fast, accessible, and inclusive. With
              a strong understanding of the design process, I collaborate
              closely with UX/UI designers and other stakeholders to create
              seamless user experiences.
            </p>
            <br />
            <p>
              As a UX Engineer, I bring a unique blend of frontend web
              development skills, expertise in modern technologies, and a deep
              understanding of the design process. I am proficient in using
              HTML5, CSS3, JavaScript, and React, and have hands-on experience
              with Gatsby and integrating headless CMS's. I am passionate about
              creating exceptional user experiences and solving complex problems
              through innovative and user-centric solutions.
            </p>
            <br />
            <p>
              I’m currently looking to join an amazing team as a UX Engineer.
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
          <a href="/resume.pdf" target="_blank" className="resume-link">
            Resume
          </a>
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
