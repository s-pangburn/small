import React from 'react';

class commentUserInfo extends React.Component {
  render() {
    return (
      <div className="userInfo">
        <img className="avatar"
          src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png"/>
        <div>
          <span className="username link">{this.props.authorName}</span><br/>
          <span className="date">{this.props.date}</span>
        </div>
      </div>
    )
  }
}

export default commentUserInfo;
