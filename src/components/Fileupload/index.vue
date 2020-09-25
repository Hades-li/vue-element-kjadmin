<template>
  <transition-group
    name="el-fade-in"
    tag="ul"
    class="fileUpload"
  >
    <li
      v-for="(item, index) in files"
      :key="index"
      class="file"
    >
      <div
        class="content"
        :class="{isOpen: item.id !== -1}"
        @click="openFile(item)"
      >
        <template v-if="isImgFromExt(item.extension)">
          <el-image :src="downloadUrl(item)">
            <div
              slot="placeholder"
              class="image-slot"
            >
              加载中<span class="dot">...</span>
            </div>
            <div
              slot="error"
              class="image-slot"
            >
              上传中<span class="dot">...</span>
            </div>
          </el-image>
        </template>
        <template v-else>
          <svg-icon
            :icon-class="fileIcon(item.extension)"
            class-name="upload-ico"
          />
          <p
            v-if="item.extension === '.err'"
            class="err-text"
          >
            上传失败
          </p>
        </template>
      </div>
      <p
        class="name"
        :title="item.name"
      >
        {{ item.name }}
      </p>
      <el-popconfirm
        v-if="item.id !== -1 || item.extension === '.err'"
        :title="delNotice"
        @onConfirm="delFile(item)"
      >
        <i
          slot="reference"
          class="close el-icon-close"
        />
      </el-popconfirm>
      <div
        v-if="item.id === -1"
        class="progress"
        :style="{height: (1 - item.uploadProgress) * 100 + '%'}"
      />
    </li>
    <li key="upload-btn" class="upload-btn">
      <svg-icon
        icon-class="upload"
        class-name="upload-ico"
      />
      <input
        ref="file"
        multiple
        class="inputFile"
        type="file"
        :accept="accept"
        @change="upload"
      >
    </li>
  </transition-group>
</template>

<script>
import { createProgress } from '@/utils/progress'
import { getExtension } from '@/utils'
const downloadApi = '/fsc/file' // 默认文件下载地址
const defaultUploadApi = '/fsc/files'

//创建一个上传的线程池对象，每上传一次放入一个Symbol为key的progress对象用于计算进度
const threadPool = {}

export default {
name: "FileUpload",
  props: {
    data: {
      type: Array,
      default: undefined
    },
    appId: {
      type: String,
      default: '3'
    },
    moduleId: {
      type: String,
      default: '8'
    },
    typeId: {
      type: String,
      default: '8028'
    },
    delNotice: {
      type: String,
      default: '确认删除~!'
    },
    action: {
      type: String,
      default: defaultUploadApi
    },
    downloadUrl: {
      type: Function,
      default: (item) => {
        return `${downloadApi}/${item.id}`
      }
    },
    accept: {
      type: String,
      default: ''
    },
    filesValidate: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      files: [],
    }
  },
  computed: {
    fileIcon() {
      return (extension) => {
        switch (extension) {
          case '.doc':
          case '.docx':
            return 'upload-doc'
          case '.xls':
          case '.xlsx':
            return 'upload-excel'
          case '.ppt':
          case '.pptx':
            return 'upload-ppt'
          case '.pdf':
            return 'upload-pdf'
          case '.zip':
          case '.rar':
            return 'upload-zip'
          case '.err':
            return 'upload-error'
          default:
            return 'upload-other'
        }
      }
    },
    isImgFromExt() {
      return (extension) => {
        switch (extension) {
          case '.jpg':
          case '.png':
          case '.gif':
          case '.jpeg':
            return true
          default:
            return false
        }
      }
    }
  },
  watch: {
    data: {
      handler(val) {
        this.files = val || []
      },
      immediate: true
    }

  },
  methods: {
    setFilesProgress(thread, n) {
      this.files.forEach(item => {
        if (item.thread === thread) {
          item.uploadProgress = n
        }
      })
    },
    async upload(event) {
      const files = event.target.files

      if (this.filesValidate) {
        try {
          const res = await this.filesValidate(files)
          // debugger
        } catch (e) {
          // debugger
          this.$emit('error', e)
          return false
        }
      }

      const formData = new FormData()
      const thread = Symbol() // 新增一个线程标记
      const tmpFiles = []
      threadPool[thread] = createProgress()
      files.forEach(item => {
        tmpFiles.push({
          id: -1,
          name: item.name,
          extension: getExtension(item.name),
          uploadProgress: 0,
          thread
        })
        formData.append('files', item)
      })
      this.files = this.files.concat(tmpFiles)
      threadPool[thread].start(n => {
        this.setFilesProgress(thread, n)
      })

      formData.append('appId', this.appId)
      formData.append('moduleId', this.moduleId)
      formData.append('typeId', this.typeId)

      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 60000
      }
      this.$axios.post(defaultUploadApi, formData, config).then(data => {
        const resFiles = data.data
        setTimeout(_ => {
          resFiles.forEach(item => {
            const file = tmpFiles.find(file => file.name === item.name && file.id === -1)
            Object.assign(file, item)
          })
          this.$emit('success', resFiles, this.files)
          this.$emit('update:data', this.files)
        }, 500)

      }).catch(error => {
        tmpFiles.forEach(item => {
          item.extension = '.err'
        })
        this.$emit('error', error)
        this.$message({
          showClose: true,
          message: '上传失败',
          type: 'error',
          onClose: () => {
            tmpFiles.forEach(item => {
              this.delFile(item)
            })
          }
        })
      }).finally(() => {
        const n = threadPool[thread].done()
        this.setFilesProgress(this.setFilesProgress(thread,n))
      })
    },
    isImg(file) {
      return file.type.split('/')[0] === 'image';
    },
    delFile(file) {
      const index = this.files.indexOf(file)
      this.files.splice(index, 1)
      this.$emit('update', this.files)
    },
    openFile(item) {
      if (item.id !== -1) {
        window.open(`${downloadApi}/${item.id}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
