import React from 'react';
import { Link } from 'react-router-dom';

class AuthorWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.author.name,
      description: this.props.author.description,
      date: this.props.date
    };
  }
}
