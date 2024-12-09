import React from 'react'

interface Props {
    name : string
}

const Heading = (props: Props) => {
  return (
    <div>
        <h1 className='text-4xl font-semiboldbold px-20 py-4'>
{props.name}
        </h1>
    </div>
  )
}

export default Heading