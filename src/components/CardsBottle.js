import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';

function CardsBottle() {

  const flatBottle30ml = [
    {
      id:"white",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_white.png"
    },
    {
      id:"black",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_Black.png"
    },
    {
      id:"blue",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_Blue_transparant.png"
    },
    {
      id:"green",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_green_transparant.png"
    },
    // {
    //   id:"pink",
    //   src:"images/bottle/30ml/30ml_flat/30ml_flat_pink.png"
    // },
    {
      id:"purple",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_purple_transparant.png"
    },
    {
      id:"red",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_red_transparant.png"
    },
    {
      id:"yellow",
      src:"images/bottle/30ml/30ml_flat/30ml_flat_yellow_transparant.png"
    }
  ];

  const flatBottle60mlShort = [
    {
      id:"white",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_white.png"
    },
    {
      id:"black",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_black.png"
    },
    {
      id:"blue",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_blue_tf.png"
    },
    {
      id:"green",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_green_tf.png"
    },
    // {
    //   id:"pink",
    //   src:"images/bottle/60ml/60_short_flat/60ml_short_unicorn_purple_transparant.png"
    // },
    {
      id:"purple",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_purple_ft.png"
    },
    {
      id:"red",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_red_TF.png"
    },
    {
      id:"yellow",
      src:"images/bottle/60ml/60_short_flat/60_short-flat_yellow_tf.png"
    }
  ];

  const flatBottle60ml = [
    {
      id:"white",
      src:"images/bottle/60ml/60_flat/60ml_flat_white.png"
    },
    {
      id:"black",
      src:"images/bottle/60ml/60_flat/60ml_flat_Black.png"
    },
    {
      id:"blue",
      src:"images/bottle/60ml/60_flat/60ml_flat_Blue.png"
    },
    {
      id:"green",
      src:"images/bottle/60ml/60_flat/60ml_flat_green.png"
    },
    // {
    //   id:"pink",
    //   src:"images/bottle/60ml/60_flat/60ml_unicorn_Purple_transparant.png"
    // },
    {
      id:"purple",
      src:"images/bottle/60ml/60_flat/60ml_flat_purple.png"
    },
    {
      id:"red",
      src:"images/bottle/60ml/60_flat/60ml_flat_red.png"
    },
    {
      id:"yellow",
      src:"images/bottle/60ml/60_flat/60ml_flat_yellow.png"
    }
  ];

  const flatBottle100ml = [
    // {
    //   id:"white",
    //   src:"images/bottle/100ml/Unicorn/100ml_Unicorn_White.png"
    // },
    {
      id:"black",
      src:"images/bottle/100ml/Flat/100ml_Flat_black.png"
    },
    // {
    //   id:"blue",
    //   src:"images/bottle/100ml/Unicorn/30ml_flat_blue_tf.png"
    // },
    // {
    //   id:"green",
    //   src:"images/bottle/100ml/Unicorn/100ml_Unicorn_Green.png"
    // },
    // {
    //   id:"pink",
    //   src:"images/bottle/100ml/Unicorn/100ml_Unicorn_PINK.png"
    // },
    // {
    //   id:"purple",
    //   src:"images/bottle/100ml/Unicorn/100ml_Unicorn_Purple.png"
    // },
    // {
    //   id:"red",
    //   src:"images/bottle/100ml/Unicorn/100ml_Unicorn_RED.png"
    // },
    // {
    //   id:"yellow",
    //   src:"images/bottle/100ml/Unicorn/100ml_Unicorn_yellow.png"
    // }
  ];

  const selectBottleflat = color => {
    for (let i = 0; i < flatBottle30ml.length; i++) {
      if (flatBottle30ml[i].id === color) {
        document.getElementById("flat-30ml").src = flatBottle30ml[i].src
      }
    }

    for (let i = 0; i < flatBottle60mlShort.length; i++) {
      if (flatBottle60mlShort[i].id === color) {
        document.getElementById("flat-60mlShort").src = flatBottle60mlShort[i].src
      }
    }

    for (let i = 0; i < flatBottle60ml.length; i++) {
      if (flatBottle60ml[i].id === color) {
        document.getElementById("flat-60ml").src = flatBottle60ml[i].src
      }
    }

    for (let i = 0; i < flatBottle100ml.length; i++) {
      if (flatBottle100ml[i].id === color) {
        document.getElementById("flat-100ml").src = flatBottle100ml[i].src
      }
    }
  }

  return (
    <div className='cards'>
      <img
        className='cards__product'
        alt=""
        src='/images/fruity.svg'
      />
      <img
        id="product"
        className='cards__header'
        alt=""
        src='/images/our-product-bottle.png'
      />
      <div id="flat" className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              id="flat-30ml"
              src="images/bottle/30ml/30ml_flat/30ml_flat_white.png"
              header='Material Description 30ml'
              text='Volume:30ml'
              caps='Material caps: PET '
              body='Material Body: HDPE CLEAR CLARITY'
              gram='Gramation/bottle: 13 gram'
            />
            <CardItem
              id="flat-60mlShort"
              src='images/bottle/60ml/60_short_flat/60_short-flat_white.png'
              header='Material Description 60ml Short'
              text='Volume: 60ml'
              caps='Material caps: PET'
              body='Material Body: HDPE CLEAR CLARITY'
              gram='Gramation/bottle: 19 gram'
            />
            <CardItem
              id="flat-60ml"
              src='images/bottle/60ml/60_flat/60ml_flat_white.png'
              header='Material Description 60ml Tall'
              text='Volume: 60ml'
              caps='Material caps: PET '
              body='Material Body: HDPE CLEAR CLARITY'
              gram='Gramation/bottle: 15 gram'
            />
            <CardItem
              id="flat-100ml"
              src='images/bottle/100ml/Flat/100ml_Flat_black.png'
              header='Material Description 100ml'
              text='Volume: 100ml'
              caps='Material caps: PET '
              body='Material Body: HDPE CLEAR CLARITY'
              gram='Gramation/bottle: 24 gram'
            />
          </ul>
        </div>
        <div className="dot_wrapper">
          <span id="clear" className="dot"  onClick={()=>selectBottleflat("white")}></span>
          <span id="black" className="dot"  onClick={()=>selectBottleflat("black")}></span>
          <span id="blue" className="dot"  onClick={()=>selectBottleflat("blue")}></span>
          <span id="green" className="dot"  onClick={()=>selectBottleflat("green")}></span>
          <span id="purple" className="dot" onClick={()=>selectBottleflat("purple")}></span>
          <span id="red" className="dot"  onClick={()=>selectBottleflat("red")}></span>
          <span id="yellow" className="dot"  onClick={()=>selectBottleflat("yellow")}></span>
        </div>
      </div>
    </div>
  );
}

export default CardsBottle;