export let parseEmotion = (emotion) => {
  switch (emotion) {
    case 'love':
      return 'heart_eyes'
    case 'hate':
      return 'thumbsdown'
    case 'confusion':
      return 'confused'
    case 'sadness':
      return 'disappointed'
    case 'surprise':
      return 'astonished'
    case 'joy':
      return 'smile'
    default:
      return emotion
  }
}