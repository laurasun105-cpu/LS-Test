/**
 * 测试函数：两数相加
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * 测试函数：判断是否为偶数
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
  return num % 2 === 0;
}

// 导出给测试使用
module.exports = { add, isEven };

// 本地直接运行
if (require.main === module) {
  console.log("add(1,2) =", add(1, 2));
  console.log("isEven(4) =", isEven(4));
}