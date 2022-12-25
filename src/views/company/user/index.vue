<template>
    <div class="common-layout">
        <el-container>
        <el-header>
            <div>
                <el-input v-model="searchData.name" clearable :placeholder="$t('userPage.name')" />
                <el-select v-model="searchData.gender" clearable :placeholder="$t('userPage.gender')" class="margin-right-10">
                    <el-option
                        v-for="item in genderOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        />
                </el-select>
                <el-date-picker
                    v-model="searchData.date"
                    value-format="YYYY-MM-DD"
                    type="date"
                    clearable 
                    :placeholder="$t('userPage.date')"
                />
                <el-button
                    type="primary"
                    class="margin-left-10"
                    @click="handleSearch">
                    {{$t('userPage.search')}}
                </el-button>
            </div>
            <div class="margin-top-10">
                <el-button
                    type="success"
                    @click="handleAdd">
                    {{$t('userPage.add')}}
                </el-button>
            </div>
        </el-header>
        <el-main>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column :label="$t('userPage.name')" prop="name" />
                <el-table-column :label="$t('userPage.gender')" prop="gender">
                    <template #default="scope">
                        <!-- 利用闭包传参 -->
                        <!-- 这里不是方法，而是计算属性，可以这样理解，计算属性后不带()，但我们可以先做假设其有computedDate()，这里第二个（）就是我们原生js时写的调用return里面的函数，但是计算属性没有（）的，所以我们只有第二个（）写在这边 -->
                        <span>{{computedDate(scope.row.gender)}}</span>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('userPage.date')" prop="date" />
                <el-table-column :label="$t('userPage.operation')">
                    <template #default="scope">
                        <el-button 
                            size="small" 
                            @click="handleEdit(scope.$index, scope.row)"
                            >
                            {{$t('userPage.edit')}}
                        </el-button>
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                            >
                            {{$t('userPage.delete')}}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        </el-container>

        <el-dialog v-model="dialogFormVisible" :title="title">
            <user-data 
                v-if="dialogFormVisible"
                ref="userDataRef" 
                :editData="editData"
                @submit="handleSubmit"
                @close="handleClose"
                >
            </user-data>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import UserData from './userData.vue'
import * as moment from 'moment';

interface User {
  id: number,
  name: string
  gender: string,
  date: string
}

interface searchData {
    name: string,
    gender: string,
    date: string
}

const genderOptions = [
    {label: 'male', value: '0'},
    {label: 'female', value: '1'}
]

const searchData = $ref<searchData>({
    name:'',
    gender:'',
    date:''
  })

// User[] 数据类型
let tableData = $ref<User[]>([
  {
    id: 0,
    name: 'Tom',
    gender: '0',
    date: '2016-05-03'
  }
])

let dialogFormVisible = $ref<Boolean>(false)
let title = $ref<String>('')
const userDataRef = ref<any>();

//  此处不能用 reactive， 因为 reactive 局限性
let editData = $ref<Object>({
    id: 0,
    name: '',
    gender: '',
    date: ''
})

const handleAdd = () => {
    title = 'ADD'
    editData = {}
    dialogFormVisible = true
}
const handleEdit = (index: number, row: User) => {
    title = 'EDIT'
    editData = row
    dialogFormVisible = true
}
const handleDelete = (index: number, row: User) => {
    tableData.splice(index, 1)
}

const handleSearch = () => {
    let searchTableDate = [...tableData]
    if(searchData.name) {
        searchTableDate = searchTableDate.filter(item => item.name === searchData.name)
    }
    if(searchData.gender) {
        searchTableDate = searchTableDate.filter(item => item.gender === searchData.gender)
    }
    if(searchData.date) {
        searchTableDate = searchTableDate.filter(item => item.date === searchData.date)
    }
    tableData = [...searchTableDate]
}

const handleSubmit = (value) => {
    value.date = moment(new Date()).format("YYYY-MM-DD")
    if(title==='ADD') {
        value.id = tableData?.length > 0 ? tableData[tableData.length - 1].id + 1 : 0
        tableData.push(value)
    } else {
        const index = tableData.findIndex(item => item.id === value.id)
        tableData[index] = value
    }
    dialogFormVisible = false
}

const handleClose = (value) => {
    dialogFormVisible = false
}

const computedDate = computed(() => {
    return (value) => {
        let str
        switch(value) {
            case '0': str = 'male'; break;
            case '1': str = 'female'; break;
        }
        return str
    }
})

</script>
<style lang="less" scoped>
.el-input {
    width: 160px;
    margin-right: 10px;
}
</style>
