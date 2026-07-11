import Link from "next/link";
import '../sections/styles/Blog.css';

const BlogCard = ({ post }) => {
  const slug = post.title.split(' ').join('-').toLowerCase().replace(/:/g, '-');

  return (
    <div className="col-lg-4 col-sm-6" key={post.id}>
      <Link href={`/blogs/${slug}`} className="streched-link">
        <img src={`/${post.image}`} className="img-fluid" alt="" />
        <div className="blog-card-content">
          <div className="blog-meta">
            {/* <span className="blog-date">{post.date}</span> */}
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
          <h4 className="blog-title">{post.title}</h4>
          <p className="blog-text">{post.description}</p>
          
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;