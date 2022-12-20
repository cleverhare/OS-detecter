let Name = "";
const brand = document.querySelector('.fa-brands')
if (navigator.userAgent.indexOf("Win") != -1){
    Name = "Windows";
    brand.classList.replace("fa-apple", "fa-microsoft")
    
} 

if (navigator.userAgent.indexOf("Linux") != -1) {

    Name =   "Linux";
    brand.classList.replace("fa-apple", "fa-linux")
}
if (navigator.userAgent.indexOf("Android") != -1){
    Name =  "Android";
    brand.classList.replace("fa-apple", "fa-android")
} 


