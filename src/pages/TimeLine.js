import React, { useState } from "react";
import Post from "../components/Post";
import "../styles/Timeline.css";
import Suggestions from "../components/Suggestions";
const posts = require("../data/posts.json");

function Timeline() {
  console.log("posts", posts);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState(posts);

  //search for name
  const searchName = (searchValue) => {
    setSearchInput(searchValue); // Update the search input
    if (searchValue.trim() !== "") {
      const filteredData = posts.filter((item) =>
        item.user.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData); // Update filtered results
    } else {
      setFilteredResults(posts); // Reset to all posts if input is empty
    }
  };

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="search-container">
          <input
            class="search"
            type="search"
            value={searchInput}
            placeholder="Search...name"
            onChange={(e) => searchName(e.target.value)}
          />
        </div>
        <div className="timeline__posts">
          {filteredResults.length > 0 ? (
            filteredResults.map((post) => (
              <Post
                key={post.id}
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
            ))
          ) : searchInput.trim() !== "" ? (
            <p className="message">No results found for "{searchInput}"</p>
          ) : (
            posts.map((post) => (
              <Post
                key={post.id}
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
            ))
          )}
        </div>
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
