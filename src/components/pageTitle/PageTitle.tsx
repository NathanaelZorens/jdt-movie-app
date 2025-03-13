import React from 'react'

interface titleProps{
    title: string
}

const PageTitle:React.FC<titleProps> = ({title}) => {
  return (
    <div>
        <h1 className="text-5xl text-center font-medium mx-5 my-10 font-pacifico"> {title}</h1>
    </div>
  )
}

export default PageTitle
