document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const container_size = document.styleSheets[0].cssRules[0].style.getPropertyValue("width").slice(0,3);
    const select = document.querySelector('.grid-size');
    const clear = document.querySelector('.clear');
    
    
    

    function createGrid() {
        let grid_size = select.value;
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        for (let i = 0; i < grid_size; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);

            for (let j = 0; j < grid_size; j++) {
                let pixel = document.createElement('div');
                pixel.classList.add('pixel-blank');
                pixel.style.width = `${container_size / grid_size}px`
                pixel.style.height = `${container_size / grid_size}px`
                pixel.addEventListener('mouseover', () => {
                    pixel.classList.remove('pixel-blank');
                    pixel.classList.add('pixel-fill');
                })
                row.appendChild(pixel);
            }
        }
    }

    createGrid();

    function clearGrid() {
        
        const button = document.querySelector('.clear');

        button.addEventListener('click', () => {
            const pixels = document.querySelectorAll('.pixel-fill');
            for (let pixel of pixels) {
                pixel.classList.remove('pixel-fill');
                pixel.classList.add('pixel-blank');
            }
        });
    }

    
    clearGrid();
    
    select.onchange = createGrid;
});