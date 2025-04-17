import React, { useState } from "react";
import { travelTriangleImages } from "../Service/api";
import { Link } from "react-router-dom";

const BlogCard = ({ post, index }) => {
  const [imgError, setImgError] = useState(false);
  const imageUrl = travelTriangleImages[index % travelTriangleImages.length];

  return (
    <div> 
    <Link to={`post/${post.id}`}>
      <div className="blog-card">
        {imgError ? (
          <div className="image-placeholder">
            <span>Image not available</span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={post.title}
            className="blog-image"
            onError={() => setImgError(true)}
          />
        )}

        <div className="blog-content">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default BlogCard;
