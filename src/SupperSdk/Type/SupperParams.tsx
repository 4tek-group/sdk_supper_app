export type SupperParams = {
  appId: String,
  requestToSuperApp: (appId: String, actionID: string, params: any, callback: Function) => {};
};
