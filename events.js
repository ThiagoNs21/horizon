
document.querySelectorAll("aside")[0].addEventListener("click",()=>{
    document.querySelectorAll("article")[0].innerHTML+=`    
<section>
    <div class=" p5 br3 m1">new div</div>
<nav><button class="opens" type="button">open</button><button class="closes" type="button">close</button></nav>
</section>`;
});