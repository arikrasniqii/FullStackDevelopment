$('#titulli1')
$('li')
$('.main')
$('#btn')
$('.square')

$('li').click(function(){
    alert('clicked')
})

$('#btn').click(function(){
    console.log($('#titulli1').text())
    $('#titulli1').text('Testing text')
    $('#titulli1').append('Extra text')
})

$('.square').animate({
    'width': '200px',
    'height': '200px',
    'background-color': 'blue'
},1000)


