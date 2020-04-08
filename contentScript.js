function hidePremium() {
    document.querySelectorAll('span.svgIcon--star').forEach(star => {
        star.closest('.streamItem').style.display = 'none'
    })
}

setInterval(hidePremium, 5000)
