<template>
  <div>
    <demo-block :md="md" :md-api="api">
      <file-upload-group
        v-model="files"
        :files-validate="validate"
        @tab="tab"
        @success="success"
        @update="success"
        @error="error"
      />
    </demo-block>
  </div>
</template>

<script>
import FileUpload from '@/components/Fileupload'
import FileUploadGroup from '@/components/FileuploadGroup'
import md from './doc/code.md'
import api from './doc/api.md'
import DemoBlock from '@/components/demoBlock'

export default {
  name: 'UploadPage',
  components: {
    FileUpload,
    FileUploadGroup,
    DemoBlock
  },
  data () {
    return {
      md,
      api,
      files: [
        {
          id: 1,
          name: '疑点',
          maxCount: 5,
          files: [
            {
              id: 100,
              name: '测试2-1',
              extension: '.xlsx'
            }
          ]
        },
        {
          id: 2,
          name: '授信',
          maxCount: 1,
          files: [
            {
              id: 101,
              name: '测试2-2',
              extension: '.ppt'
            }
          ]
        },
        {
          id: 3,
          name: '其他',
          maxCount: 2,
          files: [
            {
              id: 102,
              name: '测试2-3',
              extension: '.doc'
            }
          ]
        },
      ]
    }
  },
  methods: {
    tab(item) {
      console.log(item)
    },
    success(filesGroup) {
      console.log('[filesGroup]:', filesGroup)
    },
    validate(files) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(files && files.length <= 0) {
            resolve(true)
          } else {
            reject(false)
          }
        }, 3000)

      })
    },
    error(e) {
      console.log(e)
      this.$notify({
        title: '错误',
        message: e,
        duration: 3000
      })
    }
  }
}
</script>
