function setCookie( name, value, expiredays ) { 
	 var todayDate = new Date(); 
	 if (expiredays == null)
	  expiredays = 7;
	// 쿠키가 저장될 기간을 설정 하루면 1을 입력. 
	 todayDate.setDate( todayDate.getDate() + expiredays );
	 
	 if (value == null) {
		 value = '0';
	 }
	 document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
/*
function makeArvlSubway(subwayId, statnId, statnNm, headerType, tabType) {
	var req = {
		"subwayId" : subwayId,
		"statnId" : statnId
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getArvlByStatn.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {
						var pageSize = getWindowSize();

						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];

						makeHeader(headerType);

						var nextHeaderType = '';

						if (headerType == 'bookmarkSubway') {
							nextHeaderType = 'bookmarkSubwayTho';
						} else if (headerType == 'arsIdList') {
							nextHeaderType = 'arvl';
						}

						var temp = '';
						
						//statnFnm : 출발역명, statnTnm : 다음역명, subwayList : 지하철 리스트
						var arrLineLink = data.resultList2[0].subwayList.split(",");
						var arrEachLine = new Array();

						var color = '';
						var intSubwayId = parseInt(subwayId);
						
						switch(intSubwayId)
						{
							case 1001:
								color = '#2A4FAD';
							break;
							case 1002:
								color = '#0D883F';
							break;
							case 1003:
								color = '#E44B1E';
							break;
							case 1004:
								color = '#3C7DDF';
							break;
							case 1005:
								color = '#8C3EDD';
							break;
							case 1006:
								color = '#C07316';
							break;
							case 1007:
								color = '#566612';
							break;
							case 1008:
								color = '#CB33AD';
							break;
							case 1009:
								color = '#C2A917';
							break;
							case 1065:
								color = '#116E9F';
							break;
							case 1075:
								color = '#E9A600';
							break;
							default:
							break;
						}

						if (data.resultList != null) {

							var pageSize = getWindowSize();

							var windowWidth = pageSize[0];

							var temp = '';
							
	                   		if(arrLineLink.length > 2){
	                   			for(var i=0; i<arrLineLink.length - 1; i++){
	                   				arrEachLine = arrLineLink[i].split(":");
									temp += '<div class="tab2">';
									temp += '<ul>';
									if (arrEachLine[0] == subwayId) {
										temp += '<li class="thdTab2 onTab2"> ' + getHosun(arrEachLine[0]) + '</li>';
									} else {
										temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
									}
		
									if (arrLineLink.length - 1 > 1) {
									i++;
										arrEachLine = arrLineLink[i].split(":");
										if (arrEachLine[0] == subwayId) {
											temp += '<li class="thdTab2 onTab2"> ' + getHosun(arrEachLine[0]) + ' </li>';
										} else {
											temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
										}
									}
		
									if (arrLineLink.length - 1 > 2) {
										i++;
										arrEachLine = arrLineLink[i].split(":");
										if (arrEachLine[0] == subwayId) {
											temp += '<li class="thdTab2 onTab2"> ' + getHosun(arrEachLine[0]) + ' </li>';
										} else {
											temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
										}
									}
									temp += '</ul>';
									temp += '</div>';
	                   			}
	                   		}
							
							temp += '<div class="arvlTitle">';
							temp += '<div class="title" style="color:' + color + '">' + '[' + getHosun(subwayId) + '] ' + statnNm + '역';
							temp += '<img style="position:relative;left:8px;top:4px" id="routeBookMark2" src="./images/bus/favorite.png" alt="즐겨찾기"></div>';
							temp += '<div class="title2">'; 
							temp += '<table><tr>';
							temp += '<td class="directionL">';
							temp += '<font id="statnFnm" style="color:' + color + '">' +  data.resultList2[0].statnFnm + '</font>';
							temp += '<font style="color:' + color + '">&nbsp;<< </font>';
							temp += '</td>';
							temp += '<td>';
							temp += '<img style="position:relative;top:4px;width:18px;height:18px;" id="refresh" src="./images/subway/refresh.png" alt="Refresh">';
							temp += '</td>';
							temp += '<td class="directionR">';
							temp += '<font style="color:' + color + '"> >>&nbsp;</font>'; 
							temp += '<font id="statnTnm" style="color:' + color + '">' + data.resultList2[0].statnTnm + '</font>';
							temp += '</td>';
							temp += '</tr></table>';
							temp += '</div>';
							temp += '</div>';
							temp += '<div class="arvl">';
							
						    var oddCnt = 0;
						    
							for ( var i = 0; i < data.resultList.length; i++) {
								
								if (i == 0) {
									temp += '<table>';
									temp += '<div class="arvlTitle2">';
									temp += ''+ data.resultList[i].updnLine + '방면';
							        var updnLineNm = data.resultList[i].updnLine;
							        if (updnLineNm.match('내선') != null) {
							        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
							        } 
							        if (updnLineNm.match('외선') != null) {
							        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
							        }
									temp += '</div>';
									temp += '<tr class="tTitle">';
									temp += '<td class="direction">방면 </td>';
									temp += '<td class="arvlTime">도착예정시간 </td>';
									temp += '</tr>';
								}
								
								
						    	if (i > 0) {
						    		var strNmBefore = data.resultList[i-1].updnLine;
						    		var strNm = data.resultList[i].updnLine;
					    			if (strNm != strNmBefore) {
					    				oddCnt++;
					    				if (oddCnt%2 == 1) {
											temp += '<table>';
											temp += '<div class="arvlTitle2">';
											temp += ''+ data.resultList[i].updnLine + '방면';
									        var updnLineNm = data.resultList[i].updnLine;
									        if (updnLineNm.match('내선') != null) {
									        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
									        } 
									        if (updnLineNm.match('외선') != null) {
									        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
									        }
											temp += '</div>';
											temp += '<tr class="tTitle">';
											temp += '<td class="direction">방면 </td>';
											temp += '<td class="arvlTime">도착예정시간 </td>';
											temp += '</tr>';
											
					    				} else {
											temp += '<table>';
											temp += '<div class="arvlTitle2">';
											temp += ''+ data.resultList[i].updnLine + '방면';
									        var updnLineNm = data.resultList[i].updnLine;
									        if (updnLineNm.match('내선') != null) {
									        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
									        } 
									        if (updnLineNm.match('외선') != null) {
									        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
									        }
											temp += '</div>';
											temp += '<tr class="tTitle">';
											temp += '<td class="direction">방면 </td>';
											temp += '<td class="arvlTime">도착예정시간 </td>';
											temp += '</tr>';
					    				}
					    			}
						    	}
								
								temp += '<tr>';
								temp += '<td class="upLineAlign">';
								temp += '<div class="arvlCont">'
								temp += '<font style="color:' + color + '">' + data.resultList[i].trainLineNm + '</font></div>';
								temp += '</td>';
								temp += '<td class="dnLineAlign">';
								
								/* m.bus.go.kr용
								temp += '<div class="arvlCont">';
								temp += '<font style="color:' + color + '">' + data.resultList[i].firstArvlMsg + '</font></div>';
								temp += '<div class="arvlCont">';
								temp += '<font style="color:' + color + '">' +data.resultList[i].secondArvlMsg + '</font></div>';
								temp += '</td>';
								*/
								/* 210.96.13.90서버 용 
								temp += '<div class="arvlCont">';
								temp += '<font style="color:' + color + '">' + data.resultList[i].firstArvlMsg2 + '</font></div>';
								temp += '<div class="arvlCont">';
								temp += '<font style="color:' + color + '">' +data.resultList[i].secondArvlMsg2 + '</font></div>';
								
								temp += '</td>';
								temp += '</tr>';
							}
							temp += '</table>';
							temp += '</div>';
						} else {
							temp += '<div class="arvlTitle">';
							temp += '<div style="padding:8px 14px;"> 열차 도착 정보가 없습니다. </div>';
							temp += '</div>';
						}

						temp += '<div class="StanmInfo">';

						temp += '<div class="twoTab">';
						temp += '<div class="planMap">';
						temp += '<div id="stinfo" class="viewPlanMap"> 역사정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '<div class="twoTab">';
						temp += '<div class="exitNum">';
						temp += '<div id="feinfo" class="viewExitNum"> 첫차/막차정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '</div>';

						temp += '<div class="StanmInfo">';

						temp += '<div class="twoTab">';
						temp += '<div class="planMap">';
						temp += '<div id="viewPlanMap" class="viewPlanMap"> 운행계획정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '<div class="twoTab">';
						temp += '<div class="exitNum">';
						temp += '<div id="viewExitNum" class="viewExitNum"> 출구정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '</div>';

						$('#busArvlInfo').html(temp);

						$("#viewPlanMap").click(
								function() {
									makeArvlPlanMap(statnId, subwayId, 1,
											statnNm, nextHeaderType);
								});

						$("#viewExitNum").click(
								function() {
									makeExitBusInfo(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$("#stinfo").click(
								function() {
									makeStationInfo(statnId, subwayId, statnNm,
											nextHeaderType);
								});

						$("#feinfo").click(
								function() {
									makeFirstEndTimeTable(statnId, subwayId,
											statnNm, nextHeaderType);
								});
						
						$("#refresh").click(
								function() {
									makeArvlSubway(subwayId, statnId, statnNm, headerType);
								});
						
						$("#statnFnm").click(
								function() {
									makeArvlSubway(subwayId, data.resultList2[0].statnFid, data.resultList2[0].statnFnm, headerType);
								});
						
						$("#statnTnm").click(
								function() {
									makeArvlSubway(subwayId, data.resultList2[0].statnTid, data.resultList2[0].statnTnm, headerType);
								});
						
						$("#routeBookMark2").click(
								function() {
									setBookMark( statnNm, statnId, subwayId ,"SUBWAY");
								});

						if ($('#arsIdList').css("display") != 'none') {
							$('#arsIdList').hide();
						}

						if ($('#busArvlInfo').css("display") != 'block') {
							$('#busArvlInfo').show();
						}

						$('.thdTab2').css("width", (windowWidth - 2) / (arrLineLink.length - 1));
						
						setCookie("arrLineLinkLength", (arrLineLink.length - 1));
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

// 변경 적용 (방면정보삭제)
function makeArvlSubway(subwayId, statnId, statnNm, headerType, tabType) {
    //var img_url = "http://210.96.13.90/"
    var img_url = "http://bus.go.kr:9595/"
	var req = {
		"subwayId" : subwayId,
		"statnId" : statnId
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url: 'https://crossorigin.me/http://m.bus.go.kr/mBus/subway/getArvlByInfo.bms',

				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {
						var pageSize = getWindowSize();

						var windowWidth  = pageSize[0];
						var windowHeight = pageSize[1];

						makeHeader(headerType);

						var nextHeaderType = '';

						if (headerType == 'bookmarkSubway') {
							nextHeaderType = 'bookmarkSubwayTho';
						} else if (headerType == 'arsIdList') {
							nextHeaderType = 'arvl';
						}

						var temp = '';
						
						//statnFnm : 출발역명, statnTnm : 다음역명, subwayList : 지하철 리스트
						var arrLineLink = data.resultList2[0].subwayList.split(",");
						var arrEachLine = new Array();

						var color = '';
						var intSubwayId = parseInt(subwayId);
						
						switch(intSubwayId)
						{
							case 1001: color = '#2A4FAD'; break;
							case 1002: color = '#0D883F'; break;
							case 1003: color = '#E44B1E'; break;
							case 1004: color = '#3C7DDF'; break;
							case 1005: color = '#8C3EDD'; break;
							case 1006: color = '#C07316'; break;
							case 1007: color = '#566612'; break;
							case 1008: color = '#CB33AD'; break;
							case 1009: color = '#C2A917'; break;
							//case 1061: color = '#00CED1'; break;
							case 1063: color = '#20B2AA'; break;
							case 1065: color = '#4169E1'; break;
							case 1067: color = '#32CD32'; break;
							case 1075: color = '#D4A017'; break;
							case 1077: color = '#CC1559'; break;
							default: break;
						}

							var pageSize = getWindowSize();
							var windowWidth = pageSize[0];
							var temp = '';
							
							
	                   		if(arrLineLink.length > 2){
	                   			for(var i=0; i<arrLineLink.length - 1; i++){
	                   				arrEachLine = arrLineLink[i].split(":");
									temp += '<div class="tab2">';
									temp += '<ul>';
									if (arrEachLine[0] == subwayId) {
										temp += '<li class="thdTab2 onTab2">' + getHosun(arrEachLine[0]) + '</li>';
									} else {
										temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
									}
									
									if (arrLineLink.length - 1 > 1) {
									i++;
										arrEachLine = arrLineLink[i].split(":");
										if (arrEachLine[0] == subwayId) {
											temp += '<li class="thdTab2 onTab2"> ' + getHosun(arrEachLine[0]) + ' </li>';
										} else {
											temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
										}
									}
									
									if (arrLineLink.length - 1 > 2) {
										i++;
										arrEachLine = arrLineLink[i].split(":");
										if (arrEachLine[0] == subwayId) {
											temp += '<li class="thdTab2 onTab2"> ' + getHosun(arrEachLine[0]) + ' </li>';
										} else {
											temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
										}
									}
									
									if (arrLineLink.length - 1 > 3) {
										i++;
										arrEachLine = arrLineLink[i].split(":");
										if (arrEachLine[0] == subwayId) {
											temp += '<li class="thdTab2 onTab2"> ' + getHosun(arrEachLine[0]) + ' </li>';
										} else {
											temp += '<li class="thdTab2 offTab2" onclick="makeArvlSubway(\'' + arrEachLine[0]  + '\' , \'' + arrEachLine[1]  + '\' , \'' + statnNm  + '\' , \'' + headerType + '\' )"> ' + getHosun(arrEachLine[0]) + ' </li>';
										}
									}
									
									temp += '</ul>';
									temp += '</div>';
	                   			}
	                   		}
							
							temp += '<div class="arvlTitle">';
							temp += '<div class="title" style="color:' + color + '">' + '[' + getHosun(subwayId) + '] ' + statnNm + '역';
							temp += '<img style="position:relative;left:8px;top:4px" id="routeBookMark2" src="./images/bus/favorite.png" alt="즐겨찾기"></div>';
							temp += '<div class="title2">'; 
							temp += '<table><tr>';
							temp += '<td class="directionL">';
							temp += '<font id="statnFnm" style="color:' + color + '">' +  data.resultList2[0].statnFnm + '</font>';
							temp += '<font style="color:' + color + '">&nbsp;<< </font>';
							temp += '</td>';
							temp += '<td>';
							temp += '<img style="position:relative;top:4px;width:18px;height:18px;" id="refresh" src="./images/subway/refresh.png" alt="Refresh">';
							temp += '</td>';
							temp += '<td class="directionR">';
							temp += '<font style="color:' + color + '"> >>&nbsp;</font>'; 
							temp += '<font id="statnTnm" style="color:' + color + '">' + data.resultList2[0].statnTnm + '</font>';
							temp += '</td>';
							temp += '</tr></table>';
							temp += '</div>';
							temp += '</div>';
							
						//if (data.resultList != null) {
						//    							
						//	temp += '<div class="arvl">';
						//	
						//	temp += '<table>';
						//	//temp += '<div class="arvlTitle2">';
                        //
						//	
						//	temp += '<tr class="tTitle">';
						//	temp += '<td class="direction">방면 </td>';
						//	temp += '<td class="arvlTime">도착예정시간 </td>';
						//	temp += '</tr>';
						//	
						//    var oddCnt = 0;
						//	for ( var i = 0; i < data.resultList.length; i++) {
						//		/*
						//		if (i == 0) {
						//			temp += '<table>';
						//			temp += '<div class="arvlTitle2">';
						//			
						//			//temp += ''+ data.resultList[i].updnLine + '방면';
						//	        var updnLineNm = data.resultList[i].updnLine;
						//	        /*
						//	        if (updnLineNm.match('내선') != null) {
						//	        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
						//	        } 
						//	        if (updnLineNm.match('외선') != null) {
						//	        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
						//	        }
						//	        
						//			temp += '</div>';
						//			temp += '<tr class="tTitle">';
						//			temp += '<td class="direction">방면 </td>';
						//			temp += '<td class="arvlTime">도착예정시간 </td>';
						//			temp += '</tr>';
						//		}
						//		
						//		
						//    	if (i > 0) {
						//    		var strNmBefore = data.resultList[i-1].updnLine;
						//    		var strNm = data.resultList[i].updnLine;
					    //			if (strNm != strNmBefore) {
					    //				oddCnt++;
					    //				if (oddCnt%2 == 1) {
						//					temp += '<table>';
						//					temp += '<div class="arvlTitle2">';
						//					
						//					//temp += ''+ data.resultList[i].updnLine + '방면';
						//			        var updnLineNm = data.resultList[i].updnLine;
						//			        /*
						//			        if (updnLineNm.match('내선') != null) {
						//			        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
						//			        } 
						//			        if (updnLineNm.match('외선') != null) {
						//			        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
						//			        }
						//			        
						//					temp += '</div>';
						//					temp += '<tr class="tTitle">';
						//					temp += '<td class="direction">방면 </td>';
						//					temp += '<td class="arvlTime">도착예정시간 </td>';
						//					temp += '</tr>';
						//					
					    //				} else {
						//					temp += '<table>';
						//					temp += '<div class="arvlTitle2">';
						//					//temp += ''+ data.resultList[i].updnLine + '방면';
						//			        var updnLineNm = data.resultList[i].updnLine;
						//			        /*
						//			        if (updnLineNm.match('내선') != null) {
						//			        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-clock.gif" alt="Refresh">';
						//			        } 
						//			        if (updnLineNm.match('외선') != null) {
						//			        	temp += '<img style="position:relative;left:4px;top:6px;width:18px;height:18px;" src="./images/subway/icon-unclock.gif" alt="Refresh">';
						//			        }
						//			        
						//					temp += '</div>';
						//					temp += '<tr class="tTitle">';
						//					temp += '<td class="direction">방면 </td>';
						//					temp += '<td class="arvlTime">도착예정시간 </td>';
						//					temp += '</tr>';
					    //				}
					    //			}
						//    	}
						//		*/
						//		temp += '<tr>';
						//		temp += '<td class="upLineAlign">';
						//		temp += '<div class="arvlCont">'
						//		temp += '<font style="color:' + color + '">' + data.resultList[i].trainLineNm + '</font></div>';
						//		temp += '</td>';
						//		temp += '<td class="dnLineAlign">';
						//		
						//		/* m.bus.go.kr용
						//		temp += '<div class="arvlCont">';
						//		temp += '<font style="color:' + color + '">' + data.resultList[i].firstArvlMsg + '</font></div>';
						//		temp += '<div class="arvlCont">';
						//		temp += '<font style="color:' + color + '">' +data.resultList[i].secondArvlMsg + '</font></div>';
						//		temp += '</td>';
						//		*/
						//		/* 210.96.13.90서버 용 */
						//		temp += '<div class="arvlCont">';
						//		temp += '<font style="color:' + color + '">' + data.resultList[i].arvlMsg2 + '</font></div>';
						//		
						//		temp += '</td>';
						//		temp += '</tr>';
						//	}
						//	temp += '</table>';
						//	temp += '</div>';
						//} else {
						//	temp += '<div class="arvlTitle">';
						//	temp += '<div style="padding:8px 14px;"> 열차 도착 정보가 없습니다. </div>';
						//	//temp += '<div style="padding:8px 14px;"><font color="red">서비스 준비중입니다.</font></div>';
						//	temp += '</div>';
						//}
                        //
						//temp += '<div class="StanmInfo">';
                        //
						//temp += '<div class="twoTab">';
						//temp += '<div class="planMap">';
						//temp += '<div id="stinfo" class="viewPlanMap"> 역사정보 </div>';
						//temp += '</div>';
						//temp += '</div>';
                        //
						//temp += '<div class="twoTab">';
						//temp += '<div class="exitNum">';
						//temp += '<div id="feinfo" class="viewExitNum"> 첫차/막차정보 </div>';
						//temp += '</div>';
						//temp += '</div>';
                        //
						//temp += '</div>';
                        //
						//temp += '<div class="StanmInfo">';
                        //
						//temp += '<div class="twoTab">';
						//temp += '<div class="planMap">';
						//temp += '<div id="viewPlanMap" class="viewPlanMap"> 운행계획정보 </div>';
						//temp += '</div>';
						//temp += '</div>';
                        //
						//temp += '<div class="twoTab">';
						//temp += '<div class="exitNum">';
						//temp += '<div id="viewExitNum" class="viewExitNum"> 출구정보 </div>';
						//temp += '</div>';
						//temp += '</div>';
						//temp += '</div>';
						 
						
						/*새로운 UI*/
						if (data.resultList != null) {
						    //temp += data.resultList[2].trainLine;
    						temp += '<div class="new_subArvl">';
                            temp += '<table>';
                            temp += '<tr>';
                            temp += '<th><p><font id="statnFnm" style="color:' + color + '">' +  data.resultList2[0].statnFnm + '</font></p></th>';
                            temp += '<th><p><font id="statnTnm" style="color:' + color + ';font-weight:bold">'+statnNm+'</font></p></th>';
                            temp += '<th><p><font id="statnTnm" style="color:' + color + '"><img id="left_arrow" src="'+img_url+'image/icon/subway_svg/left_arrow.png" width="42" height="8"/>&nbsp;' + data.resultList2[0].statnTnm + '</font></p></th>';
                            temp += '</tr>';
                            var upc = 0;
                            var downc = 0;
                            for ( var j = 0; j < data.resultList.length; j++) {
                                if(data.resultList[j].updnLine == "하행" || data.resultList[j].updnLine == "내선"){
                                    if(upc == 0){
                                        temp += '<td colspan="3">';
                                        temp += '<div class="arvl2">';
                                        temp += '<font color="blue" size="2" style="font-weight:bold">이번열차 : '+data.resultList[j].arvlMsg2+'</font>';
                                        temp += '</br><font style="font-weight:bold">'+data.resultList[j].trainLineNm+'</font>';
                                        if(data.resultList[j].arvlCd == "5"){
                                            temp += '</br><div class="trainImg"><img id="left_arrow" src="'+img_url+'image/icon/new_subway_01_left.jpg" height="25"></img></div>';                 
                                        }else if(data.resultList[j].arvlCd == "3"){
                                            temp += '</br><div class="trainImg"><img id="left_arrow" src="'+img_url+'image/icon/new_subway_02_left.jpg" height="25"></img></div>'; 
                                        }else if(data.resultList[j].arvlCd == "0"){
                                            temp += '</br><div class="trainImg"><img id="left_arrow" src="'+img_url+'image/icon/new_subway_03_left.jpg" height="25"></img></div>'; 
                                        }else if(data.resultList[j].arvlCd == "1"){
                                            temp += '</br><div class="trainImg"><img id="left_arrow" src="'+img_url+'image/icon/new_subway_04_left.jpg" height="25"></img></div>'; 
                                        }else if(data.resultList[j].arvlCd == "2"){
                                            temp += '</br><div class="trainImg"><img id="left_arrow" src="'+img_url+'image/icon/new_subway_05_left.jpg" height="25"></img></div>'; 
                                        }else{
                                            temp += '</br><div class="trainImg"><img id="left_arrow" src="'+img_url+'image/icon/new_subway_empty.jpg" height="25"></img></div>'; 
                                        }  
                                        temp += '</div>';
                                        temp += '</td>';
                                        upc++;
                                    }else if( upc == 1){
                                        temp += '<tr>';
                                        temp += '<td colspan="3"><div class="arvl3">다음열차 : '+data.resultList[j].arvlMsg2+'</br>'+data.resultList[j].trainLineNm+'</div></td>';
                                        temp += '</tr>';
                                        upc++;
                                    }else{
                                    }
                                }
                            }
                            if(upc==0){
                                temp += '<tr>';
                                temp += '<td colspan="3">';
                                temp += '<font color="red" size="2" style="font-weight:bold">　열차 도착정보가 없습니다.</font>';
                                temp += '</td>';
                                temp += '</tr>';
                            }
                            temp += '<tr>';
                            temp += '<th><p><font id="statnFnm" style="color:' + color + '">' +  data.resultList2[0].statnFnm + '</font>&nbsp;<img id="left_arrow" src="'+img_url+'image/icon/subway_svg/right_arrow.png" width="42" height="8"/></p></th>';
                            temp += '<th><p><font id="statnTnm" style="color:' + color + ';font-weight:bold">'+statnNm+'</font></p></th>';
                            temp += '<th><p><font id="statnTnm" style="color:' + color + '">' + data.resultList2[0].statnTnm + '</font></p></th>';
                            temp += '</tr>';
                            for( var k = 0 ; k < data.resultList.length; k++) {
                                if(data.resultList[k].updnLine == "상행" || data.resultList[k].updnLine=="외선"){
                                    if(downc == 0){
                                        temp += '<td colspan="3">';
                                        temp += '<div class="arvl1">';
                                        temp += '<font color="red" size="2" style="font-weight:bold">이번열차 : '+data.resultList[k].arvlMsg2+'</font>';
                                        temp += '</br><font style="font-weight:bold">'+data.resultList[k].trainLineNm+'</font>'      ;  
                                        if(data.resultList[k].arvlCd == "5"){
                                            temp += '</br><div class="trainImg"><img id="right_arrow" src="'+img_url+'image/icon/new_subway_01_right.jpg" height="25"></img></div>';                 
                                        }else if(data.resultList[k].arvlCd == "3"){
                                            temp += '</br><div class="trainImg"><img id="right_arrow" src="'+img_url+'image/icon/new_subway_02_right.jpg" height="25"></img></div>'; 
                                        }else if(data.resultList[k].arvlCd == "0"){
                                            temp += '</br><div class="trainImg"><img id="right_arrow" src="'+img_url+'image/icon/new_subway_03_right.jpg" height="25"></img></div>'; 
                                        }else if(data.resultList[k].arvlCd == "1"){
                                            temp += '</br><div class="trainImg"><img id="right_arrow" src="'+img_url+'image/icon/new_subway_04_right.jpg" height="25"></img></div>'; 
                                        }else if(data.resultList[k].arvlCd == "2"){
                                            temp += '</br><div class="trainImg"><img id="right_arrow" src="'+img_url+'image/icon/new_subway_05_right.jpg" height="25"></img></div>'; 
                                        }else{
                                            temp += '</br><div class="trainImg"><img id="right_arrow" src="'+img_url+'image/icon/new_subway_empty2.jpg" height="25"></img></div>'; 
                                        }  
                                        temp += '</div>';
                                        temp += '</td>';
                                        downc++;
                                    }else if(downc == 1){
                                        temp += '<tr>';
                                        temp += '<td colspan="3"><p>다음열차 : '+data.resultList[k].arvlMsg2+'</br>'+data.resultList[k].trainLineNm+'</p></td>';
                                        temp += '</tr>';
                                        downc++;
                                    }else{
                                    }
                                }
                            }
                            if(downc==0){
                                temp += '<tr>';
                                temp += '<td colspan="3">';
                                temp += '<font color="red" size="2" style="font-weight:bold">　열차 도착정보가 없습니다.</font>';
                                temp += '</td>';
                                temp += '</tr>';
                            }
                            temp += '</table>';
                            temp += '</div>';
						}else{
							temp += '<div class="arvlTitle">';
							temp += '<div style="padding:8px 14px;"> 열차 도착 정보가 없습니다. </div>';
							//temp += '<div style="padding:8px 14px;"><font color="red">서비스 준비중입니다.</font></div>';
							temp += '</div>';
						}
                            
						temp += '<div class="StanmInfo">';

						temp += '<div class="twoTab">';
						temp += '<div class="planMap">';
						temp += '<div id="stinfo" class="viewPlanMap"> 역사정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '<div class="twoTab">';
						temp += '<div class="exitNum">';
						temp += '<div id="feinfo" class="viewExitNum"> 첫차/막차정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '</div>';

						temp += '<div class="StanmInfo">';

						temp += '<div class="twoTab">';
						temp += '<div class="planMap">';
						temp += '<div id="viewPlanMap" class="viewPlanMap"> 운행계획정보 </div>';
						temp += '</div>';
						temp += '</div>';

						temp += '<div class="twoTab">';
						temp += '<div class="exitNum">';
						temp += '<div id="viewExitNum" class="viewExitNum"> 출구정보 </div>';
						temp += '</div>';
						temp += '</div>';
						temp += '</div>';
						/*새로운 UI END*/

						$('#busArvlInfo').html(temp);

						$("#viewPlanMap").click(
								function() {
									makeArvlPlanMap(statnId, subwayId, 1,
											statnNm, nextHeaderType);
								});

						$("#viewExitNum").click(
								function() {
									makeExitBusInfo(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$("#stinfo").click(
								function() {
									makeStationInfo(statnId, subwayId, statnNm,
											nextHeaderType);
								});

						$("#feinfo").click(
								function() {
									makeFirstEndTimeTable(statnId, subwayId,
											statnNm, nextHeaderType);
								});
						
						$("#refresh").click(
								function() {
									makeArvlSubway(subwayId, statnId, statnNm, headerType);
								});
						
						$("#statnFnm").click(
								function() {
								    makeArvlSubway(subwayId, data.resultList2[0].statnFid, data.resultList2[0].statnFnm, headerType);
								});
						
						$("#statnTnm").click(
								function() {
								    makeArvlSubway(subwayId, data.resultList2[0].statnTid, data.resultList2[0].statnTnm, headerType);
								});
						
						$("#routeBookMark2").click(
								function() {
									setBookMark( statnNm, statnId, subwayId ,"SUBWAY");
								});

						if ($('#arsIdList').css("display") != 'none') {
							$('#arsIdList').hide();
						}

						if ($('#busArvlInfo').css("display") != 'block') {
							$('#busArvlInfo').show();
						}
						/*
						if ($('#subwayMapImg').css("display") != 'none') {
						    $('#subwayMapImg').hide();
						}
                        */
						$('.thdTab2').css("width", (windowWidth - 2) / (arrLineLink.length - 1));
						
						setCookie("arrLineLinkLength", (arrLineLink.length - 1));
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
		returnValue = '인천선';
	} else if(subwayId == '1071') {
		returnValue = '수인선';
	} else if(subwayId == '1075') {
		returnValue = '분당선';
	} else if(subwayId == '1077') {
		returnValue = '신분당선';
	} else if(subwayId == '1092') {
		returnValue = '우이신설';
	}
	
	return returnValue;
}

function makeArvlPlanMap(statnId, subwayId, tabType, statnNm, nextHeaderType) {
	var req = {
		"statnId" : statnId,
		"subwayId" : subwayId,
		"tabType" : tabType
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getPlanByStatn.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

						var pageSize = getWindowSize();

						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];

						makeHeader(nextHeaderType);

						var temp = '';

						temp += '<div class="tab">';
						temp += '<ul>';
						if (tabType == 1) {
							temp += '<li class="thdTab onTab" id="weekday"> 평일 </li>';
						} else {
							temp += '<li class="thdTab offTab" id="weekday" onclick="makeArvlPlanMap(\''
									+ statnId
									+ '\',\''
									+ subwayId
									+ '\', 1 ,\'' + statnNm + '\')"> 평일 </li>';
						}

						if (tabType == 2) {
							temp += '<li class="thdTab onTab" id="saturday"> 토요일 </li>';
						} else {
							temp += '<li class="thdTab offTab" id="saturday" onclick="makeArvlPlanMap(\''
									+ statnId
									+ '\',\''
									+ subwayId
									+ '\', 2 ,\'' + statnNm + '\')"> 토요일 </li>';
						}

						if (tabType == 3) {
							temp += '<li class="thdTab onTab" id="sunday"> 일요일 </li>';
						} else {
							temp += '<li class="thdTab offTab" id="sunday" onclick="makeArvlPlanMap(\''
									+ statnId
									+ '\',\''
									+ subwayId
									+ '\', 3 ,\'' + statnNm + '\')"> 일요일 </li>';
						}
						temp += '</ul>';
						temp += '</div>';

						if (data.resultList != null) {
							temp += '<div class="timeTable">';
							temp += '<table>';
							temp += '<tr>';
							temp += '<td class="Time"></td>';
							if(data.resultList[0].updnLine == '상행'
								|| data.resultList[0].updnLine == '하행') {
								temp += '<td class="timeTableTitle">상행</td>';
								temp += '<td class="timeTableTitle">하행</td>';
							} else {
								temp += '<td class="timeTableTitle">내선</td>';
								temp += '<td class="timeTableTitle">외선</td>';
							}
							temp += '</tr>';

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '05') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 05 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '05') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '05') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '06') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 06 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '06') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '06') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '07') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 07 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '07') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '07') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '08') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 08 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '08') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '08') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '09') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 09 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '09') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '09') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '10') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 10 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '10') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '10') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '11') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 11 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '11') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '11') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '12') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 12 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '12') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '12') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '13') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 13 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '13') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '13') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '14') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 14 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '14') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '14') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '15') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 15 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '15') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '15') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '16') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 16 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '16') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '16') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '17') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 17 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '17') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '17') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '18') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 18 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '18') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '18') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '19') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 19 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '19') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '19') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '20') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 20 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '20') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '20') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '21') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 21 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '21') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '21') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '22') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 22 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '22') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '22') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '23') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 23 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '23') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '23') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '24') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 24 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '24') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '24') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '01') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 01 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '01') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '01') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							var isOk = false;
							for ( var i = 0; i < data.resultList.length; i++) {
//								if (data.resultList[i].updnLine == '상행'
//										|| data.resultList[i].updnLine == '하행') {
									if (data.resultList[i].arvlHm.substring(0,
											2) == '02') {
										isOk = true;
									}
//								}
							}

							if (isOk) {
								temp += '<tr>';
								temp += '<td class="Time"> 02 </td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '상행' || data.resultList[i].updnLine == '내선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '02') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '<td class="TimeList">';
								for ( var i = 0; i < data.resultList.length; i++) {
									if (data.resultList[i].updnLine == '하행' || data.resultList[i].updnLine == '외선') {
										if (data.resultList[i].arvlHm
												.substring(0, 2) == '02') {
											temp += data.resultList[i].arvlHm
													//.substring(3, 5)
													.substring(3)
													+ '('
													+ data.resultList[i].statnNm
													+ ')&nbsp;&nbsp;';
										}
									}
								}
								temp += '</td>';

								temp += '</tr>';
							}

							temp += '</table>';
							temp += '</div>';
						} else {
							temp += '<div class="searchResult">';
							temp += '<div class="title">' + statnNm
									+ ' 운행계획정보 </div>';
							temp += '<div class="exitInfo" style="margin:8px 14px;"> 운행계획정보가 없습니다.';
							temp += '</div>';
						}
						$('#busRouteList').html(temp);

						if ($('#busArvlInfo').css("display") != 'none') {
							$('#busArvlInfo').hide();
						}
						if ($('#busRouteList').css("display") != 'block') {
							$('#busRouteList').show();
						}

						$('.thdTab').css("width", (windowWidth - 2) / 3);

					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

function makeExitBusInfo(statnId, statnNm, subwayId, nextHeaderType) {
	var req = {
		"statnId" : statnId
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getBusByStation.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

						var pageSize = getWindowSize();

						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];

						makeHeader(nextHeaderType);

						var temp = '';

						temp += '<div class="tab">';
						temp += '<ul>';
						temp += '<li class="thdTab onTab" id="extBus"> 버스정보 </li>';
						temp += '<li class="thdTab offTab" id="extMap">  주변지도 </li>';
						temp += '<li class="thdTab offTab" id="extInfo">  출구정보 </li>';
						temp += '</ul>';
						temp += '</div>';

						if (data.existYn == 'Y') {
							temp += '<div class="searchResult">';
							temp += '<div class="title">' + statnNm
									+ '역 주변 버스정보</div>';
							temp += '<div class="exitInfo">';
							temp += '<table id="extTable">';
							temp += '<tr>';
							temp += '<td class="exitNum"> 출구번호 </td>';
							temp += '<td class="exitStation"> 정류소 </td>';
							temp += '<td class="exitRoute"> 버스노선 </td>';
							temp += '</tr>';
							temp += '</table>';
							temp += '</div>';

							if (data.extNo1 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo1">';
								for ( var i = 0; i < data.extNo1.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo1[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo1[i].sttnNm + '['
											+ data.extNo1[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo1[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo1[i].rtNm + '</td>';

									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo2 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo2">';
								for ( var i = 0; i < data.extNo2.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo2[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo2[i].sttnNm + '['
											+ data.extNo2[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo2[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo2[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo3 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo3">';
								for ( var i = 0; i < data.extNo3.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo3[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo3[i].sttnNm + '['
											+ data.extNo3[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo3[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo3[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo4 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo4">';
								for ( var i = 0; i < data.extNo4.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo4[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo4[i].sttnNm + '['
											+ data.extNo4[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo4[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo4[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo5 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo5">';
								for ( var i = 0; i < data.extNo5.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo5[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo5[i].sttnNm + '['
											+ data.extNo5[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo5[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo5[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo6 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo6">';
								for ( var i = 0; i < data.extNo6.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo6[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo6[i].sttnNm + '['
											+ data.extNo6[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo6[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo6[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo7 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo7">';
								for ( var i = 0; i < data.extNo7.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo7[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo7[i].sttnNm + '['
											+ data.extNo7[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo7[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo7[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo8 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo8">';
								for ( var i = 0; i < data.extNo8.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo8[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo8[i].sttnNm + '['
											+ data.extNo8[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo8[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo8[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo9 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo9">';
								for ( var i = 0; i < data.extNo9.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo9[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo9[i].sttnNm + '['
											+ data.extNo9[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo9[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo9[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo10 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo10">';
								for ( var i = 0; i < data.extNo10.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo10[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo10[i].sttnNm + '['
											+ data.extNo10[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo10[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo10[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo11 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo11">';
								for ( var i = 0; i < data.extNo11.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo11[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo11[i].sttnNm + '['
											+ data.extNo11[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo11[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo11[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo12 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo12">';
								for ( var i = 0; i < data.extNo12.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo12[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo12[i].sttnNm + '['
											+ data.extNo12[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo12[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo12[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo13 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo13">';
								for ( var i = 0; i < data.extNo13.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo13[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo13[i].sttnNm + '['
											+ data.extNo13[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo13[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo13[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo14 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo14">';
								for ( var i = 0; i < data.extNo14.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo14[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo14[i].sttnNm + '['
											+ data.extNo14[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo14[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo14[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo15 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo15">';
								for ( var i = 0; i < data.extNo15.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo15[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo15[i].sttnNm + '['
											+ data.extNo15[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo15[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo15[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo16 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo16">';
								for ( var i = 0; i < data.extNo16.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo16[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo16[i].sttnNm + '['
											+ data.extNo16[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo16[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo16[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo17 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo17">';
								for ( var i = 0; i < data.extNo17.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo17[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo17[i].sttnNm + '['
											+ data.extNo17[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo17[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo17[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo18 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo18">';
								for ( var i = 0; i < data.extNo18.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo18[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo18[i].sttnNm + '['
											+ data.extNo18[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo18[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo18[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo19 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo19">';
								for ( var i = 0; i < data.extNo19.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo19[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo19[i].sttnNm + '['
											+ data.extNo19[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo19[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo19[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo20 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo20">';
								for ( var i = 0; i < data.extNo20.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo20[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo20[i].sttnNm + '['
											+ data.extNo20[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo20[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo20[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo21 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo21">';
								for ( var i = 0; i < data.extNo21.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo21[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo21[i].sttnNm + '['
											+ data.extNo21[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo21[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo21[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo22 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo22">';
								for ( var i = 0; i < data.extNo22.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo22[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo22[i].sttnNm + '['
											+ data.extNo22[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo22[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo22[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo23 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo23">';
								for ( var i = 0; i < data.extNo23.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo23[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo23[i].sttnNm + '['
											+ data.extNo23[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo23[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo23[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo24 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo24">';
								for ( var i = 0; i < data.extNo24.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo24[i].ectrcNo + '</td>';
									temp += '<td class="exitStationCon">'
											+ data.extNo24[i].sttnNm + '['
											+ data.extNo24[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo24[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo24[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

							if (data.extNo25 != null) {
								temp += '<div class="exitInfo">';
								temp += '<table id="extNo25">';
								for ( var i = 0; i < data.extNo25.length; i++) {
									temp += '<tr>';
									temp += '<td class="exitNumber">'
											+ data.extNo25[i].ectrcNo + '</td>';
									temp += '<td class="exitContent" onclick="makeRouteList(\''
									temp += '<td class="exitStationCon">'
											+ data.extNo25[i].sttnNm + '['
											+ data.extNo25[i].arsId + ']'
											+ '</td>';
									temp += '<td class="exitRouteCon" onclick="makeRouteList(\''
											+ data.extNo25[i].rtId
											+ '\',\'arvl\')">'
											+ data.extNo25[i].rtNm + '</td>';
									temp += '</tr>';
								}
								temp += '</table>';
								temp += '</div>';
							}

						} else {
							temp += '<div class="searchResult">';
							temp += '<div class="exitInfo" style="padding:8px 14px;"> 주변 버스정보가 없습니다.';
							temp += '</div>';
						}

						$('#busRouteList').html(temp);

						if ($('#busArvlInfo').css("display") != 'none') {
							$('#busArvlInfo').hide();
						}
						if ($('#busRouteList').css("display") != 'block') {
							$('#busRouteList').show();
						}

						$("#extInfo").click(
								function() {
									makeExitNumInfo(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$("#extMap").click(
								function() {
									makeExitMap(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$('.thdTab').css("width", (windowWidth - 2) / 3);

						for (var i = 1 ; i < 26 ; i++) {
							$("#extNo" + i).rowspan(0);
							$("#extNo" + i).rowspan(1);
						}

					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

function makeExitNumInfo(statnId, statnNm, subwayId, nextHeaderType) {
	var req = {
		"statnId" : statnId
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getEntrcByInfo.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

						var pageSize = getWindowSize();

						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];

						makeHeader(nextHeaderType);

						var temp = '';

						temp += '<div class="tab">';
						temp += '<ul>';
						temp += '<li class="thdTab offTab" id="extBus"> 버스정보 </li>';
						temp += '<li class="thdTab offTab" id="extMap">  주변지도 </li>';
						temp += '<li class="thdTab onTab" id="extInfo">  출구정보 </li>';
						temp += '</ul>';
						temp += '</div>';

						if (data.resultList != null) {
							temp += '<div class="searchResult">';
							temp += '<div class="title">' + statnNm
									+ '역 출구정보 </div>';
							temp += '<div class="exitInfo">';
							temp += '<table>';
							temp += '<tr>';
							temp += '<td class="exitInfoNum"> 출구번호 </td>';
							temp += '<td class="exitInfoCon"> 주변건물 </td>';
							temp += '</tr>';

							for ( var i = 0; i < data.resultList.length; i++) {
								temp += '<tr>';
								temp += '<td class="exitInfoNumber">'
										+ data.resultList[i].ectrcNo + '</td>';
								temp += '<td class="exitInfoContent">'
										+ data.resultList[i].cfrBuld + '</td>';
								temp += '</tr>';
							}

							temp += '</table>';
							temp += '</div>';
						} else {
							temp += '<div class="searchResult">';
							temp += '<div class="exitInfo" style="padding:8px 14px;"> 출구 정보가 없습니다.';
							temp += '</div>';
						}

						$('#busRouteList').html(temp);

						if ($('#busArvlInfo').css("display") != 'none') {
							$('#busArvlInfo').hide();
						}
						if ($('#busRouteList').css("display") != 'block') {
							$('#busRouteList').show();
						}

						$('#extBus').click(
								function() {
									makeExitBusInfo(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$('#extMap').click(
								function() {
									makeExitMap(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$('.thdTab').css("width", (windowWidth - 2) / 3);

					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

function makeExitMap(statnId, statnNm, subwayId, nextHeaderType) {
	var req = {
		"statnId" : statnId,
		"subwayId" : subwayId
	};
	jQuery
			.ajax( {
				type : 'POST',
				dataType : 'json',
				url : '/mBus/subway/getStatnByIdPos.bms',
				data : req,
				success : function(data) {
					if (data.error.errorCode == '0000') {

						var pageSize = getWindowSize();

						var windowWidth = pageSize[0];
						var windowHeight = pageSize[1];

						makeHeader(nextHeaderType);

						var temp = '';

						temp += '<div class="tab">';
						temp += '<ul>';
						temp += '<li class="thdTab offTab" id="extBus"> 버스정보 </li>';
						temp += '<li class="thdTab onTab" id="extMap">  주변지도 </li>';
						temp += '<li class="thdTab offTab" id="extInfo">  출구정보 </li>';
						temp += '</ul>';
						temp += '</div>';

						temp += '<div id="map_canvas" class="map_canvas" style="width:100%;height:240px;clear:both;"> </div>';
						$('#busRouteList').html(temp);

						var cenLoc = new daum.maps.LatLng(data.WGS84Y,
								data.WGS84X);
						var map = new daum.maps.Map(document
								.getElementById('map_canvas'), {
							center : cenLoc,
							level : 4,
							mapTypeId : daum.maps.MapTypeId.ROADMAP
						});

						var cenIcon = new daum.maps.MarkerImage(
								'./images/common/CenterMarker.png',
								new daum.maps.Size(20, 34));

						var marker = new daum.maps.Marker( {
							position : cenLoc,
							image : cenIcon
						});

						marker.setMap(map);

						var cenInfo = new daum.maps.InfoWindow(
								{
									position : cenLoc,
									content : '<p style="margin:7px 22px 7px 12px;font:12px/1.5 sans-serif">현재위치</p>',
									removable : true
								});

						daum.maps.event.addListener(marker, "click",
								function() {
									cenInfo.open(map, marker);
								});

						if ($('#busArvlInfo').css("display") != 'none') {
							$('#busArvlInfo').hide();
						}
						if ($('#busRouteList').css("display") != 'block') {
							$('#busRouteList').show();
						}

						$('#extBus').click(
								function() {
									makeExitBusInfo(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$('#extInfo').click(
								function() {
									makeExitNumInfo(statnId, statnNm, subwayId,
											nextHeaderType);
								});

						$('.thdTab').css("width", (windowWidth - 2) / 3);

					} else {
						alert(data.error.errorMessage);
					}
				},
				error : function() {
					alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
				}
			});
}

function makeStationInfo(statnId, subwayId, statnNm, nextHeaderType) {
	var req = {
		"statnId" : statnId,
		"subwayId" : subwayId
	};
	jQuery.ajax( {
		type : 'POST',
		dataType : 'json',
		url : '/mBus/subway/getStatnById.bms',
		data : req,
		success : function(data) {
			if (data.error.errorCode == '0000') {

				var pageSize = getWindowSize();

				var windowWidth = pageSize[0];
				var windowHeight = pageSize[1];

				makeHeader(nextHeaderType);

				var temp = '';

				if (data.resultList != null) {
					temp += '<div class="searchResult">';
					temp += '<div class="title">' + statnNm + '역 역사정보 </div>';

					temp += '<div class="stinfo">';
					temp += '<table>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 호선 </td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].subwayNm + '</td>';
					temp += '</tr>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 역명(한글) </td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].statnNm + '</td>';
					temp += '</tr>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 역명(영문)</td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].statnNmEng + '</td>';
					temp += '</tr>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 전화번호 </td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].telNo + '</td>';
					temp += '</tr>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 주소 </td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].adres + '</td>';
					temp += '</tr>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 이전역 </td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].statnFnm + '</td>';
					temp += '</tr>';

					temp += '<tr>';
					temp += '<td class="stTxtInfo"> 다음역 </td>';
					temp += '<td class="stContInfo">'
							+ data.resultList[0].statnTnm + '</td>';
					temp += '</tr>';

					temp += '</table>';
					temp += '</div>';
				} else {
					temp += '<div class="searchResult">';
					temp += '<div class="title">' + statnNm + '역 역사정보 </div>';

					temp += '<div class="noResult"> </div>';
					temp += '</div>';
				}

				$('#busRouteList').html(temp);

				if ($('#busArvlInfo').css("display") != 'none') {
					$('#busArvlInfo').hide();
				}
				if ($('#busRouteList').css("display") != 'block') {
					$('#busRouteList').show();
				}

			} else {
				alert(data.error.errorMessage);
			}
		},
		error : function() {
			alert("네트워크가 불안정합니다. 다시 시도해 주시기 바랍니다.");
		}
	});
}

function makeFirstEndTimeTable(statnId, subwayId, statnNm, nextHeaderType) {
	var req = {
		"statnId" : statnId,
		"subwayId" : subwayId
	};
	jQuery.ajax( {
		type : 'POST',
		dataType : 'json',
		url : '/mBus/subway/getLastcarByStatn.bms',
		data : req,
		success : function(data) {
			if (data.error.errorCode == '0000') {

				var pageSize = getWindowSize();

				var windowWidth = pageSize[0];
				var windowHeight = pageSize[1];

				makeHeader(nextHeaderType);

				var temp = '';

				temp += '<div class="searchResult">';
				temp += '<div class="title">' + statnNm + '역 첫차정보 </div>';

				temp += '<div class="feInfo">';
				temp += '<table>';
				temp += '<tr>';
				temp += '<td class="feTxtInfo"> 도착지 </td>';
				temp += '<td class="feTxtInfo"> 평일 </td>';
				temp += '<td class="feTxtInfo"> 토요일 </td>';
				temp += '<td class="feTxtInfo"> 휴일 </td>';
				temp += '</tr>';

				for ( var i = 0; i < data.resultList.length; i++) {
					if (data.resultList[i].lastcarDiv == 1) {
						temp += '<tr>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].statnNm + '</td>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].arvlHm1 + '</td>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].arvlHm2 + '</td>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].arvlHm3 + '</td>';
						temp += '</tr>';
					}
				}

				temp += '</table>';
				temp += '</div>';

				temp += '<div class="searchResult">';
				temp += '<div class="title">' + statnNm + '역 막차정보 </div>';

				temp += '<div class="feInfo">';
				temp += '<table>';
				temp += '<tr>';
				temp += '<td class="feTxtInfo"> 도착지 </td>';
				temp += '<td class="feTxtInfo"> 평일 </td>';
				temp += '<td class="feTxtInfo"> 토요일 </td>';
				temp += '<td class="feTxtInfo"> 휴일 </td>';
				temp += '</tr>';

				for ( var i = 0; i < data.resultList.length; i++) {
					if (data.resultList[i].lastcarDiv == 2) {
						temp += '<tr>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].statnNm + '</td>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].arvlHm1 + '</td>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].arvlHm2 + '</td>';
						temp += '<td class="feContInfo">'
								+ data.resultList[i].arvlHm3 + '</td>';
						temp += '</tr>';
					}
				}

				temp += '</table>';
				temp += '</div>';

				$('#busRouteList').html(temp);

				if ($('#busArvlInfo').css("display") != 'none') {
					$('#busArvlInfo').hide();
				}
				if ($('#busRouteList').css("display") != 'block') {
					$('#busRouteList').show();
				}

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
//function makeSubwayMap(){
//        
//    var pageSize = getWindowSize();
//    var windowWidth = pageSize[0];
//    var windowHeight = pageSize[1];
//    
//    var temp = '';
//    temp += '<section id="inverted-contain">';
//    temp += '<div class="panzoom-parent">';
//    temp += '<img class="subwayImg" src="./images/subway/subway_map.png">';
//    temp += '</div>';
//    temp += '</section>';
//    
//    $('#searchResult').html(temp);
//
////    //location.href('./svg/subwayFull.jsp');
////    //window.open('./svg/subwayFull.jsp', '지하철 전체노선도', 'scrollbars=yes, resizeable=yes');
////    //location.href="./svg/subwayFull.jsp";
////    var temp = '';
////    $('#busArvlInfo').html(temp);
//
//}
                
                
function svg_test(evt){
    alert();
}
