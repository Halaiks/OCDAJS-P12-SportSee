export class ActivityModel {
  constructor(raw) {
    this.userId = raw.userId;
    this.sessions = (raw.sessions ?? []).map((s, i) => ({
      dayLabel: String(i + 1),
      kilogram: s.kilogram,
      calories: s.calories,
    }));
  }
}