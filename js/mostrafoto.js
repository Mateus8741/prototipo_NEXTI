$(function(){
    $('#Arquivo').change(function(){
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()
        fileReader.onload = function(){
            $('#img').attr('src', fileReader.result)
        }
        fileReader.readAsDataURL(file)
    })
})