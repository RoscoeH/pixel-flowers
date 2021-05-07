// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import React, { useEffect, useState } from "react"
// import { Router } from "@reach/router"
// import { TinyColor } from "@ctrl/tinycolor"
// import { Global } from "@emotion/core"
// import { ThemeProvider } from "theme-ui"
// import { CaretLeft, CaretRight } from "react-bytesize-icons"

// import SEO from "../components/seo"
// import { FlowerSvg } from "../components/flower"
// import { urlDecode } from "../util/encode"
// import { useFlower } from "../hooks/flower"

// const PARTS = ["pistil", "petals", "stem"]

// const initMenu = () => ({
//   pistil: {
//     open: false,
//   },
//   petals: {
//     open: false,
//   },
//   stem: {
//     open: false,
//   },
// })

// const Page = ({ id }) => {
//   const { flower, setFlower, prevKind, nextKind } = useFlower(urlDecode(id))
//   const [menu, setMenu] = useState(initMenu())

//   const collapseMenu = () => {
//     const collapsedMenu = menu
//     Object.keys(menu).forEach(submenu => {
//       collapsedMenu[submenu] = {
//         ...menu[submenu],
//         open: false,
//       }
//     })
//     setMenu(collapsedMenu)
//   }

//   const toggleMenu = part => () => {
//     const open = !menu[part].open
//     collapseMenu()
//     setMenu({
//       ...menu,
//       [part]: { ...menu[part], open },
//     })
//   }

//   const setColor = (part, colorNumber) => ({ target }) => {
//     setFlower({
//       ...flower,
//       [`${part}Color${colorNumber || ""}`]: target.value,
//     })
//   }

//   return (
//     <ThemeProvider
//       theme={{
//         colors: { background: flower.backgroundColor },
//       }}
//     >
//       <Global
//         styles={theme => ({
//           body: {
//             backgroundColor: theme.colors.background,
//           },
//         })}
//       />
//       <div sx={{ height: "100%" }}>
//         <SEO title="Flower" />
//         <FlowerSvg width="100%" height={320} {...flower} />
//         <PartMenu>
//           {PARTS.map((part, i) => (
//             <PartMenuItem
//               key={i}
//               name={part}
//               kind={flower[part]}
//               onClick={toggleMenu(part)}
//               onSetColor={setColor(part)}
//               onSetColor2={setColor(part, 2)}
//               onPrev={() => prevKind(part)}
//               onNext={() => nextKind(part)}
//               color={flower[`${part}Color`]}
//               color2={flower[`${part}Color2`]}
//               open={menu[part].open}
//             />
//           ))}
//         </PartMenu>
//       </div>
//     </ThemeProvider>
//   )
// }

// const PartMenu = ({ children }) => (
//   <div sx={{ width: "100%", px: 3 }}>{children}</div>
// )
// const PartMenuItem = ({
//   open,
//   name,
//   kind,
//   color,
//   color2,
//   onClick,
//   onPrev,
//   onNext,
//   onSetColor,
//   onSetColor2,
//   ...props
// }) => {
//   return (
//     <div
//       sx={{
//         bg: "muted",
//         p: 2,
//         "&:not(:last-child)": {
//           mb: 2,
//         },
//         "& > *:not(:last-child)": {
//           mb: 2,
//         },
//       }}
//       {...props}
//     >
//       <div
//         sx={{
//           fontSize: 4,
//           textTransform: "uppercase",
//           color: "text",
//         }}
//         onClick={onClick}
//       >
//         {name}
//       </div>
//       {open && (
//         <React.Fragment>
//           <div
//             sx={{
//               display: "flex",
//               "& > *:not(:last-child)": {
//                 mr: 2,
//               },
//             }}
//           >
//             <Button onClick={onPrev}>
//               <CaretLeft width={24} height={24} sx={{ display: "block" }} />
//             </Button>
//             <span
//               sx={{
//                 bg: "muted",
//                 flex: "1 1 auto",
//                 textAlign: "center",
//                 fontSize: 3,
//                 lineHeight: 2,
//               }}
//             >
//               {kind}
//             </span>
//             <Button onClick={onNext}>
//               <CaretRight width={24} height={24} sx={{ display: "block" }} />
//             </Button>
//           </div>

//           <input
//             sx={{
//               bg: "muted",
//               flex: "1 1 auto",
//               textAlign: "center",
//               fontSize: 3,
//               lineHeight: 2,
//               border: "none",
//               bg: color,
//               color: new TinyColor(color).isDark() ? "background" : "text",
//               width: "100%",
//             }}
//             value={color}
//             onChange={onSetColor}
//           />
//           {color2 && (
//             <input
//               sx={{
//                 bg: "muted",
//                 flex: "1 1 auto",
//                 textAlign: "center",
//                 fontSize: 3,
//                 lineHeight: 2,
//                 border: "none",
//                 bg: color2,
//                 color: new TinyColor(color).isDark() ? "background" : "text",
//                 width: "100%",
//               }}
//               value={color2}
//               onChange={onSetColor2}
//             />
//           )}
//         </React.Fragment>
//       )}
//     </div>
//   )
// }

// const Button = ({ children, ...props }) => (
//   <button
//     sx={{
//       border: "none",
//       bg: "muted",
//       px: 2,
//       height: "auto",
//       display: "inline-block",
//       color: "text",
//     }}
//     {...props}
//   >
//     {children}
//   </button>
// )

// const FlowerPage = () => (
//   <React.Fragment>
//     <Router>
//       <Page path="/flower/:id" />
//     </Router>
//   </React.Fragment>
// )

// export default FlowerPage
