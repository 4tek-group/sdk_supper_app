import type { SupperParams, BaseRequest, IntRequest } from './Type'
import { ActionID } from './Type/ActionID'

let supperData: SupperParams | undefined
const init = (params: SupperParams, completion: Function) => {
  if (params && params.appId && params.requestToSuperApp !== null) {
    supperData = params
    supperData?.requestToSuperApp(
      supperData.appId,
      ActionID.initSDK,
      { data: {} } as IntRequest,
      completion,
    )
  } else {
    completion(null)
  }
}

const destroy = () => {
  supperData = undefined
}

const willRequestToSupperApp = (
  actionID: string,
  params: BaseRequest,
  completion: Function,
) => {
  if (supperData && supperData.appId) {
    supperData?.requestToSuperApp(
      supperData.appId,
      actionID,
      params,
      completion,
    )
  }
}

export { init, willRequestToSupperApp }
