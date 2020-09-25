import Layout from '@/layout'

const subMenus = {
  path: '/example',
  component: Layout,
  name: 'example',
  meta: {
    title: '示例'
  },
  children: [
    {
      path: 'detail',
      component: () => import('@/views/example/detail'),
      meta: {
        title: '详情页'
      }
    },
    {
      path: 'search-list',
      component: () => import('@/views/example/search-list'),
      meta: {
        title: '列表查询'
      }
    },
    {
      path: 'add',
      component: () => import('@/views/example/add'),
      meta: {
        title: '新增编辑页'
      }
    },
  ]
}

export default subMenus
