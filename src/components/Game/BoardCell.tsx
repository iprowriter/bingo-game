import { BoardCellType } from "../../common/interfaces";
import { StyledPaperCell, StyledTypographyCenter, StyledTypographyIndex } from "../../styles/StyledComponents";

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



  return (
    <StyledPaperCell>
     <StyledTypographyIndex>
        {index}
     </StyledTypographyIndex>
      {index === (arrayLength - 1) / 2 ? (
        <StyledTypographyCenter>
            {item.word}
        </StyledTypographyCenter>
      ) : (
        <p>
            {item.word}
        </p>
      )}
    </StyledPaperCell>
  );
}
