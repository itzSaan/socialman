"use client";
import Link from 'next/link';
import blogPosts from '../data/blogPosts';
import './styles/Blog.css';
import BlogCard  from '../components/BlogCard';
import ScrollAnimation from '../components/ScrollAnimation';

const Blog = () => {       
  return (
    <section className="blog" id="blog">
      <div className="container">
        <ScrollAnimation animation="fadeUp">
          <div className="ro section-title text-center">
            <h2>Our Blog</h2>
            <h1><span>Blog </span> & News From Us!</h1>
            <p className="mt-4 mx-auto">Stay updated with the latest trends, tips, and insights. Explore our blogs for valuable knowledge and expert advice!</p>
          </div>
        </ScrollAnimation>
        <div className="row gy-5 gx-5">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
