// main.js - 服装店网站交互
document.addEventListener('DOMContentLoaded', function() {
    // 更新页脚年份
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 控制台友好提示
    console.log(`%c 👗 欢迎光临【店铺名称】官网`, 'color: #d4a574; font-size: 16px; font-weight: bold;');
    console.log(`%c ✨ 网站已就绪，祝你妈妈生意兴隆！`, 'color: #666;');

    // 可以为未来添加图片懒加载、平滑滚动等交互
});