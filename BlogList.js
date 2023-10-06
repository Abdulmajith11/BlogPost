import React, { useState } from 'react';
import BlogPost from './BlogPost';
import quotes from './quotes.json';
const blogPosts = [
{
title: 'Virat Kohli Is A Run Machine',
content:"Virat Kohli is the best batsman in the world right now across formats. With each passing year, he has gotten better.   He is 32 now and intends to be around for another 7 years. Given his form and fitness, that is very  much on the cards. Should that happen, one wonders  what are the records he is going to pile up.   Kohli is a run machine. His appetite for big scores is what has worked in India's favour over the past decade. From a talented youngster, he evolved into a new sensation and then became a modern-day great. By the time he retires, he will have been a legend. In fact, some would say he already is. He is already the highest international run-getter among active players. If he keeps it up he could finish on the top of the charts by the time the curtains come down on his career. Truth be told, the records he sets may not be broken anytime soon. People called him the next Sachin Tendulkar. But in reality, he is the first Virat Kohli. With no apparent weakness and a habit of consistency, Kohli is expected to pile on the runs in the coming years. For all we know, the best may be yet to come.",
author:"Abdul Majith"
}
];

function getRandomQuote() {
const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
}

function BlogList() {
const [selectedPost, setSelectedPost] = useState(null);
const handlePostClick = (index) => {
setSelectedPost(blogPosts[index]);
};
return (
<div>
<h1>Blog Posts</h1>
<ul>
{blogPosts.map((post, index) => (
<li key={index} onClick={() => handlePostClick(index)}>
{post.title}
</li>
))}
</ul>
{selectedPost && (
<BlogPost
title={selectedPost.title}
content={`${selectedPost.content} `}
author={selectedPost.author}
/>
)}
</div>
);
}

export default BlogList;