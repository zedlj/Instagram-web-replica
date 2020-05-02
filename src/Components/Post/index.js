// src/components/Post/index.js
import React, { Component } from "react";
import "./Post.css";
import Everest from "./everest.jpg"
import Girl from "./girl.jpg"

class Post extends Component {
  render() {
    return <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={ Girl } alt="img error" />
            </div>
            <div className="Post-user-nickname">
              <span>zedlj</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img src={Everest} alt="img error"/>
          </div>
        </div>
        <div className="Post-caption">
          <strong>zedlj</strong>  Mt. Everest
        </div>
      </article>;
    }
}
export default Post;