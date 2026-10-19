import React from 'react'
import { createContext } from 'react'

export const PostDataContext = createContext()

const ThemeContext = (props) => {

  return (
    <div>
        <PostDataContext.Provider value='SHUBH'>
            {props.children}
        </PostDataContext.Provider>
    </div>
  )
}

export default ThemeContext