import { Hello } from './index';
test('test', () => {
  expect(Hello('Assan')).toContain('Hello Assan');
});