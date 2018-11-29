//HOC === Higher Order Component === Decorator
import React from 'react'
// Барыжим оригинальный компонент для издевательств
export default (OriginalComponent) =>
  class AccordionComponent extends React.Component {
    // Что-то обнуляем в стейтах...
    state = {
      openItemId: null,
        CommentsItemId: null

    }
// Какая-то хрень которая меняет нам конопарик.
    toggleOpenItem = (id) => (ev) => {
      this.setState((state) => {
        return {
          openItemId: state.openItemId === id ? null : id
        }
      })
    }

      // Попробуем извратить копипаст
      toggleCommentsItem = (id) => (ev) => {
          this.setState((state) => {
              return {
                  CommentsItemId: state.CommentsItemId === id ? null : id
              }
          })
      }
// Рендерим обратно извращенный компонент...
    render() {
      return (
        <OriginalComponent
          {...this.props}
          commentsId={this.state.CommentsItemId}
          openItemId={this.state.openItemId}
          toggleCommentsItem={this.toggleCommentsItem}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
