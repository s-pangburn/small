import React from 'react';

class StoryHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  generateArtistCredit() {
    // TODO: Add figcaption to credit Amanda Haddad and Toyoi Yuuta with
    // links to their websites (based on story title)
  }

  render() {
    return (
      <section className="story-header">
        <h1>{this.props.story.title}</h1>
        <h3>{this.props.story.description}</h3>

        { this.props.story.image_url ? (
          <figure>
            <div className="imageContainer">
              <img className="splashImage" src={this.props.story.image_url}/>
            </div>
          </figure>
        ) : null }
      </section>
    )
  }
}

export default StoryHeader;
