function userData(){
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value;
    sessionStorage.setItem('username' , username);
    sessionStorage.setItem('password' , password);
  

}