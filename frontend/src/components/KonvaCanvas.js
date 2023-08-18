import React, { useEffect, useState, useRef } from 'react';
import Konva from 'konva';

const KonvaCanvas = (props) => {


  const [selectedNodes, setSelectedNodes] = useState([]);
  const [konvaStage, setKonvaStage] = useState(null);
  const [konvaLayer, setKonvaLayer] = useState(null);

  const selectionRectangleRef = useRef(null);

    useEffect(()=>{
      var width = 300;
      var height = 400;


      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      var rect1 = new Konva.Rect({
        x: 60,
        y: 60,
        width: 100,
        height: 90,
        fill: 'red',
        name: 'rect',
        draggable: true,
      });
      layer.add(rect1);
      var rect2 = new Konva.Rect({
        x: 250,
        y: 100,
        width: 150,
        height: 90,
        fill: 'green',
        name: 'rect',
        draggable: true,
      });
      layer.add(rect2);

      var tr = new Konva.Transformer();
      layer.add(tr);

      // by default select all shapes
      tr.nodes([]);

      // add a new feature, lets add ability to draw selection rectangle
      var selectionRectangle = new Konva.Rect({
        fill: 'rgba(0,0,255,0.5)',
        visible: false,
      });
      layer.add(selectionRectangle);
      selectionRectangleRef.current = selectionRectangle;

      var x1, y1, x2, y2;
      stage.on('mousedown touchstart', (e) => {
        // do nothing if we mousedown on any shape
        if (e.target !== stage) {
          return;
        }
        e.evt.preventDefault();
        x1 = stage.getPointerPosition().x;
        y1 = stage.getPointerPosition().y;
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.visible(true);
        selectionRectangle.width(0);
        selectionRectangle.height(0);
      });

      stage.on('mousemove touchmove', (e) => {
        // do nothing if we didn't start selection
        if (!selectionRectangle.visible()) {
          return;
        }
      
        e.evt.preventDefault();
        
        const containerRect = stage.container().getBoundingClientRect();
        const mouseX = e.evt.clientX - containerRect.left;
        const mouseY = e.evt.clientY - containerRect.top;
      
        // Check if the mouse is outside the container bounds
        if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
          // Cancel the selection
          selectionRectangle.visible(false);
          return;
        }
      
        x2 = Math.max(Math.min(mouseX, width), 0);
        y2 = Math.max(Math.min(mouseY, height), 0);
      
        selectionRectangle.setAttrs({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
        });
      });
      

      stage.on('mouseup touchend', (e) => {
        // do nothing if we didn't start selection
        if (!selectionRectangle.visible()) {
          return;
        }
        e.evt.preventDefault();
        // update visibility in timeout, so we can check it in click event
        setTimeout(() => {
          selectionRectangle.visible(false);
        });

        var shapes = stage.find('.rect, .image, .text');
        var box = selectionRectangle.getClientRect();
        var selected = shapes.filter((shape) =>
          Konva.Util.haveIntersection(box, shape.getClientRect())
        );
        tr.nodes(selected);
        setSelectedNodes(selected)
      });

      // clicks should select/deselect shapes
      stage.on('click tap', function (e) {
        // if we are selecting with rect, do nothing
        if (selectionRectangle.visible()) {
          return;
        }

        // if click on empty area - remove all selections
        if (e.target === stage) {
          tr.nodes([]);
          return;
        }

        // do nothing if clicked NOT on our rectangles
        if (!e.target.hasName('rect')) {
          return;
        }

        // do we pressed shift or ctrl?
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
        const isSelected = tr.nodes().indexOf(e.target) >= 0;

        if (!metaPressed && !isSelected) {
          // if no key pressed and the node is not selected
          // select just one
          tr.nodes([e.target]);
          setSelectedNodes([e.target])
        } else if (metaPressed && isSelected) {
          // if we pressed keys and node was selected
          // we need to remove it from selection:
          const nodes = tr.nodes().slice(); // use slice to have new copy of array
          // remove node from array
          nodes.splice(nodes.indexOf(e.target), 1);
          tr.nodes(nodes);
        } else if (metaPressed && !isSelected) {
          // add the node into selection
          const nodes = tr.nodes().concat([e.target]);
          tr.nodes(nodes);
        }
      });
      setKonvaStage(stage);
      setKonvaLayer(layer);
    },[])

    function destroySelected() {
      console.log("여기")
      selectedNodes.forEach((node) => {
        node.destroy();
      });
  
      setSelectedNodes([]);
      konvaLayer.batchDraw(); // Manually redraw the layer after making changes
    }

    const [isClicked, setIsClicked] = useState(false);

    const containerStyle = {
      width: '300px',
      height: '400px',
      zIndex: 20,
      border: isClicked ? '1px solid black' : 'none'
    };
  
    const handleMouseDown = () => {
      setIsClicked(true);
    };
    const handleMouseUp = () => {
      setIsClicked(false);

    };

    document.addEventListener('mouseup',handleMouseUp)

    
  return (
    <div style={props.style}>
    <div id="container" style={containerStyle} onMouseDown={handleMouseDown}   ></div>
    <button onClick={()=>destroySelected()}>삭제</button>
   </div>
  );
}

export default KonvaCanvas;
