export class UserModel {
  constructor(raw) {
    this.id = raw.id;
    this.firstName = raw.userInfos?.firstName ?? '';
    this.lastName  = raw.userInfos?.lastName ?? '';
    this.age       = raw.userInfos?.age ?? null;
    this.score     = raw.todayScore ?? raw.score ?? 0;
    this.keyData   = raw.keyData ?? {};
  }
}