import React from "react"

export interface ComponentProps {
  heading: string;
}

const SectionHeading = (props: ComponentProps) => { 
  return (
    <>
      Hello World - This is a Section Heading Component
    </>
  )
}

export default SectionHeading