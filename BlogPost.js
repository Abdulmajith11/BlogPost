import React from 'react';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostAuthor from './PostAuthor';
import Image from './Gallery';
function BlogPost({ title, content, author }) {
return (
<div className="blog-post">
<Image/>
<PostTitle title={title} />
<PostContent content={content} />
<PostAuthor author={author} />
</div>
);
}
export default BlogPost;