$(document).ready(function() {
    
	var pageSize = getWindowSize();

	var windowWidth  = pageSize[0];
	var windowHeight = pageSize[1];

	makeHeader('searchMain');
	makeMainBody();
//	makeDelay(windowWidth, windowHeight);
    makeSubwayTab('2');
//	makeSearchStationName();
	// Orientation callback event
	$('body').bind('orientationchange', function(event) {
		if (navigator.userAgent.search(/[iphone|ipod]/i) > -1) {
			$("#search").css("width", windowWidth - 70);

			$(".DelayTitle").css("width", windowWidth - 100);
			$(".mDelayTitle").css("width", windowWidth - 60);
			$('.thdTab').css("width", (windowWidth - 2) / 2);
			$('.scdTab').css("width", (windowWidth - 2) / 2);

             $('.thdTab2').css("width", (windowWidth - 2) / getCookie("arrLineLinkLength"));

			var iconSet = Math.floor(windowWidth / 80);

			if (iconSet > 18)
				iconSet = 18;

			$(".alignLine").css("width", iconSet * 80);

			$("#subwayArvlInfoByRouteLayer").css('height',
					document.body.clientHeight);

			$("#layerOut").css("width", windowWidth - 20);
			$("#layerIn").css("width", windowWidth - 26);

			var position = $('#layerOut');
			if (position.outerHeight() < windowHeight) {
//				if (isApple()) {
//					position.css('top', ($(window).scrollTop())
//							+ ((windowHeight - position.outerHeight()) / 2)
//							+ 'px');
//				} else {
//					position.css('top', (windowHeight - position
//							.outerHeight())
//							/ 2 + 'px');
//				}
				position.css('top', (windowHeight - position
						.outerHeight())
						/ 2 + 'px');
			} else {
				position.css('top', '0px');
			}

			if (position.outerWidth() < $(document).width())
				position.css('margin-left', '-' + position.outerWidth() / 2
						+ 'px');
			else
				position.css('left', '0px');
		}
	});
});


function getCookie(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) {
			return unescape(y);
		}
	}
}

//주소창 자동 닫힘
function reloadAdd(){
	window.scrollTo(0, 1);
}
$(window).resize(function() {
	if (navigator.userAgent.search(/[android|ipad]/i) > -1) {
		//reloadAdd();
		var pageSize = getWindowSize();

		var windowWidth  = pageSize[0];
		var windowHeight = pageSize[1];

		$("#search").css("width", windowWidth - 70);

		$(".DelayTitle").css("width", windowWidth - 100);
		$(".mDelayTitle").css("width", windowWidth - 60);
		$('.thdTab').css("width", (windowWidth - 2) / 2);
		$('.scdTab').css("width", (windowWidth - 2) / 2);

		$('.thdTab2').css("width", (windowWidth - 2) / getCookie("arrLineLinkLength"));

		var iconSet = Math.floor(windowWidth / 80);

		if (iconSet > 18)
			iconSet = 18;

		$(".alignLine").css("width", iconSet * 80);

		$("#subwayArvlInfoByRouteLayer").css('height',
				document.body.clientHeight);

		$("#layerOut").css("width", windowWidth - 20);
		$("#layerIn").css("width", windowWidth - 26);

		var position = $('#layerOut');
		if (position.outerHeight() < windowHeight) {
//			if (isApple()) {
//				position.css('top', ($(window).scrollTop())
//						+ ((windowHeight - position.outerHeight()) / 2)
//						+ 'px');
//			} else {
//				position.css('top', (windowHeight - position
//						.outerHeight())
//						/ 2 + 'px');
//			}
			position.css('top', (windowHeight - position
					.outerHeight())
					/ 2 + 'px');
		} else {
			position.css('top', '0px');
		}

		if (position.outerWidth() < $(document).width())
			position.css('margin-left', '-' + position.outerWidth() / 2
					+ 'px');
		else
			position.css('left', '0px');

	}
});

//지하철 페이지의 해더정보를 만듦
function makeHeader(headerType) {
	var pageSize = getWindowSize();

	var windowWidth  = pageSize[0];
	var windowHeight = pageSize[1];

	if (headerType == 'searchMain') {
		var header = '';
//		header += '<div id="backKey" class="topBack"> </div>';
//		header += '<span class="topTitle"> 지하철정보 </span>';
//		header += '<div id="topHome" class="topNavi"> </div>';

		header += '<div class="tm_headerbox">';
		header += '<a id="topHome" href="javascript:void(0);"  class="logo"><img src="./images/common2015/header_logo.png"/></a>';
		header += '<a id="backKey" href="javascript:void(0);" class="btn_home">';
		header += '<button type="button" class="btn_img tm_home" title="Home"><img src="./images/common2015/btn_t_home.png" alt="Home"/></button>';
		header += '</a>';
		header += '<div class="header_title"> 지하철정보 </div>';
		header += '</div>';

		
		$("#header").html(header);
		$('#backKey').click(function() {
			location.href = "./index.bms";
		});

		$('#topHome').click(function() {
			location.href = "./index.bms";
		});
	} else if (headerType == 'arsIdList') {
		var header = '';
//		header += '<div id="backKey" class="topBack"> </div>';
//		header += '<span class="topTitle"> 지하철정보 </span>';
//		header += '<div id="topHome" class="topNavi"> </div>';

		header += '<div class="tm_headerbox">';
		header += '<a id="topHome" href="javascript:void(0);"  class="logo"><img src="./images/common2015/header_logo.png"/></a>';
		header += '<a id="backKey" href="javascript:void(0);" class="btn_home">';
		header += '<button type="button" class="btn_img tm_home" title="Home"><img src="./images/common2015/btn_t_home.png" alt="Home"/></button>';
		header += '</a>';
		header += '<div class="header_title"> 지하철정보 </div>';
		header += '</div>';
		
		$("#header").html(header);

		$("#backKey").click(function() {
			$('#busArvlInfo').hide();
            //$('#subwayMapImg').hide();
			if ($('#arsIdList').css("display") == 'none') {
				makeHeader('searchMain');
				$('#arsIdList').show();
			}

		});

		$('#topHome').click(function() {
			location.href = "./index.bms";
		});
	} else if (headerType == 'arvl') {
		var header = '';
//		header += '<div id="backKey" class="topBack"> </div>';
//		header += '<span class="topTitle"> 지하철정보 </span>';
//		header += '<div id="topHome" class="topNavi"> </div>';

		header += '<div class="tm_headerbox">';
		header += '<div id="backKey" class="logo"><img src="./images/common2015/header_logo.png"/></div>';
		header += '<a id="topHome" class="btn_home" href="javascript:void(0);">';
		header += '<button type="button" class="btn_img tm_home" title="Home"><img src="./images/common2015/btn_t_home.png" alt="Home"/></button>';
		header += '</a>';
		header += '<div class="header_title"> 지하철정보  </div>';
		header += '</div>';
		
		$("#header").html(header);

		$("#backKey").click(function() {
			$('#busRouteList').hide();

			if ($('#busArvlInfo').css("display") == 'none') {
				makeHeader('arsIdList');
				$('#busArvlInfo').show();
			}

			if($('#subwayMapImg').css("display") == 'none') {
			    makeHeader('arsIdList');
                $('#subwayMapImg').show();

			}
		});

		$('#topHome').click(function() {
			location.href = "./index.bms";
		});
	}

}

function makeMainBody() {
	var temp = '';

	//temp += '<div id="Delay" class="Delay"> </div>';
	//temp += '<div id="DelayMore" class="DelayMore"> </div>';
	temp += '<div id="sTab" class="sTab"> </div>';
	temp += '<div id="sType" class="sType"></div>';
	temp += '<div id="subwayMapImg" class="subwayMapImg"></div>';
	temp += '<div id="srch" class="srch"> </div>';
	temp += '<div id="searchResult" class="searchResult"> </div>';

	$('#arsIdList').html(temp);
}

function makeDelay() {
	var req = {};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getDelayByInfo.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

						var pageSize = getWindowSize();

						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];

						var mainDelay = '';
						var moreDelay = '';
						if (data.resultList.length != 0) {
							mainDelay += '<div class="align">';
							mainDelay += '<div class="DelayImg"> </div>';
							//mainDelay += '<div id="DelayTitle" class="DelayTitle"> <span class="delaysub"> 돌발 및 연착정보 | </span>'
							mainDelay += '<div id="DelayTitle" class="DelayTitle"> <span class="delaysub"> 돌발 | </span>'
									+ data.resultList[0].statnFnm
									+ '~'
									+ data.resultList[0].statnTnm
									+ ' '
									+ data.resultList[0].dataKnd + '</div>';
							mainDelay += '<div class="DelayArrow" id="DelayArrow"> </div>';
							mainDelay += '</div>';

							for ( var i = 1; i < data.resultList.length; i++) {
								moreDelay += '<div class="mDelay">';
								moreDelay += '<div id="mDelayTitle" class="mDelayTitle">'
										+ data.resultList[i].statnFnm
										+ '~'
										+ data.resultList[i].statnTnm
										+ ' '
										+ data.resultList[i].dataKnd + '</div>';
								moreDelay += '</div>';
							}
						} else {
							mainDelay += '<div class="align">';
							// mainDelay += '<div class="DelayImg"> </div>';
							mainDelay += '<div id="DelayTitle" class="DelayTitle"> 돌발,연착정보가 없습니다. </div>';
							mainDelay += '<div class="DelayArrow" id="DelayArrow"> </div>';
							mainDelay += '</div>';
						}

						$("#Delay").html(mainDelay);
						$("#DelayMore").html(moreDelay);

						$("#DelayArrow")
								.click(
										function() {
											if ($(".DelayMore").css("display") == "none") {
												$(".DelayMore").css("display",
														"block");
												$("#DelayArrow")
														.css('background',
																'url(./images/main/arrow_up.png) no-repeat 50% 50%');
											} else if ($(".DelayMore").css(
													"display") == "block") {
												$(".DelayMore").css("display",
														"none");
												$("#DelayArrow")
														.css('background',
																'url(./images/main/arrow_down.png) no-repeat 50% 50%');
											}
										});

						$(".DelayTitle").css("width", windowWidth - 100);
						$(".mDelayTitle").css("width", windowWidth - 60);

					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

//검색 조건인것 같으나 현재 사용되지 않음.
function makeSearchType() {
	var temp = '';

	temp += '<div class="align"> ';
	temp += '<input type="radio" class="searchType" name="searchType" value="scnm" checked> 역명검색 </input>';
	temp += '<input type="radio" class="searchType" name="searchType" value="scln"> 호선검색 </input>';
	temp += '</div>';

	$('#sType').html(temp);

	$('.searchType').change(function() {
		if ($(':radio[name="searchType"]:checked').val() == 'scnm') {
			makeSearchStationName();
			$('#searchResult').empty();
		} else {
			makeSearchLine();
			$('#searchResult').empty();
		}
	});

	if ($(':radio[name="searchType"]:checked').val() == 'scnm') {
		makeSearchStationName();
		$('#searchResult').empty();
	} else {
		makeSearchLine();
		$('#searchResult').empty();
	}

}

//지하철 화면을 2개의 Tab으로 나눔.
function makeSubwayTab(tabType){

    var pageSize = getWindowSize();

	var windowWidth  = pageSize[0];
	var windowHeight = pageSize[1];

	var temp = '';

	temp += '<div class="tab">';
	temp += '<ul>';

	if (tabType == 1) {
	    temp += '<li class="thdTab onTab"  id="subMap">지하철노선도</li>';
	    $('#srch').empty();
        $('#searchResult').empty();
        makeSubwayMap("0000");      // 전체노선은 "0000" 임.
	} else {
	    temp += '<li class="thdTab offTab"  id="subMap">지하철노선도</li>';
	}

	if (tabType == 2) {
        temp += '<li class="thdTab onTab" id="subList">지하철 목록</li>';
        $('#subwayMapImg').empty();
        $('#searchResult').empty();
        makeSearchStationName();
    } else {
        temp += '<li class="thdTab offTab" id="subList">지하철 목록</li>';
    }

	temp += '</ul>';
	temp += '</div>';

	$('#sTab').html(temp);

	$('#subMap').click(
        function() {
            makeSubwayTab('1');
		});

	$('#subList').click(
		function() {
            makeSubwayTab('2');
		});

	$('.thdTab').css("width", (windowWidth - 2) / 2);

}

function makeSearchStationName() {
	var pageSize = getWindowSize();

	var windowWidth  = pageSize[0];
	var windowHeight = pageSize[1];

	var iconSet = Math.floor(windowWidth / 80);

	if (iconSet > 18)
		iconSet = 18;

	var temp = '';

	temp += '<div class="wrapSearch">';
	temp += '<div class="align">';
	temp += '<div class="stationTxt"> 지하철 역명</div>';
	temp += '<div class="wrapInput">';
	temp += '<input type="text" id="search" class="searchInput" placeholder="역명, 초성을 입력하세요.">';
	temp += '<span id="searchIcon" class="icon"> </span>';
	temp += '</div>';
	temp += '</div>';
	temp += '</div>';

	temp += '<div class="hosunTxt"> <div class="align"> 지하철 호선 </div> </div>';

	temp += '<div class="alignLine">';
	temp += '<div class="lnTxt ln1001" onclick="makeSearchResultLine(\'1001\')"> 1호선 </div>';
	temp += '<div class="lnTxt ln1002" onclick="makeSearchResultLine(\'1002\')"> 2호선 </div>';
	temp += '<div class="lnTxt ln1003" onclick="makeSearchResultLine(\'1003\')"> 3호선 </div>';
	temp += '<div class="lnTxt ln1004" onclick="makeSearchResultLine(\'1004\')"> 4호선 </div>';
	temp += '<div class="lnTxt ln1005" onclick="makeSearchResultLine(\'1005\')"> 5호선 </div>';
	temp += '<div class="lnTxt ln1006" onclick="makeSearchResultLine(\'1006\')"> 6호선 </div>';
	temp += '<div class="lnTxt ln1007" onclick="makeSearchResultLine(\'1007\')"> 7호선 </div>';
	temp += '<div class="lnTxt ln1008" onclick="makeSearchResultLine(\'1008\')"> 8호선 </div>';
	temp += '<div class="lnTxt ln1009" onclick="makeSearchResultLine(\'1009\')"> 9호선 </div>';
	temp += '<div class="lnTxt ln1067" onclick="makeSearchResultLine(\'1067\')"> 경 춘 </div>';
	//temp += '<div class="lnTxt ln1061" onclick="makeSearchResultLine(\'1061\')"> 중 앙 </div>';
	temp += '<div class="lnTxt ln1063" onclick="makeSearchResultLine(\'1063\')"> 경의중앙 </div>';
	temp += '<div class="lnTxt ln1065" onclick="makeSearchResultLine(\'1065\')"> 공 항 </div>';
	// 2020.10.23 삭제
	//temp += '<div class="lnTxt ln1075" onclick="makeSearchResultLine(\'1075\')"> 분 당 </div>';
	temp += '<div class="lnTxt ln1077" onclick="makeSearchResultLine(\'1077\')"> 신분당</div>';
	temp += '<div class="lnTxt ln1069" onclick="makeSearchResultLine(\'1069\')"> 인 천 </div>';
	// 2020.10.23 삭제
	//temp += '<div class="lnTxt ln1071" onclick="makeSearchResultLine(\'1071\')"> 수 인 </div>';
	temp += '<div class="lnTxt ln1092" onclick="makeSearchResultLine(\'1092\')"> 우이신설 </div>';
	// 2020.10.23 생성
	temp += '<div class="lnTxt ln1100" onclick="makeSearchResultLine(\'1100\')"> 수인분당선 </div>';
	temp += '</div>';

	temp += '<div id="choiceLine" class="choiceLine"> </div>';

	$('#srch').html(temp);

	$("#search").css("width", windowWidth - 70);

	$(".alignLine").css("width", iconSet * 80);

	$('#searchIcon').click(function() {
		if ($("#search").val() != '') {
			var firstLFlg = false;
			var breakFirst = false;
			var firstLValue = $("#search").val();

			var myResultF = firstLValue.match(/[ㄱ-ㅎ]/g );
			var myResultN = firstLValue.match(/[0-9]/g );
			if (myResultF != null ) {
				if ( myResultN != null) {
					total = myResultF.length + myResultN.length;
				} else {
					total = myResultF.length;
				}
			}

			if (myResultF != null) {
				if (total == firstLValue.length ) {
					firstLFlg = true;
				} else {
					alert("초성검색은 초성입력만 가능합니다.");
					$("#search").focus();
					breakFirst = true;
				}
			}

			if (!breakFirst) {
				if (firstLFlg) {
					makeSearchResultLetter($("#search").val());
				} else {
					makeSearchResult($("#search").val());
				}
			}
		} else {
			alert("역명을 입력하지 않으셨습니다.");
			$('#search').focus();
		}
	});
}

function makeSearchLine() {
	var pageSize = getWindowSize();

	var windowWidth = pageSize[0];
	var windowHeight = pageSize[1];

	var iconSet = Math.floor(windowWidth / 80);

	if (iconSet > 18)
		iconSet = 18;

	var temp = '';

	temp += '<div class="alignLine">';
	temp += '<div class="lnTxt ln1001" onclick="makeSearchResultLine(\'1001\')"> 1호선 </div>';
	temp += '<div class="lnTxt ln1002" onclick="makeSearchResultLine(\'1002\')"> 2호선 </div>';
	temp += '<div class="lnTxt ln1003" onclick="makeSearchResultLine(\'1003\')"> 3호선 </div>';
	temp += '<div class="lnTxt ln1004" onclick="makeSearchResultLine(\'1004\')"> 4호선 </div>';
	temp += '<div class="lnTxt ln1005" onclick="makeSearchResultLine(\'1005\')"> 5호선 </div>';
	temp += '<div class="lnTxt ln1006" onclick="makeSearchResultLine(\'1006\')"> 6호선 </div>';
	temp += '<div class="lnTxt ln1007" onclick="makeSearchResultLine(\'1007\')"> 7호선 </div>';
	temp += '<div class="lnTxt ln1008" onclick="makeSearchResultLine(\'1008\')"> 8호선 </div>';
	temp += '<div class="lnTxt ln1009" onclick="makeSearchResultLine(\'1009\')"> 9호선 </div>';
	temp += '<div class="lnTxt ln1067" onclick="makeSearchResultLine(\'1067\')"> 경 춘 </div>';
	//temp += '<div class="lnTxt ln1061" onclick="makeSearchResultLine(\'1061\')"> 중 앙 </div>';
	temp += '<div class="lnTxt ln1063" onclick="makeSearchResultLine(\'1063\')"> 경의중앙 </div>';
	temp += '<div class="lnTxt ln1065" onclick="makeSearchResultLine(\'1065\')"> 공 항 </div>';
	// 2020.10.23 삭제
	//temp += '<div class="lnTxt ln1075" onclick="makeSearchResultLine(\'1075\')"> 분 당 </div>';
	temp += '<div class="lnTxt ln1077" onclick="makeSearchResultLine(\'1077\')"> 신분당</div>';
	temp += '<div class="lnTxt ln1069" onclick="makeSearchResultLine(\'1069\')"> 인 천 </div>';
	// 2020.10.23 삭제
	//temp += '<div class="lnTxt ln1071" onclick="makeSearchResultLine(\'1071\')"> 수 인 </div>';
	temp += '<div class="lnTxt ln1092" onclick="makeSearchResultLine(\'1092\')"> 우이신설 </div>';
	// 2020.10.23 생성
	temp += '<div class="lnTxt ln1100" onclick="makeSearchResultLine(\'1100\')"> 수인분당선 </div>';
	temp += '</div>';

	temp += '<div id="choiceLine" class="choiceLine"> </div>';

	$('#srch').html(temp);

	$(".alignLine").css("width", iconSet * 80);
}
/*
function makeSearchResultLine(subwayId) {
	var req = {
		"subwayId" : subwayId
	};
	jQuery.ajax( {
		type : 'POST',
		dataType : 'json',
		url : '/mBus/subway/getLineByRoute.bms',
		data : req,
		success : function(data) {
			if (data.error.errorCode == '0000') {
				var temp         = '';
				var pageSize     = getWindowSize();
				var windowWidth  = pageSize[0];
				var windowHeight = pageSize[1];

				$('#searchResult').empty();
				if (data.resultList != null) {

					//현재 지하철 정보에서 호선 선택시 보여지는 아래 selectbox -시작-
					//temp += '<select id="route" class="subwaySelect">';
					//temp += '<option>방면을 선택해 주세요.</option>';
					//for ( var i = 0; i < data.resultList.length; i++) {
					//	temp += '<option value=' + data.resultList[i].trainLine
					//			+ '>' + data.resultList[i].trainLineNm
					//			+ '</option>';
					//}
					//temp += '</select>';
					//현재 지하철 정보에서 호선 선택시 보여지는 아래 selectbox - 끝 - . 2012.01.17

                    //신규 방면정보: selectbox가 아닌 list로 표현 -> 1.17일 변경

//				    temp += '<div class="title">방면을 선택해 주세요</div>';
//				    for ( var i = 0; i < data.resultList.length; i++) {
//				        temp += '<div style="clear:both;" class="stnm">';
//				        temp += '<div style="float:left;" class="ln'
//				                + data.resultList[i].subwayId
//				                + '" onclick="makeSearchLineHosun(\''
//				                + data.resultList[i].subwayId  + '\',\''
//				                + data.resultList[i].trainLine + '\');"><a href="#bottom">'
//				                + data.resultList[i].trainLineNm + '</a>';
//				    	temp += '</div>';
//				    	temp += '</div>';
//				    }//end for

				    temp += '<div class="title">방면을 선택해 주세요</div>';
				    for ( var i = 0; i < data.resultList.length; i++) {
				        temp += '<div style="clear:both;" class="stnm">';
				        temp += '<div style="float:left;" class="ln'
				                + data.resultList[i].subwayId
				                + '" onclick="makeSearchLineHosun(\''
				                + data.resultList[i].subwayId  + '\',\''
				                + data.resultList[i].trainLine + '\');">'
				                + data.resultList[i].trainLineNm;

				        var trainLineNm = data.resultList[i].trainLineNm;
				        if (trainLineNm.match('내선') != null) {
				        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
				        } else if (trainLineNm.match('외선') != null) {
				        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
				        }
				    	temp += '</div>';
				    	temp += '</div>';
				    }//end for
				} else {
				}
				$("#choiceLine").html(temp);

                //아래 함수는 위의 방면 정보가 selectbox일경우 change에 관한 이벤트 변경시 사용되는 함수.
				//$("#route").change(function() {
				//	makeSearchLineHosun(subwayId, $('#route').val());
				//});
			} else {
				alert(data.error.errorMessage);
			}
		},
		error : function() {
			alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
		}
	});
}
*/

// 노선별 역 정보 (for Test)
function makeSearchResultLine(subwayId) {
	var req = {
		"subwayId" : subwayId
	};
//	if(subwayId == '2000'){
//		//alert(subwayId);
//		//var str = "Free Web Building Tutorials!";
//		//document.write(link("js/subway/test.jsp"));
//		window.location="js/subway/test.jsp";
//	}
	
	// 2020.10.23 수인분당선 인 경우 메세지 표출 (수인선과 분당선 통합에 따른 시스템 정비로 정보를 제공하지 않습니다.)
	if (req.subwayId == '1100') {
		var temp         = '';
		var pageSize     = getWindowSize();
		var windowWidth  = pageSize[0];
		var windowHeight = pageSize[1];

		temp += '<div class="title">지하철역정보 ';
		temp += '</div>';
		temp += '<div style="margin:8 14px;">수인선과 분당선 통합에 따른 시스템 정비로 정보를 제공하지 않습니다.</div>';
		
		$('#searchResult').html(temp);
		
		return;
	}

	jQuery.ajax( {
		type : 'POST',
		dataType : 'json',
		url : 'http://m.bus.go.kr/mBus/subway/getStatnByRoute.bms',
		data : req,
		success : function(data) {
			if (data.error.errorCode == '0000') {
				var temp         = '';
				var pageSize     = getWindowSize();
				var windowWidth  = pageSize[0];
				var windowHeight = pageSize[1];

//				temp += '<h1 id="'+ subwayId +'"></h1><div class="title">검색결과 ';
				temp += '<div class="title">지하철역정보 ';
				temp += '<img style="position:relative;float:right;right:12px;top:6px;width:18px;height:18px;" id="subwayRefresh" src="./images/subway/refresh.png" alt="Refresh">';
				temp += '<img style="position:relative;float:right;right:35px;top:6px;width:18px;height:18px;" id="upArro" src="./images/subway/upArro.png" alt="upArro">';
				temp += '<img style="position:relative;float:right;right:75px;top:6px;width:18px;height:18px;" id="downArro" src="./images/subway/downArro.png" alt="downArro">';
				temp += '</div>';
				
				
				if (data.resultList != null) {
//					alert("data.resultList[i].existYn :: " + data.resultList[i].existYn)
                    //var tmp_1 = '<div style="float:left;" class="ln'
					//			+ data.resultList[0].subwayId
					//			+ '" onclick="makeArvlSubway(\''
					//			+ data.resultList[0].subwayId + '\',\''
					//			+ data.resultList[0].statnId + '\',\''
					//			+ data.resultList[0].statnNm
					//			+ '\' , \'arsIdList\');javascript:window.scrollTo(0,0);">'
					//			+ data.resultList[0].statnNm;
					//			alert(tmp_1);
					for ( var i = 0; i < data.resultList.length; i++) {
                    var tmp_1 = '<div style="float:left;" class="ln'
								+ data.resultList[i].subwayId
								+ '" onclick="makeArvlSubway(\''
								+ data.resultList[i].subwayId + '\',\''
								+ data.resultList[i].statnId + '\',\''
								+ data.resultList[i].statnNm
								+ '\' , \'arsIdList\');javascript:window.scrollTo(0,0);">'
								+ data.resultList[i].statnNm;
						temp += '<div id="resultPoint" style="clear:both;" class="stnm">';
						temp += '<div style="float:left;" class="ln'
								+ data.resultList[i].subwayId
								+ '" onclick="makeArvlSubway(\''
								+ data.resultList[i].subwayId + '\',\''
								+ data.resultList[i].statnId + '\',\''
								+ data.resultList[i].statnNm
								+ '\' , \'arsIdList\');javascript:window.scrollTo(0,0);">'
								+ data.resultList[i].statnNm;
						temp += '</div>';
						temp += '<div style="float:right;">';
						/* m.bus.go.kr용
						if (data.resultList[i].existYn == 'Y') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNM +'\')"';
							temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn">';
						}
		 				*/
						/* 210.96.13.90서버 용 */
						/* 2020.10.22 이미지 클리 시 팝업 open 삭제 */
						/* 2020.10.23 주석처리 */
						/*
						if (data.resultList[i].existYn1 == 'Y' && data.resultList[i].existYn2 == 'N') {
							temp += '<img src="./images/subway/subwayup.png" alt="지하철" class="subwayExistYn">';
						}
						if (data.resultList[i].existYn1 == 'T' && data.resultList[i].existYn2 == 'N') {
							temp += '<img src="./images/subway/subwayUpEx.png" alt="지하철" class="subwayExistYnEX">';
						}
						if (data.resultList[i].existYn1 == 'N' && data.resultList[i].existYn2 == 'Y') {
							temp += '<img src="./images/subway/subway.png" alt="지하철" class="subwayExistYn2">';
						}
						if (data.resultList[i].existYn1 == 'N' && data.resultList[i].existYn2 == 'T') {
							temp += '<img src="./images/subway/subwayEx.png" alt="지하철" class="subwayExistYnEX2">';
						}
						if (data.resultList[i].existYn1 == 'Y' && data.resultList[i].existYn2 == 'Y') {
							temp += '<img src="./images/subway/subwayup.png" alt="지하철" class="subwayExistYn3">';
							temp += '<img src="./images/subway/subway.png" alt="지하철" class="subwayExistYn2">';
						}
						if (data.resultList[i].existYn1 == 'T' && data.resultList[i].existYn2 == 'T') {
							temp += '<img src="./images/subway/subwayUpEx.png" alt="지하철" class="subwayExistYnEX3">';
							temp += '<img src="./images/subway/subwayEx.png" alt="지하철" class="subwayExistYnEX2">';
						}
						*/
						
						if (data.resultList[i].existYn1 == 'Y' && data.resultList[i].existYn2 == 'N') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\','+1+')"';
							temp += 'src="./images/subway/subwayup.png" alt="지하철" class="subwayExistYn">';
						}
						if (data.resultList[i].existYn1 == 'T' && data.resultList[i].existYn2 == 'N') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayUpEx.png" alt="지하철" class="subwayExistYnEX">';
						}
						if (data.resultList[i].existYn1 == 'N' && data.resultList[i].existYn2 == 'Y') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\','+2+')"';
							temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn2">';
						}
						if (data.resultList[i].existYn1 == 'N' && data.resultList[i].existYn2 == 'T') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayEx.png" alt="지하철" class="subwayExistYnEX2">';
						}
						if (data.resultList[i].existYn1 == 'Y' && data.resultList[i].existYn2 == 'Y') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\','+1+')"';
							temp += 'src="./images/subway/subwayup.png" alt="지하철" class="subwayExistYn3">';
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\','+2+')"';
							temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn2">';
						}
						if (data.resultList[i].existYn1 == 'T' && data.resultList[i].existYn2 == 'T') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayUpEx.png" alt="지하철" class="subwayExistYnEX3">';
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayEx.png" alt="지하철" class="subwayExistYnEX2">';
						}
						
						
						/*
						else if (data.resultList[i].existYn1 == 'Y'
							&& data.resultList[i].existYn2 == 'N') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayup.png" alt="지하철" class="subwayExistYn3">';
						}
						else if (data.resultList[i].existYn1 == 'T'
							&& data.resultList[i].existYn2 == 'N') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayUpEx.png" alt="지하철" class="subwayExistYnEX3">';
						}
						if (data.resultList[i].existYn1 == 'Y'
							&& data.resultList[i].existYn2 == 'T') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNm +'\')"';
							temp += 'src="./images/subway/subwayUpEx.png" alt="지하철" class="subwayExistYnEX3">';
						}

						else if (data.resultList[i].existYn1 == 'N' && data.resultList[i].existYn2 == 'Y') {
							temp += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
							temp += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNM +'\')"';
							temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn2">';
							}
						else if (data.resultList[i].existYn1 == 'Y' && data.resultList[i].existYn2 == 'Y') {
							temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].statnNM +'\')"';
							temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn1">';
							temp += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
							temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn2">';
						}*/
//						temp += '<img src="./images/subway/1_1.png" alt="라인" class="vline">';
//						temp += '<img src="./images/subway/1_2.png" alt="라인" class="vline2">';
						temp += '<img src="./images/subway/v_line.png" alt="라인" class="vline">';
						temp += '<img src="./images/subway/v_line.png" alt="라인" class="vline2">';
						temp += '<img src="./images/bus/favorite.png" alt="즐겨찾기" class="routeBookMark" onclick="setBookMark(\''
								+ data.resultList[i].statnNm + '\' , \''
								+ data.resultList[i].statnId + '\' , \''
								+ data.resultList[i].subwayId
								+ '\' , \'SUBWAY\')"></div>';
						temp += '</div>';
					}
					

				} else {
					temp += '<div style="margin:8 14px;">검색 결과가 없습니다.</div>';
//					temp += '<div style="margin:8 14px;"><font color="red">서비스 준비중입니다.</font></div>';
				}

				$('#searchResult').html(temp);

				//지하철 노선도 숨기기.
                //$('#subwayMapImg').hide();

                //self.location.hash=subwayId;

				$("#subwayRefresh").click(
						function() {
							makeSearchResultLine(subwayId);
						});

			} else {
				alert(data.error.errorMessage);
			}
		},
		error : function() {
			alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
		}
	});
}

function makeSearchLineHosun(subwayId, trainLine) {
	var req = {
		"subwayId" : subwayId,
		"trainLine" : trainLine
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getSctnByRoute.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {
						var temp         = '';
						var pageSize     = getWindowSize();
						var windowWidth  = pageSize[0];
						var windowHeight = pageSize[1];
						temp += '<h1 id="'+ trainLine +'"></h1><div class="title">검색결과 ';
						temp += '<img style="position:relative;float:right;right:12px;top:6px;width:18px;height:18px;" id="subwayRefresh" src="./images/subway/refresh.png" alt="Refresh">';
						temp += '</div>';

						if (data.resultList != null) {
//							alert("data.resultList[i].existYn :: " + data.resultList[i].existYn)
							for ( var i = 0; i < data.resultList.length; i++) {
								temp += '<div id="resultPoint" style="clear:both;" class="stnm">';
								temp += '<div style="float:left;" class="ln'
										+ data.resultList[i].subwayId
										+ '" onclick="makeArvlSubway(\''
										+ data.resultList[i].subwayId + '\',\''
										+ data.resultList[i].statnId + '\',\''
										+ data.resultList[i].statnNM
										+ '\' , \'arsIdList\')">'
										+ data.resultList[i].statnNM;
								temp += '</div>';
								temp += '<div style="float:right;">';

								/* m.bus.go.kr용
								if (data.resultList[i].existYn == 'Y') {
									temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
										+ data.resultList[i].statnId + '\' , \''
										+ data.resultList[i].statnNM +'\')"';
									temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn">';
								}
				 				*/
								/* 210.96.13.90서버 용 */
								/* 2020.10.22 지행역 열차정보 삭제 */
								/*
								if (data.resultList[i].existYn2 == 'Y') {
									temp += '<img src="./images/subway/subway.png" alt="지하철" class="subwayExistYn">';
								}
								*/

								if (data.resultList[i].existYn2 == 'Y') {
									temp += '<img onclick="popupSubwayInfo(\'' + data.resultList[i].subwayId + '\' , \''
										+ data.resultList[i].statnId + '\' , \''
										+ data.resultList[i].statnNM +'\')"';
									temp += 'src="./images/subway/subway.png" alt="지하철" class="subwayExistYn">';
								}

								temp += '<img src="./images/bus/favorite.png" alt="즐겨찾기" class="routeBookMark" onclick="setBookMark(\''
										+ data.resultList[i].statnNM + '\' , \''
										+ data.resultList[i].statnId + '\' , \''
										+ data.resultList[i].subwayId
										+ '\' , \'SUBWAY\')"></div>';
								temp += '</div>';
							}
						} else {
							temp += '<div style="margin:8 14px;">검색 결과가 없습니다.</div>';
						}
						$('#searchResult').html(temp);

						self.location.hash=trainLine;

						$("#subwayRefresh").click(
								function() {
									makeSearchLineHosun(subwayId, trainLine);
								});

					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

function getHosun(subwayId) {
	var returnValue = '';
	if(subwayId == '1001') {
		returnValue = '1호선';
	} else if(subwayId == '1002') {
		returnValue = '2호선';
	} else if(subwayId == '1003') {
		returnValue = '3호선';
	} else if(subwayId == '1004') {
		returnValue = '4호선';
	} else if(subwayId == '1005') {
		returnValue = '5호선';
	} else if(subwayId == '1006') {
		returnValue = '6호선';
	} else if(subwayId == '1007') {
		returnValue = '7호선';
	} else if(subwayId == '1008') {
		returnValue = '8호선';
	} else if(subwayId == '1009') {
		returnValue = '9호선';
	} 
	/*
	else if(subwayId == '1061') {
		returnValue = '중앙선';
	} 
	*/
	else if(subwayId == '1063') {
		returnValue = '경의중앙';
	} else if(subwayId == '1065') {
		returnValue = '공항철도';
	} else if(subwayId == '1067') {
		returnValue = '경춘선';
	} else if(subwayId == '1069') {
		returnValue = '인천1호선';
	
	// 2020.10.23 삭제
	/*	
	} else if(subwayId == '1071') {
		returnValue = '수인선';
	} else if(subwayId == '1075') {
		returnValue = '분당선';
	*/
	// 2020.10.23 수인분당선 추가
	} else if(subwayId == '1100') {
		returnValue = '수인분당선';
	} else if(subwayId == '1077') {
		returnValue = '신분당선';
	} else if(subwayId == '1092') {
		returnValue = '우이신설';
	}

	return returnValue;
}

function popupSubwayInfo(subwayId, statnId, statnNm, updnAt) {
	var req = {
			"subwayId" : subwayId,
			"statnId" : statnId
		};
		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : '/mBus/subway/getStatnTrainInfo.bms',
			data : req,
			success : function(data) {
				if(data.error.errorCode == '0000') {
					var pageSize = getWindowSize();

					var windowWidth  = pageSize[0];
					var windowHeight = pageSize[1];

					var temp = '';

					if (data.resultList != null) {
						
						temp += '<div class="bg"> </div>';
						temp += '<div id="layerOut" class="layerOut">';
						temp += '<div id="layerIn" class="layerIn">';

						temp += '<div class="routeInfo">';
						temp += '<table>';
						temp += '<tr> <td class="routeNm2" colspan="4">[' + getHosun(subwayId)+ ']&nbsp;&nbsp;' + statnNm + '역 열차정보</td> </tr>';
						//temp += '<tr> <td class="dept1"> 구분 </td><td class="dept2"> 열차번호 </td><td class="dept3"> 열차상태 </td><td class="dept4"> 목적지 </td></tr>';
						// 2020.10.23 변경
						temp += '<tr> <td class="dept2"> 열차번호 </td><td class="dept3"> 열차상태 </td><td class="dept4"> 목적지 </td></tr>';
						
						for ( var i = 0; i < data.resultList.length; i++) {
							
							if(updnAt==1&&subwayId!=1092){
								if(data.resultList[i].updnLine!="하행"){
									temp += '<tr>';
									
									// 2020.10.23 삭제
									//temp += '<td class="cont1">' + data.resultList[i].updnLine + '</td>';
									temp += '<td class="cont2">' + data.resultList[i].trainNo + '</td>';
									temp += '<td class="cont3">' + data.resultList[i].opratKndNm + '</td>';
									if (data.resultList[i].opratKnd == 2) {
										temp += '<td class="cont4"><font color="red">' + data.resultList[i].trainLineNm + '행(급행)</font></td>';
									} else {
										temp += '<td class="cont4">' + data.resultList[i].trainLineNm + '행</td>';
									}
									temp += '</tr>';
								}
							}else if(updnAt==2&&subwayId!=1092){
								if(data.resultList[i].updnLine!="상행"){
									temp += '<tr>';
									// 2020.10.23 삭제
									//temp += '<td class="cont1">' + data.resultList[i].updnLine + '</td>';
									temp += '<td class="cont2">' + data.resultList[i].trainNo + '</td>';
									temp += '<td class="cont3">' + data.resultList[i].opratKndNm + '</td>';
									if (data.resultList[i].opratKnd == 2) {
										temp += '<td class="cont4"><font color="red">' + data.resultList[i].trainLineNm + '행(급행)</font></td>';
									} else {
										temp += '<td class="cont4">' + data.resultList[i].trainLineNm + '행</td>';
									}
									temp += '</tr>';
								}
							}else{
								temp += '<tr>';
								// 2020.10.23 삭제
								//temp += '<td class="cont1">' + data.resultList[i].updnLine + '</td>';
								temp += '<td class="cont2">' + data.resultList[i].trainNo + '</td>';
								temp += '<td class="cont3">' + data.resultList[i].opratKndNm + '</td>';
								if (data.resultList[i].opratKnd == 2) {
									temp += '<td class="cont4"><font color="red">' + data.resultList[i].trainLineNm + '행(급행)</font></td>';
								} else {
									temp += '<td class="cont4">' + data.resultList[i].trainLineNm + '행</td>';
								}
								temp += '</tr>';
							}
						
						}
						temp += '</table>';
						temp += '</div>';

						temp += '<div id="closeLayer" class="closeLayer"> <div class="close">  닫기  </div> </div>';

						temp += '</div>';
						temp += '</div>';
					} else {
						temp += '<div class="bg"> </div>';
						temp += '<div id="layerOut" class="layerOut">';
						temp += '<div id="layerIn" class="layerIn">';

						temp += '<div class="busArvlAsStNm">해당 정보가 없습니다. <br> 현재 화면의 닫기 버튼을 클릭 후, 검색결과 우측 상단의 refresh아이콘을 클릭하시기 바랍니다.</div>';
						temp += '<div style="border-bottom:1px solid #eee;"></div>';
						temp += '<div id="closeLayer" class="closeLayer"> <div class="close">  닫기  </div> </div>';

						temp += '</div>';
						temp += '</div>';
					}

					$("#subwayArvlInfoByRouteLayer").html(temp);

					$("#subwayArvlInfoByRouteLayer").fadeIn();
					$("#subwayArvlInfoByRouteLayer").css('height',
							document.body.clientHeight);
					$('#closeLayer').click(function() {
						$('#subwayArvlInfoByRouteLayer').fadeOut();
						return false;
					});

					$("#layerOut").css("width", windowWidth - 20);
					$("#layerIn").css("width", windowWidth - 26);

					var position = $('#layerOut');
					if (position.outerHeight() < windowHeight) {
//						if (isApple()) {
//							position.css('top', ($(window).scrollTop())
//									+ ((windowHeight - position
//											.outerHeight()) / 2) + 'px');
//						} else {
//							position.css('top', (windowHeight - position
//									.outerHeight())
//									/ 2 + 'px');
//						}
						position.css('top', (windowHeight - position
								.outerHeight())
								/ 2 + 'px');
					} else {
						position.css('top', '0px');
					}

					if (position.outerWidth() < $(document).width())
						position.css('margin-left', '-'
								+ position.outerWidth() / 2 + 'px');
					else
						position.css('left', '0px');

				} else {
					alert(data.error.errorMessage);
				}
			},
			error : function() {
				alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
			}
		});
}

function makeSearchResultLetter(statnNm) {
	var req = {
		"statnNm" : statnNm
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getStatnByFirstLetter.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

					    //만약 사용자가 지하철 호선을 먼저 선택했을 경우, 방면 정보를 지움.
                        $('#choiceLine').empty();

						var pageSize = getWindowSize();
						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];
                        var temp = '';
                        temp += '<div class="title"> 검색결과 </div>';
						if (data.resultList != null) {
							if (data.resultList.length == 1) {
								makeArvlSubway(data.resultList[0].subwayId
										, data.resultList[0].statnId
										, data.resultList[0].statnNm
										, 'arsIdList' );
							} else {
								for ( var i = 0; i < data.resultList.length; i++) {
									temp += '<div style="clear:both;" class="stnm">';
									temp += '<div style="float:left;" class="ln'
											+ data.resultList[i].subwayId
											+ '" onclick="makeArvlSubway(\''
											+ data.resultList[i].subwayId + '\',\''
											+ data.resultList[i].statnId + '\',\''
											+ data.resultList[i].statnNm
											+ '\' , \'arsIdList\');javascript:window.scrollTo(0,0);">['
											+ data.resultList[i].subwayNm + ']'
											+ data.resultList[i].statnNm + '</div>';
									temp += '<div style="float:right;"><img src="./images/bus/favorite.png" alt="즐겨찾기" class="routeBookMark" onclick="setBookMark(\''
											+ data.resultList[i].statnNm
											+ '\' , \''
											+ data.resultList[i].statnId
											+ '\' , \''
											+ data.resultList[i].subwayId
											+ '\' , \'SUBWAY\')"></div>';
									temp += '</div>';
								}
							}
						} else {
							temp += '<div style="margin:8 14px;">검색 결과가 없습니다.</div>';
						}
						$('#searchResult').html(temp);
					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

function makeSearchResult(statnNm) {
	var req = {
		"statnNm" : statnNm
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : 'http://m.bus.go.kr/mBus/subway/getStatnByNm.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

					    //만약 사용자가 지하철 호선을 먼저 선택했을 경우, 방면 정보를 지움.
                        $('#choiceLine').empty();

						var pageSize = getWindowSize();
						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];
                        var temp = '';
                        temp += '<div class="title"> 검색결과 </div>';
						if (data.resultList != null) {
							if (data.resultList.length == 1) {
								makeArvlSubway(data.resultList[0].subwayId
										, data.resultList[0].statnId
										, data.resultList[0].statnNm
										, 'arsIdList' );
							} else {
								for ( var i = 0; i < data.resultList.length; i++) {
									temp += '<div style="clear:both;" class="stnm">';
									temp += '<div style="float:left;" class="ln'
											+ data.resultList[i].subwayId
											+ '" onclick="makeArvlSubway(\''
											+ data.resultList[i].subwayId + '\',\''
											+ data.resultList[i].statnId + '\',\''
											+ data.resultList[i].statnNm
											+ '\' , \'arsIdList\');javascript:window.scrollTo(0,0);">['
											+ data.resultList[i].subwayNm + ']'
											+ data.resultList[i].statnNm + '</div>';
									temp += '<div style="float:right;"><img src="./images/bus/favorite.png" alt="즐겨찾기" class="routeBookMark" onclick="setBookMark(\''
											+ data.resultList[i].statnNm
											+ '\' , \''
											+ data.resultList[i].statnId
											+ '\' , \''
											+ data.resultList[i].subwayId
											+ '\' , \'SUBWAY\')"></div>';
									temp += '</div>';
								}
							}
						} else {
							temp += '<div style="margin:8 14px;">검색 결과가 없습니다.</div>';
						}
						$('#searchResult').html(temp);
					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

//지하철노선도 만드는 함수
function makeSubwayMap(val){

    var pageSize = getWindowSize();
    var windowWidth = pageSize[0];
    var windowHeight = pageSize[1];

    var temp = '';

//    temp += '<div class="wrapSelect">';
//	temp += '<div class="align">';
//	temp += '<span class="selectTxt"> 지하철 노선 선택 </span>';
//    temp += '<span class="selectLine">';
//    temp += '<select title="전체노선" name="lineSelect" class="lineSelect" id="lineSelect" >';
//        if(val == "0000"){
//            temp += '<option selected value="0000">전체노선</option>';
//        }else{
//            temp += '<option value="0000">전체노선</option>';
//        }
//        if(val == "1001"){
//            temp += '<option selected value="1001">1호선</option>';
//        }else {
//            temp += '<option value="1001">1호선</option>';
//        }
//        if(val == "1002"){
//            temp +=  '<option selected value="1002">2호선</option>'
//        }else {
//            temp +=  '<option value="1002">2호선</option>'
//        }
//        if(val == "1003"){
//            temp += '<option selected value="1003">3호선</option>'
//        }else {
//            temp += '<option value="1003">3호선</option>'
//        }
//        if(val == "1004"){
//            temp += '<option selected value="1004">4호선</option>'
//        }else {
//            temp += '<option value="1004">4호선</option>'
//        }
//        if(val == "1005"){
//            temp += '<option selected value="1005">5호선</option>'
//        }else {
//            temp += '<option value="1005">5호선</option>'
//        }
//        if(val == "1006"){
//            temp += '<option selected value="1006">6호선</option>'
//        }else {
//            temp += '<option value="1006">6호선</option>'
//        }
//        if(val == "1007"){
//            temp += '<option selected value="1007">7호선</option>'
//        }else {
//            temp += '<option value="1007">7호선</option>'
//        }
//        if(val == "1008"){
//            temp += '<option selected value="1008">8호선</option>'
//        }else {
//            temp += '<option value="1008">8호선</option>'
//        }
//        if(val == "1009"){
//            temp += '<option selected value="1009">9호선</option>'
//        }else {
//            temp += '<option value="1009">9호선</option>'
//        }
//        /*
//        if(val == "1061"){
//            temp += '<option selected value="1061">중앙선</option>'
//        }else {
//            temp += '<option value="1061">중앙선</option>'
//        }
//        */
//        if(val == "1063"){
//            temp += '<option selected value="1063">경의중앙</option>'
//        }else {
//            temp += '<option value="1063">경의중앙</option>'
//        }
//        if(val == "1065"){
//            temp += '<option selected value="1065">공항철도</option>'
//        }else {
//            temp += '<option value="1065">공항철도</option>'
//        }
//        if(val == "1067"){
//            temp += '<option selected value="1067">경춘선</option>'
//        }else {
//            temp += '<option value="1067">경춘선</option>'
//        }
//        if(val == "1069"){
//            temp += '<option selected value="1069">인천1호선</option>'
//        }else {
//            temp += '<option value="1069">인천1호선</option>'
//        }
//        if(val == "1071"){
//            temp += '<option selected value="1071">수인선</option>'
//        }else {
//            temp += '<option value="1071">수인선</option>'
//        }
//        if(val == "1075"){
//            temp += '<option selected value="1075">분당선</option>'
//        }else {
//            temp += '<option value="1075">분당선</option>'
//        }
//        if(val == "1077"){
//            temp += '<option selected value="1077">신분당선</option>'
//        }else {
//            temp += '<option value="1077">신분당선</option>'
//        }
//    temp += '</select>';
//	temp += '</span>';
//	temp += '</div>';
//	temp += '</div>';
//	temp += '</div>';
//
//    temp += '<div class="svgLine" style="text-align: center; margin-left: -1px; margin-top: -1px">';
//    if(val =="0000"){
//        temp += '<img class="subwayImg" src="./images/subway/subway_map.png" style="width:100%">';
//    }else if(val == "1001"){
//        temp += '<embed src="./svg/subway_1001.svg" height="860" width="300" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1002"){
//        temp += '<embed src="./svg/subway_1002.svg" height="610" width="330" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1003"){
//        temp += '<embed src="./svg/subway_1003.svg" height="500" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1004"){
//        temp += '<embed src="./svg/subway_1004.svg" height="490" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1005"){
//        temp += '<embed src="./svg/subway_1005.svg" height="460" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1006"){
//        temp += '<embed src="./svg/subway_1006.svg" height="370" width="350" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1007"){
//        temp += '<embed src="./svg/subway_1007.svg" height="570" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1008"){
//        temp += '<embed src="./svg/subway_1008.svg" height="200" width="350" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1009"){
//        temp += '<embed src="./svg/subway_1009.svg" height="400" width="345" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }
//    /*
//    else if(val == "1061"){
//        temp += '<embed src="./svg/subway_1061.svg" height="400" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }
//    */
//    else if(val == "1063"){
//        temp += '<embed src="./svg/subway_1063.svg" height="580" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1065"){
//        temp += '<embed src="./svg/subway_1065.svg" height="200" width="320" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1067"){
//        temp += '<embed src="./svg/subway_1067.svg" height="190" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1069"){
//        temp += '<embed src="./svg/subway_1069.svg" height="300" width="450" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1071"){
//        temp += '<embed src="./svg/subway_1071.svg" height="500" width="400" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1075"){
//       temp += '<embed src="./svg/subway_1075.svg" height="500" width="400" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else if(val == "1077"){
//       temp += '<embed src="./svg/subway_1077.svg" height="200" width="340" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install" />';
//    }else {
//        temp += '<img class="subwayImg" src="./images/subway/subway_map.png" style="width:100%">';
//    }
//    temp += '</div>';
//
    
    temp += '<img class="subwayImg" src="./images/subway/subway_map.png" style="width:100%">';
    $('#subwayMapImg').html(temp);

    $('#lineSelect').change(
        function() {
            var line = $("#lineSelect option:selected").val();
            makeSubwayMap(line);
        });

    $('.subwayMapImg').css("width", windowWidth);


}
