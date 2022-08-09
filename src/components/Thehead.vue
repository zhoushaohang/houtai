<template>
  <div class="Navigation">
    <a-menu v-model="current" mode="horizontal" class="wqd">
      <a-menu-item key="mail"><router-link to="/dashboard"><a-icon type="mail" />Navigation One </router-link> </a-menu-item>
      <a-menu-item key="app" ><router-link to="/exception"><a-icon type="appstore" />Navigation Two </router-link> </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><router-link to="/form"><a-icon type="setting" />Navigation Three - Submenu</router-link></span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <router-link to="/list">Navigation Four - Link</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
    };
  },
};
</script>
<style scoped>
.Navigation {
  display: flex;
    justify-content:center
}
.wqd{
  justify-content:center
}
</style>