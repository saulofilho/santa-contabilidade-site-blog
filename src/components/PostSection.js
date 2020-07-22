import React from 'react'

import PostCard from '../components/PostCard'
import './PostSection.css'
import AdCard from '../components/AdCard'
import './PostSection.css'

class PostSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'VER MAIS',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { posts, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visiblePosts = posts.slice(0, limit || posts.length)

    return (
      <div className="post-section">
        {title && <h2>{title}</h2>}
        {!!visiblePosts.length && (
          <div className="post-section-wrapper">
            {visiblePosts.map((post, index) => 
              post.status == "Ad" 
              ? <AdCard key={post.title + index} {...post} /> 
              : <PostCard key={post.title + index} {...post} />
              )}
          </div>
        )}
        {showLoadMore && visiblePosts.length < posts.length && (
          <div className="ver-mais">
            <button onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default PostSection
