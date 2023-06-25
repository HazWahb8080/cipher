"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

function CanvasComponent({ inView }) {
  const [canvasInitialized, setCanvasInitialized] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (inView && !canvasInitialized) {
      const renderCanvas = () => {
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Runner = Matter.Runner;
        const params = {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        };
        const canvasSize = {
          width: window.innerWidth * 0.85,
          height: 100,
        };
        const engine = Engine.create();

        const render = Render.create({
          element: canvasRef.current,
          engine: engine,
          options: {
            ...canvasSize,
            background: "transparent",
            wireframes: false,
          },
        });

        const floor = Bodies.rectangle(
          canvasSize.width / 2,
          canvasRef.current.offsetTop + 200,
          canvasSize.width,
          50,
          params
        );
        const wall1 = Bodies.rectangle(
          0,
          canvasRef.current.offsetTop + 10,
          50,
          canvasRef.current.offsetTop + 500,
          params
        );
        const wall2 = Bodies.rectangle(
          canvasSize.width + 25,
          canvasRef.current.offsetTop + 10,
          50,
          canvasRef.current.offsetTop + 500,
          params
        );

        const wordElements = document.querySelectorAll(".throwable-span");
        const wordBodies = [...wordElements].map((elemRef) => {
          const width = elemRef.offsetWidth;
          const height = elemRef.offsetHeight;

          const x = Matter.Common.random(
            width / 2,
            canvasSize.width - width / 1500
          );
          // Random X position within the canvas width
          const y = Matter.Common.random(
            canvasSize.height / 2 + height / 2,
            canvasSize.height - height / 2
          ); // Random Y position within the floor area

          return {
            body: Bodies.rectangle(x, y, width, height, {
              restitution: 0.2,
              render: {
                fillStyle: "transparent",
              },
            }),
            elem: elemRef,
            render() {
              const { x, y } = this.body.position;
              this.elem.style.top = `${y - 10}px`;
              this.elem.style.left = `${x - width / 10}px`;
              this.elem.style.transform = `rotate(${this.body.angle}rad)`;
            },
          };
        });

        const mouse = Matter.Mouse.create(document.body);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
          mouse,
          constraint: {
            stiffness: 0.05,
            render: {
              visible: false,
            },
          },
        });
        // mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        // mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
        World.add(engine.world, [
          floor,
          ...wordBodies.map((box) => box.body),
          wall1,
          wall2,
          mouseConstraint,
        ]);

        render.mouse = mouse;
        Runner.run(engine);
        Render.run(render);

        (function rerender() {
          wordBodies.forEach((element) => {
            element.render();
          });
          Matter.Engine.update(engine);
          requestAnimationFrame(rerender);
        })();

        setCanvasInitialized(true); // Marking the canvas as initialized
      };

      renderCanvas();
    }
  }, [inView, canvasInitialized]);

  return (
    <section className="flex justify-center items-center w-screen">
      <div
        ref={canvasRef}
        className="w-[75%] bg-transparent flex justify-center items-center"
      >
        <span className="throwable-span bg-[#FFE3D3]">make me fit</span>
        <span className="throwable-span bg-[#DBEFE8]">
          code me a calculator in js
        </span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#FFE3D3]">write me a story</span>
        <span className="throwable-span bg-[#D8C0FF]">write this recipe</span>
        <span className="throwable-span bg-[#AB6BDD]">
          find me a good restaurant
        </span>
        <span className="throwable-span bg-[#DBEFE8]">
          write a python script
        </span>
        <span className="throwable-span bg-[#FFE3D3]">
          create a 3 course menu
        </span>
      </div>
    </section>
  );
}

export default CanvasComponent;
