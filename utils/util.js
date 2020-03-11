const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
//商品数据
const foods = [
  {
    f_id: '001',
    f_name: '重庆小面',
    f_detail: '重庆小面，是重庆四大特色之一，归属于重庆面食的一类。是一款发源于重庆的一种特色传统小吃。',
    f_src:'cloud://inf-e3208b.696e-inf-e3208b/c.jpg',
    f_num: '100'
  },
  {
    f_id: '002',
    f_name: '麻辣烫',
    f_detail: '喜欢辣的人的最爱，辣中作乐。',
    f_src: 'cloud://inf-e3208b.696e-inf-e3208b/f.jpg',
    f_num: '200'
  },
  {
    f_id: '003',
    f_name: '鸭血粉丝汤',
    f_detail: '鸭血粉丝汤是南京的传统名吃，属金陵菜、金陵小吃，是金陵菜和金陵小吃中重要的代表，也是久负盛名以鸭为特色的美食之一。',
    f_src: 'cloud://inf-e3208b.696e-inf-e3208b/g.jpg',
    f_num: '200'
  },
  {
    f_id: '004',
    f_name: '南昌瓦罐汤',
    f_detail: '南昌煨汤，又名南昌瓦罐汤。尤以南昌民间饭庄最为有名，是江西南昌地区的特色名菜，完全采用民间传统的煨汤方法，以土质陶器为瓦罐，精配食物，加以天然矿泉水为原料，置入1米方圆的巨型大缸内，以硬质木炭火恒温传统式六面受热，煨制达7小时以上，过程是160℃煨2 到3小时，接着降温到120℃煨2个小时左右，再用文火慢慢煨。',
    f_src: 'cloud://inf-e3208b.696e-inf-e3208b/h.jpg',
    f_num: '200'
  }
]
//获取信息列表
function getInfoList()
{
  let list = [];
  for(var i = 0; i< foods.length ; i++ ){
    let obj = {};
    obj.id = foods[i].f_id;
    obj.f_name = foods[i].f_name;
    obj.f_detail = foods[i].f_detail;
    obj.f_num = foods[i].f_num;
    list.push(obj);
  }
  return list;
}
//获取信息内容
function getFoodsDetail(f_id){
  let message = {
    code:'404',
    foods:{}
  };
  for( var i = 0; i < foods.length; i++){
    if (f_id == foods[i].f_id ){
      message.code = '200',
      message.foods = foods[i];
      break;
    }
  }
  return message;
}
module.exports = {
  getInfoList: getInfoList,
  getFoodsDetail: getFoodsDetail
}