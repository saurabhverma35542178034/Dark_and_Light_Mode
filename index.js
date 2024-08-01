document.addEventListener('DOMContentLoaded',()=>{

    let checkbox=document.getElementById('checkbox');
    checkbox.addEventListener('change',()=>{
        document.body.classList.toggle('dark');
        let paragraph = document.querySelector('p');
        paragraph.classList.toggle('light');
        
    })
    
    
    });
    
    
    // div1.addEventListener("click", function(e){
    //     console.log("div1 is clicked!");
    //     e.stopPropagation();
    // },false)
        
    // div2.addEventListener("click", function(e){
    //     console.log("div2 is clicked!");
    //     e.stopPropagation();
    // },false)
        
    // div3.addEventListener("click", function(e){
    //     console.log("div3 is clicked!");
    //     e.stopPropagation();
    // },false)