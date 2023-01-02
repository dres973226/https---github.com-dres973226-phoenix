function readURL(input){
    if(input.files && input.files[0]){
      let imageTagID = input.getAttribute("targetID");
      let reader = new FileReader();
      reader.onload = function (e) {
         var img = document.getElementById(imageTagID);//查找特定元素(imageTagID)
         img.setAttribute("src", e.target.result)//圖像的解析路徑(到預覽的src)
      }
      reader.readAsDataURL(input.files[0]);//因為單選的關係，所以有檔案一定是在第0個
    }
  }