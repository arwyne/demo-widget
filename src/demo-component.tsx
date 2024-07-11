import React, {
  useEffect,
  useState,
  FunctionComponent,
  ReactElement,
} from "react";
import { SBUserProfile, WidgetApi, UserListItem } from "widget-sdk";

export interface DemoComponentProps {
  message: string;
  widgetApi: WidgetApi;
}

export const DemoComponent: FunctionComponent<DemoComponentProps> = ({
  widgetApi,
  message,
}: DemoComponentProps): ReactElement => {
  const [user, setUser] = React.useState<SBUserProfile | UserListItem[]>();

  useEffect(() => {
    widgetApi.getUserInformation().then((info) => {
      setUser(info);
    });
  }, []);

  return (
    <>
      {user ? (
        <div>
          <p style={{ marginBottom: 10 }}>All user attributes:</p>
          <ul>
            {Object.entries(user).map(([key, value]) => (
              <li>{`${key}: ${value}`}</li>
            ))}
          </ul>
          <p>{message}</p>
        </div>
      ) : null}
    </>
  );
};
