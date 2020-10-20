import React, { useState } from 'react'
import shortid from 'shortid'

import Item from './ItemRecoil'
import Status from './StatusRecoil'

const Recoil: React.FC<{ className?: string }> = ({ className }) => {
  const [emojiIds, setEmojiIds] = useState<string[]>([])

  return (
    <div className={className}>
      <div className="flex flex-col justify-center">
        <div className="text-5xl text-center">Recoil</div>
        <div className="flex pl-6 pt-16">
          <div className="w-2/12">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
              onClick={() => {
                setEmojiIds([...emojiIds, shortid()])
              }}
            >
              Add emoji
            </button>
          </div>
          <div className="flex flex-wrap w-10/12">
            {emojiIds.map((emojiId) => (
              <Item
                id={emojiId}
                key={emojiId}
                onRemove={() => {
                  setEmojiIds(emojiIds.filter((currentEmojiId) => currentEmojiId !== emojiId))
                }}
                className="px-1 pb-5"
              />
            ))}
          </div>
        </div>
      </div>
      <Status emojiIds={emojiIds} className="absolute bottom-0 w-full" />
    </div>
  )
}

export default Recoil
