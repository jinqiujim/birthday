// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "我一直相信",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "人间有真情，人间有真爱",  // 同上...
        "在我灵魂无处安放的那些个时候",
        "您给予我的陪伴",
        "小伙子都记在心里了",
        "时刻谨记：苟富贵，不相忘!淦！",
        "虽然本沙雕时不时天空翱翔",
        "可你不要放弃我啊😂",
        "我把我的线给你",
        "你牵一下",
        "我马上就飞回你身边陪着你了✨",
        "没有冷笑话也行",
        "最重要的是",
        "祝贺贺！身体健康！生日快乐！财源广进！",
        "以上",
        
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "你生日啦",
        story: "还有？",
    }
};
