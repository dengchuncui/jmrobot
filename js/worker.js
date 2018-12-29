console.log('我被注入了！');

function jm_start() {
    console.log("jm_start");

    var list_container = $('#listContainer').find('li')
    console.log(list_container.length)
    list_container.each(function () {
            var wx_div_list = $(this).find('div')
            console.log("div 数量:" + wx_div_list.length)
            wx_div_list.each(function () {
               var class_name= $(this).attr('class');
                console.log(class_name);
                if(class_name == 'message_opr'){
                        //点击分享
                    var find = $(this).find('a:eq(1)');
                    find[0].click();
                    console.log("点击完成....."+find.text())
                    console.log("点击完成2....."+find)
                }
            })
        }
    )
}
    //模拟鼠标点击
function dianji(){
$('.jsBtLabel').click();
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("start.....")
    if (request.cmd == 'jm_start') {
        dianji();
        jm_start();

        alert(request.value);
    }
    sendResponse('我收到了你的消息！');
    console.log("end.....")

});