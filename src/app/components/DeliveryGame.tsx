"use client";
import React, { useState, useEffect, useRef } from "react";

type Item = {
  id: number;
  x: number;
  y: number;
  emoji: string;
  speed: number;
};

const FOODS = ["🍔", "🍕", "🍟", "🍣", "🍩", "🌮", "🍦"];
const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;
const PLAYER_WIDTH = 60;
const ITEM_SIZE = 30;

export default function DeliveryGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  
  const [items, setItems] = useState<Item[]>([]);
  
  const gameRef = useRef<HTMLDivElement>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const playerXRef = useRef(GAME_WIDTH / 2);
  const requestRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);
  const spawnTimerRef = useRef<number>(0);

  // Handle Mouse Movement to control the bag (Optimized with Refs and Transforms)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPlaying || isGameOver || !gameRef.current) return;
    const rect = gameRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    
    // Clamp to boundaries
    if (x < PLAYER_WIDTH / 2) x = PLAYER_WIDTH / 2;
    if (x > GAME_WIDTH - PLAYER_WIDTH / 2) x = GAME_WIDTH - PLAYER_WIDTH / 2;
    
    playerXRef.current = x;
    
    // Direct DOM manipulation for zero latency
    if (playerDivRef.current) {
      playerDivRef.current.style.transform = `translateX(${x - PLAYER_WIDTH / 2}px)`;
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setLives(3);
    setItems([]);
    spawnTimerRef.current = 0;
  };

  const updateGame = (time: number) => {
    if (!isPlaying || isGameOver) return;

    if (lastTimeRef.current !== undefined) {
      const deltaTime = time - lastTimeRef.current;
      
      // Spawn new items (easier: slower spawn rate)
      spawnTimerRef.current += deltaTime;
      if (spawnTimerRef.current > 1500 - Math.min(score * 10, 800)) { // Spawns slower and scales slower
        spawnTimerRef.current = 0;
        setItems(prev => [
          ...prev, 
          {
            id: Math.random(),
            x: Math.random() * (GAME_WIDTH - ITEM_SIZE) + ITEM_SIZE/2,
            y: -ITEM_SIZE,
            emoji: FOODS[Math.floor(Math.random() * FOODS.length)],
            speed: 0.15 + (Math.random() * 0.1) + (score * 0.003) // Slower base speed, scales much slower
          }
        ]);
      }

      setItems(prevItems => {
        let newItems = [...prevItems];
        let missed = 0;
        let caught = 0;

        newItems = newItems.map(item => ({ ...item, y: item.y + item.speed * deltaTime }));
        
        // Check collisions
        newItems = newItems.filter(item => {
          // Bottom reached
          if (item.y > GAME_HEIGHT) {
            missed++;
            return false;
          }
          
          // Collision with player (made slightly more forgiving horizontally)
          // Player rect: x - width/2 to x + width/2, y is GAME_HEIGHT - 60
          const playerY = GAME_HEIGHT - 60;
          const currentPlayerX = playerXRef.current;
          if (
            item.y + ITEM_SIZE > playerY - 10 && 
            item.y < playerY + 50 &&
            item.x + ITEM_SIZE > currentPlayerX - (PLAYER_WIDTH/2 + 20) &&
            item.x - ITEM_SIZE < currentPlayerX + (PLAYER_WIDTH/2 + 20)
          ) {
            caught++;
            return false;
          }
          
          return true;
        });

        if (caught > 0) setScore(s => s + caught * 10);
        if (missed > 0) setLives(l => Math.max(0, l - missed));

        return newItems;
      });
    }
    
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(updateGame);
  };

  useEffect(() => {
    if (lives <= 0) {
      setIsGameOver(true);
      setIsPlaying(false);
    }
  }, [lives]);

  useEffect(() => {
    if (isPlaying && !isGameOver) {
      requestRef.current = requestAnimationFrame(updateGame);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, isGameOver, score]); // removed playerX from deps to prevent re-renders on move

  return (
    <div className="glass-panel p-8 rounded-3xl flex flex-col items-center max-w-lg mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
      
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold mb-2">Nowlny Dash 🛵</h3>
        <p className="text-text-muted text-sm">Catch the food, avoid missing them!</p>
      </div>

      <div className="flex justify-between w-full max-w-[400px] mb-4 font-bold text-lg">
        <div className="text-primary">Score: {score}</div>
        <div className="text-red-500">
          {"❤️".repeat(lives)}{"🖤".repeat(3 - lives)}
        </div>
      </div>

      <div 
        ref={gameRef}
        onMouseMove={handleMouseMove}
        className="relative bg-bg-base/50 border border-border-subtle rounded-xl overflow-hidden shadow-inner cursor-none"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
      >
        {!isPlaying && !isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
            <div className="text-5xl mb-4 animate-bounce">🛵</div>
            <button onClick={startGame} className="btn-primary">Start Game</button>
          </div>
        )}
        
        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
            <h4 className="text-4xl font-bold text-white mb-2">Game Over!</h4>
            <p className="text-xl text-primary mb-6">Final Score: {score}</p>
            <button onClick={startGame} className="btn-primary">Play Again</button>
          </div>
        )}

        {/* Player */}
        <div 
          ref={playerDivRef}
          className="absolute bottom-6 flex items-center justify-center text-4xl select-none drop-shadow-[0_0_15px_rgba(255,107,0,0.5)] will-change-transform"
          style={{ 
            left: 0,
            transform: `translateX(${GAME_WIDTH / 2 - PLAYER_WIDTH / 2}px)`,
            width: PLAYER_WIDTH,
          }}
        >
          🎒
        </div>

        {/* Falling Food */}
        {items.map(item => (
          <div 
            key={item.id}
            className="absolute text-3xl select-none"
            style={{ 
              left: item.x - ITEM_SIZE / 2, 
              top: item.y,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>
    </div>
  );
}
