/* 전체 동의 체크박스 */
const checkboxIds = ['agreeTerms', 'agreePrivacy', 'agreeMarketing'];

document.getElementById('agreeAll').addEventListener('change', function () {
  const isChecked = this.checked;

  for (let i = 0; i < checkboxIds.length; i++) {
    document.getElementById(checkboxIds[i]).checked = isChecked;
  }
});

for (let i = 0; i < checkboxIds.length; i++) {
  document.getElementById(checkboxIds[i]).addEventListener('change', function () {
    let allChecked = true;

    for (let j = 0; j < checkboxIds.length; j++) {
      if (document.getElementById(checkboxIds[j]).checked == false) {
        allChecked = false;
      }
    }

    document.getElementById('agreeAll').checked = allChecked;
  });
}
 
/* 폼 유효성 검사 & 제출 */
const nameRegExp = /^[가-힣]{2,5}$/;
const nameInput = document.getElementById("name");
const nameResult = document.getElementById("nameResult");
nameInput.addEventListener("input", function(){
    const name = nameInput.value.trim();
    if(name === ""){
        printMessage(nameResult, "이름을 입력하세요", false);
        nameInput.focus();
        return;
    }
    if(nameRegExp.test(name)){
        printMessage(nameResult, "사용 가능한 이름입니다.", true);
    }else{
        printMessage(nameResult, "이름은 한글 2~5글자로 입력해야 합니다.", false);
        nameInput.focus();
    }
});
const nicknameRegExp = /^[A-Za-z0-9가-힣]{1,16}$/;
const nicknameInput = document.getElementById("nickname");
const nicknameResult = document.getElementById("nicknameResult");
nicknameInput.addEventListener("input", function(){
    const nickname = nicknameInput.value.trim();
    if(nickname === ""){
        printMessage(nicknameResult, "닉네임을 입력하세요", false);
        nicknameInput.focus();
        return;
    }
    if(nicknameRegExp.test(nickname)){
        printMessage(nicknameResult, "사용 가능한 닉네임입니다.", true);
    }else{
        printMessage(nicknameResult, "닉네임은 1~16자로 입력해야 합니다. 특수문자 사용 불가.", false);
        nicknameInput.focus();
    }
});
function printMessage(element, message, isValid){
    element.textContent = message;
    element.classList.remove('valid', 'invalid');
    element.classList.add(isValid ? 'valid' : 'invalid');
}
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const passwordInput = document.getElementById("password");
const passwordResult = document.getElementById("passwordResult");
passwordInput.addEventListener("input", function(){
    const password = passwordInput.value.trim();
    if(password === ""){
        printMessage(passwordResult, "비밀번호를 입력하세요", false);
        passwordInput.focus();
        return;
    }
    if(passwordRegExp.test(password)){
        printMessage(passwordResult, "사용 가능한 비밀번호입니다.", true);
    }else{
        printMessage(passwordResult, "비밀번호는 영문자, 숫자, 특수문자를 각각 하나 이상 포함하여 8글자 이상 입력해야 합니다.", false);
        passwordInput.focus();
    }
});
const passwordConfirmInput = document.getElementById("passwordConfirm");
const confirmError = document.getElementById("confirmError");
passwordConfirmInput.addEventListener("input", function(){
    const password = passwordInput.value;
    const confirm = passwordConfirmInput.value;
    if(confirm === ""){
        printMessage(confirmError, "비밀번호를 한번 더 입력해주세요.", false);
        return;
    }
    if(password === confirm){
        printMessage(confirmError, "비밀번호가 일치합니다.", true);
    }else{
        printMessage(confirmError, "비밀번호가 일치하지 않습니다.", false);
    }
});
const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const emailInput = document.getElementById("email");
const emailResult = document.getElementById("emailResult");
emailInput.addEventListener("input", function(){
    const email1 = emailInput.value.trim();
    if(email1 === ""){
        printMessage(emailResult, "이메일을 입력하세요", false);
        emailInput.focus();
        return;
    }
    if(emailRegExp.test(email1)){
        printMessage(emailResult, "사용 가능한 이메일입니다.", true);
    }else{
        printMessage(emailResult, "이메일은 아이디@도메인 형식으로 입력해야 합니다.", false);
        emailInput.focus();
    }
});
const signupForm = document.getElementById("signupForm");
const signupResult = document.getElementById("signupResult");
signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    const name            = document.getElementById('name').value.trim();
    const email           = document.getElementById('email').value.trim();
    const nickname        = document.getElementById('nickname').value.trim();
    const password        = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const agreeTerms      = document.getElementById('agreeTerms').checked;
    const agreePrivacy    = document.getElementById('agreePrivacy').checked;
 
    if(name === "" || email === "" || nickname === "" || password === "" || passwordConfirm === ""){
        signupResult.textContent = "모든 필수 항목을 입력하세요.";
        return;
    }
    if(!nameRegExp.test(name) || !emailRegExp.test(email) || !nicknameRegExp.test(nickname) || !passwordRegExp.test(password) || password !== passwordConfirm){
        signupResult.textContent = "입력 형식이 올바르지 않은 항목이 있습니다. 각 항목의 안내 메시지를 확인하세요.";
        return;
    }
    if(!agreeTerms || !agreePrivacy){
        signupResult.textContent = "필수 약관에 동의해야 합니다.";
        return;
    }

    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('welcomeName').textContent = nickname;
    const successScreen = document.getElementById('successScreen');
    successScreen.style.display = 'flex';
    successScreen.classList.add('show');
});