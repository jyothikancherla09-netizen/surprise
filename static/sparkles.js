function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";
    sparkle.style.top="-20px";
    sparkle.style.left=Math.random()*100+"vw";
    sparkle.style.fontSize="16px";
    sparkle.style.animation="fall 5s linear";

    document.body.appendChild(sparkle);

    setTimeout(()=>sparkle.remove(),5000);
}

setInterval(createSparkle,600);
