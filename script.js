const menu=document.querySelector(".menu-toggle"),nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("site-nav-open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("site-nav-open")));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
document.querySelector("#reset-form")?.addEventListener("submit",e=>{e.preventDefault();document.querySelector(".form-status").textContent="Your request is ready to send. We’ll connect this form to Resettable’s email before launch."});
document.querySelector("#year").textContent=new Date().getFullYear();
