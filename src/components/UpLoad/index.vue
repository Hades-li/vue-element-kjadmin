<template>
  <div class="img-upload" :style="{width: long ? '100%' : width + 'px', height: height + 'px'}">
    <div class="input-wrap" @click="clickUpload">
      <i class="icon-plus el-icon-plus">
        <span>选择文件</span>
      </i>
      <input ref="file" class="file" type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="upload">
    </div>
    <div v-if="imgUrl" class="img-wrap">
      <img :src="imgUrl" alt="">
      <i v-if="!isFail" class="icon-success" />
    </div>
    <div v-if="imgUrl" class="tools">
      <i v-if="isZoom && !isFail" class="icon zoom-in el-icon-zoom-in" @click="zoomIn" />
      <i class="icon del el-icon-delete" @click="delImg" />
      <!--      <span>{{ uploadProgress * 100 }}%</span>-->
    </div>
    <div class="progress" :style="{width: uploadProgress * 100 + '%'}" />
    <el-dialog :visible.sync="dialogVisible" custom-class="samples-dialog" top="50vh">
      <img width="100%" :src="imgUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import failPic from './assets/imgs/failImg.gif'
const uuidApi = '/fs/file/uuid'
const uploadApi = '/fs/file/upload?flag='
const downloadApi = '/fs/file/download?id='

export default {
  name: 'ImgUpLoad',
  props: {
    failImg: {
      type: String,
      default: ''
    },
    uuidAction: {
      type: String,
      default: uuidApi
    },
    action: {
      type: String,
      default: uploadApi
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    progress: {
      type: Number,
      default: 0
    },
    // 这个组件传进来的img 一定是 一串id字符串  是不能带前面/fs/file/download?id= 这个前缀的 不然没发用  小高修改了逻辑
    img: {
      type: String,
      default: ''
    },
    long: {
      type: Boolean,
      default: false
    },
    isZoom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogVisible: false,
      file: '',
      imgUrl: this.img ? downloadApi + this.img : this.img,
      imgId: '',
      uploadProgress: 0,
      isFail: false
    }
  },
  watch: {
    img(newVal) {
      console.log('watch')
      this.imgUrl = this.img
    }
  },
  methods: {
    clickUpload() {
      this.$refs.file.click()
    },
    zoomIn() {
      this.dialogVisible = true
    },
    // 删除图片
    delImg() {
      this.imgUrl = ''
      this.imgId = ''
      this.$emit('update:img', this.imgUrl)
    },
    upload(event) {
      const self = this
      const file = event.target.files[0]
      if (!this.isImg(file)) {
        this.$notify.error({
          title: '错误',
          message: '选择的文件不是图片',
          duration: '3000'
        })
        return
      }
      const formData = new FormData()
      formData.append('file', file)
      this.delImg()
      this.$refs.file.value = ''
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress(e) {
          self.uploadProgress = e.loaded / e.total
          self.$emit('update:progress', self.uploadProgress)
          self.$emit('loadingProgress', e)
        }
      }
      axios.get(this.uuidAction).then(({ data }) => {
        if (data.code == '0') {
          const uuid = data.data
          return axios.post(this.action + uuid, formData, config)
        }
      }).then(({ data }) => {
        this.imgId = data // 返回事务id
        this.imgUrl = downloadApi + this.imgId
        // console.log('成功后id' + this.imgUrl)
        // this.imgUrl = this.imgId
        // 上传成功-返回图片地址
        this.$emit('success', this.imgUrl, this.imgId)
        // update img  会修改外层 img:sync的值
        this.$emit('update:img', this.imgUrl)
      }).catch(err => {
        if (err) {
          console.log(err)
        }
        this.imgUrl = this.failImg ? this.failImg : failPic
        this.isFail = true
        this.$emit('fail', err)
      }).finally(() => {
        this.uploadProgress = 0
      })
    },
    isImg(file) {
      if (file.type.split('/')[0] !== 'image') {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-upload {
    position: relative;
    display: inline-block;
    .img-wrap {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border: 1px solid #afafaf;
      border-radius: 3px;
      background-color: #fff;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .icon-success {
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        width: 29px;
        height: 29px;
        background: url('./assets/imgs/ico-success.png')
      }
    }
    .input-wrap {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dashed $--color-primary;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      cursor: pointer;
      background-color: #f2f2f2;
      input {
        display: none;
      }
      .icon-plus {
        position: relative;
        font-size: 30px;
        /*font-weight: bold;*/
        color: $--color-primary;
        span {
          position: absolute;
          top: 55px;
          left: 50%;
          font-size: 14px;
          width: 70px;
          margin-left: -35px;
          text-align: center;
        }
      }
    }
    .tools {
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      background-color: rgba($color: #000, $alpha: 0.3);
      .icon {
        font-size: 22px;
        color: #fff;
        margin: 0 10px;
        cursor: pointer;
      }
    }
    .progress {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: $--color-primary;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      transition: width 300ms;
      z-index: 100;
    }
    &:hover {
      .tools {
        display: flex;
      }
    }
  }
</style>
