import React,{ useOptimistic} from "react";
function LikeButton() {
const [likes, setLikes] = React.useState(0);
const [optimisticLikes, addOptimistic] =  useOptimistic(
likes,
(state) => state + 1
);
async function handleClick() {
addOptimistic();
await fetch("/like"); // fake API
setLikes (likes + 1);
}
return (
  <button onClick={handleClick}>
    Likes: {optimisticLikes}
  </button>
);
}
export default LikeButton;
