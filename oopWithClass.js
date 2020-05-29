// as the getEl() function is defined in earlier function no need to define it again
const validateBtn2=getEl('validateClass');

// defining same constructor function using class keyword.
// its important to note that there is no class i JS
// class and constructor keywords are just a syntatic sugar ES6 introduces
// but the underlying working is still using constructor functions.
class FormClass{
    //constructor function inside class.  using constructor keyword
    constructor(email,emailError,password,passwordError,validateBtn2){

        this.email=email;
        this.password=password;
        this.emailError=emailError;
        this.passwordError=passwordError;
        this.validateBtn=validateBtn;
    }
    // member function inside class . so that we dont have write hectic prototype linkiing
    // but eventually js will convert it into prototype method
    validate(){
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
}

// creating object of type FormClass by passing all the elemnts we get through getEl function
const loginForm2=new FormClass(email,emailError,password,passwordError,validateBtn);

// adding click event to second  button
validateBtn2.addEventListener('click',function(e){
    e.preventDefault();
    loginForm2.validate();
})

// ES6 syntax for inheritence using extends keyword
class SingUpForm extends FormClass{

}