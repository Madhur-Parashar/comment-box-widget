import React from "react";
// import Comment from "../Comment/Comment";
import ReplyBox from "../ReplyBox/ReplyBox";
import cssClass from "./CommentList.module.css";
import CommentedReply from "../CommentedReply/CommentedReply";

function CommentList(props) {
  console.log("called comment-list", props);
  const enterCommentHandler = ({ comment, parentId }) => {
    props.onAddComment({
      id: props.totalCount + 1,
      commentText: comment,
      user: props.activeUser,
      likeCount: 0,
      parentId,
      childComments: []
    });
  };
  return (
    <ul className="comment-list">
      {props.comments.map(comment => {
        return (
          <li key={comment.id} className={cssClass["comment-list__parent"]}>
            <CommentedReply
              user={comment.user}
              commentText={comment.commentText}
              likeCount={comment.likeCount}
              parentId={comment.id}
              onEnterComment={enterCommentHandler}
              commentedUsers={props.commentedUsers}
              activeUser={props.activeUser}
              commentedAt={comment.commentedAt}
            ></CommentedReply>

            {comment.childComments.length > 0 ? (
              <div className={cssClass["comment-list__childrens"]}>
                <CommentList
                  comments={comment.childComments}
                  totalCount={props.totalCount}
                  onAddComment={props.onAddComment}
                />
              </div>
            ) : null}

            {comment.childComments.length > 1 ? (
              <div className={cssClass["comment-ist__reply-box"]}>
                <ReplyBox
                  onEnterComment={enterCommentHandler}
                  parentId={comment.id}
                  commentedUsers={props.commentedUsers}
                  activeUser={props.activeUser}
                />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
export default CommentList;
