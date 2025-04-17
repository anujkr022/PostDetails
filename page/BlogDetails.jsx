
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { travelTriangleImages } from '../Service/api';

const BlogDetails = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageIndex = (parseInt(id) - 1) % travelTriangleImages.length;
const imageUrl = travelTriangleImages[imageIndex];

  

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data =  await res.json();
        setBlog(data);
      } catch (err) {
        console.error('Error fetching blog post:', err); 
        setError('Failed to fetch blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);
  

  if (loading) return <p>Loading blog post...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>Post not found.</p>;

  return (
    <div  className='back' style={{ maxWidth: '700px', margin: 'auto', padding: '20px',}} >
      <h1 className='blogdet'>Blog Details</h1>
      <img className='blog-detail-image' src={imageUrl} 
          alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;
