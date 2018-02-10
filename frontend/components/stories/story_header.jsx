import React from 'react';
import { Link } from 'react-router-dom';

class StoryHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  generateArtistCredit() {
    // TODO: Add figcaption to credit Amanda Haddad and Toyoi Yuuta with
    // links to their websites (based on story title)
    let artist = undefined;
    let url = undefined;

    switch (this.props.story.title) {
      case "Ecclesiastes":
      case "Fifteen Doors and How to Open Them":
      case "A Journey of a Thousand Miles":
      case "How to Tame a Pigeon":
      case "Tiny Horse Tries His Best":
      case "72 Uses for Snails":
        artist = "Toyoi Yuuta"
        url = "https://1041uuu.tumblr.com/"
        break;
      case "If you cannot do great things, do small things in a great way":
      case "World's top 10 smallest apps":
      case "This is a story":
      case "Overcoming Shyness":
        artist = "Amanda Haddad"
        url = "https://merrigo.tumblr.com/"
        break;
      default:
        break;
    }

    return (artist) ? (
      <figcaption>
        Art by <a href={url} target="_blank" style={{"fontWeight": "normal"}}>{artist}</a>
      </figcaption>
    ) : null;
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
            {this.generateArtistCredit()}
          </figure>
        ) : null }
      </section>
    )
  }
}

export default StoryHeader;
