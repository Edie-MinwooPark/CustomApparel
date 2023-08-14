import React, { useState, useEffect, useRef } from "react";
import Nav from "../NavPage/Nav";
import {
  CustomWrap,
  CustomSideWrap,
  ColorPallet,
  SideSizeLi,
} from "./Custom.styled";
import CustomProductPopup from "./CustomProductPopup";
import CustomDecalsPopup from "./CustomDecalsPopup";
import { useSelector, useDispatch } from "react-redux";
import Canvas from "../../Canvas";
import { clothColor } from "../../features/clothslice";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";

const PROXY = process.env.REACT_APP_PROXY;
// custom 테이블 정보 가져오기
// async function getCustom() {
//   const { data } = await axios.get(`http://localhost:4000/custom`, {
//     withCredentials: true,
//   });
//   console.log(data);
// }
// getCustom();

const Custom = () => {
  const [product, setProduct] = useState(false);
  const [decals, setDecals] = useState(false);
  const [design, setDesign] = useState(false);
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("M");
  const [selectsize, setSelectsize] = useState("FREE");
  const [selectNum, setSelectNum] = useState(0);
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.cloth.clothColor);

  // customSlice의 초기값을 가져옴
  const shirtInfo = useSelector((state) => state.custom.basic);
  // console.log(shirtInfo[selectNum]);

  // 로그인된 아이디를 가져옴
  const getUserId = useSelector((state) => state.mypage.data);

  // canvas에 있는 티셔츠 이미지를 받을 공간
  const divRef = useRef(null);

  // canvas에 있는 이미지를 받음
  const handleDownload = () => {
    const targetDiv = divRef.current;
    const canvas = targetDiv.querySelector("canvas"); // Canvas 요소에 대한 참조를 가져옵니다.
    if (!targetDiv || !canvas) return;

    // Canvas의 내용을 이미지로 변환
    const canvasImage = canvas.toDataURL("image/png");
    const imgElement = document.createElement("img");
    imgElement.src = canvasImage;
    targetDiv.appendChild(imgElement); // 변환된 이미지를 div에 삽입

    // 변환된 이미지가 포함된 div를 캡쳐
    html2canvas(targetDiv).then((capturedCanvas) => {
      const imageUrl = capturedCanvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = "screenshot.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // 캡쳐가 완료된 후 삽입한 이미지 요소를 제거
      targetDiv.removeChild(imgElement);
    });
  };

  // 팝업창 크고 켜기
  function handleProduct() {
    setProduct(!product);
    // console.log(product);
  }
  // 팝업창 크고 켜기
  function handleDecals() {
    setDecals(!decals);
    // console.log(product);
  }
  // 선택된 색 활성화
  function handleColor(e) {
    setColor(e.target.getAttribute("bgcolor"));
    // 민우 리덕스 바꿔주면
    let newColor = e.target.getAttribute("bgcolor");
    dispatch(clothColor(newColor));
    // console.log("완료")

    // console.log("현재 리덕스 값", color);
  }

  // 선택된 사이즈 활성화
  function handelSelectSize(e) {
    setSelectsize(e.target.getAttribute("sizes"));
    // 민우 사이즈를 바꿔주면 -> 옷 사이즈 바뀜
  }

  // 사이즈가 추가되면 적용
  function ShirtInfo(shirtInfo, selectNum, selectsize) {
    return shirtInfo[selectNum].size.map((size, index) => (
      <SideSizeLi
        key={index}
        sizes={size}
        selectsize={selectsize}
        onClick={handelSelectSize}
      />
    ));
  }

  // 장바구니 담기 기능 (로컬 스토리지나 쿠키에 저장 할 예정)
  // 추후 데칼과 최종 이미지가 들어가야 함
  function handleCart() {
    if (getUserId?.user_id == undefined) return;

    // 장바구니에 추가 기능
    // tester에 사용자 이름이 들어가면 될듯
    const name = shirtInfo[selectNum].name;
    const price = shirtInfo[selectNum].price;
    let cartInfo = localStorage.getItem(getUserId?.user_id);
    if (!cartInfo) {
      localStorage.setItem(
        getUserId?.user_id,
        JSON.stringify([{ name, price, color, selectsize }])
      );
    }
    if (cartInfo) {
      let newArr = { name, price, color, selectsize };

      let cartArr = JSON.parse(localStorage.getItem(getUserId?.user_id)) || [];

      // 중복 확인
      let duplicate = cartArr.some(
        (item) =>
          item.name === name &&
          item.color === color &&
          item.selectsize === selectsize
      );

      // 중복이 없으면 배열에 추가
      if (!duplicate) {
        cartArr.push(newArr);
        localStorage.setItem(getUserId?.user_id, JSON.stringify(cartArr));
      } else {
        console.log("이미 같은 상품이 장바구니에 있습니다.");
      }
    }
  }

  function ColorInfo(shirtInfo, selectNum, selectsize) {
    return shirtInfo[selectNum].color.map((bgcolor, index) => (
      <ColorPallet
        key={index}
        onClick={handleColor}
        bgcolor={bgcolor}
        color={color}
      />
    ));
  }
  return (
    <div>
      {/* 팝업창이 나오는 부분  */}
      {product ? (
        <CustomProductPopup
          handleProduct={handleProduct}
          num={{ selectNum, setSelectNum }}
        />
      ) : null}
      {decals ? <CustomDecalsPopup data={handleDecals} /> : null}
      <Nav />
      <CustomWrap>
        <div className="customMainWrap">
          <div className="customMain" ref={divRef}>
            <Canvas />
          </div>
        </div>
        {/* CustomSideWrap 부분 나중에 components로 이동 예정*/}
        <CustomSideWrap>
          <div className="customSide">
            <div className="sideTitle">
              <span>{shirtInfo[selectNum].name}</span>
              <span>{shirtInfo[selectNum].price + " KRW"}</span>
              <div className="btnWrap">
                <div className="productWrap" onClick={handleProduct}>
                  <div className="changeProductBtn">
                    <img src={`${PROXY}/img/clothes.png`} />
                  </div>
                  <span>PRODUCT</span>
                </div>
                <div className="imageWrap" onClick={handleDecals}>
                  <div className="addImageBtn">
                    <img src={`${PROXY}/img/smile.png`} />
                  </div>
                  <span>DECALS</span>
                </div>
                <div className="imageWrap" onClick={handleDownload}>
                  <div className="addImageBtn">
                    <img src={`${PROXY}/img/smile.png`} />
                  </div>
                  <span>DOWNLOAD</span>
                </div>
              </div>
            </div>
            {/* componet로 분리 할 부분 */}
            <div className="sideColor">
              <span>색상 - {color}</span>
              <ul>
                {/* 색깔별로 원을 생성함 나중에 map 돌릴 부분*/}
                {ColorInfo(shirtInfo, selectNum, selectsize)}
              </ul>
            </div>
            {/* componet로 분리 할 부분 */}

            <div className="sideSize">
              <span>사이즈</span>
              <ul>
                {/* 사이즈별 맵 돌릴 예정? */}
                {ShirtInfo(shirtInfo, selectNum, selectsize)}
                {/* <SideSizeLi size={"free"} selectsize={selectsize} /> */}
              </ul>
            </div>
            <div className="delivery">
              <span>배송비</span>
              <span>3,000KRW</span>
            </div>
            <div className="sideCart">
              <div className="cartBtn" onClick={handleCart}>
                장바구니 담기
              </div>
            </div>
          </div>
        </CustomSideWrap>
        {/* CustomSideWrap 부분 나중에 components로 이동 예정*/}
      </CustomWrap>
    </div>
  );
};

export default Custom;
