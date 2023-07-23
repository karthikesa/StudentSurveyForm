const form =document.querySelector('#form')
const username =document.querySelector('#username')
const dob=document.querySelector('#dob')
const phone =document.querySelector('#phone')
const email =document.querySelector('#email')
const address =document.querySelector('#address')
const mark1=document.querySelector('#mark1')
const mark2 =document.querySelector('#mark2')
const mark3 =document.querySelector('#mark3')
const mark4 =document.querySelector('#file1')



ok1=false;
ok2=false;
ok3=false;
ok4=false;
ok5=false;
ok6=false;
ok7=false;
ok8=false;
ok9=false;
 next=true;
form.addEventListener('submit',(e)=>{
      
    

validateInputs();
if(ok1 && ok2 && ok3 &&ok4 && ok5 && ok6 && ok7 && ok8 && ok9){
   let  c= confirm("Are you sure you want to proceed")
   
   if(c){
    alert("Success")
    next=false;
   }
}
if(next === true){
    e.preventDefault()
}




})
function validateInputs(){
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const phoneval=phone.value.trim();
    const addressval=address.value.trim();
    const dobval=dob.value;
    const mark1val=mark1.value;
    const mark2val=mark2.value;
    const mark3val=mark3.value;
    const mark4val=mark4.value;
 
    if(usernameval==='' || usernameval.length < 3 || usernameval.length >100){
        ok1=false;
        errorset(username,'username is required')
       }else{
        ok1=true;
        successset(username)
       }
       if(dobval===''){
        ok2=false;
        errorset(dob,'Date of Birth is required')
    }else{
        ok2=true;
     successset(dob)
    }
    if(phoneval==='' || phoneval.length !=10){
        ok3=false;
        errorset(phone,'phone is required')
       }else{
        ok3=true;
        successset(phone)
       }
       if(emailval===''){
        ok4=false;
        errorset(email,'email is required')
       }
       else if(!validateEmail(emailval)){
        errorset(email,'please enter valid email')
       }
       else{
        ok4=true;
        successset(email)
       }
       if(addressval===''){
        ok5=false;
        errorset(address,'Address is required')
       }else{
        ok5=true;
        successset(address)
       }
       if(mark1val==='' || mark1val <= 0 || mark1val > 100){
        ok6=false;
        errorset(mark1,'mark is required')
    }else{
        ok6=true;
     successset(mark1)
    }
    if(mark2val==='' || mark2val <= 0 || mark2val > 100){
        ok7=false;
        errorset(mark2,'mark is required')
    }else{
        ok7=true;
     successset(mark2)
    }
    if(mark3val==='' || mark3val <= 0 || mark3val > 100){
        ok8=false;
        errorset(mark3,'mark is required')
    }else{
        ok8=true;
     successset(mark3)
    }
    if(mark4val==='' || mark4val <= 0 || mark4val > 100){
        ok9=false;
        errorset(mark4,'profile is required')
    }else{
        ok9=true;
     successset(mark4)
    }

}
function errorset(element,message){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error')
    errorElement.innerText =message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function successset(element){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error')
    errorElement.innerText ='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) =>{
    return String(email)
    .toLocaleLowerCase()
    .match( /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/);
}