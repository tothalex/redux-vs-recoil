import { selectorFamily } from 'recoil'

import { emojiAtomFamily } from '../atoms/emojiAtomFamily'

export const emojiCounterSelector = selectorFamily({
  key: 'emojiCounterSelector',
  get: (ids: string[]) => ({ get }) => {
    return ids
      .map((id) => {
        return get(emojiAtomFamily(id))
      })
      .filter((value) => value.length > 0)
      .reduce((obj, value) => {
        if (obj[value]) {
          obj[value] += 1
        } else {
          obj[value] = 1
        }
        return obj
      }, {} as Record<string, number>)
  },
})
