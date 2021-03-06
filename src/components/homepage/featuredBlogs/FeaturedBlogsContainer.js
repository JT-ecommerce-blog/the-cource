import React, { Component } from 'react';

import blogImageOne from "../../../assets/images/blogImageOne.png";
import blogImageTwo from "../../../assets/images/blogImageTwo.png";
import blogImageThree from "../../../assets/images/blogImageThree.png";

class FeaturedBlogContainer extends Component {
  render() {
    return (
      <div id="homepage-bucketone">
        <div className="homepage-bucketone-container">
          <div className="blog-box">
            <div className="blog-title">
              <h4>Blog Title</h4>
            </div>
            <div className="blog-image">
              <img src={blogImageOne} alt="" />
              <a href="/">read post</a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-title">
              <h4>Blog Title</h4>
            </div>
            <div className="blog-image">
              <img src={blogImageTwo} alt="" />
              <a href="/">read post</a>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-title">
              <h4>Blog Title</h4>
            </div>
            <div className="blog-image">
              <img src={blogImageThree} alt="" />
              <a href="/">read post</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FeaturedBlogContainer;