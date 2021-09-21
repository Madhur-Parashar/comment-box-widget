import React, { useState, useEffect } from "react";
import cssClass from "./ReplyBox.module.css";
import CircularImg from "../common/CircularImg/CircularImg";
import userProfile from "../../assets/images/user-profile.svg";

function ReplyBox(props) {
  const { parentId } = props;
  const [comment, setComment] = useState("");
  const [showSuggestion, setshowSuggestion] = useState(false);
  const [suggestedUser, setsuggestedUser] = useState([]);
  console.log("commentedUsers", props.commentedUsers);
  const handleCommentChange = event => {
    const currentValue = event.target.value;
    if (currentValue.includes(" @ ")) {
      console.log("suggestedUser", suggestedUser);
      setshowSuggestion(true);
    } else {
      setshowSuggestion(true);
    }
    setComment(currentValue);
  };
  // useEffect(() => {
  //   console.log("called", props);
  //   let users = props.commentedUsers
  //     .filter(user => props.activeUser !== user)
  //     .filter((user, index, users) => users.indexOf(user) === index);
  //   setsuggestedUser(users);
  //   console.log(users);
  // }, [props.commentedUsers, props.activeUser]);
  console.log(props);
  const handleEnter = event => {
    if (event.key === "Enter") {
      if (comment === "") return;
      props.onEnterComment({ comment, parentId });
      setComment("");
    }
  };
  return (
    <div className={cssClass["reply-box"]}>
      <CircularImg src={userProfile} alt="user-profile" />
      <div className={cssClass["reply-box__input"]}>
        <input
          type="text"
          placeholder="Write comment..."
          value={comment}
          onChange={handleCommentChange}
          onKeyPress={handleEnter}
        ></input>
        {showSuggestion && (
          <ul>
            {suggestedUser.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default ReplyBox;
