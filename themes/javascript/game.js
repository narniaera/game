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
    this.data.app = new PIXLEO.Application(window.innerWidth, window.innerHeight);
    // 创建画布
    this.data.app.insert(document.body);
    // 绘制阴影
    this.data.app.shadow(20,'black');
    this.data.app.fillRect('blue',20,20,100,80);
    this.data.app.restore();
    // 填充矩形
    this.data.app.fillRect('blue',20,120,100,80);
    this.data.app.restore();
    // 线框矩形
    this.data.app.strokeRect('blue',20,220,100,80);
    this.data.app.restore();
    // 清楚区域
    this.data.app.fillRect('blue',20,320,100,80);
    this.data.app.clearRect(30,330,80,60)
    this.data.app.restore();
}
