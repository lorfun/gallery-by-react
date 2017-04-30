//CSS
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
//获取图片相关信息
//var imageDatas=require('../data/imageDatas.json');
let imagesDatas=require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;  
	}

	return imageDatasArr;
})(imageDatas);

//function genImageURL(imageDatasArr){
//	for(var i=0,j=imageDatasArr.length;i<j;i++){
//		var singleImageData=imageDatasArr[i];
//		singleImageData.imageURL=require('../images/'+singleImageData.fileName);
//		imageDatasArr[i]=singleImageData;
//	}
//	return imageDatasArr;
//}
//imageDatas=genImageURL(imageDatas);


// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
	      <section className="stage" ref="stage">
	        <section className="img-sec">
				{imgFigures}
	        </section>
	        <nav className="controller-nav">
	        	{controllerUnits}
	        </nav>	
	      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
