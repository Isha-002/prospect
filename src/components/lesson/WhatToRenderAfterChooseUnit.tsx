import { useParams } from "react-router"
import Grammar from "./Grammar"
import Vocabulary from "./Vocabulary"
import Dialog from "./Dialog"


const WhatToRenderAfterChooseUnit = () => {

  const { subject } = useParams()
  
  if (subject?.toLowerCase() == "grammar") {
    return <Grammar />
  }

  if (subject?.toLowerCase() == "dialogs") {
    return <Dialog />
  }

  if (subject?.toLowerCase() == "vocabulary") {
    return <Vocabulary />
  }

  return("congracts, you found a bug!")

}

export default WhatToRenderAfterChooseUnit