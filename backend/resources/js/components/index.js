import React from 'react';
import '../style/common.css';

function Index() {

  return(
    <>
      <span className="Art-Meat">
        Art-Meat
      </span>
      <div className="Line"></div>
      <div className="box">
        <div className="Bitmap"></div>
        <div className="text">
          <p className="itemName">
            商品名ー商品名ー商品名
          </p>
          <p className="maker">
            日清食品
          </p>
          <p className="startDay">
            2021年1月1日発売
          </p>
          <p className="hash">
            #大豆
          </p>
        </div>
      </div>
      <div class="endLine"></div>
    </>
  );
}

export default Index;