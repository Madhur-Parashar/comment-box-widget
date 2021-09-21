import React from "react";

import cssClass from "./Comment.module.css";
import CircularImg from "../common/CircularImg/CircularImg";
import userProfile from "../../assets/images/user-profile.svg";
function Comment(props) {
  return (
    <div className={cssClass["comment"]}>
      <CircularImg src={userProfile} alt="user-profile" />
      <div className={cssClass["comment-content"]}>
        <div className={cssClass["comment-description"]}>
          <div>{props.user}</div>
          <div>{props.commentText}</div>
        </div>
        <div className={cssClass["comment-actions"]}>
          <div>Like</div>
          <div onClick={props.onReply}>Reply</div>
          <div>{props.timeLapse}</div>
          {/* <div className={cssClass["comment-likes"]}>{props.likeCount}</div> */}
        </div>
      </div>
    </div>
  );
}
export default Comment;
