
const PixelRatio = require("react-native/Libraries/Utilities/PixelRatio");
// const ratio = PixelRatio.get();
const ratio = 2;
const ratioSp = PixelRatio.getFontScale();

export function pxToDp(px){
    console.log("ratio=" + ratio);
    return parseFloat(px/ratio);
}

export function dpToPx(dp) {
    return parseFloat(dp * ratio);
}

export function pxToSp(px) {
    console.log("ratioSp=" + ratioSp);
    return px/ratioSp;
}