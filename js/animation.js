// 此函数用于产生新数字的动画，i为新数字的x坐标，j为y坐标
function ShowNumberWithAnimation(i, j, randNumber) {
    // 获取当前数字格
    var numberCell = $("#number-cell-" + i + "-" + j);
    // 设置当前的数字歌的背景色和前景色及数字
    numberCell.css("backgroundColor", getNumberBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    // numberCell.css("backgroundColor", "pink");
    // numberCell.css("color", "red");
    numberCell.text(randNumber);
    // 设置当前的数字格显示动画
    numberCell.animate({
        width: "97.5px",
        height: "97.5px",
        top: getPoTop(i, j),
        left: getPoLeft(i, j)
    }, 50)
}


function showMoveAnimation(fromx, fromy, tox, toy) {
    // 获取当前数字的元素
    var numberCell = $("#number-cell-" + fromx + "-" + fromy);
    numberCell.animate({
        left: getPoLeft(tox, toy),
        top: getPoTop(tox, toy)

    }, 200)
}

// 用于更新分数
function updateScore(score) {
    $(".score").text(score);
    var best = $(".best");
    if (score > best.text()) {
        best.text(score);
    }
};