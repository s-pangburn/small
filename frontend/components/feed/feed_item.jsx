import React from 'react';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.story
    };
  }

  render() {
    const storyUrl = `/stories/${this.state.story.id}`;
    const date = new Date(this.props.story.created_at);

    return (
      <div className="feedItem">
        <div className="imageContainer">
          <Link to={ storyUrl }>
          {(this.props.story.image_url) ? (
                <img src={this.props.story.image_url}
                  alt={ this.state.story.title }/>
          ) : (
            <img src="http://res.cloudinary.com/dzeqeo9b3/image/upload/v1501015806/merrigo_clouds_k7n2k4.gif"
              style={{"filter": "grayscale(100%)"}}
              alt={ this.state.story.title }/>
          ) }
          </Link>
        </div>
        <section className="storyInfo">
          <section className="description">
            <Link to={storyUrl}>
              <h2>{ this.state.story.title }</h2>
            </Link>
            <Link to={storyUrl}>
              <span>{ this.state.story.description }</span>
            </Link>
          </section>
          <section className="author">
            <span>{this.state.story.author.username}</span>
            <br/>
            <span className="date">{
                `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
              }</span>
          </section>
        </section>
      </div>
    );
  }
}

export default FeedItem;
