import React from 'react'
import projects from '../constants/projects'
import { css } from '@emotion/react'

const Projects = () => {
  return (
    <div
      id="projects"
      css={css`
        padding: 0 1rem;
        max-width: var(--max-width);
        margin: 8rem auto;

        h2 {
          text-transform: capitalize;
        }

        p {
          text-transform: capitalize;
          color: var(--color-grey-2);
        }

        .project {
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-grey-1);
        }

        @media screen and (min-width: 768px) {
          p {
            font-size: 16px;
          }
        }

        @media screen and (min-width: 1000px) {
          .project a {
            display: flex;
            align-items: center;

            h2 {
              margin-right: 2rem;
              transition: var(--transition);

              &:hover {
                color: var(--color-primary);
              }
            }

            p {
              max-width: 200px;
            }
          }
        }
      `}
    >
      {projects.map(project => {
        return (
          <div className="project" key={project.id}>
            <a href={project.link}>
              <h2>{project.title}</h2>
              <p className="small-text">{project.subtitle}</p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
