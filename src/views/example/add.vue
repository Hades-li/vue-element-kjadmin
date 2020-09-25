<template>
  <el-form
    :model="form"
    size="small"
    ref="form"
  >
    <page-title
      title="新增编辑"
      :base-buttons="baseButtons"
      @handle-click="handleClick"
    />
    <el-card>
      <h3 class="form-title">基本信息</h3>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="八个字加红星必填："
          prop="text1"
          required
        >
          <el-input v-model="form.text1" />
          <template v-slot:error>
            <div class="form-error">必填项</div>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="超出部分点点点点点点点："
          prop="text2"
          required
        >
          <el-input v-model="form.text2" />
          <template v-slot:error>
            <div class="form-error">必填项</div>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="八个字加红星必填："
          prop="text3"
          required
        >
          <el-input v-model="form.text3"/>
          <template v-slot:error>
            <div class="form-error">必填项</div>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="八个字加红星必填："
        >
          <el-input>
            <template slot="append">
              RMB
            </template>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="八个字加红星必填："
          prop="selData"
          required
        >
          <el-select
            v-model="form.selData"
            class="full-select"
            placeholder="请选择"
          >
            <el-option
              label="餐厅名"
              value="1"
            />
            <el-option
              label="订单号"
              value="2"
            />
            <el-option
              label="用户电话"
              value="3"
            />
          </el-select>
          <template v-slot:error>
            <div class="form-error">必填项</div>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="八个字加红星必填："
        >
          <el-input />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="多选："
          prop="chkType"
          required
        >
          <el-checkbox-group v-model="form.chkType">
            <el-checkbox
              label="美食/餐厅线上活动"
              name="type"
            />
            <el-checkbox
              label="地推活动"
              name="type"
            />
            <el-checkbox
              label="线下主题活动"
              name="type"
            />
            <el-checkbox
              label="单纯品牌曝光"
              name="type"
            />
          </el-checkbox-group>
          <template v-slot:error>
            <div class="form-error">必填项</div>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="单选："
        >
          <el-radio-group v-model="form.radioType">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="占三分之二："
        >
          <el-input />
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="占三分之一："
        >
          <el-input />
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item
          class="text-hidden"
          label-width="148px"
          label="字数限制："
        >
          <el-input
            type="textarea"
            maxlength="200"
            show-word-limit
          />
        </el-form-item>
      </el-col>
    </el-card>
    <el-card class="m-t-20">
      <file-upload-group
        v-model="form.files"
        :files-validate="validate"
        @tab="tab"
        @success="success"
        @update="success"
        @error="error"
      />
    </el-card>
  </el-form>
</template>

<script>
import PageTitle from '@/components/page-title'
import FileUploadGroup from '@/components/FileuploadGroup'

export default {
  name: 'Add',
  components: {
    PageTitle,
    FileUploadGroup,
  },
  data: () => ({
    baseButtons: ['save','cancel','commit'],
    form: {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      selData: '',
      chkType: [],
      radioType: '',
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
      ],
    }
  }),
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
    },
    // 提交数据
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancel() {
      this.$message('取消')
    },
    // 暂存
    save() {
      this.$message('保存')
    },
    handleClick(name) {
      switch (name) {
        case 'commit':
          this.submit()
          break
        case 'cancel':
          this.cancel()
          break
        case 'save':
          this.save()
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
