import Friends from "../friends/Friends";
import React from "react";
import "./NewChat.scss"
import jr from "../jr";

class NewChat extends Friends {

  chatInput = null;

  constructor(props) {
    super(props);
    this.state = {
      showName: false,
      userId: 0,
      chatName: '',
      friends: []
    }
  }

  showNameInput = (userId) => {
    this.setState({showName: true, userId});
  };

  createRoom = () => {
    jr("http://localhost:3000/chat_rooms", "POST", {
      user_id: this.state.userId,
      name: this.state.chatName,
      token: JSON.parse(localStorage.getItem("user"))["token"]
    }).then(() => this.exitNewRoom())
  };

  setChatName = (e) => {
    this.setState({chatName: e.target.value})
  };


  friendsCellsTemplate = () => {
    return this.state.friends.map(f => {
      return <div className="friend-cell" onClick={() => this.showNameInput(f.id)}>
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
    if(this.state.showName) {
      const boxStyle = {
        margin: "auto"
      };
      const inputStyle = {
        "fontSize": "4em"
      };

      const buttonStyle = {
        "margin": "auto",
        "fontSize": "2em",
        "width": "180px",
        "height": "60px"
      };

      return (
        <div style={boxStyle}>
          <form>
            <input type="text" autoCorrect="off" autoCapitalize="none" name="username"
                   style={inputStyle}
                   value={this.state.chatName}
                   onChange={this.setChatName}
                   ref={ref => this.chatInput = ref}
                   placeholder="방 제목입니다요."
            />
            <button type="submit" onClick={this.createRoom}
                    style={buttonStyle}>방 만들기</button>
          </form>
        </div>);
    }

    return super.render();
  }

}

export default NewChat;