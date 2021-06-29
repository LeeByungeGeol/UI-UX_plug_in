$(function () {
    // 현재 시간부터 12시간 뒤
    var datetime = new Date().getTime()/1000+86400+1;
    console.log(datetime.getTime()/1000);

    var flipdown = new FilpDown(datatime);
    flipdown.start();
})