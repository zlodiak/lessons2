// проверить наличие верт скролла


const htmlEl = document.querySelector('html');
if (htmlEl) {
  console.log(this.hasNoVerticalScroll(htmlEl));
} 



function hasNoVerticalScroll(node){
  if(node == undefined){
      if(window.innerHeight){
          return document.body.offsetHeight> window.innerHeight;
      }
      else {
          return  document.documentElement.scrollHeight > 
              document.documentElement.offsetHeight ||
              document.body.scrollHeight>document.body.offsetHeight;
      }
  }
  else {
      return node.scrollHeight> node.offsetHeight;
  }
}    