function giveup(input) {
    var r = confirm("是否放棄此次編輯？");
    if (r == true) {
        x = location.href = "/main.html";
    } else {
        x = "放棄";
    }
  }