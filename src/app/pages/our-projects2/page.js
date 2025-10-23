import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import ListProject from '@/components/Project/ListProject'

export default function ourProjectsTwo() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/projects.jpg'} nav2={'Projects'} nav2Link={'/pages/our-projects'} title={'Completed Projects'} />
            <ListProject layout={'lg:grid-cols-3 sm:grid-cols-2'} type={'style-default'} pageLimit={9} />
        </LayoutOne>
    )
}