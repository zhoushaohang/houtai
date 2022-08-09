<template>
  <div id="app">
    <button @click="testReq">测试请求</button>
    <router-view/>
  </div>
</template>
<script>
import Axios from 'axios'
 
export default {
  name: 'App',
  methods:{
    testReq:function(){
         Axios.post('/api/test').then((res) => {
              console.log(res)
          }).catch((err) => {
              console.log(err)
          })
    }
  }
}
</script>