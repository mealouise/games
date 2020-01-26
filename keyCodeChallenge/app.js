function keycode(){
// put inside an eventlistener 
    let key = event.keyCode;
    console.log(event.key)
    console.log(event.code)
    console.log(event.which)
    document.getElementById("keycode").textContent = event.keyCode;
    document.getElementById("eventKey").textContent = event.key;
    document.getElementById("eventCode").textContent = event.code;
    document.getElementById("eventWhich").textContent = event.which;

}

