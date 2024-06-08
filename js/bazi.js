tg=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
dz=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
sx=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
w=new Array("木","火","土","金","水");
f=new Array("东","南","中","西","北");
sz=new Array("一","二","三","四","五","六","七","八","九","十",
"十一","十二","十三","十四","十五","十六","十七","十八","十九","二十",
"廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十");
m0=new Array(
0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,//1901
0,1,0,1,2,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,
1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,3,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,
0,4,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,3632)
m1=new Array(
1,0,1,0,0,4,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,//1911
1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,3,0,1,0,0,1,0,1,
1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,
1,2,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,
0,1,0,0,1,0,3,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,7294)
m2=new Array(
1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,2,1,0,0,1,0,1,1,//1921
0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,
1,0,1,3,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,
1,0,0,1,0,1,0,1,0,1,1,1,0,4,0,1,0,0,1,0,1,1,1,1,
0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,4,0,1,0,1,1,0,10955);
m3=new Array(
1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,//1931
0,1,1,0,5,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,
0,0,1,0,1,0,1,1,0,1,1,0,1,0,3,0,0,1,1,0,1,1,1,0,
1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,3,0,1,1,0,1,
1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,14587);
m4=new Array(
1,1,0,1,1,3,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,//1941
0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,3,0,1,0,1,1,0,1,1,
0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,
1,4,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,
1,0,1,1,0,1,2,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,18249);
m5=new Array(
1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,3,0,1,1,0,1,0,1,//1951
0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,
0,1,3,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,
1,0,1,0,1,0,0,4,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,
0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,4,1,0,1,0,1,0,21911);
m6=new Array(
1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,//1961
1,0,1,2,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,
0,1,0,1,0,0,1,0,0,1,1,0,1,1,4,1,0,0,1,0,0,1,1,0,
1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,4,1,0,1,0,1,
0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,25544);
m7=new Array(
0,1,0,0,4,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,//1971
1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,4,0,1,0,0,1,1,0,1,
1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,4,0,1,0,1,
1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,
1,0,0,1,0,5,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,29206);
m8=new Array(
0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,2,1,0,0,1,0,1,1,1,//1981
1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,4,1,1,
0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,
1,0,1,0,1,4,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,
1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,4,0,1,0,1,1,1,1,32868);
m9=new Array(
0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,//1991
0,1,4,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,
0,1,1,0,1,0,1,4,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,
1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,2,1,1,0,1,1,0,1,
1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,36499);
m10=new Array(
1,1,0,4,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,//2001
1,1,0,1,1,0,1,0,0,1,0,1,0,4,1,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,4,1,1,0,1,1,
0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,
1,1,0,0,4,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,40161);
m11=new Array(
1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,4,1,0,1,0,1,0,1,0,//2011
1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,4,1,0,1,
0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,
0,1,0,1,0,3,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,
1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,4,1,0,0,1,0,1,0,1,43823);
m12=new Array(
0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,//2021
0,4,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,
1,0,1,0,0,4,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,
1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,4,0,1,0,0,1,1,0,
1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,47455)
m13=new Array(
0,1,4,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,//2031
0,1,0,0,1,0,1,0,1,1,4,1,0,1,0,0,1,0,1,0,1,1,0,1,
1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,3,0,0,1,0,1,1,
1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,
1,1,0,1,4,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,51117)
m14=new Array(
0,1,0,1,0,1,1,0,1,1,0,1,0,4,0,1,0,1,0,1,1,0,1,1,//2041
0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,2,1,0,1,1,1,
1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,
1,0,1,1,3,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,
1,0,1,0,1,1,0,1,1,0,1,0,0,1,3,0,1,0,1,1,0,1,1,0,54779)
ms=new Array(m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14);
ly=new Array(29,30,58,59,59,60);
tw=new Array(0,0,1,1,2,2,3,3,4,4);
dw=new Array(4,2,0,0,2,1,1,2,3,3,2,4);

function wInq() {
	var y = parseInt(document.getElementById('wyear').value);
	var m = parseInt(document.getElementById('wmonth').value);
	var d = parseInt(document.getElementById('wday').value);
	var h = parseInt(document.getElementById('whour').value);
	if (y == '' || y < 1901 || y > 2050) {
		alert('年应在1901和2050之间');
		document.getElementById('wyear').focus();
		return false;
	} else if (m == '' || m > 12 || m < 1) {
		alert('月应在1与12之间');
		document.getElementById('wmonth').focus();
		return false;
	} else if (d == '' || d > 31 || d < 1) {
		alert('日应在1与31之间');
		document.getElementById('wday').focus();
		return false;
	} else if ((m == 4 || m == 6 || m == 9 || m == 11) && d > 30) {
		alert(m+'月只有30天');
		document.getElementById('wday').focus();
		return false;
	} else if (y % 4 != 0 && m == 2 && d > 28) {
		alert(y+'年是平年，2月只有28天');
		document.getElementById('wday').focus();
		return false;
	} else if (m == 2 && d > 29) {
		alert(y+'年是闰年，2月只有29天');
		document.getElementById('wday').focus();
		return false;
	} else if (h > 23 || h < 0) {
		alert('时应在0与23之间');
		document.getElementById('whour').focus();
		return false;
	}
	
	gl0 = (Date.UTC(y,0,1)-Date.UTC(1901,1,19))/86400000;
	dy = y-1901;
	i = Math.floor(dy/10);
	nl0 = (i==0)?0:ms[i-1][120];
	n = i*120;
	for (j = 0; j < 120; j++) {
		n++;
		if (n > dy * 12) {
			break;
		}
		nl0 += ly[ms[i][j]];
	}
	cjr = (nl0-gl0)%31+1;
	cjy = (nl0-gl0>30)?2:1;
	jq = tg[(dy+6)%10]+dz[dy%12];
	jh = tg[(dy+7)%10]+dz[(dy+1)%12];
	sum=(Date.UTC(y,m-1,d,h)-Date.UTC(1901,1,18,23))/1000;
	sumd=Math.floor(sum/86400);
	day=(Math.floor((sum-1800)/86400)+51)%7;
	xq=(day==0)?"日":sz[day-1];
	tgr=(sumd+54)%10;
	dzr=(sumd+52)%12;
	gzr=tg[tgr]+dz[dzr];
	dzs=Math.floor((h*1+1)/2)%12;
	tgs=((tgr%5)*2+dzs)%10;
	gzs=tg[tgs]+dz[dzs];
	for (i=0;ms[i][120]<=sumd;i++);
	k=(i==0)?0:ms[i-1][120];
	p=i*120;
	for (j=0;j<120;j++){
		k+=ly[ms[i][j]];
		p++;
		if (k>sumd) break;
	}
	if (sumd+30<0){
		ri=59+sumd;
		p=-1;
	} else if (sumd<0){
		ri=30+sumd;
		p=0;
	} else
		ri=sumd+ly[ms[i][j]]-k;
	yue=((p+11)%12==0)?"正":sz[(p+11)%12];
	mij=ms[i][j];
	if ((mij==2||mij==3)&&ri>28){
		ri-=29;
		yue="闰"+yue;
	} else if ((mij==4||mij==5)&&ri>29){
		ri-=30;
		yue="闰"+yue;
	}
	ri=((ri<10)?"初":"")+sz[ri];
	tgn=Math.floor((p-1)/12+7)%10;
	dzn=Math.floor((p-1)/12+1)%12;
	gzn=tg[tgn]+dz[dzn];
	tgy=(p+5)%10;
	dzy=(p+1)%12;
	gzy=tg[tgy]+dz[dzy];
	tn=tw[tgn];
	dn=dw[dzn];
	ty=tw[tgy];
	dy=dw[dzy];
	tr=tw[tgr];
	dr=dw[dzr];
	ts=tw[tgs];
	ds=dw[dzs];
	
	var wgl = '<span class="tou">公历：</span>'+y+'年'+m+'月'+d+'日(星期'+xq+')'+h+'点';
	var wnl = '<span class="tou"><a href="https://t.aies.cn/shijian/nongli/">农历</a>：</span>'+gzn+'年'+yue+'月'+ri+'日'+dz[dzs]+'时';
	var wcj = '<span class="tou">春节：</span>'+cjy+'月'+cjr+'日';
	var wjq = '<span class="tou">节前：</span>'+jq+'年';
	var wjh = '<span class="tou">节后：</span>'+jh+'年';
	var wbz = '<span class="tou">八字：</span>'+gzn+' '+gzy+' '+gzr+' '+gzs;
	var wwx = '<span class="tou">五行：</span>'+w[tn]+w[dn]+' '+w[ty]+w[dy]+' '+w[tr]+w[dr]+' '+w[ts]+w[ds];
	var wfw = '<span class="tou">方位：</span>'+f[tn]+f[dn]+' '+f[ty]+f[dy]+' '+f[tr]+f[dr]+' '+f[ts]+f[ds];
	var wsx = '<span class="tou">生肖：</span>'+sx[dzn];
	
	var v = 
'<p class="nei">'+wgl+'<br>'+wnl+'</p>' +
'<p class="nei">'+wcj+'<br>'+wjq+'</p>' + 
'<p class="nei">'+wjh+'<br>'+wbz+'</p>' + 
'<p class="nei">'+wwx+'<br>'+wfw+'</p>' + 
'<p class="nei">'+wsx+'</p>' +
			'';
	document.getElementById('wtext').innerHTML = v;
	document.getElementById('wresult').style.display = '';
	
	var c = document.getElementById('wresult').innerHTML;
	var i = '';
	return {c:c, i:i};
}

function wInit() {
	document.getElementById('wresult').style.display = 'none';
	var d = new Date();
	d.setMonth(d.getMonth() - 24);
	document.getElementById('wyear').value = d.getFullYear();
	document.getElementById('wmonth').value = d.getMonth() + 1;
	document.getElementById('wday').value = d.getDate();
	document.getElementById('whour').value = d.getHours();
	document.getElementById('wyear').onclick = function(event) {WdatePicker({dateFmt:'yyyy',minDate:'1901', maxDate:'2050'})};
	document.getElementById('wmonth').onclick = function(event) {WdatePicker({dateFmt:'M'})};
	document.getElementById('wday').onclick = function(event) {WdatePicker({dateFmt:'d'})};
	document.getElementById('whour').onclick = function(event) {WdatePicker({dateFmt:'H'})};
}

function handleWork(obj) {
	var v = obj.value;
	obj.disabled = true;
	obj.value = '开始计算';
	
	// global callback
	handleBegin();
	
	var res = wInq();
	
	if (typeof res == 'object' && res != null) {
		// global callback
		handleFinish(res.c, res.i);
	}
	
	obj.value = v;
	obj.disabled = false;
}
