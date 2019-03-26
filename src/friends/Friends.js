import React, {Component} from 'react';
import './Friends.scss';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(friends => this.setState({friends: friends}));
  }

  render() {
    const friendsCells = this.state.friends.map(f => {
      return <div className="friend-cell">
        <div className="friend-image-wrapper">
          <img className="image"
               src={f.image_url}
          />
        </div>
        <div className="right-side">
          <div className="name">
            {f.nickname}
          </div>
          <div className="speech-bubble">
            {f.comment}
          </div>
        </div>
      </div>
    });

    return (
      <main id="contents">
        <header>
          <span id="friends-text">Friends</span>
          <span className="header-count">88</span>
        </header>
        <div className="friends-group-label">
          My
          Profiles
        </div>
        {friendsCells}
      </main>
    )
  }
}


export default Friends;