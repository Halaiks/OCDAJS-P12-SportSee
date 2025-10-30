const days = ['L','M','M','J','V','S','D'];
export class AverageSessionsModel {
  constructor(raw) {
    this.userId = raw.userId;
    this.sessions = (raw.sessions ?? []).map(s => ({
      day: s.day,
      label: days[(s.day - 1) % 7],
      sessionLength: s.sessionLength,
    }));
  }
}