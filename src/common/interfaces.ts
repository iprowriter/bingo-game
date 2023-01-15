export interface BoardCellType {
    word: string;
    clicked: boolean;
    x: number;
    y: number;
  }

  
export interface BoardType {
    board: BoardCellType[];
  }
  