import React from 'react';
import { Link } from 'react-router-dom';

import LikeButtonContainer from './like_button_container';
import UserControls from './user_controls';
import CommentIcon from './comment_icon';

class ControlsFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className="controls-footer">
          <LikeButtonContainer story={this.props.story}/>
          <div className="controls">
            <UserControls
              handleDelete={this.props.handleDelete}
              story={this.props.story}
              currentUser={this.props.currentUser}/>
            <CommentIcon />
          </div>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default ControlsFooter;
