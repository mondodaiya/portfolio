var count = 0;

function addCount() {
  count = count + 1;
  popup();
  // alert(count + '回目');
  if(count>=1){
    count = 0;
    // alert("a");
  }
}

function popup(){
  var txt;
  var r = confirm("プロフィールページに移動しますか？");
  if (r == true) {
    location.href="profile.html";
    // window.open('profile.html');
  }
}
