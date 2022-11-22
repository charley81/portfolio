import React from 'react'
import { css } from '@emotion/react'

const Hero = () => {
  return (
    <div
      css={css`
        padding: 0 1rem;
        max-width: var(--max-width);
        margin: 0 auto;

        .description {
          margin-top: 1rem;
          color: var(--color-grey-2);
        }

        .scroll-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;

          .description {
            text-transform: uppercase;
          }
        }

        @media screen and (min-width: 768px) {
          .scroll-section {
            p {
              font-size: 16px;
            }
          }
        }
      `}
    >
      <div className="wrap">
        <h1>Solving problems with design thinking and passion</h1>
        <p className="description">
          I am Chris, a UX/UI designer, developer, audio engineer & producer. I
          enjoy designing user interfaces and bringing them to life with code.
        </p>
      </div>
    </div>
  )
}

export default Hero
