



let sop_img=[];
const price1=document.getElementById('price')

sop_img = document.getElementsByClassName("pro");
const product_view_img = document.getElementsByClassName("pro-image");
const product_view = document.getElementsByClassName("single-pro-details");


console.log(product_view_img)



sop_img[2].onclick=function(){
    product_view_img.src= sop_img[2].src;
    
    window.location.href='PRODUCT_VIEW.HTML';
   
}




