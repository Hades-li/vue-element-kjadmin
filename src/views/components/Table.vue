<template>
  <div>
    <el-card shadow="never">
      <s-table
        :columns.sync="columns"
        :data="data"
        :pagination="true"
        :is-setup-column="true"
      />
    </el-card>
  </div>
</template>

<script>
import STable from '@/components/STable/s-table'

export default {
  name: 'Table',
  components: {
    STable
  },
  data() {
    return {
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
    }
  },
  watch: {
    columns(val) {
      console.log('column:',val)
    }
  }
}
</script>

