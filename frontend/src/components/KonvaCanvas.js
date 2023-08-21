import React, { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import { useSelector } from 'react-redux';
import { decalName } from '../features/decalslice';

const KonvaCanvas = (props) => {

  
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [allDecals,setAllDecals] = useState([]);
  const [konvaStage, setKonvaStage] = useState(null);
  const [konvaLayer, setKonvaLayer] = useState(null);
  const [konvaTr, setKonvaTr] = useState();
  const decalName = useSelector(state=>state.decal.decalName);
  const decalNum = useSelector(state=>state.decal.decalNum);
  // const decalNum = useSelector(state=>state.decal.decalNum);

  const selectionRectangleRef = useRef(null);

  useEffect(()=>{
    var width = 300;
    var height = 400;
    
    var stage = new Konva.Stage({
      container: 'container',
      width: 300,
      height: 400,
    });


      var layer = new Konva.Layer();
      stage.add(layer);


      let image = new Image();
      image.src = "kga.png";
      let imageObj = new Konva.Image({
        x: 50,
        y: 50,
        image: image,
        width: 220,
        height: 100,
        draggable : true,
      })
      layer.add(imageObj);
      setAllDecals([...allDecals, imageObj]);

      var tr = new Konva.Transformer();
      layer.add(tr);
      setKonvaTr(tr);

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
      // stage.on('mousedown touchstart', (e) => {
      //   // do nothing if we mousedown on any shape
      //   if (e.target !== stage) {
      //     return;
      //   }
      //   e.evt.preventDefault();
      //   x1 = stage.getPointerPosition().x;
      //   y1 = stage.getPointerPosition().y;
      //   x2 = stage.getPointerPosition().x;
      //   y2 = stage.getPointerPosition().y;

      //   selectionRectangle.visible(true);
      //   selectionRectangle.width(0);
      //   selectionRectangle.height(0);
      // });

      // stage.on('mousemove touchmove', (e) => {
      //   // do nothing if we didn't start selection
      //   if (!selectionRectangle.visible()) {
      //     return;
      //   }
      
      //   e.evt.preventDefault();
        
      //   const containerRect = stage.container().getBoundingClientRect();
      //   const mouseX = e.evt.clientX - containerRect.left;
      //   const mouseY = e.evt.clientY - containerRect.top;
      
      //   // Check if the mouse is outside the container bounds
      //   if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
      //     // Cancel the selection
      //     selectionRectangle.visible(false);
      //     return;
      //   }
      
      //   x2 = Math.max(Math.min(mouseX, width), 0);
      //   y2 = Math.max(Math.min(mouseY, height), 0);
      
      //   selectionRectangle.setAttrs({
      //     x: Math.min(x1, x2),
      //     y: Math.min(y1, y2),
      //     width: Math.abs(x2 - x1),
      //     height: Math.abs(y2 - y1),
      //   });
      // });
      



      // stage.on('mouseup touchend', (e) => {
      //   // do nothing if we didn't start selection
      //   if (!selectionRectangle.visible()) {
      //     return;
      //   }
      //   e.evt.preventDefault();
      //   // update visibility in timeout, so we can check it in click event
      //   setTimeout(() => {
      //     selectionRectangle.visible(false);
      //   });

      //   var shapes = stage.find('.rect, .image, .text');
      //   var box = selectionRectangle.getClientRect();
      //   var selected = shapes.filter((shape) =>
      //     Konva.Util.haveIntersection(box, shape.getClientRect())
      //   );
      //   tr.nodes(selected);
      //   setSelectedNodes(selected)
      // });

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
        // if (!e.target.hasName('rect')) {
        //   return;
        // }

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
      selectedNodes.forEach((node) => {
        console.log(selectedNodes);
        node.destroy();
      });
  
      setSelectedNodes([]);
      
      konvaLayer.batchDraw(); // Manually redraw the layer after making changes
    }

    function destroyAll() {
      allDecals.forEach((node)=>{
        node.destroy();
      })
      setAllDecals([]);

      konvaLayer.batchDraw();
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

    useEffect(() => {
      
      if (konvaLayer && decalName) {
        let image = new Image();
        image.src = decalName;
        let imageObj = new Konva.Image({
          x: 50,
          y: 50,
          image: image,
          width: 100,
          height: 100,
          draggable : true,
        })

        setAllDecals([...allDecals, imageObj]);
        

            // 클릭 핸들러 추가
        imageObj.on('click', (e) => {
          const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
          const isSelected = selectedNodes.indexOf(imageObj) >= 0;
        
          if (!metaPressed && !isSelected) {
            // 클릭된 데칼을 선택하도록 처리
            konvaTr.nodes([imageObj]);
            setSelectedNodes([imageObj]);
          } else if (metaPressed && isSelected) {
            // 선택된 데칼을 선택 해제하도록 처리
            const nodes = selectedNodes.slice();
            nodes.splice(nodes.indexOf(imageObj), 1);
            konvaTr.nodes(nodes);
          } else if (metaPressed && !isSelected) {
            // 데칼을 선택하도록 처리
            const nodes = selectedNodes.concat([imageObj]);
            konvaTr.nodes(nodes);
          }
        });

    
        konvaLayer.add(imageObj);
        konvaLayer.batchDraw(); // Manually redraw the layer after adding the new shape
      }
    }, [decalName, konvaLayer]);

    
  return (
    <div style={props.style}>
    <div id="container" style={containerStyle} onMouseDown={handleMouseDown}   ></div>
    <button onClick={()=>destroySelected()}>삭제</button>
    <button onClick={destroyAll}>전체삭제</button>
    <div>{decalName}</div>
    <div>{decalNum}</div>
   </div>
  );
}

export default KonvaCanvas;
