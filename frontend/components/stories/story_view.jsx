import React from 'react';
import { Link } from 'react-router-dom';

import CommentsContainer from '../comments/comments_container';
import AuthorWidget from '../users/author_widget';
import StoryHeader from './story_header'

class StoryView extends React.Component {
  componentDidMount() {
    this.props.requestStory(this.props.match.params.storyId);
    this.props.requestAllComments();
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.resetErrors();
  }

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteStory(this.props.story.id)
      .then(
        story => this.props.history.push({pathname: "/"}),
        ( { errors } ) => {
          alert(errors);
          this.props.resetErrors();
        }
      );
  }

  render() {
    if (this.props.story) {
      return (
        <div>
          <section className="story">

            <StoryHeader story={this.props.story} />

            <section className="body" style={{"whiteSpace": "pre-wrap"}}>
              <p>{this.props.story.body}</p>
            </section>

            <AuthorWidget
              author={this.props.story.author}
              date={this.props.story.created_at}
              loggedIn={this.props.loggedIn}
              currentUser={this.props.currentUser}
              story={this.props.story}
              handleDelete={this.handleDelete}
            />

          </section>
          <CommentsContainer storyId={this.props.story.id}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
