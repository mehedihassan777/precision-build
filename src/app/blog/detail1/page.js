import LayoutDetailOne from "@/components/Blog/LayoutDetailOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import BlogOne from "@/components/Sections/Blog/BlogOne";
import blogData from "@/data/blog/data.json";

export default function BlogDetail1() {
    const data = blogData[0]

    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <LayoutDetailOne data={data} />
            <BlogOne data={blogData} start={0} limit={3} />
        </LayoutOne>
    );
}
