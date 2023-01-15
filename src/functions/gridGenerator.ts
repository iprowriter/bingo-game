import { BoardCellType } from "../common/interfaces";

//The help function generates the grid from the data (data.json)
//The middle data is set to true since it is a bonus (according to the rules of th game)
//Note to self: I used forEach instead of map since nothing is returned, delete comment later

export default function createGrid(
  data: any,
  selectedCells: BoardCellType[],
  setSelectedCells: Function,
  setBoardData: Function
) {
  let initialData: BoardCellType[] = [];
  data.forEach((item: any, index: number) => {
    if (index === (data.length - 1) / 2) {
      let middleItem = { ...item, clicked: true };
      initialData.push(middleItem);

      setSelectedCells([...selectedCells, middleItem]);
    } else {
      initialData.push(item);
    }
  });
  return setBoardData(initialData);
}
