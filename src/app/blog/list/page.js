import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import LayoutBlogDefault from '@/components/Blog/LayoutBlogDefault'

export default function blogList() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/blog.jpg'} nav2={'Blog'} nav2Link={'/blog/list'} title={'Blog List'} />
            <LayoutBlogDefault layout={'style-list'} type={'style-list'} pageLimit={4} />
        </LayoutOne>
    )
}