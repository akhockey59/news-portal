import React, { Component } from 'react';
import NewsUpdate from './newsUpdate';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './spinner';

export class News extends Component {
    static defaultTypes = {
        category: "general",
    }
    static propTypes = {
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }
    fetchArticles = async () => {
        this.props.setProgress(5);
        const url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=12`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        this.setState({
            page: this.state.page,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
        this.props.setProgress(100);
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        });
    }
    async componentDidMount() {
        await this.fetchArticles(this.state.page);
    }

    render() {
        return (
            <div className='container my-5'>
                <h2 className='text-center'>Top Headlines</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className='row'>
                        {this.state.articles.map((element, index) => {
                            if (!element) return null; // Check if element is undefined or null
                            return (
                                <div className='col-md-4' key={index}>
                                    <NewsUpdate
                                        title={element.title || "No title available"}
                                        description={element.description ? element.description.slice(0, 100) : "No description available"}
                                        newsUrl={element.url || "#"}
                                        imageUrl={element.urlToImage || "https://via.placeholder.com/150"}
                                        date={element.publishedAt ? element.publishedAt.slice(0, 10) : "date not specified"}
                                        author={element.author}
                                        source={element.source ? element.source.name : "unknown source"}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>
                <div className="container d-flex justify-content-between">
                </div>
            </div>
        );
    }
}

export default News;
