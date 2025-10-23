import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import LayoutBlogDefault from '@/components/Blog/LayoutBlogDefault'

export default function blogDefault() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/blog.jpg'} nav2={'Blog'} nav2Link={'/blog/default'} title={'Blog Default'} />
            <LayoutBlogDefault layout={'style-default'} type={'style-default'} pageLimit={3} />
        </LayoutOne>
    )
}