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
            view: null,
            element: null,
            context: null
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
        this.canvas.view = document.createElement('canvas');
        this.canvas.view.id = 'canvas' + Math.ceil(Math.random() * 10000);
        this.canvas.view.width = this.render.appWidth;
        this.canvas.view.height = this.render.appHeight;
        // 添加到页面
        element.appendChild(this.canvas.view);
        this.canvas.element = document.getElementById(this.canvas.view.id);
        // 获取上下文
        this.canvas.context = this.canvas.element.getContext("2d");
        // 创建存储点
        this.canvas.context.save();
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
     * param fillStyle  颜色  #000000 | 颜色对象
     * @param x         x坐标 起始点
     * @param y         y坐标 起始点
     * @param width     宽度
     * @param height    高度
     */
    window.PIXLEO.Application.prototype.strokeRect = function (fillStyle, x, y, width, height) {
        this.canvas.context.strokeStyle = fillStyle;
        this.canvas.context.strokeRect(x, y, width, height);
    }
    window.PIXLEO.Application.prototype.clearRect = function (x,y,width,height) {
        this.canvas.context.clearRect(x,y,width,height);
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
     * @returns {CanvasGradient}    线性渐变对象
     */
    window.PIXLEO.Application.prototype.linearGradient = function (x0, y0, x1, y1) {
        return this.canvas.context.createLinearGradient(x0, y0, x1, y1);
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
    window.PIXLEO.Application.prototype.radialGradient = function (x0, y0, r0, x1, y1, r1) {
        return this.canvas.context.createRadialGradient(x0, y0, r0, x1, y1, r1);
    }


}())