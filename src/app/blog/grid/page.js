import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import LayoutBlogGrid from '@/components/Blog/LayoutBlogGrid'

export default function blogGrid() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/blog.jpg'} nav2={'Blog'} nav2Link={'/blog/default'} title={'Blog Grid'} />
            <LayoutBlogGrid layout={'style-default'} type={'style-four'} pageLimit={9} />
        </LayoutOne>
    )
}