

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".item");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });
});


let darkBtn = document.getElementById("darkBtn");
darkBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    // تغيير نص الزرار
    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "Light Mode";
    } else {
        darkBtn.textContent = "Dark Mode";
    }
});


const c=document.getElementById('c'), ctx=c.getContext('2d');
let w, h, stars=[];
function resize(){w=c.width=innerWidth; h=c.height=innerHeight}
window.onresize=resize; resize();

function init(){
  stars=[];
  for(let i=0;i<300;i++){
    stars.push({x:Math.random()*w, y:Math.random()*h, z:Math.random()*1.2, vx:(Math.random()-0.5)*0.7});
  }
}
function draw(){
  ctx.fillStyle='rgb(2,2,8)';
  ctx.fillRect(0,0,w,h);

  for(let s of stars){
    s.x += s.vx;
    s.y += Math.sin((s.x+w)/120)*0.1;
    if(s.x<0) s.x=w; if(s.x>w) s.x=0;
    const r = 0.6 + s.z*2;
    ctx.beginPath(); ctx.arc(s.x,s.y,r,0,Math.PI*2);
    ctx.fillStyle = `rgba(255,245,200,${0.5 + s.z*0.5})`; ctx.fill();
  }
  requestAnimationFrame(draw);
}

init(); draw();


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
    });
});

