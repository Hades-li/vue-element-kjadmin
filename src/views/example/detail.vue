<template>
  <div class="detail">
    <page-title
      title="大标题"
      :base-buttons="baseButtons"
      :more="more"
      @moreClick="handleMore"
    />
    <el-card>
      <h3 class="form-title">信息二级标题</h3>
      <el-form
        size="small"
        label-width="250px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="公司名称(英文):">
              <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司简称:">
              <p class="form-text">内容显示过多作换行处理下功</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="公司名称(英文):">
              <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司简称:">
              <p class="form-text">内容显示过多作换行</p>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="m-t-15">
      <h3 class="form-title">信息二级标题</h3>
      <el-form
        size="small"
        label-width="250px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="公司名称(英文):">
              <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司简称:">
              <p class="form-text">内容显示过多作换行处理下功</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="公司名称(英文):">
              <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司简称:">
              <p class="form-text">内容显示过多作换行闪电估分开个撒旦发射的风格的非官方的是单方事故撒旦发射的</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="户名:">
              <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="公司简称:">
              <p class="form-text">内容显示过多作换</p>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="m-t-15">
      <file-upload-group
        v-model="files"
      />
    </el-card>
    <el-card class="m-t-15">
      <el-tabs class="card-tab" active-name="first">
        <el-tab-pane
          label="模块1"
          name="first"
        >
          <h3 class="form-title">标题</h3>
          <el-form
            size="small"
            label-width="130px"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="公司名称(英文):">
                  <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司简称:">
                  <p class="form-text">内容显示过多作换行处理下功</p>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="公司名称(英文):">
                  <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司简称:">
                  <p class="form-text">内容显示过多作换行闪电估分开个撒旦发射的风格的非官方的是单方事故撒旦发射的</p>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="户名:">
                  <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司简称:">
                  <p class="form-text">内容显示过多作换</p>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="模块1"
          name="second"
        >
          <el-form
            size="small"
            label-width="130px"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="公司名称(英文):">
                  <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司简称:">
                  <p class="form-text">内容显示过多作换行处理下功</p>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="公司名称(英文):">
                  <p class="form-text">dlkgjkfgjdkjgldgjkj </p>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="公司简称:">
                  <p class="form-text">内容显示过多作换行闪电估分开个撒旦发射的风格的非官方的是单方事故撒旦发射的</p>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title'
import FileUploadGroup from '@/components/FileuploadGroup'

export default {
  name: 'Detail',
  components: {
    PageTitle,
    FileUploadGroup,
  },
  data () {
    return {
      baseButtons: ['add', 'delete', 'edit', 'save'],
      more: [
        {
          id: 1,
          title: '其他的命令'
        }
      ],
      files: [
        {
          id: 1,
          name: '疑点',
          maxCount: 5,
        },
        {
          id: 2,
          name: '授信',
          maxCount: 1,
        },
        {
          id: 3,
          name: '其他',
          maxCount: 2,
        },
      ]
    }
  },
  methods: {
    handleMore (item) {
      this.$notify({
        title: item.title
      })
    }
  }
}
</script>
