import React from 'react'
import { connect } from 'react-redux'
import { input } from '../actions'

let Input = ({ dispatch }) => {
  let message

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!message.value.trim()) {
            return
          }
          dispatch(input(message.value))
          message.value = ''
        }}
      >
        <input
          ref={node => {
            message = node
          }}
         placeholder="enter message here..."
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
Input = connect()(Input)

export default Input
