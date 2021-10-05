/*const myForm = document.getElementById('insertImg')
const myFile = document.getElementById('File')
const statusP = document.getElementById('status')


myForm.onsubmit = (event)=>{
    event.preventDefault();

    statusP.innerHTML = 'Uploading...';

    const files = myFile.files;
    const formData = new FormData();
    const file = files[0];

    if (!file.type.match('image.*')) {
        statusP.innerHTML = 'The file selected is not an image.';
        return;
    }

    formData.append('fileAjax', file, file.name);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/uploadImg', true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            statusP.innerHTML = 'Upload copmlete!';
        } else {
            statusP.innerHTML = 'Upload error. Try again.';
        }
    };

    xhr.send(formData);
}

function addImage(imgFile) {
   const xhr = new XMLHttpRequest();

    xhr.open("POST","/insertImg")
    xhr.send("image="+imgFile)
}*/


function Modal() {
    if (document.getElementById('sendForm').style.display == 'block') {
        document.getElementById('sendForm').style.display = 'none';
    } else {
        document.getElementById('sendForm').style.display = 'block'
    }
}

function sendForm() {

    let titulo = document.getElementById('MainTitle').value;
    let body = document.getElementById('editor').innerHTML;

    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/sendPost");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("title=" + titulo + "&body=" + body);
    location.href = '/home'

}


function foo() {
    var selObj = window.getSelection();
    alert(selObj);
    var selRange = selObj.getRangeAt(0);
    document.execCommand('insertHTML', false, '<div class="header">' + selRange + '<div class="titulo">')
    // do stuff with the range
}


var i = 0

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        document.execCommand('insertHTML', false, `<br>`)
    }
})


function textAlign(direction) {
    document.execCommand('insertHTML', false, `<p style= "text-align=${direction}">`)
}

function printPath() {

    i++

    document.execCommand('insertHTML', false, `<div class="imgInserted"><img id='img${i}' height='300px'/></div>`)
    var input = document.getElementById("myFile");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function (event) {
        var img = document.getElementById(`img${i}`);
        img.src = event.target.result;
    }
    console.log(i)
    return i;
}

setInterval(() => {
    console.log(document.getElementById('editor').innerHTML)
}, 10000);