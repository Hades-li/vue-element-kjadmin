```html
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
      },
      {
        prop: 'name',
        label: '名称'
      },
      {
        prop: 'title',
        label: '标题'
      }
    ],
    data: [
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

```
