$(document).keydown(function(event) {
    switch (event.keyCode) {
        case 37: // left
            if (moveLeft()) {
                // 如果能移动则生成一个新数字
                setTimeout("generateOneNumber()", 210);
                // 移动完成后判断游戏是否结束
                setTimeout("isgameover()", 300);
                return false
                    // isgameover();
            }
            break;
        case 38: // up
            if (moveUp()) {
                // 如果能移动则生成一个新数字
                setTimeout("generateOneNumber()", 210);
                // 移动完成后判断游戏是否结束
                setTimeout("isgameover()", 300);
                return false
                    // isgameover();

            }
            break;
        case 39: // right
            if (moveRight()) {
                // 如果能移动则生成一个新数字
                setTimeout("generateOneNumber()", 210);
                // 移动完成后判断游戏是否结束
                setTimeout("isgameover()", 300);
                return false
                    // isgameover();

            }
            break;
        case 40: // down
            if (moveDown()) {
                // 如果能移动则生成一个新数字
                setTimeout("generateOneNumber()", 210);
                // 移动完成后判断游戏是否结束
                setTimeout("isgameover()", 300);
                return false
                    // isgameover();

            }
            break;
    }
})


// 向左移动的方法
function moveLeft() {
    // 判断是否可以向左移动
    if (!canMoveLeft(board)) {
        // console.log(false);
        return false;
    }
    // 完成向左移动的逻辑
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            // 如果当前格子有不为0的值
            if (board[i][j] != 0) {
                console.log("捕获到格子坐标为" + i + "," + j);
                // 判断左边格子是否为0
                for (var k = 0; k < j; k++) {
                    // 判断当前值不为0的数字格左边的格子值必须为0且中间数字为0；
                    if (board[i][k] == 0 && noBlokHorizontalCol(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        console.log('没有合并，向左移动');
                    }
                    // 判断当前值不为0的数字格是否等于与左边的格子相等，且中间数字为0
                    else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, k, j, board)) {
                        console.log("有相同的");
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 200);
    // updateBoardView()
    return true;
}


// 向上移动的方法
function moveUp() {
    // 判断是否可以向左移动
    if (!canMoveUp(board)) {
        return false;
    }
    // 完成向上移动的逻辑
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            // 如果当前格子有不为0的值
            if (board[i][j] != 0) {
                // 判断上边格子是否为0
                for (var k = 0; k < i; k++) {
                    // 上面的格子值必须为0且中间数字为0；
                    if (board[k][j] == 0 && noBlokHorizontalRow(k, i, j, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    // 判断当前值不为0的数字格是否与上边的格子相等，且中间数字为0
                    else if (board[k][j] == board[i][j] && noBlokHorizontalRow(k, i, j, board)) {
                        // console.log("有相同的");
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 200);
    // updateBoardView()
    return true;
}


//判断是否可以向右移动的方法
function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    //处理向右移动的逻辑
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlokHorizontalCol(i, j, k, board)) {
                        //开始移动
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[i][k] == board[i][j] && noBlokHorizontalCol(i, j, k, board)) {
                        //才能向左移动
                        //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                    }
                }
            }
        }
    }
    //更新小方格的内容
    setTimeout("updateBoardView();", 200);
    return true;
}

//判断是否可以向下移动的方法
function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    }
    //处理向下移动的逻辑
    for (var i = 2; i >= 0; i--) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && noBlokHorizontalRow(i, k, j, board)) {
                        //开始移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    } else if (board[k][j] == board[i][j] && noBlokHorizontalRow(i, k, j, board)) {
                        //开始移动
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                    }
                }
            }
        }
    }
    //调用更新页面的方法
    setTimeout("updateBoardView();", 200);
    //更新得分
    return true;
}

// 判断游戏是否结束的方法
function isgameover() {
    if (nospace(board) && nomove(board)) {
        gameover();
    }
}


// 判断格子是否满了的方法，用于判断游戏结束
function nospace() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}


// 判断格子是否都不能移动的方法，用于判断游戏结束
function nomove(board) {
    if (canMoveDown(board) || canMoveUp(board) || canMoveLeft(board) || canMoveRight(board)) {
        return false;
    }
    return true;
}


function gameover() {
    $(".grid-container").append("<div id='gameover' class='gameover'><p>本次得分</p><span>" + score + "</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>")
    var gameover = $("#gameover");
    gameover.css("width", "450px");
    gameover.css("height", "450px");
    gameover.css("background-color", "rgba(0,0,0,0.5)");

}


function restartgame() {
    $("#gameover").remove();
    updateScore(0);
    newGame();
}