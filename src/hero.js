import React from 'react'
import { css } from '@emotion/react'
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <div
      css={css`
        height: 100vh;
        padding: 0 1rem;
        max-width: var(--max-width);
        margin: 0 auto;

        p {
          margin-top: 1rem;
          color: var(--color-grey-2);
        }

        .scroll-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
        }
      `}
    >
      <h1>Solving problems with design thinking and passion</h1>
      <p>
        I am Chris, a UX/UI designer, developer, audio engineer & producer. I
        enjoy designing for the user and creating pixel perfect designs. I
        consider myself a fullstack designer and love designing, building, and
        deploying websites
      </p>
      <div className="scroll-section">
        <p>scroll</p>
        <FiChevronDown />
      </div>
    </div>
  )
}

export default Hero
