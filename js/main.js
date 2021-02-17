// 初始化游戏

// 定义一个javascript数组
var board = new Array();

var score = 0;
$(function() {
    // var best = $(".best");
    // if (score > best.text()) {
    //     best.text(score);
    // }
    $(".restart-button").click(function() {
        // alert(1)
        newGame();
    })
    newGame();
})

function newGame() {
    // 初始化棋盘格子
    init();
    // 生成两个随机位置的随机数字
    generateOneNumber();
    generateOneNumber();
}


// 初始化16个游戏格子的位置
function init() {
    // 利用两个for循环创建二维数组
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            // 获取当前元素
            var gridCell = $("#grid-cell-" + i + "-" + j);
            // console.log(gridCell);
            gridCell.css("top", getPoTop(i, j));
            gridCell.css("left", getPoLeft(i, j));

        }
    }
    updateBoardView()
    score = 0;
    $(".score").text("0");
}


// 更新16个格子：遍历16个格子，如果为格子数值为0 显示黄色，不为0显示红色
function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $(".grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
            // 给每个数字设置样式
            // 如果数字是0，不显示
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPoTop(i, j) + 50);
                numberCell.css("left", getPoLeft(i, j) + 50);
                // numberCell.css("backgroundColor", "yellow");
            } else {
                numberCell.css("width", "97.5px");
                numberCell.css("height", "97.5px");
                numberCell.css("top", getPoTop(i, j));
                numberCell.css("left", getPoLeft(i, j));
                numberCell.css("backgroundColor", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
                // ShowNumberWithAnimation(i, j, 2);
            }
        }
    }
    // console.log(board);
}

function generateOneNumber() {
    // 生成一个随机数字
    // 1.生成一个随机位置
    // 生成随机x坐标
    var randx = ran();
    // 生成随机y坐标
    var randy = ran();

    while (true) {
        // 如果格子是0，说明这个格子没有显示数字，即找到了可用格子，退出循环
        if (board[randx][randy] == 0) {
            break;
        }
        // 否则重新随机一个位置
        var randx = ran();
        var randy = ran();

    }
    // 2.在坐标中显示数字
    var randNumber = Math.random() < 0.9 ? 2 : 4;
    board[randx][randy] = randNumber;
    ShowNumberWithAnimation(randx, randy, randNumber);
}

// 生成一个坐标
var ran = () => parseInt(Math.floor(Math.random() * 4));
// console.log(ran());