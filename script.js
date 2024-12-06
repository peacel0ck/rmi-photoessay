// script.js
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('zoomable-image');
    
    const panzoom = Panzoom(element, {
        maxScale: 100,
        minScale: 0.01,
        smoothScale: true,
        startScale: 1,
        startX: 0,
        startY: 0,
        animate: true,                 // Enable animations
        duration: 200,                 // Animation duration in ms
        easing: 'ease-out',           // CSS easing function
        momentum: true,               // Enable inertia
        velocityTimeout: 300,         // Time in ms to maintain momentum
        smoothScale: true,            // Smooth scaling
        step: 0.05,                   // Smaller steps for smoother zoom
        contain: 'outside',
        panOnlyWhenZoomed: true,     // Prevent panning when not zoomed
    });

    // Enable mouse wheel zooming
    element.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

    // Optional: Double click to zoom in
    element.addEventListener('dblclick', (event) => {
        event.preventDefault();
        panzoom.zoomIn();
    });

    // Optional: Add keyboard controls
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case '=':
            case '+':
                panzoom.zoomIn();
                break;
            case '-':
                panzoom.zoomOut();
                break;
            case 'ArrowRight':
                panzoom.pan(10, 0);
                break;
            case 'ArrowLeft':
                panzoom.pan(-10, 0);
                break;
            case 'ArrowUp':
                panzoom.pan(0, -10);
                break;
            case 'ArrowDown':
                panzoom.pan(0, 10);
                break;
            case 'r':
                panzoom.reset();
                break;
        }
    });
});