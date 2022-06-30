import React from "react";

const Inventory = ({ sellWeapon, sellPotion, getWeapons, getPotions, getGold, getNoGold}) => {

  return (
    <div className="inventory">
        <div className="gold d-flex flex-col">
            <h2>Gold: {getGold}</h2>
            {getNoGold &&
                <p className="error">Not enough gold</p>
            }
        </div>
      <div className="items">
        {getWeapons.map((x, i) => (
          <div key={i} className="item d-flex space-btw items-center">
            <img src={x.image} alt="" />
            <div className="d-flex flex-col">
              <p>Sell for: {x.price / 2}</p>
              <p>
                Stats: max damage {x.maxDamage}, energy per hit{" "}
                {x.energyPerHit}
              </p>
              <div className="d-flex">
                <p>Effects: </p>
                {x.effects.map((x, i) => (
                  <div key={i} className="effect">
                    {x}
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => sellWeapon(x, i)}>Sell</button>
          </div>
        ))}
        {getPotions.map((x, i) => (
          <div key={i} className="item d-flex space-btw items-center">
                <img src={x.image} alt="" />
                <div className="d-flex flex-col">
                  <p>Sell for: {x.price / 2} gold</p>
                  <div className="d-flex">
                    <p>Health: {x.effect.health}</p>
                  </div>
                </div>
            <button onClick={() => sellPotion(x, i)}>Sell</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
