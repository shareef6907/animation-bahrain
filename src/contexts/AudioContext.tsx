'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface AudioContextValue {
  unmutedId: string | null
  muteAll: () => void
  setUnmuted: (id: string) => void
}

const AudioContext = createContext<AudioContextValue>({
  unmutedId: null,
  muteAll: () => {},
  setUnmuted: () => {},
})

export function AudioProvider({ children }: { children: ReactNode }) {
  const [unmutedId, setUnmutedId] = useState<string | null>(null)

  const muteAll = useCallback(() => setUnmutedId(null), [])

  const setUnmuted = useCallback((id: string) => setUnmutedId(id), [])

  return (
    <AudioContext.Provider value={{ unmutedId, muteAll, setUnmuted }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  return useContext(AudioContext)
}
