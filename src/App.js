import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ChooseCharacterPage from "./pages/ChooseCharacterPage";
import MainMenuPage from "./pages/MainMenuPage";
import gameData from "./assets/gameData";
import mainContext from "./context/mainContext";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import Toolbar from "./components/Toolbar";

function App() {

  const {characters, monsters, dropItems, trader} = gameData


  // const [getGold, setGold] = useState(1000);
  // const [getNoGold, setNoGold] = useState(false)

  // const [getWeapons, setWeapons] = useState([]);
  // const [getPotions, setPotions] = useState([]);

  // function buyWeapon(item) {
  //   if (getGold >= item.price) {
  //     setGold(getGold - item.price);
  //     setWeapons([...getWeapons, item]);
  //     setNoGold(false)
  //   } else {
  //     setNoGold(true)
  //   }
  // }

  // function buyPotion(item) {
  //   if (getGold >= item.price) {
  //     setGold(getGold - item.price);
  //     setPotions([...getPotions, item]);
  //     setNoGold(false)
  //   } else {
  //     setNoGold(true)
  //   }
  // }

  // function sellWeapon(item, i) {
  //   setGold(getGold + item.price / 2);
  //   setWeapons(getWeapons.filter((x, index) => i !== index));
  // }

  // function sellPotion(item, i) {
  //   setGold(getGold + item.price / 2);
  //   setPotions(getPotions.filter((x, index) => i !== index));
  // }

  const [character, setCharacter] = useState(null)
  const [items, setItems] = useState([])
  const [gold, setGold] = useState(0)
  const [monster, setMonster] = useState(null)
  const [selectedWeapon, setSelectedWeapon] = useState(null)
  const [playerHp, setPlayerHp] = useState(0)
  const [monsterHp, setMonsterHp] = useState(0)
  const [playerPercentage, setPlayerPercentage] = useState(100);


  const states = {
    character,
    setCharacter,
    items,
    setItems,
    gold,
    setGold,
    monster,
    setMonster,
    selectedWeapon,
    setSelectedWeapon,
    playerHp,
    setPlayerHp,
    monsterHp,
    setMonsterHp,
    playerPercentage,
    setPlayerPercentage
  }

  useEffect(() => {
    setMonster(monsters[Math.floor(Math.random() * monsters.length)])
  },[])

  return (
    <mainContext.Provider value={states}>

      <BrowserRouter>

        {character !== null &&
          <Toolbar/>
        }

      <Routes>

        <Route path={'/'} element={<ChooseCharacterPage/>}/>
        <Route path={'/mainMenu'} element={<MainMenuPage/>}/>
        <Route path={'/shop'} element={<ShopPage/>}/>
        <Route path={'/arena'} element={<ArenaPage/>}/>

      </Routes>
        {/* <div className="App d-flex">
          <div className="grow-1">
            <Shop
              weapons={weapons}
              potions={potions}
              buyWeapon={buyWeapon}
              buyPotion={buyPotion}
            />
          </div>
          <div className="grow-1">
            <Inventory
              sellWeapon={sellWeapon}
              sellPotion={sellPotion}

              getWeapons={getWeapons}
              getPotions={getPotions}

              getGold={getGold}
              getNoGold={getNoGold}
            />
          </div>
        </div> */}
      </BrowserRouter>
    </mainContext.Provider>
  );
}

export default App;
