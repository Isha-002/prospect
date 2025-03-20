import { useLocation } from "react-router"


const WhatToRenderAfterChooseUnit = () => {

  const location = useLocation()
  console.log(location.pathname)

  return (
    <div>WhatToRenderAfterChooseUnit</div>
  )
}

export default WhatToRenderAfterChooseUnit