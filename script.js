
const roles = [
  "Full Stack Developer",
  "Cybersecurity Enthusiast",
  "Problem Solver"
];

let i=0,j=0,current="",isDeleting=false;

function type(){
  current=roles[i];

  if(!isDeleting){
    document.getElementById("typing").textContent=current.substring(0,j++);
    if(j>current.length){
      isDeleting=true;
      setTimeout(type,1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent=current.substring(0,j--);
    if(j===0){
      isDeleting=false;
      i=(i+1)%roles.length;
    }
  }
  setTimeout(type,isDeleting?50:100);
}
type();
