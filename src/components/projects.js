import React from 'react'
import projects from '../constants/projects'
import { css } from '@emotion/react'

const Projects = () => {
  return (
    <div
      css={css`
        padding: 0 1rem;
        max-width: var(--max-width);
        margin: 0 auto;
        x h2 {
          text-transform: capitalize;
        }

        p {
          text-transform: capitalize;
          color: var(--color-grey-2);
        }

        #project {
          padding: 1rem 0;
          border-bottom: 1px solid var(--color-grey-1);
        }
      `}
    >
      {projects.map(project => {
        return (
          <div key={project.id} id="project">
            <h2>{project.title}</h2>
            <p className="small-text">{project.subtitle}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
