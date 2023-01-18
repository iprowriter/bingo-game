import { BoardCellType } from "../common/interfaces";


//this function allows me to check the direction of selected cell to determine if a win has occurred


export default function checkWin(selectedCells: BoardCellType[]) {

    let result = "";

    selectedCells.forEach((cell) => {
        //row win
        if (selectedCells.filter((item) => item.y === cell.y).length === 5) {
            return (result = "5 cells selected in the same row");
        };


        //column win
        if (selectedCells.filter((item) => item.x === cell.x).length === 5) {
            return (result = "5 cells selected in the same column");
        };

        //diagonal win top left to down right (+opposite)
        if (selectedCells.filter((item) => item.x - item.y === cell.x - cell.y).length === 5) {
            return (result = "5 cells selected in the same diagonal position - top left to down right (+opposite)");
        };

        //diagonal win down left to top right (+opposite)
        if (selectedCells.filter((item) => item.y + item.x === cell.y + cell.x).length === 5) {
            return (result = "5 cells selected in the same diagonal position - down left to top right (+opposite)");
        };
    })

    return result;
};