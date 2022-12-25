<template>
<div class="login-container">
    <el-card class="card">
    <div class="title">
        <span>酒店管理系統</span>
    </div>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    size="large"
    class="login-ruleForm"
  >
    <el-form-item prop="name">
      <el-input v-model="ruleForm.name" placeholder="UserName"/>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="Password"/>
    </el-form-item>
    <el-button type="primary" round class="login-btn" @click="submitForm(ruleFormRef)">Submit</el-button>
  </el-form>
  </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import type { FormInstance } from 'element-plus'
import { setToken, setUserName } from '@/utils/cookies.js';

const ruleFormRef = ref<FormInstance>()
const router = useRouter()

const store = useStore()

const checkName = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the UserName'))
  }else {
    return callback()
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    return callback(new Error('Please input the password'))
  } else {
    return callback()
  }
}

const ruleForm = reactive({
  pass: '',
  name: ''
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  name: [{ validator: checkName, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      setToken('tokennnnnnnnnnnnnn')
      // 此方式引入的useRoute()和useRouter()必须在setup()中调用，否则返回undefined
      console.log(5, useRouter())  // undefined
      console.log(6, router)
      console.log(66666666666, ruleForm.name)
      store.dispatch('userInfo/setUserName', ruleForm.name)
      setUserName(ruleForm.name)
      router.push('/')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<style scoped lang='less'>
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: radial-gradient(farthest-corner at 20% 20%, #99CCCC, #7171B7);
    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 400px;
        background-color: rgba(200,200,200,0.3);
        border-color: rgba(200, 200, 200, 0.5);
        border-radius: 18px;
        z-index: 2;
        text-align: center;
    }
    .title {
        text-align: center;
        font-size: 24px;
        color: #ffffff;
        padding-bottom: 30px;
    }
    .login-ruleForm {
        width: 300px;
    }
    .login-btn {
      width: 100%;
    }
}
</style>
