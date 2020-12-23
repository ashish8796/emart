import React from "react";
import ContentLoader from "react-content-loader";

export function HeaderLoader() {
  return (
    <ContentLoader
      speed={1}
      width="100%"
      backgroundColor="rgba(0,0,0,0.06)"
      foregroundColor="rgba(0,0,0,0.12)"
      height="96"
      // style={{ position: "absolute", top: "0" }}
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="96" />
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

export function CartLoader() {
  return (
    <>
      <ContentLoader
        speed={1}
        width="100%"
        backgroundColor="rgba(0,0,0,0.06)"
        foregroundColor="rgba(0,0,0,0.12)"
        height="72vh"
      >
        <rect x="50" y="20" rx="3" ry="3" width="58%" height="72vh" />
        <rect x="63%" y="20" rx="3" ry="3" width="28%" height="38vh" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width="100%"
        backgroundColor={"#d0cece"}
        foregroundColor={"#cac6c6"}
        height="80"
        style={{ marginTop: "-5px" }}
      >
        <rect x="50" y="0" rx="3" ry="3" width="58%" height="80" />
      </ContentLoader>
    </>
  );
}

export function CreateOrderLoader() {
  return (
    <ContentLoader
      speed={1}
      width="100%"
      backgroundColor="rgba(0,0,0,0.06)"
      foregroundColor="rgba(0,0,0,0.12)"
      height="50vh"
      style={{
        position: "absolute",
        top: "100%",
        left: "0",
      }}
    >
      <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
  );
}

export function OrdersLoader() {
  return (
    <>
      <ContentLoader
        speed={1}
        width="100%"
        backgroundColor="rgba(0,0,0,0.06)"
        foregroundColor="rgba(0,0,0,0.12)"
        height="15vh"
      >
        <rect x="0" y="0" rx="3" ry="3" width="100" height="100" />
        <rect x="120" y="8" rx="3" ry="3" width="125" height="15" />
        <rect x="120" y="33" rx="3" ry="3" width="125" height="15" />
        <rect x="120" y="58" rx="3" ry="3" width="100" height="15" />
        <rect x="120" y="83" rx="3" ry="3" width="90" height="15" />
      </ContentLoader>
    </>
  );
}

export function CategoryProductLoader() {
  return (
    <>
      <ContentLoader
        height="90vh"
        width="100%"
        backgroundColor="rgba(0,0,0,0.06)"
        foregroundColor="rgba(0,0,0,0.12)"
        style={{ marginTop: "25px" }}
      >
        <rect x="50" y="10" rx="3" ry="3" width="170" height="275" />
        <rect x="315" y="10" rx="3" ry="3" width="170" height="275" />
        <rect x="585" y="10" rx="3" ry="3" width="170" height="275" />
        <rect x="860" y="10" rx="3" ry="3" width="170" height="275" />
        <rect x="1130" y="10" rx="3" ry="3" width="170" height="275" />

        <rect x="50" y="300" rx="3" ry="3" width="170" height="275" />
        <rect x="315" y="300" rx="3" ry="3" width="170" height="275" />
        <rect x="585" y="300" rx="3" ry="3" width="170" height="275" />
        <rect x="860" y="300" rx="3" ry="3" width="170" height="275" />
        <rect x="1130" y="300" rx="3" ry="3" width="170" height="275" />
      </ContentLoader>
    </>
  );
}

// export function ProfileLoader() {
//   return (
//     <ContentLoader
//       speed={1}
//       width="100%"
//       backgroundColor="rgba(0,0,0,0.06)"
//       foregroundColor="rgba(0,0,0,0.12)"
//       height="50vh"
//       style={{
//         position: "absolute",
//         top: "100%",
//         left: "0",
//       }}
//     >
//       <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
//     </ContentLoader>
//   );
// }
