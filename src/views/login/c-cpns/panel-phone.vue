<template>
  <div class="panel-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" size="large">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码" size="large">
        <div class="verify-code">
          <el-input />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
