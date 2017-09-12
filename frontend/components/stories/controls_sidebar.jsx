import React from 'react';
import { Link } from 'react-router-dom';

import LikeButtonContainer from './like_button_container'

class ControlsSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <aside className="sidebar">
          <LikeButtonContainer story={this.props.story}/>
          <div className="controls">
            { this.props.currentUser.username === this.props.story.author.username ? (
              <section className="user-controls">
                <Link to={`/stories/${this.props.story.id}/edit`}>
                  <img width="32" src="http://vinsol.com/themes/vinsoldotcom-theme/images/new_img/launch-icons/icon-edit.png" />
                </Link>

                <div onClick={this.props.handleDelete}>
                  <img width="38" src="http://www.icon2s.com/img128/128x128-black-white-metro-delete-icon.png" />
                </div>
              </section>
            ) : null }
          </div>
        </aside>
      )
    } else {
      return null;
    }
  }
}

export default ControlsSidebar;
