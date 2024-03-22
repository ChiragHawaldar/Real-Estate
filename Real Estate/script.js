const FAQBtn = document.getElementsByClassName("FAQ-Btn");



for(let i=0;i<FAQBtn.length;i++){
    FAQBtn[i].addEventListener("click",function(){

        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        const FAQAnswer = this.nextElementSibling;

        if(FAQAnswer.style.display==="block"){
            FAQAnswer.style.display="none";
        }else{
            FAQAnswer.style.display="block";

        }
    });
}
    
