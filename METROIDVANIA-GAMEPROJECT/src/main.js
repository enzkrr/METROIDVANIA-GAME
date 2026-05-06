import { k } from "./kaboomLoader.js";
import { room1 } from "./scenes/room1.js";
import { room2 } from "./scenes/room2.js";
import { setBackgorundColor } from "./scenes/roomUtils.js";

async function main() {
    const room1Data = await (await fetch("./maps/room1.json")).json();
    const room2Data = await (await fetch("./maps/room2.json")).json();

    k.scene("room1", () => {
        room2(k);
    });
    
    k.scene("room2", () => {
        room2();
    });
}

k.scene("intro", () => {
    setBackgorundColor(k, "#20214a");
    k.add(
        makeNotificationBox(
            k,
            "Escape da fabrica!\nUse as teclas de setas para se mover, x para pular, z para atacar.\nAperte enter para começar!"
        )
    );
    k.onKeyPress("enter", () => {
        const contex = new AudioContext();
        context.resume();
        k.go("room1", { exitName: null});
    });
});

k.go("intro");

main();