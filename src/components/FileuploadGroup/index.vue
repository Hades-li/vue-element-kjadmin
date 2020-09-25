<template>
  <div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="(item) in value"
        :key="item.id"
        :label="`${item.name}(${item.files ? item.files.length : 0 })`"
        :name="`${item.id}`"
      >
        <file-upload
          :data.sync="item.files"
          :files-validate="filesValidate"
          @success="uploadSuccess"
          @update="(files) => {$emit('update', files)}"
          @error="error"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FileUpload from '@/components/Fileupload/index'

export default {
  name: 'FileUploadGroup',
  components: {
    FileUpload
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    filesValidate: {
      type: Function,
      default: undefined
    }
  },
  data () {
    return {
      activeName: 1 + ''
    }
  },
  methods: {
    uploadSuccess(uploadFiles, files) {
      this.$emit('input', this.value)
      this.$emit('success', uploadFiles, files)
    },
    handleClick (tab) {
      this.$emit('tab', {
        index: parseInt(tab.index),
        id: parseInt(tab.name),
        name: tab.label,
      })
    },
    error(e) {
      this.$emit('error', e)
    }
  }
}
</script>

<style scoped>

</style>
