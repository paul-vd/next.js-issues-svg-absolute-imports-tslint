// import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
// import { Input } from 'antd'

// import CowsayHi from 'components/cowsay'
import ImageExamples from 'components/ImageExamples'

const Container = styled.div`
  padding: 20px;
  hr {
    margin: 30px 0px;
    opacity: 0.4;
  }
`

function Home() {
  // const [myHook, setMyHook] = useState('Cow')

  // const changeMyHook = (e: any) => {
  //   setMyHook(e.target.value)
  // }
  return (
    <Container>
      {/* <Input onChange={changeMyHook} placeholder='why not test out the hook?' /> */}
      {/* <hr /> */}
      {/* Welcome to {myHook}! */}
      {/* <hr /> */}
      {/* <CowsayHi text={myHook} /> */}
      {/* <hr /> */}
      <ImageExamples />
    </Container>
  )
}

export default Home
