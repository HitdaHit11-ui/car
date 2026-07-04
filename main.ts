namespace SpriteKind {
    export const Road = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
// 장애물 피하지 못하면 게임 오버 Game Over
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (player2, obstacle) {
    game.over(false)
})
// 도로 이미지 만들기 Road Image making
function makeRoad () {
    img2 = image.create(160, 120)
    // 초록 배경
    img2.fill(7)
    // 도로 Road
    img2.fillRect(45, 0, 70, 120, 15)
    img2.fillRect(49, 0, 62, 120, 14)
    for (let y = 0; y < 120; y += 20) {
        img.fillRect(79, y + 4, 2, 10, 1)
    }
// 도로 옆 sidewalk
    img2.fillRect(39, 0, 6, 120, 13)
    img2.fillRect(115, 0, 6, 120, 13)
    // 도시 건물 느낌 Building
    img2.fillRect(5, 10, 25, 25, 2)
    img2.fillRect(130, 15, 25, 25, 8)
    img2.fillRect(5, 70, 28, 30, 5)
    img2.fillRect(128, 75, 27, 30, 10)
    // 창문 Window
    img2.fillRect(10, 16, 5, 5, 1)
    img2.fillRect(20, 16, 5, 5, 1)
    img2.fillRect(135, 21, 5, 5, 1)
    img2.fillRect(145, 21, 5, 5, 1)
    return img2
}
let obstacle: Sprite = null
let img2: Image = null
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
let speed = 60
// 자동차는 화면 아래쪽에 두고 좌우로만 움직이기
mySprite.setPosition(80, 95)
mySprite.z = 10
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
// 도로 2개를 이어붙임 Stick two road together
let road1 = sprites.create(makeRoad(), SpriteKind.Road)
road1.setPosition(80, 60)
road1.z = -10
road1.vy = speed
let road2 = sprites.create(makeRoad(), SpriteKind.Road)
road2.setPosition(80, -60)
road2.z = -10
road2.vy = speed
// 도로가 화면 밑으로 나가면 다시 위로 보내기
game.onUpdate(function () {
    road1.vy = speed
    road2.vy = speed
    if (road1.y > 180) {
        road1.y = road2.y - 120
    }
    if (road2.y > 180) {
        road2.y = road1.y - 120
    }
})
// 점수 계속 증가 The Point
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    // 시간이 지날수록 빨라지게 More Difficult over the Time
    speed += 2
})
// 장애물 만들기 Obstacle
game.onUpdateInterval(800, function () {
    obstacle = sprites.create(img`
        . . 8 8 8 8 . . 
        . 8 8 8 8 8 8 . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 . 
        . . 8 8 8 8 . . 
        `, SpriteKind.Obstacle)
    obstacle.x = randint(55, 105)
    obstacle.y = -10
    obstacle.vy = speed
    obstacle.z = 5
})
