const img = document.getElementById('hoverimg');
const tooltip = document.getElementById('custom-tooltip');

img.addEventListener('mousemove', function (e) {
tooltip.style.left = e.pageX + 15 + 'px'; 
tooltip.style.top = e.pageY + 15 + 'px';
tooltip.style.opacity = 1;
});

img.addEventListener('mouseleave', function () {
tooltip.style.opacity = 0;
});