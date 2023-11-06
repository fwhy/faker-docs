<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
</script>

<template>
  <ParentLayout>
    <template #page-content-bottom>
      <div class="page-content-bottom">
        <component is="script" async
                   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2126238242346449"
                   crossorigin="anonymous"></component>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-2126238242346449"
             data-ad-slot="3688956858"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <component is="script">(adsbygoogle = window.adsbygoogle || []).push({});</component>
      </div>
    </template>

    <template #page-bottom>
      <div class="page-footer">Made with <a href="https://v2.vuepress.vuejs.org/">Vuepress</a> | @ 2020 fwhy</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.page-footer {
  text-align: center;
}
</style>
