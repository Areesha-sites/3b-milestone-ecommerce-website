import React from "react";
import { blogsData } from "../../api/route";
import BlogCard from "./BlogCard";
const BlogCardsList = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-[50px] xl:gap-y-[10px] xxl:gap-y-[40px] px-2">
        {blogsData.map((item, index) => (
          <BlogCard
            id={item.id}
            key={index}
            image={item.image}
            author={item.author}
            comments={item.comments}
            date={item.date}
            title={item.title}
            des={item.des}
          />
        ))}
      </div>
    </>
  );
};

export default BlogCardsList;
