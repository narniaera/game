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
    var app = this.data.app = new PIXLEO.Application(window.innerWidth, window.innerHeight);
    // 创建画布
    this.data.app.insert(document.body);
    // 绘制阴影
    this.data.app.shadow(20,'black');
    this.data.app.fillRect('blue',20,20,100,80);
    this.data.app.restore();
    // 填充矩形
    this.data.app.save();
    this.data.app.fillRect('blue',20,120,100,80);
    this.data.app.restore();
    // 线框矩形
    this.data.app.save();
    this.data.app.strokeRect('blue',20,220,100,80);
    this.data.app.restore();
    // 清楚区域
    this.data.app.save();
    this.data.app.fillRect('blue',20,320,100,80);
    this.data.app.clearRect(30,330,80,60)
    this.data.app.restore();
    // 线性渐变
    app.save();
    var grd = this.data.app.createLinearGradient(0,0,300,0,{0 : 'black',1 : 'white'});
    this.data.app.fillRect(grd,140,20,100,80);
    app.restore();
    app.save();
    // 平铺
    var img = new Image();
    img.src = 'themes/image/star.png';
    img.onload = function () {
        var pa = app.createPattern(this,'repeat');
        app.fillRect(pa,140,120,100,80);
    }
    app.restore();
    // 线条样式
    app.save();
    app.beginPath();
    app.lineStyleCap('square');
    app.moveTo(140,220);
    app.lineTo(240,300);
    //app.stroke();
    app.moveTo(140,300);
    app.lineTo(240,220);
    app.stroke();
    app.restore();
    // 裁切
    app.save();
    // 剪切矩形区域
    //app.canvas.context.rect(140,320,100,80);
    //app.canvas.context.stroke();
    app.rect(140,320,100,80);
    app.stroke();
    app.canvas.context.clip();
    // 在 clip() 之后绘制绿色矩形
    //app.canvas.context.fillRect('green',140,320,100,80);
    app.fillRect('blue',140,320,50,30);
    app.restore();
    // 曲线
    app.save();
    app.beginPath();
    app.moveTo(260,20);
    app.quadraticCurveTo(260,100,400,20);
    app.stroke();
    app.restore();
}
