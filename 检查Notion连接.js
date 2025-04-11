// 检查Notion API连接状态的简单脚本
const { Client } = require('@notionhq/client');

// 使用你的API密钥初始化Notion客户端
const notion = new Client({
  auth: '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'
});

// 使用默认模板数据库ID进行测试
const defaultDatabaseId = '02ab3b8678004aa69e9e415905ef32a5';
// 你原来的数据库ID
const yourDatabaseId = '1d2ce973040d807da6d8c91863920661';

async function checkConnection() {
  console.log('===== 测试默认模板数据库连接 =====');
  await testDatabase(defaultDatabaseId);
  
  console.log('\n===== 测试你的数据库连接 =====');
  await testDatabase(yourDatabaseId);
}

async function testDatabase(databaseId) {
  try {
    console.log(`正在检查Notion API连接 (ID: ${databaseId})...`);
    
    // 尝试查询数据库
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1 // 只获取一条记录
    });
    
    console.log(`✅ 成功连接到数据库 "${databaseId}"!`);
    console.log(`✅ 共有 ${response.results.length} 条记录被返回`);
    
    if (response.results.length > 0) {
      console.log('✅ 数据库包含记录，页面应该能正常显示');
    } else {
      console.log('⚠️ 数据库存在但没有记录，请确保添加了文章');
    }
    
  } catch (error) {
    console.log(`❌ 连接到数据库 "${databaseId}" 失败!`);
    console.error('错误详情:', error.message);
    
    if (error.code === 'unauthorized') {
      console.log('⚠️ API密钥可能无效或权限不足');
    } else if (error.code === 'object_not_found') {
      console.log('⚠️ 找不到指定的数据库，请检查数据库ID');
    } else if (error.code === 'rate_limited') {
      console.log('⚠️ API调用频率过高，请稍后再试');
    }
    
    console.log('\n解决建议:');
    console.log('1. 确认API密钥正确且未过期');
    console.log('2. 确认数据库ID正确');
    console.log('3. 确保已将你的集成添加到数据库的共享列表中');
    console.log('4. 如果使用自己的数据库，确保正确复制了模板结构');
  }
}

// 执行检查
checkConnection(); 