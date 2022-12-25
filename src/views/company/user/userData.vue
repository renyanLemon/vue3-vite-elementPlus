<template>
    <el-form
        ref="ruleFormRef"
        label-width="100px"
        :model="userForm"
        :rules="rules"
    >
        <el-form-item label="Name" prop="name">
            <el-input v-model="userForm.name" />
        </el-form-item>
        <el-form-item label="Gender" prop="gender">
            <el-radio-group v-model="userForm.gender" class="ml-4">
                <el-radio label="0" size="large">male</el-radio>
                <el-radio label="1" size="large">female</el-radio>
            </el-radio-group>
        </el-form-item>
        <div class="text-align-right">
            <el-button type="primary" @click="submitForm(ruleFormRef)">Confirm</el-button>
            <el-button @click="cancelForm(ruleFormRef)">Cancel</el-button>
        </div>
    </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref, toRef, toRefs, onMounted  } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

// const props = defineProps<{
//     editData: Object
// }>({
//     editData: Object
// })

// props对象不是ref对象，需要使用toRefs去给props加一层包装或者用$(对象)去添加响应式
const props = defineProps({
    editData: Object
})

const emit = defineEmits<{
    ( e: 'submit', userForm:userForm ): void,
    ( e: 'close', param:Boolean ): void
}>()
const ruleFormRef = ref<FormInstance>()

interface userForm {
    id: number,
    name: string,
    gender: string,
    date: string
}

let userForm = $ref<userForm>({
    id: 0,
    name:'',
    gender:'',
    date: ''
})

const rules = reactive<FormRules>({
    name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
    gender: [{required: true, message: 'Please select gender', trigger: 'change'}]
})

const submitForm = async (ruleFormRef: FormInstance | undefined) => {
  if (!ruleFormRef) return
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
        console.log('submit',userForm)
        emit('submit', {...userForm})
    } else {
      console.log('error submit!', fields)
    }
  })
}

const cancelForm = (ruleFormRef: FormInstance | undefined) => {
    emit('close', false)
}

onMounted(() => {
    userForm = props.editData
})

</script>
