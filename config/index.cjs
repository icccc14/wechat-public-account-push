/* eslint-disable */
/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'push-plus',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  
  USERS: [
    {
      // 想要发送的人的名字
      name: '轩轩',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '1ee5af64855a4dba835c6186511605a9',
      province: '黑龙江',
      city: '哈尔滨',
      
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-19',
      festivals: [
       
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '轩轩', year: '2005', date: '06-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 已破壳：
        { keyword: 'love_day', date: '2005-06-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    { // 想要发送的人的名字
      name: '牛牛',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '7c02b1e7333645f585463ef26b234653',
      province: '黑龙江',
      city: '大庆',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0003',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-12',
      festivals: [
       
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '牛牛', year: '2007', date: '04-12',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 已破壳：
        { keyword: 'love_day', date: '2007-04-12' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],},
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '1ee5af64855a4dba835c6186511605a9',
    }
  ],

}

module.exports = USER_CONFIG

