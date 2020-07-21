const range = document.getElementById('range')
const candyImage = document.getElementById('image')

range.addEventListener('input', function(){
    candyImage.style.width = this.value + '%'
})
