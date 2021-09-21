import React, { useState } from "react";
import moment from "moment";
import ReplyBox from "../ReplyBox/ReplyBox";
import CommentList from "../CommentList/CommentList";

import commentList from "../../constants/commentsList";
import cssClass from "./CommentBoxWidget.module.css";
import formatCommentList from "../../utility/formatCommentList";
import ActiveUser from "../ActiveUser/ActiveUser";
import userList from "../../constants/usersList";

function CommentBoxWidget() {
  const [comments, setComments] = useState(commentList);
  const [activeUser, setActiveUser] = useState(userList[0]);
  const handleUserChange = user => {
    setActiveUser(user);
  };
  const addCommentHandler = data => {
    setComments(prevComment => [
      ...prevComment,
      { ...data, user: activeUser, commentedAt: moment() }
    ]);
  };
  const getCommentedUsers = () => {
    return comments.map(comment => comment.user);
  };

  const enterRootCommentHandler = ({ comment }) => {
    console.log({
      id: comments.length + 1,
      commentedAt: moment(),
      commentText: comment,
      user: activeUser,
      likeCount: 0,
      parentId: null
    });
    addCommentHandler({
      id: comments.length + 1,
      commentedAt: moment(),
      commentText: comment,
      user: activeUser,
      likeCount: 0,
      parentId: null
    });
  };
  console.log("called comment-box-widget");
  return (
    <div className={cssClass["comment-box-widget"]}>
      <div className={cssClass["active-user-container"]}>
        <ActiveUser
          onActiveUserChange={handleUserChange}
          activeUser={activeUser}
        />
      </div>

      <ReplyBox
        onEnterComment={enterRootCommentHandler}
        parentId={null}
        commentedUsers={getCommentedUsers()}
        activeUser={activeUser}
      />
      <CommentList
        comments={formatCommentList(comments)}
        totalCount={comments.length}
        onAddComment={addCommentHandler}
        commentedUsers={getCommentedUsers()}
        activeUser={activeUser}
      />
    </div>
  );
}
export default CommentBoxWidget;
