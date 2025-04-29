export function useSpeak(
  word: string = 'Hello, Ian!',
  lang: string = 'en-US',
  rate: number = 1.0,
  pitch: number = 1.0,
  volume: number = 1.0
) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const synth = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = lang
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.volume = volume

    synth.speak(utterance)
  } else {
    console.log('Speech synthesis not supported')
  }
}
