import React from 'react'
import Dropdown from 'rc-dropdown'
import Menu, { Item as MenuItem } from 'rc-menu'
import 'rc-dropdown/assets/index.css'
import { useRecoilState } from 'recoil'

import { emojis as availableEmojis } from '../utils/emojis'
import { emojiAtomFamily } from '../recoil/atoms/emojiAtomFamily'

type ItemProps = {
  id: string
  className?: string
  onRemove?: () => void
}

const Item: React.FC<ItemProps> = ({ className, id, onRemove }) => {
  const [emoji, setEmoji] = useRecoilState(emojiAtomFamily(id))

  return (
    <div className={className}>
      <div className="flex flex-col w-32 max-w-sm h-14 rounded overflow-hidden shadow-lg border border-gray-300">
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu
              onClick={(prop: any) => {
                setEmoji(prop.item.node.innerText)
              }}
            >
              {availableEmojis.map((availableEmoji, index) => (
                <MenuItem key={index} style={{ display: 'flex' }} className="justify-center cursor-pointer">
                  <span className="cursor-inherit text-2xl" role="img" aria-label={availableEmoji}>
                    {availableEmoji}
                  </span>
                </MenuItem>
              ))}
            </Menu>
          }
          animation="slide-up"
        >
          <button className="py-2 px-6">
            {emoji.length === 0 && <div className="py-2">select one</div>}
            {emoji.length > 0 && (
              <span className="text-2xl" role="img" aria-label={emoji}>
                {emoji}
              </span>
            )}
          </button>
        </Dropdown>
        <div className="w-full">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 w-full"
            onClick={() => {
              if (onRemove) {
                onRemove()
              }
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
