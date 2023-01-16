import { BoardCellType } from "../common/interfaces";


//this function allows me to check the direction of selected cell to determine if a win has occurred


export default function checkWin(selectedCells: BoardCellType[]) {

    let result = "";

    selectedCells.forEach((item) => {
        //row win
        if (selectedCells.filter((word) => word.y === item.y).length === 5) {
            return (result = "5 cells selected in the same row");
        };


        //column win
        if (selectedCells.filter((word) => word.x === item.x).length === 5) {
            return (result = "5 cells selected in the same column");
        };

        //diagonal win
        if (selectedCells.filter((word) => word.x - word.y === item.x - item.y).length === 5) {
            return (result = "5 cells selected in the same diagonal position");
        };
    })

    return result;
};