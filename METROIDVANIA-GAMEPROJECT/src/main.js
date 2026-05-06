import { quarto2 } from "./cenas/quarto2";
import { k } from "./kaboomLoader";

k.scene("quarto1", () => {
    quarto1();
});

k.scene("quarto2", () => {
    quarto2();
})

k.scene("intro", () => {

});

k.go("intro");