import React from 'react'
import { useContext } from 'react';
import mainContext from '../context/mainContext';

const SingleItem = ({ item, location, index }) => {

    const keys = Object.keys(item).length

    const { items, setItems, gold, setGold, selectedWeapon, setSelectedWeapon, playerHp, setPlayerHp, playerPercentage, setPlayerPercentage, character } = useContext(mainContext)

    function buyItem(){
        if(gold < item.price) return

        const itemsCopy = [...items, item]
        setItems(itemsCopy)
        setGold(gold - item.price)
    }

    function sellItem(){
        const itemsLeft = items.filter((x, i) => i !== index)
        setItems(itemsLeft)
        setGold(gold + item.price / 2)
    }

    function sellDrop(){
        const itemsLeft = items.filter((x, i) => i !== index);
        setItems(itemsLeft);
        setGold(gold + item.price);
    }
    
    function equipItem(){
        if(!selectedWeapon){
            const itemsLeft = items.filter((x, i) => i !== index)
            setItems(itemsLeft)
            setSelectedWeapon(item)
        } else {
            const itemsLeft = items.filter((x, i) => i !== index)
            setItems([...itemsLeft, selectedWeapon])
            setSelectedWeapon(item)
        }
    }

    function useItem(){
        if(playerPercentage > 100) {
            setPlayerPercentage(100)
            setPlayerHp(character.health)
        } else {
            setPlayerHp(playerHp + item.effect.health)
            setPlayerPercentage(playerHp / character.health * 100);
        }
        const itemsLeft = items.filter((x, i) => i !== index);
        setItems(itemsLeft);

    }

    let template

    {
        if(keys === 5) {
            template = (
              <div className="d-flex space-btw item">
                <div className="d-flex">
                  <img src={item.image} alt="" />
                  <div className="d-flex just-center flex-col">
                    <p>Damage: {item.maxDamage}</p>
                    {location === 'shop' ? 
                        <p>Price: {item.price}g</p> :
                        <p>Price: {item.price / 2}g</p>
                    }
                  </div>
                </div>
                {location === 'shop' ?
                    <button onClick={buyItem}>Buy</button> :
                    <button onClick={sellItem}>Sell</button>
                }
              </div>
            );
        }
        if(keys === 5 && location === 'arena') {
            template = (
              <div className="d-flex space-btw item">
                <div className="d-flex">
                  <img src={item.image} alt="" />
                  <div className="d-flex just-center flex-col">
                    <p>Damage: {item.maxDamage}</p>
                    {location === 'shop' ? 
                        <p>Price: {item.price}g</p> :
                        <p>Price: {item.price / 2}g</p>
                    }
                  </div>
                </div>
                    <button onClick={equipItem}>Equip</button> 
              </div>
            );
        }
        if(keys === 4) {
            template = (
              <div className="d-flex space-btw item">
                <div className="d-flex">
                  <img src={item.image} alt="" />
                  <div className="d-flex just-center flex-col">
                    <p>Damage: {item.title}</p>
                    {location === "shop" ? (
                      <p>Price: {item.price}g</p>
                    ) : (
                      <p>Price: {item.price / 2}g</p>
                    )}
                  </div>
                </div>
                {location === "shop" ? (
                  <button onClick={buyItem}>Buy</button>
                ) : (
                  <button onClick={sellItem}>Sell</button>
                )}
              </div>
            );
        }
        if(keys === 4 && location === 'arena') {
            template = (
              <div className="d-flex space-btw item">
                <div className="d-flex">
                  <img src={item.image} alt="" />
                  <div className="d-flex just-center flex-col">
                    <p>Damage: {item.title}</p>
                    {location === "shop" ? (
                      <p>Price: {item.price}g</p>
                    ) : (
                      <p>Price: {item.price / 2}g</p>
                    )}
                  </div>
                </div>
                  <button onClick={useItem}>Use</button>
              </div>
            );
        }
        if(keys === 2) {
            template = (
              <div className="d-flex space-btw item">
                <div className="d-flex">
                  <img src={item.image} alt="" />
                  <div className="d-flex just-center flex-col">
                      <p>Price: {item.price}g</p>
                  </div>
                </div>
                  <button onClick={sellDrop}>Sell</button>
              </div>
            );
        }
    }

  return (
    <div>
      {template}
    </div>
  );
}

export default SingleItem