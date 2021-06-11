import React, { Component } from 'react'

class Contact extends Component {


  render() {
    return (
      <div>
        This is my Contact component
        <a
          className="App-link"
          href="https://github.com/Alec-Scully"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alec-scully/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://scully-alec.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div >
    )
  }
}

export default Contact