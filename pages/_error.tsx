import React from 'react'
import Error from 'next/error'

class CustomError extends Error {
  render() {
    return <div>Your Error page</div>
  }
}

export default CustomError
