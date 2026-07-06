import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <div style= {{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger"  >{source}</span>
          </div>
          <img src={!imageUrl ? "https://gray-wcax-prod.gtv-cdn.com/resizer/v2/XAWS4SDVJ5BFVKO5DUC5EY3LKQ.png?auth=16065c2b428f25b4d85575b045bebb64c33b0e1c60e11fed5f9eacf63553884a&width=1200&height=600&smart=true" : imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )

  }
}

export default NewsItem

