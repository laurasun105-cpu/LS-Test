const { add, isEven } = require("../src/index");

console.log("=== 开始测试 ===");

// 测试 add 函数
let test1Pass = add(1, 2) === 3;
let test2Pass = add(-1, 1) === 0;

// 测试 isEven 函数
let test3Pass = isEven(4) === true;
let test4Pass = isEven(5) === false;

const allPass = test1Pass && test2Pass && test3Pass && test4Pass;

// 输出测试结果
console.log(`测试 1 (1+2=3): ${test1Pass ? " 通过" : "失败"}`);
console.log(`测试 2 (-1+1=0): ${test2Pass ? "通过" : "失败"}`);
console.log(`测试 3 (4是偶数): ${test3Pass ? "通过" : "失败"}`);
console.log(`测试 4 (5不是偶数): ${test4Pass ? "通过" : "失败"}`);

if (allPass) {
  console.log("=== 所有测试通过  ===");
  process.exit(0);
} else {
  console.log("=== 部分测试失败  ===");
  process.exit(1);
}