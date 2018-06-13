import React, { Component } from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        this.getDate = this.getDate.bind(this);

    }

    getDate(time){
        const utcSeconds = time;
        var timestamp = new Date(0); // The 0 there is the key, which sets the date to the epoch
        timestamp.setUTCSeconds(utcSeconds);
        console.log(timestamp);
        
        return String(timestamp);
    }

    render(){
        return(
            <div>
                <p>
                    <b>Title:</b> {this.props.article.title}
                <br/>
                    <b>Time:</b> {this.getDate(this.props.article.time)}
                <br/>
                    <b>Score:</b> {this.props.article.score}
                </p>

                <a href={this.props.article.url}>{this.props.article.url}</a>
                <iframe title='article' src={this.props.article.url} width="100%" height="600px"></iframe>
                {/* <ul>
                    <li>{this.props.article.title}</li>
                    <li>{this.props.article.time}</li>
                    <li>{this.props.article.score}</li>
                    <li>{this.props.article.url}</li>
                    <iframe title='article' src={this.props.article.url} width='100%' height='500px'></iframe>
                </ul> */}
            </div>
        )
    }
}

export default Article;