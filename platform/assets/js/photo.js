const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let image = new Image();
let filename = '';
const uploadfile = document.getElementById('upload-file');
//Subir archivo
uploadfile.addEventListener('change', (e) => {
        //Obtener archivo
        const file = document.getElementById('upload-file').files[0];
        //iniciar FileReader
        const reader = new FileReader();
        if (file) {
            //establecer archivo
            filename = file.name;
            //leer dato como url
            reader.readAsDataURL(file);
        }
        //añadir archivo al canvas
        reader.addEventListener('load', () => {
            //crear image
            image = new Image();
            //Establecer ruta
            image.src = reader.result;
            //cargar imagen canvas
            image.onload = function() {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0, image.width, image.height);
                canvas.removeAttribute('data-caman-id');
            }
        }, false)

    })
    //Añadir efecto y descarga
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', image, function() {
                    this.pinhole().render();
                })
            $(this).addClass('disabled');
        }
    }
    let firmDig=document.querySelector('#firmaDig')
    firmDig.value=document.querySelector('#canvas').toDataURL();
})

//funcion para descargar
function download(canvas, filename) {
    //iniciar evento
    let e;
    //link de descarga
    const link = document.createElement('a');
    //establecer apoyo
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    //evento Mouse
    e = new MouseEvent('click');
    //enviar evento
    link.dispatchEvent(e);
}