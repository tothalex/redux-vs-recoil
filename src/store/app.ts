import shortid from 'shortid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Emoji = {
  id: string
  content: string
}

type State = {
  emojis: Emoji[]
}

const initialState: State = {
  emojis: [],
}

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addEmptyEmoji(state) {
      state.emojis.push({ id: shortid(), content: '' })
    },
    setEmojiContent(state, action: PayloadAction<Emoji>) {
      const emojiIdx = state.emojis.findIndex((emoji) => emoji.id === action.payload.id)
      if (emojiIdx > -1) {
        state.emojis[emojiIdx].content = action.payload.content
      }
    },
    removeEmoji(state, action: PayloadAction<string>) {
      state.emojis.splice(
        state.emojis.findIndex((emoji) => emoji.id === action.payload),
        1
      )
    },
  },
})

export const { addEmptyEmoji, setEmojiContent, removeEmoji } = slice.actions

export default slice.reducer
