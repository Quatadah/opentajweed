import { tajweedContent as tajweedContentFr } from './content.fr';
import { tajweedContent as tajweedContentAr } from './content.ar';
import { tajweedContent as tajweedContentWarshAr } from './content.warsh.ar';
import { Chapter } from '../types';

interface BookContent {
  fr?: Chapter[];
  ar: Chapter[];
}

interface Content {
  hafs: BookContent;
  warsh: BookContent;
  [key: string]: BookContent;
}

export const content: Content = {
  hafs: {
    fr: tajweedContentFr,
    ar: tajweedContentAr,
  },
  warsh: {
    ar: tajweedContentWarshAr,
  },
};
