import React, { useState } from 'react'
import { ChessBlock } from './ChessBlock'
import white_queen from './assets/Chess_klt60.png'
import white_rook from './assets/Chess_rlt60.png'
import white_king from './assets/Chess_qlt60.png'
import white_pawn from './assets/Chess_plt60.png'
import white_knight from './assets/Chess_nlt60.png'
import white_bishop from './assets/Chess_blt60.png'
import dark_queen from './assets/Chess_kdt60.png'
import dark_rook from './assets/Chess_rdt60.png'
import dark_king from './assets/Chess_qdt60.png'
import dark_pawn from './assets/Chess_pdt60.png'
import dark_knight from './assets/Chess_ndt60.png'
import dark_bishop from './assets/Chess_bdt60 (1).png'

const board_blocks = [
    { id: 1, x: 1, y: 1, piece: { name: 'rook', image: white_rook, active: true, player: 1, initialPos: true }, active: false, pos: 'left' },
    { id: 2, x: 2, y: 1, piece: { name: 'knight', image: white_knight, active: true, player: 1 }, active: false, swap: true, pos: 'left' },
    { id: 3, x: 3, y: 1, piece: { name: 'bishop', image: white_bishop, active: true, player: 1 }, active: false, pos: 'left', swapr: 1 },
    { id: 4, x: 4, y: 1, piece: { name: 'king', image: white_queen, active: true, player: 1, initialPos: true }, active: false },
    { id: 5, x: 5, y: 1, piece: { name: 'queen', image: white_king, active: true, player: 1 }, active: false, pos: 'right', swapr: 1 },
    { id: 6, x: 6, y: 1, piece: { name: 'bishop', image: white_bishop, active: true, player: 1 }, active: false, swap: true, pos: 'right' },
    { id: 7, x: 7, y: 1, piece: { name: 'knight', image: white_knight, active: true, player: 1 }, active: false },
    { id: 8, x: 8, y: 1, piece: { name: 'rook', image: white_rook, active: true, player: 1, initialPos: true }, active: false, pos: 'right' },
    { id: 9, x: 1, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 10, x: 2, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 11, x: 3, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 12, x: 4, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 13, x: 5, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 14, x: 6, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 15, x: 7, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 16, x: 8, y: 2, piece: { name: 'pawn', image: white_pawn, active: true, player: 1, initialPos: true }, active: false },
    { id: 17, x: 1, y: 3, active: false },
    { id: 18, x: 2, y: 3, active: false },
    { id: 19, x: 3, y: 3, active: false },
    { id: 20, x: 4, y: 3, active: false },
    { id: 21, x: 5, y: 3, active: false },
    { id: 22, x: 6, y: 3, active: false },
    { id: 23, x: 7, y: 3, active: false },
    { id: 24, x: 8, y: 3, active: false },
    { id: 25, x: 1, y: 4, active: false },
    { id: 26, x: 2, y: 4, active: false },
    { id: 27, x: 3, y: 4, active: false },
    { id: 28, x: 4, y: 4, active: false },
    { id: 29, x: 5, y: 4, active: false },
    { id: 30, x: 6, y: 4, active: false },
    { id: 31, x: 7, y: 4, active: false },
    { id: 32, x: 8, y: 4, active: false },
    { id: 33, x: 1, y: 5, active: false },
    { id: 34, x: 2, y: 5, active: false },
    { id: 35, x: 3, y: 5, active: false },
    { id: 36, x: 4, y: 5, active: false },
    { id: 37, x: 5, y: 5, active: false },
    { id: 38, x: 6, y: 5, active: false },
    { id: 39, x: 7, y: 5, active: false },
    { id: 40, x: 8, y: 5, active: false },
    { id: 41, x: 1, y: 6, active: false },
    { id: 42, x: 2, y: 6, active: false },
    { id: 43, x: 3, y: 6, active: false },
    { id: 44, x: 4, y: 6, active: false },
    { id: 45, x: 5, y: 6, active: false },
    { id: 46, x: 6, y: 6, active: false },
    { id: 47, x: 7, y: 6, active: false },
    { id: 48, x: 8, y: 6, active: false },
    { id: 49, x: 1, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 50, x: 2, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 51, x: 3, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 52, x: 4, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 53, x: 5, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 54, x: 6, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 55, x: 7, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 56, x: 8, y: 7, piece: { name: 'pawn', image: dark_pawn, active: false, player: 2, initialPos: true }, active: false },
    { id: 57, x: 1, y: 8, piece: { name: 'rook', image: dark_rook, active: false, player: 2, initialPos: true }, pos: 'left', active: false },
    { id: 58, x: 2, y: 8, piece: { name: 'knight', image: dark_knight, active: false, player: 2 }, active: false, swap: true, pos: 'left' },
    { id: 59, x: 3, y: 8, piece: { name: 'bishop', image: dark_bishop, active: false, player: 2 }, active: false, pos: 'left', swapr: 2 },
    { id: 60, x: 4, y: 8, piece: { name: 'king', image: dark_queen, active: false, player: 2, initialPos: true }, active: false },
    { id: 61, x: 5, y: 8, piece: { name: 'queen', image: dark_king, active: false, player: 2 }, active: false, pos: 'right', swapr: 2 },
    { id: 62, x: 6, y: 8, piece: { name: 'bishop', image: dark_bishop, active: false, player: 2 }, active: false, pos: 'right', swap: true },
    { id: 63, x: 7, y: 8, piece: { name: 'knight', image: dark_knight, active: false, player: 2 }, active: false },
    { id: 64, x: 8, y: 8, piece: { name: 'rook', image: dark_rook, active: false, player: 2, initialPos: true }, active: false, pos: 'right' }
]

const ChessBoard = props => {
    const [pieces, setPieces] = useState(board_blocks)
    const [selected, setSelected] = useState(false)
    const [convert, setConvert] = useState({})

    const onActive = (data) => {

        let pawnForward = []
        let pawnRight = []
        let pawnLeft = []
        let validMove = []
        let back = true
        let forward = true
        let right = true
        let left = true
        let forwardR = { x: data.x + 1, y: data.y + 1 }
        let forwardL = { x: data.x - 1, y: data.y + 1 }
        let behindR = { x: data.x + 1, y: data.y - 1 }
        let behindL = { x: data.x - 1, y: data.y - 1 }
        let rookPiece = {}
        let rswap = null
        // console.log(data);
        let newData = [...pieces]
        if (data.piece?.active) {
            switch (data.piece?.name) {
                case 'pawn':
                    if (data.piece.player === 1) {
                        pawnForward = newData.filter((n) => {
                            return n.x === data.x && n.y === data.y + 1
                        })
                        pawnRight = newData.filter((n) => {
                            return n.x === data.x - 1 && n.y === data.y + 1
                        })
                        pawnLeft = newData.filter((n) => {
                            return n.x === data.x + 1 && n.y === data.y + 1
                        })
                    } else {
                        pawnForward = newData.filter((n) => {
                            return n.x === data.x && n.y === data.y - 1
                        })
                        pawnRight = newData.filter((n) => {
                            return n.x === data.x + 1 && n.y === data.y - 1
                        })
                        pawnLeft = newData.filter((n) => {
                            return n.x === data.x - 1 && n.y === data.y - 1
                        })
                    }

                    for (let i = 0; i < pieces.length; i++) {
                        if (data.piece.player === 1 && pieces[i].piece?.player !== data.piece.player) {
                            if (pieces[i].id === data.id) {
                                newData[i].active = true
                            } else if (!pawnForward[0]?.piece && pieces[i].x === data.x && (pieces[i].y === data.y + 1 ||
                                (data.piece.initialPos && pieces[i].y === data.y + 2)) && (!pieces[i].piece)) {
                                newData[i].active = true
                            } else if (pawnRight[0]?.piece && (newData[i].x === data.x - 1 && newData[i].y === data.y + 1)) {
                                newData[i].active = true
                            } else if (pawnLeft[0]?.piece && (newData[i].x === data.x + 1 && newData[i].y === data.y + 1)) {
                                newData[i].active = true
                            } else {
                                newData[i].active = false
                            }
                        } else if (data.piece.player === 2 && pieces[i].piece?.player !== data.piece.player) {
                            if (pieces[i].id === data.id) {
                                newData[i].active = true
                            } else if (!pawnForward[0]?.piece && pieces[i].x === data.x && (pieces[i].y === data.y - 1 ||
                                (data.piece.initialPos && pieces[i].y === data.y - 2)) && (!pieces[i].piece)) {
                                newData[i].active = true
                            } else if (pawnRight[0]?.piece && (newData[i].x === data.x + 1 && newData[i].y === data.y - 1)) {
                                newData[i].active = true
                            } else if (pawnLeft[0]?.piece && (newData[i].x === data.x - 1 && newData[i].y === data.y - 1)) {
                                newData[i].active = true
                            } else {
                                newData[i].active = false
                            }
                        }
                    }
                    setPieces(newData)
                    setSelected({ ...data })
                    return;

                case 'rook':
                    for (let i = data.id; i < newData.length; i++) {
                        if (data.y === newData[i].y && right) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                right = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                right = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                        if (data.x === newData[i].x && forward) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                forward = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                forward = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                    }

                    for (let i = data.id - 2; i >= 0; i--) {
                        if (data.y === newData[i].y && left) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                left = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                left = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                        if (data.x === newData[i].x && back) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                back = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                back = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                    }

                    newData = newData.map((data) => {
                        if (validMove.includes(data.id)) {
                            data.active = true
                        } else {
                            data.active = false
                        }
                        return data
                    })

                    setPieces([...newData])
                    setSelected({ ...data })
                    return;

                case 'knight':
                    let step1 = newData.filter((n) => {
                        return n.x === data.x - 1 && n.y === data.y + 2
                    })
                    let step2 = newData.filter((n) => {
                        return n.x === data.x + 1 && n.y === data.y + 2
                    })
                    let step3 = newData.filter((n) => {
                        return n.x === data.x + 2 && n.y === data.y + 1
                    })
                    let step4 = newData.filter((n) => {
                        return n.x === data.x + 2 && n.y === data.y - 1
                    })
                    let step5 = newData.filter((n) => {
                        return n.x === data.x - 2 && n.y === data.y + 1
                    })
                    let step6 = newData.filter((n) => {
                        return n.x === data.x - 2 && n.y === data.y - 1
                    })
                    let step7 = newData.filter((n) => {
                        return n.x === data.x - 1 && n.y === data.y - 2
                    })
                    let step8 = newData.filter((n) => {
                        return n.x === data.x + 1 && n.y === data.y - 2
                    })

                    for (let i = 0; i < pieces.length; i++) {
                        if (pieces[i].piece?.player !== data.piece.player) {
                            if (
                                step1[0]?.id === pieces[i].id ||
                                step2[0]?.id === pieces[i].id ||
                                step3[0]?.id === pieces[i].id ||
                                step4[0]?.id === pieces[i].id ||
                                step5[0]?.id === pieces[i].id ||
                                step6[0]?.id === pieces[i].id ||
                                step7[0]?.id === pieces[i].id ||
                                step8[0]?.id === pieces[i].id
                            ) {
                                newData[i].active = true
                            } else {
                                newData[i].active = false
                            }
                        }
                    }
                    setPieces([...newData])
                    setSelected({ ...data })
                    return;

                case 'bishop':

                    for (let i = data.id; i < newData.length; i++) {
                        if (forwardR.x === newData[i].x && forwardR.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                forwardR = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                forwardR = { x: 0, y: 0 }
                            } else {
                                forwardR = { x: forwardR.x + 1, y: forwardR.y + 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                        if (forwardL.x === newData[i].x && forwardL.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                forwardL = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                forwardL = { x: 0, y: 0 }
                            } else {
                                forwardL = { x: forwardL.x - 1, y: forwardL.y + 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                    }

                    for (let i = data.id - 2; i >= 0; i--) {
                        if (behindR.x === newData[i].x && behindR.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                behindR = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                behindR = { x: 0, y: 0 }
                            } else {
                                behindR = { x: behindR.x + 1, y: behindR.y - 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                        if (behindL.x === newData[i].x && behindL.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                behindL = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                behindL = { x: 0, y: 0 }
                            } else {
                                behindL = { x: behindL.x - 1, y: behindL.y - 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                    }
                    newData = newData.map((data) => {
                        if (validMove.includes(data.id)) {
                            data.active = true
                        } else {
                            data.active = false
                        }
                        return data
                    })

                    setPieces([...newData])
                    setSelected({ ...data })
                    return;

                case 'king':
                    let one = { x: data.x + 1, y: data.y + 1 }
                    let two = { x: data.x, y: data.y + 1 }
                    let three = { x: data.x - 1, y: data.y + 1 }
                    let four = { x: data.x - 1, y: data.y }
                    let five = { x: data.x - 1, y: data.y - 1 }
                    let six = { x: data.x, y: data.y - 1 }
                    let seven = { x: data.x + 1, y: data.y - 1 }
                    let eight = { x: data.x + 1, y: data.y }
                    let swap = { r: false, l: false }
                    for (let i = 0; i < newData.length; i++) {
                        if (newData[i].y === data.y) {
                            if (newData[i].x === 1 && newData[i].piece?.name === 'rook' && newData[i].piece?.initialPos === true) {
                                swap.l = true
                            } else if (newData[i].x > 1 && newData[i].x < 4) {
                                if (swap.l === true && newData[i].piece) {
                                    swap.l = false
                                }
                            } else if (newData[i].piece?.name === 'king') {
                                if (newData[i].piece?.initialPos === true && swap.l === true) {
                                    swap.l = true
                                }
                                if (newData[i].piece?.initialPos === true) {
                                    swap.r = true
                                }
                            } else if (newData[i].x > 4 && newData[i].x < 8) {
                                if (swap.r === true && newData[i].piece) {
                                    swap.r = false
                                }
                            } else if (newData[i].x === 8) {
                                if (newData[i].piece?.name === 'rook' && newData[i].piece?.initialPos === true && swap.l === true) {
                                    swap.l = true
                                }
                            }
                        }
                    }



                    newData = newData.map((pieceData) => {
                        if (
                            (data.piece.initialPos && ((four.x - 1 === pieceData.x && four.y === pieceData.y && swap.l) || (eight.x + 1 === pieceData.x && eight.y === pieceData.y && swap.r))) ||
                            (one.x === pieceData.x && one.y === pieceData.y) ||
                            (two.x === pieceData.x && two.y === pieceData.y) ||
                            (three.x === pieceData.x && three.y === pieceData.y) ||
                            (four.x === pieceData.x && four.y === pieceData.y) ||
                            (five.x === pieceData.x && five.y === pieceData.y) ||
                            (six.x === pieceData.x && six.y === pieceData.y) ||
                            (seven.x === pieceData.x && seven.y === pieceData.y) ||
                            (eight.x === pieceData.x && eight.y === pieceData.y)
                        ) {
                            if (pieceData.piece && pieceData.piece.player === data.piece.player) {
                                pieceData.active = false
                            } else {
                                pieceData.active = true
                            }
                        } else {
                            pieceData.active = false
                        }
                        return pieceData
                    })

                    setPieces([...newData])
                    setSelected({ ...data })
                    return;

                case 'queen':

                    for (let i = data.id; i < newData.length; i++) {
                        if (forwardR.x === newData[i].x && forwardR.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                forwardR = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                forwardR = { x: 0, y: 0 }
                            } else {
                                forwardR = { x: forwardR.x + 1, y: forwardR.y + 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                        if (forwardL.x === newData[i].x && forwardL.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                forwardL = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                forwardL = { x: 0, y: 0 }
                            } else {
                                forwardL = { x: forwardL.x - 1, y: forwardL.y + 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                        if (data.y === newData[i].y && right) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                right = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                right = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                        if (data.x === newData[i].x && forward) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                forward = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                forward = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                    }

                    for (let i = data.id - 2; i >= 0; i--) {
                        if (behindR.x === newData[i].x && behindR.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                behindR = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                behindR = { x: 0, y: 0 }
                            } else {
                                behindR = { x: behindR.x + 1, y: behindR.y - 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                        if (behindL.x === newData[i].x && behindL.y === newData[i].y) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                behindL = { x: 0, y: 0 }
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                behindL = { x: 0, y: 0 }
                            } else {
                                behindL = { x: behindL.x - 1, y: behindL.y - 1 }
                                validMove.push(newData[i].id)
                            }
                        }
                        if (data.y === newData[i].y && left) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                left = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                left = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                        if (data.x === newData[i].x && back) {
                            if (newData[i].piece && data.piece.player !== newData[i].piece.player) {
                                validMove.push(newData[i].id)
                                back = false
                            } else if (newData[i].piece && data.piece.player === newData[i].piece.player) {
                                back = false
                            } else {
                                validMove.push(newData[i].id)
                            }
                        }
                    }
                    newData = newData.map((data) => {
                        if (validMove.includes(data.id)) {
                            data.active = true
                        } else {
                            data.active = false
                        }
                        return data
                    })

                    setPieces([...newData])
                    setSelected({ ...data })
                    return;

                default:
                    break;
            }
        }

        if (data.active && data.y === 8 && selected.piece?.name === 'pawn' && selected.piece?.player === 1) {
            setConvert({isTrue: true, piece: {...data}})
            data.active = false
        } else if (data.active && data.y === 1 && selected.piece?.name === 'pawn' && selected.piece?.player === 2) {
            setConvert({isTrue: true, piece: {...data}})
            data.active = false
        }

        // debugger
        if (data.active && (!data.piece || data.piece.player !== selected.piece.player) && selected.piece) {
            if (selected.piece.name === "king" && selected.piece.initialPos === true && data.swap === true) {
                for (let i = 0; i < newData.length; i++) {
                    if (newData[i].piece?.name === 'rook' && newData[i].pos === data.pos && newData[i].piece?.player === selected.piece.player) {
                        rookPiece = { ...newData[i] }
                    }
                    if (data.pos === newData[i].pos && newData[i].swapr === selected.piece.player) {
                        rswap = newData[i].id
                    }
                }
            }
            newData = pieces.map((p) => {
                if (p.id === selected.id) {
                    delete p.piece
                    p.active = false
                } else if (p.id === data.id) {
                    p.piece = { ...selected.piece, initialPos: false, active: false }
                    p.active = false
                } else if (p.id === rookPiece.id) {
                    delete p.piece
                } else if (p.piece && p.piece.player === selected.piece.player) {
                    p.piece = { ...p.piece, active: false }
                    p.active = false
                } else if (p.piece && p.piece.player !== selected.piece.player) {
                    p.piece = { ...p.piece, active: true }
                    p.active = false
                } else if (p.id === rswap) {
                    rookPiece.piece.initialPos = false
                    p.piece = rookPiece.piece
                    p.active = false
                } else {
                    p.active = false
                }
                return p
            })
            console.log(newData);
            setSelected(false)
            setPieces(newData);
            setConvert({isTrue: false, piece: null})
        }

        if (!data.active && selected) {
            newData = pieces.map((p) => {
                return { ...p, active: false }
            })
            setPieces(newData)
        }

    }

    const onConvert = (img, name) => {
        selected.piece.name = name
        selected.piece.image = img
        setSelected(selected)
        onActive(convert.piece)
    }

    return (
        <>
            <div className='chess_board'>
                <div className='chess_board_inner'>
                    <div className='left_side_number'>
                        <div className='left_side_inner_number'>
                            <div className='number'>1</div>
                            <div className='number'>2</div>
                            <div className='number'>3</div>
                            <div className='number'>4</div>
                            <div className='number'>5</div>
                            <div className='number'>6</div>
                            <div className='number'>7</div>
                            <div className='number'>8</div>
                        </div>
                    </div>
                    <div className='top_side_alphabet'>
                        <div className='top_side_inner_alphabet'>
                            <div className='alphabet'>1</div>
                            <div className='alphabet'>2</div>
                            <div className='alphabet'>3</div>
                            <div className='alphabet'>4</div>
                            <div className='alphabet'>5</div>
                            <div className='alphabet'>6</div>
                            <div className='alphabet'>7</div>
                            <div className='alphabet'>8</div>
                        </div>
                    </div>
                    <div className='chokthu'>
                        {pieces.map((data) => {
                            return <ChessBlock i={data.y % 2 === 0 ? data.id + 1 : data.id} data={data} onActive={onActive} key={data.id} />
                        }
                        )}
                    </div>
                    <div className='bottom_side_alphabet'>
                        <div className='bottom_side_inner_alphabet'>
                            <div className='alphabet'>A</div>
                            <div className='alphabet'>B</div>
                            <div className='alphabet'>C</div>
                            <div className='alphabet'>D</div>
                            <div className='alphabet'>E</div>
                            <div className='alphabet'>F</div>
                            <div className='alphabet'>G</div>
                            <div className='alphabet'>H</div>
                        </div>
                    </div>
                    <div className='right_side_number'>
                        <div className='right_side_inner_number'>
                            <div className='number'>1</div>
                            <div className='number'>2</div>
                            <div className='number'>3</div>
                            <div className='number'>4</div>
                            <div className='number'>5</div>
                            <div className='number'>6</div>
                            <div className='number'>7</div>
                            <div className='number'>8</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {convert.isTrue && <div className='convert_popover'>
                <div className='inner_convert'>
                    <button onClick={() => onConvert(selected.piece.player === 1 ? white_rook : dark_rook, 'rook')} >
                        <img src={selected.piece.player === 1 ? white_rook : dark_rook} className='chess_image' />
                    </button>
                    <button onClick={() => onConvert(selected.piece.player === 1 ? white_bishop : dark_bishop, 'bishop')} >
                        <img src={selected.piece.player === 1 ? white_bishop : dark_bishop} className='chess_image' />
                    </button>
                    <button onClick={() => onConvert(selected.piece.player === 1 ? white_knight : dark_knight, 'knight')} >
                        <img src={selected.piece.player === 1 ? white_knight : dark_knight} className='chess_image' />
                    </button>
                    <button onClick={() => onConvert(selected.piece.player === 1 ? white_king : dark_king, 'queen')} >
                        <img src={selected.piece.player === 1 ? white_king : dark_king} className='chess_image' />
                    </button>
                </div>
            </div>}
        </>
    )
}

ChessBoard.propTypes = {}

export default ChessBoard