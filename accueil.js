 let link1 = document.getElementById("link1");

 link1.addEventListener('click', handleLink1)

 function handleLink1(event) {
     event.preventDefault();
     let link1 = event.target;

     document.body.classList.add('fade-right');

     setTimeout(() => {
        window.location.href = link1.getAttribute('href');
     }, 300); }

 let link2 = document.getElementById("link2");

 link2.addEventListener('click', handlelink2)

 function handlelink2(event) {
    event.preventDefault();
    let link2 = event.target;

    document.body.classList.add('fade-left');

     setTimeout(() => {
        window.location.href = link2.getAttribute('href');
    }, 300); }

 let link3 = document.getElementById("link3");

 link3.addEventListener('click', handlelink3)

 function handlelink3(event) {
     event.preventDefault();
    let link3 = event.target;

     document.body.classList.add('fade-top');

     setTimeout(() => {
         window.location.href = link3.getAttribute('href');
     }, 300);
 }