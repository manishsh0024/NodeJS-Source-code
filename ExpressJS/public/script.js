uList = document.querySelector(".ul");
icon = document.querySelector("#icon");
let anchor = document.querySelector(".anchor");


icon1 = 'ri-menu-line';
icon2 = 'ri-skip-right-line';
let a = true;

icon.addEventListener("click", function(){
    if(a==true){
        icon.classList.remove(icon1);
        icon.classList.add(icon2);
        uList.classList.add('ul1');
        uList.classList.remove('ul');
        a = false;
    }
    else{
        icon.classList.remove(icon2);
        icon.classList.add(icon1);
        uList.classList.add('ul');
        uList.classList.remove('ul1');
        a = true;
    }
})

anchor.addEventListener("click", function(){

})