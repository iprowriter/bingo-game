import { BoardCellType } from "../../common/interfaces";
import {
  StyledPaperCell,
  StyledTypographyCenter,
  StyledTypographyIndex,
} from "../../styles/StyledComponents";
import "../../styles/BoardCell.css";
import { Typography } from "@mui/material";


//this component defines the look of each cell

export default function BoardCell({
  index,
  item,
  arrayLength,
  handleClickedCell,
}: {
  index: number;
  item: BoardCellType;
  arrayLength: number;
  handleClickedCell: Function;
}) {
  const handleClicked = (item: BoardCellType) => {
    handleClickedCell(item);
  };

  return (
    <StyledPaperCell>
      <StyledTypographyIndex>{index}</StyledTypographyIndex>
      {index === (arrayLength - 1) / 2 ? (
        <StyledTypographyCenter>{item.word}</StyledTypographyCenter>
      ) : (
        <Typography onClick={() => handleClicked(item)}
        className={item.clicked === true ? "line-through" : ""}
        >{item.word}</Typography>
      )}
    </StyledPaperCell>
  );
}
