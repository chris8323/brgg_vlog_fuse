var Observable = require('FuseJS/Observable');


var vlog = this.Parameter;
var tag = vlog.map(function(x) { return x.tag; });	


function goBack(){
	router.goBack();
}

function Page(name, image, long, lat, location, no, stars, people){
	this.name = name;
	this.image = image;
	this.long = "EAST LNG " + long;
	this.lat = "NORTH LAT " + lat;
	this.location = location;
	this.no = "NO. " + no;
	this.stars = stars;
	this.starsRest = 5 - stars;
	this.people = people;
}

var pages = Observable();

pages.add(new Page(tag, "C:/Users/Chris/Documents/GitHub/vlog_fuse/vlog_fuse/Pages/Assets/Canada.png", 56, -108, "A silver lake in the north of Canada.", 10238, 3, ["Assets/Faces/model-001.jpg", "Assets/Faces/model-002.jpg", "Assets/Faces/model-003.jpg"]));
pages.add(new Page("ICELAND", "Assets/Iceland.png", 64, -18, "The rocky landscape of Iceland.", 10239, 4, ["Assets/Faces/model-004.jpg", "Assets/Faces/model-005.jpg", "Assets/Faces/model-006.jpg"]));
pages.add(new Page("NORWAY", "Assets/Norway.png", 60, 6, "Green mountain forest in Norway.", 10241, 4, ["Assets/Faces/model-007.jpg", "Assets/Faces/model-008.jpg", "Assets/Faces/model-009.jpg"]));
pages.add(new Page("TAIWAN", "Assets/Taiwan.png", 23, 120, "Dusk over the fields of Taiwan.", 10241, 3, ["Assets/Faces/model-010.jpg", "Assets/Faces/model-005.jpg", "Assets/Faces/model-003.jpg", "Assets/Faces/model-006.jpg"]));
pages.add(new Page("THAILAND", "Assets/Thailand.png", 15, 102, "A white silky beach in Thailand.", 10241, 4, ["Assets/Faces/model-004.jpg", "Assets/Faces/model-001.jpg"]));
pages.add(new Page("TURKEY", "Assets/Turkey.png", 40, 34, "Turkish house with a mountain view.", 10241, 3, ["Assets/Faces/model-007.jpg", "Assets/Faces/model-005.jpg", "Assets/Faces/model-004.jpg", "Assets/Faces/model-003.jpg"]));


var pagesView = pages.map(function(item, index){
	return {
		item: item,
		index: index
	};
});

module.exports = {
	pagesView: pagesView,
	goBack: goBack
};
