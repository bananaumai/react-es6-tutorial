import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>comments</h2>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}
