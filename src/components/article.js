import React from 'react'

function Article(props) {
  const { article, isOpen, toggleOpen, isComment} = props
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}

    </div>
  )
}

function getBody({ isOpen, article, commentsOpen, isComment }) {
  if (!isOpen) return null

    return <section>{article.text}
        <p></p>
        <button onClick={commentsOpen}>Комментарии</button>
        {getComments({article}, isComment)}</section>
}

// Функция  проверки/получения комментариев
function getComments({article}, isComment) {
    if (article.comments) {
        if (article.comments.length === 0 || !isComment) return null

        return <section>{getCommentsContent(article.comments)}</section>
    }
    else{
        return null
    }
}
// Формируем содержимое постов
function getCommentsContent(comments) {

  return   comments.map((item) => (
      <li key={item.id}>
          <b>{item.user}:</b>{item.text}
          </li>))




}

export default Article
