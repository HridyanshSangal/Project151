AFRAME.registerComponent('rotate',{
    schema:{
        rotatey:{
            type:'number',default:0
        },
    },
    tick:function(){
        var pos = this.el.getAttribute('rotation')
            this.data.rotatey = this.data.rotatey+0.001

        var pos = this.el.getAttribute('rotation')
        pos.y = pos.y + this.data.rotatey
        this.el.setAttribute('rotation',{x:pos.x,y:pos.y,z:pos.z})
    }
})