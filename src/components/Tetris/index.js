import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";

import { checkCollision, createStage } from "../../gameHelpers";

import { StyledTetrisWrapper, StyledTetris } from "./styles";

import { useInterval } from "../../hooks/useInterval";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useGameStatus } from "../../hooks/useGameStatus";
import { useMobileDetect } from "../../hooks/useMobileDetect";

import Stage from "../Stage";
import Display from "../Display";
import StartButton from "../StartButton";
import Switch from "../Switch";
import ControlButton from "../ControlButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [theme, setTheme] = useState("dark");

  const mainRef = useRef(null);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );
  const detectMobile = useMobileDetect();

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    mainRef.current.focus();
    setStage(createStage());
    setDropTime(500);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
    setIsStarted(true);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(500 / (level + 1) + 200);
      }
    }
  };

  const handleMouseUp = () => {
    if (!gameOver) {
      setDropTime(500 / (level + 1) + 200);
    }
  };

  const handleRotate = () => {
    if (detectMobile.isMobile()) playerRotate(stage, 1);
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
        onKeyUp={keyUp}
        ref={mainRef}
      >
        <StyledTetris>
          {isStarted && !gameOver && (
            <>
              <header>
                {!gameOver && (
                  <>
                    <Display text={`Score: ${score}`} />
                    <Display text={`Rows: ${rows}`} />
                    <Display text={`Level: ${level}`} />
                  </>
                )}
              </header>
              <Stage mobileCapture={handleRotate} stage={stage} />
              {detectMobile.isMobile() && (
                <footer>
                  <ControlButton left callback={() => movePlayer(-1)} />
                  <ControlButton
                    down
                    callback={() => dropPlayer()}
                    onMouseUp={handleMouseUp}
                  />
                  <ControlButton right callback={() => movePlayer(1)} />
                </footer>
              )}
            </>
          )}
          {(!isStarted || gameOver) && (
            <Switch
              onChange={handleTheme}
              text={theme === "light" ? "light" : "dark"}
            />
          )}
          {!isStarted && !gameOver && (
            <div className="wrapper">
              <h1>
                React
                <br />
                Tetris
              </h1>
              <StartButton callback={startGame} text="Start Game" />
            </div>
          )}
          {gameOver && (
            <div className="wrapper">
              <h1>
                Game
                <br />
                Over
              </h1>
              <StartButton callback={startGame} text="Play Again" />
            </div>
          )}
        </StyledTetris>
      </StyledTetrisWrapper>
    </ThemeProvider>
  );
};

export default Tetris;
