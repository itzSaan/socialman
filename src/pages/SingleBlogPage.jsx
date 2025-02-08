// import React from 'react'
import { useEffect } from "react";
import heroBg from "../assets/img/hero-bg.jpg";
import blogPosts from "/src/blogPosts.js";
import { Link, useParams } from 'react-router-dom';


const SingleBlogPage = () => {

  const postId = useParams().id;
  const post = blogPosts.filter((post) => post.id == postId);

  useEffect(() => {
      window.scrollTo(0,0)
    }, [postId])

  return (
    <>
      <div
              className="page-title position-relative"
              data-aos="fade"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              <div className="container position-relative">
                <h1>
                  Blog - {post[0].id}
                </h1>
              </div>
      </div>

      <div className="container py-5">
      <div className="row">
                <h1 className="w-75 fw-bold text-center mx-auto" style={{fontSize: '3rem'}}>
                  {post[0].title}
                </h1>
                <p className="w-75 text-center mx-auto">{post[0].description}</p>
              </div>
        <div className="row p-4">
          <img src={`/${post[0].image}`} alt="postImage" className='img-fluid mx-auto' />
        </div>
        <div className='row blog-content'>
          <p>{post[0].content}</p>
        </div>

        <div className="row mt-4">
          <h2>Related Blogs</h2>
        </div>
        <div className="row gy-5 gx-5">
                    {blogPosts.filter(post => post.id !== postId).slice(0,3).map((post) => (
                      <div
                        className="col-lg-4 col-sm-6"
                        data-aos="fade-up"
                        data-aos-delay={`${post.id * 100}`}
                        key={post.id}
                      >
                        <Link to={`/blogs/${post.id}`} className="streched-link">
                          <img src={`/${post.image}`} className="img-fluid" alt="postImage" />
                          <div className="blog-card-content mt-2">
                            <h4 className="blog-title">{post.title}</h4>
                            <p className="blog-text">{post.description}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
      </div>

    </>
  )
}

export default SingleBlogPage