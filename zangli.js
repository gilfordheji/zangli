/*!
 * zangli - v1.0 - 2019-01-29
 * Copyright Stone Huang and other contributors
 * https://github.com/stonelf/zangli
 * 本项目提供1951年2月7日到2051年1月12日之间到公历藏历对照查询。数据来源于《藏历、公历、农历对照百年历书（1951-2050）》
 */

/* 缺日闰日表
 * 第一层代表一年，第二层代表一月。
 * 数组中负数表示当天缺日，正数表示当天闰日
 * 0表示该月是个闰月。
 * 空数组表示该月没有闰日没有缺日(吉祥月)。
 * 从铁兔年一月初一（1951.2.7）开始推算。
 */

var specialDays=[[[-28],[8,-21],[-25],[1,-18],[0,7,-10,-22,27],[-14],[-17,24],[-9],[-13,19],[-6,24,-30],[],[-4,16,-29],[20,-22]],//1951
[[-28],[11,-21],[-25],[5,-18],[-21],[2,-14],[-17,28],[-10],[-13,23],[-7,28,-29],[-13,15],[-6,19,-30]],//1952
[[],[-5,11,-28],[15,-22],[-25],[10,-18],[-21],[7,-13],[-17],[3,-10],[-14,26],[-8],[-13,18]],//1953
[[-7,21],[0,-1],[-5,14,-29],[],[-3,9,-25],[-28],[6,-21],[-24],[2,-17],[-22,26],[-15,30],[-9],[-14,21]],//1954
[[-8,25],[-2],[-6,18,-29],[],[-3,14,-25],[-28],[11,-21],[-24],[6,-18],[-22,29],[-16],[2,-10]],//1955
[[-15,24],[-9,29],[-2,-14,16],[-6,22,-29],[],[-3,19,-25],[-7,8,-28],[15,-20],[-25],[0,10,-18],[-23],[2,-17],[5,-11]],//1956
[[-16,27],[-10],[-14,22],[-7],[-10,18],[-2],[-5,14,-28],[],[-2,9,-25],[13,-19],[-24],[5,-18]],//1957
[[9,-11,-24,26],[-17],[1,-10],[-14,26],[-7],[-10,23],[-2],[-5,19,-29],[],[-2,13,-26],[],[-2,4,-25]],//1958
[[8,-19],[-24],[1,-17],[5,-10],[-14],[1,-6,-18,21],[0,-10,28],[-1,-13,18],[-6,23,-29],[],[-3,16,-27],[],[-2,8,-24]],//1959
[[11,-20],[-24],[4,-18],[-21,30],[-14],[-17,26],[-10],[-13,22],[-6],[-11,16],[-4,19,-28],[]],//1960
[[-3,11,-27],[14,-21],[-25],[8,-18],[-21],[4,-14],[-17],[1,-10],[-13,26],[-7],[-11,19],[-5,22,-29]],//1961
[[],[-4,14,-28],[0],[-3,7,-25],[13,-18,-29],[3,-21],[10,-13,-24,30],[-17],[6,-9,-21,25],[-14,30],[-7],[-12,22],[-6,25,-30]],//1962
[[],[-5,17,-29],[],[-2,12,-26],[-28],[8,-21],[-24],[5,-17],[-21,29],[-14],[3,-8],[-13,25]],//1963
[[-8],[-13,16],[-6,21,-29],[],[-3,16,-26],[-28],[13,-21],[-24],[9,-17],[-21],[2,-15],[0,-22,23],[-14,27]],//1964
[[-9],[-13,20],[-6,26,-29],[-10,15],[-3,23,-24],[-6,12,-28],[],[-1,8,-25],[13,-17],[-22],[6,-17],[-22,27]],//1965
[[-16],[1,-10],[-13,24],[-7],[-10,20],[-3],[-5,17,-28],[],[-2,12,-25],[-30],[5,-23],[8,-18]],//1966
[[-23,30],[-17],[4,-10],[-14,29],[-7],[-10,25],[-2],[0,-5,22,-28],[],[-2,16,-26],[-30],[8,-25],[11,-19]],//1967
[[-24],[4,-17],[-21,28],[-14],[-17,24],[-10],[-13,21],[-6],[-10,15],[-3,19,-27],[],[-1,11,-26]],//1968
[[14,-20],[-24],[7,-18],[-21],[2,-14],[-17,29],[-10],[-13,25],[-6],[-10,19],[-4,22,-27],[]],//1969
[[-3,14,-27],[],[-2,6,-25],[11,-18],[0,-21],[7,-14],[-17],[4,-9,-21,23],[-13,29],[-6],[-11,22],[-5],[-11,13]],//1970
[[-4,17,-28],[],[-2,10,-25],[-29],[6,-21],[-24],[3,-17],[-20,28],[-14],[3,-6,-19,21],[-12,25],[-6]],//1971
[[-11,17],[-5,20,-29],[],[-2,14,-26],[-28],[11,-21],[-24],[7,-17],[-20],[2,-14],[-19,25],[-13,28],[0,-7]],//1972
[[-12,20],[-6,24,-29],[-11,13],[-3,19,-25],[-28],[16,-20],[-2,6,-24],[12,-17],[-21],[6,-15],[-20,28],[-14]],//1973
[[1,-8],[-13,23],[-6],[-10,18],[-3],[-6,15,-28],[],[-1,11,-24],[-28],[5,-22],[9,-16],[-21]],//1974
[[1,-15],[4,-9],[-13,27],[-7],[-10,23],[-3],[-5,20,-28],[],[-1,15,-25],[0,-29],[8,-23],[12,-17],[-22]],//1975
[[3,-16],[-21,26],[-14],[1,-6,-18,21],[-10,28],[-2,-13,18],[-5,25,-27],[-9,14],[-2,19,-25],[-30],[12,-24],[]],//1976
[[-1,2,-23],[7,-17],[-21],[1,-14],[-17,27],[-10],[-13,23],[-6],[-9,18],[-3,24,-25],[-8,11],[-1,14,-25]],//1977
[[],[-1,6,-24],[10,-18],[-21],[5,-14],[0,-17],[1,-10],[-13,28],[-6],[-10,22],[-3],[-8,14],[-2,17,-27]],//1978
[[],[-1,10,-25],[15,-17,-29],[4,-21],[10,-13,-25,30],[-17],[-20,27],[-13],[3,-5,-18,21],[-10,25],[-4],[-9,17]],//1979
[[-3,20,-27],[],[-2,13,-25],[-29],[9,-22],[-24],[5,-17],[-20],[1,-13],[-17,25],[-11,28],[-5]],//1980
[[-10,20],[-5,24,-28],[0],[-2,17,-26],[-29],[13,-21],[-24],[10,-17],[-20],[5,-14],[-18,28],[-12],[1,-6]],//1981
[[-11,23],[-6],[-10,17],[-3],[-6,12,-29],[],[-1,9,-24],[-28],[4,-21],[9,-14],[-19],[1,-14]],//1982
[[-20,22],[-12,26],[-6],[-10,21],[-3],[-6,17,-29],[],[-1,14,-24],[-28],[8,-22],[0,-27,30],[-20],[4,-15]],//1983
[[-20,26],[-13,30],[-6],[-10,25],[-3],[-6,22,-28],[-10,11],[-1,18,-25],[-29],[12,-23],[-28],[4,-22]],//1984
[[7,-16],[-20,30],[-14],[-17,24],[-10],[-13,21],[-6],[-9,17],[-2],[-6,11,-30],[15,-24],[-29]],//1985
[[6,-23],[10,-17],[-21],[3,-14],[-17,29],[-10],[-13,26],[0,-6],[-9,21],[-2],[-7,15],[-1,18,-25],[-30]],//1986
[[9,-24],[14,-16,-29],[2,-21],[8,-14],[-17],[4,-9,-21,24],[-13],[1,-5,-17,20],[-9,25],[-3],[-7,18],[-2,21,-26]],//1987
[[],[-1,13,-25],[-28],[7,-22],[-25],[3,-17],[-20,30],[-13],[-17,24],[-10,29],[-3],[-9,20]],//1988
[[-3],[-9,12],[-2,16,-25],[0,-29],[11,-22],[-24],[8,-17],[-20],[4,-13],[-17,28],[-11],[-17,20],[-10,23]],//1989
[[-4],[-9,16],[-2,20,-25],[-7,9,-29],[16,-21],[-2,6,-24],[14,-16,-28],[3,-20],[8,-13],[-18],[1,-12],[-17,23]],//1990
[[-11,26],[-5],[-9,20],[-3],[-6,15,-29],[],[-1,12,-24],[-27],[7,-21],[-25],[1,-19],[4,-13],[0,-18,26]],//1991
[[-12,29],[-6],[-10,24],[-3],[-6,20,-29],[],[-1,16,-24],[-28],[11,-21],[-26],[4,-20],[7,-14]],//1992
[[-19,29],[-13],[-17,23],[-10,28],[-2,-14,18],[-6],[-9,15],[-2],[-6,10,-28],[15,-22],[-27],[7,-21]],//1993
[[10,-15],[-20],[3,-14],[-17,27],[-10],[-13,24],[-6],[-9,20],[0,-2],[-6,14,-29],[18,-23],[-28],[10,-22]],//1994
[[-28],[2,-21],[6,-14],[-17],[2,-10],[-13,29],[-5],[-9,24],[-2],[-6,18,-30],[],[-6,9,-29]],//1995
[[13,-23],[-28],[6,-21],[12,-13,-25],[1,-17],[-20,27],[-13],[-16,23],[-9,28],[-2,-15,16],[-7,21],[-1]],//1996
[[-7,12,-30],[16,-24],[-28],[10,-22],[-25],[0,5,-17],[-20],[2,-13],[-16,27],[-10],[-14,20],[-8,24],[-3]],//1997
[[-7,15],[-1,19,-24],[-29],[14,-22],[-25],[10,-17],[-20],[7,-13],[-17],[1,-11],[-15,23],[-9,26]],//1998
[[-4],[-8,19],[-2],[-6,13,-29],[],[-2,9,-24],[-27],[6,-20],[-24,30],[-18],[4,-11],[-16,26]],//1999
[[-11,30],[0,-4],[-9,22],[-3],[-6,18,-29],[],[-2,14,-24],[-27],[10,-21],[-25],[4,-18],[8,-12],[-18,29]],//2000
[[-12],[-17,22],[-10,26],[-3],[-6,22,-28],[-10,12],[-2,19,-24],[-5,9,-28],[-14,21],[-25],[7,-20],[-26,28]],//2001
[[-19],[2,-13],[-17,26],[-10],[-13,21],[-6],[-9,18],[-2],[-5,13,-28],[19,-20],[0,-3,6,-26],[10,-21],[-26]],//2002
[[2,-20],[6,-13],[-17,30],[-10],[-13,26],[-6],[-9,23],[-2],[-5,17,-29],[],[-4,10,-28],[13,-22]],//2003
[[-27],[5,-20],[10,-13,-25,28],[-17],[4,-10,-22,24],[-13],[2,-5,-16,22],[-9,27],[-1,-14,16],[-6,21,-30],[],[-5,13,-29]],//2004
[[16,-23],[-27],[9,-21],[-25],[3,-18],[-20,30],[0,-13],[-16,26],[-9],[-13,20],[-7,24],[-1],[-6,16,-30]],//2005
[[19,-23],[-28],[13,-22],[-25],[8,-18],[-20],[5,-13],[-16,30],[-10],[-14,24],[-8,27],[-1]],//2006
[[-7,19],[-1],[-5,12,-29],[17,-21],[-3,7,-25],[14,-16,-28],[4,-20],[-24,29],[-17],[4,-10],[-15,27],[-9]],//2007
[[-15,18],[-8,22],[-2],[0,-6,16,-29],[],[-2,12,-25],[-27],[9,-20],[-24],[3,-17],[-23,26],[-16,30],[-10]],//2008
[[-15,21],[-9,25],[-3],[-6,20,-29],[],[-2,17,-24],[-27],[13,-20],[-24],[7,-18],[-23,29],[-17]],//2009
[[2,-11],[-16,25],[-10],[-14,19],[-6,26,-27],[-9,16],[-2],[-5,12,-28],[],[-2,6,-25],[10,-19],[0,-24],[2,-18]],//2010
[[5,-12],[-17,29],[-10],[-13,24],[-6],[-9,21],[-2],[-5,16,-28],[],[-2,10,-26],[13,-20],[-25]],//2011
[[5,-19],[9,-12,-25,27],[-17],[3,-10],[-13,29],[-6],[-9,25],[-1],[-5,20,-29],[],[-3,13,-27],[17,-21]],//2012
[[-26],[8,-20],[-24],[2,-18],[-21,28],[-13],[-16,24],[-9],[0,-12,20],[-6,24,-29],[],[-4,16,-28],[]],//2013
[[-4,7,-27],[12,-21],[-25],[6,-18],[-20],[3,-13],[-16,29],[-9],[-13,23],[-6],[-12,16],[-5,19,-30]],//2014
[[],[-4,11,-28],[15,-21],[-25],[11,-17],[-20],[8,-12,-24,27],[-16],[3,-9],[-13,27],[-7],[-12,19]],//2015
[[-6,22,-30],[],[-5,15,-29],[],[0,-2,10,-25],[-28],[6,-20],[-23],[2,-17],[-21,26],[-14,30],[-8],[-13,22]],//2016
[[-8,25],[-1],[-6,19,-29],[],[-2,14,-25],[-27],[11,-20],[-24],[6,-17],[-21,30],[-15],[3,-9]],//2017
[[-15,25],[-9],[-13,18],[-6,23,-29],[],[-2,20,-24],[-5,10,-28],[16,-19],[-2,5,-24],[10,-18],[-22],[3,-17]],//2018
[[6,-10],[0,-16,28],[-9],[-13,22],[-6],[-9,18],[-2],[-5,15,-28],[],[-1,10,-25],[14,-18],[-23],[5,-18]],//2019
[[-23,27],[-16],[2,-10],[-13,27],[-6],[-9,23],[-2],[-5,19,-28],[],[-2,13,-26],[],[-1,5,-25]],//2020
[[8,-19],[-23],[1,-17],[6,-9,-21,25],[-14],[2,-5,-17,22],[-9],[-12,18],[-6,24,-28],[0],[-3,16,-27],[],[-2,8,-26]],//2021
[[11,-20],[-24],[5,-17],[-21,30],[-14],[-16,27],[-9],[-12,23],[-6],[-10,16],[-4,19,-28],[]],//2022
[[-3,11,-27],[15,-20],[-24],[9,-18],[-21],[5,-13],[-16],[2,-9],[-13,26],[-6],[-11,19],[-5,22,-29]],//2023
[[],[-4,14,-28],[],[-2,8,-25],[14,-17,-28],[4,-21],[0,-23],[1,-16],[-20,26],[-13,30],[-7],[-12,22],[-6,25,-30]],//2024
[[],[-5,18,-28],[],[-2,12,-25],[-28],[9,-21],[-23],[5,-17],[-20,30],[-14],[4,-7],[-13,25]],//2025
[[-7],[-12,17],[-5,22,-29],[],[-2,17,-25],[-28],[14,-20],[-24],[9,-17],[-21],[3,-15],[-21,24]],//2026
[[-14,28],[-8],[0,-12,21],[-6],[-10,16],[-2],[-5,13,-28],[],[-1,9,-24],[14,-16,-29],[2,-22],[6,-16],[-21,28]],//2027
[[-15],[1,-9],[-13,25],[-6],[-9,21],[-2],[-5,18,-28],[],[-1,13,-25],[-29],[6,-23],[9,-17]],//2028
[[-22],[1,-16],[5,-9,-22,23],[-13,29],[-6],[-9,26],[-2,-13,16],[-5,22,-27],[],[-2,16,-25],[-30],[0,9,-24],[12,-18]],//2029
[[-23],[4,-17],[-21,28],[-14],[-17,25],[-9],[-12,21],[-5],[-9,16],[-2,20,-26],[],[-1,11,-25]],//2030
[[15,-19],[-24],[8,-17],[-21],[3,-14],[-16,30],[-9],[-12,25],[-5],[-9,19],[-3,23,-27],[]],//2031
[[-2,14,-27],[],[-1,7,-24],[12,-17],[-21],[8,-13,-25,28],[-16],[0,5,-8,-20,24],[-13,29],[-6],[-10,22],[-4],[-10,14]],//2032
[[-3,17,-28],[],[-1,11,-25],[-28],[6,-21],[-23],[3,-16],[-20,29],[-13],[-18,22],[-11,25],[-6]],//2033
[[-11,17],[-4,21,-28],[],[-2,15,-25],[-28],[11,-21],[-23],[8,-16],[-20],[2,-14],[-18,25],[-12,28]],//2034
[[-7],[-11,20],[-5,25,-27],[-10,14],[0,-2,20,-24],[-6,10,-28],[18,-19],[-1,7,-24],[13,-16,-28],[1,-21],[6,-15],[-19,28],[-14]],//2035
[[1,-8],[-12,24],[-6],[-9,19],[-2],[-5,15,-28],[],[-1,11,-24],[-28],[6,-22],[9,-15],[-21]],//2036
[[1,-15],[5,-8,-21,22],[-13,28],[-6],[-9,23],[-2],[-5,20,-28],[],[-1,15,-24],[-28],[9,-23],[13,-16],[0,-22]],//2037
[[4,-16],[-20,27],[-13],[3,-5,-17,22],[-9],[-12,19],[-5],[-8,15],[-1,19,-25],[-29],[12,-24],[-30]],//2038
[[3,-23],[7,-17],[-20],[1,-14],[-17,27],[-9],[-12,24],[-5],[-8,19],[-2],[-7,11],[-1,15,-25]],//2039
[[-30],[7,-24],[11,-17],[-21],[6,-14],[-17],[2,-9],[-12,28],[-5],[0,-9,22],[-3],[-8,15],[-2,17,-26]],//2040
[[],[-1,10,-24],[-28],[5,-21],[-24],[1,-16],[-19,27],[-12],[-17,22],[-10,26],[-4],[-9,17]],//2041
[[-3,21,-27],[],[-1,14,-25],[-28],[9,-21],[-24],[6,-16],[-19],[2,-13],[-17,25],[-11,29],[-5]],//2042
[[-10,20],[-4,25,-27],[-9,13],[-2,18,-25],[-28],[0,14,-21],[-24],[11,-16,-28,30],[-20],[5,-13],[-18,28],[-12],[2,-5]],//2043
[[-11,23],[-5],[-9,17],[-2],[-5,13,-28],[],[-1,10,-24],[-27],[5,-21],[10,-13],[-19],[1,-13]],//2044
[[-19,23],[-12,27],[-6],[-9,30],[-2],[-5,18,-28],[],[-1,14,-24],[-28],[9,-21],[-26],[1,-20]],//2045
[[4,-14],[-19,26],[0,-13],[1,-6,-18,19],[-10,26],[-2,-14,16],[-5,23,-27],[-9,13],[-1,19,-24],[-28],[12,-22],[-27],[4,-21]],//2046
[[7,-15],[-20,30],[-13],[-17,25],[-10],[-12,23],[-5],[-8,18],[-1],[-6,12,-29],[15,-23],[-28]],//2047
[[7,-22],[10,-16],[-20],[4,-14],[-17,30],[-10],[-12,27],[-5],[-8,22],[-2],[0,-6,15,-30],[18,-24],[-29]],//2048
[[10,-23],[-28],[3,-21],[8,-13,-25,28],[-17],[5,-8,-20,25],[-12],[2,-4,-16,21],[-9,25],[-2],[-7,18],[-1,21,-25]],//2049
[[-30],[13,-24],[-28],[7,-21],[-24],[4,-17],[-19,30],[-12],[-16,25],[-10,29],[-3]]]//2050

var startDate=new Date("1951/2/7");
/*方法说明
 *@method getZangli
 *@param{String,Date,Number}p 可以转换成标准日期的入参
 *@return {
 * @value 藏历日期
 * @extraInfo 附加信息
 * @month 藏历月份信息
 * @tMonth 藏历月份名
 * @day 藏历日期
 * @dayLeap 这一天为闰日
 * @monthLeap 这个月是闰月
 * @dayMiss 这一天藏历缺日，往后顺推一天
 * } 
*/
function getZangli(p){
	var d=p;
	if (typeof d == "undefined" || d==""){
		d=new Date();
	}
	if (typeof d == "string"){
		d=new Date(d);
		if("Invalid Date" == d.toString()){
			console.error("错误：\""+p+"\" 字符串的日期格式不对");
			return "error";
		}
	}
	if (typeof d == "number"){
		console.warn("警告：尝试把数字 "+p+" 按秒转换成日期");
		d=new Date(d);
	}

	if(d.constructor != Date){
		console.error("错误：只能接受日期类型数字类型或者标准格式的字符串类型输入,当前输入的是"+ p.constructor.toString());
		return {value:"error"};
	}
	
	if (d.getTime()<(new Date("1951/2/7").getTime())){
		console.error("错误:不能转换早于1951年2月7日的日期");
		return {value:"error"};
	}
	if (d.getTime()>=(new Date("2051/1/13").getTime())){
		console.error("错误:不能转换晚于2051年1月12日的日期");
		return {value:"error"};
	}
	
	var days=Math.round((d-startDate)/86400/1000);
	var countingDays=0;
	var countingMonth=0;
	for(var years=0;years<specialDays.length;years++){
		var leapMonths=0;//这一年前面闰了几个月
		for(var months=0;months<specialDays[years].length;months++){
			var tDays=30;		
			for(var i=0;i<specialDays[years][months].length;i++){
				if(specialDays[years][months][i]<0)
					tDays--;
				else if(specialDays[years][months][i]>0)
					tDays++;
				else  if(specialDays[years][months][i]==0)
					leapMonths++;
			}
			if(countingDays+tDays<=days){ //还没到当前月，直接累加日子
				countingDays+=tDays;
			}else{
				var dayLeap=false,dayMiss=false,monthLeap=false;
				var tDays = days-countingDays;
				for(var i=0;i<specialDays[years][months].length;i++){
					if(specialDays[years][months][i]==0){//闰月
						monthLeap=true;						
					}else{
						var sd = specialDays[years][months][i];
						if(sd+1==-tDays){//当天缺日
							dayMiss=true;
							tDays++;
						}else if(sd == tDays){//当天闰日
							dayLeap=true;
							tDays--;
						}else if(sd>0 && sd<tDays){//前面出现一个闰日
								tDays--;
						}else if(sd<0 && -sd-1<tDays){//前面出现一个缺日
								tDays++;
						}
					}
				}
				var result={};
				result.year="铁水木火土".substr(Math.floor((years+1)/2) % 5,1)+"兔龙蛇马羊猴鸡狗猪鼠牛虎".substr(years % 12,1);
				
				result.month= (monthLeap?"闰":"")+["正","二","三","四","五","六","七","八","九","十","十一","十二"][months-leapMonths];
				result.tMonth=(monthLeap?"闰":"")+["神变","苦行","具香","萨嘎","作净","明净","具醉","具贤","天降","持众","庄严","满意"][months-leapMonths]
				result.day= (dayLeap?"闰":"")+["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"][tDays];
				result.dayLeap=dayLeap;
				result.monthLeap=monthLeap;
				result.dayMiss=dayMiss;
				result.value=result.year+"年"+result.month+"月("+result.tMonth+"月)"+result.day;
				extraInfo="";
				extraInfo2=""
				if(!dayLeap)switch (tDays){
					case 0:
						if(months==0) extraInfo="神变节";else{extraInfo="禅定胜王佛节日";extraInfo2="作何善恶成百倍";}
						break;
					case 3:if(months==5) extraInfo="释迦牟尼佛<br>初转法轮日";break;
					case 6:if(months==3) extraInfo="释迦牟尼佛诞辰";break;
					case 7:extraInfo="药师佛节日";extraInfo2="作何善恶成千倍";break;
					case 9:extraInfo="莲师荟供日";extraInfo2="作何善恶成十万倍";break;
					case 14:
						if(months==3) extraInfo="释迦牟尼佛<br>成道日涅槃日";
						else if(months==5) extraInfo="释迦牟尼佛入胎日";
						else extraInfo="阿弥陀佛节日";extraInfo2="作何善恶成百万倍";
						break;
					case 17:extraInfo="观音菩萨节日";extraInfo2="作何善恶成千万倍";break;
					case 19:if(months==8) extraInfo="释迦牟尼佛天降日";break;
					case 20:extraInfo="地藏王菩萨节日";extraInfo2="作何善恶成亿倍";break;
					case 24:extraInfo="空行母荟供日";break;
					case 29:extraInfo="释迦牟尼佛节日";extraInfo2="作何善恶成九亿倍";break;
				}
				result.extraInfo=extraInfo;
				result.extraInfo2=extraInfo2;
				result.toString=function(){
					return this.value
				}
				return result;
				
			}
		}
	}
}

var eclipseType=["日全食","日偏食","日环食","日偏食","混合日食","月全食","月偏食","???","月偏食","混合月食"];//Total,Partial,Annular,Penumbral,Hybrid
var eclipseList=[[-593924780000,2],[-592579347000,8],[-579905121000,8],[-578574489000,2],[-577366374000,8],[-564535212000,6],[-563294905000,0],[-549259925000,6],[-547980385000,2],[-533952731000,5],[-532652430000,1],[-519945346000,1],[-518614730000,5],[-517392297000,1],[-504566879000,2],[-503357259000,5],[-489324442000,0],[-487985949000,6],[-473962997000,2],[-472735600000,8],[-459941797000,8],[-458682558000,0],[-444639660000,6],[-443379454000,2],[-429352088000,6],[-428035161000,0],[-414004304000,5],[-412790365000,1],[-399945272000,2],[-398741312000,5],[-384721558000,0],[-383391150000,5],[-370641585000,8],[-369347563000,2],[-368106391000,6],[-354078272000,0],[-352801930000,8],[-339997683000,6],[-338762152000,2],[-324773783000,8],[-323436780000,0],[-309367899000,5],[-308162092000,1],[-294151089000,5],[-292813204000,1],[-280078812000,0],[-278764280000,6],[-264777193000,2],[-263508669000,6],[-249436042000,0],[-248180178000,8],[-235397111000,8],[-234185668000,2],[-232862550000,8],[-220149618000,8],[-218802168000,2],[-204775021000,6],[-203570627000,0],[-189521555000,5],[-188191792000,1],[-175461953000,1],[-174178390000,5],[-172932127000,1],[-160180086000,1],[-158880126000,5],[-144816149000,0],[-143590234000,6],[-129584709000,2],[-128242168000,8],[-115526874000,8],[-114186059000,2],[-100187227000,8],[-98962592000,0],[-84887576000,5],[-83582232000,1],[-69601452000,5],[-68322064000,0],[-55558770000,1],[-54241919000,5],[-40221674000,0],[-39010645000,5],[-24951903000,2],[-23606814000,8],[-10933905000,8],[-9604861000,2],[-8394581000,8],[4437043000,6],[5679510000,0],[19711446000,6],[20987730000,2],[35019921000,5],[36322686000,1],[49023115000,1],[50355832000,5],[51575971000,1],[64407802000,2],[65616845000,5],[79645598000,0],[80982982000,6],[95010381000,2],[96239878000,8],[109025441000,8],[110288320000,0],[111584359000,8],[124335906000,6],[125593363000,2],[139616204000,6],[140935684000,0],[154970047000,5],[156183193000,1],[169024653000,1],[170228927000,5],[184252554000,1],[185581452000,5],[199621458000,2],[200865308000,6],[214895625000,0],[216169319000,8],[228975544000,6],[230207490000,2],[244197008000,8],[245536047000,0],[259604591000,5],[260809426000,1],[274820701000,5],[276157723000,1],[288896106000,0],[290207332000,6],[304190558000,2],[305463302000,5],[319539241000,0],[320791563000,8],[333572939000,8],[334782741000,2],[336108680000,8],[348825048000,8],[350172564000,2],[364193260000,6],[365399196000,0],[379454204000,5],[380781773000,1],[393509073000,1],[394788707000,5],[396038684000,1],[408792729000,1],[410095777000,5],[424154613000,0],[425377391000,6],[439389075000,2],[440732997000,8],[453444063000,8],[454783541000,2],[455984799000,8],[468784568000,8],[470012057000,0],[484084639000,5],[485386178000,1],[499369397000,5],[500652687000,0],[513411682000,1],[514730610000,5],[528750375000,4],[529960734000,5],[544020587000,4],[545365190000,8],[559365141000,2],[560577750000,8],[573408821000,8],[574653536000,0],[588683129000,6],[589956269000,2],[603992178000,5],[605297321000,1],[619326547000,5],[620544707000,1],[633382284000,2],[634590722000,5],[648615787000,0],[649951996000,6],[663983631000,2],[665215178000,8],[677992541000,8],[679259220000,0],[680551730000,8],[693311580000,6],[694566337000,2],[708584277000,6],[709906282000,0],[723944705000,5],[725157101000,1],[737994014000,1],[739198886000,5],[753227151000,1],[754554426000,5],[768589946000,2],[769836680000,6],[783870006000,0],[785141094000,8],[797948344000,6],[799176800000,2],[813168312000,8],[814509210000,0],[828576647000,5],[829780692000,1],[843792924000,5],[845128984000,1],[857870690000,0],[859178428000,6],[873158689000,1],[874435662000,5],[888514167000,0],[889762868000,8],[902543157000,8],[903751630000,2],[905080271000,8],[917799515000,8],[919146878000,2],[933161686000,6],[934369449000,0],[948429874000,5],[949755027000,1],[962480013000,1],[963755799000,5],[965009647000,1],[977765757000,1],[979071700000,5],[993125026000,0],[994344983000,6],[1008363181000,2],[1009708222000,8],[1022414666000,8],[1023752722000,2],[1024954093000,8],[1037756860000,8],[1038987135000,0],[1053056473000,5],[1054354163000,2],[1068340778000,5],[1069627822000,0],[1082381705000,1],[1083702677000,5],[1097722823000,1],[1098932711000,5],[1112992610000,4],[1114336555000,8],[1128335567000,2],[1129550667000,6],[1142380114000,8],[1143627142000,0],[1157655145000,6,1157652300000,1157657880000],[1158925276000,2],[1172964119000,5,1172957400000,1172970720000],[1174271577000,1],[1188297507000,5,1188291060000,1188303840000],[1189513944000,1],[1202356570000,2],[1203564429000,5,1203558180000,1203570540000],[1217586132000,0],[1218921072000,6,1218915360000,1218926700000],[1232956785000,2],[1234190362000,8],[1246959583000,8],[1248230185000,0],[1249519218000,8],[1262287426000,6,1262285460000,1262289240000],[1263539259000,2],[1277552374000,6,1277547360000,1277557200000],[1278876878000,0],[1292919484000,5,1292913120000,1292925660000],[1294131102000,1],[1306963038000,1],[1308168823000,5,1308162120000,1308175320000],[1309509570000,1],[1322202084000,1],[1323527576000,5,1323521100000,1323447480000],[1337558033000,2],[1338807860000,6,1338803940000,1338811620000],[1352844775000,0],[1354113247000,8],[1366920518000,6,1366919520000,1366921380000],[1368145580000,2],[1369455066000,8],[1382140285000,8],[1383482856000,4],[1397548008000,5,1397541480000,1397554380000],[1398751472000,2],[1412765744000,5,1412759640000,1412771640000],[1414100739000,1],[1426844807000,0],[1428148884000,5,1428142500000,1428155100000],[1442127319000,1],[1443408497000,5,1443402420000,1443414420000],[1457488699000,0],[1458733701000,8],[1472720882000,2],[1474052127000,8],[1486773903000,8],[1488120872000,2],[1502130098000,6,1502126520000,1502133540000],[1503340000000,0],[1517405460000,5,1517399280000,1517411460000],[1518727953000,1],[1531450936000,1],[1532722974000,5,1532715840000,1532729940000],[1533980848000,1],[1546738958000,1],[1548047607000,5,1548041580000,1548053460000],[1562095447000,0],[1563312715000,6,1563307260000,1563318000000],[1577337533000,2],[1578683471000,8],[1591385174000,8],[1592721675000,2],[1593923472000,8],[1606729441000,8],[1607962479000,0],[1622027993000,5,1622022240000,1622033580000],[1623321786000,2],[1637312646000,6,1637306280000,1637318820000],[1638603278000,0],[1651351356000,1],[1652674362000,5,1652668020000,1652680500000],[1666695679000,1],[1667905222000,5,1667898540000,1667911740000],[1681964275000,4],[1683307445000,8],[1697306440000,2],[1698524118000,6,1698521640000,1698526380000],[1711350839000,8],[1712600309000,0],[1726627525000,6,1726625460000,1726629360000],[1727894773000,2],[1741935596000,5,1741928940000,1741942080000],[1743245316000,1],[1757268778000,5,1757262360000,1757274960000],[1758483784000,1],[1771330385000,2],[1772537692000,5,1772531340000,1772543820000],[1786556825000,0],[1787890444000,6,1787884380000,1787896320000],[1801929647000,2],[1803165246000,8],[1815926649000,8],[1817201269000,0],[1818486899000,8],[1831263253000,6,1831261440000,1831264920000],[1832512138000,2],[1846520457000,6,1846516080000,1846524660000],[1847847399000,0],[1861894395000,5],[1863105227000,1],[1875931573000,1],[1877138602000,5,1877131920000,1877145120000],[1878478638000,1],[1891177437000,1],[1892500992000,5,1892494500000,1892507340000],[1906525753000,2],[1907778874000,6,1907774400000,1907783160000],[1921819897000,0],[1923085731000,8],[1935892322000,8],[1937114164000,2],[1938426317000,8],[1951112805000,8],[1952456850000,4],[1966518891000,5,1966512420000,1966438740000],[1967722002000,2],[1981739020000,5,1981733040000,1981744800000],[1983072852000,1],[1995818555000,0],[1997118831000,5,1997112240000,1997125200000],[2011096471000,1],[2012381783000,5,2012375580000,2012387760000],[2026462725000,0],[2027704019000,8],[2041690767000,2],[2043024457000,6,2043023400000,2043025320000],[2055747972000,8],[2057094353000,2],[2071098735000,6,2071096260000,2071101000000],[2072311006000,0],[2086380786000,5,2086374600000,2086386780000],[2087700409000,1],[2100421926000,1],[2101690352000,5,2101683300000,2101697220000],[2102952345000,1],[2115712135000,1],[2117023298000,5,2117017260000,2117029140000],[2131065635000,0],[2132280593000,6,2132274720000,2132286300000],[2146312030000,2],[2147658592000,8],[2160355502000,8],[2161690374000,2],[2162892956000,8],[2175702240000,8],[2176938010000,0],[2190999265000,6,2190993780000,2191004580000],[2192289173000,2],[2206284988000,6],[2207579026000,0],[2220320582000,1],[2221645582000,5,2221639140000,2221651800000],[2235668941000,1],[2236878281000,5,2236871520000,2236884780000],[2250935540000,0],[2252277783000,6,2252275860000,2252279520000],[2266277781000,2],[2267498105000,6,2267495220000,2267500740000],[2280321011000,8],[2281573050000,0],[2295600347000,8,2295599880000,2295600600000],[2296864841000,2],[2310906724000,5,2310900180000,2310826680000],[2312218669000,0],[2326240310000,5,2326234020000,2326246380000],[2327454108000,2],[2340303879000,2],[2341510713000,5,2341504320000,2341516860000],[2355527821000,0],[2356860044000,5,2356853700000,2356866120000],[2370902166000,2],[2372139806000,8],[2386172559000,0],[2387454890000,8],[2400238957000,6,2400237240000,2400240420000],[2401484786000,2],[2415488765000,6,2415485160000,2415492120000],[2416818073000,0],[2430869174000,5,2430862800000,2430875340000],[2432079197000,1],[2444899950000,1],[2446108545000,5,2446101840000,2446114980000],[2447447776000,1],[2460153012000,1],[2461474435000,5,2461467900000,2461480740000],[2475493132000,2],[2476749748000,6,2476744800000,2476754460000],[2490795327000,0],[2492058468000,8],[2504863599000,8],[2506082398000,2],[2507397252000,8],[2520085931000,8],[2521431227000,4],[2535489122000,5,2535482820000,2535495180000],[2536692170000,4],[2550712907000,5,2550706980000,2550718620000],[2552045452000,1],[2564791838000,1],[2566088188000,5,2566081440000,2566094700000],[2580066134000,1],[2581355510000,5,2581349220000,2581361520000],[2595436312000,0],[2596673886000,8],[2610661149000,2],[2611997158000,6,2611995060000,2611999020000],[2624721730000,8],[2626067299000,2],[2640067550000,8],[2641282449000,0],[2655355887000,5,2655349740000,2655361800000],[2656672420000,1],[2669393041000,1],[2670657990000,5,2670651060000,2670664680000],[2671924173000,1],[2684685245000,1],[2685998777000,5,2685992700000,2686004640000],[2700035869000,0],[2701248798000,6,2701242540000,2701254780000],[2715286605000,2],[2716633566000,8],[2729325789000,8],[2730658918000,2],[2731862604000,8],[2744675336000,8],[2745913671000,0],[2759970380000,6,2759965140000,2759975340000],[2761256415000,2],[2775257618000,6,2775251340000,2775263640000],[2776554875000,0],[2789289565000,1],[2790616548000,5,2790610020000,2790622860000],[2791844374000,1],[2804642587000,1],[2805851778000,5,2805844980000,2805858300000],[2819906535000,0],[2821247735000,6,2821244640000,2821250580000],[2835249494000,2],[2836472496000,6,2836469340000,2836475400000],[2849290624000,8],[2850545399000,0],[2864573612000,8],[2865835450000,2],[2867112255000,8]];
function eclipse(){
	this.value="";
	this.extraInfo="";
	this.toString=function(){return this.value;}
}
var eclipseDate={};
var ms_oneday=86400000;
var ms_8hr=ms_oneday/3;
for(var i=0;i<eclipseList.length;i++){
	var d=new Date(eclipseList[i][0]+ms_8hr);//把日月食的时间转换成东八区的时间来获得日期
	eclipseDate[d.toDateString()]=eclipseList[i];//按照日期映射成哈希表方便查询。
}

function getEclipse(date){
	var result=new eclipse();
	var e=eclipseDate[date.toDateString()];
	if(e){
		d=new Date(e[0]+ms_8hr);//把日月食的时间转换成东八区的时间
		result.value=eclipseType[e[1]];
			result.extraInfo="食甚"+d.getUTCHours()+"点"+d.getUTCMinutes()+"分";
			result.extraInfo2="";
			if( e.length>2){
				result.extraInfo2=result.extraInfo;
				d=new Date(e[2]+ms_8hr);
				result.extraInfo="初亏"+d.getUTCHours()+"点"+d.getUTCMinutes()+"分";
				d=new Date(e[3]+ms_8hr);
				result.extraInfo+="，复圆"+d.getUTCHours()+"点"+d.getUTCMinutes()+"分";
			}
	}
	return result;
}



if (typeof zangli_callback == "function"){
	zangli_callback();
}