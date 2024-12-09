import React from 'react'
interface Props {
    name : string
}
const Btn = (props: Props) => {
  return (
    <div className="flex justify-center mt-10">
  <button className="bg-gray-200 md:w-1/5 my-6 text-black py-4 px-4 hover:bg-gray-600 hover:text-white">
    {props.name}
  </button>
</div>

  )
}

export default Btn