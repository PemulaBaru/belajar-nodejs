const goTo = (name) => {
    !name ? alert("Pencarianmu masih belum terisi, isi dulu ya ;)") :
    window.location.href = `/contact/${name.toLowerCase()}` 
}
document.getElementById('searchKontak').addEventListener('click', () => {
    let inputValue = document.getElementById("inputKontak").value
    goTo(inputValue)
     })
    

document.getElementById('inputKontak').addEventListener('keydown',(event) => {
        if(event.key == "Enter") {
           let inputValue = event.target.value
  goTo(inputValue)
        }
     })



