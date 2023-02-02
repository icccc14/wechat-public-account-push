/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
     id: '0001',
    title: '轩轩日记',
    desc: `
      **{{date.DATA}}**
       
      ---
     
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      天气提醒：{{notice.DATA}}
      
      日出时间：{{sunrise.DATA}} 
      
      日落时间：{{sunset.DATA}} 
       
      ---
      
      土味情话：{{earthy_love_words.DATA}}
      
      从2005-06-19到现在已破壳{{love_day.DATA}}天
      
       {{birthday1.DATA}}
       
      ---
      今日建议：
        {{proposal.DATA}} {{chp.DATA}} 
        {{note_en.DATA}} 
        {{note_ch.DATA}}
  
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
 
]

module.exports = TEMPLATE_CONFIG
