import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import News from './Components/news.js';
import Article from './Components/article';

class App extends Component {
  constructor(){
    super();
    this.state = {
      article: null,
      data: null,
      render: false,
    }
    this.setArticle = this.setArticle.bind(this);
  }

  setArticle(article){
    this.setState({article: article})
    console.log('App ARTICLE');
    
  }
  
  componentDidMount() {
    let articles = [];

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then(res => res.map((article, index)=>{
      fetch(`https://hacker-news.firebaseio.com/v0/item/${article}.json?print=pretty`)
      .then(res => res.json())
      .then(json => {
        articles.push(json);
        this.setState({data: articles });
        if (!this.state.render) {
          this.setState({article: articles[0] });
        }
        // console.log(this.state.data);
        this.setState({ render:  true });
      })
    }))
    .catch(err => console.log(err));
  }
  
  render() {
    if (this.state.render === false) {
      return <h1>loading</h1>
    } else {
        return (
          <div className="App">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <h1>Welcome to Hacker News React!</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h2>Top Stories</h2>
                  <div className="text-left story">
                    <News data={this.state.data} setArticle={this.setArticle}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2>Article</h2>
                  <div className="text-left story article">
                    <Article article={this.state.article} />
                  </div>
                </div>
              </div>
            </div>          
          </div>
        );
    }
  }
}

export default App;
