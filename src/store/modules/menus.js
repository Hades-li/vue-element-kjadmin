export default {
  namespaced: true,
  state: {
    menus: [ // 菜单数据样例
      {
        path: '/home',
        meta: {
          title: '首页',
          icon: 'menu-crm'
        }
      },
      {
        path: '/about',
        meta: {
          title: '关于',
          icon: 'menu-business-center'
        }
      },
      {
        path: '/components',
        meta: {
          title: '组件库',
          icon: 'menu-documents'
        },
        children: [
          {
            path: '/components/table',
            meta: {
              title: '表格'
            }
          },
          {
            path: '/components/upload',
            meta: {
              title: '上传'
            }
          },
          {
            path: '/components/popup',
            meta: {
              title: '弹窗'
            }
          },
          {
            path: '/subMenus/other',
            meta: {
              title: '二级菜单'
            },
            children: [
              {
                path: '/subMenus/other/a',
                meta: {
                  title: '二级菜单的二级'
                }
              }
            ]
          }
        ]
      },
      {
        path: '/example',
        meta: {
          title: '示例',
          icon: 'menu-warehouse'
        },
        children: [
          {
            path: '/example/detail',
            meta: {
              title: '详情页'
            }
          },
          {
            path: '/example/search-list',
            meta: {
              title: '查询列表'
            }
          },
          {
            path: '/example/add',
            meta: {
              title: '新增编辑页'
            }
          },
        ]
      }
    ]
  },
  mutations: {
    SET_MENUS(state, routes) {
      state.menus = routes
    }
  },
  actions: {
    generateRoutes({commit}) {
      return new Promise(resolve => {
        // const menus = routes.concat(asyncRoutes)
        // commit('SET_MENUS', menus)
        resolve()
      })
    }
  }
}
