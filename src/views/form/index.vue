<template>
  <a-table :columns="columns" :data-source="listData">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</template>
<script>
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const Mock = require('mockjs')

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'zip',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'date',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {

    return {
      listData: [],
      data,
      columns,
    }
  },
  methods: {
    listList() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            Mock.mock({
              [`data|100`]: [
                {
                  name: '@cname', // 中文名称
                  id: '@id', // id
                  province: '@province', // 省份
                  city: '@city', // 城市
                  'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
                  'zip|000000-999999': 0, // 000000至999999以内随机整数, 0只是用来确定类型
                  date: '@date("yyyy-MM-dd")', // 日期
                  address: '@city(true)', // 中国城市
                  'brother|1': ['张三', '李四', '王二'], // 随机选取 1 个元素
                },
              ],
            })
          )
        }, 100)
      })
    },
  },
  mounted() {
    this.listList().then((res) => {
      console.log(res)
      this.listData = res.data
    })
  },
}
</script>
