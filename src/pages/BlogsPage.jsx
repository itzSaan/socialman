import React from 'react'
import blogPosts from '/src/blogPosts.js'
import heroBg from '../assets/img/hero-bg.jpg'

const BlogsPage = () => {
  return (
<>
    <div className="page-title position-relative" data-aos="fade" style={{"backgroundImage": `url(${heroBg})`}}>
    <div className="container position-relative">
      <h1>Our Blogs <br/></h1>        
    </div>
  </div>  

<section className="blog" id="blog">
<div className="container">
    <div className="ro section-title text-center" data-aos="fade-up">
    <h2>Our Blog</h2>
    <h1>
      <span>Blog </span> & News From Us!
    </h1>
    <p className="mt-4 mx-auto">
    Stay updated with the latest trends, tips, and insights. 
    Explore our blogs for valuable knowledge and expert advice! 
    </p>
    </div>
    <div className="row gy-5 gx-5">
        {blogPosts.map((post) => (
            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={`${(post.id) * 100}`} key={post.id}>
            <a href="" className='streched-link'>
                <img src={post.image} className='img-fluid' alt="" />
                <div className="blog-card-content">
                    <h4 className="blog-title">{post.title}</h4>
                    <p className="blog-text">{post.description}</p>
                </div>
            </a>
        </div>
        ))}
    </div>
</div>
</section>

  </>
    
   
  )
}

export default BlogsPage