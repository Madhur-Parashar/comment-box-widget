export default function formatCommentList(commentList) {
  console.log(commentList);
  let groupListItem = commentList.reduce((acc, comment) => {
    acc[comment.parentId] = [...(acc[comment.parentId] || []), comment];
    return acc;
  }, {});
  console.log(groupListItem);

  return commentList
    .map(comment => {
      if (groupListItem[comment.id])
        comment.childComments = [...groupListItem[comment.id]];
      else comment.childComments = [];
      return comment;
    })
    .filter(item => item.parentId === null);
}
