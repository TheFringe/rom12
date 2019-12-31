import { BibleWord } from './../models/bible-word';
import { ProgressService } from './progress.service';
const progressService = new ProgressService();

it('addProgress', () => {
  const rom121 = new BibleWord('Romarbrevet', 12, 1, 'text1', 'Rom');
  const rom122 = new BibleWord('Romarbrevet', 12, 2, 'text2', 'Rom');
  const rom123 = new BibleWord('Romarbrevet', 12, 3, 'text3', 'Rom');

  progressService.addProgress(rom121, true);
  expect(progressService.checkIfLearned(rom121)).toBeTruthy();
  expect(progressService.checkIfNeedToLearn(rom121)).toBeFalsy();

  progressService.addProgress(rom122, false);
  expect(progressService.checkIfLearned(rom122)).toBeFalsy();
  expect(progressService.checkIfNeedToLearn(rom122)).toBeTruthy();

  progressService.addProgress(rom123, true);
  expect(progressService.checkIfLearned(rom123)).toBeTruthy();
  expect(progressService.checkIfNeedToLearn(rom123)).toBeFalsy();

  progressService.addProgress(rom121, true);
  expect(progressService.checkIfLearned(rom121)).toBeTruthy();
  expect(progressService.checkIfNeedToLearn(rom121)).toBeFalsy();

  progressService.addProgress(rom122, false);
  expect(progressService.checkIfLearned(rom122)).toBeFalsy();
  expect(progressService.checkIfNeedToLearn(rom122)).toBeTruthy();

  progressService.addProgress(rom123, true);
  expect(progressService.checkIfLearned(rom123)).toBeTruthy();
  expect(progressService.checkIfNeedToLearn(rom123)).toBeFalsy();

  // learn a verse
  progressService.addProgress(rom122, true);
  expect(progressService.checkIfLearned(rom122)).toBeTruthy();
  expect(progressService.checkIfNeedToLearn(rom122)).toBeFalsy();

  // 'dislearn a verse'
  progressService.addProgress(rom123, false);
  expect(progressService.checkIfLearned(rom123)).toBeFalsy();
  expect(progressService.checkIfNeedToLearn(rom123)).toBeTruthy();
});
