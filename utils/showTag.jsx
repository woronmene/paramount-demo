function showTag(time, jsonArray) {
  // console.log("onPause");
  // this.setState({ playing: false });
  // const newLabels = JSON.parse(jsonArray);
  // console.log(newLabels.label);
  // console.log(time);
  const currentTime = Math.round((time * 1000) / 500) * 500;
  console.log(currentTime);

  // let currentTime = Math.ceil(this.player.getCurrentTime() * 1000);
  // let currentTime = Math.ceil(this.player.getCurrentTime()) * 1000;
  // const labelsObj = newLabels.label;
  // console.log(labelsObj);
  // console.log(labelsObj[0].miliseconds);
  // console.log(tm);

  const allTags = jsonArray.filter(
    (label) => label.milliseconds === currentTime
  );

  // labelsObj.map((lab) => {
  //   console.log(Math.round(lab.milliseconds / 1000) * 1000);
  // });
  // const allTags = labelsObj.filter((label) => Math.round(label.millisecond / 1000) === 200);
  //   label.confidence === 36.597;
  //   if (label.miliseconds === currentTime) {
  //     return label;
  //   }
  return allTags;
  //   console.log(allTags);
  //   setTagArray(allTags);
}
export default showTag;

// function showTag(time, jsonArray) {
//   // console.log("onPause");
//   // this.setState({ playing: false });
//   const newLabels = jsonArray.result;
//   // const newLabels = JSON.parse(jsonArray);
//   // console.log(newLabels.labels);
//   // console.log(time);
//   const currentTime = Math.round((time * 1000) / 500) * 500;
//   // console.log(currentTime);

//   // let currentTime = Math.ceil(this.player.getCurrentTime() * 1000);
//   // let currentTime = Math.ceil(this.player.getCurrentTime()) * 1000;
//   const labelsObj = newLabels.labels;
//   // console.log(labelsObj);
//   // console.log(labelsObj[0].miliseconds);
//   // console.log(tm);

//   const allTags = labelsObj.filter((label) => label.millisecond === currentTime);
//   // const allTags = labelsObj.filter((label) => label.milliseconds === currentTime);

//   // labelsObj.map((lab) => {
//   //   console.log(Math.round(lab.milliseconds / 1000) * 1000);
//   // });
//   // const allTags = labelsObj.filter((label) => Math.round(label.millisecond / 1000) === 200);
//   //   label.confidence === 36.597;
//   //   if (label.miliseconds === currentTime) {
//   //     return label;
//   //   }
//   return allTags;
//   //   console.log(allTags);
//   //   setTagArray(allTags);
// }
// export default showTag;
