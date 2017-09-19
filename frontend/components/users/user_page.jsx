import React from 'react';

class UserPage extends React.Component {
  render() {
    const date = new Date(this.props.date);
    return (
      <div className="userInfo">
        <img className="avatar"
          src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png"/>
        <div>
          <span className="username link">{this.props.author.username}</span><br/>
          <span className="date">{date.toDateString()}</span>
        </div>
      </div>
    )
  }
}

export default UserPage;
