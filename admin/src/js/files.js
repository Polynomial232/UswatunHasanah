var input = document.getElementById("gambar");
var files = [];
var reader = new FileReader();
function inputFile(){
    input.onchange = e => {
        files = e.target.files;
    
        var extention = GetExtName(files[0]);
        var name = GetFileName(files[0]);
        reader.readAsDataURL(files[0]);
    }
}

function GetExtName(file) {
    var temp = file.name.split('.');
    var ext = temp.slice(temp.length - 1, temp.length);
    return '.' + ext[0];
}

function GetFileName(file) {
    var temp = file.name.split('.');
    var fname = temp.slice(0, -1).join('.');
    return fname;
}