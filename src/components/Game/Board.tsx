import React from "react";
import { Box } from "@mui/system";
import data from "../../data/data.json"
import BoardCell from "./BoardCell";
import { BoardCellType } from "../../common/interfaces";
import createGrid from "../../functions/gridGenerator";
import { StyledPaper } from "../../styles/StyledComponents";


export default function Board() {
    const [boardData, setBoardData] = React.useState<BoardCellType[]>([])
    const [selectedCells, setSelectedCells] = React.useState<BoardCellType[]>([])



    //Generating board
    React.useEffect(()=>{
        if (boardData.length === 0) {
            createGrid(data, selectedCells, setSelectedCells, setBoardData)
        }

    }, [boardData])

    const handleClickedCell = () => {
        console.log(1+1)
    }
    
    
    return (
        <Box sx={{ width: "100%"}} >
            <StyledPaper>
                {boardData.map((item: any, index: number) => (
                   <BoardCell
                   index={index}
                   key={index}
                   item={item}
                   arrayLength={boardData.length}
                   handleClickedCell={handleClickedCell}
                   
                   />
                    
                ))}
            </StyledPaper>
        </Box>
    )
}