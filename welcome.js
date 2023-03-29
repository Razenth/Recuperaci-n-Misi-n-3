const user = JSON.parse(localStorage.getItem('user'))
const pUser = document.querySelector('.user').innerHTML=`${user.username}`