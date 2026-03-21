import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "첫 번째 댓글",
  },
  {
    name: "유재석",
    comment: "두 번째 댓글",
  },
  {
    name: "강민경",
    comment: "세 번째 댓글",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentList;
