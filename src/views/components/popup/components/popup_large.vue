<template>
  <div>
    <el-button
      type="primary"
      @click="dlgOpen(0)"
    >
      宽度1000px
    </el-button>
    <dlg
      title="弹窗-大-1000px"
      size="large"
      :visible.sync="dlgShow_0"
    >
      <el-row>
        <el-col :span="20">
          <search-form :data="columns" label-width="125px" />
        </el-col>
      </el-row>
      <div>
        <s-table
          :columns.sync="columns"
          :data="data"
          :pagination="true"
          :is-setup-column="true"
        />
      </div>
    </dlg>
  </div>
</template>

<script>
import STable from '@/components/STable/s-table'
import SearchForm from '@/components/searchList/searchForm'
import Dlg from '@/components/dialog'

export default {
  name: 'PopupLarge',
  components: { SearchForm,Dlg,STable },
  data: () => ({
    dlgShow_0: false,
    columns: [
      {
        type: 'selection',
        align: 'center',
      },
      {
        prop: 'id',
        label: 'id号',
        fixed: true,
        width: 100
      },
      {
        prop: 'name',
        label: '名称',
        width: 100,
      },
      {
        prop: 'title',
        label: '标题',
        width: 100,
      },
      {
        prop: 'phone',
        label: '电话',
        width: 100,

      },
      {
        prop: 'address',
        label: '地址',
        width: 100,

      },
      {
        prop: 'order',
        label: '订单号',
        width: 100,
      },
      {
        prop: 'doc',
        label: '文档',
        width: 100,
      },
      {
        prop: 'ppt',
        label: '幻灯片'
      },
      {
        prop: 'length',
        label: '来个顶部名称',
        width: 400,
      }
    ],
    data: [
      {
        id: 12345,
        name: '水电费打水电费发送到广告',
        title: '这是一个标题'
      },
      {
        id: 12345,
        name: '水电费打广告',
        title: '这是一个标题'
      },
      {
        id: 12345,
        name: '水电费打广告',
        title: '这是一个标题'
      },
      {
        id: 12345,
        name: '水电费打广告',
        title: '这是一个标题'
      },
    ]
  }),
  methods: {
    dlgOpen(number) {
      this[`dlgShow_${number}`] = true
    }
  }

}
</script>

<style scoped>

</style>
