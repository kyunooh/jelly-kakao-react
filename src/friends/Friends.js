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


  friendsCellsTemplate = () => {
    return this.state.friends.map(f => {
      return <div className="friend-cell" key={f.id}>
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
  };

  render() {
    return (
      <main id="contents">
        <header>
          <span id="friends-text">Friends</span>
          <span className="header-count">{this.state.friends.length}</span>
        </header>
        <div className="friends-group-label">
          My
          Profiles
        </div>
        {this.friendsCellsTemplate()}
      </main>
    )
  }
}


export default Friends;