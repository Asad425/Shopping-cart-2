
const PlusBtn = document.getElementById('countPlus');
PlusBtn.addEventListener('click', function () {


    const countCover = parseInt(document.getElementById('countValueCover').value);
    document.getElementById('countValueCover').value = countCover++;


});