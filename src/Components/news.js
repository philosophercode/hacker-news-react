import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.getArticle = this.getArticle.bind(this);
    }

    getArticle(article, e){
        console.log('Parameter', article);
        console.log('Event', e);
        this.props.setArticle(article)
    }



    render(){
        // console.log(this.props.data);
        return (
            this.props.data.map((article, index)=>{
                return(
                    <ul className="text-left" key={index}>
                        <li onClick={(e) => this.getArticle(this.props.data[index], e)}>{this.props.data[index].title}</li>
                        {/* <li>{this.props.data[index].score}</li>
                        <li><a href={this.props.data[index].url}>{this.props.data[index].url}</a></li> */}
                    </ul>
                )
            })
        );
    }
}

export default News;