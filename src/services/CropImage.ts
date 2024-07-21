
const CropImage = (myURL: string) => {
    const target = "org/t/p/";
    const index = myURL.indexOf(target) + target.length;
  return myURL.slice(0, index) + "w400" + myURL.slice(index + 4)
}

export default CropImage