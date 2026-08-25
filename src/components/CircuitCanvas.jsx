import React, { useEffect, useRef } from 'react';

export default function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const nodeCount = isMobile ? 24 : 55;
    const maxConnectDistance = isMobile ? 120 : 160;

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: isMobile ? 100 : 180,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Create Nodes
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2,
      type: Math.random() > 0.7 ? 'chip' : 'dot',
    }));

    // Data Packets traveling along connections
    const packets = Array.from({ length: isMobile ? 6 : 14 }, () => ({
      from: Math.floor(Math.random() * nodeCount),
      to: Math.floor(Math.random() * nodeCount),
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.008,
      color: Math.random() > 0.4 ? '#00F0FF' : '#B026FF',
    }));

    const render = () => {
      // Smooth mouse interpolation for parallax reactivity
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Update Node positions & draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        nodeA.pulse += 0.03;

        // Bounce on boundaries
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Distance to mouse
        const dxMouse = mouse.x - nodeA.x;
        const dyMouse = mouse.y - nodeA.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        // Draw node-to-node circuit lines
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const alpha = (1 - dist / maxConnectDistance) * 0.25;
            const isNearMouse = distMouse < mouse.radius;
            const lineAlpha = isNearMouse ? alpha * 2.2 : alpha;

            ctx.beginPath();
            // Orthogonal circuit wire paths for engineering feel
            if (i % 2 === 0) {
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeA.x, nodeB.y);
              ctx.lineTo(nodeB.x, nodeB.y);
            } else {
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
            }

            ctx.strokeStyle = isNearMouse
              ? 'rgba(0, 240, 255, ' + lineAlpha + ')'
              : 'rgba(0, 240, 255, ' + lineAlpha * 0.6 + ')';
            ctx.lineWidth = isNearMouse ? 1.2 : 0.8;
            ctx.stroke();
          }
        }

        // Render Node Graphic
        const glowRadius = nodeA.radius + Math.sin(nodeA.pulse) * 1;
        const isHovered = distMouse < mouse.radius;

        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, isHovered ? glowRadius * 1.6 : glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#00F0FF' : 'rgba(0, 240, 255, 0.7)';
        ctx.shadowBlur = isHovered ? 12 : 4;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        if (nodeA.type === 'chip' && !isMobile) {
          ctx.strokeStyle = 'rgba(176, 38, 255, 0.5)';
          ctx.strokeRect(nodeA.x - 4, nodeA.y - 4, 8, 8);
        }
      }

      // Draw Data Packets along circuits
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.from = Math.floor(Math.random() * nodes.length);
          p.to = Math.floor(Math.random() * nodes.length);
        }

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        if (!n1 || !n2) return;

        const currX = n1.x + (n2.x - n1.x) * p.progress;
        const currY = n1.y + (n2.y - n1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
