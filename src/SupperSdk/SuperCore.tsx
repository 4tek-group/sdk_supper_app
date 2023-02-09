import type { SupperParams, UserRequest } from './Type';

let supperData: SupperParams;
const init = (params: SupperParams) => {
  supperData = params;
};

const willRequestToSupperApp = (
  eventID: string,
  params: UserRequest,
  completion: Function
) => {
  if (supperData) {
    supperData?.requestToSuperApp(eventID, params, completion);
  }
};

export { init, willRequestToSupperApp };
