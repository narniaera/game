/**
 * Created by guochao on 2017/3/22.
 */
window.onload = function () {
    var game = new Game();
    // var app = PIXLEO.Application(window.innerWidth, window.innerHeight);
    // // 添加到body中
    // document.body.appendChild(app.view);
};
var Game = function (options) {
    /**
     * 游戏数据
     * @type {{}}
     */
    this.data = {
        // 应用
        app: null,
        // 关卡
        level: 1,
        // x坐标
        x: 1,
        // y坐标
        y: 1
    }
    this.start(this.data);
}
Game.prototype.start = function (data) {
    // 创建应用
    this.data.app = new PIXLEO.Application(window.innerWidth,window.innerHeight);
    // 创建画布
    //document.body.appendChild(this.data.app.canvas.view);
    this.data.app.insert(document.body);
}
