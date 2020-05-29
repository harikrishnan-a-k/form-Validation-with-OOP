// function to get html element object using id
function getEl(el){
    return document.querySelector(`#${el}`);
}
// accessing form elements using getEl() function.
const email=getEl('email');
const emailError=getEl('emailError');
const password=getEl('password');
const passwordError=getEl('passwordError');
const validateBtn=getEl('validateConstructor');

// constrctor function for Form
function Form(email,emailError,password,passwordError,validateBtn){
    this.email=email;
    this.password=password;
    this.emailError=emailError;
    this.passwordError=passwordError;
    this.validateBtn=validateBtn;

}

// adding validating function to the prototype of form Constructor
Form.prototype.validate=function(){
    let emailErrFlag=true,passErrFlag=true;
    const emailRegExp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})((\.[a-z]{2,3})?)$/;
    const passRegExp=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if(!emailRegExp.test(this.email.value.trim())){
        this.emailError.innerHTML='invalid email';
        this.emailError.style.color='red';
        emailErrFlag=true;
    }
    else{
        this.emailError.innerHTML='';
        
        emailErrFlag=false;
    }
    if(!passRegExp.test(this.password.value.trim())){
        this.passwordError.innerHTML='invalid email';
        this.passwordError.style.color='red';
        passErrFlag=true;
    }
    else{
        this.passwordError.innerHTML='';
        
        passErrFlag=false;
    }
    if(!passErrFlag && !emailErrFlag){
        alert('inputs are valid');
    }
}

// creating object of type Form by passing all the elemnts we get through getEl function
const loginForm=new Form(email,emailError,password,passwordError,validateBtn);

// adding click event to submit button
validateBtn.addEventListener('click',function(e){
    e.preventDefault();
    loginForm.validate();
})