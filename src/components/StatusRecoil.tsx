import React from 'react'
import { useRecoilValue } from 'recoil'

import { emojiCounterSelector } from '../recoil/selectors/emojiSelector'

type StatusProps = {
  className?: string
  emojiIds: string[]
}

const Status: React.FC<StatusProps> = ({ className, emojiIds }) => {
  const emojis = useRecoilValue<Record<string, number>>(emojiCounterSelector(emojiIds))

  return (
    <div className={`${className ? className : ''} bg-blue-500`}>
      <div className="w-full flex justify-around">
        {Object.entries(emojis).map(([emoji, count], index) => (
          <div className="flex text-2xl text-white" key={`${index}-emoji-status-recoil`}>
            <div>{emoji}</div>
            <div className="pl-2">{count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Status
