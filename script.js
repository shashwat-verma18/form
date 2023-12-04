const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.btn').style.background ='green';
});

btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  document.querySelector('#myForm').style.color ='orange';
});

btn.addEventListener('mouseout', (e) => {
  e.preventDefault();
  document.querySelector('#myForm').style.color = 'black';
});

function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateTime = date+' '+time;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);
    localStorage.setItem('date & time',dateTime);
}


  