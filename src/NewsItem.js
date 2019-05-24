import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div className="news-item">
        <div className="news-item-image-wrap">
          <img
            className="news-item-image"
            alt="JackWhite"
            src={this.props.image}
          />
        </div>
        <h3 className="news-item-title">{this.props.title}</h3>
        <p className="news-item-content">{this.props.text}</p>
      </div>
    );
  }
}
