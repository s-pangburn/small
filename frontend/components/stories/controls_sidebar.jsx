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
                  <img
                    width="32"
                    src="http://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191435/icon-edit_bazn9m.png" />
                </Link>

                <div onClick={this.props.handleDelete}>
                  <img
                    width="34"
                    style={{"marginLeft":"-1px"}}
                    src="http://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191442/icon-delete_wl8nyx.png" />
                </div>
              </section>
            ) : null }
            <img
              width="32"
              src="http://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191447/icon-comment_mg6xzj.png" />

          </div>
        </aside>
      )
    } else {
      return null;
    }
  }
}

export default ControlsSidebar;
