console.log('这是jm script!');
(function () {
    $('.skew-title').children('span').hover((function () {
        var $el, n;
        $el = $(this);
        n = $el.index() + 1;
        $el.addClass('flat');
        if (n % 2 === 0) {
            return $el.prev().addClass('flat');
        } else {
            if (!$el.hasClass('last')) {
                return $el.next().addClass('flat');
            }
        }
    }), function () {
        return $('.flat').removeClass('flat');
    });
    $("#jm_switch_inner").click(function () {
        alert("点击")
        var imgSrc = [];
        $("div").each(function () {
            imgSrc.push($(this).attr("text"));
        });
        alert(imgSrc)
        alert(imgSrc.length)
    });

}).call(this);

$("#start").click(function () {
    alert("start click.....")
    sendMessageToContentScript({cmd: 'jm_start', value: "测试输出"}, function (response) {
        console.log('来自content的回复：' + response);
    })
});

// 给当前页面发消息
function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}

