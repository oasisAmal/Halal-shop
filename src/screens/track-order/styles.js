import { StyleSheet } from "react-native";

import { screenHeight, screenwidth, theme_color } from "../../../config";

export default styles = StyleSheet.create({
    closeView:{
       zIndex:1000 
    },
    closeImg:{
        width: 24,
        height: 24,
        position:'absolute', top: 40, right: 50, backgroundColor:'white'
      },
  modalView: {
    backgroundColor: "white",
    marginHorizontal:-16, 
    //paddingTop: 24 ,
    height: screenHeight,
    
  },
});