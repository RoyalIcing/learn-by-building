import React, { useState } from "react";

interface RouteRenderProps {
  location: Location;
}

interface RouteProps {
  path: string;
  component: React.ComponentType<RouteRenderProps>;
  exact?: boolean;
}
export function Route({ path, component, exact = false }: RouteProps): JSX.Element | null {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  let matches = false;
  if (exact) {
    matches = currentPath === path;
  } else {
    matches = currentPath.startsWith(path);
  }

  if (!matches) {
    return null;
  }

  const Component = component;
  return <Component location={window.location} />;
}
