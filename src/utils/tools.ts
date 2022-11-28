// 好东西
export const browserInfo = {
    versions: (() => {
        const u = navigator.userAgent;
        return {
            //移动终端浏览器版本信息
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
        };
    })(),
    language: (
        (navigator as any).browserLanguage || navigator.language
    ).toLowerCase(),
};
export const downloadFileByUrl = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.click();
    URL.revokeObjectURL(a.href);
};

export const urlSearch = (href) => {
    let name, value;
    let str = href; //取得整个地址栏
    let num = str.indexOf("?");
    str = str.substr(num + 1); //取得所有参数
    const arr = str.split("&"); //各个参数放到数组里
    const json = {} as {
        image: string;
        avatarid: string;
    };
    for (let i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            json[name] = value;
        }
    }
    return json;
};
