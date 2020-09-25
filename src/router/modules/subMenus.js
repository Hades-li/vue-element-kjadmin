import Layout from '@/layout'

const subMenus = {
  path: '/subMenus',
  component: Layout,
  name: 'subMenus',
  meta: {
    title: '二级菜单'
  },
  children: [
    {
      path: 'home',
      component: () => import('@/views/Home'),
      meta: {
        title: '二级菜单的首页'
      }
    },
    {
      path: 'about',
      component: () => import('@/views/About'),
      meta: {
        title: '二级菜单的关于'
      }
    },
    {
      path: 'other/a',
      component: () => import('@/views/About'),
      meta: {
        title: '二级菜单的关于'
      }
    },
  ]
}

export default subMenus
