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
      <Link to={ storyUrl }>
      <div className="feedItem">
        <div className="imageContainer">
          {(this.props.story.image_url) ? (
                <img src={this.props.story.image_url}
                  alt={ this.state.story.title }/>
          ) : (
            <p className="storyPreview"
              style={{"whiteSpace": "pre-wrap"}} >
              {this.props.story.body}
            </p>
          ) }

        </div>

        <section className="storyInfo">

            <section className="description">

                <h2>{ this.state.story.title }</h2>
                <span>{ this.state.story.description }</span>

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
    </Link>
    );
  }
}

export default FeedItem;
