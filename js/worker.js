console.log('我被注入了！');
function jm_start() {
    alert($(document).attr("title"));
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    console.log("start.....")
    if(request.cmd == 'jm_start') alert(request.value);
    alert($(document).attr("title"));
    sendResponse('我收到了你的消息！');
    console.log("end.....")

});