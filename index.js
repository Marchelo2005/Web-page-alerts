function onClickSubmitButton(){
    let inputValue = document.getElementById('inputText').value;
    if (inputValue>0){
alert('Hey el numero es mayor que 0');
    }
    if (inputValue<0){
        alert('Hey el numero es menor que 0');
            }
            if (inputValue==0){
                alert('Intente otra vez');
                    }
}