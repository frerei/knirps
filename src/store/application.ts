import { create } from 'reworm'
import produce from 'immer'
import { PlayerProps } from '../components/player/player';

export const players = create({
  list: {
    top: <PlayerProps[]> [],
    mr: <PlayerProps[]> [],
    bottom: <PlayerProps[]> [],
    ml: <PlayerProps[]> []
  }
})

export const addPlayer = (item: PlayerProps, position: string, limit: number) => {
  
  const newItem = item;

  newItem.avatar = Math.random() >= 0.5;

  players.set(
    produce(state => {
      let playersList = state.list[position];
      if (playersList.length < limit) {
        playersList.push(newItem)
      }
    })
  )
}