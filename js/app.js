//loading.....
var start;
var ovideo = document.getElementById('video-btn');
var oatn = document.getElementById('video-area');
var oshadow = document.getElementById('shadow');
isReversed = false;

content = [
	{
		"title":"Be together",
		"time":"June 24, 2016",
		"pic":"images/1.jpg",
		"video": false,
		"content":"For many times, Sheldon thought about holding hands with Rainie. In the cinema, He suddenly kissed Rainie on the lips. She was completely shocked and amazed by how good the kiss felt. Silence remains, but heart beats were never so strong."
	},{
		"title":"Little anger",
		"time":"July 27, 2016",
		"pic":"images/1.jpg",
		"video": false,
		"content":"On Sheldon's birthday, they went to karaoke together with their best friends. To Sheldon's suprise, Rainie arranged a birthday cake with a little cart to carry it. Sheldon has never experienced that kind of thing, mostly because he thinks it was a little dumb. He was so moved by everything she did for him.(Given that he kind of pissed her off in the morning.) "
	},{
		"title":"Little concert",
		"time":"Aug 14, 2016",
		"pic":"images/1.jpg",
		"video": false,
		"content":"Sheldon was standing on the stage while Rainie was sitting down there and watch. He knew that he was not good at singing rock music, but it was a pleasure to sing to his little girl. That night, they slept together for the first time."
	},{
		"title":"Distant traval",
		"time":"Jan 20, 2018",
		"pic":"images/1.jpg",
		"video": false,
		"content":"It was Rainie's Birthday. She came to the city where Sheldon studys in. Together, they walked on the thin ice under the eye of TJ and danced without any fear of dropping into the freezingly cold water. Sheldon can't help laughing whenever he looks at the picture of Rainie eatting a piece of lamb in BeiJing."	
	},{
		"title":"Distance",
		"time":"Jan 20, 2019",
		"pic":"images/1.jpg",
		"video": '<iframe src="https://player.bilibili.com/player.html?aid=41125285&cid=72229319&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>',
		"content":"Sometimes, brief separations are inevitable. This time, Sheldon had to study in Japan for a semester. Lots of people said that, distant love is vulnerable. But they are not afraid. With their understanding of each other, they still always laugh together and make little suprises for each other. Sheldon spend seven days working from dawn to dark to make this MEMORIES video for Rainie. Happy birthday! Rainie!<br>(click this picture for the video)"
	},{
		"title":"Distant traval",
		"time":"Jan 20, 2018",
		"pic":"images/1.jpg",
		"video": false,
		"content":"It was Rainie's Birthday. She came to the city where Sheldon studys in. Together, they walked on the thin ice under the eye of TJ and danced without any fear of dropping into the freezingly cold water. Sheldon can't help laughing whenever he looks at the picture of Rainie eatting a piece of lamb in BeiJing."	
	}
];

function loadTimeLine(content, timeReverse=false) {
	isReversed = timeReverse;
	var HTML = '';
	var VC = ['<li class="','animate-box fadeInUpBig animated-fast"><div class="timeline-badge" ',' style="background-image:url(',');"></div><div class="timeline-panel"><div class="timeline-heading"><h3 class="timeline-title">','</h3><span class="date">','</span></div><div class="timeline-body"><p>','</p></div></div></li>'];
	var reverse = "timeline-inverted ";
	var OCP = ['onclick="videoClick(',')"'];
	if (timeReverse) {
		for (var each = content.length - 1; each >= 0; each-=2) {
			if (content[each]["video"]) {
				HTML += VC[0] + VC[1] + OCP[0]+ each + OCP[1] + VC[2] + content[each]['pic'] + VC[3] + content[each]['title'] + VC[4] + content[each]['time'] + VC[5] + content[each]["content"] + VC[6]
			} else {
				HTML += VC[0] + VC[1] + VC[2] + content[each]['pic'] + VC[3] + content[each]['title'] + VC[4] + content[each]['time'] + VC[5] + content[each]["content"] + VC[6]
			}
			if (each) {
				if (content[each-1]["video"]){
					HTML += VC[0] + reverse + VC[1] + OCP[0]+ (each-1) + OCP[1] + VC[2] + content[each-1]['pic'] + VC[3] + content[each-1]['title'] + VC[4] + content[each-1]['time'] + VC[5] + content[each-1]["content"] + VC[6]
				} else {
					HTML += VC[0] + reverse + VC[1] + VC[2] + content[each-1]['pic'] + VC[3] + content[each-1]['title'] + VC[4] + content[each-1]['time'] + VC[5] + content[each-1]["content"] + VC[6]
				}
			}
		}
	} else {
		for (var each = 0; each <= content.length - 1; each += 2) {
			if (content[each]["video"]) {
				HTML += VC[0] + VC[1] + OCP[0]+ each + OCP[1] + VC[2] + content[each]['pic'] + VC[3] + content[each]['title'] + VC[4] + content[each]['time'] + VC[5] + content[each]["content"] + VC[6]
			} else {
				HTML += VC[0] + VC[1] + VC[2] + content[each]['pic'] + VC[3] + content[each]['title'] + VC[4] + content[each]['time'] + VC[5] + content[each]["content"] + VC[6]
			}
			if (each < content.length - 1) {
				if (content[each+1]["video"]){
					HTML += VC[0] + reverse + VC[1] + OCP[0]+ each+1 + OCP[1] + VC[2] + content[each+1]['pic'] + VC[3] + content[each+1]['title'] + VC[4] + content[each+1]['time'] + VC[5] + content[each+1]["content"] + VC[6]
				} else {
					HTML += VC[0] + reverse + VC[1] + VC[2] + content[each+1]['pic'] + VC[3] + content[each+1]['title'] + VC[4] + content[each+1]['time'] + VC[5] + content[each+1]["content"] + VC[6]
				}
			}
		}
	}
	document.getElementById('timelineStoryContent').innerHTML = HTML;
}
	
function reverseTime() {
	if (isReversed) isReversed = false;
	else isReversed = true;
	loadTimeLine(content, isReversed);
}

function createDiary() {

}

window.onload = function () {
	if(document.all) {
		start = setInterval('loading()', 1000);
	} else {
		var load = $('#onlo');
		load.fadeOut(1000);
	}
    loadTimeLine(content);
	
	

    $('#send_contact_message').click(function(e){
        e.preventDefault();
        $('#formClose').click()

    	$('#sendAlert').append("<div id='contact_success' class='alert alert-success animate-box fadeInUp animated-fast'>Succeed !</div>");

    	setTimeout( "$('#contact_success').alert('close')",2000);

    });      
}

function videoClick(videoID) {
	var gotoTop = function(){
	    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
	    currentPosition -= 10;
	    if (currentPosition > 0) {
	        window.scrollTo(0, currentPosition);
	    }else {
			window.scrollTo(0, 0);
		    clearInterval(timer);
	        timer = null;
	    }
	}
    var timer=setInterval(gotoTop,1);
    ovideo.style.display ='block';
    oshadow.style.display ='block';
    oatn.innerHTML = content[videoID]['video'];
    $(document.body).css({
 	   	"overflow-x":"hidden",
 	   	"overflow-y":"hidden"
 	});
}


var oshut = document.getElementById('video-shut');
oshut.onclick = function () {
    ovideo.style.display = 'none';
    oshadow.style.display = 'none';
    oatn.innerHTML = "";
 	$(document.body).css({
		"overflow-x":"auto",
	 	"overflow-y":"auto"
	});
}

function loading() {
	if (document.readyState == "complete") {
		try{
			var load = $('#onlo');
			load.fadeOut(1000);
			clearInterval(start);
			
		}catch(err){return true;}
	}
}

function imgPreview(fileDom) {
    //判断是否支持FileReader
    if(window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }
    //获取文件
    var file = fileDom.files[0];
    var imageType = /^image\//;
    //是否是图片
    if(!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    //读取完成
    reader.onload = function(e) {
        //获取图片dom
        var img = document.getElementById('preview');
        //图片路径设置为读取的图片
        img.src = e.target.result;
		
    };
    reader.readAsDataURL(file);
}

//  jQuery(function($){
//
//    // Create variables (in this scope) to hold the API and image size
//    var jcrop_api,
//        boundx,
//        boundy,
//
//        // Grab some information about the preview pane
//        $preview = $('#preview-pane'),
//        $pcnt = $('#preview-pane .preview-container'),
//        $pimg = $('#preview-pane .preview-container img'),
//
//        xsize = $pcnt.width(),
//        ysize = $pcnt.height();
//    
//    console.log('init',[xsize,ysize]);
//	  	$('#target').Jcrop({
//			setSelect: [ 20, 20, 150, 150 ],
//		  onChange: updatePreview,
//		  onSelect: updatePreview,
//		  aspectRatio: xsize / ysize,
//		  boxWidth:document.body.clientHeight*0.5,
//		  boxHeight:document.body.clientHeight*0.5 * ysize / xsize,
//
//		  
//		},function(){
//		  // Use the API to get the real image size
//		  var bounds = this.getBounds();
//		  boundx = bounds[0];
//		  boundy = bounds[1];
//		  // Store the API in the jcrop_api variable
//		  jcrop_api = this;
//			
//		  // Move the preview into the jcrop container for css positioning
//	      $preview.appendTo(jcrop_api.ui.holder);
//		});
//	  
//	$('#IWfile').change(function(){
//		var imageURL = URL.createObjectURL($(this)[0].files[0]);
////		jcrop_api.setImage(imageURL);
//		$('.target').attr('src', imageURL);
//		$('.jcrop-preview').attr('src', imageURL);
//		jcrop_api.destroy();
//		$('#target').Jcrop({
//		  setSelect: [ 20, 20, 150, 150 ],
//		  onChange: updatePreview,
//		  onSelect: updatePreview,
//		  aspectRatio: xsize / ysize,
//		  boxHeight:document.body.clientHeight*0.5,
//		  boxWidth:document.body.clientHeight*0.5 * xsize / ysize
//		  
//		  
//		},function(){
//		  // Use the API to get the real image size
//		  var bounds = this.getBounds();
//		  boundx = bounds[0];
//		  boundy = bounds[1];
//		  // Store the API in the jcrop_api variable
//		  jcrop_api = this;
//			
//		  // Move the preview into the jcrop container for css positioning
//	      $preview.appendTo(jcrop_api.ui.holder);
//		});
//		
//	});
//
//	  
//
//    function updatePreview(c){
//      if (parseInt(c.w) > 0)
//      {
//        var rx = xsize / c.w;
//        var ry = ysize / c.h;
//
//        $pimg.css({
//          width: Math.round(rx * boundx) + 'px',
//          height: Math.round(ry * boundy) + 'px',
//          marginLeft: '-' + Math.round(rx * c.x) + 'px',
//          marginTop: '-' + Math.round(ry * c.y) + 'px'
//        });
//      }
//    };
//
//  });

