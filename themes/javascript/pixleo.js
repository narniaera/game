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
            bgColor : '#000000'
        }
        this.canvas = {
            view : null,
            element : null,
            context : null
        }
        // 调用渲染属性设置
        this._render(width, height,bgColor);
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
    window.PIXLEO.Application.prototype._render = function (width, height,bgColor) {
        this.render.appWidth = width || this.render.appWidth;
        this.render.appHeight = height || this.render.appHeight;
        this.render.bgColor = bgColor || this.render.bgColor;
    }
    /**
     * 创建画布a
     * @private
     */
    window.PIXLEO.Application.prototype.insert = function (element) {
        // 创建htmlElement
        this.canvas.view = document.createElement('canvas');
        this.canvas.view.id = 'canvas' + Math.ceil(Math.random() * 10000);
        this.canvas.view.width = this.render.appWidth;
        this.canvas.view.height = this.render.appHeight;
        element.appendChild(this.canvas.view);
        this.canvas.element = document.getElementById(this.canvas.view.id);
        this.canvas.context = this.canvas.element.getContext("2d");
    }

}())