# An Sdk use API for Mini app

react-native-super-app-sdk

## Installation 
### Add: package "react-native-super-app-sdk" to package.json file.

```sh
"dependencies": {
    ...
    "react-native-super-app-sdk": "git+https://github.com/4tek-group/sdk_supper_app.git",
    ...
}
Install package: yarn
```

## Use

### Supper

---

#### Handle request from mini app.

```ts
import {
  ActionID,
  UserRequest,
  UserResponse,
} from 'react-native-super-app-sdk'
import { BaseResponse } from './BaseType'

handleRequestFromMiniApp = async (
  appId: string,
  actionId: string,
  params: any extends BaseRequest,
  completion: (any extends BaseResponse) => {
},
) =>
{
  switch (actionId) {
    case ActionID.initSDK: {
      completion(initResponse(appId))
      break
    }
    case ActionID.getUserInfo: {
      const isAccess = checkPermissionUser(appId, params)
      if (isAccess) {
        completion(handleRequestUser(appId, params))
      } else {
        completion(errorUserRequest('user deny'))
      }
      break
    }
    case ActionID.requestCamera: {
      const isAccess = checkPermissionUser(appId, params)
      if (isAccess) {
        completion(handleRequestCamera(appId, params))
      } else {
        completion(errorUserRequest('permission deny'))
      }
      break
    }
    case ActionID.requestPhoto: {
      const isAccess = checkPermissionUser(appId, params)
      if (isAccess) {
        completion(handleRequestPhoto(appId, params))
      } else {
        completion(errorUserRequest('permission deny'))
      }
      break
    }
    // Add more event here...
    default: {
      completion(errorUserRequest('orther error'))
    }
  }
}

const checkPermissionUser = (appId: String, params: UserRequest): boolean => {
  if (appId == '001') {
    return true
  }
  return false
}

const handleRequestUser = (
  appId: String,
  params: UserRequest,
): UserResponse => {
  return getDataForMiniApp(appId)
}

const handleRequestCamera = (
  appId: String,
  params: UserRequest,
): BaseResponse => {
  return supperRequestCameraPermission()
}

const handleRequestPhoto = (
  appId: String,
  params: UserRequest,
): BaseResponse => {
  return supperRequestPhotoPermission()
}

const initResponse = (appId: String): InitResponse => {
  if appId not
  exist
  return Object.create({ data: {}, isError: false, error: {} } as InitResponse)
else
  {
    return Object.create({ data: {}, isError: true, error: {} } as InitRespons)
  }
}

const errorUserRequest = (errorText: string): UserResponse => {
  return UserResponse
}


const dataSupper = {
    appId: '001',
    requestToSuperApp: handleRequestFromMiniApp,
  }

  < MiniApp
dataSupper = { dataSupper }
ref = { ref }
/>

```

---

### MiniApp

---

#### Init SupperSDK.

```ts
const App = forwardRef(({params: SupperParams}, ref) => {
  ...
  useEffect(() => {
    SupperSdk.init(params, InitResponse => {
      ...
    });

    return () => {
      SupperSdk.destroy()
    };
  }, [params]);
  return <MiniAppUser />;
});

```

#### Request one user infor.

```ts
import {UserRequest, UserResponse, UserError, SupperSdk} from 'react-native-super-app-sdk';

SupperSdk.requestUserInfo(
    UserRequest,
    UserResponse => {
        ...
    },
);
```
#### Request camera permission.

```ts
import { BaseResponse } from 'react-native-super-app-sdk/src/SupperSdk/Type/BaseType'

SupperSdk.requestCameraPermission(
    UserRequest,
    BaseResponse => {
        ...
    },
);
```
#### Request photo permission.

```ts
import { BaseResponse } from 'react-native-super-app-sdk/src/SupperSdk/Type/BaseType'

SupperSdk.requestPhotoPermission(
    UserRequest,
    BaseResponse => {
        ...
    },
);
```
---
