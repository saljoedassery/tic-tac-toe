
export default (squares)=>{

    let board = [[0,0,0],[0,0,0],[0,0,0]]

    for(let i = 0 ; i < squares.length; i++){
        if(squares[i] === "X"){
            board[Math.floor(i/3)][i%3] = 1
        }
        else if(squares[i] === "O"){
            board[Math.floor(i/3)][i%3] = 2
        }
    }
    console.log(board)

    return makeMove(board)

    // return randomNumber(0,8)
}

function makeMove(board){
    let opt_x = 0;
    let opt_y = 0;
    let opt = -1000;
    let ret = 0;

    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] === 0){
                board[i][j] = 2;
                ret = minMax(board,1,0);
                if(ret >= opt){
                    opt = ret;
                    opt_x = i;
                    opt_y = j;
                }
                board[i][j] = 0;
            }
        }
    }

    return opt_x * 3 + opt_y;

}

function minMax(board,depth,maximizer){
    if(isGameOver(board,1)){
        return -10 + depth ;
    }
    else if(isGameOver(board,2)){
        return 10 - depth;
    }
    else if(!isMovesLeft(board)){
        return 0;
    }
    let max_ret = -1000;
    let min_ret = 1000;
    let ret;
    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 3 ; j++){
            if(maximizer === 1){
                if(board[i][j] === 0){
                    board[i][j] = 2;
                    ret = minMax(board,depth + 1, 0);
                    if(ret > max_ret){
                        max_ret = ret;
                    } 
                    board[i][j] = 0;
                }
            }
            else{
                if(board[i][j] === 0){
                    board[i][j] = 1;
                    ret = minMax(board,depth + 1, 1);
                    if(ret < min_ret){
                        min_ret = ret;
                    }
                    board[i][j] = 0;
                }
            }
        }
    }
    if(maximizer === 1){
        return max_ret;
    }
    return min_ret;
}

function isMovesLeft(board){
    for(let i = 0 ; i < 3; i++){
        for(let j = 0 ; j < 3 ; j++){
            if(board[i][j] === 0){
                return true;
            }
        }
    }
    return false;
}

function isGameOver(board, player){
    let flag = 0;
    for(let i = 0 ; i < 3 ; i++){
        flag = 0;
        for(let j = 0 ; j < 3 ; j++){
            if(board[i][j] !== player){
                flag = 1;
            }
        }
        if(flag === 0){
            return true;
        }
    }
    for(let i = 0 ; i < 3 ; i++){
        flag = 0;
        for(let j = 0 ; j < 3 ; j++){
            if(board[j][i] !== player){
                flag = 1;
            }
        }
        if(flag === 0){
            return true;
        }
    }
    flag = 0;
    for(let i = 0 ; i < 3 ; i++){
        if(board[i][i] !== player){
            flag = 1;
        }
    }
    if(flag === 0){
        return true;
    }
    flag = 0;
    for(let i = 2,j = 0; i >= 0 && j <=2 ; i--,j++){
        if(board[i][j] !== player){
            flag = 1;
        }
    }
    if(flag === 0){
        return true;
    }
    return false;
}


// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  