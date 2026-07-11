import Link from "next/link";
import blogPosts from "../../data/blogPosts";
import BlogCard from "../../components/BlogCard";
import ScrollAnimation from "../../components/ScrollAnimation";

export const metadata = {
  title: "Blogs",
  description:
    "Stay updated with the latest digital marketing trends, tips, and insights from SocialMan. Read our blogs on social media, SEO, content creation, and more.",
  openGraph: {
    title: "Our Blogs | SocialMan Digital Agency",
    description:
      "Stay updated with the latest digital marketing trends, tips, and insights from SocialMan.",
  },
};

const BlogsPage = () => {
  return (
    <>
      <ScrollAnimation animation="fade">
        <div className="page-title position-relative" style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}>
          <div className="container position-relative">
            <h1>Our Blogs</h1>
          </div>
        </div>
      </ScrollAnimation>

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
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
