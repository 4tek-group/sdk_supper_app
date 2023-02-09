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

#### Handle request from mini app. Ex requestUserInfo

```ts
import {
  EventType,
  UserRequest,
  UserResponse,
} from 'react-native-super-app-sdk'

handleRequestMini = async (
  actionId: string,
  params: any extends BaseRequest,
  completion: (any extends BaseResponse) => {},
) => {
  switch (actionId) {
    case EventType.user: {
      const isAccess = checkPermissionUser(params)
      if (isAccess) {
        completion(handleRequestUser(params))
      } else {
        completion(errorUserRequest('user deny'))
      }
      break
    }
    // Add more event here...
    default: {
      completion(errorUserRequest('orther error'))
    }
  }
}

const checkPermissionUser = (params: UserRequest): boolean => {
  return boolean
}

const handleRequestUser = (
  params: UserRequest,
): UserResponse => {
  return UserResponse
}

const errorUserRequest = (errorText: string): UserResponse => {
  return UserResponse
}


const dataSupper = {
  callback: handleRequestMini,
}

<MiniApp dataSupper={dataSupper} ref={ref} />

```

---

### MiniApp

---

#### Init SupperSDK.

```ts
const App = forwardRef(({params: SupperParams}, ref) => {
  ...
  useEffect(() => {
    SupperSdk.init(params);
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

---