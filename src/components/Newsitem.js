import React, { Component } from "react";

export default class Newsitem extends Component {
  
  

    
  render() {


    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://static01.nyt.com/images/2021/11/08/business/08starbucks/08starbucks-facebookJumbo.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}
