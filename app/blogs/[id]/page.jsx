import Link from "next/link";
import Image from "next/image";
import blogPosts from "../../../data/blogPosts";
import { notFound } from "next/navigation";
import ScrollAnimation from "../../../components/ScrollAnimation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.title.split(' ').join('-').toLowerCase().replace(/:/g, '-'),
  }));
}

export async function generateMetadata({ params }) {
  const slug = params.id;
  const post = blogPosts.find((p) => p.title.split(' ').join('-').toLowerCase().replace(/:/g, '-') === slug);

  if (!post) {
    return {
      title: "Blog Not Found | SocialMan",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `/${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/${post.image}`],
    },
  };
}

const SingleBlogPage = ({ params }) => {
  const slug = params.id;
  const post = blogPosts.filter((p) => p.title.split(' ').join('-').toLowerCase().replace(/:/g, '-') === slug);

  if (post.length === 0) {
    notFound();
  }

  const currentPost = post[0];
  const relatedPosts = blogPosts.filter(p => p.title.split(' ').join('-').toLowerCase().replace(/:/g, '-') !== slug).slice(0, 3);

  return (
    <>
      <ScrollAnimation animation="fade">
        <div className="page-title position-relative" style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}>
          <div className="container position-relative">
            <h1>Blog</h1>
          </div>
        </div>
      </ScrollAnimation>

      <div className="container py-5">
        <div className="row">
          <h1 className="w-75 fw-bold text-center mx-auto" style={{ fontSize: '3rem' }}>
            {currentPost.title}
          </h1>
          <p className="w-75 text-center mx-auto">{currentPost.description}</p>
          <div className="blog-meta text-center">
            <span className="blog-date">{currentPost.date}</span>
            <div className="blog-tags">
              {currentPost.tags.map((tag, index) => (
                <span key={index} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="row p-4">
          <Image src={`/${currentPost.image}`} alt={currentPost.title} className="img-fluid mx-auto" width={800} height={600} />
        </div>
        <div className="row blog-content" dangerouslySetInnerHTML={{ __html: currentPost.content }}>
        </div>

        <div className="row mt-4">
          <h2>Related Blogs</h2>
        </div>
        <div className="row gy-5 gx-5">
          {relatedPosts.map((relatedPost) => (
            <ScrollAnimation animation="fadeUp" delay={relatedPost.id * 0.1} key={relatedPost.id}>
              <div className="col-lg-4 col-sm-6">
                <Link href={`/blogs/${relatedPost.title.split(' ').join('-').toLowerCase().replace(/:/g, '-')}`} className="streched-link">
                   <Image src={`/${relatedPost.image}`} className="img-fluid" alt={relatedPost.title} width={400} height={300} />
                  <div className="blog-card-content mt-2">
                    <h4 className="blog-title">{relatedPost.title}</h4>
                    <p className="blog-text">{relatedPost.description}</p>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
