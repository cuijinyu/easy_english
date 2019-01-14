// 监听文字被选中事件
document.body.addEventListener('mouseup', () => {
    let text = window.getSelection().toString();
});