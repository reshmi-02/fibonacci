var a=0,b=1;
var n=prompt("enter the number of times value");
document.write(a+" "+b);
for(var i=1;i<=n;i++){
	c=a+b;
	a=b;
	b=c;
	document.write(" "+c);
}
