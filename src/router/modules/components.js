import Layout from '@/layout'

const subMenus = {
  path: '/components',
  component: Layout,
  name: 'components',
  meta: {
    title: '组件'
  },
  children: [
    {
      path: 'table',
      component: () => import('@/views/components/Table'),
      meta: {
        title: '表格'
      }
    },
    {
      path: 'upload',
      component: () => import('@/views/components/upload/index'),
      meta: {
        title: '上传'
      }
    },
    {
      path: 'popup',
      component: () => import('@/views/components/popup'),
      meta: {
        title: '弹窗'
      }
    }
  ]
}

export default subMenus
