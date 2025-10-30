export class PerformanceModel {
  constructor(raw) {
    const kindMap = raw.kind || {};
    this.userId = raw.userId;
    this.data = (raw.data ?? []).map(d => ({
      kind: kindMap[d.kind] || String(d.kind),
      value: d.value,
    }));
  }
}