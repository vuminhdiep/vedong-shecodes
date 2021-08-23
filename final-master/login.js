//hard-coded members
var current_coin = 0;
var pending = 2;

var members = [
    {
        username: "Minh",
        password: "minhle",
        location: "Tp.HCM",
        coin: 50
    },
    {
        username: "An",
        password: "annguyen",
        location: "Hà Nội",
        coin: 50
    },
    {
        username: "Diep",
        password: "diepvu",
        location: "Hà Nội",
        coin: 50
    },
    {
        username: "Trang",
        password: "trang",
        location: "Hà Nội",
        coin: 50
    },
    {
        username: "Ngoc",
        password: "ngoc",
        location: "Hà Nội",
        coin: 50
    },
    {
        username: "Chi",
        password: "chi",
        location: "Hà Nội",
        coin: 50
    }
];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var match = false;
    var i = 0;
    while (match != true && i < members.length) {
        if (username == members[i].username && password == members[i].password) {
            document.getElementById("name").innerHTML = members[i].username;
            current_coin = members[i].coin;
            document.getElementById("coin").innerHTML = "Ve-đồng: " +  current_coin + " | Ve-đồng đang chờ: " + pending;
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
            document.getElementById("buttons").style.visibility = "visible";
            document.getElementById("info").style.visibility = "visible";
            match = true;
        } else {
            i++;
        }
    }
    if (match == false) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng, bạn vui lòng nhập lại nhé!");
    }
}

function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var i = 0;
    while ( i < members.length) {
        if (username == members[i].username && password == members[i].password) {
            document.getElementById("name").innerHTML = members[i].username;
            current_coin = members[i].coin;
            document.getElementById("coin").innerHTML = "Coin: " +  current_coin;
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
            document.getElementById("buttons").style.visibility = "visible";
            document.getElementById("info").style.visibility = "visible";

        } else {
            i++;
        }
    }


}

function openRecycle() {
    document.getElementById("recycle").style.display = "block";
    document.getElementById("collect").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("complete").style.display = "none";

}

function closeRecycle() {
    document.getElementById("recycle").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("complete").style.display = "none";

}

function openCollect() {
    document.getElementById("collect").style.display = "block";
    document.getElementById("recycle").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("complete").style.display = "none";

}

function closeCollect() {
    document.getElementById("collect").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("complete").style.display = "none";

}

function doneRecycle() {
    document.getElementById("recycle").style.display = "none";
    document.getElementById("collect").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("complete").style.display = "none";

    document.getElementById("result").innerHTML = "<p> Danh sách các địa điểm bạn có thể gửi các vật dụng bạn đã chọn: <br> " +
        "(1) Nguyễn Văn A: 123 Đống Đa, Hà Nội <br> (2) Lê Thị B: 456 Hoàn Kiếm, Hà Nội <br></p>";

    pending = pending - document.querySelectorAll('input[name=recycle]:checked').length;
    document.getElementById("coin").innerHTML = "Ve-đồng: " + current_coin + " | Ve-đồng đang chờ: " + pending;
}

function doneCollect() {
    document.getElementById("recycle").style.display = "none";
    document.getElementById("collect").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("complete").style.display = "none";

    document.getElementById("result").innerHTML = "Cám ơn bạn đã đăng ký tham gia thu gom rác!";
    pending = pending + document.querySelectorAll('input[name=collect]:checked').length;
    document.getElementById("coin").innerHTML = "Ve-đồng: " + current_coin + " | Ve-đồng đang chờ: " + pending;
}

function openHistory(){
    document.getElementById("recycle").style.display = "none";
    document.getElementById("collect").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("collect").style.display = "none";
    document.getElementById("complete").style.display = "block";
    document.getElementById("history").style.display = "block";
}

function doneComplete(){
    var complete = document.querySelectorAll('input[name=done]:checked').length;
    if (pending>0){
        pending = pending - complete;
    }
    else{
        pending = pending + complete;
    }
    current_coin = current_coin + complete;
    document.getElementById("complete").style.display = "none";
    document.getElementById("coin").innerHTML = "Ve-đồng: " + current_coin + " | Ve-đồng đang chờ: " + pending;
}
