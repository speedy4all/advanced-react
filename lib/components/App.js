import React, { Component } from 'react';
import ArticleList from './ArticleList';

export default class App extends Component {
  state = this.props.store.getState();

  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);

  //   this.setState(() => {
  //     return {
  //       articles: api.getArticles(),
  //       authors: api.getAuthors()
  //     };
  //   });
  // }
  

  // articleActions = {
  //   lookupAuthor: (authorId) => this.state.authors[authorId]
  // }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}