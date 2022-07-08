import React from 'react'
import { Layout, Button } from '../components'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout>
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

          .image {
            background: var(--color-dark);
            border-radius: var(--border-radius);
          }
        `}
      >
        <div className="info">
          <div className="paragraphs">
            <p>
              I’m currently trying to become the best front-end developer that I
              can be by working daily algorithmic challenges and building
              applications with React. I’ve recently graduated from a UX
              bootcamp in June 2022 and a full stack coding bootcamp back in
              2000. With the combination of both I’m able to conduct the full
              product life cycle from identifying the correct problem to solve
              to deploying the final product.
            </p>
            <br />
            <p>
              My passion is designing and develop beautiful interfaces. I enjoy
              solving user problems with pixel perfect designs and then bringing
              those designs to life with modern web technologies like React and
              React frameworks like Gatsby and Next.{' '}
            </p>
            <br />
            <p>
              I was in the U.S. Army for ten years and jumped out of planes for
              eight of those years. I loved every minute of it but unfortunately
              that takes a toll on your body and I decided to get out and finish
              my degree in music business from Berklee College of Music. After a
              couple of years of working manufacturing and running a recording
              studio out of my basement I decided to look for a different career
              that I would love, would be able to express my creativity, and
              would provide a great life for my family and I, which led me to
              software engineering.{' '}
            </p>
            <br />
            <p>
              I’m currently looking to join a team as a front-end developer /
              visual designer. Feel free to contact me, id love to chat:{' '}
              <a
                href="mailto:chrisharley81@gmail.com"
                className="email"
                target="_blank"
              >
                chrisharley81@gmail.com{' '}
              </a>
            </p>
          </div>
          <Button text="resume" />
        </div>
        <div className="image-section">
          <StaticImage
            src="../images/about-img.png"
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
