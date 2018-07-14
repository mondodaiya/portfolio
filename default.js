var count = 0;

function addCount() {
  count = count + 1;
  // alert(count + '回目');
  if(count>=3){
    count = 0;
    // alert("a");
    // location.href = "https://www.pazru.net/";
    popup();
  }
}

function popup(){
  var txt;
  var r = confirm("プロフィールページに移動しますか？");
  if (r == true) {
    // location.href="https://www.pazru.net/";
    window.open('profile.html','_blank');
  }
}
