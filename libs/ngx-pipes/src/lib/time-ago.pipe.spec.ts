import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct value for seconds', () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() - 25);
    expect(pipe.transform(date)).toBe('25 seconds ago');
  });

  it('should return correct value for minutes', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 5);
    expect(pipe.transform(date)).toBe('5 minutes ago');
  });

  it('should return correct value for hours', () => {
    const date = new Date();
    date.setHours(date.getHours() - 3); // 3 hours ago
    expect(pipe.transform(date)).toBe('3 hours ago');
  });

  it('should return correct value for days', () => {
    const date = new Date();
    date.setDate(date.getDate() - 10); // 10 days ago
    expect(pipe.transform(date)).toBe('10 days ago');
  });

  it('should return correct value for months', () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 4); // 4 months ago
    expect(pipe.transform(date)).toBe('4 months ago');
  });

  it('should return correct value for years', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 2); // 2 years ago
    expect(pipe.transform(date)).toBe('2 years ago');
  });

  it('should accept ISO strings as input', () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 7); // 7 minutes ago
    const isoString = date.toISOString();
    expect(pipe.transform(isoString)).toBe('7 minutes ago');
  });
});
