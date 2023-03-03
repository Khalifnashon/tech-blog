import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useState,useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`http://localhost:9292/blogs/${id}`);
  const [reviews, setReviews] = useState([]);
  const [reviewsError, setReviewsError] = useState(null);
  const [reviewsPending, setReviewsPending] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:9292/blogs/${id}/reviews`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
        setReviewsPending(false);
      } catch (error) {
        setReviewsError(error.message);
        setReviewsPending(false);
      }
    };
    fetchReviews();
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:9292/blogs/${blog.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <img src={blog.image} alt="blog" className="blog-image" style={{ width: '600px', height: '300px' }} />
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}

      <hr />

      <div className="reviews">
        <h3>Reviews</h3>
        {reviewsPending && <div>Loading reviews...</div>}
        {reviewsError && <div>{reviewsError}</div>}
        {reviews && reviews.map((review) => (
          <div key={review.id}>
          
            <p>{review.comment}</p>
            <p>Rating: {review.rating}/5</p>
            <p>Author: {review.reader.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;











// import { useParams, useHistory } from "react-router-dom";
// import useFetch from "./useFetch";
// import useFetchReviews from "./useFetchReviews";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const { data: blog, error, isPending } = useFetch(`http://localhost:9292/blogs/${id}`);
//   const { data: reviews, reviewsError, reviewsPending } = useFetchReviews(`http://localhost:9292/blogs/${id}/reviews`);
//   const history = useHistory();

//   const handleDelete = () => {
//     fetch(`http://localhost:9292/blogs/${blog.id}`, {
//       method: 'DELETE'
//     })
//       .then(() => {
//         history.push('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="blog-details">
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {blog && (
//         <article>
//           <img src={blog.image} alt="blog" className="blog-image" style={{ width: '600px', height: '300px' }} />
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//           <div>{blog.body}</div>
//           <button onClick={handleDelete}>Delete</button>
//         </article>
//       )}

//       <hr />

//       <div className="reviews">
//         <h3>Reviews</h3>
//         {reviewsPending && <div>Loading reviews...</div>}
//         {reviewsError && <div>{reviewsError}</div>}
//         {reviews && reviews.map((review) => (
//           <div key={review.id}>
//             <h4>{review.title}</h4>
//             <p>{review.body}</p>
//             <p>Rating: {review.rating}/5</p>
//             <p>Author: {review.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;









// import { useParams,useHistory } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
//   const history = useHistory();

//   const handleClick = () => {
//     fetch('http://localhost:8000/blogs/' + blog.id, {
//       method: 'DELETE'
//     }).then(() => {
//       history.push('/');
//     }) 
//   }

//   return (
//     <div className="blog-details">
//       { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { blog && (
//         <article>
//           <img src={blog.image} alt="blog" className='blog-image'/>
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//           <div>{ blog.body }</div>
//           <button onClick={handleClick}>delete</button>
//         </article>
//       )}
//     </div>
//   );
// }
 
// export default BlogDetails;