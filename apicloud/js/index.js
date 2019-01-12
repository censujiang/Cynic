apiready = function () {
  //Start ajpush
  var ajpush = api.require('ajpush');
  ajpush.init(function(ret) {
  if (ret && ret.status){
  }
  });
  funIniGroup();
  //end ajpush
}
//获取当前页url和title，用于分享
var pageurl = window.location.href;
var pagetitle = document.title;
//Start QQPlus
var qq = api.require('QQPlus');
qq.shareNews({
    url: '"+pageurl+"',
    title: '"+pagetitle+"',
    description: '新闻描述',
    imgUrl: 'http://upload.wabei.cn/2011/0807/20110807025817844.jpg'
},function(ret,err){
  if (ret.status){
    alert("分享成功！");
  } else {
    api.alert({msg: JSON.stringify(err)});
  }
});
//End QQPlus
