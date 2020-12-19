import React from "react";
import ContentLoader from "react-content-loader";

export function HeaderLoader() {
  return (
    <ContentLoader
      speed={1}
      width="100%"
      backgroundColor="rgba(0,0,0,0.06)"
      foregroundColor="rgba(0,0,0,0.12)"
      height="90"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="90" />
    </ContentLoader>
  );
}

export function DepartmentProductLoader() {
  return (
    <ContentLoader
      speed={1}
      height="275"
      width="100%"
      backgroundColor="rgba(0,0,0,0.06)"
      foregroundColor="rgba(0,0,0,0.12)"
      style={{ marginTop: "1.5em" }}
    >
      <rect x="20" y="87" rx="3" ry="3" width="60" height="84" />

      <rect x="100" y="0" rx="3" ry="3" width="170" height="100%" />
      <rect x="300" y="0" rx="3" ry="3" width="170" height="100%" />
      <rect x="500" y="0" rx="3" ry="3" width="170" height="100%" />
      <rect x="700" y="0" rx="3" ry="3" width="170" height="100%" />
      <rect x="900" y="0" rx="3" ry="3" width="170" height="100%" />
      <rect x="1100" y="0" rx="3" ry="3" width="170" height="100%" />

      <rect x="1290" y="87" rx="3" ry="3" width="60" height="84" />
    </ContentLoader>
  );
}
