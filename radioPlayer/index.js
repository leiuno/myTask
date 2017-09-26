/**
 * Created by leiuno on 26/09/2017.
 */

var log = console.log.bind(console)
var xhr = new XMLHttpRequest();
xhr.open = ('GET', './music.json', true);
log(xhr.readyState)
xhr.onload = function(){
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
        log(this.responseText);
    }else{
        log('数据获取失败');
    }
}
xhr.onerror = function(){
    log('网络异常');
}
xhr.send();