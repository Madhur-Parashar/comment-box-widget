import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import ReplyBox from "../ReplyBox/ReplyBox";
import cssClass from "./CommentedReply.module.css";
import getTimeLaspe from "../../utility/getTimeLasped";
function CommentedReply(props) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [timeLaspe, setTimeLaspe] = useState(getTimeLaspe(props.commentedAt));
  const replyClickHandler = () => {
    setShowReplyBox(true);
  };
  const handleCommentReply = data => {
    setShowReplyBox(false);
    props.onEnterComment(data);
  };
  useEffect(() => {
    setInterval(() => {
      setTimeLaspe(getTimeLaspe(props.commentedAt));
    }, 1000 * 60);
  }, [props.commentedAt]);
  return (
    <React.Fragment>
      <Comment
        user={props.user}
        commentText={props.commentText}
        likeCount={props.likeCount}
        onReply={replyClickHandler}
        timeLapse={timeLaspe}
      ></Comment>
      {showReplyBox ? (
        <div className={cssClass["commented-reply"]}>
          <ReplyBox
            onEnterComment={handleCommentReply}
            parentId={props.parentId}
            commentedUsers={props.commentedUsers}
            activeUser={props.activeUser}
          />
        </div>
      ) : null}
    </React.Fragment>
  );
}
export default CommentedReply;
