const fileUploader = document.getElementById('file-uploader');
const imageGrid = document.getElementById('image-grid');

fileUploader.addEventListener('change', (event) => {
    const { files } = event.target;
    for (const file of files) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
  
        reader.addEventListener('load', (event) => {
            const container = document.createElement('div');
            container.classList.add('preview');
            const img = document.createElement('img');
            img.src = event.target.result;
            img.alt = file.name;
            container.innerText = file.name;
            container.appendChild(img);
            container.addEventListener('click', removeOnClick(container));
            imageGrid.appendChild(container);
        });
    };
});

const removeOnClick = element => () => element.parentNode.removeChild(element);

   