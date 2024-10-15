// import * as UTIF from 'utif';
//
// document.getElementById('file-input').addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//
//         reader.onload = function (e) {
//             const arrayBuffer = e.target.result;
//
//             // Декодируем IFDs (Image File Directory) из файла
//             const ifds = UTIF.decode(arrayBuffer);
//
//             // Конвертируем каждый IFD в изображение
//             UTIF.decodeImage(arrayBuffer, ifds[0]); // Декодируем первое изображение
//
//             // Получаем данные изображения в формате RGBA
//             const rgba = UTIF.toRGBA8(ifds[0]);
//
//             // Отображаем изображение на canvas
//             const canvas = document.getElementById('canvas');
//             const context = canvas.getContext('2d');
//             const imageData = new ImageData(
//                 new Uint8ClampedArray(rgba),
//                 ifds[0].width,
//                 ifds[0].height
//             );
//
//             canvas.width = ifds[0].width;
//             canvas.height = ifds[0].height;
//             context.putImageData(imageData, 0, 0);
//         };
//
//         reader.readAsArrayBuffer(file);
//     }
// });
