import React from 'react'
import styled from 'styled-components'

// import Absolute_CatSVG from 'svg/cat.svg'
import Absolute_Photo from 'images/pexels-photo.jpg'

import Relative_CatSVG from '../assets/svg/cat.svg'
import Relative_Photo from '../assets/images/pexels-photo.jpg'

const Wrapper = styled.div`
  display: flex;

  border: 1px dashed gray;
  article {
    padding: 10px;
  }
  pre {
    position: relative;
    display: block;
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    overflow-x: auto;
    white-space: pre-wrap;
    border-radius: 0.25rem;
    background-color: rgba(206, 17, 38, 0.05);
    margin-bottom: 280px;
  }
`

function ImageExamples() {
  return (
    <>
      <Wrapper>
        <div>
          <article>
            <h1>Absolute Paths</h1>
            <p>
              <strong>SVG</strong>:
            </p>
            <hr />
            {/* <Absolute_CatSVG /> */}
            <small>EXAMPLE ERROR:</small>
            <pre>
              <code>
                <span data-ansi-line='true'>
                  <span>./components/ImageExamples.tsx</span>
                </span>
                <br />
                <span data-ansi-line='true'>
                  <span>Error: Cannot find module 'svg/cat.svg' from '{'{LOCAL_PATH}'}/next/components'</span>
                </span>
              </code>
            </pre>
          </article>
          <article>
            <p>
              <strong>JPG</strong>:
            </p>
            <hr />
            <img src={Absolute_Photo} />
          </article>
        </div>
        <div>
          <article>
            <h1>Relative Paths</h1>
            <p>
              <strong>SVG</strong>:
            </p>
            <hr />
            <Relative_CatSVG />
          </article>
          <article>
            <p>
              <strong>JPG</strong>:
            </p>
            <hr />
            <img src={Relative_Photo} />.
          </article>
        </div>
      </Wrapper>
    </>
  )
}

export default ImageExamples
