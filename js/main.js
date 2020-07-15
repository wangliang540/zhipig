function setJumpNumber(startNum, targetNum, time = 1, selector) {
    let dom = document.querySelector(selector);
    let originNum = startNum;
    let stepNum = 0;
    let timeNum = time;
    dom.innerHTML = startNum;
    let num = targetNum;
    let timeId = setInterval(() => {

        if (typeof targetNum == "string") {
            targetNum = targetNum.split(",").join("")
        }
        if (originNum < targetNum) {
            timeNum -= 0.001;
            let strNum = originNum.toString();
            // 数字比较少的时候直接用 + 1; 数字很大直接 +1 要很久才能调到最对应的数字，所有后三位数随机跳动的方式进行模拟生成
            if (targetNum.toString().length <= 6) {
                stepNum += 1; // 这样才可以实现越跳越快的效果
                originNum = originNum + stepNum;
                let arr = originNum.toString().split("");
                let newarr = []
                if (arr.length >= 8) {
                    newarr.push(arr.slice(0, arr.length - 7).join(""))
                    newarr.push(arr.slice(-8, -5).join(""))
                    newarr.push(arr.slice(-5, -3).join(""))
                    newarr.push(arr.slice(-3).join(""))
                } else if (arr.length > 6 && arr.length < 8) {
                    newarr.push(arr.slice(0, 3).join(""))
                        // newarr.push(arr.slice(-8,-5).join(""))
                    newarr.push(arr.slice(-5, -3).join(""))
                    newarr.push(arr.slice(-3).join(""))
                } else if (arr.length >= 6) {
                    newarr.push(arr.slice(0, arr.length - 5).join(""))
                    newarr.push(arr.slice(-5, -3).join(""))
                    newarr.push(arr.slice(-3).join(""))
                } else if (arr.length >= 3) {
                    newarr.push(arr.slice(0, arr.length - 2).join("")),
                        newarr.push(arr.slice(-3).join(""))
                } else {
                    newarr.push(arr.slice(-3).join(""))
                }
                dom.innerHTML = newarr.join(",");
            } else {
                stepNum += 500; // 这样才可以实现越跳越快的效果
                originNum = originNum + stepNum;
                let arr = originNum.toString().split("");
                let newarr = []
                if (arr.length >= 8) {
                    newarr.push(arr.slice(0, arr.length - 7).join(""))
                    newarr.push(arr.slice(-8, -5).join(""))
                    newarr.push(arr.slice(-5, -3).join(""))
                    newarr.push(arr.slice(-3).join(""))
                } else if (arr.length > 6 && arr.length < 8) {
                    newarr.push(arr.slice(0, 3).join(""))
                        // newarr.push(arr.slice(-8,-5).join(""))
                    newarr.push(arr.slice(-5, -3).join(""))
                    newarr.push(arr.slice(-3).join(""))
                } else if (arr.length >= 6) {
                    newarr.push(arr.slice(0, arr.length - 5).join(""))
                    newarr.push(arr.slice(-5, -3).join(""))
                    newarr.push(arr.slice(-3).join(""))
                } else if (arr.length >= 3) {
                    newarr.push(arr.slice(0, arr.length - 2).join("")),
                        newarr.push(arr.slice(-3).join(""))
                } else {
                    newarr.push(arr.slice(-3).join(""))
                }
                dom.innerHTML = newarr.join(",");
            }
        } else {
            dom.innerHTML = num;
            clearInterval(timeId);
        }
    }, timeNum);
}


function load() {
    var speed = 0.2; //设置速度
    var vdo = document.querySelector(".video"); //获取id
    vdo.playbackRate = speed; //改变速度

    $(".icon-menu").on("click", function() {
        $(".list-mask").show();
    })
    $(".list-mask-content div").on("click", function() {
        $(".list-mask").hide();
    })
}




jQuery(window).on('load', function() {
    (function($) {
        setJumpNumber(11, '1,85,689', 1, '.number-driver');
        setJumpNumber(11, '85,689', 1, '.cargo-owner-driver');
        setJumpNumber(11, '1,291,85,689', 1, '.waybill-driver');
        setJumpNumber(11, '101,85,689', 1, '.line-driver');
        load()
    })(jQuery);
});