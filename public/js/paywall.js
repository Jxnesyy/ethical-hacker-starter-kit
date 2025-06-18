document.getElementById('unlock').addEventListener('click',()=>{
  const pw = prompt('Enter premium password:');
  if(pw==='letmein'){
    document.getElementById('premium').style.display='block';
    document.getElementById('unlock').style.display='none';
  } else {
    alert('Wrong password.');
  }
});
