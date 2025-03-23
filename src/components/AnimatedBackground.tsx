
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Circle properties
    class Circle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      directionX: number;
      directionY: number;
      opacity: number;

      constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        speed: number
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.directionX = Math.random() * 2 - 1;
        this.directionY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, "0")}`;
        ctx.fill();
      }

      update() {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;

        // Boundary checking
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.directionY = -this.directionY;
        }

        this.draw();
      }
    }

    // Create circles
    const circleCount = Math.min(30, Math.floor(window.innerWidth / 50));
    const circles: Circle[] = [];

    for (let i = 0; i < circleCount; i++) {
      const radius = Math.random() * 50 + 20;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const speed = Math.random() * 0.5 + 0.1;
      const colors = ["#5E259B", "#9254de", "#F0C75E"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      circles.push(new Circle(x, y, radius, color, speed));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const circle of circles) {
        circle.update();
      }
      
      // Connect circles with lines
      for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 250) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 150, ${0.1 * (1 - distance / 250)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(circles[i].x, circles[i].y);
            ctx.lineTo(circles[j].x, circles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full"
      style={{ opacity: 0.2 }}
    />
  );
};

export default AnimatedBackground;
