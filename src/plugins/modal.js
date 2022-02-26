import { Message, MessageBox } from 'element-ui'
export default {
// 成功消息
  msgSuccess (content) {
    Message.success(content)
  },
  // 确认窗体
  confirm (content) {
    return MessageBox.confirm(content, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
  }
}
