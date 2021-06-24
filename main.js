canvas=new fabric.Canvas("canavia")
newimagewidth=30
newimageheight=30
superx= 100
supery= 100
superobject=""
newimageobject=""
function superupdate() {
    fabric.Image.fromURL("player.png",function (Img) {
    superobject=Img
    superobject.scaleToWidth(150)
    superobject.scaleToHeight(150)
    superobject.set({
        top:supery,
        left:superx
    })
    canvas.add(superobject)
    })
}

function newimage(Img) {
    fabric.Image.fromURL(newimage , function (Img) {
        newimageobject=Img
        newimageobject.scaleToWidth(newimagewidth)
        newimageobject.scaleToHeight(newimageheight)
        newimageobject.set({
            top:supery,
            left:superx
        })
        canvas.add(newimageobject)
    })
}
