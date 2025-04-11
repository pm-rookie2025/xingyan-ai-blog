// 检查Notion数据库结构是否符合NotionNext要求
const { Client } = require('@notionhq/client');

// 使用API密钥初始化Notion客户端
const notion = new Client({
  auth: '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'
});

// 数据库ID
const databaseId = '1d2ce973040d807da6d8c91863920661';

// 必需的字段列表
const requiredProperties = [
  { name: 'title', type: 'title' },
  { name: 'type', type: 'select' },
  { name: 'status', type: 'select' },
  { name: 'date', type: 'date' },
  { name: 'category', type: 'select' }
];

// 检查数据库字段
async function checkDatabaseStructure() {
  try {
    console.log(`正在检查数据库结构 (ID: ${databaseId})...`);
    
    // 获取数据库详情
    const database = await notion.databases.retrieve({
      database_id: databaseId
    });
    
    console.log('✅ 成功连接到数据库!');
    console.log('📊 数据库名称:', database.title?.[0]?.plain_text || '未命名');
    
    // 检查数据库属性
    console.log('\n📋 检查必需字段:');
    const properties = database.properties || {};
    
    let missingFields = [];
    let wrongTypeFields = [];
    
    for (const required of requiredProperties) {
      const field = Object.entries(properties).find(([_, prop]) => 
        prop.name.toLowerCase() === required.name.toLowerCase()
      );
      
      if (!field) {
        missingFields.push(required.name);
        console.log(`❌ 缺少必需字段: ${required.name} (${required.type})`);
        continue;
      }
      
      const [fieldName, fieldProps] = field;
      if (fieldProps.type !== required.type) {
        wrongTypeFields.push({
          name: fieldName,
          expectedType: required.type,
          actualType: fieldProps.type
        });
        console.log(`❌ 字段类型不匹配: ${fieldName} - 期望: ${required.type}, 实际: ${fieldProps.type}`);
      } else {
        console.log(`✅ 字段正确: ${fieldName} (${fieldProps.type})`);
      }
    }
    
    // 检查数据库内容
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'status',
        select: {
          equals: 'Published'
        }
      }
    });
    
    console.log(`\n📝 已发布的文章数量: ${response.results.length}`);
    
    if (response.results.length === 0) {
      console.log('⚠️ 警告: 没有状态为"Published"的文章');
    } else {
      console.log('✅ 数据库中有已发布的文章');
      
      // 检查第一篇文章的必要属性是否都有值
      const firstPage = response.results[0];
      console.log('\n📄 检查第一篇文章:');
      
      for (const required of requiredProperties) {
        const propertyName = Object.keys(firstPage.properties).find(
          key => firstPage.properties[key].type === required.type
        );
        
        if (!propertyName) {
          console.log(`❌ 文章缺少 ${required.name} 属性`);
          continue;
        }
        
        const property = firstPage.properties[propertyName];
        let hasValue = false;
        
        switch (required.type) {
          case 'title':
            hasValue = property.title.length > 0;
            break;
          case 'rich_text':
            hasValue = property.rich_text.length > 0;
            break;
          case 'select':
            hasValue = property.select !== null;
            break;
          case 'date':
            hasValue = property.date !== null;
            break;
          default:
            hasValue = true;
        }
        
        if (hasValue) {
          console.log(`✅ ${propertyName} 有值`);
        } else {
          console.log(`❌ ${propertyName} 没有值`);
        }
      }
    }
    
    // 总结问题
    console.log('\n📋 问题总结:');
    if (missingFields.length === 0 && wrongTypeFields.length === 0 && response.results.length > 0) {
      console.log('🎉 恭喜! 数据库结构符合NotionNext要求，应该能正常工作。');
    } else {
      console.log('⚠️ 发现以下问题:');
      
      if (missingFields.length > 0) {
        console.log(`- 缺少必需字段: ${missingFields.join(', ')}`);
      }
      
      if (wrongTypeFields.length > 0) {
        console.log('- 字段类型不匹配:');
        wrongTypeFields.forEach(field => {
          console.log(`  * ${field.name}: 期望 ${field.expectedType}, 实际 ${field.actualType}`);
        });
      }
      
      if (response.results.length === 0) {
        console.log('- 没有状态为"Published"的文章');
      }
      
      console.log('\n💡 建议:');
      console.log('1. 使用NotionNext官方模板创建新数据库');
      console.log('2. 确保所有必需字段都设置正确');
      console.log('3. 至少添加一篇状态为"Published"的文章');
    }
    
  } catch (error) {
    console.log('❌ 检查数据库结构失败!');
    console.error('错误详情:', error.message);
  }
}

// 执行检查
checkDatabaseStructure(); 