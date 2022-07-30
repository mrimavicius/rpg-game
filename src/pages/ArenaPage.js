import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../components/Modal'
import mainContext from '../context/mainContext'
import gameData from '../assets/gameData'

const ArenaPage = () => {

    const nav = useNavigate()

    const { monsters, dropItems } = gameData

    const { character, setCharacter, items, setItems, monster, setMonster, selectedWeapon, setSelectedWeapon, playerHp, setPlayerHp, monsterHp, setMonsterHp, playerPercentage, setPlayerPercentage } = useContext(mainContext)
    const [ showModal, setShowModal ] = useState(false) 
    const [ monsterPercentage, setMonsterPercentage ] = useState(100)
    const [ pcolor, setpColor ] = useState('yellowgreen')
    const [ mcolor, setmColor ] = useState('yellowgreen')

    useEffect(() => {
        setPlayerPercentage((playerHp / character.health) * 100);
        setMonsterPercentage((monsterHp / monster.health) * 100);

        if (monsterHp < 0) {
          setMonster(monsters[Math.floor(Math.random() * monsters.length)]);
          setItems([...items, dropItems[Math.floor(Math.random() * dropItems.length)]])
        }

    },[playerHp, monsterHp])

    useEffect(() => {
        setMonsterHp(monster.health)
    },[monster])

    useEffect(() => {
        if(playerPercentage > 50) setpColor('yellowgreen')
        if(playerPercentage < 50) setpColor('yellow')
        if(playerPercentage < 20) setpColor('red')
        if(monsterPercentage > 50) setmColor('yellowgreen')
        if(monsterPercentage < 50) setmColor('yellow')
        if(monsterPercentage < 20) setmColor('red')
    },[playerPercentage, monsterPercentage])

    function attack(){
        if(playerHp < 0){
            setCharacter(null)
            setSelectedWeapon(null)
            setItems([])
            alert('You died!')
            nav('/')
        }

        let playerDamage = character.damage + Math.floor(Math.random());
        if(selectedWeapon){
            playerDamage = character.damage + Math.floor(Math.random() * selectedWeapon.maxDamage)
        }
        let monsterDamage = Math.floor(Math.random()* monster.maxDamage)
        
        setPlayerHp(playerHp - monsterDamage)
        setMonsterHp(monsterHp - playerDamage)
    }

  return (
    <div className="d-flex">
      <div className="d-flex flex-col grow1 just-center arena-card">
        <img src={character.image} alt={character.race} />
        <div className="hpWrapper">
          <div style={{width: playerPercentage + '%', background: pcolor}} className="hp"></div>
        </div>
        <div className="selected">{selectedWeapon && 
            <img src={selectedWeapon.image} alt='' />
        }</div>
      </div>
      <div className="d-flex arena-buttons flex-col grow1 just-center items-center">
        <button onClick={attack} >Attack</button>
        <button onClick={() => setShowModal(true)}>Inventory</button>
        {showModal &&
            <Modal showModal={showModal} setShowModal={setShowModal} />
        }
      </div>
      <div className="d-flex flex-col grow1 just-center arena-card">
        <img src={monster.image} alt={monster.name} />
        <div className="hpWrapper">
          <div style={{width: monsterPercentage + '%', background: mcolor}} className="hp"></div>
        </div>
      </div>
    </div>
  );
}

export default ArenaPage