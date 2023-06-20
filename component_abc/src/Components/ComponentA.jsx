import React from 'react'
import { ComponentsB } from './ComponentsB'
import { ComponentsC } from './ComponentsC'

export const ComponentA = () => {
  return (
    <div>
        <ComponentsB/>
        <ComponentsC/>
    </div>
  )
}
