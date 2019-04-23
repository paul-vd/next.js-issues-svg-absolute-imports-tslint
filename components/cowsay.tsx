import React from 'react'
import cowsay from 'cowsay-browser'

const typedcowsay: any = cowsay

type TCowsayHi = {
  text: string
}

const codeStyle = {
  overflow: 'scroll',
  background: '#e8e8e8',
  padding: '20px',
  width: '100%',
}

function CowsayHi(props: TCowsayHi) {
  return (
    <pre>
      {typedcowsay.say({ text: `Hi from the ${props.text}!` })} <br />
    </pre>
  )
}

export default CowsayHi
