import React from 'react';
import LikeButtonContainer from './like_button_container'

class ControlsSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="sidebar">
        <LikeButtonContainer story={this.props.story}/>
        <img width="32" src="http://vinsol.com/themes/vinsoldotcom-theme/images/new_img/launch-icons/icon-edit.png" />
        <img width="38" src="http://www.icon2s.com/img128/128x128-black-white-metro-delete-icon.png" />
      </aside>
    )
  }
}

export default ControlsSidebar;
