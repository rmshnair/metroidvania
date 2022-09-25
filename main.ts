controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        doAJump(mySprite, jumpHeight)
    }
})
function doAJump (sprite: Sprite, height: number) {
    sprite.vy = 0 - Math.sqrt(2 * (height * gravity))
}
function loadMap (col: number, row: number) {
    tiles.loadMap(world[row][col])
}
let mySprite: Sprite = null
let jumpHeight = 0
let gravity = 0
let world: tiles.WorldMap[][] = []
world = [
[tiles.createMap(tilemap`level2`), tiles.createMap(tilemap`level8`), tiles.createMap(tilemap`level14`)],
[tiles.createMap(tilemap`level3`), tiles.createMap(tilemap`level9`), tiles.createMap(tilemap`level15`)],
[tiles.createMap(tilemap`level4`), tiles.createMap(tilemap`level10`), tiles.createMap(tilemap`level16`)],
[tiles.createMap(tilemap`level5`), tiles.createMap(tilemap`level11`), tiles.createMap(tilemap`level17`)],
[tiles.createMap(tilemap`level6`), tiles.createMap(tilemap`level12`), tiles.createMap(tilemap`level18`)],
[tiles.createMap(tilemap`level7`), tiles.createMap(tilemap`level13`), tiles.createMap(tilemap`level19`)]
]
gravity = 500
jumpHeight = 34
let moveSpeed = 70
mySprite = sprites.create(img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . d d . . . . 
    . . . . d d . . . . . 
    . . . d d d . . . . . 
    . . . d d d d . . . . 
    . . d d d d d d . . . 
    d d d d d d d d d d d 
    . . . . . . . . . . . 
    . . d d d d d d . . . 
    . . d d f d f d . . . 
    . . d d d d d d . . . 
    . . . . d d d . . . . 
    . . . . . . . . . . . 
    . . d d d d d . d . . 
    . . . d d d d . . . . 
    . . . d . . d . . . . 
    `, SpriteKind.Player)
mySprite.ay = gravity
controller.moveSprite(mySprite, moveSpeed, 0)
scene.cameraFollowSprite(mySprite)
loadMap(0, 0)
character.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d d . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d d d d d . d . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d d d . . . . 
    . . . d d d . d . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    . d d d d d d d d d . . 
    d . . . . . . . . . d . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d d d d d . d . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    . . . . . . d . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d d . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . d . d d d d d . . . . 
    . . . d d d d . . . . . 
    . . . . d d . . . . . . 
    . . . . . d . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d d . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . d . d d d d d . . . . 
    . . . d d d d . . . . . 
    . . . . d d . . . . . . 
    . . . . d . . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d d . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . d . d d d d d . . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    . . . d . . . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d . . . . . . 
    . . . . . d . . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    d . d d d d d d . . d . 
    . d d d d d d d d d . . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d d d d d . d . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    `],
75,
character.rule(Predicate.Moving, Predicate.FacingRight)
)
character.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d d . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d d d d d . d . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d d d . . . . 
    . . . d d d . d . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    . d d d d d d d d d . . 
    d . . . . . . . . . d . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d d d d d . d . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    . . . d . . d . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d d . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    . . d d d d d d . . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . d . d d d d d . . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    . . . d . . d . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d . . . . . . 
    . . . . . d . . . . . . 
    . . . . d d . . . . . . 
    . . . d d d . . . . . . 
    . . . d d d d . . . . . 
    d . d d d d d d . . d . 
    . d d d d d d d d d . . 
    . . . . . . . . . . . . 
    . . d d d d d d . . . . 
    . . d d f d f d . . . . 
    . . d d d d d d . . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d d d d d . d . . . 
    . . . d d d d . . . . . 
    . . . d . . d . . . . . 
    `],
100,
character.rule(Predicate.NotMoving, Predicate.FacingRight)
)
character.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d . d d d d d . . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . d d d d . . . . . 
    . . . d . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    . d d d d d d d d d . . 
    d . . . . . . . . . d . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d . d d d d d . . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    . . . . d . . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . . d d d d d . d . . 
    . . . . d d d d . . . . 
    . . . . . d d . . . . . 
    . . . . . d . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . . d d d d d . d . . 
    . . . . d d d d . . . . 
    . . . . . d d . . . . . 
    . . . . . . d . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . . d d d d d . d . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    . . . . . . . d . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d . . . . . . 
    . . . . . d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    d . . d d d d d d . d . 
    . d d d d d d d d d . . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d . d d d d d . . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    `],
75,
character.rule(Predicate.Moving, Predicate.FacingLeft)
)
character.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d . d d d d d . . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . d d d d . . . . . 
    . . . d . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    . d d d d d d d d d . . 
    d . . . . . . . . . d . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d . d d d d d . . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    . . . . d . . d . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . d d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    . . . d d d d d d . . . 
    d d d d d d d d d d d . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . . d d d d d . d . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    . . . . d . . d . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . d . . . . . . 
    . . . . . d . . . . . . 
    . . . . . d d . . . . . 
    . . . . . d d d . . . . 
    . . . . d d d d . . . . 
    d . . d d d d d d . d . 
    . d d d d d d d d d . . 
    . . . . . . . . . . . . 
    . . . d d d d d d . . . 
    . . . d f d f d d . . . 
    . . . d d d d d d . . . 
    . . . . d d d . . . . . 
    . . . . . . . . . . . . 
    . . d . d d d d d . . . 
    . . . . d d d d . . . . 
    . . . . d . . d . . . . 
    `],
100,
character.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
