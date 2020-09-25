<template>
  <div>
    <demo-block class="m-t-15" :md="code_1">
      <popup-small></popup-small>
    </demo-block>
    <demo-block class="m-t-15" :md="code_2">
      <popup-default></popup-default>
    </demo-block>
    <demo-block class="m-t-15" :md="code_3">
      <popup-large></popup-large>
    </demo-block>
  </div>
</template>

<script>
import DemoBlock from '@/components/demoBlock'
import PopupSmall from './components/popup_small'
import PopupDefault from './components/popup'
import PopupLarge from './components/popup_large'
import code_1 from './doc/popupCode_small.md'
import code_2 from './doc/popupCode.md'
import code_3 from './doc/popupCode_large.md'

export default {
  name: 'Popup',
  components: {
    DemoBlock,
    PopupSmall,
    PopupDefault,
    PopupLarge,
  },
  data: () => ({
    code_1,
    code_2,
    code_3,
  })
}
</script>

<style scoped>

</style>
