import React from "react";
import { Box } from "@mui/system";
import data from "../../data/data.json";
import BoardCell from "./BoardCell";
import { BoardCellType } from "../../common/interfaces";
import createGrid from "../../functions/gridGenerator";
import { StyledPaper } from "../../styles/StyledComponents";
import checkWin from "../../functions/checkWin";
import { useWindowSize } from "react-use";
import Confetti from 'react-confetti';

export default function Board() {
  const [boardData, setBoardData] = React.useState<BoardCellType[]>([]);
  const [selectedCells, setSelectedCells] = React.useState<BoardCellType[]>([]);
  const [win, setWin] = React.useState<Boolean>(false);
  const { width, height } = useWindowSize();

  //Generating board
  //A win happens when the result variable is no longer empty.
  React.useEffect(() => {
    if (boardData.length === 0) {
      createGrid(data, selectedCells, setSelectedCells, setBoardData);
    }
    const result = checkWin(selectedCells);
    if (result !== "") {
      setWin(true);
    }
  }, [boardData, selectedCells]);

 

  //function getClickedCells fetch the clicked cells and update its value in the parent state
  const getClickedCells = (item: BoardCellType) => {
    setBoardData(
      boardData.map((boardCell) => {
        if (boardCell.word === item.word) {
          // Create a *new* object with changes
          let updatedCell = { ...boardCell, clicked: !item.clicked };
          handleSelectedCells(updatedCell);
          return updatedCell;
        } else {
          //No changes if there is no click
          return boardCell;
        }
      })
    );
  };

   //this function is to add the selected Cells in a seperate Array
   const handleSelectedCells = (cell: BoardCellType) => {
    if (cell.clicked === false) {
      setSelectedCells(selectedCells.filter((c) => c.word !== cell.word));
      setWin(false);
    } else {
      setSelectedCells([...selectedCells, cell]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledPaper>
        {boardData.map((item: any, index: number) => (
          <BoardCell
            index={index}
            key={index}
            item={item}
            arrayLength={boardData.length}
            handleClickedCell={getClickedCells}
          />
        ))}
      </StyledPaper>
      { win && <Confetti
      width={width}
      height={height}
    /> }
    </Box>
  );
}
