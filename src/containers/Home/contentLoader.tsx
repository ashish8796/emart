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
      style={{ marginTop: "20px" }}
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

export function ProductLoader() {
  return (
    <>
      <ContentLoader
        speed={1}
        width="30%"
        backgroundColor="rgba(0,0,0,0.06)"
        foregroundColor="rgba(0,0,0,0.12)"
        height="80vh"
        style={{}}
      >
        <rect x="50" y="50" rx="3" ry="3" width="100" height="100" />
        <rect x="50" y="190" rx="3" ry="3" width="100" height="100" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width="70%"
        backgroundColor="rgba(0,0,0,0.06)"
        foregroundColor="rgba(0,0,0,0.12)"
        height="80vh"
        style={{}}
      >
        <rect x="40" y="50" rx="3" ry="3" width="150" height="200" />
        <rect x="10" y="348" rx="3" ry="3" width="300" height="30" />
        <rect x="10" y="391" rx="3" ry="3" width="150" height="17" />
        <rect x="10" y="441" rx="3" ry="3" width="150" height="17" />
        <rect x="10" y="471" rx="3" ry="3" width="325" height="30" />
        <rect x="10" y="550" rx="3" ry="3" width="90%" height="90" />
      </ContentLoader>
    </>
  );
}
