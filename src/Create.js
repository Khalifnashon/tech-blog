import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Khalif Nhashon');
    const [image, setImage] = useState('');
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author,image };
  
      fetch('http://localhost:9292/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        // history.go(-1);
        history.push('/');
      })
    }
  
    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog image url:</label>
          <input 
            type="text" 
            required 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Khalif Nhashon">Khalif Nhashon</option>
            <option value="Benson Muiru">Benson Muiru</option>
          </select>
          <button>Add Blog</button>
        </form>
      </div>
    );
}
  
   
export default Create;