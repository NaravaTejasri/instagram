import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "../styles/Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Add this for the liked state
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post(props) {
  const { user, postImage, likes: initialLikes, timestamp } = props;

  // State to track likes and liked status
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  // Handle like/dislike
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1); // Dislike: decrease likes
    } else {
      setLikes(likes + 1); // Like: increase likes
    }
    setLiked(!liked); // Toggle liked state
  };

  return (
    <div className="postsContainer ">
      <div className="post">
        <div className="post__header">
          <div className="post__headerAuthor">
            <Avatar style={{ marginRight: "10px" }}>
              {user.charAt(0).toUpperCase()}
            </Avatar>{" "}
            {user} <span>•{timestamp}</span>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="post__image">
          <img src={postImage} alt="post" />
        </div>
        <div className="post__footer">
          <div className="post__footerIcons">
            <div className="post__iconsMain">
              {/* Toggle between FavoriteIcon and FavoriteBorderIcon based on liked state */}
              {liked ? (
                <FavoriteIcon
                  className="postIcon liked"
                  onClick={handleLike}
                  style={{ color: "red" }} // Red color when liked
                />
              ) : (
                <FavoriteBorderIcon className="postIcon" onClick={handleLike} />
              )}
              <ChatBubbleOutlineIcon className="postIcon" />
              <TelegramIcon className="postIcon" />
            </div>
            <div className="post__iconSave">
              <BookmarkBorderIcon className="postIcon" />
            </div>
          </div>
          Liked by {likes} people.
        </div>
      </div>
    </div>
  );
}

export default Post;
