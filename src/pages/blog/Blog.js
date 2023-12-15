import React from 'react';
import News from './news/news';
import Footer from '../../components/footer/Footer'
import BlogCard from './blogCard/blogCard';

const Blog = () => {
    return (
        <React.Fragment>
            <News/>
             <BlogCard />
            <Footer />
        </React.Fragment>
    );
};

export default Blog;