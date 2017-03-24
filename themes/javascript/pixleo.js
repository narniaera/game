/**
 * Created by guochao on 2017/3/22.
 */
/**
 * 定义匿名函数
 * @type {{}}
 */
(function () {
    window.PIXLEO = {
        Application: null
    }
    window.PIXLEO.Application = function (width, height, bgColor) {
        this.render = {
            // 画布宽度
            appWidth: 0,
            // 画布高度
            appHeight: 0,
            // 画布背景色
            bgColor: '#ffffff'
        }
        this.canvas = {
            // 当前画布视图节点
            view: null,
            // 当前画布临时节点
            element: null,
            // 画布上下文（画笔）
            context: null,
            // 渐变颜色对象
            grd: null,
        }
        // 调用渲染属性设置
        this._render(width, height, bgColor);
        // 调用创建画布 canvas || webgl 节点
        //this._canvas();
        // 返回当前对象
        return this;
    }
    /**
     * 画布渲染初始化
     * @param width     画布宽度
     * @param height    画布高度
     * @param bgColor   画布背景色
     * @private
     */
    window.PIXLEO.Application.prototype._render = function (width, height, bgColor) {
        this.render.appWidth = width || this.render.appWidth;
        this.render.appHeight = height || this.render.appHeight;
        this.render.bgColor = bgColor || this.render.bgColor;
    }
    /**
     * 创建画布
     * @private
     */
    window.PIXLEO.Application.prototype.insert = function (element) {
        // 创建htmlElement
        this.canvas.element = document.createElement('canvas');
        this.canvas.element.id = 'canvas' + Math.ceil(Math.random() * 10000);
        this.canvas.element.width = this.render.appWidth;
        this.canvas.element.height = this.render.appHeight;
        // 添加到页面
        element.appendChild(this.canvas.element);
        this.canvas.view = document.getElementById(this.canvas.element.id);
        // 获取上下文
        this.canvas.context = this.canvas.view.getContext("2d");
        // 创建存储点
        this.save();
    }
    /**
     * 设立保存点
     */
    window.PIXLEO.Application.prototype.save = function () {
        this.canvas.context.save();
    }
    /**
     * 恢复点  就是回滚到保存点
     */
    window.PIXLEO.Application.prototype.restore = function () {
        this.canvas.context.restore();
    }
    /**
     * 向画布填充颜色
     * @param fillStyle   颜色  #000000 | 颜色对象
     */
    window.PIXLEO.Application.prototype.fill = function () {
        this.canvas.context.fill();
    }
    /**
     * 会是填充矩形
     * param fillStyle  颜色  #000000 | 颜色对象
     * @param x         x坐标 起始点
     * @param y         y坐标 起始点
     * @param width     宽度
     * @param height    高度
     */
    window.PIXLEO.Application.prototype.fillRect = function (fillStyle, x, y, width, height) {
        this.canvas.context.fillStyle = fillStyle;
        this.canvas.context.fillRect(x, y, width, height);
    }
    /**
     * 绘制线条矩形
     * @param fillStyle  颜色  #000000 | 颜色对象
     * @param x         x坐标 起始点
     * @param y         y坐标 起始点
     * @param width     宽度
     * @param height    高度
     */
    window.PIXLEO.Application.prototype.strokeRect = function (fillStyle, x, y, width, height) {
        this.canvas.context.strokeStyle = fillStyle;
        this.canvas.context.strokeRect(x, y, width, height);
    }
    /**
     * @创建矩形
     * @param x         x坐标 起始点
     * @param y         y坐标 起始点
     * @param width     宽度
     * @param height    高度
     */
    window.PIXLEO.Application.prototype.rect = function (x, y, width, height) {
        this.canvas.context.rect(x, y, width, height);
    }
    /**
     * 清空某块区域
     * @param x         x坐标
     * @param y         y坐标
     * @param width     宽度
     * @param height    高度
     */
    window.PIXLEO.Application.prototype.clearRect = function (x, y, width, height) {
        this.canvas.context.clearRect(x, y, width, height);
    }
    /**
     * 设置阴影
     * @param blur      模糊级别 number
     * @param color     颜色
     * @param x         x坐标
     * @param y         y坐标
     */
    window.PIXLEO.Application.prototype.shadow = function (blur, color, x, y) {
        this.canvas.context.shadowBlur = blur;
        this.canvas.context.shadowColor = color;
        this.canvas.context.shadowOffsetX = x;
        this.canvas.context.shadowOffsetY = y;
    }
    /**
     * 绘制线条
     * @param fillStyle 颜色  #000000 | 颜色对象
     */
    window.PIXLEO.Application.prototype.stroke = function (fillStyle) {
        fillStyle = fillStyle || '#000000';
        this.canvas.context.strokeStyle = fillStyle;
        this.canvas.context.stroke();
    }
    /**
     * 创建线性渐变
     * @param x0    x开始坐标
     * @param y0    y开始坐标
     * @param x1    x结束坐标
     * @param y1    y结束坐标
     * @param option    渐变点{0 : 'black', 1 : 'white', n : 'm' ....} 0 - 1之间
     * @returns {CanvasGradient}    线性渐变对象
     */
    window.PIXLEO.Application.prototype.createLinearGradient = function (x0, y0, x1, y1, option) {
        this.canvas.grd = this.canvas.context.createLinearGradient(x0, y0, x1, y1);
        for (var i in option) {
            this.canvas.grd.addColorStop(i, option[i]);
        }
        return this.canvas.grd;
    }
    /**
     * 创建放射状|圆形渐变
     * @param x0    x开始坐标
     * @param y0    y开始坐标
     * @param r0    开始的圆半径
     * @param x1    x结束坐标
     * @param y1    y结束坐标
     * @param r1    结束的圆半径
     * @returns {CanvasGradient}
     */
    window.PIXLEO.Application.prototype.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
        this.canvas.grd = this.canvas.context.createRadialGradient(x0, y0, r0, x1, y1, r1);
        for (var i in option) {
            this.canvas.grd.addColorStop(i, option[i]);
        }
        return this.canvas.grd;
    }
    /**
     * 向指定的方向内重复指定的元素
     * @param img       规定要使用的图片、画布或视频元素
     * @param repeat    "repeat|repeat-x|repeat-y|no-repeat"    默认repeat
     */
    window.PIXLEO.Application.prototype.createPattern = function (img, repeat) {
        return this.canvas.context.createPattern(img, repeat);
    }
    /**
     * 创建路径
     */
    window.PIXLEO.Application.prototype.beginPath = function () {
        this.canvas.context.beginPath();
    }
    /**
     * 闭合路径
     */
    window.PIXLEO.Application.prototype.closePath = function () {
        this.canvas.context.closePath();
    }
    /**
     * 绘制线条起始点
     * @param x x坐标
     * @param y y坐标
     */
    window.PIXLEO.Application.prototype.moveTo = function (x, y) {
        this.canvas.context.moveTo(x, y);
    }
    /**
     * 绘制线条线路
     * @param x x坐标
     * @param y y坐标
     */
    window.PIXLEO.Application.prototype.lineTo = function (x, y) {
        this.canvas.context.lineTo(x, y);
    }
    /**
     * 在画布区域内创建裁切点
     *      创建裁切区域
     *      context.rect(50,20,200,120);
     *      context.stroke();
     *      绘制裁切
     *      context.clip();
     *      绘制需要剪裁的区域
     *      context.fillStyle="green";
     *      context.fillRect(0,0,150,100);
     */
    window.PIXLEO.Application.prototype.clip = function () {
        this.canvas.context.clip();
    }
    /**
     * 设置线条末端(两端)样式
     * @param style =
     *          butt 默认。向线条的每个末端添加平直的边缘
     *          round 向线条的每个末端添加圆形线帽
     *          square 向线条的每个末端添加正方形线
     */
    window.PIXLEO.Application.prototype.lineStyleCap = function (style) {
        this.canvas.context.lineCap = style;
    }
    /**
     * 设置两条线交汇时的边角的类型
     * @param style =
     *          bevel   创建斜角
     *          round   创建圆角
     *          miter   默认。创建尖角
     *                  miterLimit=number 规定最大斜接长度 说明: > 内角空隙处的坡度
     */
    window.PIXLEO.Application.prototype.lineJoin = function (style) {
        this.canvas.context.lineJoin = style;
    }
    /**
     * 设置线条宽度
     * @param width number
     */
    window.PIXLEO.Application.prototype.lineWidth = function (width) {
        this.canvas.context.lineWidth = width;
    }
    /**
     * 绘制二次贝塞尔曲线    配合路径和线条使用
     * @param x0    x起始点
     * @param y0    y起始点
     * @param x1    x结束点
     * @param y1    y结束点
     *                  context.beginPath()
     *                  context.moveTo(100,100)
     *                  context.quadraticCurveTo(x0,y0,x1,y1)
     *                  context.stroke()
     */
    window.PIXLEO.Application.prototype.quadraticCurveTo = function (x0,y0,x1,y1) {
        this.canvas.context.quadraticCurveTo(x0,y0,x1,y1);
    }
}())