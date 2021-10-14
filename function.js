
let url = document.domain

if (url == "cn.bing.com") {
    setTimeout(() => {
        console.log($("p"))
        // var color = window.getComputedStyle(document.querySelector('p'), ':before')
        // console.log(color)
    }, 2000)
}

if (url == "*.taobao.com") {
    setTimeout(() => {
        $("#header").remove()
        let date = new Date
        let nr = "娃哈哈AD钙  :" + date;
        console.log(url)
        console.log('fffff')
        printpage(nr)
    }, 3000)

}

/**
 * 弹出打印框
 * @param {需要打印的html拼接字符串} html 
 */
function printpage(html) {
    var newWindow = window.open('', '_blank', 'width=1,height=1,top=10000,left=10000');
    // var html = "";// 这里的html可由别处传参，也可自己去接口获取
    newWindow.document.write(html);
    newWindow.document.close();
    newWindow.print();
    newWindow.close();
}
// dom[0].remove()