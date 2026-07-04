let mySprite = sprites.create(img`
    . . . . 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 . . 
    . . 2 2 9 9 9 9 2 2 . . 
    . . 2 2 9 9 9 9 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 . . 
    . . 2 . . . . . . 2 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
