import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    country:"in",
    category:"general",
    pageSize:5
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number,

  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fedc25b38974b92a49026d454c9a547&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
       articles: parsedData.articles,
       totalResults: parsedData.totalResults})
  }

  handlenextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
    } 
    else 
    {
      let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fedc25b38974b92a49026d454c9a547&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handleprevClick = async () => {
    let url =
       `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fedc25b38974b92a49026d454c9a547&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
      })
    
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">Top headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 99)
                        : "click on read more to see full news"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handleprevClick}
            >
              {" "}
              &larr; previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlenextClick}
            >
              next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
