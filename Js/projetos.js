let contador =1;
$("#radio3").checked = true;

setInterval(()=>{
    alterarImagem();
}, 50000000000)

function alterarImagem(){
    contador++;
    if(contador > 6){
        contador = 1;
    }
    const radios = document.querySelectorAll("input[type='radio']")
    radios.forEach(e => {
        let id = e.addEventListener("click", adquirirId(e))
    })

    function adquirirId(element){
        let idStr = element.id;
    }
    
    switch(id){
        case 1:
            document.getElementById("radio1").checked = true;
            break;
        case 2:
            document.getElementById("radio2").checked = true;
            break;
        case 3:
            document.getElementById("radio3").checked = true;
            break;
        case 4:
            document.getElementById("radio4").checked = true;
            break;
        case 5:
            document.getElementById("radio5").checked = true;
            break;
        case 6:
            document.getElementById("radio6").checked = true;
            break;
        default:
            document.getElementById("radio"+contador).checked = true;
    }
    
        
    
}