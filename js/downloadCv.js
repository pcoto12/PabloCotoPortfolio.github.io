document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('downloadBtn').addEventListener('click', function() {
        console.log("Button clicked!"); // Verifica que el evento de clic se esté ejecutando
        
        // Ruta del archivo PDF
        var pdfFilePath = 'Resources/docs/PabloCotoCV.pdf';
        
        // Crear un elemento de enlace oculto
        var link = document.createElement('a');
        link.href = pdfFilePath;
        link.target = '_blank'; 
        link.download = 'PabloCotoCV.pdf'; // El nombre del archivo que se descargará
        
        // Agregar el enlace al cuerpo del documento y simular el clic en él
        document.body.appendChild(link);
        link.click();
        
        // Eliminar el enlace del cuerpo del documento después de la descarga
        document.body.removeChild(link);
    });
});
