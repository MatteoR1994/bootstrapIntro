function myFunction() {
    let prop = document.getElementById('header2').style.display;
    if (prop === 'none') {
        document.getElementById('header2').style.display = 'block';
    } else {
        document.getElementById('header2').style.display = 'none';
    }
}