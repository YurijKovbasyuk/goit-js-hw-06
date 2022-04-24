const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', HadleSubmitForm);

function HadleSubmitForm(e) {
    e.preventDefault();
        
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    if (!email.trim() || !password.trim()) {
        return alert("Check you email or password");
    }
    console.log({ email, password })
    e.currentTarget.reset()
}
