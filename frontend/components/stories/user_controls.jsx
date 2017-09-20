import React from "react";
import { Link } from 'react-router-dom';


class UserControls extends React.Component {
  render() {
    if (this.props.currentUser.username === this.props.story.author.username) {
      return (
        <section className="user-controls">
          <Link to={`/stories/${this.props.story.id}/edit`}>
            <img
              width="32"
              src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191435/icon-edit_bazn9m.png" />
          </Link>

          <div onClick={this.props.handleDelete}>
            <img
              width="34"
              style={{"marginLeft":"-1px"}}
              src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191442/icon-delete_wl8nyx.png" />
          </div>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default UserControls;
