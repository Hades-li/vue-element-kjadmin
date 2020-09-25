<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-02 14:03:21
 * @LastEditTime: 2019-08-20 13:39:09
 * @LastEditors: Please set LastEditors
 -->
<script>
export default {
  name: 'SRender',
  functional: true,
  props: {
    scope: Object,
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props.scope) : ''
  }
}
</script>
