import React from 'react'
import Dropdown from 'rc-dropdown'
import Menu, { Item as MenuItem } from 'rc-menu'
import 'rc-dropdown/assets/index.css'

import { emojis } from '../utils/emojis'

type ItemProps = {
  className?: string
  value: string
  onSelect?: (value: string) => void
  onRemove?: () => void
}

const Item: React.FC<ItemProps> = ({ className, value, onSelect, onRemove }) => {
  return (
    <div className={className}>
      <div className="flex flex-col w-32 max-w-sm h-14 rounded overflow-hidden shadow-lg border border-gray-300">
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu
              onSelect={(prop: any) => {
                if (onSelect) {
                  onSelect(prop.item.node.innerText)
                }
              }}
            >
              {emojis.map((emoji, index) => (
                <MenuItem key={`emoji-item-redux-${index}`} style={{ display: 'flex' }} className="justify-center cursor-pointer">
                  <span className="cursor-inherit text-2xl" role="img" aria-label={emoji}>
                    {emoji}
                  </span>
                </MenuItem>
              ))}
            </Menu>
          }
          animation="slide-up"
        >
          <button className="py-2 px-6">
            {value.length === 0 && <div className="py-2">select one</div>}
            {value.length > 0 && (
              <span className="text-2xl" role="img" aria-label={value}>
                {value}
              </span>
            )}
          </button>
        </Dropdown>
        <div className="w-full">
          <button
            onClick={() => {
              if (onRemove) {
                onRemove()
              }
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 w-full"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
