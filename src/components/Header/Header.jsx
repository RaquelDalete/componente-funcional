import React from "react"

function Header (){
    const Mensagem =()=>{
    
        setTimeout(()=>{
          alert("Viva La Vida")
        },2000)
          }


    return(
        <>
<h1>"A jornada é mais importante que o destino"</h1>

<button onClick={Mensagem}>Mensagem</button>

</>
    )
}

export default Header