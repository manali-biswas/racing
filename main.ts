scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    info.changeScoreBy(1)
    music.baDing.play()
    tiles.setTileAt(location, myTiles.transparency16)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 9 2 9 2 . . . . 
    . . . . 5 2 2 2 2 2 2 2 5 . . . 
    . . . . 5 2 2 2 2 2 2 2 2 . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(13)
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303040000000001030303030303030303030500000100000303030303030303030306000002000203030303030303030303030303030000030303030303030303030303030300000303030303030303030303030303000000000000000103030303030303030100000002000001030303030303030303030303030300020303030303030303030303030303000000010207030303030303030303030100000000070303030303030303030303030303030303030303030303030303030303030303`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    2 2 2 2 . . 2 . . . . . . . . . 
    . . . 2 . . 2 2 2 2 2 2 2 . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . 2 2 2 2 2 2 2 . . 2 2 2 2 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . 2 . . . . . . 
    . . . . . . . . . 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath6], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath4)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
