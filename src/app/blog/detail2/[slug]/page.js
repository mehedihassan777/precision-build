import LayoutDetailTwo from "@/components/Blog/LayoutDetailTwo";
import LayoutOne from "@/components/Layout/LayoutOne";
import BlogOne from "@/components/Sections/Blog/BlogOne";
import blogData from "@/data/blog/data.json";
import { getPostByTitle } from "@/common/postSelect";

export default function BlogDetail1({ params: { slug } }) {
    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(blogData, cleanedSlug);

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <LayoutDetailTwo data={foundPost} />
            <BlogOne data={blogData} start={0} limit={3} />
        </LayoutOne>
    );
}
