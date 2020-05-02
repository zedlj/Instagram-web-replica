// src/components/Post/index.js
import React, { Component } from "react";
class Post extends Component {
  render() {
    return <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src="https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Chris" />
            </div>
            <div className="Post-user-nickname">
              <span>Chris</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>ZEDLJ</strong> yoyo
        </div>
      </article>;
    }
}
export default Post;