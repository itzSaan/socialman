import React from 'react'
import './styles/Blog.css'

const Blog = () => {

const blogData = [
    {
        blogTitle: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        blogText: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
        blogImg: 'blog/blog-1.jpg',
    },
    {
        blogTitle: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        blogText: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
        blogImg: 'blog/blog-1.jpg',
    },
    {
        blogTitle: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat',
        blogText: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
        blogImg: 'blog/blog-1.jpg',
    },
]
  return (
    <section className="blog" id="blog">
        <div className="container">
            <div className="ro section-title text-center" data-aos="fade-up">
            <h2>Our Blog</h2>
            <h1>
              <span>Blog </span> & News From Us!
            </h1>
            <p className="mt-4 mx-auto">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in 
            </p>
            </div>
            <div className="row gy-5 gx-5">
                {blogData.map((data, id) => (
                    <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={`${(id+1) * 100}`} key={id}>
                    <a href="" className='streched-link'>
                        <img src={data.blogImg} className='img-fluid' alt="" />
                        <div className="blog-card-content">
                            <h4 className="blog-title">{data.blogTitle}</h4>
                            <p className="blog-text">{data.blogText}</p>
                        </div>
                    </a>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Blog