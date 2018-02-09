import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import CommentsContainer from '../comments/comments_container';
import AuthorWidget from '../users/author_widget';
import StoryHeader from './story_header';
import ControlsSidebar from './controls_sidebar';
import ControlsFooter from './controls_footer';

class StoryView extends React.Component {
  componentDidMount() {
    this.props.requestStory(this.props.match.params.storyId);
    this.props.requestAllComments();
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.props.resetErrors();
    window.removeEventListener('scroll', this.handleScroll);
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll() {
    const storyHeight = document.getElementById('body').clientHeight;

    if ($(document).scrollTop() > storyHeight) {
      this.setState({ sidebar: false });
    } else {
      this.setState({ sidebar: true });
    }
  }

  render() {
    let sidebarClass = "";
    if (!this.state.sidebar) {
      sidebarClass = "fade-out"
    }

    if (this.props.story) {
      return (
        <div>
          <section className="story">
              <ControlsSidebar
                sidebarClass = {sidebarClass}
                currentUser={this.props.currentUser}
                story={this.props.story}
                storyLikes={this.props.storyLikes}
                handleDelete={this.handleDelete}/>

            <StoryHeader story={this.props.story} />

            <section className="body" id="body" style={{"whiteSpace": "pre-wrap"}}>
              {ReactHtmlParser(this.props.story.body)}
            </section>

            <ControlsFooter
              currentUser={this.props.currentUser}
              story={this.props.story}
              storyLikes={this.props.storyLikes}
              handleDelete={this.handleDelete}/>

            <AuthorWidget
              author={this.props.story.author}
              date={this.props.story.created_at}
              loggedIn={this.props.loggedIn}
              currentUser={this.props.currentUser}
              story={this.props.story}
              handleDelete={this.handleDelete} />

          </section>
          <CommentsContainer storyId={this.props.story.id} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
