export interface NavItem {
  label: string;
  path: string;
}

export interface CringeAnalysisResult {
  score: number;
  verdict: string;
  comment: string;
}

export enum PageState {
  HOME = 'home',
  LORE = 'lore',
  TOKENOMICS = 'tokenomics',
  CRINGE_DETECTOR = 'detector'
}