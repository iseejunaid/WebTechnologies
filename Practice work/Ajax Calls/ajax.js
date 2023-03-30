$(function(){
    $('#getdata').on('click', loadData)
});
function loadData(){
    console.log('Load Data Called');
    $("#statusrow td").html("Loading Data...");
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/',
        success: showdata
    });
}
function showdata(data){
    $("#statusrow").remove();
    for(var i=0;i<10;i++){
        console.log(data[i]);
    }
    for(var i=0;i<data.length;i++){
        $('#tableBody').append('<tr><td>'+data[i].userId+'</td><td>'+data[i].id+'</td><td>'+data[i].title+'</td><td>'+data[i].completed+'</td></tr>');
    }
}