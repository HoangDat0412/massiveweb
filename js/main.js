window.onscroll = function () {
    //Code tạo hiệu ứng xuất hiện thanh màu đen khi scroll
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // translate(-50%,0)
        document.getElementById("header1").style.transform = "translate(0,0)";
    } else {
        document.getElementById("header1").style.transform = "translate(0,-100%)";
    }
}