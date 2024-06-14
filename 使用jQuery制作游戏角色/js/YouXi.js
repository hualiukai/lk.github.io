$(function() {  
    var character = $("#character");  
    var map = $("#map");  
    var mapWidth = map.width();  
    var mapHeight = map.height();  
    var characterWidth = character.width();  
    var characterHeight = character.height();  
    var characterPos = {  
        x: mapWidth / 2 - characterWidth / 2,  
        y: mapHeight / 2 - characterHeight / 2  
    };  
    character.css({  
        left: characterPos.x + 'px', // 添加单位px  
        top: characterPos.y + 'px'   // 添加单位px  
    });  
  
    // 监听键盘事件控制角色移动  
    $(document).keydown(function(e) { // 通常建议将键盘事件绑定到document上  
        switch (e.key) {  
            case 'ArrowLeft':  
                character.attr("src", "img/player_left.gif");  
                characterPos.x -= 30;  
                break;  
            case 'ArrowUp':  
                character.attr("src", "img/player2.gif");  
                characterPos.y -= 30;  
                break;  
            case 'ArrowRight':  
                character.attr("src", "img/player_right.gif");  
                characterPos.x += 30;  
                break;  
            case 'ArrowDown':  
                character.attr("src", "img/player3.gif");  
                characterPos.y += 30;  
                break;  
            default:  
                return; // 其他键不处理  
        }  
        // 碰撞检测，确保角色不超出地图边界  
        characterPos.x = Math.max(0, Math.min(mapWidth - characterWidth, characterPos.x));  
        characterPos.y = Math.max(0, Math.min(mapHeight - characterHeight, characterPos.y));  
        character.css({  
            left: characterPos.x + 'px', // 添加单位px  
            top: characterPos.y + 'px'   // 添加单位px  
        });  
    });  
  
    // 监听双击事件实现角色变身  
    character.on("dblclick", function() {  
        character.attr("src", "img/player_big.gif");  
    });  
  
    // 角色接触宝箱提示  
    $("#baoxiang").click(function() {  
        alert("发现宝箱!");  
    });  
});