import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'
class ArticleList extends Component {
  setListRef = (ref) => {
    this.list = ref
    console.log('---', 'list: ', ref)
  }

  render() {
    return <ul ref={this.setListRef}>{this.articleItems()}</ul>
  }
// Какая-то недоступная для меня магия реакта...
  articleItems() {
    const { articles, openItemId, toggleOpenItem, toggleCommentsItem, commentsId } = this.props
      console.log(this.props)
      return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          isComment={commentsId === article.id}
          toggleOpen={toggleOpenItem(article.id)}
          commentsOpen={toggleCommentsItem(article.id)}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)
