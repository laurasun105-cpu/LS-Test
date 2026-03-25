const fs = require('fs');

// 测试模块名称
const testModuleName = "采购订单";

// 搜索关键字数组
const searchKeywords = ["采购需求单号","采购需求人","下单日期","是否逾期"];

// 测试数据模板
const testCaseTemplate = {
    moduleName: '{模块名称}',
    testPath: "备件管理->{模块名称}",
    testName: "验证{模块名称}列表，按照“{搜索关键字}”搜索过滤",
    preSteps: "系统中存在任意{模块名称}数据",
    testSteps: "根据测试数据按照“{搜索关键字}”搜索，点击搜索按钮",
    testData: "1. {搜索关键字}\n2. 不存在的{搜索关键字}",
    testResult: "1. 列表刷新,列表展示都包含测试数据关键字\n2. 若列表不存在某个数据，显示为“暂无数据”"
};

// 生成测试数据
function generateTestData() {
    return searchKeywords.map(keyword => ({
        moduleName: testModuleName,
        searchKeyword: keyword
    }));
}

// 替换模板中的占位符
function replacePlaceholders(template, data) {
    return Object.entries(template).reduce((acc, [key, value]) => {
        if (key === 'moduleName') {
            acc[key] = value;
            return acc;
        }
        
        acc[key] = value
            .replace(/\{模块名称\}/g, data.moduleName)
            .replace(/\{搜索关键字\}/g, data.searchKeyword)
            .replace(/"/g, '""'); // 转义CSV中的双引号
        return acc;
    }, {});
}

// 生成CSV内容
function generateCSV() {
    const testData = generateTestData(); // 生成测试数据
    let csvContent = "功能模块,测试路径,测试点,前置条件,测试步骤,测试步骤2,测试步骤3,测试数据,预期结果\r\n";
    
    testData.forEach(data => {
        const testCase = replacePlaceholders(testCaseTemplate, data);
        
        csvContent += [
            `"${data.moduleName}"`,
            `"${testCase.testPath}"`,
            `"${testCase.testName}"`,
            `"${testCase.preSteps}"`,
            `"${testCase.testSteps}"`,
            "",
            "",
            `"${testCase.testData}"`,
            `"${testCase.testResult}"`
        ].join(',') + '\r\n';
    });
    
    return csvContent;
}

const fileName = "搜索测试用例"+Math.floor(Math.random() * 90000)+".csv";
// 导出CSV文件
function exportCSV() {
    try {
        const csvContent = generateCSV();
        fs.writeFileSync(fileName, '\uFEFF' + csvContent, 'utf8');
        console.log(`CSV文件已成功生成: ${fileName}`);
        console.log(`测试模块: ${testModuleName}`);
        console.log(`包含关键字: ${searchKeywords.join(', ')}`);
    } catch (error) {
        console.error("生成CSV文件时出错:", error);
    }
}

// 调用导出函数
exportCSV();