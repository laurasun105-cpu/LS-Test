// 1. 基础变量和函数
const projectName = "测试项目";
let clickCount = 0;

// 测试函数：处理按钮点击
function handleTestClick() {
  clickCount++;
  // 获取页面输出区域
  const outputElement = document.getElementById("output");
  
  let num1 = clickCount;
  let num2 = 20;
  // 拼接输出内容
  const outputText = `
        项目名称：${projectName} <br>
        按钮点击次数：${clickCount} <br>
        当前时间：${new Date().toLocaleString()} <br>
        测试计算: ${num1} +  ${num2} = ${num1 + num2}
    `;

  // 更新页面内容
  outputElement.innerHTML = outputText;

  // 控制台输出（F12可查看）
  console.log(`[测试日志] 按钮被点击${clickCount}次`);
}

// 2. 绑定按钮点击事件（页面加载完成后执行）
document.addEventListener("DOMContentLoaded", () => {
  const testBtn = document.getElementById("testBtn");
  testBtn.addEventListener("click", handleTestClick);
});

// 3. 额外测试：数组/循环（控制台输出）
const fruits = ["苹果", "香蕉", "橙子"];
console.log("水果列表：");
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
