//  Start floating button action

let floatButton=document.querySelector('.floating-button')
floatButton.addEventListener('click',e=>{
    window.scrollTo({top:0})
   

})

//  End floating button action

// Start Skills Progress

let skillsSection=document.getElementById('our-skills')

let progressList=document.querySelectorAll('.our-skills .skill .progress span')

let started=false //Function couting started ? No

window.onscroll=function()
{

    // skills offset top

let skillOffsetTop=skillsSection.offsetTop;
// skills outer Height
let skillsOffsetHeight=skillsSection.offsetHeight;
//  this.console.log("height"+skillsOffsetHeight)


//window height
let windowHeight=this.innerHeight;
// this.console.log(windowHeight)

//window scrollTop
let windowScrollTop=this.pageYOffset;
// this.con sole.log('scroll to top '+windowScrollTop)

if(windowScrollTop>=(skillOffsetTop+skillsOffsetHeight-windowHeight-200))
{
    
    progressList.forEach(skill=>{
        skill.style.width=skill.dataset.progress;
        console.log(skill.dataset.progress + '>>>')
    })

}

let statsSection=document.querySelector('.stats')
let countingElements=document.querySelectorAll('.stats .number')
let statsSectionOffsetTop=statsSection.offsetTop;
// Stats outer Height
let statsSectionOffsetHeight=statsSection.offsetHeight;
if(windowScrollTop>=(statsSectionOffsetTop+statsSectionOffsetHeight-windowHeight-200)){

    
   if(!started)
   {
        countingElements.forEach(element=>{
            counting(element)
     })
     started=true
    }
}





if(window.scrollY>500)
    {
        floatButton.style.display='flex'
    }
    else{
        floatButton.style.display='none'
    }

};


// End Skills Progress


// Start Counting


function counting(ele)
{
     let goal=ele.dataset.count

    let counter=setInterval(()=>{
        ele.textContent++
        if(ele.textContent==goal)
        {
            console.log('Finish')
            clearInterval(counter)
        }
    },2000/goal)

}


// End Counting