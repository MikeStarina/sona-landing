export interface IContextScreenCard {
    title: string;
    description: string;
    cover: string;
    hasCoverEffects: boolean;
}

export const CONTEXT_SCREEN_CARDS: IContextScreenCard[] = [
    {
      title: 'Local Storage',
      description: `History and Memory are stored on the user's Mac.`,
      cover: '/context_card_1.png',
      hasCoverEffects: false
    },
    {
      title: 'Memory Controls',
      description: 'Users can view, edit, or delete saved information.',
      cover: '/context_card_2.png',
      hasCoverEffects: false
    },
    {
      title: 'Action Controls',
      description: 'Before making changes in third-party apps, Sona shows the user what it is about to do.',
      cover: '/context_card_3.png',
      hasCoverEffects: true
    },
  ]