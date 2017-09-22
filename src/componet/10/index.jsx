import React, { Component } from 'react'

class LikeButton extends Component {
    constructor () {
      super()
      this.state = { isLiked: false }
    }
  
    handleClickOnLikeButton () {
        console.log(this.state.isLiked)
        this.setState({
          isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked)
    }
  
    render () {
      return (
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? '取消' : '点赞'} 👍
        </button>
      )
    }
  }

  export default LikeButton;