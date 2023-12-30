let money = 100;
let apple = 0;
function getApple(x) {
  console.log(x);
  if(x>0){
    getMore(x);
  }else{
    console.log("i have no money to share anyone", apple)
  }

}
function getMore(x) {
    getApple(x-10);
    console.log("buy more", x)
}
getApple(money);
