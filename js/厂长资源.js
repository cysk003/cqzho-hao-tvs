var rule={
    title:'厂长资源',
    // host:'https://czspp.com',
    host:'http://czzy03.com',
    url:'/fyclassfyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}{{fl.class}}{{fl.area}}/page/fypage',
    filter: {
    "movie_bt":[
{
"key":"area",
"name":"分类",
"value":[
{"v":"/movie_bt_series/zuixindianying","n":"电影"},
{"v":"/movie_bt_series/guochanju","n":"国剧"},
{"v":"/movie_bt_series/mj","n":"美剧"},
{"v":"/movie_bt_series/hj","n":"韩剧"},
{"v":"/movie_bt_series/dohua","n":"动画"}
]
},
{
"key":"class",
"name":"类型",
"value":[
{"n":"全部","v":""},
{"n":"传记","v":"/movie_bt_tags/chuanji"},
{"n":"儿童","v":"/movie_bt_tags/etet"},
{"n":"冒险","v":"/movie_bt_tags/maoxian"},
{"n":"剧情","v":"/movie_bt_tags/juqing"},
{"n":"动作","v":"/movie_bt_tags/dozuo"},
{"n":"动漫","v":"/movie_bt_tags/doman"},
{"n":"动画","v":"/movie_bt_tags/dhh"},
{"n":"历史","v":"/movie_bt_tags/lishi"},
{"n":"古装","v":"/movie_bt_tags/guzhuang"},
{"n":"喜剧","v":"/movie_bt_tags/xiju"},
{"n":"奇幻","v":"/movie_bt_tags/qihuan"},
{"n":"家庭","v":"/movie_bt_tags/jiating"},
{"n":"恐怖","v":"/movie_bt_tags/kubu"},
{"n":"悬疑","v":"/movie_bt_tags/xuanyi"},
{"n":"惊悚","v":"/movie_bt_tags/kingsong"},
{"n":"战争","v":"/movie_bt_tags/zhanzhen"},
{"n":"歌舞","v":"/movie_bt_tags/gw"},
{"n":"武侠","v":"/movie_bt_tags/wuxia"},
{"n":"灾难","v":"/movie_bt_tags/zainan"},
{"n":"爱情","v":"/movie_bt_tags/aiqing"},
{"n":"犯罪","v":"/movie_bt_tags/fanzui"},
{"n":"科幻","v":"/movie_bt_tags/kh"},
{"n":"纪录片","v":"/movie_bt_tags/jlpp"},
{"n":"西部","v":"/movie_bt_tags/xb"},
{"n":"运动","v":"/movie_bt_tags/yd"},
{"n":"音乐","v":"/movie_bt_tags/yy"}
]
}
]
},
    searchUrl:'/page/fypage?s=**',
    searchable:2,
    filterable:0,
    headers:{'User-Agent':'PC_UA', },
    class_name:'电影&国剧&韩剧&美剧&动画',
    class_url:'zuixindianying&/movie_bt_series/guochanju&/movie_bt_series/hj&/movie_bt_series/mj&/movie_bt_series/dohua',
    // class_parse: '.navlist li:gt(0);a&&Text;a&&href;.*/(.*)',
    推荐:'.bt_img;ul&&li;*;*;*;*',
    double:true,
    一级:'.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级:{
        "title": "h1&&Text;.moviedteail_list li&&a&&Text",
        "img": "div.dyimg img&&src",
        // "desc": ".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7) a&&Text;.moviedteail_list li:eq(5) a&&Text",
        "desc": ".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7)&&Text;.moviedteail_list li:eq(5)&&Text",
        "content": ".yp_context&&Text",
        "tabs": ".mi_paly_box span",
        "lists": ".paly_list_btn:eq(#id) a"
    },
    搜索:'.search_list&&ul&&li;*;*;*;*',
    预处理:'rule_fetch_params.headers.Cookie="68148872828e9f4d64e7a296f6c6b6d7=5429da9a54375db451f7f9e4f16ce0ea;esc_search_captcha=1";let new_host="https://czspp.com";let new_html=request(new_host);if(/正在进行人机识别/.test(new_html)){let new_src=pd(new_html,"script&&src",new_host);log(new_src);let hhtml=request(new_src,{withHeaders:true});let json=JSON.parse(hhtml);let html=json.body;let key=html.match(new RegExp(\'var key="(.*?)"\'))[1];let avalue=html.match(new RegExp(\'value="(.*?)"\'))[1];let c="";for(let i=0;i<avalue.length;i++){let a=avalue[i];let b=a.charCodeAt();c+=b}let value=md5(c);log(value);let yz_url="https://czspp.com/a20be899_96a6_40b2_88ba_32f1f75f1552_yanzheng_ip.php?type=96c4e20a0e951f471d32dae103e83881&key="+key+"&value="+value;log(yz_url);hhtml=request(yz_url,{withHeaders:true});json=JSON.parse(hhtml);let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");let cookie=setCk?json[setCk].split(";")[0]:"";log("cookie:"+cookie);rule_fetch_params.headers.Cookie=cookie;setItem(RULE_CK,cookie)}',
}
