import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Item from './ItemRedux'
import Status from './StatusRedux'
import { RootState } from '../store/rootReducer'
import { addEmptyEmoji, setEmojiContent, removeEmoji } from '../store/app'
import { emojis as availableEmojis } from '../utils/emojis'

const Redux: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useDispatch()
  const emojis = useSelector((state: RootState) => state.app.emojis)

  const emojisCount: { content: string; count: number }[] = useMemo(() => {
    const count = []
    for (let emoji of availableEmojis) {
      count.push({ content: emoji, count: emojis.filter((selectedEmoji) => selectedEmoji.content === emoji).length })
    }
    return count
  }, [emojis])

  return (
    <div className={className}>
      <div className="flex flex-col justify-center">
        <div className="text-5xl text-center">Redux</div>

        <div className="flex pl-6 pt-16">
          <div className="w-2/12">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded" onClick={() => dispatch(addEmptyEmoji())}>
              Add emoji
            </button>
          </div>
          <div className="flex flex-wrap w-10/12">
            {emojis.map((emoji) => (
              <Item
                value={emoji.content}
                onSelect={(value) => {
                  dispatch(setEmojiContent({ id: emoji.id, content: value }))
                }}
                onRemove={() => {
                  dispatch(removeEmoji(emoji.id))
                }}
                key={emoji.id}
                className="px-1 pb-5"
              />
            ))}
          </div>
        </div>
      </div>
      <Status className="absolute bottom-0 w-full">
        {emojisCount
          .filter((emoji) => emoji.count > 0)
          .map((emoji, index) => (
            <div className="flex text-2xl text-white" key={`${index}-emoji-status`}>
              <div>{emoji.content}</div>
              <div className="pl-2">{emoji.count}</div>
            </div>
          ))}
      </Status>
    </div>
  )
}

export default Redux
