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
        <h1>Solving problems with design thinking and code</h1>
        <p className="description">
          Hi I'm Chris, a UX Engineer. I enjoy the design thinking process,
          creating high fidelity designs, and bringing them to life with code.
        </p>
      </div>
    </div>
  )
}

export default Hero
