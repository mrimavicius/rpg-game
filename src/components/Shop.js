import React, { useState } from "react";

const Shop = ({ weapons, potions, buyWeapon, buyPotion }) => {
  const [getShopItems, setShopItems] = useState(true);

  function showWeapons() {
    setShopItems(true);
  }

  function showPotions() {
    setShopItems(false);
  }

  return (
    <div className="shop">
      <div className="shop-top d-flex">
        <h2 onClick={showWeapons} className="grow-1">
          Weapons
        </h2>
        <h2 onClick={showPotions} className="grow-1">
          Potions
        </h2>
      </div>

      <div className="items">
        {getShopItems
          ? weapons.map((x, i) => (
              <div key={i} className="item d-flex space-btw items-center">
                <img src={x.image} alt="" />
                <div className="d-flex flex-col">
                  <p>Price: {x.price} gold</p>
                  <p>
                    Stats: max damage {x.maxDamage}, energy per hit{" "}
                    {x.energyPerHit}
                  </p>
                  <div className="d-flex">
                    <p>Effects: </p>
                    {x.effects.map((x, i) => (
                      <div key={i} className="effect">{x}</div>
                    ))}
                  </div>
                </div>
                <button onClick={() => buyWeapon(x)}>Buy</button>
              </div>
            ))
          : potions.map((x, i) => (
              <div key={i} className="item d-flex space-btw items-center">
                <img src={x.image} alt="" />
                <div className="d-flex flex-col">
                  <p>Price: {x.price} gold</p>
                  <div className="d-flex">
                    <p>Health: {x.effect.health}</p>
                  </div>
                </div>
                <button onClick={() => buyPotion(x)}>Buy</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Shop;
