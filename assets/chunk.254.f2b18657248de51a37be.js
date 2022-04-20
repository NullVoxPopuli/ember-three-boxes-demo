/*! For license information please see chunk.254.f2b18657248de51a37be.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[254],{622:function(t){var e
t.exports=((e=function(){function t(t){return r.appendChild(t.dom),t}function n(t){for(var e=0;e<r.children.length;e++)r.children[e].style.display=e===t?"block":"none"
i=t}var i=0,r=document.createElement("div")
r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",(function(t){t.preventDefault(),n(++i%r.children.length)}),!1)
var s=(performance||Date).now(),a=s,o=0,l=t(new e.Panel("FPS","#0ff","#002")),c=t(new e.Panel("MS","#0f0","#020"))
if(self.performance&&self.performance.memory)var h=t(new e.Panel("MB","#f08","#201"))
return n(0),{REVISION:16,dom:r,addPanel:t,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){o++
var t=(performance||Date).now()
if(c.update(t-s,200),t>a+1e3&&(l.update(1e3*o/(t-a),100),a=t,o=0,h)){var e=performance.memory
h.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){s=this.end()},domElement:r,setMode:n}}).Panel=function(t,e,n){var i=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,d=15*a,p=74*a,m=30*a,f=document.createElement("canvas")
f.width=o,f.height=l,f.style.cssText="width:80px;height:48px"
var g=f.getContext("2d")
return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,o,l),g.fillStyle=e,g.fillText(t,c,h),g.fillRect(u,d,p,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u,d,p,m),{dom:f,update:function(l,v){i=Math.min(i,l),r=Math.max(r,l),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,o,d),g.fillStyle=e,g.fillText(s(l)+" "+t+" ("+s(i)+"-"+s(r)+")",c,h),g.drawImage(f,u+a,d,p-a,m,u,d,p-a,m),g.fillRect(u+p-a,d,a,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u+p-a,d,a,s((1-l/v)*m))}}},e)},232:(t,e)=>{"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
const n="139",i=100,r=300,s=301,a=302,o=303,l=304,c=306,h=1e3,u=1001,d=1002,p=1003,m=1004,f=1005,g=1006,v=1007,y=1008,_=1009,x=1012,M=1014,b=1015,w=1016,E=1020,S=1023,T=1026,A=1027,R=33776,C=33777,L=33778,P=33779,D=35840,I=35841,N=35842,U=35843,O=37492,F=37496,B=37808,H=37809,z=37810,G=37811,V=37812,k=37813,W=37814,j=37815,X=37816,q=37817,Y=37818,J=37819,Z=37820,K=37821,Q=36492,$=2300,tt=2301,et=2302,nt=2400,it=2401,rt=2402,st=2501,at=3e3,ot=3001,lt="srgb",ct="srgb-linear",ht=7680,ut=35044,dt=35048,pt="300 es",mt=1035
class ft{addEventListener(t,e){void 0===this._listeners&&(this._listeners={})
const n=this._listeners
void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)}hasEventListener(t,e){if(void 0===this._listeners)return!1
const n=this._listeners
return void 0!==n[t]&&-1!==n[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return
const n=this._listeners[t]
if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return
const e=this._listeners[t.type]
if(void 0!==e){t.target=this
const n=e.slice(0)
for(let e=0,i=n.length;e<i;e++)n[e].call(this,t)
t.target=null}}}const gt=[]
for(let fu=0;fu<256;fu++)gt[fu]=(fu<16?"0":"")+fu.toString(16)
let vt=1234567
const yt=Math.PI/180,_t=180/Math.PI
function xt(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0
return(gt[255&t]+gt[t>>8&255]+gt[t>>16&255]+gt[t>>24&255]+"-"+gt[255&e]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[63&n|128]+gt[n>>8&255]+"-"+gt[n>>16&255]+gt[n>>24&255]+gt[255&i]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Mt(t,e,n){return Math.max(e,Math.min(n,t))}function bt(t,e){return(t%e+e)%e}function wt(t,e,n){return(1-n)*t+n*e}function Et(t){return 0==(t&t-1)&&0!==t}function St(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Tt(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}var At=Object.freeze({__proto__:null,DEG2RAD:yt,RAD2DEG:_t,generateUUID:xt,clamp:Mt,euclideanModulo:bt,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:wt,damp:function(t,e,n,i){return wt(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(bt(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(vt=t)
let e=vt+=1831565813
return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*yt},radToDeg:function(t){return t*_t},isPowerOfTwo:Et,ceilPowerOfTwo:St,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2)
switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c)
break
case"YZY":t.set(l*d,o*h,l*u,o*c)
break
case"ZXZ":t.set(l*u,l*d,o*h,o*c)
break
case"XZX":t.set(o*h,l*m,l*p,o*c)
break
case"YXY":t.set(l*p,o*h,l*m,o*c)
break
case"ZYZ":t.set(l*m,l*p,o*h,o*c)
break
default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:function(t,e){switch(e.constructor){case Float32Array:return t
case Uint16Array:return Math.round(65535*t)
case Uint8Array:return Math.round(255*t)
case Int16Array:return Math.round(32767*t)
case Int8Array:return Math.round(127*t)
default:throw new Error("Invalid component type.")}},denormalize:function(t,e){switch(e.constructor){case Float32Array:return t
case Uint16Array:return t/65535
case Uint8Array:return t/255
case Int16Array:return Math.max(t/32767,-1)
case Int8Array:return Math.max(t/127,-1)
default:throw new Error("Invalid component type.")}}})
class Rt{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e
break
case 1:this.y=e
break
default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x
case 1:return this.y
default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements
return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length()
return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y
return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return void 0!==n&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y
return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Rt.prototype.isVector2=!0
class Ct{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,s,a,o,l){const c=this.elements
return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements
return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements
return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],v=i[1],y=i[4],_=i[7],x=i[2],M=i[5],b=i[8]
return r[0]=s*m+a*v+o*x,r[3]=s*f+a*y+o*M,r[6]=s*g+a*_+o*b,r[1]=l*m+c*v+h*x,r[4]=l*f+c*y+h*M,r[7]=l*g+c*_+h*b,r[2]=u*m+d*v+p*x,r[5]=u*f+d*y+p*M,r[8]=u*g+d*_+p*b,this}multiplyScalar(t){const e=this.elements
return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8]
return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+n*u+i*d
if(0===p)return this.set(0,0,0,0,0,0,0,0,0)
const m=1/p
return t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*s)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t
const e=this.elements
return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements
return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const o=Math.cos(r),l=Math.sin(r)
return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements
return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],s=i[3],a=i[6],o=i[1],l=i[4],c=i[7]
return i[0]=e*r+n*o,i[3]=e*s+n*l,i[6]=e*a+n*c,i[1]=-n*r+e*o,i[4]=-n*s+e*l,i[7]=-n*a+e*c,this}translate(t,e){const n=this.elements
return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements
for(let i=0;i<9;i++)if(e[i]!==n[i])return!1
return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e]
return this}toArray(t=[],e=0){const n=this.elements
return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}function Lt(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0
return!1}Ct.prototype.isMatrix3=!0
const Pt={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array}
function Dt(t,e){return new Pt[t](e)}function It(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nt(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Ut(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}const Ot={[lt]:{[ct]:Nt},[ct]:{[lt]:Ut}},Ft={legacyMode:!0,get workingColorSpace(){return ct},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t
if(Ot[e]&&void 0!==Ot[e][n]){const i=Ot[e][n]
return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},Bt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ht={r:0,g:0,b:0},zt={h:0,s:0,l:0},Gt={h:0,s:0,l:0}
function Vt(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}function kt(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Wt{constructor(t,e,n){return void 0===e&&void 0===n?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Ft.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i="srgb-linear"){return this.r=t,this.g=e,this.b=n,Ft.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i="srgb-linear"){if(t=bt(t,1),e=Mt(e,0,1),n=Mt(n,0,1),0===e)this.r=this.g=this.b=n
else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i
this.r=Vt(r,i,t+1/3),this.g=Vt(r,i,t),this.b=Vt(r,i,t-1/3)}return Ft.toWorkingColorSpace(this,i),this}setStyle(t,e="srgb"){function n(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i
if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let t
const r=i[1],s=i[2]
switch(r){case"rgb":case"rgba":if(t=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(t[1],10))/255,this.g=Math.min(255,parseInt(t[2],10))/255,this.b=Math.min(255,parseInt(t[3],10))/255,Ft.toWorkingColorSpace(this,e),n(t[4]),this
if(t=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(t[1],10))/100,this.g=Math.min(100,parseInt(t[2],10))/100,this.b=Math.min(100,parseInt(t[3],10))/100,Ft.toWorkingColorSpace(this,e),n(t[4]),this
break
case"hsl":case"hsla":if(t=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const i=parseFloat(t[1])/360,r=parseInt(t[2],10)/100,s=parseInt(t[3],10)/100
return n(t[4]),this.setHSL(i,r,s,e)}}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const t=i[1],n=t.length
if(3===n)return this.r=parseInt(t.charAt(0)+t.charAt(0),16)/255,this.g=parseInt(t.charAt(1)+t.charAt(1),16)/255,this.b=parseInt(t.charAt(2)+t.charAt(2),16)/255,Ft.toWorkingColorSpace(this,e),this
if(6===n)return this.r=parseInt(t.charAt(0)+t.charAt(1),16)/255,this.g=parseInt(t.charAt(2)+t.charAt(3),16)/255,this.b=parseInt(t.charAt(4)+t.charAt(5),16)/255,Ft.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e="srgb"){const n=Bt[t.toLowerCase()]
return void 0!==n?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nt(t.r),this.g=Nt(t.g),this.b=Nt(t.b),this}copyLinearToSRGB(t){return this.r=Ut(t.r),this.g=Ut(t.g),this.b=Ut(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Ft.fromWorkingColorSpace(kt(this,Ht),t),Mt(255*Ht.r,0,255)<<16^Mt(255*Ht.g,0,255)<<8^Mt(255*Ht.b,0,255)<<0}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e="srgb-linear"){Ft.fromWorkingColorSpace(kt(this,Ht),e)
const n=Ht.r,i=Ht.g,r=Ht.b,s=Math.max(n,i,r),a=Math.min(n,i,r)
let o,l
const c=(a+s)/2
if(a===s)o=0,l=0
else{const t=s-a
switch(l=c<=.5?t/(s+a):t/(2-s-a),s){case n:o=(i-r)/t+(i<r?6:0)
break
case i:o=(r-n)/t+2
break
case r:o=(n-i)/t+4}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e="srgb-linear"){return Ft.fromWorkingColorSpace(kt(this,Ht),e),t.r=Ht.r,t.g=Ht.g,t.b=Ht.b,t}getStyle(t="srgb"){return Ft.fromWorkingColorSpace(kt(this,Ht),t),t!==lt?`color(${t} ${Ht.r} ${Ht.g} ${Ht.b})`:`rgb(${255*Ht.r|0},${255*Ht.g|0},${255*Ht.b|0})`}offsetHSL(t,e,n){return this.getHSL(zt),zt.h+=t,zt.s+=e,zt.l+=n,this.setHSL(zt.h,zt.s,zt.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zt),t.getHSL(Gt)
const n=wt(zt.h,Gt.h,e),i=wt(zt.s,Gt.s,e),r=wt(zt.l,Gt.l,e)
return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),!0===t.normalized&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}let jt
Wt.NAMES=Bt,Wt.prototype.isColor=!0,Wt.prototype.r=1,Wt.prototype.g=1,Wt.prototype.b=1
class Xt{static getDataURL(t){if(/^data:/i.test(t.src))return t.src
if("undefined"==typeof HTMLCanvasElement)return t.src
let e
if(t instanceof HTMLCanvasElement)e=t
else{void 0===jt&&(jt=It("canvas")),jt.width=t.width,jt.height=t.height
const n=jt.getContext("2d")
t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jt}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=It("canvas")
e.width=t.width,e.height=t.height
const n=e.getContext("2d")
n.drawImage(t,0,0,t.width,t.height)
const i=n.getImageData(0,0,t.width,t.height),r=i.data
for(let t=0;t<r.length;t++)r[t]=255*Nt(r[t]/255)
return n.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0)
for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*Nt(e[t]/255)):e[t]=Nt(e[t])
return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class qt{constructor(t=null){this.uuid=xt(),this.data=t,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||"string"==typeof t
if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid]
const n={uuid:this.uuid,url:""},i=this.data
if(null!==i){let t
if(Array.isArray(i)){t=[]
for(let e=0,n=i.length;e<n;e++)i[e].isDataTexture?t.push(Yt(i[e].image)):t.push(Yt(i[e]))}else t=Yt(i)
n.url=t}return e||(t.images[this.uuid]=n),n}}function Yt(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?Xt.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}qt.prototype.isSource=!0
let Jt=0
class Zt extends ft{constructor(t=Zt.DEFAULT_IMAGE,e=Zt.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=1,c=3e3){super(),Object.defineProperty(this,"id",{value:Jt++}),this.uuid=xt(),this.name="",this.source=new qt(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t
if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid]
const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment}
return"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r)return t
if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case h:t.x=t.x-Math.floor(t.x)
break
case u:t.x=t.x<0?0:1
break
case d:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case h:t.y=t.y-Math.floor(t.y)
break
case u:t.y=t.y<0?0:1
break
case d:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null,Zt.DEFAULT_MAPPING=r,Zt.prototype.isTexture=!0
class Kt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e
break
case 1:this.y=e
break
case 2:this.z=e
break
case 3:this.w=e
break
default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x
case 1:return this.y
case 2:return this.z
case 3:return this.w
default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements
return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w)
const e=Math.sqrt(1-t.w*t.w)
return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r
const s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10]
if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<a&&Math.abs(h+m)<a&&Math.abs(p+f)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this
e=Math.PI
const t=(l+1)/2,o=(d+1)/2,v=(g+1)/2,y=(c+u)/4,_=(h+m)/4,x=(p+f)/4
return t>o&&t>v?t<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(t),i=y/n,r=_/n):o>v?o<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(o),n=y/i,r=x/i):v<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=_/r,i=x/r),this.set(n,i,r,e),this}let v=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c))
return Math.abs(v)<.001&&(v=1),this.x=(f-p)/v,this.y=(h-m)/v,this.z=(u-c)/v,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length()
return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return void 0!==n&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Kt.prototype.isVector4=!0
class Qt extends ft{constructor(t,e,n={}){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e)
const i={width:t,height:e,depth:1}
this.texture=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==n.generateMipmaps&&n.generateMipmaps,this.texture.internalFormat=void 0!==n.internalFormat?n.internalFormat:null,this.texture.minFilter=void 0!==n.minFilter?n.minFilter:g,this.depthBuffer=void 0===n.depthBuffer||n.depthBuffer,this.stencilBuffer=void 0!==n.stencilBuffer&&n.stencilBuffer,this.depthTexture=void 0!==n.depthTexture?n.depthTexture:null,this.samples=void 0!==n.samples?n.samples:0}setSize(t,e,n=1){this.width===t&&this.height===e&&this.depth===n||(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.prototype.isWebGLRenderTarget=!0
class $t extends Zt{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=p,this.minFilter=p,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}$t.prototype.isDataArrayTexture=!0
class te extends Qt{constructor(t,e,n){super(t,e),this.depth=n,this.texture=new $t(null,t,e,n),this.texture.isRenderTargetTexture=!0}}te.prototype.isWebGLArrayRenderTarget=!0
class ee extends Zt{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=p,this.minFilter=p,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ee.prototype.isData3DTexture=!0
class ne extends Qt{constructor(t,e,n){super(t,e),this.depth=n,this.texture=new ee(null,t,e,n),this.texture.isRenderTargetTexture=!0}}ne.prototype.isWebGL3DRenderTarget=!0
class ie extends Qt{constructor(t,e,n,i={}){super(t,e,i)
const r=this.texture
this.texture=[]
for(let s=0;s<n;s++)this.texture[s]=r.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n
for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n
this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0
for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone()
return this}}ie.prototype.isWebGLMultipleRenderTargets=!0
class re{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3]
const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3]
if(0===a)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h)
if(1===a)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m)
if(h!==m||o!==u||l!==d||c!==p){let t=1-a
const e=o*u+l*d+c*p+h*m,n=e>=0?1:-1,i=1-e*e
if(i>Number.EPSILON){const r=Math.sqrt(i),s=Math.atan2(r,e*n)
t=Math.sin(t*s)/r,a=Math.sin(a*s)/r}const r=a*n
if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const t=1/Math.sqrt(o*o+l*l+c*c+h*h)
o*=t,l*=t,c*=t,h*=t}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3]
return t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.")
const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),u=o(n/2),d=o(i/2),p=o(r/2)
switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p
break
case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p
break
case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p
break
case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p
break
case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p
break
case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p
break
default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!1!==e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n)
return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h
if(u>0){const t=.5/Math.sqrt(u+1)
this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-i)*t}else if(n>a&&n>h){const t=2*Math.sqrt(1+n-a-h)
this._w=(c-o)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t}else if(a>h){const t=2*Math.sqrt(1+a-n-h)
this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(o+c)/t}else{const t=2*Math.sqrt(1+h-n-a)
this._w=(s-i)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1
return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t)
if(0===n)return this
const i=Math.min(1,e/n)
return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length()
return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w
return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this
if(1===e)return this.copy(t)
const n=this._x,i=this._y,r=this._z,s=this._w
let a=s*t._w+n*t._x+i*t._y+r*t._z
if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this
const o=1-a*a
if(o<=Number.EPSILON){const t=1-e
return this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l
return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random()
return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}re.prototype.isQuaternion=!0
class se{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e
break
case 1:this.y=e
break
case 2:this.z=e
break
default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x
case 1:return this.y
case 2:return this.z
default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(oe.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oe.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements
return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15])
return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=o*e+s*i-a*n,c=o*n+a*e-r*i,h=o*i+r*n-s*e,u=-r*e-s*n-a*i
return this.x=l*o+u*-r+c*-a-h*-s,this.y=c*o+u*-s+h*-r-l*-a,this.z=h*o+u*-a+l*-s-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements
return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length()
return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z
return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq()
if(0===e)return this.set(0,0,0)
const n=t.dot(this)/e
return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ae.copy(this).projectOnVector(t),this.sub(ae)}reflect(t){return this.sub(ae.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq())
if(0===e)return Math.PI/2
const n=this.dot(t)/e
return Math.acos(Mt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z
return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t
return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements
return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length()
return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return void 0!==n&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2)
return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}se.prototype.isVector3=!0
const ae=new se,oe=new re
class le{constructor(t=new se(1/0,1/0,1/0),e=new se(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0
for(let o=0,l=t.length;o<l;o+=3){const l=t[o],c=t[o+1],h=t[o+2]
l<e&&(e=l),c<n&&(n=c),h<i&&(i=h),l>r&&(r=l),c>s&&(s=c),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0
for(let o=0,l=t.count;o<l;o++){const l=t.getX(o),c=t.getY(o),h=t.getZ(o)
l<e&&(e=l),c<n&&(n=c),h<i&&(i=h),l>r&&(r=l),c>s&&(s=c),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,s,a),this}setFromPoints(t){this.makeEmpty()
for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e])
return this}setFromCenterAndSize(t,e){const n=he.copy(e).multiplyScalar(.5)
return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1)
const n=t.geometry
if(void 0!==n)if(e&&null!=n.attributes&&void 0!==n.attributes.position){const e=n.attributes.position
for(let n=0,i=e.count;n<i;n++)he.fromBufferAttribute(e,n).applyMatrix4(t.matrixWorld),this.expandByPoint(he)}else null===n.boundingBox&&n.computeBoundingBox(),ue.copy(n.boundingBox),ue.applyMatrix4(t.matrixWorld),this.union(ue)
const i=t.children
for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e)
return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,he),he.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n
return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1
this.getCenter(ye),_e.subVectors(this.max,ye),de.subVectors(t.a,ye),pe.subVectors(t.b,ye),me.subVectors(t.c,ye),fe.subVectors(pe,de),ge.subVectors(me,pe),ve.subVectors(de,me)
let e=[0,-fe.z,fe.y,0,-ge.z,ge.y,0,-ve.z,ve.y,fe.z,0,-fe.x,ge.z,0,-ge.x,ve.z,0,-ve.x,-fe.y,fe.x,0,-ge.y,ge.x,0,-ve.y,ve.x,0]
return!!be(e,de,pe,me,_e)&&(e=[1,0,0,0,1,0,0,0,1],!!be(e,de,pe,me,_e)&&(xe.crossVectors(fe,ge),e=[xe.x,xe.y,xe.z],be(e,de,pe,me,_e)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return he.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=.5*this.getSize(he).length(),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(ce[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ce[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ce[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ce[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ce[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ce[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ce[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ce[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ce)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}le.prototype.isBox3=!0
const ce=[new se,new se,new se,new se,new se,new se,new se,new se],he=new se,ue=new le,de=new se,pe=new se,me=new se,fe=new se,ge=new se,ve=new se,ye=new se,_e=new se,xe=new se,Me=new se
function be(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Me.fromArray(t,s)
const a=r.x*Math.abs(Me.x)+r.y*Math.abs(Me.y)+r.z*Math.abs(Me.z),o=e.dot(Me),l=n.dot(Me),c=i.dot(Me)
if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const we=new le,Ee=new se,Se=new se,Te=new se
class Ae{constructor(t=new se,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center
void 0!==e?n.copy(e):we.setFromPoints(t).getCenter(n)
let i=0
for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]))
return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius
return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t)
return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Te.subVectors(t,this.center)
const e=Te.lengthSq()
if(e>this.radius*this.radius){const t=Math.sqrt(e),n=.5*(t-this.radius)
this.center.add(Te.multiplyScalar(n/t)),this.radius+=n}return this}union(t){return!0===this.center.equals(t.center)?Se.set(0,0,1).multiplyScalar(t.radius):Se.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ee.copy(t.center).add(Se)),this.expandByPoint(Ee.copy(t.center).sub(Se)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const Re=new se,Ce=new se,Le=new se,Pe=new se,De=new se,Ie=new se,Ne=new se
class Ue{constructor(t=new se,e=new se(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Re)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin)
const n=e.dot(this.direction)
return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Re.subVectors(t,this.origin).dot(this.direction)
return e<0?this.origin.distanceToSquared(t):(Re.copy(this.direction).multiplyScalar(e).add(this.origin),Re.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ce.copy(t).add(e).multiplyScalar(.5),Le.copy(e).sub(t).normalize(),Pe.copy(this.origin).sub(Ce)
const r=.5*t.distanceTo(e),s=-this.direction.dot(Le),a=Pe.dot(this.direction),o=-Pe.dot(Le),l=Pe.lengthSq(),c=Math.abs(1-s*s)
let h,u,d,p
if(c>0)if(h=s*o-a,u=s*a-o,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c
h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l
else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l
else u<=-p?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l)
else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l
return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Le).multiplyScalar(u).add(Ce),d}intersectSphere(t,e){Re.subVectors(t.center,this.origin)
const n=Re.dot(this.direction),i=Re.dot(Re)-n*n,r=t.radius*t.radius
if(i>r)return null
const s=Math.sqrt(r-i),a=n-s,o=n+s
return a<0&&o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction)
if(0===e)return 0===t.distanceToPoint(this.origin)?0:null
const n=-(this.origin.dot(t.normal)+t.constant)/e
return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t)
return null===n?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin)
return 0===e||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o
const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin
return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n>s||r>i?null:((r>n||n!=n)&&(n=r),(s<i||i!=i)&&(i=s),h>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,Re)}intersectTriangle(t,e,n,i,r){De.subVectors(e,t),Ie.subVectors(n,t),Ne.crossVectors(De,Ie)
let s,a=this.direction.dot(Ne)
if(a>0){if(i)return null
s=1}else{if(!(a<0))return null
s=-1,a=-a}Pe.subVectors(this.origin,t)
const o=s*this.direction.dot(Ie.crossVectors(Pe,Ie))
if(o<0)return null
const l=s*this.direction.dot(De.cross(Pe))
if(l<0)return null
if(o+l>a)return null
const c=-s*Pe.dot(Ne)
return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class Oe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const g=this.elements
return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new Oe).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements
return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements
return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements
return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fe.setFromMatrixColumn(t,0).length(),r=1/Fe.setFromMatrixColumn(t,1).length(),s=1/Fe.setFromMatrixColumn(t,2).length()
return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.")
const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r)
if("XYZ"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h
e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*o}else if("YXZ"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h
e[0]=t+r*a,e[4]=i*a-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=n*a-i,e[6]=r+t*a,e[10]=s*o}else if("ZXY"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h
e[0]=t-r*a,e[4]=-s*h,e[8]=i+n*a,e[1]=n+i*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if("ZYX"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h
e[0]=o*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=a*o,e[10]=s*o}else if("YZX"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l
e[0]=o*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h}else if("XZY"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l
e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=a*c,e[10]=r*h+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(He,t,ze)}lookAt(t,e,n){const i=this.elements
return ke.subVectors(t,e),0===ke.lengthSq()&&(ke.z=1),ke.normalize(),Ge.crossVectors(n,ke),0===Ge.lengthSq()&&(1===Math.abs(n.z)?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Ge.crossVectors(n,ke)),Ge.normalize(),Ve.crossVectors(ke,Ge),i[0]=Ge.x,i[4]=Ve.x,i[8]=ke.x,i[1]=Ge.y,i[5]=Ve.y,i[9]=ke.y,i[2]=Ge.z,i[6]=Ve.z,i[10]=ke.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],v=n[3],y=n[7],_=n[11],x=n[15],M=i[0],b=i[4],w=i[8],E=i[12],S=i[1],T=i[5],A=i[9],R=i[13],C=i[2],L=i[6],P=i[10],D=i[14],I=i[3],N=i[7],U=i[11],O=i[15]
return r[0]=s*M+a*S+o*C+l*I,r[4]=s*b+a*T+o*L+l*N,r[8]=s*w+a*A+o*P+l*U,r[12]=s*E+a*R+o*D+l*O,r[1]=c*M+h*S+u*C+d*I,r[5]=c*b+h*T+u*L+d*N,r[9]=c*w+h*A+u*P+d*U,r[13]=c*E+h*R+u*D+d*O,r[2]=p*M+m*S+f*C+g*I,r[6]=p*b+m*T+f*L+g*N,r[10]=p*w+m*A+f*P+g*U,r[14]=p*E+m*R+f*D+g*O,r[3]=v*M+y*S+_*C+x*I,r[7]=v*b+y*T+_*L+x*N,r[11]=v*w+y*A+_*P+x*U,r[15]=v*E+y*R+_*D+x*O,this}multiplyScalar(t){const e=this.elements
return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14]
return t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){const t=this.elements
let e
return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements
return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],v=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,y=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,_=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,x=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,M=e*v+n*y+i*_+r*x
if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
const b=1/M
return t[0]=v*b,t[1]=(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*b,t[2]=(a*f*r-m*o*r+m*i*l-n*f*l-a*i*g+n*o*g)*b,t[3]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*b,t[4]=y*b,t[5]=(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*b,t[6]=(p*o*r-s*f*r-p*i*l+e*f*l+s*i*g-e*o*g)*b,t[7]=(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*b,t[8]=_*b,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*b,t[10]=(s*m*r-p*a*r+p*n*l-e*m*l-s*n*g+e*a*g)*b,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d)*b,t[12]=x*b,t[13]=(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*b,t[14]=(p*a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*b,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z
return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10]
return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t)
return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t)
return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t)
return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a
return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,v=o*l,y=o*c,_=o*h,x=n.x,M=n.y,b=n.z
return i[0]=(1-(m+g))*x,i[1]=(d+_)*x,i[2]=(p-y)*x,i[3]=0,i[4]=(d-_)*M,i[5]=(1-(u+g))*M,i[6]=(f+v)*M,i[7]=0,i[8]=(p+y)*b,i[9]=(f-v)*b,i[10]=(1-(u+m))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements
let r=Fe.set(i[0],i[1],i[2]).length()
const s=Fe.set(i[4],i[5],i[6]).length(),a=Fe.set(i[8],i[9],i[10]).length()
this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Be.copy(this)
const o=1/r,l=1/s,c=1/a
return Be.elements[0]*=o,Be.elements[1]*=o,Be.elements[2]*=o,Be.elements[4]*=l,Be.elements[5]*=l,Be.elements[6]*=l,Be.elements[8]*=c,Be.elements[9]*=c,Be.elements[10]*=c,e.setFromRotationMatrix(Be),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s){void 0===s&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.")
const a=this.elements,o=2*r/(e-t),l=2*r/(n-i),c=(e+t)/(e-t),h=(n+i)/(n-i),u=-(s+r)/(s-r),d=-2*s*r/(s-r)
return a[0]=o,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,s){const a=this.elements,o=1/(e-t),l=1/(n-i),c=1/(s-r),h=(e+t)*o,u=(n+i)*l,d=(s+r)*c
return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements
for(let i=0;i<16;i++)if(e[i]!==n[i])return!1
return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e]
return this}toArray(t=[],e=0){const n=this.elements
return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}Oe.prototype.isMatrix4=!0
const Fe=new se,Be=new Oe,He=new se(0,0,0),ze=new se(1,1,1),Ge=new se,Ve=new se,ke=new se,We=new Oe,je=new re
class Xe{constructor(t=0,e=0,n=0,i=Xe.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10]
switch(e){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0)
break
case"YXZ":this._x=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0)
break
case"ZXY":this._x=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r))
break
case"ZYX":this._y=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l))
break
case"YZX":this._z=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d))
break
case"XZY":this._z=Math.asin(-Mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0)
break
default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!0===n&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return We.makeRotationFromQuaternion(t),this.setFromRotationMatrix(We,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return je.setFromEuler(this),this.setFromQuaternion(je,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Xe.prototype.isEuler=!0,Xe.DefaultOrder="XYZ",Xe.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"]
class qe{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return 0!=(this.mask&t.mask)}isEnabled(t){return 0!=(this.mask&(1<<t|0))}}let Ye=0
const Je=new se,Ze=new re,Ke=new Oe,Qe=new se,$e=new se,tn=new se,en=new re,nn=new se(1,0,0),rn=new se(0,1,0),sn=new se(0,0,1),an={type:"added"},on={type:"removed"}
class ln extends ft{constructor(){super(),Object.defineProperty(this,"id",{value:Ye++}),this.uuid=xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DefaultUp.clone()
const t=new se,e=new Xe,n=new re,i=new se(1,1,1)
e._onChange((function(){n.setFromEuler(e,!1)})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ct}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=ln.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new qe,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ze.setFromAxisAngle(t,e),this.quaternion.multiply(Ze),this}rotateOnWorldAxis(t,e){return Ze.setFromAxisAngle(t,e),this.quaternion.premultiply(Ze),this}rotateX(t){return this.rotateOnAxis(nn,t)}rotateY(t){return this.rotateOnAxis(rn,t)}rotateZ(t){return this.rotateOnAxis(sn,t)}translateOnAxis(t,e){return Je.copy(t).applyQuaternion(this.quaternion),this.position.add(Je.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nn,t)}translateY(t){return this.translateOnAxis(rn,t)}translateZ(t){return this.translateOnAxis(sn,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qe.copy(t):Qe.set(t,e,n)
const i=this.parent
this.updateWorldMatrix(!0,!1),$e.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt($e,Qe,this.up):Ke.lookAt(Qe,$e,this.up),this.quaternion.setFromRotationMatrix(Ke),i&&(Ke.extractRotation(i.matrixWorld),Ze.setFromRotationMatrix(Ke),this.quaternion.premultiply(Ze.invert()))}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t])
return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(an)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t])
return this}const e=this.children.indexOf(t)
return-1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(on)),this}removeFromParent(){const t=this.parent
return null!==t&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t]
e.parent=null,e.dispatchEvent(on)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this
for(let n=0,i=this.children.length;n<i;n++){const i=this.children[n].getObjectByProperty(t,e)
if(void 0!==i)return i}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($e,t,tn),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($e,en,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1)
const e=this.matrixWorld.elements
return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this)
const e=this.children
for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(!1===this.visible)return
t(this)
const e=this.children
for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent
null!==e&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0)
const e=this.children
for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent
if(!0===t&&null!==n&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children
for(let e=0,n=t.length;e<n;e++)t[e].updateWorldMatrix(!1,!0)}}toJSON(t){const e=void 0===t||"string"==typeof t,n={}
e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"})
const i={}
function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid)
else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry)
const e=this.geometry.parameters
if(void 0!==e&&void 0!==e.shapes){const n=e.shapes
if(Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const i=n[e]
r(t.shapes,i)}else r(t.shapes,n)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[]
for(let n=0,i=this.material.length;n<i;n++)e.push(r(t.materials,this.material[n]))
i.material=e}else i.material=r(t.materials,this.material)
if(this.children.length>0){i.children=[]
for(let e=0;e<this.children.length;e++)i.children.push(this.children[e].toJSON(t).object)}if(this.animations.length>0){i.animations=[]
for(let e=0;e<this.animations.length;e++){const n=this.animations[e]
i.animations.push(r(t.animations,n))}}if(e){const e=s(t.geometries),i=s(t.materials),r=s(t.textures),a=s(t.images),o=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes)
e.length>0&&(n.geometries=e),i.length>0&&(n.materials=i),r.length>0&&(n.textures=r),a.length>0&&(n.images=a),o.length>0&&(n.shapes=o),l.length>0&&(n.skeletons=l),c.length>0&&(n.animations=c),h.length>0&&(n.nodes=h)}return n.object=i,n
function s(t){const e=[]
for(const n in t){const i=t[n]
delete i.metadata,e.push(i)}return e}}clone(t){return(new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let n=0;n<t.children.length;n++){const e=t.children[n]
this.add(e.clone())}return this}}ln.DefaultUp=new se(0,1,0),ln.DefaultMatrixAutoUpdate=!0,ln.prototype.isObject3D=!0
const cn=new se,hn=new se,un=new se,dn=new se,pn=new se,mn=new se,fn=new se,gn=new se,vn=new se,yn=new se
class _n{constructor(t=new se,e=new se,n=new se){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn)
const r=i.lengthSq()
return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){cn.subVectors(i,e),hn.subVectors(n,e),un.subVectors(t,e)
const s=cn.dot(cn),a=cn.dot(hn),o=cn.dot(un),l=hn.dot(hn),c=hn.dot(un),h=s*l-a*a
if(0===h)return r.set(-2,-1,-1)
const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u
return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(t,e,n,i,r,s,a,o){return this.getBarycoord(t,e,n,i,dn),o.set(0,0),o.addScaledVector(r,dn.x),o.addScaledVector(s,dn.y),o.addScaledVector(a,dn.z),o}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),hn.subVectors(t,e),cn.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),.5*cn.cross(hn).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return _n.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c
let s,a
pn.subVectors(i,n),mn.subVectors(r,n),gn.subVectors(t,n)
const o=pn.dot(gn),l=mn.dot(gn)
if(o<=0&&l<=0)return e.copy(n)
vn.subVectors(t,i)
const c=pn.dot(vn),h=mn.dot(vn)
if(c>=0&&h<=c)return e.copy(i)
const u=o*h-c*l
if(u<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(pn,s)
yn.subVectors(t,r)
const d=pn.dot(yn),p=mn.dot(yn)
if(p>=0&&d<=p)return e.copy(r)
const m=d*l-o*p
if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(mn,a)
const f=c*p-d*h
if(f<=0&&h-c>=0&&d-p>=0)return fn.subVectors(r,i),a=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(fn,a)
const g=1/(f+m+u)
return s=m*g,a=u*g,e.copy(n).addScaledVector(pn,s).addScaledVector(mn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let xn=0
class Mn extends ft{constructor(){super(),Object.defineProperty(this,"id",{value:xn++}),this.uuid=xt(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ht,this.stencilZFail=ht,this.stencilZPass=ht,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const n=t[e]
if(void 0===n){console.warn("THREE.Material: '"+e+"' parameter is undefined.")
continue}if("shading"===e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===n
continue}const i=this[e]
void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}}toJSON(t){const e=void 0===t||"string"==typeof t
e&&(t={textures:{},images:{}})
const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}}
function i(t){const e=[]
for(const n in t){const i=t[n]
delete i.metadata,e.push(i)}return e}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),void 0!==this.sheen&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(n.combine=this.combine)),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(n.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&(n.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(n.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(n.size=this.size),null!==this.shadowSide&&(n.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),0!==this.side&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(n.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=this.flatShading),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),e){const e=i(t.textures),r=i(t.images)
e.length>0&&(n.textures=e),r.length>0&&(n.images=r)}return n}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite
const e=t.clippingPlanes
let n=null
if(null!==e){const t=e.length
n=new Array(t)
for(let i=0;i!==t;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){!0===t&&this.version++}}Mn.prototype.isMaterial=!0,Mn.fromType=function(){return null}
class bn extends Mn{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}bn.prototype.isMeshBasicMaterial=!0
const wn=new se,En=new Rt
class Sn{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===n,this.usage=ut,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize
for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i]
return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array
let n=0
for(let i=0,r=t.length;i<r;i++){let r=t[i]
void 0===r&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new Wt),e[n++]=r.r,e[n++]=r.g,e[n++]=r.b}return this}copyVector2sArray(t){const e=this.array
let n=0
for(let i=0,r=t.length;i<r;i++){let r=t[i]
void 0===r&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new Rt),e[n++]=r.x,e[n++]=r.y}return this}copyVector3sArray(t){const e=this.array
let n=0
for(let i=0,r=t.length;i<r;i++){let r=t[i]
void 0===r&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new se),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z}return this}copyVector4sArray(t){const e=this.array
let n=0
for(let i=0,r=t.length;i<r;i++){let r=t[i]
void 0===r&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new Kt),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z,e[n++]=r.w}return this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix3(t),this.setXY(e,En.x,En.y)
else if(3===this.itemSize)for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix3(t),this.setXYZ(e,wn.x,wn.y,wn.z)
return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z)
return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z)
return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z)
return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}
return""!==this.name&&(t.name=this.name),this.usage!==ut&&(t.usage=this.usage),0===this.updateRange.offset&&-1===this.updateRange.count||(t.updateRange=this.updateRange),t}}Sn.prototype.isBufferAttribute=!0
class Tn extends Sn{constructor(t,e,n){super(new Int8Array(t),e,n)}}class An extends Sn{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Rn extends Sn{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Cn extends Sn{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Ln extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pn extends Sn{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Dn extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class In extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}In.prototype.isFloat16BufferAttribute=!0
class Nn extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}class Un extends Sn{constructor(t,e,n){super(new Float64Array(t),e,n)}}let On=0
const Fn=new Oe,Bn=new ln,Hn=new se,zn=new le,Gn=new le,Vn=new se
class kn extends ft{constructor(){super(),Object.defineProperty(this,"id",{value:On++}),this.uuid=xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lt(t)?Dn:Ln)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position
void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0)
const n=this.attributes.normal
if(void 0!==n){const e=(new Ct).getNormalMatrix(t)
n.applyNormalMatrix(e),n.needsUpdate=!0}const i=this.attributes.tangent
return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return Bn.lookAt(t),Bn.updateMatrix(),this.applyMatrix4(Bn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(t){const e=[]
for(let n=0,i=t.length;n<i;n++){const i=t[n]
e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Nn(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new le)
const t=this.attributes.position,e=this.morphAttributes.position
if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0))
if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const t=e[n]
zn.setFromBufferAttribute(t),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new Ae)
const t=this.attributes.position,e=this.morphAttributes.position
if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new se,1/0)
if(t){const n=this.boundingSphere.center
if(zn.setFromBufferAttribute(t),e)for(let t=0,r=e.length;t<r;t++){const n=e[t]
Gn.setFromBufferAttribute(n),this.morphTargetsRelative?(Vn.addVectors(zn.min,Gn.min),zn.expandByPoint(Vn),Vn.addVectors(zn.max,Gn.max),zn.expandByPoint(Vn)):(zn.expandByPoint(Gn.min),zn.expandByPoint(Gn.max))}zn.getCenter(n)
let i=0
for(let e=0,r=t.count;e<r;e++)Vn.fromBufferAttribute(t,e),i=Math.max(i,n.distanceToSquared(Vn))
if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],a=this.morphTargetsRelative
for(let e=0,r=s.count;e<r;e++)Vn.fromBufferAttribute(s,e),a&&(Hn.fromBufferAttribute(t,e),Vn.add(Hn)),i=Math.max(i,n.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes
if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)")
const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3
!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4))
const o=this.getAttribute("tangent").array,l=[],c=[]
for(let S=0;S<a;S++)l[S]=new se,c[S]=new se
const h=new se,u=new se,d=new se,p=new Rt,m=new Rt,f=new Rt,g=new se,v=new se
function y(t,e,n){h.fromArray(i,3*t),u.fromArray(i,3*e),d.fromArray(i,3*n),p.fromArray(s,2*t),m.fromArray(s,2*e),f.fromArray(s,2*n),u.sub(h),d.sub(h),m.sub(p),f.sub(p)
const r=1/(m.x*f.y-f.x*m.y)
isFinite(r)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(r),v.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[n].add(g),c[t].add(v),c[e].add(v),c[n].add(v))}let _=this.groups
0===_.length&&(_=[{start:0,count:n.length}])
for(let S=0,T=_.length;S<T;++S){const t=_[S],e=t.start
for(let i=e,r=e+t.count;i<r;i+=3)y(n[i+0],n[i+1],n[i+2])}const x=new se,M=new se,b=new se,w=new se
function E(t){b.fromArray(r,3*t),w.copy(b)
const e=l[t]
x.copy(e),x.sub(b.multiplyScalar(b.dot(e))).normalize(),M.crossVectors(w,e)
const n=M.dot(c[t])<0?-1:1
o[4*t]=x.x,o[4*t+1]=x.y,o[4*t+2]=x.z,o[4*t+3]=n}for(let S=0,T=_.length;S<T;++S){const t=_[S],e=t.start
for(let i=e,r=e+t.count;i<r;i+=3)E(n[i+0]),E(n[i+1]),E(n[i+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position")
if(void 0!==e){let n=this.getAttribute("normal")
if(void 0===n)n=new Sn(new Float32Array(3*e.count),3),this.setAttribute("normal",n)
else for(let t=0,e=n.count;t<e;t++)n.setXYZ(t,0,0,0)
const i=new se,r=new se,s=new se,a=new se,o=new se,l=new se,c=new se,h=new se
if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2)
i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(n,d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let t=0,u=e.count;t<u;t+=3)i.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z)
this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!t||!t.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t)
void 0===e&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."))
const n=this.attributes
for(const i in n){if(void 0===t.attributes[i])continue
const r=n[i].array,s=t.attributes[i],a=s.array,o=s.itemSize*e,l=Math.min(a.length,r.length-o)
for(let t=0,e=o;t<l;t++,e++)r[e]=a[t]}return this}normalizeNormals(){const t=this.attributes.normal
for(let e=0,n=t.count;e<n;e++)Vn.fromBufferAttribute(t,e),Vn.normalize(),t.setXYZ(e,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function t(t,e){const n=t.array,i=t.itemSize,r=t.normalized,s=new n.constructor(e.length*i)
let a=0,o=0
for(let l=0,c=e.length;l<c;l++){a=t.isInterleavedBufferAttribute?e[l]*t.data.stride+t.offset:e[l]*i
for(let t=0;t<i;t++)s[o++]=n[a++]}return new Sn(s,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this
const e=new kn,n=this.index.array,i=this.attributes
for(const a in i){const r=t(i[a],n)
e.setAttribute(a,r)}const r=this.morphAttributes
for(const a in r){const i=[],s=r[a]
for(let e=0,r=s.length;e<r;e++){const r=t(s[e],n)
i.push(r)}e.morphAttributes[a]=i}e.morphTargetsRelative=this.morphTargetsRelative
const s=this.groups
for(let a=0,o=s.length;a<o;a++){const t=s[a]
e.addGroup(t.start,t.count,t.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}}
if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters
for(const n in e)void 0!==e[n]&&(t[n]=e[n])
return t}t.data={attributes:{}}
const e=this.index
null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)})
const n=this.attributes
for(const o in n){const e=n[o]
t.data.attributes[o]=e.toJSON(t.data)}const i={}
let r=!1
for(const o in this.morphAttributes){const e=this.morphAttributes[o],n=[]
for(let i=0,r=e.length;i<r;i++){const r=e[i]
n.push(r.toJSON(t.data))}n.length>0&&(i[o]=n,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative)
const s=this.groups
s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)))
const a=this.boundingSphere
return null!==a&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return(new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null
const e={}
this.name=t.name
const n=t.index
null!==n&&this.setIndex(n.clone(e))
const i=t.attributes
for(const l in i){const t=i[l]
this.setAttribute(l,t.clone(e))}const r=t.morphAttributes
for(const l in r){const t=[],n=r[l]
for(let i=0,r=n.length;i<r;i++)t.push(n[i].clone(e))
this.morphAttributes[l]=t}this.morphTargetsRelative=t.morphTargetsRelative
const s=t.groups
for(let l=0,c=s.length;l<c;l++){const t=s[l]
this.addGroup(t.start,t.count,t.materialIndex)}const a=t.boundingBox
null!==a&&(this.boundingBox=a.clone())
const o=t.boundingSphere
return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,void 0!==t.parameters&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}kn.prototype.isBufferGeometry=!0
const Wn=new Oe,jn=new Ue,Xn=new Ae,qn=new se,Yn=new se,Jn=new se,Zn=new se,Kn=new se,Qn=new se,$n=new se,ti=new se,ei=new se,ni=new Rt,ii=new Rt,ri=new Rt,si=new se,ai=new se
class oi extends ln{constructor(t=new kn,e=new bn){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry
if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e)
if(n.length>0){const t=e[n[0]]
if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={}
for(let e=0,n=t.length;e<n;e++){const n=t[e].name||String(e)
this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e}}}}else{const e=t.morphTargets
void 0!==e&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld
if(void 0===i)return
if(null===n.boundingSphere&&n.computeBoundingSphere(),Xn.copy(n.boundingSphere),Xn.applyMatrix4(r),!1===t.ray.intersectsSphere(Xn))return
if(Wn.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Wn),null!==n.boundingBox&&!1===jn.intersectsBox(n.boundingBox))return
let s
if(n.isBufferGeometry){const r=n.index,a=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange
if(null!==r)if(Array.isArray(i))for(let n=0,p=u.length;n<p;n++){const p=u[n],m=i[p.materialIndex]
for(let n=Math.max(p.start,d.start),i=Math.min(r.count,Math.min(p.start+p.count,d.start+d.count));n<i;n+=3){const i=r.getX(n),u=r.getX(n+1),d=r.getX(n+2)
s=li(this,m,t,jn,a,o,l,c,h,i,u,d),s&&(s.faceIndex=Math.floor(n/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else for(let n=Math.max(0,d.start),p=Math.min(r.count,d.start+d.count);n<p;n+=3){const u=r.getX(n),d=r.getX(n+1),p=r.getX(n+2)
s=li(this,i,t,jn,a,o,l,c,h,u,d,p),s&&(s.faceIndex=Math.floor(n/3),e.push(s))}else if(void 0!==a)if(Array.isArray(i))for(let n=0,p=u.length;n<p;n++){const r=u[n],p=i[r.materialIndex]
for(let n=Math.max(r.start,d.start),i=Math.min(a.count,Math.min(r.start+r.count,d.start+d.count));n<i;n+=3)s=li(this,p,t,jn,a,o,l,c,h,n,n+1,n+2),s&&(s.faceIndex=Math.floor(n/3),s.face.materialIndex=r.materialIndex,e.push(s))}else for(let n=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);n<p;n+=3)s=li(this,i,t,jn,a,o,l,c,h,n,n+1,n+2),s&&(s.faceIndex=Math.floor(n/3),e.push(s))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}function li(t,e,n,i,r,s,a,o,l,c,h,u){qn.fromBufferAttribute(r,c),Yn.fromBufferAttribute(r,h),Jn.fromBufferAttribute(r,u)
const d=t.morphTargetInfluences
if(s&&d){$n.set(0,0,0),ti.set(0,0,0),ei.set(0,0,0)
for(let t=0,e=s.length;t<e;t++){const e=d[t],n=s[t]
0!==e&&(Zn.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,h),Qn.fromBufferAttribute(n,u),a?($n.addScaledVector(Zn,e),ti.addScaledVector(Kn,e),ei.addScaledVector(Qn,e)):($n.addScaledVector(Zn.sub(qn),e),ti.addScaledVector(Kn.sub(Yn),e),ei.addScaledVector(Qn.sub(Jn),e)))}qn.add($n),Yn.add(ti),Jn.add(ei)}t.isSkinnedMesh&&(t.boneTransform(c,qn),t.boneTransform(h,Yn),t.boneTransform(u,Jn))
const p=function(t,e,n,i,r,s,a,o){let l
if(l=1===e.side?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,2!==e.side,o),null===l)return null
ai.copy(o),ai.applyMatrix4(t.matrixWorld)
const c=n.ray.origin.distanceTo(ai)
return c<n.near||c>n.far?null:{distance:c,point:ai.clone(),object:t}}(t,e,n,i,qn,Yn,Jn,si)
if(p){o&&(ni.fromBufferAttribute(o,c),ii.fromBufferAttribute(o,h),ri.fromBufferAttribute(o,u),p.uv=_n.getUV(si,qn,Yn,Jn,ni,ii,ri,new Rt)),l&&(ni.fromBufferAttribute(l,c),ii.fromBufferAttribute(l,h),ri.fromBufferAttribute(l,u),p.uv2=_n.getUV(si,qn,Yn,Jn,ni,ii,ri,new Rt))
const t={a:c,b:h,c:u,normal:new se,materialIndex:0}
_n.getNormal(qn,Yn,Jn,t.normal),p.face=t}return p}oi.prototype.isMesh=!0
class ci extends kn{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s}
const a=this
i=Math.floor(i),r=Math.floor(r),s=Math.floor(s)
const o=[],l=[],c=[],h=[]
let u=0,d=0
function p(t,e,n,i,r,s,p,m,f,g,v){const y=s/f,_=p/g,x=s/2,M=p/2,b=m/2,w=f+1,E=g+1
let S=0,T=0
const A=new se
for(let a=0;a<E;a++){const s=a*_-M
for(let o=0;o<w;o++){const u=o*y-x
A[t]=u*i,A[e]=s*r,A[n]=b,l.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=m>0?1:-1,c.push(A.x,A.y,A.z),h.push(o/f),h.push(1-a/g),S+=1}}for(let a=0;a<g;a++)for(let t=0;t<f;t++){const e=u+t+w*a,n=u+t+w*(a+1),i=u+(t+1)+w*(a+1),r=u+(t+1)+w*a
o.push(e,n,r),o.push(n,i,r),T+=6}a.addGroup(d,T,v),d+=T,u+=S}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(h,2))}static fromJSON(t){return new ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hi(t){const e={}
for(const n in t){e[n]={}
for(const i in t[n]){const r=t[n][i]
r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ui(t){const e={}
for(let n=0;n<t.length;n++){const i=hi(t[n])
for(const t in i)e[t]=i[t]}return e}const di={clone:hi,merge:ui}
class pi extends Mn{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t)
e.glslVersion=this.glslVersion,e.uniforms={}
for(const i in this.uniforms){const n=this.uniforms[i].value
n&&n.isTexture?e.uniforms[i]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[i]={type:"m4",value:n.toArray()}:e.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader
const n={}
for(const i in this.extensions)!0===this.extensions[i]&&(n[i]=!0)
return Object.keys(n).length>0&&(e.extensions=n),e}}pi.prototype.isShaderMaterial=!0
class mi extends ln{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1)
const e=this.matrixWorld.elements
return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}mi.prototype.isCamera=!0
class fi extends mi{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t
this.fov=2*_t*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*yt*this.fov)
return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*_t*Math.atan(Math.tan(.5*yt*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near
let e=t*Math.tan(.5*yt*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i
const s=this.view
if(null!==this.view&&this.view.enabled){const t=s.fullWidth,a=s.fullHeight
r+=s.offsetX*i/t,e-=s.offsetY*n/a,i*=s.width/t,n*=s.height/a}const a=this.filmOffset
0!==a&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t)
return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}fi.prototype.isPerspectiveCamera=!0
const gi=90
class vi extends ln{constructor(t,e,n){if(super(),this.type="CubeCamera",!0!==n.isWebGLCubeRenderTarget)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.")
this.renderTarget=n
const i=new fi(gi,1,t,e)
i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new se(1,0,0)),this.add(i)
const r=new fi(gi,1,t,e)
r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new se(-1,0,0)),this.add(r)
const s=new fi(gi,1,t,e)
s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new se(0,1,0)),this.add(s)
const a=new fi(gi,1,t,e)
a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new se(0,-1,0)),this.add(a)
const o=new fi(gi,1,t,e)
o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new se(0,0,1)),this.add(o)
const l=new fi(gi,1,t,e)
l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new se(0,0,-1)),this.add(l)}update(t,e){null===this.parent&&this.updateMatrixWorld()
const n=this.renderTarget,[i,r,s,a,o,l]=this.children,c=t.getRenderTarget(),h=t.outputEncoding,u=t.toneMapping,d=t.xr.enabled
t.outputEncoding=at,t.toneMapping=0,t.xr.enabled=!1
const p=n.texture.generateMipmaps
n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,o),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(c),t.outputEncoding=h,t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class yi extends Zt{constructor(t,e,n,i,r,a,o,l,c,h){super(t=void 0!==t?t:[],e=void 0!==e?e:s,n,i,r,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}yi.prototype.isCubeTexture=!0
class _i extends Qt{constructor(t,e={}){super(t,t,e)
const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n]
this.texture=new yi(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:g}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter
const n=new ci(5,5,5),i=new pi({name:"CubemapFromEquirect",uniforms:hi({tEquirect:{value:null}}),vertexShader:"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",side:1,blending:0})
i.uniforms.tEquirect.value=e
const r=new oi(n,i),s=e.minFilter
return e.minFilter===y&&(e.minFilter=g),new vi(1,10,this).update(t,r),e.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget()
for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i)
t.setRenderTarget(r)}}_i.prototype.isWebGLCubeRenderTarget=!0
const xi=new se,Mi=new se,bi=new Ct
class wi{constructor(t=new se(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xi.subVectors(n,e).cross(Mi.subVectors(t,e)).normalize()
return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length()
return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(xi),i=this.normal.dot(n)
if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null
const r=-(t.start.dot(this.normal)+this.constant)/i
return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end)
return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bi.getNormalMatrix(t),i=this.coplanarPoint(xi).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize()
return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return(new this.constructor).copy(this)}}wi.prototype.isPlane=!0
const Ei=new Ae,Si=new se
class Ti{constructor(t=new wi,e=new wi,n=new wi,i=new wi,r=new wi,s=new wi){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes
return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes
for(let n=0;n<6;n++)e[n].copy(t.planes[n])
return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],a=n[3],o=n[4],l=n[5],c=n[6],h=n[7],u=n[8],d=n[9],p=n[10],m=n[11],f=n[12],g=n[13],v=n[14],y=n[15]
return e[0].setComponents(a-i,h-o,m-u,y-f).normalize(),e[1].setComponents(a+i,h+o,m+u,y+f).normalize(),e[2].setComponents(a+r,h+l,m+d,y+g).normalize(),e[3].setComponents(a-r,h-l,m-d,y-g).normalize(),e[4].setComponents(a-s,h-c,m-p,y-v).normalize(),e[5].setComponents(a+s,h+c,m+p,y+v).normalize(),this}intersectsObject(t){const e=t.geometry
return null===e.boundingSphere&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius
for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1
return!0}intersectsBox(t){const e=this.planes
for(let n=0;n<6;n++){const i=e[n]
if(Si.x=i.normal.x>0?t.max.x:t.min.x,Si.y=i.normal.y>0?t.max.y:t.min.y,Si.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Si)<0)return!1}return!0}containsPoint(t){const e=this.planes
for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1
return!0}clone(){return(new this.constructor).copy(this)}}function Ai(){let t=null,e=!1,n=null,i=null
function r(e,s){n(e,s),i=t.requestAnimationFrame(r)}return{start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(t){n=t},setContext:function(e){t=e}}}function Ri(t,e){const n=e.isWebGL2,i=new WeakMap
return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data)
const n=i.get(e)
n&&(t.deleteBuffer(n.buffer),i.delete(e))},update:function(e,r){if(e.isGLBufferAttribute){const t=i.get(e)
return void((!t||t.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data)
const s=i.get(e)
void 0===s?i.set(e,function(e,i){const r=e.array,s=e.usage,a=t.createBuffer()
let o
if(t.bindBuffer(i,a),t.bufferData(i,r,s),e.onUploadCallback(),r instanceof Float32Array)o=t.FLOAT
else if(r instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!n)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")
o=t.HALF_FLOAT}else o=t.UNSIGNED_SHORT
else if(r instanceof Int16Array)o=t.SHORT
else if(r instanceof Uint32Array)o=t.UNSIGNED_INT
else if(r instanceof Int32Array)o=t.INT
else if(r instanceof Int8Array)o=t.BYTE
else if(r instanceof Uint8Array)o=t.UNSIGNED_BYTE
else{if(!(r instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r)
o=t.UNSIGNED_BYTE}return{buffer:a,type:o,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version}}(e,r)):s.version<e.version&&(function(e,i,r){const s=i.array,a=i.updateRange
t.bindBuffer(r,e),-1===a.count?t.bufferSubData(r,0,s):(n?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1)}(s.buffer,e,r),s.version=e.version)}}}class Ci extends kn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i}
const r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,u=e/o,d=[],p=[],m=[],f=[]
for(let g=0;g<c;g++){const t=g*u-s
for(let e=0;e<l;e++){const n=e*h-r
p.push(n,-t,0),m.push(0,0,1),f.push(e/a),f.push(1-g/o)}}for(let g=0;g<o;g++)for(let t=0;t<a;t++){const e=t+l*g,n=t+l*(g+1),i=t+1+l*(g+1),r=t+1+l*g
d.push(e,n,r),d.push(n,i,r)}this.setIndex(d),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(f,2))}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}const Li={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",alphatest_pars_fragment:"#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphcolor_vertex:"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",normal_fragment_begin:"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",normal_pars_fragment:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_pars_vertex:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_vertex:"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",output_fragment:"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmission_fragment:"#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",transmission_pars_fragment:"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshnormal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",meshnormal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",shadow_vert:"#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"},Pi={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},Di={basic:{uniforms:ui([Pi.common,Pi.specularmap,Pi.envmap,Pi.aomap,Pi.lightmap,Pi.fog]),vertexShader:Li.meshbasic_vert,fragmentShader:Li.meshbasic_frag},lambert:{uniforms:ui([Pi.common,Pi.specularmap,Pi.envmap,Pi.aomap,Pi.lightmap,Pi.emissivemap,Pi.fog,Pi.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Li.meshlambert_vert,fragmentShader:Li.meshlambert_frag},phong:{uniforms:ui([Pi.common,Pi.specularmap,Pi.envmap,Pi.aomap,Pi.lightmap,Pi.emissivemap,Pi.bumpmap,Pi.normalmap,Pi.displacementmap,Pi.fog,Pi.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Li.meshphong_vert,fragmentShader:Li.meshphong_frag},standard:{uniforms:ui([Pi.common,Pi.envmap,Pi.aomap,Pi.lightmap,Pi.emissivemap,Pi.bumpmap,Pi.normalmap,Pi.displacementmap,Pi.roughnessmap,Pi.metalnessmap,Pi.fog,Pi.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Li.meshphysical_vert,fragmentShader:Li.meshphysical_frag},toon:{uniforms:ui([Pi.common,Pi.aomap,Pi.lightmap,Pi.emissivemap,Pi.bumpmap,Pi.normalmap,Pi.displacementmap,Pi.gradientmap,Pi.fog,Pi.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Li.meshtoon_vert,fragmentShader:Li.meshtoon_frag},matcap:{uniforms:ui([Pi.common,Pi.bumpmap,Pi.normalmap,Pi.displacementmap,Pi.fog,{matcap:{value:null}}]),vertexShader:Li.meshmatcap_vert,fragmentShader:Li.meshmatcap_frag},points:{uniforms:ui([Pi.points,Pi.fog]),vertexShader:Li.points_vert,fragmentShader:Li.points_frag},dashed:{uniforms:ui([Pi.common,Pi.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Li.linedashed_vert,fragmentShader:Li.linedashed_frag},depth:{uniforms:ui([Pi.common,Pi.displacementmap]),vertexShader:Li.depth_vert,fragmentShader:Li.depth_frag},normal:{uniforms:ui([Pi.common,Pi.bumpmap,Pi.normalmap,Pi.displacementmap,{opacity:{value:1}}]),vertexShader:Li.meshnormal_vert,fragmentShader:Li.meshnormal_frag},sprite:{uniforms:ui([Pi.sprite,Pi.fog]),vertexShader:Li.sprite_vert,fragmentShader:Li.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:Li.background_vert,fragmentShader:Li.background_frag},cube:{uniforms:ui([Pi.envmap,{opacity:{value:1}}]),vertexShader:Li.cube_vert,fragmentShader:Li.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Li.equirect_vert,fragmentShader:Li.equirect_frag},distanceRGBA:{uniforms:ui([Pi.common,Pi.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Li.distanceRGBA_vert,fragmentShader:Li.distanceRGBA_frag},shadow:{uniforms:ui([Pi.lights,Pi.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Li.shadow_vert,fragmentShader:Li.shadow_frag}}
function Ii(t,e,n,i,r,s){const a=new Wt(0)
let o,l,h=!0===r?0:1,u=null,d=0,p=null
function m(t,e){n.buffers.color.setClear(t.r,t.g,t.b,e,s)}return{getClearColor:function(){return a},setClearColor:function(t,e=1){a.set(t),h=e,m(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(t){h=t,m(a,h)},render:function(n,r){let s=!1,f=!0===r.isScene?r.background:null
f&&f.isTexture&&(f=e.get(f))
const g=t.xr,v=g.getSession&&g.getSession()
v&&"additive"===v.environmentBlendMode&&(f=null),null===f?m(a,h):f&&f.isColor&&(m(f,1),s=!0),(t.autoClear||s)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),f&&(f.isCubeTexture||f.mapping===c)?(void 0===l&&(l=new oi(new ci(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:hi(Di.cube.uniforms),vertexShader:Di.cube.vertexShader,fragmentShader:Di.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&!1===f.isRenderTargetTexture?-1:1,u===f&&d===f.version&&p===t.toneMapping||(l.material.needsUpdate=!0,u=f,d=f.version,p=t.toneMapping),n.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(void 0===o&&(o=new oi(new Ci(2,2),new pi({name:"BackgroundMaterial",uniforms:hi(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,!0===f.matrixAutoUpdate&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),u===f&&d===f.version&&p===t.toneMapping||(o.material.needsUpdate=!0,u=f,d=f.version,p=t.toneMapping),n.unshift(o,o.geometry,o.material,0,0,null))}}}function Ni(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||null!==s,o={},l=p(null)
let c=l,h=!1
function u(e){return i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function d(e){return i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(t){const e=[],n=[],i=[]
for(let s=0;s<r;s++)e[s]=0,n[s]=0,i[s]=0
return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function m(){const t=c.newAttributes
for(let e=0,n=t.length;e<n;e++)t[e]=0}function f(t){g(t,0)}function g(n,r){const s=c.newAttributes,a=c.enabledAttributes,o=c.attributeDivisors
s[n]=1,0===a[n]&&(t.enableVertexAttribArray(n),a[n]=1),o[n]!==r&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](n,r),o[n]=r)}function v(){const e=c.newAttributes,n=c.enabledAttributes
for(let i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0)}function y(e,n,r,s,a,o){!0!==i.isWebGL2||r!==t.INT&&r!==t.UNSIGNED_INT?t.vertexAttribPointer(e,n,r,s,a,o):t.vertexAttribIPointer(e,n,r,a,o)}function _(){x(),h=!0,c!==l&&(c=l,u(c.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(r,l,d,_,x){let M=!1
if(a){const e=function(e,n,r){const a=!0===r.wireframe
let l=o[e.id]
void 0===l&&(l={},o[e.id]=l)
let c=l[n.id]
void 0===c&&(c={},l[n.id]=c)
let h=c[a]
return void 0===h&&(h=p(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[a]=h),h}(_,d,l)
c!==e&&(c=e,u(c.object)),M=function(t,e){const n=c.attributes,i=t.attributes
let r=0
for(const s in i){const t=n[s],e=i[s]
if(void 0===t)return!0
if(t.attribute!==e)return!0
if(t.data!==e.data)return!0
r++}return c.attributesNum!==r||c.index!==e}(_,x),M&&function(t,e){const n={},i=t.attributes
let r=0
for(const s in i){const t=i[s],e={}
e.attribute=t,t.data&&(e.data=t.data),n[s]=e,r++}c.attributes=n,c.attributesNum=r,c.index=e}(_,x)}else{const t=!0===l.wireframe
c.geometry===_.id&&c.program===d.id&&c.wireframe===t||(c.geometry=_.id,c.program=d.id,c.wireframe=t,M=!0)}!0===r.isInstancedMesh&&(M=!0),null!==x&&n.update(x,t.ELEMENT_ARRAY_BUFFER),(M||h)&&(h=!1,function(r,s,a,o){if(!1===i.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return
m()
const l=o.attributes,c=a.getAttributes(),h=s.defaultAttributeValues
for(const e in c){const i=c[e]
if(i.location>=0){let s=l[e]
if(void 0===s&&("instanceMatrix"===e&&r.instanceMatrix&&(s=r.instanceMatrix),"instanceColor"===e&&r.instanceColor&&(s=r.instanceColor)),void 0!==s){const e=s.normalized,a=s.itemSize,l=n.get(s)
if(void 0===l)continue
const c=l.buffer,h=l.type,u=l.bytesPerElement
if(s.isInterleavedBufferAttribute){const n=s.data,l=n.stride,d=s.offset
if(n.isInstancedInterleavedBuffer){for(let t=0;t<i.locationSize;t++)g(i.location+t,n.meshPerAttribute)
!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let t=0;t<i.locationSize;t++)f(i.location+t)
t.bindBuffer(t.ARRAY_BUFFER,c)
for(let t=0;t<i.locationSize;t++)y(i.location+t,a/i.locationSize,h,e,l*u,(d+a/i.locationSize*t)*u)}else{if(s.isInstancedBufferAttribute){for(let t=0;t<i.locationSize;t++)g(i.location+t,s.meshPerAttribute)
!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let t=0;t<i.locationSize;t++)f(i.location+t)
t.bindBuffer(t.ARRAY_BUFFER,c)
for(let t=0;t<i.locationSize;t++)y(i.location+t,a/i.locationSize,h,e,a*u,a/i.locationSize*t*u)}}else if(void 0!==h){const n=h[e]
if(void 0!==n)switch(n.length){case 2:t.vertexAttrib2fv(i.location,n)
break
case 3:t.vertexAttrib3fv(i.location,n)
break
case 4:t.vertexAttrib4fv(i.location,n)
break
default:t.vertexAttrib1fv(i.location,n)}}}}v()}(r,l,d,_),null!==x&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(x).buffer))},reset:_,resetDefaultState:x,dispose:function(){_()
for(const t in o){const e=o[t]
for(const t in e){const n=e[t]
for(const t in n)d(n[t].object),delete n[t]
delete e[t]}delete o[t]}},releaseStatesOfGeometry:function(t){if(void 0===o[t.id])return
const e=o[t.id]
for(const n in e){const t=e[n]
for(const e in t)d(t[e].object),delete t[e]
delete e[n]}delete o[t.id]},releaseStatesOfProgram:function(t){for(const e in o){const n=o[e]
if(void 0===n[t.id])continue
const i=n[t.id]
for(const t in i)d(i[t].object),delete i[t]
delete n[t.id]}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:v}}function Ui(t,e,n,i){const r=i.isWebGL2
let s
this.setMode=function(t){s=t},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1)},this.renderInstances=function(i,a,o){if(0===o)return
let l,c
if(r)l=t,c="drawArraysInstanced"
else if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
l[c](s,i,a,o),n.update(a,s,o)}}function Oi(t,e,n){let i
function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp"
e="mediump"}return"mediump"===e&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&t instanceof WebGL2ComputeRenderingContext
let a=void 0!==n.precision?n.precision:"highp"
const o=r(a)
o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o)
const l=s||e.has("WEBGL_draw_buffers"),c=!0===n.logarithmicDepthBuffer,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,_=s||e.has("OES_texture_float")
return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==i)return i
if(!0===e.has("EXT_texture_filter_anisotropic")){const n=e.get("EXT_texture_filter_anisotropic")
i=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0
return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:y&&_,maxSamples:s?t.getParameter(t.MAX_SAMPLES):0}}function Fi(t){const e=this
let n=null,i=0,r=!1,s=!1
const a=new wi,o=new Ct,l={value:null,needsUpdate:!1}
function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(t,n,i,r){const s=null!==t?t.length:0
let c=null
if(0!==s){if(c=l.value,!0!==r||null===c){const e=i+4*s,r=n.matrixWorldInverse
o.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e))
for(let n=0,l=i;n!==s;++n,l+=4)a.copy(t[n]).applyMatrix4(r,o),a.normal.toArray(c,l),c[l+3]=a.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e,s){const a=0!==t.length||e||0!==i||r
return r=e,n=h(t,s,0),i=t.length,a},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(e,a,o){const u=e.clippingPlanes,d=e.clipIntersection,p=e.clipShadows,m=t.get(e)
if(!r||null===u||0===u.length||s&&!p)s?h(null):c()
else{const t=s?0:i,e=4*t
let r=m.clippingState||null
l.value=r,r=h(u,a,e,o)
for(let i=0;i!==e;++i)r[i]=n[i]
m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t}}}function Bi(t){let e=new WeakMap
function n(t,e){return e===o?t.mapping=s:e===l&&(t.mapping=a),t}function i(t){const n=t.target
n.removeEventListener("dispose",i)
const r=e.get(n)
void 0!==r&&(e.delete(n),r.dispose())}return{get:function(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){const s=r.mapping
if(s===o||s===l){if(e.has(r))return n(e.get(r).texture,r.mapping)
{const s=r.image
if(s&&s.height>0){const a=new _i(s.height/2)
return a.fromEquirectangularTexture(t,r),e.set(r,a),r.addEventListener("dispose",i),n(a.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}Di.physical={uniforms:ui([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Li.meshphysical_vert,fragmentShader:Li.meshphysical_frag}
class Hi extends mi{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2
let r=n-t,s=n+t,a=i+e,o=i-e
if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom
r+=t*this.view.offsetX,s=r+t*this.view.width,a-=e*this.view.offsetY,o=a-e*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t)
return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}Hi.prototype.isOrthographicCamera=!0
const zi=[.125,.215,.35,.446,.526,.582],Gi=new Hi,Vi=new Wt
let ki=null
const Wi=(1+Math.sqrt(5))/2,ji=1/Wi,Xi=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Wi,ji),new se(0,Wi,-ji),new se(ji,0,Wi),new se(-ji,0,Wi),new se(Wi,ji,0),new se(-Wi,ji,0)]
class qi{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ki=this._renderer.getRenderTarget(),this._setSize(256)
const r=this._allocateTargets()
return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Ki(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Zi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose()
for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ki),t.scissorTest=!1,Ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===s||t.mapping===a?this._setSize(0===t.image.length?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ki=this._renderer.getRenderTarget()
const n=e||this._allocateTargets()
return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize-32,n={magFilter:g,minFilter:g,generateMipmaps:!1,type:w,format:S,encoding:at,depthBuffer:!1},i=Yi(t,e,n)
if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Yi(t,e,n)
const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(t){const e=[],n=[],i=[]
let r=t
const s=t-4+1+zi.length
for(let a=0;a<s;a++){const s=Math.pow(2,r)
n.push(s)
let o=1/s
a>t-4?o=zi[a-t+4-1]:0===a&&(o=0),i.push(o)
const l=1/(s-1),c=-l/2,h=1+l/2,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,f=2,g=1,v=new Float32Array(m*p*d),y=new Float32Array(f*p*d),_=new Float32Array(g*p*d)
for(let t=0;t<d;t++){const e=t%3*2/3-1,n=t>2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0]
v.set(i,m*p*t),y.set(u,f*p*t)
const r=[t,t,t,t,t,t]
_.set(r,g*p*t)}const x=new kn
x.setAttribute("position",new Sn(v,m)),x.setAttribute("uv",new Sn(y,f)),x.setAttribute("faceIndex",new Sn(_,g)),e.push(x),r>4&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}(i)),this._blurMaterial=function(t,e,n){const i=new Float32Array(20),r=new se(0,1,0)
return new pi({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}(i,t,e)}return i}_compileMaterial(t){const e=new oi(this._lodPlanes[0],t)
this._renderer.compile(e,Gi)}_sceneToCubeUV(t,e,n,i){const r=new fi(90,1,e,n),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping
o.getClearColor(Vi),o.toneMapping=0,o.autoClear=!1
const h=new bn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new oi(new ci,h)
let d=!1
const p=t.background
p?p.isColor&&(h.color.copy(p),t.background=null,d=!0):(h.color.copy(Vi),d=!0)
for(let m=0;m<6;m++){const e=m%3
0===e?(r.up.set(0,s[m],0),r.lookAt(a[m],0,0)):1===e?(r.up.set(0,0,s[m]),r.lookAt(0,a[m],0)):(r.up.set(0,s[m],0),r.lookAt(0,0,a[m]))
const n=this._cubeSize
Ji(i,e*n,m>2?n:0,n,n),o.setRenderTarget(i),d&&o.render(u,r),o.render(t,r)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=c,o.autoClear=l,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===s||t.mapping===a
i?(null===this._cubemapMaterial&&(this._cubemapMaterial=Ki()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===t.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Zi())
const r=i?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],r)
r.uniforms.envMap.value=t
const l=this._cubeSize
Ji(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gi)}_applyPMREM(t){const e=this._renderer,n=e.autoClear
e.autoClear=!1
for(let i=1;i<this._lodPlanes.length;i++){const e=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),n=Xi[(i-1)%Xi.length]
this._blur(t,i-1,i,e,n)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget
this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial
"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!")
const c=new oi(this._lodPlanes[i],l),h=l.uniforms,u=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):20
m>20&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`)
const f=[]
let g=0
for(let _=0;_<20;++_){const t=_/p,e=Math.exp(-t*t/2)
f.push(e),0===_?g+=e:_<m&&(g+=2*e)}for(let _=0;_<f.length;_++)f[_]=f[_]/g
h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value="latitudinal"===s,a&&(h.poleAxis.value=a)
const{_lodMax:v}=this
h.dTheta.value=d,h.mipInt.value=v-n
const y=this._sizeLods[i]
Ji(e,3*y*(i>v-4?i-v+4:0),4*(this._cubeSize-y),3*y,2*y),o.setRenderTarget(e),o.render(c,Gi)}}function Yi(t,e,n){const i=new Qt(t,e,n)
return i.texture.mapping=c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ji(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Zi(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function Ki(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function Qi(t){let e=new WeakMap,n=null
function i(t){const n=t.target
n.removeEventListener("dispose",i)
const r=e.get(n)
void 0!==r&&(e.delete(n),r.dispose())}return{get:function(r){if(r&&r.isTexture){const c=r.mapping,h=c===o||c===l,u=c===s||c===a
if(h||u){if(r.isRenderTargetTexture&&!0===r.needsPMREMUpdate){r.needsPMREMUpdate=!1
let i=e.get(r)
return null===n&&(n=new qi(t)),i=h?n.fromEquirectangular(r,i):n.fromCubemap(r,i),e.set(r,i),i.texture}if(e.has(r))return e.get(r).texture
{const s=r.image
if(h&&s&&s.height>0||u&&s&&function(t){let e=0
for(let n=0;n<6;n++)void 0!==t[n]&&e++
return 6===e}(s)){null===n&&(n=new qi(t))
const s=h?n.fromEquirectangular(r):n.fromCubemap(r)
return e.set(r,s),r.addEventListener("dispose",i),s.texture}return null}}}return r},dispose:function(){e=new WeakMap,null!==n&&(n.dispose(),n=null)}}}function $i(t){const e={}
function n(n){if(void 0!==e[n])return e[n]
let i
switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture")
break
case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic")
break
case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc")
break
case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")
break
default:i=t.getExtension(n)}return e[n]=i,i}return{has:function(t){return null!==n(t)},init:function(t){t.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(t){const e=n(t)
return null===e&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function tr(t,e,n,i){const r={},s=new WeakMap
function a(t){const o=t.target
null!==o.index&&e.remove(o.index)
for(const n in o.attributes)e.remove(o.attributes[n])
o.removeEventListener("dispose",a),delete r[o.id]
const l=s.get(o)
l&&(e.remove(l),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,n.memory.geometries--}function o(t){const n=[],i=t.index,r=t.attributes.position
let a=0
if(null!==i){const t=i.array
a=i.version
for(let e=0,i=t.length;e<i;e+=3){const i=t[e+0],r=t[e+1],s=t[e+2]
n.push(i,r,r,s,s,i)}}else{const t=r.array
a=r.version
for(let e=0,i=t.length/3-1;e<i;e+=3){const t=e+0,i=e+1,r=e+2
n.push(t,i,i,r,r,t)}}const o=new(Lt(n)?Dn:Ln)(n,1)
o.version=a
const l=s.get(t)
l&&e.remove(l),s.set(t,o)}return{get:function(t,e){return!0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,n.memory.geometries++),e},update:function(n){const i=n.attributes
for(const s in i)e.update(i[s],t.ARRAY_BUFFER)
const r=n.morphAttributes
for(const s in r){const n=r[s]
for(let i=0,r=n.length;i<r;i++)e.update(n[i],t.ARRAY_BUFFER)}},getWireframeAttribute:function(t){const e=s.get(t)
if(e){const n=t.index
null!==n&&e.version<n.version&&o(t)}else o(t)
return s.get(t)}}}function er(t,e,n,i){const r=i.isWebGL2
let s,a,o
this.setMode=function(t){s=t},this.setIndex=function(t){a=t.type,o=t.bytesPerElement},this.render=function(e,i){t.drawElements(s,i,a,e*o),n.update(i,s,1)},this.renderInstances=function(i,l,c){if(0===c)return
let h,u
if(r)h=t,u="drawElementsInstanced"
else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
h[u](s,l,a,i*o,c),n.update(l,s,c)}}function nr(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0}
return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3)
break
case t.LINES:e.lines+=r*(n/2)
break
case t.LINE_STRIP:e.lines+=r*(n-1)
break
case t.LINE_LOOP:e.lines+=r*n
break
case t.POINTS:e.points+=r*n
break
default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function ir(t,e){return t[0]-e[0]}function rr(t,e){return Math.abs(e[1])-Math.abs(t[1])}function sr(t,e){let n=1
const i=e.isInterleavedBufferAttribute?e.data.array:e.array
i instanceof Int8Array?n=127:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function ar(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Kt,o=[]
for(let l=0;l<8;l++)o[l]=[l,0]
return{update:function(l,c,h,u){const d=l.morphTargetInfluences
if(!0===e.isWebGL2){const i=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,r=void 0!==i?i.length:0
let o=s.get(c)
if(void 0===o||o.count!==r){void 0!==o&&o.texture.dispose()
const t=void 0!==c.morphAttributes.position,n=void 0!==c.morphAttributes.normal,i=void 0!==c.morphAttributes.color,l=c.morphAttributes.position||[],h=c.morphAttributes.normal||[],u=c.morphAttributes.color||[]
let d=0
!0===t&&(d=1),!0===n&&(d=2),!0===i&&(d=3)
let p=c.attributes.position.count*d,m=1
p>e.maxTextureSize&&(m=Math.ceil(p/e.maxTextureSize),p=e.maxTextureSize)
const f=new Float32Array(p*m*4*r),g=new $t(f,p,m,r)
g.type=b,g.needsUpdate=!0
const v=4*d
for(let e=0;e<r;e++){const r=l[e],s=h[e],o=u[e],c=p*m*4*e
for(let e=0;e<r.count;e++){const l=e*v
!0===t&&(a.fromBufferAttribute(r,e),!0===r.normalized&&sr(a,r),f[c+l+0]=a.x,f[c+l+1]=a.y,f[c+l+2]=a.z,f[c+l+3]=0),!0===n&&(a.fromBufferAttribute(s,e),!0===s.normalized&&sr(a,s),f[c+l+4]=a.x,f[c+l+5]=a.y,f[c+l+6]=a.z,f[c+l+7]=0),!0===i&&(a.fromBufferAttribute(o,e),!0===o.normalized&&sr(a,o),f[c+l+8]=a.x,f[c+l+9]=a.y,f[c+l+10]=a.z,f[c+l+11]=4===o.itemSize?a.w:1)}}function y(){g.dispose(),s.delete(c),c.removeEventListener("dispose",y)}o={count:r,texture:g,size:new Rt(p,m)},s.set(c,o),c.addEventListener("dispose",y)}let l=0
for(let t=0;t<d.length;t++)l+=d[t]
const h=c.morphTargetsRelative?1:1-l
u.getUniforms().setValue(t,"morphTargetBaseInfluence",h),u.getUniforms().setValue(t,"morphTargetInfluences",d),u.getUniforms().setValue(t,"morphTargetsTexture",o.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",o.size)}else{const e=void 0===d?0:d.length
let n=i[c.id]
if(void 0===n||n.length!==e){n=[]
for(let t=0;t<e;t++)n[t]=[t,0]
i[c.id]=n}for(let t=0;t<e;t++){const e=n[t]
e[0]=t,e[1]=d[t]}n.sort(rr)
for(let t=0;t<8;t++)t<e&&n[t][1]?(o[t][0]=n[t][0],o[t][1]=n[t][1]):(o[t][0]=Number.MAX_SAFE_INTEGER,o[t][1]=0)
o.sort(ir)
const s=c.morphAttributes.position,a=c.morphAttributes.normal
let l=0
for(let t=0;t<8;t++){const e=o[t],n=e[0],i=e[1]
n!==Number.MAX_SAFE_INTEGER&&i?(s&&c.getAttribute("morphTarget"+t)!==s[n]&&c.setAttribute("morphTarget"+t,s[n]),a&&c.getAttribute("morphNormal"+t)!==a[n]&&c.setAttribute("morphNormal"+t,a[n]),r[t]=i,l+=i):(s&&!0===c.hasAttribute("morphTarget"+t)&&c.deleteAttribute("morphTarget"+t),a&&!0===c.hasAttribute("morphNormal"+t)&&c.deleteAttribute("morphNormal"+t),r[t]=0)}const h=c.morphTargetsRelative?1:1-l
u.getUniforms().setValue(t,"morphTargetBaseInfluence",h),u.getUniforms().setValue(t,"morphTargetInfluences",r)}}}}function or(t,e,n,i){let r=new WeakMap
function s(t){const e=t.target
e.removeEventListener("dispose",s),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor)}return{update:function(a){const o=i.render.frame,l=a.geometry,c=e.get(a,l)
return r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(!1===a.hasEventListener("dispose",s)&&a.addEventListener("dispose",s),n.update(a.instanceMatrix,t.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,t.ARRAY_BUFFER)),c},dispose:function(){r=new WeakMap}}}const lr=new Zt,cr=new $t,hr=new ee,ur=new yi,dr=[],pr=[],mr=new Float32Array(16),fr=new Float32Array(9),gr=new Float32Array(4)
function vr(t,e,n){const i=t[0]
if(i<=0||i>0)return t
const r=e*n
let s=dr[r]
if(void 0===s&&(s=new Float32Array(r),dr[r]=s),0!==e){i.toArray(s,0)
for(let i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r)}return s}function yr(t,e){if(t.length!==e.length)return!1
for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1
return!0}function _r(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xr(t,e){let n=pr[e]
void 0===n&&(n=new Int32Array(e),pr[e]=n)
for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit()
return n}function Mr(t,e){const n=this.cache
n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function br(t,e){const n=this.cache
if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y)
else{if(yr(n,e))return
t.uniform2fv(this.addr,e),_r(n,e)}}function wr(t,e){const n=this.cache
if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z)
else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b)
else{if(yr(n,e))return
t.uniform3fv(this.addr,e),_r(n,e)}}function Er(t,e){const n=this.cache
if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w)
else{if(yr(n,e))return
t.uniform4fv(this.addr,e),_r(n,e)}}function Sr(t,e){const n=this.cache,i=e.elements
if(void 0===i){if(yr(n,e))return
t.uniformMatrix2fv(this.addr,!1,e),_r(n,e)}else{if(yr(n,i))return
gr.set(i),t.uniformMatrix2fv(this.addr,!1,gr),_r(n,i)}}function Tr(t,e){const n=this.cache,i=e.elements
if(void 0===i){if(yr(n,e))return
t.uniformMatrix3fv(this.addr,!1,e),_r(n,e)}else{if(yr(n,i))return
fr.set(i),t.uniformMatrix3fv(this.addr,!1,fr),_r(n,i)}}function Ar(t,e){const n=this.cache,i=e.elements
if(void 0===i){if(yr(n,e))return
t.uniformMatrix4fv(this.addr,!1,e),_r(n,e)}else{if(yr(n,i))return
mr.set(i),t.uniformMatrix4fv(this.addr,!1,mr),_r(n,i)}}function Rr(t,e){const n=this.cache
n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cr(t,e){const n=this.cache
yr(n,e)||(t.uniform2iv(this.addr,e),_r(n,e))}function Lr(t,e){const n=this.cache
yr(n,e)||(t.uniform3iv(this.addr,e),_r(n,e))}function Pr(t,e){const n=this.cache
yr(n,e)||(t.uniform4iv(this.addr,e),_r(n,e))}function Dr(t,e){const n=this.cache
n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ir(t,e){const n=this.cache
yr(n,e)||(t.uniform2uiv(this.addr,e),_r(n,e))}function Nr(t,e){const n=this.cache
yr(n,e)||(t.uniform3uiv(this.addr,e),_r(n,e))}function Ur(t,e){const n=this.cache
yr(n,e)||(t.uniform4uiv(this.addr,e),_r(n,e))}function Or(t,e,n){const i=this.cache,r=n.allocateTextureUnit()
i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||lr,r)}function Fr(t,e,n){const i=this.cache,r=n.allocateTextureUnit()
i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hr,r)}function Br(t,e,n){const i=this.cache,r=n.allocateTextureUnit()
i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ur,r)}function Hr(t,e,n){const i=this.cache,r=n.allocateTextureUnit()
i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cr,r)}function zr(t,e){t.uniform1fv(this.addr,e)}function Gr(t,e){const n=vr(e,this.size,2)
t.uniform2fv(this.addr,n)}function Vr(t,e){const n=vr(e,this.size,3)
t.uniform3fv(this.addr,n)}function kr(t,e){const n=vr(e,this.size,4)
t.uniform4fv(this.addr,n)}function Wr(t,e){const n=vr(e,this.size,4)
t.uniformMatrix2fv(this.addr,!1,n)}function jr(t,e){const n=vr(e,this.size,9)
t.uniformMatrix3fv(this.addr,!1,n)}function Xr(t,e){const n=vr(e,this.size,16)
t.uniformMatrix4fv(this.addr,!1,n)}function qr(t,e){t.uniform1iv(this.addr,e)}function Yr(t,e){t.uniform2iv(this.addr,e)}function Jr(t,e){t.uniform3iv(this.addr,e)}function Zr(t,e){t.uniform4iv(this.addr,e)}function Kr(t,e){t.uniform1uiv(this.addr,e)}function Qr(t,e){t.uniform2uiv(this.addr,e)}function $r(t,e){t.uniform3uiv(this.addr,e)}function ts(t,e){t.uniform4uiv(this.addr,e)}function es(t,e,n){const i=e.length,r=xr(n,i)
t.uniform1iv(this.addr,r)
for(let s=0;s!==i;++s)n.setTexture2D(e[s]||lr,r[s])}function ns(t,e,n){const i=e.length,r=xr(n,i)
t.uniform1iv(this.addr,r)
for(let s=0;s!==i;++s)n.setTexture3D(e[s]||hr,r[s])}function is(t,e,n){const i=e.length,r=xr(n,i)
t.uniform1iv(this.addr,r)
for(let s=0;s!==i;++s)n.setTextureCube(e[s]||ur,r[s])}function rs(t,e,n){const i=e.length,r=xr(n,i)
t.uniform1iv(this.addr,r)
for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||cr,r[s])}function ss(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=function(t){switch(t){case 5126:return Mr
case 35664:return br
case 35665:return wr
case 35666:return Er
case 35674:return Sr
case 35675:return Tr
case 35676:return Ar
case 5124:case 35670:return Rr
case 35667:case 35671:return Cr
case 35668:case 35672:return Lr
case 35669:case 35673:return Pr
case 5125:return Dr
case 36294:return Ir
case 36295:return Nr
case 36296:return Ur
case 35678:case 36198:case 36298:case 36306:case 35682:return Or
case 35679:case 36299:case 36307:return Fr
case 35680:case 36300:case 36308:case 36293:return Br
case 36289:case 36303:case 36311:case 36292:return Hr}}(e.type)}function as(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=function(t){switch(t){case 5126:return zr
case 35664:return Gr
case 35665:return Vr
case 35666:return kr
case 35674:return Wr
case 35675:return jr
case 35676:return Xr
case 5124:case 35670:return qr
case 35667:case 35671:return Yr
case 35668:case 35672:return Jr
case 35669:case 35673:return Zr
case 5125:return Kr
case 36294:return Qr
case 36295:return $r
case 36296:return ts
case 35678:case 36198:case 36298:case 36306:case 35682:return es
case 35679:case 36299:case 36307:return ns
case 35680:case 36300:case 36308:case 36293:return is
case 36289:case 36303:case 36311:case 36292:return rs}}(e.type)}function os(t){this.id=t,this.seq=[],this.map={}}as.prototype.updateCache=function(t){const e=this.cache
t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),_r(e,t)},os.prototype.setValue=function(t,e,n){const i=this.seq
for(let r=0,s=i.length;r!==s;++r){const s=i[r]
s.setValue(t,e[s.id],n)}}
const ls=/(\w+)(\])?(\[|\.)?/g
function cs(t,e){t.seq.push(e),t.map[e.id]=e}function hs(t,e,n){const i=t.name,r=i.length
for(ls.lastIndex=0;;){const s=ls.exec(i),a=ls.lastIndex
let o=s[1]
const l="]"===s[2],c=s[3]
if(l&&(o|=0),void 0===c||"["===c&&a+2===r){cs(n,void 0===c?new ss(o,t,e):new as(o,t,e))
break}{let t=n.map[o]
void 0===t&&(t=new os(o),cs(n,t)),n=t}}}function us(t,e){this.seq=[],this.map={}
const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS)
for(let i=0;i<n;++i){const n=t.getActiveUniform(e,i)
hs(n,t.getUniformLocation(e,n.name),this)}}function ds(t,e,n){const i=t.createShader(e)
return t.shaderSource(i,n),t.compileShader(i),i}us.prototype.setValue=function(t,e,n,i){const r=this.map[e]
void 0!==r&&r.setValue(t,n,i)},us.prototype.setOptional=function(t,e,n){const i=e[n]
void 0!==i&&this.setValue(t,n,i)},us.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const s=e[r],a=n[s.id]
!1!==a.needsUpdate&&s.setValue(t,a.value,i)}},us.seqWithValue=function(t,e){const n=[]
for(let i=0,r=t.length;i!==r;++i){const r=t[i]
r.id in e&&n.push(r)}return n}
let ps=0
function ms(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim()
if(i&&""===r)return""
const s=parseInt(/ERROR: 0:(\d+)/.exec(r)[1])
return n.toUpperCase()+"\n\n"+r+"\n\n"+function(t,e){const n=t.split("\n"),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length)
for(let a=r;a<s;a++)i.push(a+1+": "+n[a])
return i.join("\n")}(t.getShaderSource(e),s)}function fs(t,e){const n=function(t){switch(t){case at:return["Linear","( value )"]
case ot:return["sRGB","( value )"]
default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}(e)
return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function gs(t,e){let n
switch(e){case 1:n="Linear"
break
case 2:n="Reinhard"
break
case 3:n="OptimizedCineon"
break
case 4:n="ACESFilmic"
break
case 5:n="Custom"
break
default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function vs(t){return""!==t}function ys(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _s(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xs=/^[ \t]*#include +<([\w\d./]+)>/gm
function Ms(t){return t.replace(xs,bs)}function bs(t,e){const n=Li[e]
if(void 0===n)throw new Error("Can not resolve #include <"+e+">")
return Ms(n)}const ws=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Es=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g
function Ss(t){return t.replace(Es,As).replace(ws,Ts)}function Ts(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),As(0,e,n,i)}function As(t,e,n,i){let r=""
for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s)
return r}function Rs(t){let e="precision "+t.precision+" float;\nprecision "+t.precision+" int;"
return"highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function Cs(t,e,n,i){const r=t.getContext(),o=n.defines
let l=n.vertexShader,h=n.fragmentShader
const u=function(t){let e="SHADOWMAP_TYPE_BASIC"
return 1===t.shadowMapType?e="SHADOWMAP_TYPE_PCF":2===t.shadowMapType?e="SHADOWMAP_TYPE_PCF_SOFT":3===t.shadowMapType&&(e="SHADOWMAP_TYPE_VSM"),e}(n),d=function(t){let e="ENVMAP_TYPE_CUBE"
if(t.envMap)switch(t.envMapMode){case s:case a:e="ENVMAP_TYPE_CUBE"
break
case c:e="ENVMAP_TYPE_CUBE_UV"}return e}(n),p=function(t){let e="ENVMAP_MODE_REFLECTION"
return t.envMap&&t.envMapMode===a&&(e="ENVMAP_MODE_REFRACTION"),e}(n),m=function(t){let e="ENVMAP_BLENDING_NONE"
if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY"
break
case 1:e="ENVMAP_BLENDING_MIX"
break
case 2:e="ENVMAP_BLENDING_ADD"}return e}(n),f=function(t){const e=t.envMapCubeUVHeight
if(null===e)return null
const n=Math.log2(e/32+1)+3,i=1/e
return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}(n),g=n.isWebGL2?"":function(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join("\n")}(n),v=function(t){const e=[]
for(const n in t){const i=t[n]
!1!==i&&e.push("#define "+n+" "+i)}return e.join("\n")}(o),y=r.createProgram()
let _,x,M=n.glslVersion?"#version "+n.glslVersion+"\n":""
n.isRawShaderMaterial?(_=[v].filter(vs).join("\n"),_.length>0&&(_+="\n"),x=[g,v].filter(vs).join("\n"),x.length>0&&(x+="\n")):(_=[Rs(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&!1===n.flatShading?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(vs).join("\n"),x=[g,Rs(n),"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==n.toneMapping?"#define TONE_MAPPING":"",0!==n.toneMapping?Li.tonemapping_pars_fragment:"",0!==n.toneMapping?gs("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Li.encodings_pars_fragment,fs("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(vs).join("\n")),l=Ms(l),l=ys(l,n),l=_s(l,n),h=Ms(h),h=ys(h,n),h=_s(h,n),l=Ss(l),h=Ss(h),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(M="#version 300 es\n",_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+_,x=["#define varying in",n.glslVersion===pt?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+x)
const b=M+_+l,w=M+x+h,E=ds(r,r.VERTEX_SHADER,b),S=ds(r,r.FRAGMENT_SHADER,w)
if(r.attachShader(y,E),r.attachShader(y,S),void 0!==n.index0AttributeName?r.bindAttribLocation(y,0,n.index0AttributeName):!0===n.morphTargets&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const t=r.getProgramInfoLog(y).trim(),e=r.getShaderInfoLog(E).trim(),n=r.getShaderInfoLog(S).trim()
let i=!0,s=!0
if(!1===r.getProgramParameter(y,r.LINK_STATUS)){i=!1
const e=ms(r,E,"vertex"),n=ms(r,S,"fragment")
console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+"\n\nProgram Info Log: "+t+"\n"+e+"\n"+n)}else""!==t?console.warn("THREE.WebGLProgram: Program Info Log:",t):""!==e&&""!==n||(s=!1)
s&&(this.diagnostics={runnable:i,programLog:t,vertexShader:{log:e,prefix:_},fragmentShader:{log:n,prefix:x}})}let T,A
return r.deleteShader(E),r.deleteShader(S),this.getUniforms=function(){return void 0===T&&(T=new us(r,y)),T},this.getAttributes=function(){return void 0===A&&(A=function(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES)
for(let r=0;r<i;r++){const i=t.getActiveAttrib(e,r),s=i.name
let a=1
i.type===t.FLOAT_MAT2&&(a=2),i.type===t.FLOAT_MAT3&&(a=3),i.type===t.FLOAT_MAT4&&(a=4),n[s]={type:i.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}(r,y)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=ps++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=S,this}let Ls=0
class Ps{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t)
return!1===s.has(i)&&(s.add(i),i.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t)
for(const n of e)n.usedTimes--,0===n.usedTimes&&this.shaderCache.delete(n.code)
return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache
return!1===e.has(t)&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache
if(!1===e.has(t)){const n=new Ds(t)
e.set(t,n)}return e.get(t)}}class Ds{constructor(t){this.id=Ls++,this.code=t,this.usedTimes=0}}function Is(t,e,n,i,r,s,a){const o=new qe,l=new Ps,h=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.floatVertexTextures,m=r.maxVertexUniforms,f=r.vertexTextures
let g=r.precision
const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"}
return{getParameters:function(s,o,h,y,_){const x=y.fog,M=_.geometry,b=s.isMeshStandardMaterial?y.environment:null,w=(s.isMeshStandardMaterial?n:e).get(s.envMap||b),E=w&&w.mapping===c?w.image.height:null,S=v[s.type],T=_.isSkinnedMesh?function(t){const e=t.skeleton.bones
if(p)return 1024
{const t=m,n=Math.floor((t-20)/4),i=Math.min(n,e.length)
return i<e.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+e.length+" bones. This GPU supports "+i+"."),0):i}}(_):0
null!==s.precision&&(g=r.getMaxPrecision(s.precision),g!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",g,"instead."))
const A=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,R=void 0!==A?A.length:0
let C,L,P,D,I=0
if(void 0!==M.morphAttributes.position&&(I=1),void 0!==M.morphAttributes.normal&&(I=2),void 0!==M.morphAttributes.color&&(I=3),S){const t=Di[S]
C=t.vertexShader,L=t.fragmentShader}else C=s.vertexShader,L=s.fragmentShader,l.update(s),P=l.getVertexShaderID(s),D=l.getFragmentShaderID(s)
const N=t.getRenderTarget(),U=s.alphaTest>0,O=s.clearcoat>0
return{isWebGL2:u,shaderID:S,shaderName:s.type,vertexShader:C,fragmentShader:L,defines:s.defines,customVertexShaderID:P,customFragmentShaderID:D,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:g,instancing:!0===_.isInstancedMesh,instancingColor:!0===_.isInstancedMesh&&null!==_.instanceColor,supportsVertexTextures:f,outputEncoding:null===N?t.outputEncoding:!0===N.isXRRenderTarget?N.texture.encoding:at,map:!!s.map,matcap:!!s.matcap,envMap:!!w,envMapMode:w&&w.mapping,envMapCubeUVHeight:E,lightMap:!!s.lightMap,aoMap:!!s.aoMap,emissiveMap:!!s.emissiveMap,bumpMap:!!s.bumpMap,normalMap:!!s.normalMap,objectSpaceNormalMap:1===s.normalMapType,tangentSpaceNormalMap:0===s.normalMapType,decodeVideoTexture:!!s.map&&!0===s.map.isVideoTexture&&s.map.encoding===ot,clearcoat:O,clearcoatMap:O&&!!s.clearcoatMap,clearcoatRoughnessMap:O&&!!s.clearcoatRoughnessMap,clearcoatNormalMap:O&&!!s.clearcoatNormalMap,displacementMap:!!s.displacementMap,roughnessMap:!!s.roughnessMap,metalnessMap:!!s.metalnessMap,specularMap:!!s.specularMap,specularIntensityMap:!!s.specularIntensityMap,specularColorMap:!!s.specularColorMap,opaque:!1===s.transparent&&1===s.blending,alphaMap:!!s.alphaMap,alphaTest:U,gradientMap:!!s.gradientMap,sheen:s.sheen>0,sheenColorMap:!!s.sheenColorMap,sheenRoughnessMap:!!s.sheenRoughnessMap,transmission:s.transmission>0,transmissionMap:!!s.transmissionMap,thicknessMap:!!s.thicknessMap,combine:s.combine,vertexTangents:!!s.normalMap&&!!M.attributes.tangent,vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!M.attributes.color&&4===M.attributes.color.itemSize,vertexUvs:!!(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatMap||s.clearcoatRoughnessMap||s.clearcoatNormalMap||s.displacementMap||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheenColorMap||s.sheenRoughnessMap),uvsVertexOnly:!(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatNormalMap||s.transmission>0||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheen>0||s.sheenColorMap||s.sheenRoughnessMap||!s.displacementMap),fog:!!x,useFog:s.fog,fogExp2:x&&x.isFogExp2,flatShading:!!s.flatShading,sizeAttenuation:s.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===_.isSkinnedMesh&&T>0,maxBones:T,useVertexTexture:p,morphTargets:void 0!==M.morphAttributes.position,morphNormals:void 0!==M.morphAttributes.normal,morphColors:void 0!==M.morphAttributes.color,morphTargetsCount:R,morphTextureStride:I,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:t.shadowMap.enabled&&h.length>0,shadowMapType:t.shadowMap.type,toneMapping:s.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:1===s.side,depthPacking:void 0!==s.depthPacking&&s.depthPacking,index0AttributeName:s.index0AttributeName,extensionDerivatives:s.extensions&&s.extensions.derivatives,extensionFragDepth:s.extensions&&s.extensions.fragDepth,extensionDrawBuffers:s.extensions&&s.extensions.drawBuffers,extensionShaderTextureLOD:s.extensions&&s.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:function(e){const n=[]
if(e.shaderID?n.push(e.shaderID):(n.push(e.customVertexShaderID),n.push(e.customFragmentShaderID)),void 0!==e.defines)for(const t in e.defines)n.push(t),n.push(e.defines[t])
return!1===e.isRawShaderMaterial&&(function(t,e){t.push(e.precision),t.push(e.outputEncoding),t.push(e.envMapMode),t.push(e.envMapCubeUVHeight),t.push(e.combine),t.push(e.vertexUvs),t.push(e.fogExp2),t.push(e.sizeAttenuation),t.push(e.maxBones),t.push(e.morphTargetsCount),t.push(e.morphAttributeCount),t.push(e.numDirLights),t.push(e.numPointLights),t.push(e.numSpotLights),t.push(e.numHemiLights),t.push(e.numRectAreaLights),t.push(e.numDirLightShadows),t.push(e.numPointLightShadows),t.push(e.numSpotLightShadows),t.push(e.shadowMapType),t.push(e.toneMapping),t.push(e.numClippingPlanes),t.push(e.numClipIntersection)}(n,e),function(t,e){o.disableAll(),e.isWebGL2&&o.enable(0),e.supportsVertexTextures&&o.enable(1),e.instancing&&o.enable(2),e.instancingColor&&o.enable(3),e.map&&o.enable(4),e.matcap&&o.enable(5),e.envMap&&o.enable(6),e.lightMap&&o.enable(7),e.aoMap&&o.enable(8),e.emissiveMap&&o.enable(9),e.bumpMap&&o.enable(10),e.normalMap&&o.enable(11),e.objectSpaceNormalMap&&o.enable(12),e.tangentSpaceNormalMap&&o.enable(13),e.clearcoat&&o.enable(14),e.clearcoatMap&&o.enable(15),e.clearcoatRoughnessMap&&o.enable(16),e.clearcoatNormalMap&&o.enable(17),e.displacementMap&&o.enable(18),e.specularMap&&o.enable(19),e.roughnessMap&&o.enable(20),e.metalnessMap&&o.enable(21),e.gradientMap&&o.enable(22),e.alphaMap&&o.enable(23),e.alphaTest&&o.enable(24),e.vertexColors&&o.enable(25),e.vertexAlphas&&o.enable(26),e.vertexUvs&&o.enable(27),e.vertexTangents&&o.enable(28),e.uvsVertexOnly&&o.enable(29),e.fog&&o.enable(30),t.push(o.mask),o.disableAll(),e.useFog&&o.enable(0),e.flatShading&&o.enable(1),e.logarithmicDepthBuffer&&o.enable(2),e.skinning&&o.enable(3),e.useVertexTexture&&o.enable(4),e.morphTargets&&o.enable(5),e.morphNormals&&o.enable(6),e.morphColors&&o.enable(7),e.premultipliedAlpha&&o.enable(8),e.shadowMapEnabled&&o.enable(9),e.physicallyCorrectLights&&o.enable(10),e.doubleSided&&o.enable(11),e.flipSided&&o.enable(12),e.depthPacking&&o.enable(13),e.dithering&&o.enable(14),e.specularIntensityMap&&o.enable(15),e.specularColorMap&&o.enable(16),e.transmission&&o.enable(17),e.transmissionMap&&o.enable(18),e.thicknessMap&&o.enable(19),e.sheen&&o.enable(20),e.sheenColorMap&&o.enable(21),e.sheenRoughnessMap&&o.enable(22),e.decodeVideoTexture&&o.enable(23),e.opaque&&o.enable(24),t.push(o.mask)}(n,e),n.push(t.outputEncoding)),n.push(e.customProgramCacheKey),n.join()},getUniforms:function(t){const e=v[t.type]
let n
if(e){const t=Di[e]
n=di.clone(t.uniforms)}else n=t.uniforms
return n},acquireProgram:function(e,n){let i
for(let t=0,r=h.length;t<r;t++){const e=h[t]
if(e.cacheKey===n){i=e,++i.usedTimes
break}}return void 0===i&&(i=new Cs(t,n,e,s),h.push(i)),i},releaseProgram:function(t){if(0==--t.usedTimes){const e=h.indexOf(t)
h[e]=h[h.length-1],h.pop(),t.destroy()}},releaseShaderCache:function(t){l.remove(t)},programs:h,dispose:function(){l.dispose()}}}function Ns(){let t=new WeakMap
return{get:function(e){let n=t.get(e)
return void 0===n&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function Us(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Os(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fs(){const t=[]
let e=0
const n=[],i=[],r=[]
function s(n,i,r,s,a,o){let l=t[e]
return void 0===l?(l={id:n.id,object:n,geometry:i,material:r,groupOrder:s,renderOrder:n.renderOrder,z:a,group:o},t[e]=l):(l.id=n.id,l.object=n,l.geometry=i,l.material=r,l.groupOrder=s,l.renderOrder=n.renderOrder,l.z=a,l.group=o),e++,l}return{opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0},push:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c)
a.transmission>0?i.push(h):!0===a.transparent?r.push(h):n.push(h)},unshift:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c)
a.transmission>0?i.unshift(h):!0===a.transparent?r.unshift(h):n.unshift(h)},finish:function(){for(let n=e,i=t.length;n<i;n++){const e=t[n]
if(null===e.id)break
e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}},sort:function(t,e){n.length>1&&n.sort(t||Us),i.length>1&&i.sort(e||Os),r.length>1&&r.sort(e||Os)}}}function Bs(){let t=new WeakMap
return{get:function(e,n){let i
return!1===t.has(e)?(i=new Fs,t.set(e,[i])):n>=t.get(e).length?(i=new Fs,t.get(e).push(i)):i=t.get(e)[n],i},dispose:function(){t=new WeakMap}}}function Hs(){const t={}
return{get:function(e){if(void 0!==t[e.id])return t[e.id]
let n
switch(e.type){case"DirectionalLight":n={direction:new se,color:new Wt}
break
case"SpotLight":n={position:new se,direction:new se,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0}
break
case"PointLight":n={position:new se,color:new Wt,distance:0,decay:0}
break
case"HemisphereLight":n={direction:new se,skyColor:new Wt,groundColor:new Wt}
break
case"RectAreaLight":n={color:new Wt,position:new se,halfWidth:new se,halfHeight:new se}}return t[e.id]=n,n}}}let zs=0
function Gs(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function Vs(t,e){const n=new Hs,i=function(){const t={}
return{get:function(e){if(void 0!==t[e.id])return t[e.id]
let n
switch(e.type){case"DirectionalLight":case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt}
break
case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3}}return t[e.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]}
for(let l=0;l<9;l++)r.probe.push(new se)
const s=new se,a=new Oe,o=new Oe
return{setup:function(s,a){let o=0,l=0,c=0
for(let t=0;t<9;t++)r.probe[t].set(0,0,0)
let h=0,u=0,d=0,p=0,m=0,f=0,g=0,v=0
s.sort(Gs)
const y=!0!==a?Math.PI:1
for(let t=0,e=s.length;t<e;t++){const e=s[t],a=e.color,_=e.intensity,x=e.distance,M=e.shadow&&e.shadow.map?e.shadow.map.texture:null
if(e.isAmbientLight)o+=a.r*_*y,l+=a.g*_*y,c+=a.b*_*y
else if(e.isLightProbe)for(let t=0;t<9;t++)r.probe[t].addScaledVector(e.sh.coefficients[t],_)
else if(e.isDirectionalLight){const t=n.get(e)
if(t.color.copy(e.color).multiplyScalar(e.intensity*y),e.castShadow){const t=e.shadow,n=i.get(e)
n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.directionalShadow[h]=n,r.directionalShadowMap[h]=M,r.directionalShadowMatrix[h]=e.shadow.matrix,f++}r.directional[h]=t,h++}else if(e.isSpotLight){const t=n.get(e)
if(t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(a).multiplyScalar(_*y),t.distance=x,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,e.castShadow){const t=e.shadow,n=i.get(e)
n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,r.spotShadow[d]=n,r.spotShadowMap[d]=M,r.spotShadowMatrix[d]=e.shadow.matrix,v++}r.spot[d]=t,d++}else if(e.isRectAreaLight){const t=n.get(e)
t.color.copy(a).multiplyScalar(_),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),r.rectArea[p]=t,p++}else if(e.isPointLight){const t=n.get(e)
if(t.color.copy(e.color).multiplyScalar(e.intensity*y),t.distance=e.distance,t.decay=e.decay,e.castShadow){const t=e.shadow,n=i.get(e)
n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,n.shadowCameraNear=t.camera.near,n.shadowCameraFar=t.camera.far,r.pointShadow[u]=n,r.pointShadowMap[u]=M,r.pointShadowMatrix[u]=e.shadow.matrix,g++}r.point[u]=t,u++}else if(e.isHemisphereLight){const t=n.get(e)
t.skyColor.copy(e.color).multiplyScalar(_*y),t.groundColor.copy(e.groundColor).multiplyScalar(_*y),r.hemi[m]=t,m++}}p>0&&(e.isWebGL2||!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=Pi.LTC_FLOAT_1,r.rectAreaLTC2=Pi.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=Pi.LTC_HALF_1,r.rectAreaLTC2=Pi.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=l,r.ambient[2]=c
const _=r.hash
_.directionalLength===h&&_.pointLength===u&&_.spotLength===d&&_.rectAreaLength===p&&_.hemiLength===m&&_.numDirectionalShadows===f&&_.numPointShadows===g&&_.numSpotShadows===v||(r.directional.length=h,r.spot.length=d,r.rectArea.length=p,r.point.length=u,r.hemi.length=m,r.directionalShadow.length=f,r.directionalShadowMap.length=f,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=f,r.pointShadowMatrix.length=g,r.spotShadowMatrix.length=v,_.directionalLength=h,_.pointLength=u,_.spotLength=d,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=f,_.numPointShadows=g,_.numSpotShadows=v,r.version=zs++)},setupView:function(t,e){let n=0,i=0,l=0,c=0,h=0
const u=e.matrixWorldInverse
for(let d=0,p=t.length;d<p;d++){const e=t[d]
if(e.isDirectionalLight){const t=r.directional[n]
t.direction.setFromMatrixPosition(e.matrixWorld),s.setFromMatrixPosition(e.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),n++}else if(e.isSpotLight){const t=r.spot[l]
t.position.setFromMatrixPosition(e.matrixWorld),t.position.applyMatrix4(u),t.direction.setFromMatrixPosition(e.matrixWorld),s.setFromMatrixPosition(e.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),l++}else if(e.isRectAreaLight){const t=r.rectArea[c]
t.position.setFromMatrixPosition(e.matrixWorld),t.position.applyMatrix4(u),o.identity(),a.copy(e.matrixWorld),a.premultiply(u),o.extractRotation(a),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),t.halfWidth.applyMatrix4(o),t.halfHeight.applyMatrix4(o),c++}else if(e.isPointLight){const t=r.point[i]
t.position.setFromMatrixPosition(e.matrixWorld),t.position.applyMatrix4(u),i++}else if(e.isHemisphereLight){const t=r.hemi[h]
t.direction.setFromMatrixPosition(e.matrixWorld),t.direction.transformDirection(u),t.direction.normalize(),h++}}},state:r}}function ks(t,e){const n=new Vs(t,e),i=[],r=[]
return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:function(t){n.setup(i,t)},setupLightsView:function(t){n.setupView(i,t)},pushLight:function(t){i.push(t)},pushShadow:function(t){r.push(t)}}}function Ws(t,e){let n=new WeakMap
return{get:function(i,r=0){let s
return!1===n.has(i)?(s=new ks(t,e),n.set(i,[s])):r>=n.get(i).length?(s=new ks(t,e),n.get(i).push(s)):s=n.get(i)[r],s},dispose:function(){n=new WeakMap}}}class js extends Mn{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}js.prototype.isMeshDepthMaterial=!0
class Xs extends Mn{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new se,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function qs(t,e,n){let i=new Ti
const r=new Rt,s=new Rt,a=new Kt,o=new js({depthPacking:3201}),l=new Xs,c={},h=n.maxTextureSize,u={0:1,1:0,2:2},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),m=d.clone()
m.defines.HORIZONTAL_PASS=1
const f=new kn
f.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3))
const g=new oi(f,d),v=this
function y(n,i){const r=e.update(g)
d.defines.VSM_SAMPLES!==n.blurSamples&&(d.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),d.uniforms.shadow_pass.value=n.map.texture,d.uniforms.resolution.value=n.mapSize,d.uniforms.radius.value=n.radius,t.setRenderTarget(n.mapPass),t.clear(),t.renderBufferDirect(i,null,r,d,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,t.setRenderTarget(n.map),t.clear(),t.renderBufferDirect(i,null,r,m,g,null)}function _(e,n,i,r,s,a){let h=null
const d=!0===i.isPointLight?e.customDistanceMaterial:e.customDepthMaterial
if(h=void 0!==d?d:!0===i.isPointLight?l:o,t.localClippingEnabled&&!0===n.clipShadows&&0!==n.clippingPlanes.length||n.displacementMap&&0!==n.displacementScale||n.alphaMap&&n.alphaTest>0){const t=h.uuid,e=n.uuid
let i=c[t]
void 0===i&&(i={},c[t]=i)
let r=i[e]
void 0===r&&(r=h.clone(),i[e]=r),h=r}return h.visible=n.visible,h.wireframe=n.wireframe,h.side=3===a?null!==n.shadowSide?n.shadowSide:n.side:null!==n.shadowSide?n.shadowSide:u[n.side],h.alphaMap=n.alphaMap,h.alphaTest=n.alphaTest,h.clipShadows=n.clipShadows,h.clippingPlanes=n.clippingPlanes,h.clipIntersection=n.clipIntersection,h.displacementMap=n.displacementMap,h.displacementScale=n.displacementScale,h.displacementBias=n.displacementBias,h.wireframeLinewidth=n.wireframeLinewidth,h.linewidth=n.linewidth,!0===i.isPointLight&&!0===h.isMeshDistanceMaterial&&(h.referencePosition.setFromMatrixPosition(i.matrixWorld),h.nearDistance=r,h.farDistance=s),h}function x(n,r,s,a,o){if(!1===n.visible)return
if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&3===o)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,n.matrixWorld)
const i=e.update(n),r=n.material
if(Array.isArray(r)){const e=i.groups
for(let l=0,c=e.length;l<c;l++){const c=e[l],h=r[c.materialIndex]
if(h&&h.visible){const e=_(n,h,a,s.near,s.far,o)
t.renderBufferDirect(s,null,i,e,n,c)}}}else if(r.visible){const e=_(n,r,a,s.near,s.far,o)
t.renderBufferDirect(s,null,i,e,n,null)}}const l=n.children
for(let t=0,e=l.length;t<e;t++)x(l[t],r,s,a,o)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(e,n,o){if(!1===v.enabled)return
if(!1===v.autoUpdate&&!1===v.needsUpdate)return
if(0===e.length)return
const l=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),d=t.state
d.setBlending(0),d.buffers.color.setClear(1,1,1,1),d.buffers.depth.setTest(!0),d.setScissorTest(!1)
for(let m=0,f=e.length;m<f;m++){const l=e[m],c=l.shadow
if(void 0===c){console.warn("THREE.WebGLShadowMap:",l,"has no shadow.")
continue}if(!1===c.autoUpdate&&!1===c.needsUpdate)continue
r.copy(c.mapSize)
const u=c.getFrameExtents()
if(r.multiply(u),s.copy(c.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/u.x),r.x=s.x*u.x,c.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/u.y),r.y=s.y*u.y,c.mapSize.y=s.y)),null!==c.map||c.isPointLightShadow||3!==this.type||(c.map=new Qt(r.x,r.y),c.map.texture.name=l.name+".shadowMap",c.mapPass=new Qt(r.x,r.y),c.camera.updateProjectionMatrix()),null===c.map){const t={minFilter:p,magFilter:p,format:S}
c.map=new Qt(r.x,r.y,t),c.map.texture.name=l.name+".shadowMap",c.camera.updateProjectionMatrix()}t.setRenderTarget(c.map),t.clear()
const f=c.getViewportCount()
for(let t=0;t<f;t++){const e=c.getViewport(t)
a.set(s.x*e.x,s.y*e.y,s.x*e.z,s.y*e.w),d.viewport(a),c.updateMatrices(l,t),i=c.getFrustum(),x(n,o,c.camera,l,this.type)}c.isPointLightShadow||3!==this.type||y(c,o),c.needsUpdate=!1}v.needsUpdate=!1,t.setRenderTarget(l,c,u)}}function Ys(t,e,n){const r=n.isWebGL2,s=new function(){let e=!1
const n=new Kt
let i=null
const r=new Kt(0,0,0,0)
return{setMask:function(n){i===n||e||(t.colorMask(n,n,n,n),i=n)},setLocked:function(t){e=t},setClear:function(e,i,s,a,o){!0===o&&(e*=a,i*=a,s*=a),n.set(e,i,s,a),!1===r.equals(n)&&(t.clearColor(e,i,s,a),r.copy(n))},reset:function(){e=!1,i=null,r.set(-1,0,0,0)}}},a=new function(){let e=!1,n=null,i=null,r=null
return{setTest:function(e){e?H(t.DEPTH_TEST):z(t.DEPTH_TEST)},setMask:function(i){n===i||e||(t.depthMask(i),n=i)},setFunc:function(e){if(i!==e){if(e)switch(e){case 0:t.depthFunc(t.NEVER)
break
case 1:t.depthFunc(t.ALWAYS)
break
case 2:t.depthFunc(t.LESS)
break
case 3:default:t.depthFunc(t.LEQUAL)
break
case 4:t.depthFunc(t.EQUAL)
break
case 5:t.depthFunc(t.GEQUAL)
break
case 6:t.depthFunc(t.GREATER)
break
case 7:t.depthFunc(t.NOTEQUAL)}else t.depthFunc(t.LEQUAL)
i=e}},setLocked:function(t){e=t},setClear:function(e){r!==e&&(t.clearDepth(e),r=e)},reset:function(){e=!1,n=null,i=null,r=null}}},o=new function(){let e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null
return{setTest:function(n){e||(n?H(t.STENCIL_TEST):z(t.STENCIL_TEST))},setMask:function(i){n===i||e||(t.stencilMask(i),n=i)},setFunc:function(e,n,a){i===e&&r===n&&s===a||(t.stencilFunc(e,n,a),i=e,r=n,s=a)},setOp:function(e,n,i){a===e&&o===n&&l===i||(t.stencilOp(e,n,i),a=e,o=n,l=i)},setLocked:function(t){e=t},setClear:function(e){c!==e&&(t.clearStencil(e),c=e)},reset:function(){e=!1,n=null,i=null,r=null,s=null,a=null,o=null,l=null,c=null}}}
let l={},c={},h=new WeakMap,u=[],d=null,p=!1,m=null,f=null,g=null,v=null,y=null,_=null,x=null,M=!1,b=null,w=null,E=null,S=null,T=null
const A=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
let R=!1,C=0
const L=t.getParameter(t.VERSION);-1!==L.indexOf("WebGL")?(C=parseFloat(/^WebGL (\d)/.exec(L)[1]),R=C>=1):-1!==L.indexOf("OpenGL ES")&&(C=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),R=C>=2)
let P=null,D={}
const I=t.getParameter(t.SCISSOR_BOX),N=t.getParameter(t.VIEWPORT),U=(new Kt).fromArray(I),O=(new Kt).fromArray(N)
function F(e,n,i){const r=new Uint8Array(4),s=t.createTexture()
t.bindTexture(e,s),t.texParameteri(e,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(e,t.TEXTURE_MAG_FILTER,t.NEAREST)
for(let a=0;a<i;a++)t.texImage2D(n+a,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,r)
return s}const B={}
function H(e){!0!==l[e]&&(t.enable(e),l[e]=!0)}function z(e){!1!==l[e]&&(t.disable(e),l[e]=!1)}B[t.TEXTURE_2D]=F(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=F(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(t.DEPTH_TEST),a.setFunc(3),W(!1),j(1),H(t.CULL_FACE),k(0)
const G={[i]:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT}
if(r)G[103]=t.MIN,G[104]=t.MAX
else{const t=e.get("EXT_blend_minmax")
null!==t&&(G[103]=t.MIN_EXT,G[104]=t.MAX_EXT)}const V={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA}
function k(e,n,r,s,a,o,l,c){if(0!==e){if(!1===p&&(H(t.BLEND),p=!0),5===e)a=a||n,o=o||r,l=l||s,n===f&&a===y||(t.blendEquationSeparate(G[n],G[a]),f=n,y=a),r===g&&s===v&&o===_&&l===x||(t.blendFuncSeparate(V[r],V[s],V[o],V[l]),g=r,v=s,_=o,x=l),m=e,M=null
else if(e!==m||c!==M){if(f===i&&y===i||(t.blendEquation(t.FUNC_ADD),f=i,y=i),c)switch(e){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)
break
case 2:t.blendFunc(t.ONE,t.ONE)
break
case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE)
break
case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA)
break
default:console.error("THREE.WebGLState: Invalid blending: ",e)}else switch(e){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA)
break
case 2:t.blendFunc(t.SRC_ALPHA,t.ONE)
break
case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE)
break
case 4:t.blendFunc(t.ZERO,t.SRC_COLOR)
break
default:console.error("THREE.WebGLState: Invalid blending: ",e)}g=null,v=null,_=null,x=null,m=e,M=c}}else!0===p&&(z(t.BLEND),p=!1)}function W(e){b!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),b=e)}function j(e){0!==e?(H(t.CULL_FACE),e!==w&&(1===e?t.cullFace(t.BACK):2===e?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):z(t.CULL_FACE),w=e}function X(e,n,i){e?(H(t.POLYGON_OFFSET_FILL),S===n&&T===i||(t.polygonOffset(n,i),S=n,T=i)):z(t.POLYGON_OFFSET_FILL)}function q(e){void 0===e&&(e=t.TEXTURE0+A-1),P!==e&&(t.activeTexture(e),P=e)}return{buffers:{color:s,depth:a,stencil:o},enable:H,disable:z,bindFramebuffer:function(e,n){return c[e]!==n&&(t.bindFramebuffer(e,n),c[e]=n,r&&(e===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=n),e===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=n)),!0)},drawBuffers:function(i,r){let s=u,a=!1
if(i)if(s=h.get(r),void 0===s&&(s=[],h.set(r,s)),i.isWebGLMultipleRenderTargets){const e=i.texture
if(s.length!==e.length||s[0]!==t.COLOR_ATTACHMENT0){for(let n=0,i=e.length;n<i;n++)s[n]=t.COLOR_ATTACHMENT0+n
s.length=e.length,a=!0}}else s[0]!==t.COLOR_ATTACHMENT0&&(s[0]=t.COLOR_ATTACHMENT0,a=!0)
else s[0]!==t.BACK&&(s[0]=t.BACK,a=!0)
a&&(n.isWebGL2?t.drawBuffers(s):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))},useProgram:function(e){return d!==e&&(t.useProgram(e),d=e,!0)},setBlending:k,setMaterial:function(e,n){2===e.side?z(t.CULL_FACE):H(t.CULL_FACE)
let i=1===e.side
n&&(i=!i),W(i),1===e.blending&&!1===e.transparent?k(0):k(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),a.setFunc(e.depthFunc),a.setTest(e.depthTest),a.setMask(e.depthWrite),s.setMask(e.colorWrite)
const r=e.stencilWrite
o.setTest(r),r&&(o.setMask(e.stencilWriteMask),o.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),o.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),X(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?H(t.SAMPLE_ALPHA_TO_COVERAGE):z(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:W,setCullFace:j,setLineWidth:function(e){e!==E&&(R&&t.lineWidth(e),E=e)},setPolygonOffset:X,setScissorTest:function(e){e?H(t.SCISSOR_TEST):z(t.SCISSOR_TEST)},activeTexture:q,bindTexture:function(e,n){null===P&&q()
let i=D[P]
void 0===i&&(i={type:void 0,texture:void 0},D[P]=i),i.type===e&&i.texture===n||(t.bindTexture(e,n||B[e]),i.type=e,i.texture=n)},unbindTexture:function(){const e=D[P]
void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage2D:function(){try{t.texImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage3D:function(){try{t.texImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texStorage2D:function(){try{t.texStorage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texStorage3D:function(){try{t.texStorage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texSubImage2D:function(){try{t.texSubImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texSubImage3D:function(){try{t.texSubImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},scissor:function(e){!1===U.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),U.copy(e))},viewport:function(e){!1===O.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),O.copy(e))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),!0===r&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),l={},P=null,D={},c={},h=new WeakMap,u=[],d=null,p=!1,m=null,f=null,g=null,v=null,y=null,_=null,x=null,M=!1,b=null,w=null,E=null,S=null,T=null,U.set(0,0,t.canvas.width,t.canvas.height),O.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}}}function Js(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,R=r.maxTextureSize,C=r.maxSamples,L=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,P=/OculusBrowser/g.test(navigator.userAgent),D=new WeakMap
let I
const N=new WeakMap
let U=!1
try{U="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(t){}function O(t,e){return U?new OffscreenCanvas(t,e):It("canvas")}function F(t,e,n,i){let r=1
if((t.width>i||t.height>i)&&(r=i/Math.max(t.width,t.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const i=e?Tt:Math.floor,s=i(r*t.width),a=i(r*t.height)
void 0===I&&(I=O(s,a))
const o=n?O(s,a):I
return o.width=s,o.height=a,o.getContext("2d").drawImage(t,0,0,s,a),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+s+"x"+a+")."),o}return"data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function B(t){return Et(t.width)&&Et(t.height)}function H(t,e){return t.generateMipmaps&&e&&t.minFilter!==p&&t.minFilter!==g}function z(e){t.generateMipmap(e)}function G(n,i,r,s,a=!1){if(!1===o)return i
if(null!==n){if(void 0!==t[n])return t[n]
console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let l=i
return i===t.RED&&(r===t.FLOAT&&(l=t.R32F),r===t.HALF_FLOAT&&(l=t.R16F),r===t.UNSIGNED_BYTE&&(l=t.R8)),i===t.RG&&(r===t.FLOAT&&(l=t.RG32F),r===t.HALF_FLOAT&&(l=t.RG16F),r===t.UNSIGNED_BYTE&&(l=t.RG8)),i===t.RGBA&&(r===t.FLOAT&&(l=t.RGBA32F),r===t.HALF_FLOAT&&(l=t.RGBA16F),r===t.UNSIGNED_BYTE&&(l=s===ot&&!1===a?t.SRGB8_ALPHA8:t.RGBA8),r===t.UNSIGNED_SHORT_4_4_4_4&&(l=t.RGBA4),r===t.UNSIGNED_SHORT_5_5_5_1&&(l=t.RGB5_A1)),l!==t.R16F&&l!==t.R32F&&l!==t.RG16F&&l!==t.RG32F&&l!==t.RGBA16F&&l!==t.RGBA32F||e.get("EXT_color_buffer_float"),l}function V(t,e,n){return!0===H(t,n)||t.isFramebufferTexture&&t.minFilter!==p&&t.minFilter!==g?Math.log2(Math.max(e.width,e.height))+1:void 0!==t.mipmaps&&t.mipmaps.length>0?t.mipmaps.length:t.isCompressedTexture&&Array.isArray(t.image)?e.mipmaps.length:1}function k(e){return e===p||e===m||e===f?t.NEAREST:t.LINEAR}function W(t){const e=t.target
e.removeEventListener("dispose",W),function(t){const e=i.get(t)
if(void 0===e.__webglInit)return
const n=t.source,r=N.get(n)
if(r){const i=r[e.__cacheKey]
i.usedTimes--,0===i.usedTimes&&X(t),0===Object.keys(r).length&&N.delete(n)}i.remove(t)}(e),e.isVideoTexture&&D.delete(e)}function j(e){const n=e.target
n.removeEventListener("dispose",j),function(e){const n=e.texture,r=i.get(e),s=i.get(n)
if(void 0!==s.__webglTexture&&(t.deleteTexture(s.__webglTexture),a.memory.textures--),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let i=0;i<6;i++)t.deleteFramebuffer(r.__webglFramebuffer[i]),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[i])
else t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer&&t.deleteRenderbuffer(r.__webglColorRenderbuffer),r.__webglDepthRenderbuffer&&t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
if(e.isWebGLMultipleRenderTargets)for(let o=0,l=n.length;o<l;o++){const e=i.get(n[o])
e.__webglTexture&&(t.deleteTexture(e.__webglTexture),a.memory.textures--),i.remove(n[o])}i.remove(n),i.remove(e)}(n)}function X(e){const n=i.get(e)
t.deleteTexture(n.__webglTexture)
const r=e.source
delete N.get(r)[n.__cacheKey],a.memory.textures--}let q=0
function Y(e,r){const s=i.get(e)
if(e.isVideoTexture&&function(t){const e=a.render.frame
D.get(t)!==e&&(D.set(t,e),t.update())}(e),!1===e.isRenderTargetTexture&&e.version>0&&s.__version!==e.version){const t=e.image
if(null===t)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.")
else{if(!1!==t.complete)return void $(s,e,r)
console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_2D,s.__webglTexture)}const J={[h]:t.REPEAT,[u]:t.CLAMP_TO_EDGE,[d]:t.MIRRORED_REPEAT},Z={[p]:t.NEAREST,[m]:t.NEAREST_MIPMAP_NEAREST,[f]:t.NEAREST_MIPMAP_LINEAR,[g]:t.LINEAR,[v]:t.LINEAR_MIPMAP_NEAREST,[y]:t.LINEAR_MIPMAP_LINEAR}
function K(n,s,a){if(a?(t.texParameteri(n,t.TEXTURE_WRAP_S,J[s.wrapS]),t.texParameteri(n,t.TEXTURE_WRAP_T,J[s.wrapT]),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,J[s.wrapR]),t.texParameteri(n,t.TEXTURE_MAG_FILTER,Z[s.magFilter]),t.texParameteri(n,t.TEXTURE_MIN_FILTER,Z[s.minFilter])):(t.texParameteri(n,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(n,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n!==t.TEXTURE_3D&&n!==t.TEXTURE_2D_ARRAY||t.texParameteri(n,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),s.wrapS===u&&s.wrapT===u||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(n,t.TEXTURE_MAG_FILTER,k(s.magFilter)),t.texParameteri(n,t.TEXTURE_MIN_FILTER,k(s.minFilter)),s.minFilter!==p&&s.minFilter!==g&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===e.has("EXT_texture_filter_anisotropic")){const a=e.get("EXT_texture_filter_anisotropic")
if(s.type===b&&!1===e.has("OES_texture_float_linear"))return
if(!1===o&&s.type===w&&!1===e.has("OES_texture_half_float_linear"))return;(s.anisotropy>1||i.get(s).__currentAnisotropy)&&(t.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy)}}function Q(e,n){let i=!1
void 0===e.__webglInit&&(e.__webglInit=!0,n.addEventListener("dispose",W))
const r=n.source
let s=N.get(r)
void 0===s&&(s={},N.set(r,s))
const o=function(t){const e=[]
return e.push(t.wrapS),e.push(t.wrapT),e.push(t.magFilter),e.push(t.minFilter),e.push(t.anisotropy),e.push(t.internalFormat),e.push(t.format),e.push(t.type),e.push(t.generateMipmaps),e.push(t.premultiplyAlpha),e.push(t.flipY),e.push(t.unpackAlignment),e.push(t.encoding),e.join()}(n)
if(o!==e.__cacheKey){void 0===s[o]&&(s[o]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,i=!0),s[o].usedTimes++
const r=s[e.__cacheKey]
void 0!==r&&(s[e.__cacheKey].usedTimes--,0===r.usedTimes&&X(n)),e.__cacheKey=o,e.__webglTexture=s[o].texture}return i}function $(e,i,r){let a=t.TEXTURE_2D
i.isDataArrayTexture&&(a=t.TEXTURE_2D_ARRAY),i.isData3DTexture&&(a=t.TEXTURE_3D)
const l=Q(e,i),c=i.source
if(n.activeTexture(t.TEXTURE0+r),n.bindTexture(a,e.__webglTexture),c.version!==c.__currentVersion||!0===l){t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,i.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE)
const r=function(t){return!o&&(t.wrapS!==u||t.wrapT!==u||t.minFilter!==p&&t.minFilter!==g)}(i)&&!1===B(i.image)
let l=F(i.image,r,!1,R)
l=st(i,l)
const h=B(l)||o,d=s.convert(i.format,i.encoding)
let m,f=s.convert(i.type),v=G(i.internalFormat,d,f,i.encoding,i.isVideoTexture)
K(a,i,h)
const y=i.mipmaps,_=o&&!0!==i.isVideoTexture,w=void 0===e.__version,C=V(i,l,h)
if(i.isDepthTexture)v=t.DEPTH_COMPONENT,o?v=i.type===b?t.DEPTH_COMPONENT32F:i.type===M?t.DEPTH_COMPONENT24:i.type===E?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT16:i.type===b&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),i.format===T&&v===t.DEPTH_COMPONENT&&i.type!==x&&i.type!==M&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),i.type=x,f=s.convert(i.type)),i.format===A&&v===t.DEPTH_COMPONENT&&(v=t.DEPTH_STENCIL,i.type!==E&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),i.type=E,f=s.convert(i.type))),_&&w?n.texStorage2D(t.TEXTURE_2D,1,v,l.width,l.height):n.texImage2D(t.TEXTURE_2D,0,v,l.width,l.height,0,d,f,null)
else if(i.isDataTexture)if(y.length>0&&h){_&&w&&n.texStorage2D(t.TEXTURE_2D,C,v,y[0].width,y[0].height)
for(let e=0,i=y.length;e<i;e++)m=y[e],_?n.texSubImage2D(t.TEXTURE_2D,e,0,0,m.width,m.height,d,f,m.data):n.texImage2D(t.TEXTURE_2D,e,v,m.width,m.height,0,d,f,m.data)
i.generateMipmaps=!1}else _?(w&&n.texStorage2D(t.TEXTURE_2D,C,v,l.width,l.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,l.width,l.height,d,f,l.data)):n.texImage2D(t.TEXTURE_2D,0,v,l.width,l.height,0,d,f,l.data)
else if(i.isCompressedTexture){_&&w&&n.texStorage2D(t.TEXTURE_2D,C,v,y[0].width,y[0].height)
for(let e=0,r=y.length;e<r;e++)m=y[e],i.format!==S?null!==d?_?n.compressedTexSubImage2D(t.TEXTURE_2D,e,0,0,m.width,m.height,d,m.data):n.compressedTexImage2D(t.TEXTURE_2D,e,v,m.width,m.height,0,m.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?n.texSubImage2D(t.TEXTURE_2D,e,0,0,m.width,m.height,d,f,m.data):n.texImage2D(t.TEXTURE_2D,e,v,m.width,m.height,0,d,f,m.data)}else if(i.isDataArrayTexture)_?(w&&n.texStorage3D(t.TEXTURE_2D_ARRAY,C,v,l.width,l.height,l.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,l.width,l.height,l.depth,d,f,l.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,v,l.width,l.height,l.depth,0,d,f,l.data)
else if(i.isData3DTexture)_?(w&&n.texStorage3D(t.TEXTURE_3D,C,v,l.width,l.height,l.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,l.width,l.height,l.depth,d,f,l.data)):n.texImage3D(t.TEXTURE_3D,0,v,l.width,l.height,l.depth,0,d,f,l.data)
else if(i.isFramebufferTexture)_&&w?n.texStorage2D(t.TEXTURE_2D,C,v,l.width,l.height):n.texImage2D(t.TEXTURE_2D,0,v,l.width,l.height,0,d,f,null)
else if(y.length>0&&h){_&&w&&n.texStorage2D(t.TEXTURE_2D,C,v,y[0].width,y[0].height)
for(let e=0,i=y.length;e<i;e++)m=y[e],_?n.texSubImage2D(t.TEXTURE_2D,e,0,0,d,f,m):n.texImage2D(t.TEXTURE_2D,e,v,d,f,m)
i.generateMipmaps=!1}else _?(w&&n.texStorage2D(t.TEXTURE_2D,C,v,l.width,l.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,d,f,l)):n.texImage2D(t.TEXTURE_2D,0,v,d,f,l)
H(i,h)&&z(a),c.__currentVersion=c.version,i.onUpdate&&i.onUpdate(i)}e.__version=i.version}function tt(e,r,a,o,l){const c=s.convert(a.format,a.encoding),h=s.convert(a.type),u=G(a.internalFormat,c,h,a.encoding)
i.get(r).__hasExternalTextures||(l===t.TEXTURE_3D||l===t.TEXTURE_2D_ARRAY?n.texImage3D(l,0,u,r.width,r.height,r.depth,0,c,h,null):n.texImage2D(l,0,u,r.width,r.height,0,c,h,null)),n.bindFramebuffer(t.FRAMEBUFFER,e),rt(r)?L.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,o,l,i.get(a).__webglTexture,0,it(r)):t.framebufferTexture2D(t.FRAMEBUFFER,o,l,i.get(a).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(e,n,i){if(t.bindRenderbuffer(t.RENDERBUFFER,e),n.depthBuffer&&!n.stencilBuffer){let r=t.DEPTH_COMPONENT16
if(i||rt(n)){const e=n.depthTexture
e&&e.isDepthTexture&&(e.type===b?r=t.DEPTH_COMPONENT32F:e.type===M&&(r=t.DEPTH_COMPONENT24))
const i=it(n)
rt(n)?L.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,i,r,n.width,n.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,i,r,n.width,n.height)}else t.renderbufferStorage(t.RENDERBUFFER,r,n.width,n.height)
t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e)}else if(n.depthBuffer&&n.stencilBuffer){const r=it(n)
i&&!1===rt(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):rt(n)?L.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,r,t.DEPTH24_STENCIL8,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,e)}else{const e=!0===n.isWebGLMultipleRenderTargets?n.texture[0]:n.texture,r=s.convert(e.format,e.encoding),a=s.convert(e.type),o=G(e.internalFormat,r,a,e.encoding),l=it(n)
i&&!1===rt(n)?t.renderbufferStorageMultisample(t.RENDERBUFFER,l,o,n.width,n.height):rt(n)?L.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,l,o,n.width,n.height):t.renderbufferStorage(t.RENDERBUFFER,o,n.width,n.height)}t.bindRenderbuffer(t.RENDERBUFFER,null)}function nt(e){const r=i.get(e),s=!0===e.isWebGLCubeRenderTarget
if(e.depthTexture&&!r.__autoAllocateDepthBuffer){if(s)throw new Error("target.depthTexture not supported in Cube render targets")
!function(e,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported")
if(n.bindFramebuffer(t.FRAMEBUFFER,e),!r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture")
i.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),Y(r.depthTexture,0)
const s=i.get(r.depthTexture).__webglTexture,a=it(r)
if(r.depthTexture.format===T)rt(r)?L.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,s,0)
else{if(r.depthTexture.format!==A)throw new Error("Unknown depthTexture format")
rt(r)?L.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0,a):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,s,0)}}(r.__webglFramebuffer,e)}else if(s){r.__webglDepthbuffer=[]
for(let i=0;i<6;i++)n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]=t.createRenderbuffer(),et(r.__webglDepthbuffer[i],e,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),et(r.__webglDepthbuffer,e,!1)
n.bindFramebuffer(t.FRAMEBUFFER,null)}function it(t){return Math.min(C,t.samples)}function rt(t){const n=i.get(t)
return o&&t.samples>0&&!0===e.has("WEBGL_multisampled_render_to_texture")&&!1!==n.__useRenderToTexture}function st(t,n){const i=t.encoding,r=t.format,s=t.type
return!0===t.isCompressedTexture||!0===t.isVideoTexture||t.format===mt||i!==at&&(i===ot?!1===o?!0===e.has("EXT_sRGB")&&r===S?(t.format=mt,t.minFilter=g,t.generateMipmaps=!1):n=Xt.sRGBToLinear(n):r===S&&s===_||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",i)),n}this.allocateTextureUnit=function(){const t=q
return t>=l&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+l),q+=1,t},this.resetTextureUnits=function(){q=0},this.setTexture2D=Y,this.setTexture2DArray=function(e,r){const s=i.get(e)
e.version>0&&s.__version!==e.version?$(s,e,r):(n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_2D_ARRAY,s.__webglTexture))},this.setTexture3D=function(e,r){const s=i.get(e)
e.version>0&&s.__version!==e.version?$(s,e,r):(n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_3D,s.__webglTexture))},this.setTextureCube=function(e,r){const a=i.get(e)
e.version>0&&a.__version!==e.version?function(e,i,r){if(6!==i.image.length)return
const a=Q(e,i),l=i.source
if(n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_CUBE_MAP,e.__webglTexture),l.version!==l.__currentVersion||!0===a){t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,i.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE)
const r=i.isCompressedTexture||i.image[0].isCompressedTexture,a=i.image[0]&&i.image[0].isDataTexture,h=[]
for(let t=0;t<6;t++)h[t]=r||a?a?i.image[t].image:i.image[t]:F(i.image[t],!1,!0,c),h[t]=st(i,h[t])
const u=h[0],d=B(u)||o,p=s.convert(i.format,i.encoding),m=s.convert(i.type),f=G(i.internalFormat,p,m,i.encoding),g=o&&!0!==i.isVideoTexture,v=void 0===e.__version
let y,_=V(i,u,d)
if(K(t.TEXTURE_CUBE_MAP,i,d),r){g&&v&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_,f,u.width,u.height)
for(let e=0;e<6;e++){y=h[e].mipmaps
for(let r=0;r<y.length;r++){const s=y[r]
i.format!==S?null!==p?g?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,r,0,0,s.width,s.height,p,s.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,r,f,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):g?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,r,0,0,s.width,s.height,p,m,s.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,r,f,s.width,s.height,0,p,m,s.data)}}}else{y=i.mipmaps,g&&v&&(y.length>0&&_++,n.texStorage2D(t.TEXTURE_CUBE_MAP,_,f,h[0].width,h[0].height))
for(let e=0;e<6;e++)if(a){g?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,h[e].width,h[e].height,p,m,h[e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,f,h[e].width,h[e].height,0,p,m,h[e].data)
for(let i=0;i<y.length;i++){const r=y[i].image[e].image
g?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,r.width,r.height,p,m,r.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,f,r.width,r.height,0,p,m,r.data)}}else{g?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,p,m,h[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,f,p,m,h[e])
for(let i=0;i<y.length;i++){const r=y[i]
g?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,0,0,p,m,r.image[e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+e,i+1,f,p,m,r.image[e])}}}H(i,d)&&z(t.TEXTURE_CUBE_MAP),l.__currentVersion=l.version,i.onUpdate&&i.onUpdate(i)}e.__version=i.version}(a,e,r):(n.activeTexture(t.TEXTURE0+r),n.bindTexture(t.TEXTURE_CUBE_MAP,a.__webglTexture))},this.rebindTextures=function(e,n,r){const s=i.get(e)
void 0!==n&&tt(s.__webglFramebuffer,e,e.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),void 0!==r&&nt(e)},this.setupRenderTarget=function(e){const l=e.texture,c=i.get(e),h=i.get(l)
e.addEventListener("dispose",j),!0!==e.isWebGLMultipleRenderTargets&&(void 0===h.__webglTexture&&(h.__webglTexture=t.createTexture()),h.__version=l.version,a.memory.textures++)
const u=!0===e.isWebGLCubeRenderTarget,d=!0===e.isWebGLMultipleRenderTargets,p=B(e)||o
if(u){c.__webglFramebuffer=[]
for(let e=0;e<6;e++)c.__webglFramebuffer[e]=t.createFramebuffer()}else if(c.__webglFramebuffer=t.createFramebuffer(),d)if(r.drawBuffers){const n=e.texture
for(let e=0,r=n.length;e<r;e++){const r=i.get(n[e])
void 0===r.__webglTexture&&(r.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")
else if(o&&e.samples>0&&!1===rt(e)){c.__webglMultisampledFramebuffer=t.createFramebuffer(),c.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,c.__webglColorRenderbuffer)
const i=s.convert(l.format,l.encoding),r=s.convert(l.type),a=G(l.internalFormat,i,r,l.encoding),o=it(e)
t.renderbufferStorageMultisample(t.RENDERBUFFER,o,a,e.width,e.height),n.bindFramebuffer(t.FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,c.__webglColorRenderbuffer),t.bindRenderbuffer(t.RENDERBUFFER,null),e.depthBuffer&&(c.__webglDepthRenderbuffer=t.createRenderbuffer(),et(c.__webglDepthRenderbuffer,e,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}if(u){n.bindTexture(t.TEXTURE_CUBE_MAP,h.__webglTexture),K(t.TEXTURE_CUBE_MAP,l,p)
for(let n=0;n<6;n++)tt(c.__webglFramebuffer[n],e,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+n)
H(l,p)&&z(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){const r=e.texture
for(let s=0,a=r.length;s<a;s++){const a=r[s],o=i.get(a)
n.bindTexture(t.TEXTURE_2D,o.__webglTexture),K(t.TEXTURE_2D,a,p),tt(c.__webglFramebuffer,e,a,t.COLOR_ATTACHMENT0+s,t.TEXTURE_2D),H(a,p)&&z(t.TEXTURE_2D)}n.unbindTexture()}else{let i=t.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o?i=e.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(i,h.__webglTexture),K(i,l,p),tt(c.__webglFramebuffer,e,l,t.COLOR_ATTACHMENT0,i),H(l,p)&&z(i),n.unbindTexture()}e.depthBuffer&&nt(e)},this.updateRenderTargetMipmap=function(e){const r=B(e)||o,s=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture]
for(let a=0,o=s.length;a<o;a++){const o=s[a]
if(H(o,r)){const r=e.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,s=i.get(o).__webglTexture
n.bindTexture(r,s),z(r),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(e){if(o&&e.samples>0&&!1===rt(e)){const r=e.width,s=e.height
let a=t.COLOR_BUFFER_BIT
const o=[t.COLOR_ATTACHMENT0],l=e.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT
e.depthBuffer&&o.push(l)
const c=i.get(e),h=void 0!==c.__ignoreDepthValues&&c.__ignoreDepthValues
!1===h&&(e.depthBuffer&&(a|=t.DEPTH_BUFFER_BIT),e.stencilBuffer&&(a|=t.STENCIL_BUFFER_BIT)),n.bindFramebuffer(t.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,c.__webglFramebuffer),!0===h&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[l]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[l])),t.blitFramebuffer(0,0,r,s,0,0,r,s,a,t.NEAREST),P&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,o),n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=rt}function Zs(t,e,n){const i=n.isWebGL2
return{convert:function(n,r=null){let s
if(n===_)return t.UNSIGNED_BYTE
if(1017===n)return t.UNSIGNED_SHORT_4_4_4_4
if(1018===n)return t.UNSIGNED_SHORT_5_5_5_1
if(1010===n)return t.BYTE
if(1011===n)return t.SHORT
if(n===x)return t.UNSIGNED_SHORT
if(1013===n)return t.INT
if(n===M)return t.UNSIGNED_INT
if(n===b)return t.FLOAT
if(n===w)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),null!==s?s.HALF_FLOAT_OES:null)
if(1021===n)return t.ALPHA
if(n===S)return t.RGBA
if(1024===n)return t.LUMINANCE
if(1025===n)return t.LUMINANCE_ALPHA
if(n===T)return t.DEPTH_COMPONENT
if(n===A)return t.DEPTH_STENCIL
if(1028===n)return t.RED
if(1022===n)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),t.RGBA
if(n===mt)return s=e.get("EXT_sRGB"),null!==s?s.SRGB_ALPHA_EXT:null
if(1029===n)return t.RED_INTEGER
if(1030===n)return t.RG
if(1031===n)return t.RG_INTEGER
if(1033===n)return t.RGBA_INTEGER
if(n===R||n===C||n===L||n===P)if(r===ot){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),null===s)return null
if(n===R)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT
if(n===C)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT
if(n===L)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT
if(n===P)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),null===s)return null
if(n===R)return s.COMPRESSED_RGB_S3TC_DXT1_EXT
if(n===C)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT
if(n===L)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT
if(n===P)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===D||n===I||n===N||n===U){if(s=e.get("WEBGL_compressed_texture_pvrtc"),null===s)return null
if(n===D)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
if(n===I)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
if(n===N)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
if(n===U)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===n)return s=e.get("WEBGL_compressed_texture_etc1"),null!==s?s.COMPRESSED_RGB_ETC1_WEBGL:null
if(n===O||n===F){if(s=e.get("WEBGL_compressed_texture_etc"),null===s)return null
if(n===O)return r===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2
if(n===F)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(n===B||n===H||n===z||n===G||n===V||n===k||n===W||n===j||n===X||n===q||n===Y||n===J||n===Z||n===K){if(s=e.get("WEBGL_compressed_texture_astc"),null===s)return null
if(n===B)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR
if(n===H)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR
if(n===z)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR
if(n===G)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR
if(n===V)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR
if(n===k)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR
if(n===W)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR
if(n===j)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR
if(n===X)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR
if(n===q)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR
if(n===Y)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR
if(n===J)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR
if(n===Z)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR
if(n===K)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Q){if(s=e.get("EXT_texture_compression_bptc"),null===s)return null
if(n===Q)return r===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}return n===E?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),null!==s?s.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}Xs.prototype.isMeshDistanceMaterial=!0
class Ks extends fi{constructor(t=[]){super(),this.cameras=t}}Ks.prototype.isArrayCamera=!0
class Qs extends ln{constructor(){super(),this.type="Group"}}Qs.prototype.isGroup=!0
const $s={type:"move"}
class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null
const a=this._targetRay,o=this._grip,l=this._hand
if(t&&"visible-blurred"!==e.session.visibilityState)if(null!==a&&(i=e.getPose(t.targetRaySpace,n),null!==i&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($s))),l&&t.hand){s=!0
for(const s of t.hand.values()){const t=e.getJointPose(s,n)
if(void 0===l.joints[s.jointName]){const t=new Qs
t.matrixAutoUpdate=!1,t.visible=!1,l.joints[s.jointName]=t,l.add(t)}const i=l.joints[s.jointName]
null!==t&&(i.matrix.fromArray(t.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.jointRadius=t.radius),i.visible=null!==t}const i=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=i.position.distanceTo(r.position),o=.02,c=.005
l.inputState.pinching&&a>o+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&a<=o-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else null!==o&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),null!==r&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1))
return null!==a&&(a.visible=null!==i),null!==o&&(o.visible=null!==r),null!==l&&(l.visible=null!==s),this}}class ea extends Zt{constructor(t,e,n,i,r,s,a,o,l,c){if((c=void 0!==c?c:T)!==T&&c!==A)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat")
void 0===n&&c===T&&(n=x),void 0===n&&c===A&&(n=E),super(null,i,r,s,a,o,c,n,l),this.image={width:t,height:e},this.magFilter=void 0!==a?a:p,this.minFilter=void 0!==o?o:p,this.flipY=!1,this.generateMipmaps=!1}}ea.prototype.isDepthTexture=!0
class na extends ft{constructor(t,e){super()
const n=this
let i=null,r=1,s=null,a="local-floor",o=null,l=null,c=null,h=null,u=null
const d=e.getContextAttributes()
let p=null,m=null
const f=[],g=new Map,v=new fi
v.layers.enable(1),v.viewport=new Kt
const y=new fi
y.layers.enable(2),y.viewport=new Kt
const M=[v,y],b=new Ks
b.layers.enable(1),b.layers.enable(2)
let w=null,R=null
function C(t){const e=g.get(t.inputSource)
e&&e.dispatchEvent({type:t.type,data:t.inputSource})}function L(){g.forEach((function(t,e){t.disconnect(e)})),g.clear(),w=null,R=null,t.setRenderTarget(p),h=null,c=null,l=null,i=null,m=null,O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function P(t){const e=i.inputSources
for(let n=0;n<f.length;n++)g.set(e[n],f[n])
for(let n=0;n<t.removed.length;n++){const e=t.removed[n],i=g.get(e)
i&&(i.dispatchEvent({type:"disconnected",data:e}),g.delete(e))}for(let n=0;n<t.added.length;n++){const e=t.added[n],i=g.get(e)
i&&i.dispatchEvent({type:"connected",data:e})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let e=f[t]
return void 0===e&&(e=new ta,f[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){let e=f[t]
return void 0===e&&(e=new ta,f[t]=e),e.getGripSpace()},this.getHand=function(t){let e=f[t]
return void 0===e&&(e=new ta,f[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t){r=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(t){a=t,!0===n.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getBaseLayer=function(){return null!==c?c:h},this.getBinding=function(){return l},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(o){if(i=o,null!==i){if(p=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",L),i.addEventListener("inputsourceschange",P),!0!==d.xrCompatible&&await e.makeXRCompatible(),void 0===i.renderState.layers||!1===t.capabilities.isWebGL2){const n={antialias:void 0!==i.renderState.layers||d.antialias,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r}
h=new XRWebGLLayer(i,e,n),i.updateRenderState({baseLayer:h}),m=new Qt(h.framebufferWidth,h.framebufferHeight,{format:S,type:_,encoding:t.outputEncoding})}else{let n=null,s=null,a=null
d.depth&&(a=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,n=d.stencil?A:T,s=d.stencil?E:x)
const o={colorFormat:t.outputEncoding===ot?e.SRGB8_ALPHA8:e.RGBA8,depthFormat:a,scaleFactor:r}
l=new XRWebGLBinding(i,e),c=l.createProjectionLayer(o),i.updateRenderState({layers:[c]}),m=new Qt(c.textureWidth,c.textureHeight,{format:S,type:_,depthTexture:new ea(c.textureWidth,c.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:d.stencil,encoding:t.outputEncoding,samples:d.antialias?4:0}),t.properties.get(m).__ignoreDepthValues=c.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),s=await i.requestReferenceSpace(a),O.setContext(i),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}}
const D=new se,I=new se
function N(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert()}this.updateCamera=function(t){if(null===i)return
b.near=y.near=v.near=t.near,b.far=y.far=v.far=t.far,w===b.near&&R===b.far||(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,R=b.far)
const e=t.parent,n=b.cameras
N(b,e)
for(let i=0;i<n.length;i++)N(n[i],e)
b.matrixWorld.decompose(b.position,b.quaternion,b.scale),t.position.copy(b.position),t.quaternion.copy(b.quaternion),t.scale.copy(b.scale),t.matrix.copy(b.matrix),t.matrixWorld.copy(b.matrixWorld)
const r=t.children
for(let i=0,s=r.length;i<s;i++)r[i].updateMatrixWorld(!0)
2===n.length?function(t,e,n){D.setFromMatrixPosition(e.matrixWorld),I.setFromMatrixPosition(n.matrixWorld)
const i=D.distanceTo(I),r=e.projectionMatrix.elements,s=n.projectionMatrix.elements,a=r[14]/(r[10]-1),o=r[14]/(r[10]+1),l=(r[9]+1)/r[5],c=(r[9]-1)/r[5],h=(r[8]-1)/r[0],u=(s[8]+1)/s[0],d=a*h,p=a*u,m=i/(-h+u),f=m*-h
e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert()
const g=a+m,v=o+m,y=d-f,_=p+(i-f),x=l*o/v*g,M=c*o/v*g
t.projectionMatrix.makePerspective(y,_,x,M,g,v)}(b,v,y):b.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){return null!==c?c.fixedFoveation:null!==h?h.fixedFoveation:void 0},this.setFoveation=function(t){null!==c&&(c.fixedFoveation=t),null!==h&&void 0!==h.fixedFoveation&&(h.fixedFoveation=t)}
let U=null
const O=new Ai
O.setAnimationLoop((function(e,n){if(o=n.getViewerPose(s),u=n,null!==o){const e=o.views
null!==h&&(t.setRenderTargetFramebuffer(m,h.framebuffer),t.setRenderTarget(m))
let n=!1
e.length!==b.cameras.length&&(b.cameras.length=0,n=!0)
for(let i=0;i<e.length;i++){const r=e[i]
let s=null
if(null!==h)s=h.getViewport(r)
else{const e=l.getViewSubImage(c,r)
s=e.viewport,0===i&&(t.setRenderTargetTextures(m,e.colorTexture,c.ignoreDepthValues?void 0:e.depthStencilTexture),t.setRenderTarget(m))}const a=M[i]
a.matrix.fromArray(r.transform.matrix),a.projectionMatrix.fromArray(r.projectionMatrix),a.viewport.set(s.x,s.y,s.width,s.height),0===i&&b.matrix.copy(a.matrix),!0===n&&b.cameras.push(a)}}const r=i.inputSources
for(let t=0;t<f.length;t++){const e=f[t],i=r[t]
e.update(i,n,s)}U&&U(e,n),u=null})),this.setAnimationLoop=function(t){U=t},this.dispose=function(){}}}function ia(t,e){function n(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,1===i.side&&(n.bumpScale.value*=-1)),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),1===i.side&&n.normalScale.value.negate()),i.specularMap&&(n.specularMap.value=i.specularMap),i.alphaTest>0&&(n.alphaTest.value=i.alphaTest)
const r=e.get(i).envMap
if(r&&(n.envMap.value=r,n.flipEnvMap.value=r.isCubeTexture&&!1===r.isRenderTargetTexture?-1:1,n.reflectivity.value=i.reflectivity,n.ior.value=i.ior,n.refractionRatio.value=i.refractionRatio),i.lightMap){n.lightMap.value=i.lightMap
const e=!0!==t.physicallyCorrectLights?Math.PI:1
n.lightMapIntensity.value=i.lightMapIntensity*e}let s,a
i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?s=i.map:i.specularMap?s=i.specularMap:i.displacementMap?s=i.displacementMap:i.normalMap?s=i.normalMap:i.bumpMap?s=i.bumpMap:i.roughnessMap?s=i.roughnessMap:i.metalnessMap?s=i.metalnessMap:i.alphaMap?s=i.alphaMap:i.emissiveMap?s=i.emissiveMap:i.clearcoatMap?s=i.clearcoatMap:i.clearcoatNormalMap?s=i.clearcoatNormalMap:i.clearcoatRoughnessMap?s=i.clearcoatRoughnessMap:i.specularIntensityMap?s=i.specularIntensityMap:i.specularColorMap?s=i.specularColorMap:i.transmissionMap?s=i.transmissionMap:i.thicknessMap?s=i.thicknessMap:i.sheenColorMap?s=i.sheenColorMap:i.sheenRoughnessMap&&(s=i.sheenRoughnessMap),void 0!==s&&(s.isWebGLRenderTarget&&(s=s.texture),!0===s.matrixAutoUpdate&&s.updateMatrix(),n.uvTransform.value.copy(s.matrix)),i.aoMap?a=i.aoMap:i.lightMap&&(a=i.lightMap),void 0!==a&&(a.isWebGLRenderTarget&&(a=a.texture),!0===a.matrixAutoUpdate&&a.updateMatrix(),n.uv2Transform.value.copy(a.matrix))}return{refreshFogUniforms:function(t,e){t.fogColor.value.copy(e.color),e.isFog?(t.fogNear.value=e.near,t.fogFar.value=e.far):e.isFogExp2&&(t.fogDensity.value=e.density)},refreshMaterialUniforms:function(t,i,r,s,a){i.isMeshBasicMaterial||i.isMeshLambertMaterial?n(t,i):i.isMeshToonMaterial?(n(t,i),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap)}(t,i)):i.isMeshPhongMaterial?(n(t,i),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4)}(t,i)):i.isMeshStandardMaterial?(n(t,i),function(t,n){t.roughness.value=n.roughness,t.metalness.value=n.metalness,n.roughnessMap&&(t.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(t.metalnessMap.value=n.metalnessMap),e.get(n).envMap&&(t.envMapIntensity.value=n.envMapIntensity)}(t,i),i.isMeshPhysicalMaterial&&function(t,e,n){t.ior.value=e.ior,e.sheen>0&&(t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),t.sheenRoughness.value=e.sheenRoughness,e.sheenColorMap&&(t.sheenColorMap.value=e.sheenColorMap),e.sheenRoughnessMap&&(t.sheenRoughnessMap.value=e.sheenRoughnessMap)),e.clearcoat>0&&(t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap),e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap),e.clearcoatNormalMap&&(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),t.clearcoatNormalMap.value=e.clearcoatNormalMap,1===e.side&&t.clearcoatNormalScale.value.negate())),e.transmission>0&&(t.transmission.value=e.transmission,t.transmissionSamplerMap.value=n.texture,t.transmissionSamplerSize.value.set(n.width,n.height),e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap),t.thickness.value=e.thickness,e.thicknessMap&&(t.thicknessMap.value=e.thicknessMap),t.attenuationDistance.value=e.attenuationDistance,t.attenuationColor.value.copy(e.attenuationColor)),t.specularIntensity.value=e.specularIntensity,t.specularColor.value.copy(e.specularColor),e.specularIntensityMap&&(t.specularIntensityMap.value=e.specularIntensityMap),e.specularColorMap&&(t.specularColorMap.value=e.specularColorMap)}(t,i,a)):i.isMeshMatcapMaterial?(n(t,i),function(t,e){e.matcap&&(t.matcap.value=e.matcap)}(t,i)):i.isMeshDepthMaterial?n(t,i):i.isMeshDistanceMaterial?(n(t,i),function(t,e){t.referencePosition.value.copy(e.referencePosition),t.nearDistance.value=e.nearDistance,t.farDistance.value=e.farDistance}(t,i)):i.isMeshNormalMaterial?n(t,i):i.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity}(t,i),i.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}(t,i)):i.isPointsMaterial?function(t,e,n,i){let r
t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*n,t.scale.value=.5*i,e.map&&(t.map.value=e.map),e.alphaMap&&(t.alphaMap.value=e.alphaMap),e.alphaTest>0&&(t.alphaTest.value=e.alphaTest),e.map?r=e.map:e.alphaMap&&(r=e.alphaMap),void 0!==r&&(!0===r.matrixAutoUpdate&&r.updateMatrix(),t.uvTransform.value.copy(r.matrix))}(t,i,r,s):i.isSpriteMaterial?function(t,e){let n
t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map),e.alphaMap&&(t.alphaMap.value=e.alphaMap),e.alphaTest>0&&(t.alphaTest.value=e.alphaTest),e.map?n=e.map:e.alphaMap&&(n=e.alphaMap),void 0!==n&&(!0===n.matrixAutoUpdate&&n.updateMatrix(),t.uvTransform.value.copy(n.matrix))}(t,i):i.isShadowMaterial?(t.color.value.copy(i.color),t.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function ra(t={}){const e=void 0!==t.canvas?t.canvas:function(){const t=It("canvas")
return t.style.display="block",t}(),n=void 0!==t.context?t.context:null,i=void 0===t.depth||t.depth,r=void 0===t.stencil||t.stencil,s=void 0!==t.antialias&&t.antialias,a=void 0===t.premultipliedAlpha||t.premultipliedAlpha,o=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,l=void 0!==t.powerPreference?t.powerPreference:"default",c=void 0!==t.failIfMajorPerformanceCaveat&&t.failIfMajorPerformanceCaveat
let h
h=void 0!==t.context?n.getContextAttributes().alpha:void 0!==t.alpha&&t.alpha
let u=null,d=null
const p=[],m=[]
this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=at,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1
const f=this
let g=!1,v=0,x=0,M=null,E=-1,T=null
const A=new Kt,R=new Kt
let C=null,L=e.width,P=e.height,D=1,I=null,N=null
const U=new Kt(0,0,L,P),O=new Kt(0,0,L,P)
let F=!1
const B=new Ti
let H=!1,z=!1,G=null
const V=new Oe,k=new Rt,W=new se,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0}
function X(){return null===M?D:1}let q,Y,J,Z,K,Q,$,tt,et,nt,it,rt,st,ot,lt,ct,ht,ut,dt,pt,mt,ft,gt,vt=n
function yt(t,n){for(let i=0;i<t.length;i++){const r=t[i],s=e.getContext(r,n)
if(null!==s)return s}return null}try{const t={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c}
if("setAttribute"in e&&e.setAttribute("data-engine","three.js r139"),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",bt,!1),null===vt){const e=["webgl2","webgl","experimental-webgl"]
if(!0===f.isWebGL1Renderer&&e.shift(),vt=yt(e,t),null===vt)throw yt(e)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}void 0===vt.getShaderPrecisionFormat&&(vt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function _t(){q=new $i(vt),Y=new Oi(vt,q,t),q.init(Y),ft=new Zs(vt,q,Y),J=new Ys(vt,q,Y),Z=new nr(vt),K=new Ns,Q=new Js(vt,q,J,K,Y,ft,Z),$=new Bi(f),tt=new Qi(f),et=new Ri(vt,Y),gt=new Ni(vt,q,et,Y),nt=new tr(vt,et,Z,gt),it=new or(vt,nt,et,Z),dt=new ar(vt,Y,Q),ct=new Fi(K),rt=new Is(f,$,tt,q,Y,gt,ct),st=new ia(f,K),ot=new Bs,lt=new Ws(q,Y),ut=new Ii(f,$,J,it,h,a),ht=new qs(f,it,Y),pt=new Ui(vt,q,Z,Y),mt=new er(vt,q,Z,Y),Z.programs=rt.programs,f.capabilities=Y,f.extensions=q,f.properties=K,f.renderLists=ot,f.shadowMap=ht,f.state=J,f.info=Z}_t()
const xt=new na(f,vt)
function Mt(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1
const t=Z.autoReset,e=ht.enabled,n=ht.autoUpdate,i=ht.needsUpdate,r=ht.type
_t(),Z.autoReset=t,ht.enabled=e,ht.autoUpdate=n,ht.needsUpdate=i,ht.type=r}function wt(t){const e=t.target
e.removeEventListener("dispose",wt),function(t){(function(t){const e=K.get(t).programs
void 0!==e&&(e.forEach((function(t){rt.releaseProgram(t)})),t.isShaderMaterial&&rt.releaseShaderCache(t))})(t),K.remove(t)}(e)}this.xr=xt,this.getContext=function(){return vt},this.getContextAttributes=function(){return vt.getContextAttributes()},this.forceContextLoss=function(){const t=q.get("WEBGL_lose_context")
t&&t.loseContext()},this.forceContextRestore=function(){const t=q.get("WEBGL_lose_context")
t&&t.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(t){void 0!==t&&(D=t,this.setSize(L,P,!1))},this.getSize=function(t){return t.set(L,P)},this.setSize=function(t,n,i){xt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(L=t,P=n,e.width=Math.floor(t*D),e.height=Math.floor(n*D),!1!==i&&(e.style.width=t+"px",e.style.height=n+"px"),this.setViewport(0,0,t,n))},this.getDrawingBufferSize=function(t){return t.set(L*D,P*D).floor()},this.setDrawingBufferSize=function(t,n,i){L=t,P=n,D=i,e.width=Math.floor(t*i),e.height=Math.floor(n*i),this.setViewport(0,0,t,n)},this.getCurrentViewport=function(t){return t.copy(A)},this.getViewport=function(t){return t.copy(U)},this.setViewport=function(t,e,n,i){t.isVector4?U.set(t.x,t.y,t.z,t.w):U.set(t,e,n,i),J.viewport(A.copy(U).multiplyScalar(D).floor())},this.getScissor=function(t){return t.copy(O)},this.setScissor=function(t,e,n,i){t.isVector4?O.set(t.x,t.y,t.z,t.w):O.set(t,e,n,i),J.scissor(R.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(t){J.setScissorTest(F=t)},this.setOpaqueSort=function(t){I=t},this.setTransparentSort=function(t){N=t},this.getClearColor=function(t){return t.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(t=!0,e=!0,n=!0){let i=0
t&&(i|=vt.COLOR_BUFFER_BIT),e&&(i|=vt.DEPTH_BUFFER_BIT),n&&(i|=vt.STENCIL_BUFFER_BIT),vt.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",bt,!1),ot.dispose(),lt.dispose(),K.dispose(),$.dispose(),tt.dispose(),it.dispose(),gt.dispose(),rt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",St),xt.removeEventListener("sessionend",At),G&&(G.dispose(),G=null),Ct.stop()},this.renderBufferDirect=function(t,e,n,i,r,s){null===e&&(e=j)
const a=r.isMesh&&r.matrixWorld.determinant()<0,o=function(t,e,n,i,r){!0!==e.isScene&&(e=j),Q.resetTextureUnits()
const s=e.fog,a=i.isMeshStandardMaterial?e.environment:null,o=null===M?f.outputEncoding:!0===M.isXRRenderTarget?M.texture.encoding:at,l=(i.isMeshStandardMaterial?tt:$).get(i.envMap||a),c=!0===i.vertexColors&&!!n.attributes.color&&4===n.attributes.color.itemSize,h=!!i.normalMap&&!!n.attributes.tangent,u=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,g=i.toneMapped?f.toneMapping:0,v=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,y=void 0!==v?v.length:0,_=K.get(i),x=d.state.lights
if(!0===H&&(!0===z||t!==T)){const e=t===T&&i.id===E
ct.setState(i,t,e)}let b=!1
i.version===_.__version?_.needsLights&&_.lightsStateVersion!==x.state.version||_.outputEncoding!==o||r.isInstancedMesh&&!1===_.instancing?b=!0:r.isInstancedMesh||!0!==_.instancing?r.isSkinnedMesh&&!1===_.skinning?b=!0:r.isSkinnedMesh||!0!==_.skinning?_.envMap!==l||i.fog&&_.fog!==s?b=!0:void 0===_.numClippingPlanes||_.numClippingPlanes===ct.numPlanes&&_.numIntersection===ct.numIntersection?(_.vertexAlphas!==c||_.vertexTangents!==h||_.morphTargets!==u||_.morphNormals!==p||_.morphColors!==m||_.toneMapping!==g||!0===Y.isWebGL2&&_.morphTargetsCount!==y)&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=i.version)
let w=_.currentProgram
!0===b&&(w=Ut(i,e,r))
let S=!1,A=!1,R=!1
const C=w.getUniforms(),L=_.uniforms
if(J.useProgram(w.program)&&(S=!0,A=!0,R=!0),i.id!==E&&(E=i.id,A=!0),S||T!==t){if(C.setValue(vt,"projectionMatrix",t.projectionMatrix),Y.logarithmicDepthBuffer&&C.setValue(vt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),T!==t&&(T=t,A=!0,R=!0),i.isShaderMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshStandardMaterial||i.envMap){const e=C.map.cameraPosition
void 0!==e&&e.setValue(vt,W.setFromMatrixPosition(t.matrixWorld))}(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&C.setValue(vt,"isOrthographic",!0===t.isOrthographicCamera),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial||i.isShadowMaterial||r.isSkinnedMesh)&&C.setValue(vt,"viewMatrix",t.matrixWorldInverse)}if(r.isSkinnedMesh){C.setOptional(vt,r,"bindMatrix"),C.setOptional(vt,r,"bindMatrixInverse")
const t=r.skeleton
t&&(Y.floatVertexTextures?(null===t.boneTexture&&t.computeBoneTexture(),C.setValue(vt,"boneTexture",t.boneTexture,Q),C.setValue(vt,"boneTextureSize",t.boneTextureSize)):C.setOptional(vt,t,"boneMatrices"))}const I=n.morphAttributes
var N,U
return(void 0!==I.position||void 0!==I.normal||void 0!==I.color&&!0===Y.isWebGL2)&&dt.update(r,n,i,w),(A||_.receiveShadow!==r.receiveShadow)&&(_.receiveShadow=r.receiveShadow,C.setValue(vt,"receiveShadow",r.receiveShadow)),A&&(C.setValue(vt,"toneMappingExposure",f.toneMappingExposure),_.needsLights&&(U=R,(N=L).ambientLightColor.needsUpdate=U,N.lightProbe.needsUpdate=U,N.directionalLights.needsUpdate=U,N.directionalLightShadows.needsUpdate=U,N.pointLights.needsUpdate=U,N.pointLightShadows.needsUpdate=U,N.spotLights.needsUpdate=U,N.spotLightShadows.needsUpdate=U,N.rectAreaLights.needsUpdate=U,N.hemisphereLights.needsUpdate=U),s&&i.fog&&st.refreshFogUniforms(L,s),st.refreshMaterialUniforms(L,i,D,P,G),us.upload(vt,_.uniformsList,L,Q)),i.isShaderMaterial&&!0===i.uniformsNeedUpdate&&(us.upload(vt,_.uniformsList,L,Q),i.uniformsNeedUpdate=!1),i.isSpriteMaterial&&C.setValue(vt,"center",r.center),C.setValue(vt,"modelViewMatrix",r.modelViewMatrix),C.setValue(vt,"normalMatrix",r.normalMatrix),C.setValue(vt,"modelMatrix",r.matrixWorld),w}(t,e,n,i,r)
J.setMaterial(i,a)
let l=n.index
const c=n.attributes.position
if(null===l){if(void 0===c||0===c.count)return}else if(0===l.count)return
let h,u=1
!0===i.wireframe&&(l=nt.getWireframeAttribute(n),u=2),gt.setup(r,i,o,n,l)
let p=pt
null!==l&&(h=et.get(l),p=mt,p.setIndex(h))
const m=null!==l?l.count:c.count,g=n.drawRange.start*u,v=n.drawRange.count*u,y=null!==s?s.start*u:0,_=null!==s?s.count*u:1/0,x=Math.max(g,y),b=Math.min(m,g+v,y+_)-1,w=Math.max(0,b-x+1)
if(0!==w){if(r.isMesh)!0===i.wireframe?(J.setLineWidth(i.wireframeLinewidth*X()),p.setMode(vt.LINES)):p.setMode(vt.TRIANGLES)
else if(r.isLine){let t=i.linewidth
void 0===t&&(t=1),J.setLineWidth(t*X()),r.isLineSegments?p.setMode(vt.LINES):r.isLineLoop?p.setMode(vt.LINE_LOOP):p.setMode(vt.LINE_STRIP)}else r.isPoints?p.setMode(vt.POINTS):r.isSprite&&p.setMode(vt.TRIANGLES)
if(r.isInstancedMesh)p.renderInstances(x,w,r.count)
else if(n.isInstancedBufferGeometry){const t=Math.min(n.instanceCount,n._maxInstanceCount)
p.renderInstances(x,w,t)}else p.render(x,w)}},this.compile=function(t,e){d=lt.get(t),d.init(),m.push(d),t.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(d.pushLight(t),t.castShadow&&d.pushShadow(t))})),d.setupLights(f.physicallyCorrectLights),t.traverse((function(e){const n=e.material
if(n)if(Array.isArray(n))for(let i=0;i<n.length;i++)Ut(n[i],t,e)
else Ut(n,t,e)})),m.pop(),d=null}
let Et=null
function St(){Ct.stop()}function At(){Ct.start()}const Ct=new Ai
function Lt(t,e,n,i){if(!1===t.visible)return
if(t.layers.test(e.layers))if(t.isGroup)n=t.renderOrder
else if(t.isLOD)!0===t.autoUpdate&&t.update(e)
else if(t.isLight)d.pushLight(t),t.castShadow&&d.pushShadow(t)
else if(t.isSprite){if(!t.frustumCulled||B.intersectsSprite(t)){i&&W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V)
const e=it.update(t),r=t.material
r.visible&&u.push(t,e,r,n,W.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==Z.render.frame&&(t.skeleton.update(),t.skeleton.frame=Z.render.frame),!t.frustumCulled||B.intersectsObject(t))){i&&W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V)
const e=it.update(t),r=t.material
if(Array.isArray(r)){const i=e.groups
for(let s=0,a=i.length;s<a;s++){const a=i[s],o=r[a.materialIndex]
o&&o.visible&&u.push(t,e,o,n,W.z,a)}}else r.visible&&u.push(t,e,r,n,W.z,null)}const r=t.children
for(let s=0,a=r.length;s<a;s++)Lt(r[s],e,n,i)}function Pt(t,e,n,i){const r=t.opaque,a=t.transmissive,o=t.transparent
d.setupLightsView(n),a.length>0&&function(t,e,n){const i=Y.isWebGL2
null===G&&(G=new Qt(1,1,{generateMipmaps:!0,type:null!==ft.convert(w)?w:_,minFilter:y,samples:i&&!0===s?4:0})),f.getDrawingBufferSize(k),i?G.setSize(k.x,k.y):G.setSize(Tt(k.x),Tt(k.y))
const r=f.getRenderTarget()
f.setRenderTarget(G),f.clear()
const a=f.toneMapping
f.toneMapping=0,Dt(t,e,n),f.toneMapping=a,Q.updateMultisampleRenderTarget(G),Q.updateRenderTargetMipmap(G),f.setRenderTarget(r)}(r,e,n),i&&J.viewport(A.copy(i)),r.length>0&&Dt(r,e,n),a.length>0&&Dt(a,e,n),o.length>0&&Dt(o,e,n),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Dt(t,e,n){const i=!0===e.isScene?e.overrideMaterial:null
for(let r=0,s=t.length;r<s;r++){const s=t[r],a=s.object,o=s.geometry,l=null===i?s.material:i,c=s.group
a.layers.test(n.layers)&&Nt(a,e,n,o,l,c)}}function Nt(t,e,n,i,r,s){t.onBeforeRender(f,e,n,i,r,s),t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),r.onBeforeRender(f,e,n,i,t,s),!0===r.transparent&&2===r.side?(r.side=1,r.needsUpdate=!0,f.renderBufferDirect(n,e,i,r,t,s),r.side=0,r.needsUpdate=!0,f.renderBufferDirect(n,e,i,r,t,s),r.side=2):f.renderBufferDirect(n,e,i,r,t,s),t.onAfterRender(f,e,n,i,r,s)}function Ut(t,e,n){!0!==e.isScene&&(e=j)
const i=K.get(t),r=d.state.lights,s=d.state.shadowsArray,a=r.state.version,o=rt.getParameters(t,r.state,s,e,n),l=rt.getProgramCacheKey(o)
let c=i.programs
i.environment=t.isMeshStandardMaterial?e.environment:null,i.fog=e.fog,i.envMap=(t.isMeshStandardMaterial?tt:$).get(t.envMap||i.environment),void 0===c&&(t.addEventListener("dispose",wt),c=new Map,i.programs=c)
let h=c.get(l)
if(void 0!==h){if(i.currentProgram===h&&i.lightsStateVersion===a)return Ot(t,o),h}else o.uniforms=rt.getUniforms(t),t.onBuild(n,o,f),t.onBeforeCompile(o,f),h=rt.acquireProgram(o,l),c.set(l,h),i.uniforms=o.uniforms
const u=i.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(u.clippingPlanes=ct.uniform),Ot(t,o),i.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),i.lightsStateVersion=a,i.needsLights&&(u.ambientLightColor.value=r.state.ambient,u.lightProbe.value=r.state.probe,u.directionalLights.value=r.state.directional,u.directionalLightShadows.value=r.state.directionalShadow,u.spotLights.value=r.state.spot,u.spotLightShadows.value=r.state.spotShadow,u.rectAreaLights.value=r.state.rectArea,u.ltc_1.value=r.state.rectAreaLTC1,u.ltc_2.value=r.state.rectAreaLTC2,u.pointLights.value=r.state.point,u.pointLightShadows.value=r.state.pointShadow,u.hemisphereLights.value=r.state.hemi,u.directionalShadowMap.value=r.state.directionalShadowMap,u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,u.spotShadowMap.value=r.state.spotShadowMap,u.spotShadowMatrix.value=r.state.spotShadowMatrix,u.pointShadowMap.value=r.state.pointShadowMap,u.pointShadowMatrix.value=r.state.pointShadowMatrix)
const p=h.getUniforms(),m=us.seqWithValue(p.seq,u)
return i.currentProgram=h,i.uniformsList=m,h}function Ot(t,e){const n=K.get(t)
n.outputEncoding=e.outputEncoding,n.instancing=e.instancing,n.skinning=e.skinning,n.morphTargets=e.morphTargets,n.morphNormals=e.morphNormals,n.morphColors=e.morphColors,n.morphTargetsCount=e.morphTargetsCount,n.numClippingPlanes=e.numClippingPlanes,n.numIntersection=e.numClipIntersection,n.vertexAlphas=e.vertexAlphas,n.vertexTangents=e.vertexTangents,n.toneMapping=e.toneMapping}Ct.setAnimationLoop((function(t){Et&&Et(t)})),"undefined"!=typeof self&&Ct.setContext(self),this.setAnimationLoop=function(t){Et=t,xt.setAnimationLoop(t),null===t?Ct.stop():Ct.start()},xt.addEventListener("sessionstart",St),xt.addEventListener("sessionend",At),this.render=function(t,e){if(void 0!==e&&!0!==e.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
if(!0===g)return
!0===t.autoUpdate&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld(),!0===xt.enabled&&!0===xt.isPresenting&&(!0===xt.cameraAutoUpdate&&xt.updateCamera(e),e=xt.getCamera()),!0===t.isScene&&t.onBeforeRender(f,t,e,M),d=lt.get(t,m.length),d.init(),m.push(d),V.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),B.setFromProjectionMatrix(V),z=this.localClippingEnabled,H=ct.init(this.clippingPlanes,z,e),u=ot.get(t,p.length),u.init(),p.push(u),Lt(t,e,0,f.sortObjects),u.finish(),!0===f.sortObjects&&u.sort(I,N),!0===H&&ct.beginShadows()
const n=d.state.shadowsArray
if(ht.render(n,t,e),!0===H&&ct.endShadows(),!0===this.info.autoReset&&this.info.reset(),ut.render(u,t),d.setupLights(f.physicallyCorrectLights),e.isArrayCamera){const n=e.cameras
for(let e=0,i=n.length;e<i;e++){const i=n[e]
Pt(u,t,i,i.viewport)}}else Pt(u,t,e)
null!==M&&(Q.updateMultisampleRenderTarget(M),Q.updateRenderTargetMipmap(M)),!0===t.isScene&&t.onAfterRender(f,t,e),gt.resetDefaultState(),E=-1,T=null,m.pop(),d=m.length>0?m[m.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(t,e,n){K.get(t.texture).__webglTexture=e,K.get(t.depthTexture).__webglTexture=n
const i=K.get(t)
i.__hasExternalTextures=!0,i.__hasExternalTextures&&(i.__autoAllocateDepthBuffer=void 0===n,i.__autoAllocateDepthBuffer||!0===q.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),i.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(t,e){const n=K.get(t)
n.__webglFramebuffer=e,n.__useDefaultFramebuffer=void 0===e},this.setRenderTarget=function(t,e=0,n=0){M=t,v=e,x=n
let i=!0
if(t){const e=K.get(t)
void 0!==e.__useDefaultFramebuffer?(J.bindFramebuffer(vt.FRAMEBUFFER,null),i=!1):void 0===e.__webglFramebuffer?Q.setupRenderTarget(t):e.__hasExternalTextures&&Q.rebindTextures(t,K.get(t.texture).__webglTexture,K.get(t.depthTexture).__webglTexture)}let r=null,s=!1,a=!1
if(t){const n=t.texture;(n.isData3DTexture||n.isDataArrayTexture)&&(a=!0)
const i=K.get(t).__webglFramebuffer
t.isWebGLCubeRenderTarget?(r=i[e],s=!0):r=Y.isWebGL2&&t.samples>0&&!1===Q.useMultisampledRTT(t)?K.get(t).__webglMultisampledFramebuffer:i,A.copy(t.viewport),R.copy(t.scissor),C=t.scissorTest}else A.copy(U).multiplyScalar(D).floor(),R.copy(O).multiplyScalar(D).floor(),C=F
if(J.bindFramebuffer(vt.FRAMEBUFFER,r)&&Y.drawBuffers&&i&&J.drawBuffers(t,r),J.viewport(A),J.scissor(R),J.setScissorTest(C),s){const i=K.get(t.texture)
vt.framebufferTexture2D(vt.FRAMEBUFFER,vt.COLOR_ATTACHMENT0,vt.TEXTURE_CUBE_MAP_POSITIVE_X+e,i.__webglTexture,n)}else if(a){const i=K.get(t.texture),r=e||0
vt.framebufferTextureLayer(vt.FRAMEBUFFER,vt.COLOR_ATTACHMENT0,i.__webglTexture,n||0,r)}E=-1},this.readRenderTargetPixels=function(t,e,n,i,r,s,a){if(!t||!t.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
let o=K.get(t).__webglFramebuffer
if(t.isWebGLCubeRenderTarget&&void 0!==a&&(o=o[a]),o){J.bindFramebuffer(vt.FRAMEBUFFER,o)
try{const a=t.texture,o=a.format,l=a.type
if(o!==S&&ft.convert(o)!==vt.getParameter(vt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.")
const c=l===w&&(q.has("EXT_color_buffer_half_float")||Y.isWebGL2&&q.has("EXT_color_buffer_float"))
if(!(l===_||ft.convert(l)===vt.getParameter(vt.IMPLEMENTATION_COLOR_READ_TYPE)||l===b&&(Y.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float"))||c))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
e>=0&&e<=t.width-i&&n>=0&&n<=t.height-r&&vt.readPixels(e,n,i,r,ft.convert(o),ft.convert(l),s)}finally{const t=null!==M?K.get(M).__webglFramebuffer:null
J.bindFramebuffer(vt.FRAMEBUFFER,t)}}},this.copyFramebufferToTexture=function(t,e,n=0){if(!0!==e.isFramebufferTexture)return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.")
const i=Math.pow(2,-n),r=Math.floor(e.image.width*i),s=Math.floor(e.image.height*i)
Q.setTexture2D(e,0),vt.copyTexSubImage2D(vt.TEXTURE_2D,n,0,0,t.x,t.y,r,s),J.unbindTexture()},this.copyTextureToTexture=function(t,e,n,i=0){const r=e.image.width,s=e.image.height,a=ft.convert(n.format),o=ft.convert(n.type)
Q.setTexture2D(n,0),vt.pixelStorei(vt.UNPACK_FLIP_Y_WEBGL,n.flipY),vt.pixelStorei(vt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),vt.pixelStorei(vt.UNPACK_ALIGNMENT,n.unpackAlignment),e.isDataTexture?vt.texSubImage2D(vt.TEXTURE_2D,i,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTexture?vt.compressedTexSubImage2D(vt.TEXTURE_2D,i,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,a,e.mipmaps[0].data):vt.texSubImage2D(vt.TEXTURE_2D,i,t.x,t.y,a,o,e.image),0===i&&n.generateMipmaps&&vt.generateMipmap(vt.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(t,e,n,i,r=0){if(f.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.")
const s=t.max.x-t.min.x+1,a=t.max.y-t.min.y+1,o=t.max.z-t.min.z+1,l=ft.convert(i.format),c=ft.convert(i.type)
let h
if(i.isData3DTexture)Q.setTexture3D(i,0),h=vt.TEXTURE_3D
else{if(!i.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.")
Q.setTexture2DArray(i,0),h=vt.TEXTURE_2D_ARRAY}vt.pixelStorei(vt.UNPACK_FLIP_Y_WEBGL,i.flipY),vt.pixelStorei(vt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),vt.pixelStorei(vt.UNPACK_ALIGNMENT,i.unpackAlignment)
const u=vt.getParameter(vt.UNPACK_ROW_LENGTH),d=vt.getParameter(vt.UNPACK_IMAGE_HEIGHT),p=vt.getParameter(vt.UNPACK_SKIP_PIXELS),m=vt.getParameter(vt.UNPACK_SKIP_ROWS),g=vt.getParameter(vt.UNPACK_SKIP_IMAGES),v=n.isCompressedTexture?n.mipmaps[0]:n.image
vt.pixelStorei(vt.UNPACK_ROW_LENGTH,v.width),vt.pixelStorei(vt.UNPACK_IMAGE_HEIGHT,v.height),vt.pixelStorei(vt.UNPACK_SKIP_PIXELS,t.min.x),vt.pixelStorei(vt.UNPACK_SKIP_ROWS,t.min.y),vt.pixelStorei(vt.UNPACK_SKIP_IMAGES,t.min.z),n.isDataTexture||n.isData3DTexture?vt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,v.data):n.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),vt.compressedTexSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,v.data)):vt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,v),vt.pixelStorei(vt.UNPACK_ROW_LENGTH,u),vt.pixelStorei(vt.UNPACK_IMAGE_HEIGHT,d),vt.pixelStorei(vt.UNPACK_SKIP_PIXELS,p),vt.pixelStorei(vt.UNPACK_SKIP_ROWS,m),vt.pixelStorei(vt.UNPACK_SKIP_IMAGES,g),0===r&&i.generateMipmaps&&vt.generateMipmap(h),J.unbindTexture()},this.initTexture=function(t){Q.setTexture2D(t,0),J.unbindTexture()},this.resetState=function(){v=0,x=0,M=null,J.reset(),gt.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}ra.prototype.isWebGLRenderer=!0
class sa extends ra{}sa.prototype.isWebGL1Renderer=!0
class aa{constructor(t,e=25e-5){this.name="",this.color=new Wt(t),this.density=e}clone(){return new aa(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}aa.prototype.isFogExp2=!0
class oa{constructor(t,e=1,n=1e3){this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}oa.prototype.isFog=!0
class la extends ln{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t)
return null!==this.fog&&(e.object.fog=this.fog.toJSON()),e}}la.prototype.isScene=!0
class ca{constructor(t,e){this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=ut,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xt()}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride
for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i]
return this}set(t,e=0){return this.array.set(t,e),this}clone(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=xt()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer)
const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride)
return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=xt()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ca.prototype.isInterleavedBuffer=!0
const ha=new se
class ua{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=!0===i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix4(t),this.setXYZ(e,ha.x,ha.y,ha.z)
return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyNormalMatrix(t),this.setXYZ(e,ha.x,ha.y,ha.z)
return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.transformDirection(t),this.setXYZ(e,ha.x,ha.y,ha.z)
return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.")
const t=[]
for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset
for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.")
const t=[]
for(let e=0;e<this.count;e++){const n=e*this.data.stride+this.offset
for(let e=0;e<this.itemSize;e++)t.push(this.data.array[n+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ua.prototype.isInterleavedBufferAttribute=!0
class da extends Mn{constructor(t){super(),this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}let pa
da.prototype.isSpriteMaterial=!0
const ma=new se,fa=new se,ga=new se,va=new Rt,ya=new Rt,_a=new Oe,xa=new se,Ma=new se,ba=new se,wa=new Rt,Ea=new Rt,Sa=new Rt
class Ta extends ln{constructor(t){if(super(),this.type="Sprite",void 0===pa){pa=new kn
const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new ca(t,5)
pa.setIndex([0,1,2,0,2,3]),pa.setAttribute("position",new ua(e,3,0,!1)),pa.setAttribute("uv",new ua(e,2,3,!1))}this.geometry=pa,this.material=void 0!==t?t:new da,this.center=new Rt(.5,.5)}raycast(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fa.setFromMatrixScale(this.matrixWorld),_a.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ga.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&fa.multiplyScalar(-ga.z)
const n=this.material.rotation
let i,r
0!==n&&(r=Math.cos(n),i=Math.sin(n))
const s=this.center
Aa(xa.set(-.5,-.5,0),ga,s,fa,i,r),Aa(Ma.set(.5,-.5,0),ga,s,fa,i,r),Aa(ba.set(.5,.5,0),ga,s,fa,i,r),wa.set(0,0),Ea.set(1,0),Sa.set(1,1)
let a=t.ray.intersectTriangle(xa,Ma,ba,!1,ma)
if(null===a&&(Aa(Ma.set(-.5,.5,0),ga,s,fa,i,r),Ea.set(0,1),a=t.ray.intersectTriangle(xa,ba,Ma,!1,ma),null===a))return
const o=t.ray.origin.distanceTo(ma)
o<t.near||o>t.far||e.push({distance:o,point:ma.clone(),uv:_n.getUV(ma,xa,Ma,ba,wa,Ea,Sa,new Rt),face:null,object:this})}copy(t){return super.copy(t),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}}function Aa(t,e,n,i,r,s){va.subVectors(t,n).addScalar(.5).multiply(i),void 0!==r?(ya.x=s*va.x-r*va.y,ya.y=r*va.x+s*va.y):ya.copy(va),t.copy(e),t.x+=ya.x,t.y+=ya.y,t.applyMatrix4(_a)}Ta.prototype.isSprite=!0
const Ra=new se,Ca=new se
class La extends ln{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1)
const e=t.levels
for(let n=0,i=e.length;n<i;n++){const t=e[n]
this.addLevel(t.object.clone(),t.distance)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0){e=Math.abs(e)
const n=this.levels
let i
for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels
if(e.length>0){let n,i
for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Ra.setFromMatrixPosition(this.matrixWorld)
const n=t.ray.origin.distanceTo(Ra)
this.getObjectForDistance(n).raycast(t,e)}}update(t){const e=this.levels
if(e.length>1){Ra.setFromMatrixPosition(t.matrixWorld),Ca.setFromMatrixPosition(this.matrixWorld)
const n=Ra.distanceTo(Ca)/t.zoom
let i,r
for(e[0].object.visible=!0,i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0
for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t)
!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[]
const n=this.levels
for(let i=0,r=n.length;i<r;i++){const t=n[i]
e.object.levels.push({object:t.object.uuid,distance:t.distance})}return e}}const Pa=new se,Da=new Kt,Ia=new Kt,Na=new se,Ua=new Oe
class Oa extends oi{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Kt,e=this.geometry.attributes.skinWeight
for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n)
const i=1/t.manhattanLength()
i!==1/0?t.multiplyScalar(i):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry
Da.fromBufferAttribute(i.attributes.skinIndex,t),Ia.fromBufferAttribute(i.attributes.skinWeight,t),Pa.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0)
for(let r=0;r<4;r++){const t=Ia.getComponent(r)
if(0!==t){const i=Da.getComponent(r)
Ua.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),e.addScaledVector(Na.copy(Pa).applyMatrix4(Ua),t)}}return e.applyMatrix4(this.bindMatrixInverse)}}Oa.prototype.isSkinnedMesh=!0
class Fa extends ln{constructor(){super(),this.type="Bone"}}Fa.prototype.isBone=!0
class Ba extends Zt{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,c=1003,h,u){super(null,s,a,o,l,c,i,r,h,u),this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ba.prototype.isDataTexture=!0
const Ha=new Oe,za=new Oe
class Ga{constructor(t=[],e=[]){this.uuid=xt(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,e=this.boneInverses
if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses()
else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[]
for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0
for(let t=0,e=this.bones.length;t<e;t++){const e=new Oe
this.bones[t]&&e.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(e)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t]
e&&e.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t]
e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture
for(let r=0,s=t.length;r<s;r++){const i=t[r]?t[r].matrixWorld:za
Ha.multiplyMatrices(i,e[r]),Ha.toArray(n,16*r)}null!==i&&(i.needsUpdate=!0)}clone(){return new Ga(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length)
t=St(t),t=Math.max(t,4)
const e=new Float32Array(t*t*4)
e.set(this.boneMatrices)
const n=new Ba(e,t,t,S,b)
return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const n=this.bones[e]
if(n.name===t)return n}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid
for(let n=0,i=t.bones.length;n<i;n++){const i=t.bones[n]
let r=e[i]
void 0===r&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),r=new Fa),this.bones.push(r),this.boneInverses.push((new Oe).fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]}
t.uuid=this.uuid
const e=this.bones,n=this.boneInverses
for(let i=0,r=e.length;i<r;i++){const r=e[i]
t.bones.push(r.uuid)
const s=n[i]
t.boneInverses.push(s.toArray())}return t}}class Va extends Sn{constructor(t,e,n,i=1){"number"==typeof n&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON()
return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Va.prototype.isInstancedBufferAttribute=!0
const ka=new Oe,Wa=new Oe,ja=[],Xa=new oi
class qa extends oi{constructor(t,e,n){super(t,e),this.instanceMatrix=new Va(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}raycast(t,e){const n=this.matrixWorld,i=this.count
if(Xa.geometry=this.geometry,Xa.material=this.material,void 0!==Xa.material)for(let r=0;r<i;r++){this.getMatrixAt(r,ka),Wa.multiplyMatrices(n,ka),Xa.matrixWorld=Wa,Xa.raycast(t,ja)
for(let t=0,n=ja.length;t<n;t++){const n=ja[t]
n.instanceId=r,n.object=this,e.push(n)}ja.length=0}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new Va(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}qa.prototype.isInstancedMesh=!0
class Ya extends Mn{constructor(t){super(),this.type="LineBasicMaterial",this.color=new Wt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}Ya.prototype.isLineBasicMaterial=!0
const Ja=new se,Za=new se,Ka=new Oe,Qa=new Ue,$a=new Ae
class to extends ln{constructor(t=new kn,e=new Ya){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry
if(t.isBufferGeometry)if(null===t.index){const e=t.attributes.position,n=[0]
for(let t=1,i=e.count;t<i;t++)Ja.fromBufferAttribute(e,t-1),Za.fromBufferAttribute(e,t),n[t]=n[t-1],n[t]+=Ja.distanceTo(Za)
t.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")
else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange
if(null===n.boundingSphere&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,!1===t.ray.intersectsSphere($a))return
Ka.copy(i).invert(),Qa.copy(t.ray).applyMatrix4(Ka)
const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new se,c=new se,h=new se,u=new se,d=this.isLineSegments?2:1
if(n.isBufferGeometry){const i=n.index,r=n.attributes.position
if(null!==i)for(let n=Math.max(0,s.start),a=Math.min(i.count,s.start+s.count)-1;n<a;n+=d){const s=i.getX(n),a=i.getX(n+1)
if(l.fromBufferAttribute(r,s),c.fromBufferAttribute(r,a),Qa.distanceSqToSegment(l,c,u,h)>o)continue
u.applyMatrix4(this.matrixWorld)
const d=t.ray.origin.distanceTo(u)
d<t.near||d>t.far||e.push({distance:d,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}else for(let n=Math.max(0,s.start),a=Math.min(r.count,s.start+s.count)-1;n<a;n+=d){if(l.fromBufferAttribute(r,n),c.fromBufferAttribute(r,n+1),Qa.distanceSqToSegment(l,c,u,h)>o)continue
u.applyMatrix4(this.matrixWorld)
const i=t.ray.origin.distanceTo(u)
i<t.near||i>t.far||e.push({distance:i,point:h.clone().applyMatrix4(this.matrixWorld),index:n,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry
if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e)
if(n.length>0){const t=e[n[0]]
if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={}
for(let e=0,n=t.length;e<n;e++){const n=t[e].name||String(e)
this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e}}}}else{const e=t.morphTargets
void 0!==e&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}to.prototype.isLine=!0
const eo=new se,no=new se
class io extends to{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry
if(t.isBufferGeometry)if(null===t.index){const e=t.attributes.position,n=[]
for(let t=0,i=e.count;t<i;t+=2)eo.fromBufferAttribute(e,t),no.fromBufferAttribute(e,t+1),n[t]=0===t?0:n[t-1],n[t+1]=n[t]+eo.distanceTo(no)
t.setAttribute("lineDistance",new Nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")
else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
return this}}io.prototype.isLineSegments=!0
class ro extends to{constructor(t,e){super(t,e),this.type="LineLoop"}}ro.prototype.isLineLoop=!0
class so extends Mn{constructor(t){super(),this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}so.prototype.isPointsMaterial=!0
const ao=new Oe,oo=new Ue,lo=new Ae,co=new se
class ho extends ln{constructor(t=new kn,e=new so){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange
if(null===n.boundingSphere&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,!1===t.ray.intersectsSphere(lo))return
ao.copy(i).invert(),oo.copy(t.ray).applyMatrix4(ao)
const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a
if(n.isBufferGeometry){const r=n.index,a=n.attributes.position
if(null!==r)for(let n=Math.max(0,s.start),l=Math.min(r.count,s.start+s.count);n<l;n++){const s=r.getX(n)
co.fromBufferAttribute(a,s),uo(co,s,o,i,t,e,this)}else for(let n=Math.max(0,s.start),l=Math.min(a.count,s.start+s.count);n<l;n++)co.fromBufferAttribute(a,n),uo(co,n,o,i,t,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry
if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e)
if(n.length>0){const t=e[n[0]]
if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={}
for(let e=0,n=t.length;e<n;e++){const n=t[e].name||String(e)
this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=e}}}}else{const e=t.morphTargets
void 0!==e&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}function uo(t,e,n,i,r,s,a){const o=oo.distanceSqToPoint(t)
if(o<n){const n=new se
oo.closestPointToPoint(t,n),n.applyMatrix4(i)
const l=r.ray.origin.distanceTo(n)
if(l<r.near||l>r.far)return
s.push({distance:l,distanceToRay:Math.sqrt(o),point:n,index:e,face:null,object:a})}}ho.prototype.isPoints=!0
class po extends Zt{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.minFilter=void 0!==s?s:g,this.magFilter=void 0!==r?r:g,this.generateMipmaps=!1
const c=this
"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function e(){c.needsUpdate=!0,t.requestVideoFrameCallback(e)}))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image
0=="requestVideoFrameCallback"in t&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}po.prototype.isVideoTexture=!0
class mo extends Zt{constructor(t,e,n){super({width:t,height:e}),this.format=n,this.magFilter=p,this.minFilter=p,this.generateMipmaps=!1,this.needsUpdate=!0}}mo.prototype.isFramebufferTexture=!0
class fo extends Zt{constructor(t,e,n,i,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,i,r,h,u),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}fo.prototype.isCompressedTexture=!0
class go extends Zt{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.needsUpdate=!0}}go.prototype.isCanvasTexture=!0
class vo{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t)
return this.getPoint(n,e)}getPoints(t=5){const e=[]
for(let n=0;n<=t;n++)e.push(this.getPoint(n/t))
return e}getSpacedPoints(t=5){const e=[]
for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t))
return e}getLength(){const t=this.getLengths()
return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths
this.needsUpdate=!1
const e=[]
let n,i=this.getPoint(0),r=0
e.push(0)
for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n
return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths()
let i=0
const r=n.length
let s
s=e||t*n[r-1]
let a,o=0,l=r-1
for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1
else{if(!(a>0)){l=i
break}l=i-1}if(i=l,n[i]===s)return i/(r-1)
const c=n[i]
return(i+(s-c)/(n[i+1]-c))/(r-1)}getTangent(t,e){const n=1e-4
let i=t-n,r=t+n
i<0&&(i=0),r>1&&(r=1)
const s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new Rt:new se)
return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){const n=this.getUtoTmapping(t)
return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new se,i=[],r=[],s=[],a=new se,o=new Oe
for(let d=0;d<=t;d++){const e=d/t
i[d]=this.getTangentAt(e,new se)}r[0]=new se,s[0]=new se
let l=Number.MAX_VALUE
const c=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z)
c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0])
for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize()
const t=Math.acos(Mt(i[d-1].dot(i[d]),-1,1))
r[d].applyMatrix4(o.makeRotationAxis(a,t))}s[d].crossVectors(i[d],r[d])}if(!0===e){let e=Math.acos(Mt(r[0].dot(r[t]),-1,1))
e/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(e=-e)
for(let n=1;n<=t;n++)r[n].applyMatrix4(o.makeRotationAxis(i[n],e*n)),s[n].crossVectors(i[n],r[n])}return{tangents:i,normals:r,binormals:s}}clone(){return(new this.constructor).copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}}
return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yo extends vo{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e){const n=e||new Rt,i=2*Math.PI
let r=this.aEndAngle-this.aStartAngle
const s=Math.abs(r)<Number.EPSILON
for(;r<0;)r+=i
for(;r>i;)r-=i
r<Number.EPSILON&&(r=s?0:i),!0!==this.aClockwise||s||(r===i?r=-i:r-=i)
const a=this.aStartAngle+t*r
let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a)
if(0!==this.aRotation){const t=Math.cos(this.aRotation),e=Math.sin(this.aRotation),n=o-this.aX,i=l-this.aY
o=n*t-i*e+this.aX,l=n*e+i*t+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON()
return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}yo.prototype.isEllipseCurve=!0
class _o extends yo{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.type="ArcCurve"}}function xo(){let t=0,e=0,n=0,i=0
function r(r,s,a,o){t=r,e=a,n=-3*r+3*s-2*a-o,i=2*r-2*s+a+o}return{initCatmullRom:function(t,e,n,i,s){r(e,n,s*(n-t),s*(i-e))},initNonuniformCatmullRom:function(t,e,n,i,s,a,o){let l=(e-t)/s-(n-t)/(s+a)+(n-e)/a,c=(n-e)/a-(i-e)/(a+o)+(i-n)/o
l*=a,c*=a,r(e,n,l,c)},calc:function(r){const s=r*r
return t+e*r+n*s+i*(s*r)}}}_o.prototype.isArcCurve=!0
const Mo=new se,bo=new xo,wo=new xo,Eo=new xo
class So extends vo{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new se){const n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t
let a,o,l=Math.floor(s),c=s-l
this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:0===c&&l===r-1&&(l=r-2,c=1),this.closed||l>0?a=i[(l-1)%r]:(Mo.subVectors(i[0],i[1]).add(i[0]),a=Mo)
const h=i[l%r],u=i[(l+1)%r]
if(this.closed||l+2<r?o=i[(l+2)%r]:(Mo.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=Mo),"centripetal"===this.curveType||"chordal"===this.curveType){const t="chordal"===this.curveType?.5:.25
let e=Math.pow(a.distanceToSquared(h),t),n=Math.pow(h.distanceToSquared(u),t),i=Math.pow(u.distanceToSquared(o),t)
n<1e-4&&(n=1),e<1e-4&&(e=n),i<1e-4&&(i=n),bo.initNonuniformCatmullRom(a.x,h.x,u.x,o.x,e,n,i),wo.initNonuniformCatmullRom(a.y,h.y,u.y,o.y,e,n,i),Eo.initNonuniformCatmullRom(a.z,h.z,u.z,o.z,e,n,i)}else"catmullrom"===this.curveType&&(bo.initCatmullRom(a.x,h.x,u.x,o.x,this.tension),wo.initCatmullRom(a.y,h.y,u.y,o.y,this.tension),Eo.initCatmullRom(a.z,h.z,u.z,o.z,this.tension))
return n.set(bo.calc(c),wo.calc(c),Eo.calc(c)),n}copy(t){super.copy(t),this.points=[]
for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e]
this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON()
t.points=[]
for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e]
t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[]
for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e]
this.points.push((new se).fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function To(t,e,n,i,r){const s=.5*(i-e),a=.5*(r-n),o=t*t
return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function Ao(t,e,n,i){return function(t,e){const n=1-t
return n*n*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,n)+function(t,e){return t*t*e}(t,i)}function Ro(t,e,n,i,r){return function(t,e){const n=1-t
return n*n*n*e}(t,e)+function(t,e){const n=1-t
return 3*n*n*t*e}(t,n)+function(t,e){return 3*(1-t)*t*t*e}(t,i)+function(t,e){return t*t*t*e}(t,r)}So.prototype.isCatmullRomCurve3=!0
class Co extends vo{constructor(t=new Rt,e=new Rt,n=new Rt,i=new Rt){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Rt){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3
return n.set(Ro(t,i.x,r.x,s.x,a.x),Ro(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON()
return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Co.prototype.isCubicBezierCurve=!0
class Lo extends vo{constructor(t=new se,e=new se,n=new se,i=new se){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new se){const n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3
return n.set(Ro(t,i.x,r.x,s.x,a.x),Ro(t,i.y,r.y,s.y,a.y),Ro(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON()
return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Lo.prototype.isCubicBezierCurve3=!0
class Po extends vo{constructor(t=new Rt,e=new Rt){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const n=e
return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new Rt
return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON()
return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Po.prototype.isLineCurve=!0
class Do extends vo{constructor(t=new se,e=new se){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new se){const n=e
return 1===t?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON()
return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Io extends vo{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){const n=e,i=this.v0,r=this.v1,s=this.v2
return n.set(Ao(t,i.x,r.x,s.x),Ao(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON()
return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Io.prototype.isQuadraticBezierCurve=!0
class No extends vo{constructor(t=new se,e=new se,n=new se){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new se){const n=e,i=this.v0,r=this.v1,s=this.v2
return n.set(Ao(t,i.x,r.x,s.x),Ao(t,i.y,r.y,s.y),Ao(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON()
return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}No.prototype.isQuadraticBezierCurve3=!0
class Uo extends vo{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[0===s?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2]
return n.set(To(a,o.x,l.x,c.x,h.x),To(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[]
for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e]
this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON()
t.points=[]
for(let e=0,n=this.points.length;e<n;e++){const n=this.points[e]
t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[]
for(let e=0,n=t.points.length;e<n;e++){const n=t.points[e]
this.points.push((new Rt).fromArray(n))}return this}}Uo.prototype.isSplineCurve=!0
var Oo=Object.freeze({__proto__:null,ArcCurve:_o,CatmullRomCurve3:So,CubicBezierCurve:Co,CubicBezierCurve3:Lo,EllipseCurve:yo,LineCurve:Po,LineCurve3:Do,QuadraticBezierCurve:Io,QuadraticBezierCurve3:No,SplineCurve:Uo})
class Fo extends vo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1)
t.equals(e)||this.curves.push(new Po(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths()
let r=0
for(;r<i.length;){if(i[r]>=n){const t=i[r]-n,s=this.curves[r],a=s.getLength(),o=0===a?0:1-t/a
return s.getPointAt(o,e)}r++}return null}getLength(){const t=this.getCurveLengths()
return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths
const t=[]
let e=0
for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e)
return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[]
for(let n=0;n<=t;n++)e.push(this.getPoint(n/t))
return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[]
let n
for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a)
for(let t=0;t<o.length;t++){const i=o[t]
n&&n.equals(i)||(e.push(i),n=i)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[]
for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e]
this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON()
t.autoClose=this.autoClose,t.curves=[]
for(let e=0,n=this.curves.length;e<n;e++){const n=this.curves[e]
t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[]
for(let e=0,n=t.curves.length;e<n;e++){const n=t.curves[e]
this.curves.push((new Oo[n.type]).fromJSON(n))}return this}}class Bo extends Fo{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y)
for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y)
return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Po(this.currentPoint.clone(),new Rt(t,e))
return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Io(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i))
return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){const a=new Co(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i),new Rt(r,s))
return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uo(e)
return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){const a=this.currentPoint.x,o=this.currentPoint.y
return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y
return this.absellipse(t+l,e+c,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){const l=new yo(t,e,n,i,r,s,a,o)
if(this.curves.length>0){const t=l.getPoint(0)
t.equals(this.currentPoint)||this.lineTo(t.x,t.y)}this.curves.push(l)
const c=l.getPoint(1)
return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON()
return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ho extends kn{constructor(t=[new Rt(0,.5),new Rt(.5,0),new Rt(0,-.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Mt(i,0,2*Math.PI)
const r=[],s=[],a=[],o=[],l=[],c=1/e,h=new se,u=new Rt,d=new se,p=new se,m=new se
let f=0,g=0
for(let v=0;v<=t.length-1;v++)switch(v){case 0:f=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,d.x=1*g,d.y=-f,d.z=0*g,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z)
break
case t.length-1:o.push(m.x,m.y,m.z)
break
default:f=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,d.x=1*g,d.y=-f,d.z=0*g,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(p)}for(let v=0;v<=e;v++){const r=n+v*c*i,d=Math.sin(r),p=Math.cos(r)
for(let n=0;n<=t.length-1;n++){h.x=t[n].x*d,h.y=t[n].y,h.z=t[n].x*p,s.push(h.x,h.y,h.z),u.x=v/e,u.y=n/(t.length-1),a.push(u.x,u.y)
const i=o[3*n+0]*d,r=o[3*n+1],c=o[3*n+0]*p
l.push(i,r,c)}}for(let v=0;v<e;v++)for(let e=0;e<t.length-1;e++){const n=e+v*t.length,i=n,s=n+t.length,a=n+t.length+1,o=n+1
r.push(i,s,o),r.push(a,o,s)}this.setIndex(r),this.setAttribute("position",new Nn(s,3)),this.setAttribute("uv",new Nn(a,2)),this.setAttribute("normal",new Nn(l,3))}static fromJSON(t){return new Ho(t.points,t.segments,t.phiStart,t.phiLength)}}class zo extends Ho{constructor(t=1,e=1,n=4,i=8){const r=new Bo
r.absarc(0,-e/2,t,1.5*Math.PI,0),r.absarc(0,e/2,t,0,.5*Math.PI),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new zo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Go extends kn{constructor(t=1,e=8,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e)
const r=[],s=[],a=[],o=[],l=new se,c=new Rt
s.push(0,0,0),a.push(0,0,1),o.push(.5,.5)
for(let h=0,u=3;h<=e;h++,u+=3){const r=n+h/e*i
l.x=t*Math.cos(r),l.y=t*Math.sin(r),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(s[u]/t+1)/2,c.y=(s[u+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0)
this.setIndex(r),this.setAttribute("position",new Nn(s,3)),this.setAttribute("normal",new Nn(a,3)),this.setAttribute("uv",new Nn(o,2))}static fromJSON(t){return new Go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vo extends kn{constructor(t=1,e=1,n=1,i=8,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}
const l=this
i=Math.floor(i),r=Math.floor(r)
const c=[],h=[],u=[],d=[]
let p=0
const m=[],f=n/2
let g=0
function v(n){const r=p,s=new Rt,m=new se
let v=0
const y=!0===n?t:e,_=!0===n?1:-1
for(let t=1;t<=i;t++)h.push(0,f*_,0),u.push(0,_,0),d.push(.5,.5),p++
const x=p
for(let t=0;t<=i;t++){const e=t/i*o+a,n=Math.cos(e),r=Math.sin(e)
m.x=y*r,m.y=f*_,m.z=y*n,h.push(m.x,m.y,m.z),u.push(0,_,0),s.x=.5*n+.5,s.y=.5*r*_+.5,d.push(s.x,s.y),p++}for(let t=0;t<i;t++){const e=r+t,i=x+t
!0===n?c.push(i,i+1,e):c.push(i+1,i,e),v+=3}l.addGroup(g,v,!0===n?1:2),g+=v}!function(){const s=new se,v=new se
let y=0
const _=(e-t)/n
for(let l=0;l<=r;l++){const c=[],g=l/r,y=g*(e-t)+t
for(let t=0;t<=i;t++){const e=t/i,r=e*o+a,l=Math.sin(r),m=Math.cos(r)
v.x=y*l,v.y=-g*n+f,v.z=y*m,h.push(v.x,v.y,v.z),s.set(l,_,m).normalize(),u.push(s.x,s.y,s.z),d.push(e,1-g),c.push(p++)}m.push(c)}for(let t=0;t<i;t++)for(let e=0;e<r;e++){const n=m[e][t],i=m[e+1][t],r=m[e+1][t+1],s=m[e][t+1]
c.push(n,i,s),c.push(i,r,s),y+=6}l.addGroup(g,y,0),g+=y}(),!1===s&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Nn(h,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(d,2))}static fromJSON(t){return new Vo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ko extends Vo{constructor(t=1,e=1,n=8,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends kn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i}
const r=[],s=[]
function a(t,e,n,i){const r=i+1,s=[]
for(let a=0;a<=r;a++){s[a]=[]
const i=t.clone().lerp(n,a/r),o=e.clone().lerp(n,a/r),l=r-a
for(let t=0;t<=l;t++)s[a][t]=0===t&&a===r?i:i.clone().lerp(o,t/l)}for(let a=0;a<r;a++)for(let t=0;t<2*(r-a)-1;t++){const e=Math.floor(t/2)
t%2==0?(o(s[a][e+1]),o(s[a+1][e]),o(s[a][e])):(o(s[a][e+1]),o(s[a+1][e+1]),o(s[a+1][e]))}}function o(t){r.push(t.x,t.y,t.z)}function l(e,n){const i=3*e
n.x=t[i+0],n.y=t[i+1],n.z=t[i+2]}function c(t,e,n,i){i<0&&1===t.x&&(s[e]=t.x-1),0===n.x&&0===n.z&&(s[e]=i/2/Math.PI+.5)}function h(t){return Math.atan2(t.z,-t.x)}!function(t){const n=new se,i=new se,r=new se
for(let s=0;s<e.length;s+=3)l(e[s+0],n),l(e[s+1],i),l(e[s+2],r),a(n,i,r,t)}(i),function(t){const e=new se
for(let n=0;n<r.length;n+=3)e.x=r[n+0],e.y=r[n+1],e.z=r[n+2],e.normalize().multiplyScalar(t),r[n+0]=e.x,r[n+1]=e.y,r[n+2]=e.z}(n),function(){const t=new se
for(let n=0;n<r.length;n+=3){t.x=r[n+0],t.y=r[n+1],t.z=r[n+2]
const i=h(t)/2/Math.PI+.5,a=(e=t,Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5)
s.push(i,1-a)}var e;(function(){const t=new se,e=new se,n=new se,i=new se,a=new Rt,o=new Rt,l=new Rt
for(let u=0,d=0;u<r.length;u+=9,d+=6){t.set(r[u+0],r[u+1],r[u+2]),e.set(r[u+3],r[u+4],r[u+5]),n.set(r[u+6],r[u+7],r[u+8]),a.set(s[d+0],s[d+1]),o.set(s[d+2],s[d+3]),l.set(s[d+4],s[d+5]),i.copy(t).add(e).add(n).divideScalar(3)
const p=h(i)
c(a,d+0,t,p),c(o,d+2,e,p),c(l,d+4,n,p)}})(),function(){for(let t=0;t<s.length;t+=6){const e=s[t+0],n=s[t+2],i=s[t+4],r=Math.max(e,n,i),a=Math.min(e,n,i)
r>.9&&a<.1&&(e<.2&&(s[t+0]+=1),n<.2&&(s[t+2]+=1),i<.2&&(s[t+4]+=1))}}()}(),this.setAttribute("position",new Nn(r,3)),this.setAttribute("normal",new Nn(r.slice(),3)),this.setAttribute("uv",new Nn(s,2)),0===i?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(t){return new Wo(t.vertices,t.indices,t.radius,t.details)}}class jo extends Wo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n
super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jo(t.radius,t.detail)}}const Xo=new se,qo=new se,Yo=new se,Jo=new _n
class Zo extends kn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},null!==t){const n=4,i=Math.pow(10,n),r=Math.cos(yt*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u={},d=[]
for(let t=0;t<o;t+=3){s?(l[0]=s.getX(t),l[1]=s.getX(t+1),l[2]=s.getX(t+2)):(l[0]=t,l[1]=t+1,l[2]=t+2)
const{a:e,b:n,c:o}=Jo
if(e.fromBufferAttribute(a,l[0]),n.fromBufferAttribute(a,l[1]),o.fromBufferAttribute(a,l[2]),Jo.getNormal(Yo),h[0]=`${Math.round(e.x*i)},${Math.round(e.y*i)},${Math.round(e.z*i)}`,h[1]=`${Math.round(n.x*i)},${Math.round(n.y*i)},${Math.round(n.z*i)}`,h[2]=`${Math.round(o.x*i)},${Math.round(o.y*i)},${Math.round(o.z*i)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let t=0;t<3;t++){const e=(t+1)%3,n=h[t],i=h[e],s=Jo[c[t]],a=Jo[c[e]],o=`${n}_${i}`,p=`${i}_${n}`
p in u&&u[p]?(Yo.dot(u[p].normal)<=r&&(d.push(s.x,s.y,s.z),d.push(a.x,a.y,a.z)),u[p]=null):o in u||(u[o]={index0:l[t],index1:l[e],normal:Yo.clone()})}}for(const t in u)if(u[t]){const{index0:e,index1:n}=u[t]
Xo.fromBufferAttribute(a,e),qo.fromBufferAttribute(a,n),d.push(Xo.x,Xo.y,Xo.z),d.push(qo.x,qo.y,qo.z)}this.setAttribute("position",new Nn(d,3))}}}class Ko extends Bo{constructor(t){super(t),this.uuid=xt(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[]
for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t)
return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[]
for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e]
this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON()
t.uuid=this.uuid,t.holes=[]
for(let e=0,n=this.holes.length;e<n;e++){const n=this.holes[e]
t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[]
for(let e=0,n=t.holes.length;e<n;e++){const n=t.holes[e]
this.holes.push((new Bo).fromJSON(n))}return this}}function Qo(t,e,n,i,r){let s,a
if(r===function(t,e,n,i){let r=0
for(let s=e,a=n-i;s<n;s+=i)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s
return r}(t,e,n,i)>0)for(s=e;s<n;s+=i)a=_l(s,t[s],t[s+1],a)
else for(s=n-i;s>=e;s-=i)a=_l(s,t[s],t[s+1],a)
return a&&pl(a,a.next)&&(xl(a),a=a.next),a}function $o(t,e){if(!t)return t
e||(e=t)
let n,i=t
do{if(n=!1,i.steiner||!pl(i,i.next)&&0!==dl(i.prev,i,i.next))i=i.next
else{if(xl(i),i=e=i.prev,i===i.next)break
n=!0}}while(n||i!==e)
return e}function tl(t,e,n,i,r,s,a){if(!t)return
!a&&s&&function(t,e,n,i){let r=t
do{null===r.z&&(r.z=ll(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t)
r.prevZ.nextZ=null,r.prevZ=null,function(t){let e,n,i,r,s,a,o,l,c=1
do{for(n=t,t=null,s=null,a=0;n;){for(a++,i=n,o=0,e=0;e<c&&(o++,i=i.nextZ,i);e++);for(l=c;o>0||l>0&&i;)0!==o&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r
n=i}s.nextZ=null,c*=2}while(a>1)}(r)}(t,i,r,s)
let o,l,c=t
for(;t.prev!==t.next;)if(o=t.prev,l=t.next,s?nl(t,i,r,s):el(t))e.push(o.i/n),e.push(t.i/n),e.push(l.i/n),xl(t),t=l.next,c=l.next
else if((t=l)===c){a?1===a?tl(t=il($o(t),e,n),e,n,i,r,s,2):2===a&&rl(t,e,n,i,r,s):tl($o(t),e,n,i,r,s,1)
break}}function el(t){const e=t.prev,n=t,i=t.next
if(dl(e,n,i)>=0)return!1
let r=t.next.next
for(;r!==t.prev;){if(hl(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&dl(r.prev,r,r.next)>=0)return!1
r=r.next}return!0}function nl(t,e,n,i){const r=t.prev,s=t,a=t.next
if(dl(r,s,a)>=0)return!1
const o=r.x<s.x?r.x<a.x?r.x:a.x:s.x<a.x?s.x:a.x,l=r.y<s.y?r.y<a.y?r.y:a.y:s.y<a.y?s.y:a.y,c=r.x>s.x?r.x>a.x?r.x:a.x:s.x>a.x?s.x:a.x,h=r.y>s.y?r.y>a.y?r.y:a.y:s.y>a.y?s.y:a.y,u=ll(o,l,e,n,i),d=ll(c,h,e,n,i)
let p=t.prevZ,m=t.nextZ
for(;p&&p.z>=u&&m&&m.z<=d;){if(p!==t.prev&&p!==t.next&&hl(r.x,r.y,s.x,s.y,a.x,a.y,p.x,p.y)&&dl(p.prev,p,p.next)>=0)return!1
if(p=p.prevZ,m!==t.prev&&m!==t.next&&hl(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&&dl(m.prev,m,m.next)>=0)return!1
m=m.nextZ}for(;p&&p.z>=u;){if(p!==t.prev&&p!==t.next&&hl(r.x,r.y,s.x,s.y,a.x,a.y,p.x,p.y)&&dl(p.prev,p,p.next)>=0)return!1
p=p.prevZ}for(;m&&m.z<=d;){if(m!==t.prev&&m!==t.next&&hl(r.x,r.y,s.x,s.y,a.x,a.y,m.x,m.y)&&dl(m.prev,m,m.next)>=0)return!1
m=m.nextZ}return!0}function il(t,e,n){let i=t
do{const r=i.prev,s=i.next.next
!pl(r,s)&&ml(r,i,i.next,s)&&vl(r,s)&&vl(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),xl(i),xl(i.next),i=t=s),i=i.next}while(i!==t)
return $o(i)}function rl(t,e,n,i,r,s){let a=t
do{let t=a.next.next
for(;t!==a.prev;){if(a.i!==t.i&&ul(a,t)){let o=yl(a,t)
return a=$o(a,a.next),o=$o(o,o.next),tl(a,e,n,i,r,s),void tl(o,e,n,i,r,s)}t=t.next}a=a.next}while(a!==t)}function sl(t,e){return t.x-e.x}function al(t,e){if(e=function(t,e){let n=e
const i=t.x,r=t.y
let s,a=-1/0
do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const t=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y)
if(t<=i&&t>a){if(a=t,t===i){if(r===n.y)return n
if(r===n.next.y)return n.next}s=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e)
if(!s)return null
if(i===a)return s
const o=s,l=s.x,c=s.y
let h,u=1/0
n=s
do{i>=n.x&&n.x>=l&&i!==n.x&&hl(r<c?i:a,r,l,c,r<c?a:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),vl(n,t)&&(h<u||h===u&&(n.x>s.x||n.x===s.x&&ol(s,n)))&&(s=n,u=h)),n=n.next}while(n!==o)
return s}(t,e),e){const n=yl(e,t)
$o(e,e.next),$o(n,n.next)}}function ol(t,e){return dl(t.prev,t,e.prev)<0&&dl(e.next,t,t.next)<0}function ll(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-i)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function cl(t){let e=t,n=t
do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t)
return n}function hl(t,e,n,i,r,s,a,o){return(r-a)*(e-o)-(t-a)*(s-o)>=0&&(t-a)*(i-o)-(n-a)*(e-o)>=0&&(n-a)*(s-o)-(r-a)*(i-o)>=0}function ul(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t
do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ml(n,n.next,t,e))return!0
n=n.next}while(n!==t)
return!1}(t,e)&&(vl(t,e)&&vl(e,t)&&function(t,e){let n=t,i=!1
const r=(t.x+e.x)/2,s=(t.y+e.y)/2
do{n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==t)
return i}(t,e)&&(dl(t.prev,t,e.prev)||dl(t,e.prev,e))||pl(t,e)&&dl(t.prev,t,t.next)>0&&dl(e.prev,e,e.next)>0)}function dl(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function pl(t,e){return t.x===e.x&&t.y===e.y}function ml(t,e,n,i){const r=gl(dl(t,e,n)),s=gl(dl(t,e,i)),a=gl(dl(n,i,t)),o=gl(dl(n,i,e))
return r!==s&&a!==o||!(0!==r||!fl(t,n,e))||!(0!==s||!fl(t,i,e))||!(0!==a||!fl(n,t,i))||!(0!==o||!fl(n,e,i))}function fl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function gl(t){return t>0?1:t<0?-1:0}function vl(t,e){return dl(t.prev,t,t.next)<0?dl(t,e,t.next)>=0&&dl(t,t.prev,e)>=0:dl(t,e,t.prev)<0||dl(t,t.next,e)<0}function yl(t,e){const n=new Ml(t.i,t.x,t.y),i=new Ml(e.i,e.x,e.y),r=t.next,s=e.prev
return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function _l(t,e,n,i){const r=new Ml(t,e,n)
return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function xl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ml(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class bl{static area(t){const e=t.length
let n=0
for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y
return.5*n}static isClockWise(t){return bl.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[]
wl(t),El(n,t)
let s=t.length
e.forEach(wl)
for(let o=0;o<e.length;o++)i.push(s),s+=e[o].length,El(n,e[o])
const a=function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length
let s=Qo(t,0,r,n,!0)
const a=[]
if(!s||s.next===s.prev)return a
let o,l,c,h,u,d,p
if(i&&(s=function(t,e,n,i){const r=[]
let s,a,o,l,c
for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:t.length,c=Qo(t,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(cl(c))
for(r.sort(sl),s=0;s<r.length;s++)al(r[s],n),n=$o(n,n.next)
return n}(t,e,s,n)),t.length>80*n){o=c=t[0],l=h=t[1]
for(let e=n;e<r;e+=n)u=t[e],d=t[e+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d)
p=Math.max(c-o,h-l),p=0!==p?1/p:0}return tl(s,a,n,o,l,p),a}(n,i)
for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3))
return r}}function wl(t){const e=t.length
e>2&&t[e-1].equals(t[0])&&t.pop()}function El(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Sl extends kn{constructor(t=new Ko([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t]
const n=this,i=[],r=[]
for(let a=0,o=t.length;a<o;a++)s(t[a])
function s(t){const s=[],a=void 0!==e.curveSegments?e.curveSegments:12,o=void 0!==e.steps?e.steps:1
let l=void 0!==e.depth?e.depth:1,c=void 0===e.bevelEnabled||e.bevelEnabled,h=void 0!==e.bevelThickness?e.bevelThickness:.2,u=void 0!==e.bevelSize?e.bevelSize:h-.1,d=void 0!==e.bevelOffset?e.bevelOffset:0,p=void 0!==e.bevelSegments?e.bevelSegments:3
const m=e.extrudePath,f=void 0!==e.UVGenerator?e.UVGenerator:Tl
void 0!==e.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),l=e.amount)
let g,v,y,_,x,M=!1
m&&(g=m.getSpacedPoints(o),M=!0,c=!1,v=m.computeFrenetFrames(o,!1),y=new se,_=new se,x=new se),c||(p=0,h=0,u=0,d=0)
const b=t.extractPoints(a)
let w=b.shape
const E=b.holes
if(!bl.isClockWise(w)){w=w.reverse()
for(let t=0,e=E.length;t<e;t++){const e=E[t]
bl.isClockWise(e)&&(E[t]=e.reverse())}}const S=bl.triangulateShape(w,E),T=w
for(let e=0,n=E.length;e<n;e++){const t=E[e]
w=w.concat(t)}function A(t,e,n){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().multiplyScalar(n).add(t)}const R=w.length,C=S.length
function L(t,e,n){let i,r,s
const a=t.x-e.x,o=t.y-e.y,l=n.x-t.x,c=n.y-t.y,h=a*a+o*o,u=a*c-o*l
if(Math.abs(u)>Number.EPSILON){const u=Math.sqrt(h),d=Math.sqrt(l*l+c*c),p=e.x-o/u,m=e.y+a/u,f=((n.x-c/d-p)*c-(n.y+l/d-m)*l)/(a*c-o*l)
i=p+a*f-t.x,r=m+o*f-t.y
const g=i*i+r*r
if(g<=2)return new Rt(i,r)
s=Math.sqrt(g/2)}else{let t=!1
a>Number.EPSILON?l>Number.EPSILON&&(t=!0):a<-Number.EPSILON?l<-Number.EPSILON&&(t=!0):Math.sign(o)===Math.sign(c)&&(t=!0),t?(i=-o,r=a,s=Math.sqrt(h)):(i=a,r=o,s=Math.sqrt(h/2))}return new Rt(i/s,r/s)}const P=[]
for(let e=0,n=T.length,i=n-1,r=e+1;e<n;e++,i++,r++)i===n&&(i=0),r===n&&(r=0),P[e]=L(T[e],T[i],T[r])
const D=[]
let I,N=P.concat()
for(let e=0,n=E.length;e<n;e++){const t=E[e]
I=[]
for(let e=0,n=t.length,i=n-1,r=e+1;e<n;e++,i++,r++)i===n&&(i=0),r===n&&(r=0),I[e]=L(t[e],t[i],t[r])
D.push(I),N=N.concat(I)}for(let e=0;e<p;e++){const t=e/p,n=h*Math.cos(t*Math.PI/2),i=u*Math.sin(t*Math.PI/2)+d
for(let e=0,r=T.length;e<r;e++){const t=A(T[e],P[e],i)
F(t.x,t.y,-n)}for(let e=0,r=E.length;e<r;e++){const t=E[e]
I=D[e]
for(let e=0,r=t.length;e<r;e++){const r=A(t[e],I[e],i)
F(r.x,r.y,-n)}}}const U=u+d
for(let e=0;e<R;e++){const t=c?A(w[e],N[e],U):w[e]
M?(_.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(_).add(y),F(x.x,x.y,x.z)):F(t.x,t.y,0)}for(let e=1;e<=o;e++)for(let t=0;t<R;t++){const n=c?A(w[t],N[t],U):w[t]
M?(_.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(_).add(y),F(x.x,x.y,x.z)):F(n.x,n.y,l/o*e)}for(let e=p-1;e>=0;e--){const t=e/p,n=h*Math.cos(t*Math.PI/2),i=u*Math.sin(t*Math.PI/2)+d
for(let e=0,r=T.length;e<r;e++){const t=A(T[e],P[e],i)
F(t.x,t.y,l+n)}for(let e=0,r=E.length;e<r;e++){const t=E[e]
I=D[e]
for(let e=0,r=t.length;e<r;e++){const r=A(t[e],I[e],i)
M?F(r.x,r.y+g[o-1].y,g[o-1].x+n):F(r.x,r.y,l+n)}}}function O(t,e){let n=t.length
for(;--n>=0;){const i=n
let r=n-1
r<0&&(r=t.length-1)
for(let t=0,n=o+2*p;t<n;t++){const n=R*t,s=R*(t+1)
H(e+i+n,e+r+n,e+r+s,e+i+s)}}}function F(t,e,n){s.push(t),s.push(e),s.push(n)}function B(t,e,r){z(t),z(e),z(r)
const s=i.length/3,a=f.generateTopUV(n,i,s-3,s-2,s-1)
G(a[0]),G(a[1]),G(a[2])}function H(t,e,r,s){z(t),z(e),z(s),z(e),z(r),z(s)
const a=i.length/3,o=f.generateSideWallUV(n,i,a-6,a-3,a-2,a-1)
G(o[0]),G(o[1]),G(o[3]),G(o[1]),G(o[2]),G(o[3])}function z(t){i.push(s[3*t+0]),i.push(s[3*t+1]),i.push(s[3*t+2])}function G(t){r.push(t.x),r.push(t.y)}!function(){const t=i.length/3
if(c){let t=0,e=R*t
for(let n=0;n<C;n++){const t=S[n]
B(t[2]+e,t[1]+e,t[0]+e)}t=o+2*p,e=R*t
for(let n=0;n<C;n++){const t=S[n]
B(t[0]+e,t[1]+e,t[2]+e)}}else{for(let t=0;t<C;t++){const e=S[t]
B(e[2],e[1],e[0])}for(let t=0;t<C;t++){const e=S[t]
B(e[0]+R*o,e[1]+R*o,e[2]+R*o)}}n.addGroup(t,i.length/3-t,0)}(),function(){const t=i.length/3
let e=0
O(T,e),e+=T.length
for(let n=0,i=E.length;n<i;n++){const t=E[n]
O(t,e),e+=t.length}n.addGroup(t,i.length/3-t,1)}()}this.setAttribute("position",new Nn(i,3)),this.setAttribute("uv",new Nn(r,2)),this.computeVertexNormals()}toJSON(){const t=super.toJSON()
return function(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const e=t[i]
n.shapes.push(e.uuid)}else n.shapes.push(t.uuid)
return void 0!==e.extrudePath&&(n.options.extrudePath=e.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){const n=[]
for(let r=0,s=t.shapes.length;r<s;r++){const i=e[t.shapes[r]]
n.push(i)}const i=t.options.extrudePath
return void 0!==i&&(t.options.extrudePath=(new Oo[i.type]).fromJSON(i)),new Sl(n,t.options)}}const Tl={generateTopUV:function(t,e,n,i,r){const s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1]
return[new Rt(s,a),new Rt(o,l),new Rt(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){const a=e[3*n],o=e[3*n+1],l=e[3*n+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],g=e[3*s+1],v=e[3*s+2]
return Math.abs(o-h)<Math.abs(a-c)?[new Rt(a,1-l),new Rt(c,1-u),new Rt(d,1-m),new Rt(f,1-v)]:[new Rt(o,1-l),new Rt(h,1-u),new Rt(p,1-m),new Rt(g,1-v)]}}
class Al extends Wo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2
super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Al(t.radius,t.detail)}}class Rl extends Wo{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rl(t.radius,t.detail)}}class Cl extends kn{constructor(t=.5,e=1,n=8,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n)
const a=[],o=[],l=[],c=[]
let h=t
const u=(e-t)/(i=Math.max(1,i)),d=new se,p=new Rt
for(let m=0;m<=i;m++){for(let t=0;t<=n;t++){const i=r+t/n*s
d.x=h*Math.cos(i),d.y=h*Math.sin(i),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,c.push(p.x,p.y)}h+=u}for(let m=0;m<i;m++){const t=m*(n+1)
for(let e=0;e<n;e++){const i=e+t,r=i,s=i+n+1,o=i+n+2,l=i+1
a.push(r,s,l),a.push(s,o,l)}}this.setIndex(a),this.setAttribute("position",new Nn(o,3)),this.setAttribute("normal",new Nn(l,3)),this.setAttribute("uv",new Nn(c,2))}static fromJSON(t){return new Cl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ll extends kn{constructor(t=new Ko([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e}
const n=[],i=[],r=[],s=[]
let a=0,o=0
if(!1===Array.isArray(t))l(t)
else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0
function l(t){const a=i.length/3,l=t.extractPoints(e)
let c=l.shape
const h=l.holes
!1===bl.isClockWise(c)&&(c=c.reverse())
for(let e=0,n=h.length;e<n;e++){const t=h[e]
!0===bl.isClockWise(t)&&(h[e]=t.reverse())}const u=bl.triangulateShape(c,h)
for(let e=0,n=h.length;e<n;e++){const t=h[e]
c=c.concat(t)}for(let e=0,n=c.length;e<n;e++){const t=c[e]
i.push(t.x,t.y,0),r.push(0,0,1),s.push(t.x,t.y)}for(let e=0,i=u.length;e<i;e++){const t=u[e],i=t[0]+a,r=t[1]+a,s=t[2]+a
n.push(i,r,s),o+=3}}this.setIndex(n),this.setAttribute("position",new Nn(i,3)),this.setAttribute("normal",new Nn(r,3)),this.setAttribute("uv",new Nn(s,2))}toJSON(){const t=super.toJSON()
return function(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const i=t[n]
e.shapes.push(i.uuid)}else e.shapes.push(t.uuid)
return e}(this.parameters.shapes,t)}static fromJSON(t,e){const n=[]
for(let i=0,r=t.shapes.length;i<r;i++){const r=e[t.shapes[i]]
n.push(r)}return new Ll(n,t.curveSegments)}}class Pl extends kn{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n))
const o=Math.min(s+a,Math.PI)
let l=0
const c=[],h=new se,u=new se,d=[],p=[],m=[],f=[]
for(let g=0;g<=n;g++){const d=[],v=g/n
let y=0
0==g&&0==s?y=.5/e:g==n&&o==Math.PI&&(y=-.5/e)
for(let n=0;n<=e;n++){const o=n/e
h.x=-t*Math.cos(i+o*r)*Math.sin(s+v*a),h.y=t*Math.cos(s+v*a),h.z=t*Math.sin(i+o*r)*Math.sin(s+v*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),f.push(o+y,1-v),d.push(l++)}c.push(d)}for(let g=0;g<n;g++)for(let t=0;t<e;t++){const e=c[g][t+1],i=c[g][t],r=c[g+1][t],a=c[g+1][t+1];(0!==g||s>0)&&d.push(e,i,a),(g!==n-1||o<Math.PI)&&d.push(i,r,a)}this.setIndex(d),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(f,2))}static fromJSON(t){return new Pl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dl extends Wo{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dl(t.radius,t.detail)}}class Il extends kn{constructor(t=1,e=.4,n=8,i=6,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i)
const s=[],a=[],o=[],l=[],c=new se,h=new se,u=new se
for(let d=0;d<=n;d++)for(let s=0;s<=i;s++){const p=s/i*r,m=d/n*Math.PI*2
h.x=(t+e*Math.cos(m))*Math.cos(p),h.y=(t+e*Math.cos(m))*Math.sin(p),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(p),c.y=t*Math.sin(p),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(s/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let t=1;t<=i;t++){const e=(i+1)*d+t-1,n=(i+1)*(d-1)+t-1,r=(i+1)*(d-1)+t,a=(i+1)*d+t
s.push(e,n,a),s.push(n,r,a)}this.setIndex(s),this.setAttribute("position",new Nn(a,3)),this.setAttribute("normal",new Nn(o,3)),this.setAttribute("uv",new Nn(l,2))}static fromJSON(t){return new Il(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nl extends kn{constructor(t=1,e=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i)
const a=[],o=[],l=[],c=[],h=new se,u=new se,d=new se,p=new se,m=new se,f=new se,g=new se
for(let y=0;y<=n;++y){const a=y/n*r*Math.PI*2
v(a,r,s,t,d),v(a+.01,r,s,t,p),f.subVectors(p,d),g.addVectors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normalize()
for(let t=0;t<=i;++t){const r=t/i*Math.PI*2,s=-e*Math.cos(r),a=e*Math.sin(r)
h.x=d.x+(s*g.x+a*m.x),h.y=d.y+(s*g.y+a*m.y),h.z=d.z+(s*g.z+a*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(y/n),c.push(t/i)}}for(let y=1;y<=n;y++)for(let t=1;t<=i;t++){const e=(i+1)*(y-1)+(t-1),n=(i+1)*y+(t-1),r=(i+1)*y+t,s=(i+1)*(y-1)+t
a.push(e,n,s),a.push(n,r,s)}function v(t,e,n,i,r){const s=Math.cos(t),a=Math.sin(t),o=n/e*t,l=Math.cos(o)
r.x=i*(2+l)*.5*s,r.y=i*(2+l)*a*.5,r.z=i*Math.sin(o)*.5}this.setIndex(a),this.setAttribute("position",new Nn(o,3)),this.setAttribute("normal",new Nn(l,3)),this.setAttribute("uv",new Nn(c,2))}static fromJSON(t){return new Nl(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Ul extends kn{constructor(t=new No(new se(-1,-1,0),new se(-1,1,0),new se(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r}
const s=t.computeFrenetFrames(e,r)
this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals
const a=new se,o=new se,l=new Rt
let c=new se
const h=[],u=[],d=[],p=[]
function m(r){c=t.getPointAt(r/e,c)
const l=s.normals[r],d=s.binormals[r]
for(let t=0;t<=i;t++){const e=t/i*Math.PI*2,r=Math.sin(e),s=-Math.cos(e)
o.x=s*l.x+r*d.x,o.y=s*l.y+r*d.y,o.z=s*l.z+r*d.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}!function(){for(let t=0;t<e;t++)m(t)
m(!1===r?e:0),function(){for(let t=0;t<=e;t++)for(let n=0;n<=i;n++)l.x=t/e,l.y=n/i,d.push(l.x,l.y)}(),function(){for(let t=1;t<=e;t++)for(let e=1;e<=i;e++){const n=(i+1)*(t-1)+(e-1),r=(i+1)*t+(e-1),s=(i+1)*t+e,a=(i+1)*(t-1)+e
p.push(n,r,a),p.push(r,s,a)}}()}(),this.setIndex(p),this.setAttribute("position",new Nn(h,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(d,2))}toJSON(){const t=super.toJSON()
return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ul((new Oo[t.path.type]).fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ol extends kn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},null!==t){const e=[],n=new Set,i=new se,r=new se
if(null!==t.index){const s=t.attributes.position,a=t.index
let o=t.groups
0===o.length&&(o=[{start:0,count:a.count,materialIndex:0}])
for(let t=0,l=o.length;t<l;++t){const l=o[t],c=l.start
for(let t=c,o=c+l.count;t<o;t+=3)for(let l=0;l<3;l++){const o=a.getX(t+l),c=a.getX(t+(l+1)%3)
i.fromBufferAttribute(s,o),r.fromBufferAttribute(s,c),!0===Fl(i,r,n)&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const s=t.attributes.position
for(let t=0,a=s.count/3;t<a;t++)for(let o=0;o<3;o++){const a=3*t+o,l=3*t+(o+1)%3
i.fromBufferAttribute(s,a),r.fromBufferAttribute(s,l),!0===Fl(i,r,n)&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Nn(e,3))}}}function Fl(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`
return!0!==n.has(i)&&!0!==n.has(r)&&(n.add(i),n.add(r),!0)}var Bl=Object.freeze({__proto__:null,BoxGeometry:ci,BoxBufferGeometry:ci,CapsuleGeometry:zo,CapsuleBufferGeometry:zo,CircleGeometry:Go,CircleBufferGeometry:Go,ConeGeometry:ko,ConeBufferGeometry:ko,CylinderGeometry:Vo,CylinderBufferGeometry:Vo,DodecahedronGeometry:jo,DodecahedronBufferGeometry:jo,EdgesGeometry:Zo,ExtrudeGeometry:Sl,ExtrudeBufferGeometry:Sl,IcosahedronGeometry:Al,IcosahedronBufferGeometry:Al,LatheGeometry:Ho,LatheBufferGeometry:Ho,OctahedronGeometry:Rl,OctahedronBufferGeometry:Rl,PlaneGeometry:Ci,PlaneBufferGeometry:Ci,PolyhedronGeometry:Wo,PolyhedronBufferGeometry:Wo,RingGeometry:Cl,RingBufferGeometry:Cl,ShapeGeometry:Ll,ShapeBufferGeometry:Ll,SphereGeometry:Pl,SphereBufferGeometry:Pl,TetrahedronGeometry:Dl,TetrahedronBufferGeometry:Dl,TorusGeometry:Il,TorusBufferGeometry:Il,TorusKnotGeometry:Nl,TorusKnotBufferGeometry:Nl,TubeGeometry:Ul,TubeBufferGeometry:Ul,WireframeGeometry:Ol})
class Hl extends Mn{constructor(t){super(),this.type="ShadowMaterial",this.color=new Wt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}Hl.prototype.isShadowMaterial=!0
class zl extends pi{constructor(t){super(t),this.type="RawShaderMaterial"}}zl.prototype.isRawShaderMaterial=!0
class Gl extends Mn{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Gl.prototype.isMeshStandardMaterial=!0
class Vl extends Gl{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}Vl.prototype.isMeshPhysicalMaterial=!0
class kl extends Mn{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}kl.prototype.isMeshPhongMaterial=!0
class Wl extends Mn{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Wl.prototype.isMeshToonMaterial=!0
class jl extends Mn{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}jl.prototype.isMeshNormalMaterial=!0
class Xl extends Mn{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Xl.prototype.isMeshLambertMaterial=!0
class ql extends Mn{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Wt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}ql.prototype.isMeshMatcapMaterial=!0
class Yl extends Ya{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Yl.prototype.isLineDashedMaterial=!0
const Jl={ShadowMaterial:Hl,SpriteMaterial:da,RawShaderMaterial:zl,ShaderMaterial:pi,PointsMaterial:so,MeshPhysicalMaterial:Vl,MeshStandardMaterial:Gl,MeshPhongMaterial:kl,MeshToonMaterial:Wl,MeshNormalMaterial:jl,MeshLambertMaterial:Xl,MeshDepthMaterial:js,MeshDistanceMaterial:Xs,MeshBasicMaterial:bn,MeshMatcapMaterial:ql,LineDashedMaterial:Yl,LineBasicMaterial:Ya,Material:Mn}
Mn.fromType=function(t){return new Jl[t]}
const Zl={arraySlice:function(t,e,n){return Zl.isTypedArray(t)?new t.constructor(t.subarray(e,void 0!==n?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){const e=t.length,n=new Array(e)
for(let i=0;i!==e;++i)n[i]=i
return n.sort((function(e,n){return t[e]-t[n]})),n},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i)
for(let s=0,a=0;a!==i;++s){const i=n[s]*e
for(let n=0;n!==e;++n)r[a++]=t[i+n]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0]
for(;void 0!==s&&void 0===s[i];)s=t[r++]
if(void 0===s)return
let a=s[i]
if(void 0!==a)if(Array.isArray(a))do{a=s[i],void 0!==a&&(e.push(s.time),n.push.apply(n,a)),s=t[r++]}while(void 0!==s)
else if(void 0!==a.toArray)do{a=s[i],void 0!==a&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++]}while(void 0!==s)
else do{a=s[i],void 0!==a&&(e.push(s.time),n.push(a)),s=t[r++]}while(void 0!==s)},subclip:function(t,e,n,i,r=30){const s=t.clone()
s.name=e
const a=[]
for(let l=0;l<s.tracks.length;++l){const t=s.tracks[l],e=t.getValueSize(),o=[],c=[]
for(let s=0;s<t.times.length;++s){const a=t.times[s]*r
if(!(a<n||a>=i)){o.push(t.times[s])
for(let n=0;n<e;++n)c.push(t.values[s*e+n])}}0!==o.length&&(t.times=Zl.convertArray(o,t.times.constructor),t.values=Zl.convertArray(c,t.values.constructor),a.push(t))}s.tracks=a
let o=1/0
for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0])
for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o)
return s.resetDuration(),s},makeClipAdditive:function(t,e=0,n=t,i=30){i<=0&&(i=30)
const r=n.tracks.length,s=e/i
for(let a=0;a<r;++a){const e=n.tracks[a],i=e.ValueTypeName
if("bool"===i||"string"===i)continue
const r=t.tracks.find((function(t){return t.name===e.name&&t.ValueTypeName===i}))
if(void 0===r)continue
let o=0
const l=e.getValueSize()
e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(o=l/3)
let c=0
const h=r.getValueSize()
r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=h/3)
const u=e.times.length-1
let d
if(s<=e.times[0]){const t=o,n=l-o
d=Zl.arraySlice(e.values,t,n)}else if(s>=e.times[u]){const t=u*l+o,n=t+l-o
d=Zl.arraySlice(e.values,t,n)}else{const t=e.createInterpolant(),n=o,i=l-o
t.evaluate(s),d=Zl.arraySlice(t.resultBuffer,n,i)}"quaternion"===i&&(new re).fromArray(d).normalize().conjugate().toArray(d)
const p=r.times.length
for(let t=0;t<p;++t){const e=t*h+c
if("quaternion"===i)re.multiplyQuaternionsFlat(r.values,e,d,0,r.values,e)
else{const t=h-2*c
for(let n=0;n<t;++n)r.values[e+n]-=d[n]}}}return t.blendMode=st,t}}
class Kl{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==i?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions
let n=this._cachedIndex,i=e[n],r=e[n-1]
t:{e:{let s
n:{i:if(!(t<i)){for(let s=n+2;;){if(void 0===i){if(t<r)break i
return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===s)break
if(r=i,i=e[++n],t<i)break e}s=e.length
break n}if(t>=r)break t
{const a=e[1]
t<a&&(n=2,r=a)
for(let s=n-2;;){if(void 0===r)return this._cachedIndex=0,this.beforeStart_(0,t,i)
if(n===s)break
if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0}}for(;n<s;){const i=n+s>>>1
t<e[i]?s=i:n=i+1}if(i=e[n],r=e[n-1],void 0===r)return this._cachedIndex=0,this.beforeStart_(0,t,i)
if(void 0===i)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i
for(let s=0;s!==i;++s)e[s]=n[r+s]
return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Kl.prototype.beforeStart_=Kl.prototype.copySampleValue_,Kl.prototype.afterEnd_=Kl.prototype.copySampleValue_
class Ql extends Kl{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nt,endingEnd:nt}}intervalChanged_(t,e,n){const i=this.parameterPositions
let r=t-2,s=t+1,a=i[r],o=i[s]
if(void 0===a)switch(this.getSettings_().endingStart){case it:r=t,a=2*e-n
break
case rt:r=i.length-2,a=e+i[r]-i[r+1]
break
default:r=t,a=n}if(void 0===o)switch(this.getSettings_().endingEnd){case it:s=t,o=2*n-e
break
case rt:s=1,o=n+i[1]-i[0]
break
default:s=t-1,o=e}const l=.5*(n-e),c=this.valueSize
this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,v=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,y=(-1-d)*f+(1.5+d)*m+.5*p,_=d*f-d*m
for(let x=0;x!==a;++x)r[x]=g*s[c+x]+v*s[l+x]+y*s[o+x]+_*s[h+x]
return r}}class $l extends Kl{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c
for(let u=0;u!==a;++u)r[u]=s[l+u]*h+s[o+u]*c
return r}}class tc extends Kl{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ec{constructor(t,e,n,i){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined")
if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t)
this.name=t,this.times=Zl.convertArray(e,this.TimeBufferType),this.values=Zl.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor
let n
if(e.toJSON!==this.toJSON)n=e.toJSON(t)
else{n={name:t.name,times:Zl.convertArray(t.times,Array),values:Zl.convertArray(t.values,Array)}
const e=t.getInterpolation()
e!==t.DefaultInterpolation&&(n.interpolation=e)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e
switch(t){case $:e=this.InterpolantFactoryMethodDiscrete
break
case tt:e=this.InterpolantFactoryMethodLinear
break
case et:e=this.InterpolantFactoryMethodSmooth}if(void 0===e){const e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name
if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(e)
this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $
case this.InterpolantFactoryMethodLinear:return tt
case this.InterpolantFactoryMethodSmooth:return et}}getValueSize(){return this.values.length/this.times.length}shift(t){if(0!==t){const e=this.times
for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(1!==t){const e=this.times
for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length
let r=0,s=i-1
for(;r!==i&&n[r]<t;)++r
for(;-1!==s&&n[s]>e;)--s
if(++s,0!==r||s!==i){r>=s&&(s=Math.max(s,1),r=s-1)
const t=this.getValueSize()
this.times=Zl.arraySlice(n,r,s),this.values=Zl.arraySlice(this.values,r*t,s*t)}return this}validate(){let t=!0
const e=this.getValueSize()
e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1)
const n=this.times,i=this.values,r=n.length
0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1)
let s=null
for(let a=0;a!==r;a++){const e=n[a]
if("number"==typeof e&&isNaN(e)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,e),t=!1
break}if(null!==s&&s>e){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,e,s),t=!1
break}s=e}if(void 0!==i&&Zl.isTypedArray(i))for(let a=0,o=i.length;a!==o;++a){const e=i[a]
if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,e),t=!1
break}}return t}optimize(){const t=Zl.arraySlice(this.times),e=Zl.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===et,r=t.length-1
let s=1
for(let a=1;a<r;++a){let r=!1
const o=t[a]
if(o!==t[a+1]&&(1!==a||o!==t[0]))if(i)r=!0
else{const t=a*n,i=t-n,s=t+n
for(let a=0;a!==n;++a){const n=e[t+a]
if(n!==e[i+a]||n!==e[s+a]){r=!0
break}}}if(r){if(a!==s){t[s]=t[a]
const i=a*n,r=s*n
for(let t=0;t!==n;++t)e[r+t]=e[i+t]}++s}}if(r>0){t[s]=t[r]
for(let t=r*n,i=s*n,a=0;a!==n;++a)e[i+a]=e[t+a];++s}return s!==t.length?(this.times=Zl.arraySlice(t,0,s),this.values=Zl.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this}clone(){const t=Zl.arraySlice(this.times,0),e=Zl.arraySlice(this.values,0),n=new(0,this.constructor)(this.name,t,e)
return n.createInterpolant=this.createInterpolant,n}}ec.prototype.TimeBufferType=Float32Array,ec.prototype.ValueBufferType=Float32Array,ec.prototype.DefaultInterpolation=tt
class nc extends ec{}nc.prototype.ValueTypeName="bool",nc.prototype.ValueBufferType=Array,nc.prototype.DefaultInterpolation=$,nc.prototype.InterpolantFactoryMethodLinear=void 0,nc.prototype.InterpolantFactoryMethodSmooth=void 0
class ic extends ec{}ic.prototype.ValueTypeName="color"
class rc extends ec{}rc.prototype.ValueTypeName="number"
class sc extends Kl{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e)
let l=t*a
for(let c=l+a;l!==c;l+=4)re.slerpFlat(r,0,s,l-a,s,l,o)
return r}}class ac extends ec{InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}}ac.prototype.ValueTypeName="quaternion",ac.prototype.DefaultInterpolation=tt,ac.prototype.InterpolantFactoryMethodSmooth=void 0
class oc extends ec{}oc.prototype.ValueTypeName="string",oc.prototype.ValueBufferType=Array,oc.prototype.DefaultInterpolation=$,oc.prototype.InterpolantFactoryMethodLinear=void 0,oc.prototype.InterpolantFactoryMethodSmooth=void 0
class lc extends ec{}lc.prototype.ValueTypeName="vector"
class cc{constructor(t,e=-1,n,i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=xt(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1)
for(let s=0,a=n.length;s!==a;++s)e.push(hc(n[s]).scale(i))
const r=new this(t.name,t.duration,e,t.blendMode)
return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode}
for(let r=0,s=n.length;r!==s;++r)e.push(ec.toJSON(n[r]))
return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[]
for(let a=0;a<r;a++){let t=[],o=[]
t.push((a+r-1)%r,a,(a+1)%r),o.push(0,1,0)
const l=Zl.getKeyframeOrder(t)
t=Zl.sortedArray(t,1,l),o=Zl.sortedArray(o,1,l),i||0!==t[0]||(t.push(r),o.push(o[0])),s.push(new rc(".morphTargetInfluences["+e[a].name+"]",t,o).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t
if(!Array.isArray(t)){const e=t
n=e.geometry&&e.geometry.animations||e.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i]
return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/
for(let a=0,o=t.length;a<o;a++){const e=t[a],n=e.name.match(r)
if(n&&n.length>1){const t=n[1]
let r=i[t]
r||(i[t]=r=[]),r.push(e)}}const s=[]
for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n))
return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null
const n=function(t,e,n,i,r){if(0!==n.length){const s=[],a=[]
Zl.flattenJSON(n,s,a,i),0!==s.length&&r.push(new t(e,s,a))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode
let o=t.length||-1
const l=t.hierarchy||[]
for(let c=0;c<l.length;c++){const t=l[c].keys
if(t&&0!==t.length)if(t[0].morphTargets){const e={}
let n
for(n=0;n<t.length;n++)if(t[n].morphTargets)for(let i=0;i<t[n].morphTargets.length;i++)e[t[n].morphTargets[i]]=-1
for(const r in e){const e=[],s=[]
for(let i=0;i!==t[n].morphTargets.length;++i){const i=t[n]
e.push(i.time),s.push(i.morphTarget===r?1:0)}i.push(new rc(".morphTargetInfluence["+r+"]",e,s))}o=e.length*s}else{const r=".bones["+e[c].name+"]"
n(lc,r+".position",t,"pos",i),n(ac,r+".quaternion",t,"rot",i),n(lc,r+".scale",t,"scl",i)}}return 0===i.length?null:new this(r,o,i,a)}resetDuration(){let t=0
for(let e=0,n=this.tracks.length;e!==n;++e){const n=this.tracks[e]
t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration)
return this}validate(){let t=!0
for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate()
return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize()
return this}clone(){const t=[]
for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone())
return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hc(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse")
const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rc
case"vector":case"vector2":case"vector3":case"vector4":return lc
case"color":return ic
case"quaternion":return ac
case"bool":case"boolean":return nc
case"string":return oc}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type)
if(void 0===t.times){const e=[],n=[]
Zl.flattenJSON(t.keys,e,n,"value"),t.times=e,t.values=n}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const uc={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}}
class dc{constructor(t,e,n){const i=this
let r,s=!1,a=0,o=0
const l=[]
this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(t){o++,!1===s&&void 0!==i.onStart&&i.onStart(t,a,o),s=!0},this.itemEnd=function(t){a++,void 0!==i.onProgress&&i.onProgress(t,a,o),a===o&&(s=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return l.push(t,e),this},this.removeHandler=function(t){const e=l.indexOf(t)
return-1!==e&&l.splice(e,2),this},this.getHandler=function(t){for(let e=0,n=l.length;e<n;e+=2){const n=l[e],i=l[e+1]
if(n.global&&(n.lastIndex=0),n.test(t))return i}return null}}}const pc=new dc
class mc{constructor(t){this.manager=void 0!==t?t:pc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this
return new Promise((function(i,r){n.load(t,i,e,r)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const fc={}
class gc extends mc{constructor(t){super(t)}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t)
const r=uc.get(t)
if(void 0!==r)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t)}),0),r
if(void 0!==fc[t])return void fc[t].push({onLoad:e,onProgress:n,onError:i})
fc[t]=[],fc[t].push({onLoad:e,onProgress:n,onError:i})
const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType
fetch(s).then((e=>{if(200===e.status||0===e.status){if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e
const n=fc[t],i=e.body.getReader(),r=e.headers.get("Content-Length"),s=r?parseInt(r):0,a=0!==s
let o=0
const l=new ReadableStream({start(t){!function e(){i.read().then((({done:i,value:r})=>{if(i)t.close()
else{o+=r.byteLength
const i=new ProgressEvent("progress",{lengthComputable:a,loaded:o,total:s})
for(let t=0,e=n.length;t<e;t++){const e=n[t]
e.onProgress&&e.onProgress(i)}t.enqueue(r),e()}}))}()}})
return new Response(l)}throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`)})).then((t=>{switch(o){case"arraybuffer":return t.arrayBuffer()
case"blob":return t.blob()
case"document":return t.text().then((t=>(new DOMParser).parseFromString(t,a)))
case"json":return t.json()
default:if(void 0===a)return t.text()
{const e=/charset="?([^;"\s]*)"?/i.exec(a),n=e&&e[1]?e[1].toLowerCase():void 0,i=new TextDecoder(n)
return t.arrayBuffer().then((t=>i.decode(t)))}}})).then((e=>{uc.add(t,e)
const n=fc[t]
delete fc[t]
for(let t=0,i=n.length;t<i;t++){const i=n[t]
i.onLoad&&i.onLoad(e)}})).catch((e=>{const n=fc[t]
if(void 0===n)throw this.manager.itemError(t),e
delete fc[t]
for(let t=0,i=n.length;t<i;t++){const i=n[t]
i.onError&&i.onError(e)}this.manager.itemError(t)})).finally((()=>{this.manager.itemEnd(t)})),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class vc extends mc{constructor(t){super(t)}load(t,e,n,i){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t)
const r=this,s=uc.get(t)
if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t)}),0),s
const a=It("img")
function o(){c(),uc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(e){c(),i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class yc extends mc{constructor(t){super(t)}load(t,e,n,i){const r=new yi,s=new vc(this.manager)
s.setCrossOrigin(this.crossOrigin),s.setPath(this.path)
let a=0
function o(n){s.load(t[n],(function(t){r.images[n]=t,a++,6===a&&(r.needsUpdate=!0,e&&e(r))}),void 0,i)}for(let l=0;l<t.length;++l)o(l)
return r}}class _c extends mc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new Ba,a=new gc(this.manager)
return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,(function(t){const n=r.parse(t)
n&&(void 0!==n.image?s.image=n.image:void 0!==n.data&&(s.image.width=n.width,s.image.height=n.height,s.image.data=n.data),s.wrapS=void 0!==n.wrapS?n.wrapS:u,s.wrapT=void 0!==n.wrapT?n.wrapT:u,s.magFilter=void 0!==n.magFilter?n.magFilter:g,s.minFilter=void 0!==n.minFilter?n.minFilter:g,s.anisotropy=void 0!==n.anisotropy?n.anisotropy:1,void 0!==n.encoding&&(s.encoding=n.encoding),void 0!==n.flipY&&(s.flipY=n.flipY),void 0!==n.format&&(s.format=n.format),void 0!==n.type&&(s.type=n.type),void 0!==n.mipmaps&&(s.mipmaps=n.mipmaps,s.minFilter=y),1===n.mipmapCount&&(s.minFilter=g),void 0!==n.generateMipmaps&&(s.generateMipmaps=n.generateMipmaps),s.needsUpdate=!0,e&&e(s,n))}),n,i),s}}class xc extends mc{constructor(t){super(t)}load(t,e,n,i){const r=new Zt,s=new vc(this.manager)
return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,(function(t){r.image=t,r.needsUpdate=!0,void 0!==e&&e(r)}),n,i),r}}class Mc extends ln{constructor(t,e=1){super(),this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t)
return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}Mc.prototype.isLight=!0
class bc extends Mc{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(ln.DefaultUp),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t){return Mc.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}bc.prototype.isHemisphereLight=!0
const wc=new Oe,Ec=new se,Sc=new se
class Tc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix
Ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ec),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const t={}
return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ac extends Tc{constructor(){super(new fi(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=2*_t*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far
n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Ac.prototype.isSpotLightShadow=!0
class Rc extends Mc{constructor(t,e,n=0,i=Math.PI/3,r=0,s=1){super(t,e),this.type="SpotLight",this.position.copy(ln.DefaultUp),this.updateMatrix(),this.target=new ln,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new Ac}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Rc.prototype.isSpotLight=!0
const Cc=new Oe,Lc=new se,Pc=new se
class Dc extends Tc{constructor(){super(new fi(90,1,.5,500)),this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new se(1,0,0),new se(-1,0,0),new se(0,0,1),new se(0,0,-1),new se(0,1,0),new se(0,-1,0)],this._cubeUps=[new se(0,1,0),new se(0,1,0),new se(0,1,0),new se(0,1,0),new se(0,0,1),new se(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far
r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lc.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lc),Pc.copy(n.position),Pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pc),n.updateMatrixWorld(),i.makeTranslation(-Lc.x,-Lc.y,-Lc.z),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc)}}Dc.prototype.isPointLightShadow=!0
class Ic extends Mc{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dc}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}Ic.prototype.isPointLight=!0
class Nc extends Tc{constructor(){super(new Hi(-5,5,5,-5,.5,500))}}Nc.prototype.isDirectionalLightShadow=!0
class Uc extends Mc{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(ln.DefaultUp),this.updateMatrix(),this.target=new ln,this.shadow=new Nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Uc.prototype.isDirectionalLight=!0
class Oc extends Mc{constructor(t,e){super(t,e),this.type="AmbientLight"}}Oc.prototype.isAmbientLight=!0
class Fc extends Mc{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t)
return e.object.width=this.width,e.object.height=this.height,e}}Fc.prototype.isRectAreaLight=!0
class Bc{constructor(){this.coefficients=[]
for(let t=0;t<9;t++)this.coefficients.push(new se)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e])
return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0)
return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients
return e.copy(s[0]).multiplyScalar(.282095),e.addScaledVector(s[1],.488603*i),e.addScaledVector(s[2],.488603*r),e.addScaledVector(s[3],.488603*n),e.addScaledVector(s[4],n*i*1.092548),e.addScaledVector(s[5],i*r*1.092548),e.addScaledVector(s[6],.315392*(3*r*r-1)),e.addScaledVector(s[7],n*r*1.092548),e.addScaledVector(s[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,s=this.coefficients
return e.copy(s[0]).multiplyScalar(.886227),e.addScaledVector(s[1],1.023328*i),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3],1.023328*n),e.addScaledVector(s[4],.858086*n*i),e.addScaledVector(s[5],.858086*i*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[7],.858086*n*r),e.addScaledVector(s[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e])
return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e)
return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t)
return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e)
return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1
return!0}copy(t){return this.set(t.coefficients)}clone(){return(new this.constructor).copy(this)}fromArray(t,e=0){const n=this.coefficients
for(let i=0;i<9;i++)n[i].fromArray(t,e+3*i)
return this}toArray(t=[],e=0){const n=this.coefficients
for(let i=0;i<9;i++)n[i].toArray(t,e+3*i)
return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z
e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}Bc.prototype.isSphericalHarmonics3=!0
class Hc extends Mc{constructor(t=new Bc,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t)
return e.object.sh=this.sh.toArray(),e}}Hc.prototype.isLightProbe=!0
class zc extends mc{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,s=new gc(r.manager)
s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e=this.textures
function n(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}const i=Mn.fromType(t.type)
if(void 0!==t.uuid&&(i.uuid=t.uuid),void 0!==t.name&&(i.name=t.name),void 0!==t.color&&void 0!==i.color&&i.color.setHex(t.color),void 0!==t.roughness&&(i.roughness=t.roughness),void 0!==t.metalness&&(i.metalness=t.metalness),void 0!==t.sheen&&(i.sheen=t.sheen),void 0!==t.sheenColor&&(i.sheenColor=(new Wt).setHex(t.sheenColor)),void 0!==t.sheenRoughness&&(i.sheenRoughness=t.sheenRoughness),void 0!==t.emissive&&void 0!==i.emissive&&i.emissive.setHex(t.emissive),void 0!==t.specular&&void 0!==i.specular&&i.specular.setHex(t.specular),void 0!==t.specularIntensity&&(i.specularIntensity=t.specularIntensity),void 0!==t.specularColor&&void 0!==i.specularColor&&i.specularColor.setHex(t.specularColor),void 0!==t.shininess&&(i.shininess=t.shininess),void 0!==t.clearcoat&&(i.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(i.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.transmission&&(i.transmission=t.transmission),void 0!==t.thickness&&(i.thickness=t.thickness),void 0!==t.attenuationDistance&&(i.attenuationDistance=t.attenuationDistance),void 0!==t.attenuationColor&&void 0!==i.attenuationColor&&i.attenuationColor.setHex(t.attenuationColor),void 0!==t.fog&&(i.fog=t.fog),void 0!==t.flatShading&&(i.flatShading=t.flatShading),void 0!==t.blending&&(i.blending=t.blending),void 0!==t.combine&&(i.combine=t.combine),void 0!==t.side&&(i.side=t.side),void 0!==t.shadowSide&&(i.shadowSide=t.shadowSide),void 0!==t.opacity&&(i.opacity=t.opacity),void 0!==t.transparent&&(i.transparent=t.transparent),void 0!==t.alphaTest&&(i.alphaTest=t.alphaTest),void 0!==t.depthTest&&(i.depthTest=t.depthTest),void 0!==t.depthWrite&&(i.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(i.colorWrite=t.colorWrite),void 0!==t.stencilWrite&&(i.stencilWrite=t.stencilWrite),void 0!==t.stencilWriteMask&&(i.stencilWriteMask=t.stencilWriteMask),void 0!==t.stencilFunc&&(i.stencilFunc=t.stencilFunc),void 0!==t.stencilRef&&(i.stencilRef=t.stencilRef),void 0!==t.stencilFuncMask&&(i.stencilFuncMask=t.stencilFuncMask),void 0!==t.stencilFail&&(i.stencilFail=t.stencilFail),void 0!==t.stencilZFail&&(i.stencilZFail=t.stencilZFail),void 0!==t.stencilZPass&&(i.stencilZPass=t.stencilZPass),void 0!==t.wireframe&&(i.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(i.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(i.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(i.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(i.rotation=t.rotation),1!==t.linewidth&&(i.linewidth=t.linewidth),void 0!==t.dashSize&&(i.dashSize=t.dashSize),void 0!==t.gapSize&&(i.gapSize=t.gapSize),void 0!==t.scale&&(i.scale=t.scale),void 0!==t.polygonOffset&&(i.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(i.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(i.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.dithering&&(i.dithering=t.dithering),void 0!==t.alphaToCoverage&&(i.alphaToCoverage=t.alphaToCoverage),void 0!==t.premultipliedAlpha&&(i.premultipliedAlpha=t.premultipliedAlpha),void 0!==t.visible&&(i.visible=t.visible),void 0!==t.toneMapped&&(i.toneMapped=t.toneMapped),void 0!==t.userData&&(i.userData=t.userData),void 0!==t.vertexColors&&("number"==typeof t.vertexColors?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),void 0!==t.uniforms)for(const r in t.uniforms){const e=t.uniforms[r]
switch(i.uniforms[r]={},e.type){case"t":i.uniforms[r].value=n(e.value)
break
case"c":i.uniforms[r].value=(new Wt).setHex(e.value)
break
case"v2":i.uniforms[r].value=(new Rt).fromArray(e.value)
break
case"v3":i.uniforms[r].value=(new se).fromArray(e.value)
break
case"v4":i.uniforms[r].value=(new Kt).fromArray(e.value)
break
case"m3":i.uniforms[r].value=(new Ct).fromArray(e.value)
break
case"m4":i.uniforms[r].value=(new Oe).fromArray(e.value)
break
default:i.uniforms[r].value=e.value}}if(void 0!==t.defines&&(i.defines=t.defines),void 0!==t.vertexShader&&(i.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(i.fragmentShader=t.fragmentShader),void 0!==t.extensions)for(const r in t.extensions)i.extensions[r]=t.extensions[r]
if(void 0!==t.shading&&(i.flatShading=1===t.shading),void 0!==t.size&&(i.size=t.size),void 0!==t.sizeAttenuation&&(i.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(i.map=n(t.map)),void 0!==t.matcap&&(i.matcap=n(t.matcap)),void 0!==t.alphaMap&&(i.alphaMap=n(t.alphaMap)),void 0!==t.bumpMap&&(i.bumpMap=n(t.bumpMap)),void 0!==t.bumpScale&&(i.bumpScale=t.bumpScale),void 0!==t.normalMap&&(i.normalMap=n(t.normalMap)),void 0!==t.normalMapType&&(i.normalMapType=t.normalMapType),void 0!==t.normalScale){let e=t.normalScale
!1===Array.isArray(e)&&(e=[e,e]),i.normalScale=(new Rt).fromArray(e)}return void 0!==t.displacementMap&&(i.displacementMap=n(t.displacementMap)),void 0!==t.displacementScale&&(i.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(i.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(i.roughnessMap=n(t.roughnessMap)),void 0!==t.metalnessMap&&(i.metalnessMap=n(t.metalnessMap)),void 0!==t.emissiveMap&&(i.emissiveMap=n(t.emissiveMap)),void 0!==t.emissiveIntensity&&(i.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(i.specularMap=n(t.specularMap)),void 0!==t.specularIntensityMap&&(i.specularIntensityMap=n(t.specularIntensityMap)),void 0!==t.specularColorMap&&(i.specularColorMap=n(t.specularColorMap)),void 0!==t.envMap&&(i.envMap=n(t.envMap)),void 0!==t.envMapIntensity&&(i.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(i.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(i.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(i.lightMap=n(t.lightMap)),void 0!==t.lightMapIntensity&&(i.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(i.aoMap=n(t.aoMap)),void 0!==t.aoMapIntensity&&(i.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(i.gradientMap=n(t.gradientMap)),void 0!==t.clearcoatMap&&(i.clearcoatMap=n(t.clearcoatMap)),void 0!==t.clearcoatRoughnessMap&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),void 0!==t.clearcoatNormalMap&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(i.clearcoatNormalScale=(new Rt).fromArray(t.clearcoatNormalScale)),void 0!==t.transmissionMap&&(i.transmissionMap=n(t.transmissionMap)),void 0!==t.thicknessMap&&(i.thicknessMap=n(t.thicknessMap)),void 0!==t.sheenColorMap&&(i.sheenColorMap=n(t.sheenColorMap)),void 0!==t.sheenRoughnessMap&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}}class Gc{static decodeText(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t)
let e=""
for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n])
try{return decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/")
return-1===e?"./":t.slice(0,e+1)}static resolveURL(t,e){return"string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Vc extends kn{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return(new this.constructor).copy(this)}toJSON(){const t=super.toJSON(this)
return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}Vc.prototype.isInstancedBufferGeometry=!0
class kc extends mc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new gc(r.manager)
s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e={},n={}
function i(t,i){if(void 0!==e[i])return e[i]
const r=t.interleavedBuffers[i],s=function(t,e){if(void 0!==n[e])return n[e]
const i=t.arrayBuffers[e],r=new Uint32Array(i).buffer
return n[e]=r,r}(t,r.buffer),a=Dt(r.type,s),o=new ca(a,r.stride)
return o.uuid=r.uuid,e[i]=o,o}const r=t.isInstancedBufferGeometry?new Vc:new kn,s=t.data.index
if(void 0!==s){const t=Dt(s.type,s.array)
r.setIndex(new Sn(t,1))}const a=t.data.attributes
for(const h in a){const e=a[h]
let n
if(e.isInterleavedBufferAttribute){const r=i(t.data,e.data)
n=new ua(r,e.itemSize,e.offset,e.normalized)}else{const t=Dt(e.type,e.array)
n=new(e.isInstancedBufferAttribute?Va:Sn)(t,e.itemSize,e.normalized)}void 0!==e.name&&(n.name=e.name),void 0!==e.usage&&n.setUsage(e.usage),void 0!==e.updateRange&&(n.updateRange.offset=e.updateRange.offset,n.updateRange.count=e.updateRange.count),r.setAttribute(h,n)}const o=t.data.morphAttributes
if(o)for(const h in o){const e=o[h],n=[]
for(let r=0,s=e.length;r<s;r++){const s=e[r]
let a
if(s.isInterleavedBufferAttribute){const e=i(t.data,s.data)
a=new ua(e,s.itemSize,s.offset,s.normalized)}else{const t=Dt(s.type,s.array)
a=new Sn(t,s.itemSize,s.normalized)}void 0!==s.name&&(a.name=s.name),n.push(a)}r.morphAttributes[h]=n}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0)
const l=t.data.groups||t.data.drawcalls||t.data.offsets
if(void 0!==l)for(let h=0,u=l.length;h!==u;++h){const t=l[h]
r.addGroup(t.start,t.count,t.materialIndex)}const c=t.data.boundingSphere
if(void 0!==c){const t=new se
void 0!==c.center&&t.fromArray(c.center),r.boundingSphere=new Ae(t,c.radius)}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}}const Wc={UVMapping:r,CubeReflectionMapping:s,CubeRefractionMapping:a,EquirectangularReflectionMapping:o,EquirectangularRefractionMapping:l,CubeUVReflectionMapping:c},jc={RepeatWrapping:h,ClampToEdgeWrapping:u,MirroredRepeatWrapping:d},Xc={NearestFilter:p,NearestMipmapNearestFilter:m,NearestMipmapLinearFilter:f,LinearFilter:g,LinearMipmapNearestFilter:v,LinearMipmapLinearFilter:y}
class qc extends mc{constructor(t){super(t),"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t)
const r=this,s=uc.get(t)
if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t)}),0),s
const a={}
a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,Object.assign(r.options,{colorSpaceConversion:"none"}))})).then((function(n){uc.add(t,n),e&&e(n),r.manager.itemEnd(t)})).catch((function(e){i&&i(e),r.manager.itemError(t),r.manager.itemEnd(t)})),r.manager.itemStart(t)}}let Yc
qc.prototype.isImageBitmapLoader=!0
const Jc={getContext:function(){return void 0===Yc&&(Yc=new(window.AudioContext||window.webkitAudioContext)),Yc},setContext:function(t){Yc=t}}
class Zc extends mc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new gc(this.manager)
s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{const t=n.slice(0)
Jc.getContext().decodeAudioData(t,(function(t){e(t)}))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}}class Kc extends Hc{constructor(t,e,n=1){super(void 0,n)
const i=(new Wt).set(t),r=(new Wt).set(e),s=new se(i.r,i.g,i.b),a=new se(r.r,r.g,r.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75)
this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}}Kc.prototype.isHemisphereLightProbe=!0
class Qc extends Hc{constructor(t,e=1){super(void 0,e)
const n=(new Wt).set(t)
this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Qc.prototype.isAmbientLightProbe=!0
const $c=new Oe,th=new Oe,eh=new Oe
class nh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0
if(this.autoStart&&!this.running)return this.start(),0
if(this.running){const e=ih()
t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ih(){return("undefined"==typeof performance?Date:performance).now()}const rh=new se,sh=new re,ah=new se,oh=new se
class lh extends ln{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.")
if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.")
this._startedAt=this.context.currentTime+t
const e=this.context.createBufferSource()
return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this
console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this
console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0])
for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t])
this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput())
return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0])
for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t])
this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput())
return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),!0===this._connected?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this
console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this
console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const ch=new se,hh=new re,uh=new se,dh=new se
class ph{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0
const e=this.getFrequencyData()
for(let n=0;n<e.length;n++)t+=e[n]
return t/e.length}}class mh{constructor(t,e,n){let i,r,s
switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5
break
case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*n)
break
default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i
let s=this.cumulativeWeight
if(0===s){for(let t=0;t!==i;++t)n[r+t]=n[t]
s=e}else{s+=e
const t=e/s
this._mixBufferRegion(n,r,0,t,i)}this.cumulativeWeight=s}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex
0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding
if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const t=e*this._origIndex
this._mixBufferRegion(n,i,t,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e)
for(let o=e,l=e+e;o!==l;++o)if(n[o]!==n[o+e]){a.setValue(n,i)
break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex
t.getValue(e,i)
for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n]
this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=3*this.valueSize
this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize
for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize
for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]}_slerp(t,e,n,i){re.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const s=this._workIndex*r
re.multiplyQuaternionsFlat(t,s,t,e,t,n),re.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){const s=1-i
for(let a=0;a!==r;++a){const r=e+a
t[r]=t[r]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){const r=e+s
t[r]=t[r]+t[n+s]*i}}}const fh=new RegExp("[\\[\\]\\.:\\/]","g"),gh="[^\\[\\]\\.:\\/]",vh="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",yh=/((?:WC+[\/:])*)/.source.replace("WC",gh),_h=/(WCOD+)?/.source.replace("WCOD",vh),xh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Mh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),bh=new RegExp("^"+yh+_h+xh+Mh+"$"),wh=["material","materials","bones"]
class Eh{constructor(t,e,n){this.path=e,this.parsedPath=n||Eh.parseTrackName(e),this.node=Eh.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Eh.Composite(t,e,n):new Eh(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fh,"")}static parseTrackName(t){const e=bh.exec(t)
if(null===e)throw new Error("PropertyBinding: Cannot parse trackName: "+t)
const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".")
if(void 0!==i&&-1!==i){const t=n.nodeName.substring(i+1);-1!==wh.indexOf(t)&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=t)}if(null===n.propertyName||0===n.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t)
return n}static findNode(t,e){if(void 0===e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t
if(t.skeleton){const n=t.skeleton.getBoneByName(e)
if(void 0!==n)return n}if(t.children){const n=function(t){for(let i=0;i<t.length;i++){const r=t[i]
if(r.name===e||r.uuid===e)return r
const s=n(r.children)
if(s)return s}return null},i=n(t.children)
if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty
for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty
for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty
for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]
this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty
for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]
this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node
const e=this.parsedPath,n=e.objectName,i=e.propertyName
let r=e.propertyIndex
if(t||(t=Eh.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")
if(n){let i=e.objectIndex
switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this)
if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this)
t=t.material.materials
break
case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this)
t=t.skeleton.bones
for(let e=0;e<t.length;e++)if(t[e].name===i){i=e
break}break
default:if(void 0===t[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this)
t=t[n]}if(void 0!==i){if(void 0===t[i])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t)
t=t[i]}}const s=t[i]
if(void 0===s){const n=e.nodeName
return void console.error("THREE.PropertyBinding: Trying to update property for track: "+n+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None
this.targetObject=t,void 0!==t.needsUpdate?a=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(a=this.Versioning.MatrixWorldNeedsUpdate)
let o=this.BindingType.Direct
if(void 0!==r){if("morphTargetInfluences"===i){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this)
if(!t.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this)
if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this)
void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i
this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Eh.Composite=class{constructor(t,e,n){const i=n||Eh.parseTrackName(e)
this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind()
const n=this._targetGroup.nCachedObjects_,i=this._bindings[n]
void 0!==i&&i.getValue(t,e)}setValue(t,e){const n=this._bindings
for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings
for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings
for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Eh.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Eh.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Eh.prototype.GetterByBindingType=[Eh.prototype._getValue_direct,Eh.prototype._getValue_array,Eh.prototype._getValue_arrayElement,Eh.prototype._getValue_toArray],Eh.prototype.SetterByBindingTypeAndVersioning=[[Eh.prototype._setValue_direct,Eh.prototype._setValue_direct_setNeedsUpdate,Eh.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Eh.prototype._setValue_array,Eh.prototype._setValue_array_setNeedsUpdate,Eh.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Eh.prototype._setValue_arrayElement,Eh.prototype._setValue_arrayElement_setNeedsUpdate,Eh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Eh.prototype._setValue_fromArray,Eh.prototype._setValue_fromArray_setNeedsUpdate,Eh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]
class Sh{constructor(){this.uuid=xt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0
const t={}
this._indicesByUUID=t
for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n
this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={}
const e=this
this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length
let a,o=t.length,l=this.nCachedObjects_
for(let c=0,h=arguments.length;c!==h;++c){const h=arguments[c],u=h.uuid
let d=e[u]
if(void 0===d){d=o++,e[u]=d,t.push(h)
for(let t=0,e=s;t!==e;++t)r[t].push(new Eh(h,n[t],i[t]))}else if(d<l){a=t[d]
const o=--l,c=t[o]
e[c.uuid]=d,t[d]=c,e[u]=o,t[o]=h
for(let t=0,e=s;t!==e;++t){const e=r[t],s=e[o]
let a=e[d]
e[d]=s,void 0===a&&(a=new Eh(h,n[t],i[t])),e[o]=a}}else t[d]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length
let r=this.nCachedObjects_
for(let s=0,a=arguments.length;s!==a;++s){const a=arguments[s],o=a.uuid,l=e[o]
if(void 0!==l&&l>=r){const s=r++,c=t[s]
e[c.uuid]=l,t[l]=c,e[o]=s,t[s]=a
for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[s],r=e[l]
e[l]=i,e[s]=r}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length
let r=this.nCachedObjects_,s=t.length
for(let a=0,o=arguments.length;a!==o;++a){const o=arguments[a].uuid,l=e[o]
if(void 0!==l)if(delete e[o],l<r){const a=--r,o=t[a],c=--s,h=t[c]
e[o.uuid]=l,t[l]=o,e[h.uuid]=a,t[a]=h,t.pop()
for(let t=0,e=i;t!==e;++t){const e=n[t],i=e[a],r=e[c]
e[l]=i,e[a]=r,e.pop()}}else{const r=--s,a=t[r]
r>0&&(e[a.uuid]=l),t[l]=a,t.pop()
for(let t=0,e=i;t!==e;++t){const e=n[t]
e[l]=e[r],e.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath
let i=n[t]
const r=this._bindings
if(void 0!==i)return r[i]
const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l)
i=r.length,n[t]=i,s.push(t),a.push(e),r.push(h)
for(let u=c,d=o.length;u!==d;++u){const n=o[u]
h[u]=new Eh(n,t,e)}return h}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t]
if(void 0!==n){const i=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a]
e[t[a]]=n,s[n]=o,s.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}Sh.prototype.isAnimationObjectGroup=!0
class Th{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i
const r=e.tracks,s=r.length,a=new Array(s),o={endingStart:nt,endingEnd:nt}
for(let l=0;l!==s;++l){const t=r[l].createInterpolant(null)
a[l]=t,t.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const n=this._clip.duration,i=t._clip.duration,r=i/n,s=n/i
t.warp(1,r,e),this.warp(s,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant
return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,s=this.timeScale
let a=this._timeScaleInterpolant
null===a&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a)
const o=a.parameterPositions,l=a.sampleValues
return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){const t=this._timeScaleInterpolant
return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t)
const r=this._startTime
if(null!==r){const i=(t-r)*n
if(i<0||0===n)return
this._startTime=null,e=n*i}e*=this._updateTimeScale(t)
const s=this._updateTime(e),a=this._updateWeight(t)
if(a>0){const t=this._interpolants,e=this._propertyBindings
if(this.blendMode===st)for(let n=0,i=t.length;n!==i;++n)t[n].evaluate(s),e[n].accumulateAdditive(a)
else for(let n=0,r=t.length;n!==r;++n)t[n].evaluate(s),e[n].accumulate(i,a)}}_updateWeight(t){let e=0
if(this.enabled){e=this.weight
const n=this._weightInterpolant
if(null!==n){const i=n.evaluate(t)[0]
e*=i,t>n.parameterPositions[1]&&(this.stopFading(),0===i&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0
if(!this.paused){e=this.timeScale
const n=this._timeScaleInterpolant
null!==n&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop
let i=this.time+t,r=this._loopCount
const s=2202===n
if(0===t)return-1===r?i:s&&1==(1&r)?e-i:i
if(2200===n){-1===r&&(this._loopCount=0,this._setEndings(!0,!0,!1))
t:{if(i>=e)i=e
else{if(!(i<0)){this.time=i
break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(-1===r&&(t>=0?(r=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),i>=e||i<0){const n=Math.floor(i/e)
i-=e*n,r+=Math.abs(n)
const a=this.repetitions-r
if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1})
else{if(1===a){const e=t<0
this._setEndings(e,!e,s)}else this._setEndings(!1,!1,s)
this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:n})}}else this.time=i
if(s&&1==(1&r))return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings
n?(i.endingStart=it,i.endingEnd=it):(i.endingStart=t?this.zeroSlopeAtStart?it:nt:rt,i.endingEnd=e?this.zeroSlopeAtEnd?it:nt:rt)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time
let s=this._weightInterpolant
null===s&&(s=i._lendControlInterpolant(),this._weightInterpolant=s)
const a=s.parameterPositions,o=s.sampleValues
return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}class Ah extends ft{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName
let c=l[o]
void 0===c&&(c={},l[o]=c)
for(let h=0;h!==r;++h){const t=i[h],r=t.name
let l=c[r]
if(void 0!==l)++l.referenceCount,s[h]=l
else{if(l=s[h],void 0!==l){null===l._cacheIndex&&(++l.referenceCount,this._addInactiveBinding(l,o,r))
continue}const i=e&&e._propertyBindings[h].binding.parsedPath
l=new mh(Eh.create(n,r,i),t.ValueTypeName,t.getValueSize()),++l.referenceCount,this._addInactiveBinding(l,o,r),s[h]=l}a[h].resultBuffer=l.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){const e=(t._localRoot||this._root).uuid,n=t._clip.uuid,i=this._actionsByClip[n]
this._bindAction(t,i&&i.knownActions[0]),this._addInactiveAction(t,n,e)}const e=t._propertyBindings
for(let t=0,n=e.length;t!==n;++t){const n=e[t]
0==n.useCount++&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings
for(let t=0,n=e.length;t!==n;++t){const n=e[t]
0==--n.useCount&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0
const t=this
this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex
return null!==e&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip
let s=r[e]
if(void 0===s)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s
else{const e=s.knownActions
t._byClipCacheIndex=e.length,e.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex
n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null
const r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=t._byClipCacheIndex
l._byClipCacheIndex=c,o[c]=l,o.pop(),t._byClipCacheIndex=null,delete a.actionByRoot[(t._localRoot||this._root).uuid],0===o.length&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings
for(let n=0,i=e.length;n!==i;++n){const t=e[n]
0==--t.referenceCount&&this._removeInactiveBinding(t)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i]
t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i]
t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings
let s=i[e]
void 0===s&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex
o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],0===Object.keys(a).length&&delete s[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i]
t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i]
t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++
let n=t[e]
return void 0===n&&(n=new $l(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i]
t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid
let s="string"==typeof t?cc.findByName(i,t):t
const a=null!==s?s.uuid:t,o=this._actionsByClip[a]
let l=null
if(void 0===n&&(n=null!==s?s.blendMode:2500),void 0!==o){const t=o.actionByRoot[r]
if(void 0!==t&&t.blendMode===n)return t
l=o.knownActions[0],null===s&&(s=l._clip)}if(null===s)return null
const c=new Th(this,s,e,n)
return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(t,e){const n=e||this._root,i=n.uuid,r="string"==typeof t?cc.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s]
return void 0!==a&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions
for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop()
return this}update(t){t*=this.timeScale
const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1
for(let l=0;l!==n;++l)e[l]._update(i,t,r,s)
const a=this._bindings,o=this._nActiveBindings
for(let l=0;l!==o;++l)a[l].apply(s)
return this}setTime(t){this.time=0
for(let e=0;e<this._actions.length;e++)this._actions[e].time=0
return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n]
if(void 0!==r){const t=r.knownActions
for(let n=0,i=t.length;n!==i;++n){const i=t[n]
this._deactivateAction(i)
const r=i._cacheIndex,s=e[e.length-1]
i._cacheIndex=null,i._byClipCacheIndex=null,s._cacheIndex=r,e[r]=s,e.pop(),this._removeInactiveBindingsForAction(i)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip
for(const r in n){const t=n[r].actionByRoot[e]
void 0!==t&&(this._deactivateAction(t),this._removeInactiveAction(t))}const i=this._bindingsByRootAndName[e]
if(void 0!==i)for(const r in i){const t=i[r]
t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(t,e){const n=this.existingAction(t,e)
null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Ah.prototype._controlInterpolantsResultBuffer=new Float32Array(1)
class Rh{constructor(t){"string"==typeof t&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}clone(){return new Rh(void 0===this.value.clone?this.value:this.value.clone())}}class Ch extends ca{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t)
return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t)
return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}Ch.prototype.isInstancedInterleavedBuffer=!0
class Lh{constructor(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){!0===t&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}function Ph(t,e){return t.distance-e.distance}function Dh(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),!0===i){const i=t.children
for(let t=0,r=i.length;t<r;t++)Dh(i[t],e,n,!0)}}Lh.prototype.isGLBufferAttribute=!0
const Ih=new Rt
class Nh{constructor(t=new Rt(1/0,1/0),e=new Rt(-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty()
for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e])
return this}setFromCenterAndSize(t,e){const n=Ih.copy(e).multiplyScalar(.5)
return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ih.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Nh.prototype.isBox2=!0
const Uh=new se,Oh=new se
class Fh{constructor(t=new se,e=new se){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Uh.subVectors(t,this.start),Oh.subVectors(this.end,this.start)
const n=Oh.dot(Oh)
let i=Oh.dot(Uh)/n
return e&&(i=Mt(i,0,1)),i}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e)
return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return(new this.constructor).copy(this)}}const Bh=new se,Hh=new se,zh=new Oe,Gh=new Oe
class Vh extends io{constructor(t){const e=kh(t),n=new kn,i=[],r=[],s=new Wt(0,0,1),a=new Wt(0,1,0)
for(let o=0;o<e.length;o++){const t=e[o]
t.parent&&t.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Nn(i,3)),n.setAttribute("color",new Nn(r,3)),super(n,new Ya({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position")
Gh.copy(this.root.matrixWorld).invert()
for(let r=0,s=0;r<e.length;r++){const t=e[r]
t.parent&&t.parent.isBone&&(zh.multiplyMatrices(Gh,t.matrixWorld),Hh.setFromMatrixPosition(zh),i.setXYZ(s,Hh.x,Hh.y,Hh.z),zh.multiplyMatrices(Gh,t.parent.matrixWorld),Hh.setFromMatrixPosition(zh),i.setXYZ(s+1,Hh.x,Hh.y,Hh.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function kh(t){const e=[]
!0===t.isBone&&e.push(t)
for(let n=0;n<t.children.length;n++)e.push.apply(e,kh(t.children[n]))
return e}const Wh=new se,jh=new Wt,Xh=new Wt
class qh extends io{constructor(t=10,e=10,n=4473924,i=8947848){n=new Wt(n),i=new Wt(i)
const r=e/2,s=t/e,a=t/2,o=[],l=[]
for(let h=0,u=0,d=-a;h<=e;h++,d+=s){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a)
const t=h===r?n:i
t.toArray(l,u),u+=3,t.toArray(l,u),u+=3,t.toArray(l,u),u+=3,t.toArray(l,u),u+=3}const c=new kn
c.setAttribute("position",new Nn(o,3)),c.setAttribute("color",new Nn(l,3)),super(c,new Ya({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}const Yh=new se,Jh=new se,Zh=new se,Kh=new se,Qh=new mi
function $h(t,e,n,i,r,s,a){Kh.set(r,s,a).unproject(i)
const o=e[t]
if(void 0!==o){const t=n.getAttribute("position")
for(let e=0,n=o.length;e<n;e++)t.setXYZ(o[e],Kh.x,Kh.y,Kh.z)}}const tu=new le
class eu extends io{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new kn
r.setIndex(new Sn(n,1)),r.setAttribute("position",new Sn(i,3)),super(r,new Ya({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&tu.setFromObject(this.object),tu.isEmpty())return
const e=tu.min,n=tu.max,i=this.geometry.attributes.position,r=i.array
r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t){return io.prototype.copy.call(this,t),this.object=t.object,this}}const nu=new se
let iu,ru
class su extends io{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=new kn
n.setAttribute("position",new Nn(e,3)),n.setAttribute("color",new Nn([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(n,new Ya({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(t,e,n){const i=new Wt,r=this.geometry.attributes.color.array
return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const au=new ArrayBuffer(4),ou=new Float32Array(au),lu=new Uint32Array(au),cu=new Uint32Array(512),hu=new Uint32Array(512)
for(let fu=0;fu<256;++fu){const t=fu-127
t<-27?(cu[fu]=0,cu[256|fu]=32768,hu[fu]=24,hu[256|fu]=24):t<-14?(cu[fu]=1024>>-t-14,cu[256|fu]=1024>>-t-14|32768,hu[fu]=-t-1,hu[256|fu]=-t-1):t<=15?(cu[fu]=t+15<<10,cu[256|fu]=t+15<<10|32768,hu[fu]=13,hu[256|fu]=13):t<128?(cu[fu]=31744,cu[256|fu]=64512,hu[fu]=24,hu[256|fu]=24):(cu[fu]=31744,cu[256|fu]=64512,hu[fu]=13,hu[256|fu]=13)}const uu=new Uint32Array(2048),du=new Uint32Array(64),pu=new Uint32Array(64)
for(let fu=1;fu<1024;++fu){let t=fu<<13,e=0
for(;0==(8388608&t);)t<<=1,e-=8388608
t&=-8388609,e+=947912704,uu[fu]=t|e}for(let fu=1024;fu<2048;++fu)uu[fu]=939524096+(fu-1024<<13)
for(let fu=1;fu<31;++fu)du[fu]=fu<<23
du[31]=1199570944,du[32]=2147483648
for(let fu=33;fu<63;++fu)du[fu]=2147483648+(fu-32<<23)
du[63]=3347054592
for(let fu=1;fu<64;++fu)32!==fu&&(pu[fu]=1024)
vo.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(vo.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t},Bo.prototype.fromPoints=function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)},qh.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Vh.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},mc.prototype.extractUrlBase=function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Gc.extractUrlBase(t)},mc.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},Nh.prototype.center=function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},Nh.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Nh.prototype.isIntersectionBox=function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},Nh.prototype.size=function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)},le.prototype.center=function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},le.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},le.prototype.isIntersectionBox=function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},le.prototype.isIntersectionSphere=function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},le.prototype.size=function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)},Xe.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")},Ae.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Ti.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)},Fh.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)},Ct.prototype.flattenToArrayOffset=function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},Ct.prototype.multiplyVector3=function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},Ct.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},Ct.prototype.applyToBufferAttribute=function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},Ct.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},Ct.prototype.getInverse=function(t){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()},Oe.prototype.extractPosition=function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},Oe.prototype.flattenToArrayOffset=function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},Oe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),(new se).setFromMatrixColumn(this,3)},Oe.prototype.setRotationFromQuaternion=function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},Oe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},Oe.prototype.multiplyVector3=function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},Oe.prototype.multiplyVector4=function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},Oe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},Oe.prototype.rotateAxis=function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},Oe.prototype.crossVector=function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},Oe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},Oe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},Oe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},Oe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},Oe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},Oe.prototype.applyToBufferAttribute=function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},Oe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},Oe.prototype.makeFrustum=function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)},Oe.prototype.getInverse=function(t){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(t).invert()},wi.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)},re.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)},re.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Ue.prototype.isIntersectionBox=function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},Ue.prototype.isIntersectionPlane=function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},Ue.prototype.isIntersectionSphere=function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},_n.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},_n.prototype.barycoordFromPoint=function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},_n.prototype.midpoint=function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},_n.prototypenormal=function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},_n.prototype.plane=function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)},_n.barycoordFromPoint=function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),_n.getBarycoord(t,e,n,i,r)},_n.normal=function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),_n.getNormal(t,e,n,i)},Ko.prototype.extractAllPoints=function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},Ko.prototype.extrude=function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Sl(this,t)},Ko.prototype.makeGeometry=function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ll(this,t)},Rt.prototype.fromAttribute=function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},Rt.prototype.distanceToManhattan=function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},Rt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},se.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},se.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},se.prototype.getPositionFromMatrix=function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},se.prototype.getScaleFromMatrix=function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},se.prototype.getColumnFromMatrix=function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},se.prototype.applyProjection=function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},se.prototype.fromAttribute=function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},se.prototype.distanceToManhattan=function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},se.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Kt.prototype.fromAttribute=function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},Kt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},ln.prototype.getChildByName=function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},ln.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},ln.prototype.translate=function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},ln.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},ln.prototype.applyMatrix=function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)},Object.defineProperties(ln.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),oi.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(oi.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Oa.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},fi.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),void 0!==e&&(this.filmGauge=e),this.setFocalLength(t)},Object.defineProperties(Mc.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}}),Object.defineProperties(Sn.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===dt},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(dt)}}}),Sn.prototype.setDynamic=function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(!0===t?dt:ut),this},Sn.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Sn.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},kn.prototype.addIndex=function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},kn.prototype.addAttribute=function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?"index"===t?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new Sn(arguments[1],arguments[2])))},kn.prototype.addDrawCall=function(t,e,n){void 0!==n&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},kn.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},kn.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},kn.prototype.removeAttribute=function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},kn.prototype.applyMatrix=function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)},Object.defineProperties(kn.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),ca.prototype.setDynamic=function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(!0===t?dt:ut),this},ca.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Sl.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Sl.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Sl.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},la.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},Rh.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(Mn.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Wt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===t}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(pi.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}}),ra.prototype.clearTarget=function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},ra.prototype.animate=function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},ra.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},ra.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},ra.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},ra.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},ra.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},ra.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},ra.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},ra.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},ra.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},ra.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},ra.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},ra.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},ra.prototype.enableScissorTest=function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},ra.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},ra.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},ra.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},ra.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},ra.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},ra.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},ra.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},ra.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},ra.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},ra.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(ra.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=!0===t?ot:at}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}}),Object.defineProperties(qs.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(Qt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}}),lh.prototype.load=function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.")
const e=this
return(new Zc).load(t,(function(t){e.setBuffer(t)})),this},ph.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},vi.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)},vi.prototype.clear=function(t,e,n,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(t,e,n,i)},Xt.crossOrigin=void 0,Xt.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.")
const r=new xc
r.setCrossOrigin(this.crossOrigin)
const s=r.load(t,n,void 0,i)
return e&&(s.mapping=e),s},Xt.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.")
const r=new yc
r.setCrossOrigin(this.crossOrigin)
const s=r.load(t,n,void 0,i)
return e&&(s.mapping=e),s},Xt.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Xt.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}
const mu={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}}
"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:n}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=n),e.ACESFilmicToneMapping=4,e.AddEquation=i,e.AddOperation=2,e.AdditiveAnimationBlendMode=st,e.AdditiveBlending=2,e.AlphaFormat=1021,e.AlwaysDepth=1,e.AlwaysStencilFunc=519,e.AmbientLight=Oc,e.AmbientLightProbe=Qc,e.AnimationClip=cc,e.AnimationLoader=class extends mc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=new gc(this.manager)
s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(JSON.parse(n)))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}parse(t){const e=[]
for(let n=0;n<t.length;n++){const i=cc.parse(t[n])
e.push(i)}return e}},e.AnimationMixer=Ah,e.AnimationObjectGroup=Sh,e.AnimationUtils=Zl,e.ArcCurve=_o,e.ArrayCamera=Ks,e.ArrowHelper=class extends ln{constructor(t=new se(0,0,1),e=new se(0,0,0),n=1,i=16776960,r=.2*n,s=.2*r){super(),this.type="ArrowHelper",void 0===iu&&(iu=new kn,iu.setAttribute("position",new Nn([0,0,0,0,1,0],3)),ru=new Vo(0,.5,1,5,1),ru.translate(0,-.5,0)),this.position.copy(e),this.line=new to(iu,new Ya({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new oi(ru,new bn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,s)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1)
else if(t.y<-.99999)this.quaternion.set(1,0,0,0)
else{nu.set(t.z,0,-t.x).normalize()
const e=Math.acos(t.y)
this.quaternion.setFromAxisAngle(nu,e)}}setLength(t,e=.2*t,n=.2*e){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}},e.Audio=lh,e.AudioAnalyser=ph,e.AudioContext=Jc,e.AudioListener=class extends ln{constructor(){super(),this.type="AudioListener",this.context=Jc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new nh}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t)
const e=this.context.listener,n=this.up
if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(rh,sh,ah),oh.set(0,0,-1).applyQuaternion(sh),e.positionX){const t=this.context.currentTime+this.timeDelta
e.positionX.linearRampToValueAtTime(rh.x,t),e.positionY.linearRampToValueAtTime(rh.y,t),e.positionZ.linearRampToValueAtTime(rh.z,t),e.forwardX.linearRampToValueAtTime(oh.x,t),e.forwardY.linearRampToValueAtTime(oh.y,t),e.forwardZ.linearRampToValueAtTime(oh.z,t),e.upX.linearRampToValueAtTime(n.x,t),e.upY.linearRampToValueAtTime(n.y,t),e.upZ.linearRampToValueAtTime(n.z,t)}else e.setPosition(rh.x,rh.y,rh.z),e.setOrientation(oh.x,oh.y,oh.z,n.x,n.y,n.z)}},e.AudioLoader=Zc,e.AxesHelper=su,e.AxisHelper=class extends su{constructor(t){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),super(t)}},e.BackSide=1,e.BasicDepthPacking=3200,e.BasicShadowMap=0,e.BinaryTextureLoader=class extends _c{constructor(t){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),super(t)}},e.Bone=Fa,e.BooleanKeyframeTrack=nc,e.BoundingBoxHelper=class extends eu{constructor(t,e){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),super(t,e)}},e.Box2=Nh,e.Box3=le,e.Box3Helper=class extends io{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new kn
i.setIndex(new Sn(n,1)),i.setAttribute("position",new Nn([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new Ya({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box
e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}},e.BoxBufferGeometry=ci,e.BoxGeometry=ci,e.BoxHelper=eu,e.BufferAttribute=Sn,e.BufferGeometry=kn,e.BufferGeometryLoader=kc,e.ByteType=1010,e.Cache=uc,e.Camera=mi,e.CameraHelper=class extends io{constructor(t){const e=new kn,n=new Ya({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},a=new Wt(16755200),o=new Wt(16711680),l=new Wt(43775),c=new Wt(16777215),h=new Wt(3355443)
function u(t,e,n){d(t,n),d(e,n)}function d(t,e){i.push(0,0,0),r.push(e.r,e.g,e.b),void 0===s[t]&&(s[t]=[]),s[t].push(i.length/3-1)}u("n1","n2",a),u("n2","n4",a),u("n4","n3",a),u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a),u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",o),u("p","n2",o),u("p","n3",o),u("p","n4",o),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",c),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h),e.setAttribute("position",new Nn(i,3)),e.setAttribute("color",new Nn(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}update(){const t=this.geometry,e=this.pointMap
Qh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$h("c",e,t,Qh,0,0,-1),$h("t",e,t,Qh,0,0,1),$h("n1",e,t,Qh,-1,-1,-1),$h("n2",e,t,Qh,1,-1,-1),$h("n3",e,t,Qh,-1,1,-1),$h("n4",e,t,Qh,1,1,-1),$h("f1",e,t,Qh,-1,-1,1),$h("f2",e,t,Qh,1,-1,1),$h("f3",e,t,Qh,-1,1,1),$h("f4",e,t,Qh,1,1,1),$h("u1",e,t,Qh,.7,1.1,-1),$h("u2",e,t,Qh,-.7,1.1,-1),$h("u3",e,t,Qh,0,2,-1),$h("cf1",e,t,Qh,-1,0,1),$h("cf2",e,t,Qh,1,0,1),$h("cf3",e,t,Qh,0,-1,1),$h("cf4",e,t,Qh,0,1,1),$h("cn1",e,t,Qh,-1,0,-1),$h("cn2",e,t,Qh,1,0,-1),$h("cn3",e,t,Qh,0,-1,-1),$h("cn4",e,t,Qh,0,1,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},e.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")},e.CanvasTexture=go,e.CapsuleBufferGeometry=zo,e.CapsuleGeometry=zo,e.CatmullRomCurve3=So,e.CineonToneMapping=3,e.CircleBufferGeometry=Go,e.CircleGeometry=Go,e.ClampToEdgeWrapping=u,e.Clock=nh,e.Color=Wt,e.ColorKeyframeTrack=ic,e.ColorManagement=Ft,e.CompressedTexture=fo,e.CompressedTextureLoader=class extends mc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=[],a=new fo,o=new gc(this.manager)
o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials)
let l=0
function c(c){o.load(t[c],(function(t){const n=r.parse(t,!0)
s[c]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},l+=1,6===l&&(1===n.mipmapCount&&(a.minFilter=g),a.image=s,a.format=n.format,a.needsUpdate=!0,e&&e(a))}),n,i)}if(Array.isArray(t))for(let h=0,u=t.length;h<u;++h)c(h)
else o.load(t,(function(t){const n=r.parse(t,!0)
if(n.isCubemap){const t=n.mipmaps.length/n.mipmapCount
for(let e=0;e<t;e++){s[e]={mipmaps:[]}
for(let t=0;t<n.mipmapCount;t++)s[e].mipmaps.push(n.mipmaps[e*n.mipmapCount+t]),s[e].format=n.format,s[e].width=n.width,s[e].height=n.height}a.image=s}else a.image.width=n.width,a.image.height=n.height,a.mipmaps=n.mipmaps
1===n.mipmapCount&&(a.minFilter=g),a.format=n.format,a.needsUpdate=!0,e&&e(a)}),n,i)
return a}},e.ConeBufferGeometry=ko,e.ConeGeometry=ko,e.CubeCamera=vi,e.CubeReflectionMapping=s,e.CubeRefractionMapping=a,e.CubeTexture=yi,e.CubeTextureLoader=yc,e.CubeUVReflectionMapping=c,e.CubicBezierCurve=Co,e.CubicBezierCurve3=Lo,e.CubicInterpolant=Ql,e.CullFaceBack=1,e.CullFaceFront=2,e.CullFaceFrontBack=3,e.CullFaceNone=0,e.Curve=vo,e.CurvePath=Fo,e.CustomBlending=5,e.CustomToneMapping=5,e.CylinderBufferGeometry=Vo,e.CylinderGeometry=Vo,e.Cylindrical=class{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return(new this.constructor).copy(this)}},e.Data3DTexture=ee,e.DataArrayTexture=$t,e.DataTexture=Ba,e.DataTexture2DArray=class extends $t{constructor(t,e,n,i){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(t,e,n,i)}},e.DataTexture3D=class extends ee{constructor(t,e,n,i){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(t,e,n,i)}},e.DataTextureLoader=_c,e.DataUtils=class{static toHalfFloat(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Mt(t,-65504,65504),ou[0]=t
const e=lu[0],n=e>>23&511
return cu[n]+((8388607&e)>>hu[n])}static fromHalfFloat(t){const e=t>>10
return lu[0]=uu[pu[e]+(1023&t)]+du[e],ou[0]}},e.DecrementStencilOp=7683,e.DecrementWrapStencilOp=34056,e.DefaultLoadingManager=pc,e.DepthFormat=T,e.DepthStencilFormat=A,e.DepthTexture=ea,e.DirectionalLight=Uc,e.DirectionalLightHelper=class extends ln{constructor(t,e,n){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,void 0===e&&(e=1)
let i=new kn
i.setAttribute("position",new Nn([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3))
const r=new Ya({fog:!1,toneMapped:!1})
this.lightPlane=new to(i,r),this.add(this.lightPlane),i=new kn,i.setAttribute("position",new Nn([0,0,0,0,0,1],3)),this.targetLine=new to(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Yh.setFromMatrixPosition(this.light.matrixWorld),Jh.setFromMatrixPosition(this.light.target.matrixWorld),Zh.subVectors(Jh,Yh),this.lightPlane.lookAt(Jh),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Jh),this.targetLine.scale.z=Zh.length()}},e.DiscreteInterpolant=tc,e.DodecahedronBufferGeometry=jo,e.DodecahedronGeometry=jo,e.DoubleSide=2,e.DstAlphaFactor=206,e.DstColorFactor=208,e.DynamicBufferAttribute=class extends Sn{constructor(t,e){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),super(t,e),this.setUsage(dt)}},e.DynamicCopyUsage=35050,e.DynamicDrawUsage=dt,e.DynamicReadUsage=35049,e.EdgesGeometry=Zo,e.EdgesHelper=class extends io{constructor(t,e){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),super(new Zo(t.geometry),new Ya({color:void 0!==e?e:16777215}))}},e.EllipseCurve=yo,e.EqualDepth=4,e.EqualStencilFunc=514,e.EquirectangularReflectionMapping=o,e.EquirectangularRefractionMapping=l,e.Euler=Xe,e.EventDispatcher=ft,e.ExtrudeBufferGeometry=Sl,e.ExtrudeGeometry=Sl,e.FaceColors=1,e.FileLoader=gc,e.FlatShading=1,e.Float16BufferAttribute=In,e.Float32Attribute=class extends Nn{constructor(t,e){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),super(t,e)}},e.Float32BufferAttribute=Nn,e.Float64Attribute=class extends Un{constructor(t,e){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),super(t,e)}},e.Float64BufferAttribute=Un,e.FloatType=b,e.Fog=oa,e.FogExp2=aa,e.Font=function(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")},e.FontLoader=function(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")},e.FramebufferTexture=mo,e.FrontSide=0,e.Frustum=Ti,e.GLBufferAttribute=Lh,e.GLSL1="100",e.GLSL3=pt,e.GreaterDepth=6,e.GreaterEqualDepth=5,e.GreaterEqualStencilFunc=518,e.GreaterStencilFunc=516,e.GridHelper=qh,e.Group=Qs,e.HalfFloatType=w,e.HemisphereLight=bc,e.HemisphereLightHelper=class extends ln{constructor(t,e,n){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n
const i=new Rl(e)
i.rotateY(.5*Math.PI),this.material=new bn({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0)
const r=i.getAttribute("position"),s=new Float32Array(3*r.count)
i.setAttribute("color",new Sn(s,3)),this.add(new oi(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0]
if(void 0!==this.color)this.material.color.set(this.color)
else{const e=t.geometry.getAttribute("color")
jh.copy(this.light.color),Xh.copy(this.light.groundColor)
for(let t=0,n=e.count;t<n;t++){const i=t<n/2?jh:Xh
e.setXYZ(t,i.r,i.g,i.b)}e.needsUpdate=!0}t.lookAt(Wh.setFromMatrixPosition(this.light.matrixWorld).negate())}},e.HemisphereLightProbe=Kc,e.IcosahedronBufferGeometry=Al,e.IcosahedronGeometry=Al,e.ImageBitmapLoader=qc,e.ImageLoader=vc,e.ImageUtils=Xt,e.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},e.IncrementStencilOp=7682,e.IncrementWrapStencilOp=34055,e.InstancedBufferAttribute=Va,e.InstancedBufferGeometry=Vc,e.InstancedInterleavedBuffer=Ch,e.InstancedMesh=qa,e.Int16Attribute=class extends Cn{constructor(t,e){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),super(t,e)}},e.Int16BufferAttribute=Cn,e.Int32Attribute=class extends Pn{constructor(t,e){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),super(t,e)}},e.Int32BufferAttribute=Pn,e.Int8Attribute=class extends Tn{constructor(t,e){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),super(t,e)}},e.Int8BufferAttribute=Tn,e.IntType=1013,e.InterleavedBuffer=ca,e.InterleavedBufferAttribute=ua,e.Interpolant=Kl,e.InterpolateDiscrete=$,e.InterpolateLinear=tt,e.InterpolateSmooth=et,e.InvertStencilOp=5386,e.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")},e.KeepStencilOp=ht,e.KeyframeTrack=ec,e.LOD=La,e.LatheBufferGeometry=Ho,e.LatheGeometry=Ho,e.Layers=qe,e.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")},e.LessDepth=2,e.LessEqualDepth=3,e.LessEqualStencilFunc=515,e.LessStencilFunc=513,e.Light=Mc,e.LightProbe=Hc,e.Line=to,e.Line3=Fh,e.LineBasicMaterial=Ya,e.LineCurve=Po,e.LineCurve3=Do,e.LineDashedMaterial=Yl,e.LineLoop=ro,e.LinePieces=1,e.LineSegments=io,e.LineStrip=0,e.LinearEncoding=at,e.LinearFilter=g,e.LinearInterpolant=$l,e.LinearMipMapLinearFilter=1008,e.LinearMipMapNearestFilter=1007,e.LinearMipmapLinearFilter=y,e.LinearMipmapNearestFilter=v,e.LinearSRGBColorSpace=ct,e.LinearToneMapping=1,e.Loader=mc,e.LoaderUtils=Gc,e.LoadingManager=dc,e.LoopOnce=2200,e.LoopPingPong=2202,e.LoopRepeat=2201,e.LuminanceAlphaFormat=1025,e.LuminanceFormat=1024,e.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},e.Material=Mn,e.MaterialLoader=zc,e.Math=At,e.MathUtils=At,e.Matrix3=Ct,e.Matrix4=Oe,e.MaxEquation=104,e.Mesh=oi,e.MeshBasicMaterial=bn,e.MeshDepthMaterial=js,e.MeshDistanceMaterial=Xs,e.MeshFaceMaterial=function(t){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),t},e.MeshLambertMaterial=Xl,e.MeshMatcapMaterial=ql,e.MeshNormalMaterial=jl,e.MeshPhongMaterial=kl,e.MeshPhysicalMaterial=Vl,e.MeshStandardMaterial=Gl,e.MeshToonMaterial=Wl,e.MinEquation=103,e.MirroredRepeatWrapping=d,e.MixOperation=1,e.MultiMaterial=function(t=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t},e.MultiplyBlending=4,e.MultiplyOperation=0,e.NearestFilter=p,e.NearestMipMapLinearFilter=1005,e.NearestMipMapNearestFilter=1004,e.NearestMipmapLinearFilter=f,e.NearestMipmapNearestFilter=m,e.NeverDepth=0,e.NeverStencilFunc=512,e.NoBlending=0,e.NoColorSpace="",e.NoColors=0,e.NoToneMapping=0,e.NormalAnimationBlendMode=2500,e.NormalBlending=1,e.NotEqualDepth=7,e.NotEqualStencilFunc=517,e.NumberKeyframeTrack=rc,e.Object3D=ln,e.ObjectLoader=class extends mc{constructor(t){super(t)}load(t,e,n,i){const r=this,s=""===this.path?Gc.extractUrlBase(t):this.path
this.resourcePath=this.resourcePath||s
const a=new gc(this.manager)
a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,(function(n){let s=null
try{s=JSON.parse(n)}catch(e){return void 0!==i&&i(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}const a=s.metadata
void 0!==a&&void 0!==a.type&&"geometry"!==a.type.toLowerCase()?r.parse(s,e):console.error("THREE.ObjectLoader: Can't load "+t)}),n,i)}async loadAsync(t,e){const n=""===this.path?Gc.extractUrlBase(t):this.path
this.resourcePath=this.resourcePath||n
const i=new gc(this.manager)
i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials)
const r=await i.loadAsync(t,e),s=JSON.parse(r),a=s.metadata
if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())throw new Error("THREE.ObjectLoader: Can't load "+t)
return await this.parseAsync(s)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),s=this.parseImages(t.images,(function(){void 0!==e&&e(l)})),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,o,a,n),c=this.parseSkeletons(t.skeletons,l)
if(this.bindSkeletons(l,c),void 0!==e){let t=!1
for(const e in s)if(s[e]instanceof HTMLImageElement){t=!0
break}!1===t&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),s=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,s),o=this.parseObject(t.object,i,a,s,e),l=this.parseSkeletons(t.skeletons,o)
return this.bindSkeletons(o,l),o}parseShapes(t){const e={}
if(void 0!==t)for(let n=0,i=t.length;n<i;n++){const i=(new Ko).fromJSON(t[n])
e[i.uuid]=i}return e}parseSkeletons(t,e){const n={},i={}
if(e.traverse((function(t){t.isBone&&(i[t.uuid]=t)})),void 0!==t)for(let r=0,s=t.length;r<s;r++){const e=(new Ga).fromJSON(t[r],i)
n[e.uuid]=e}return n}parseGeometries(t,e){const n={}
if(void 0!==t){const i=new kc
for(let r=0,s=t.length;r<s;r++){let s
const a=t[r]
switch(a.type){case"BufferGeometry":case"InstancedBufferGeometry":s=i.parse(a)
break
case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.")
break
default:a.type in Bl?s=Bl[a.type].fromJSON(a,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`)}s.uuid=a.uuid,void 0!==a.name&&(s.name=a.name),!0===s.isBufferGeometry&&void 0!==a.userData&&(s.userData=a.userData),n[a.uuid]=s}}return n}parseMaterials(t,e){const n={},i={}
if(void 0!==t){const r=new zc
r.setTextures(e)
for(let e=0,s=t.length;e<s;e++){const s=t[e]
if("MultiMaterial"===s.type){const t=[]
for(let e=0;e<s.materials.length;e++){const i=s.materials[e]
void 0===n[i.uuid]&&(n[i.uuid]=r.parse(i)),t.push(n[i.uuid])}i[s.uuid]=t}else void 0===n[s.uuid]&&(n[s.uuid]=r.parse(s)),i[s.uuid]=n[s.uuid]}}return i}parseAnimations(t){const e={}
if(void 0!==t)for(let n=0;n<t.length;n++){const i=t[n],r=cc.parse(i)
e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={}
let r
function s(t){if("string"==typeof t){const e=t
return function(t){return n.manager.itemStart(t),r.load(t,(function(){n.manager.itemEnd(t)}),void 0,(function(){n.manager.itemError(t),n.manager.itemEnd(t)}))}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:n.resourcePath+e)}return t.data?{data:Dt(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){const n=new dc(e)
r=new vc(n),r.setCrossOrigin(this.crossOrigin)
for(let e=0,r=t.length;e<r;e++){const n=t[e],r=n.url
if(Array.isArray(r)){const t=[]
for(let e=0,n=r.length;e<n;e++){const n=s(r[e])
null!==n&&(n instanceof HTMLImageElement?t.push(n):t.push(new Ba(n.data,n.width,n.height)))}i[n.uuid]=new qt(t)}else{const t=s(n.url)
i[n.uuid]=new qt(t)}}}return i}async parseImagesAsync(t){const e=this,n={}
let i
async function r(t){if("string"==typeof t){const n=t,r=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:e.resourcePath+n
return await i.loadAsync(r)}return t.data?{data:Dt(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){i=new vc(this.manager),i.setCrossOrigin(this.crossOrigin)
for(let e=0,i=t.length;e<i;e++){const i=t[e],s=i.url
if(Array.isArray(s)){const t=[]
for(let e=0,n=s.length;e<n;e++){const n=s[e],i=await r(n)
null!==i&&(i instanceof HTMLImageElement?t.push(i):t.push(new Ba(i.data,i.width,i.height)))}n[i.uuid]=new qt(t)}else{const t=await r(i.url)
n[i.uuid]=new qt(t)}}}return n}parseTextures(t,e){function n(t,e){return"number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}const i={}
if(void 0!==t)for(let r=0,s=t.length;r<s;r++){const s=t[r]
void 0===s.image&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),void 0===e[s.image]&&console.warn("THREE.ObjectLoader: Undefined image",s.image)
const a=e[s.image],o=a.data
let l
Array.isArray(o)?(l=new yi,6===o.length&&(l.needsUpdate=!0)):(l=o&&o.data?new Ba:new Zt,o&&(l.needsUpdate=!0)),l.source=a,l.uuid=s.uuid,void 0!==s.name&&(l.name=s.name),void 0!==s.mapping&&(l.mapping=n(s.mapping,Wc)),void 0!==s.offset&&l.offset.fromArray(s.offset),void 0!==s.repeat&&l.repeat.fromArray(s.repeat),void 0!==s.center&&l.center.fromArray(s.center),void 0!==s.rotation&&(l.rotation=s.rotation),void 0!==s.wrap&&(l.wrapS=n(s.wrap[0],jc),l.wrapT=n(s.wrap[1],jc)),void 0!==s.format&&(l.format=s.format),void 0!==s.type&&(l.type=s.type),void 0!==s.encoding&&(l.encoding=s.encoding),void 0!==s.minFilter&&(l.minFilter=n(s.minFilter,Xc)),void 0!==s.magFilter&&(l.magFilter=n(s.magFilter,Xc)),void 0!==s.anisotropy&&(l.anisotropy=s.anisotropy),void 0!==s.flipY&&(l.flipY=s.flipY),void 0!==s.premultiplyAlpha&&(l.premultiplyAlpha=s.premultiplyAlpha),void 0!==s.unpackAlignment&&(l.unpackAlignment=s.unpackAlignment),void 0!==s.userData&&(l.userData=s.userData),i[s.uuid]=l}return i}parseObject(t,e,n,i,r){let s,a,o
function l(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function c(t){if(void 0!==t){if(Array.isArray(t)){const e=[]
for(let i=0,r=t.length;i<r;i++){const r=t[i]
void 0===n[r]&&console.warn("THREE.ObjectLoader: Undefined material",r),e.push(n[r])}return e}return void 0===n[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),n[t]}}function h(t){return void 0===i[t]&&console.warn("THREE.ObjectLoader: Undefined texture",t),i[t]}switch(t.type){case"Scene":s=new la,void 0!==t.background&&(Number.isInteger(t.background)?s.background=new Wt(t.background):s.background=h(t.background)),void 0!==t.environment&&(s.environment=h(t.environment)),void 0!==t.fog&&("Fog"===t.fog.type?s.fog=new oa(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(s.fog=new aa(t.fog.color,t.fog.density)))
break
case"PerspectiveCamera":s=new fi(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(s.focus=t.focus),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.filmGauge&&(s.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(s.filmOffset=t.filmOffset),void 0!==t.view&&(s.view=Object.assign({},t.view))
break
case"OrthographicCamera":s=new Hi(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.view&&(s.view=Object.assign({},t.view))
break
case"AmbientLight":s=new Oc(t.color,t.intensity)
break
case"DirectionalLight":s=new Uc(t.color,t.intensity)
break
case"PointLight":s=new Ic(t.color,t.intensity,t.distance,t.decay)
break
case"RectAreaLight":s=new Fc(t.color,t.intensity,t.width,t.height)
break
case"SpotLight":s=new Rc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay)
break
case"HemisphereLight":s=new bc(t.color,t.groundColor,t.intensity)
break
case"LightProbe":s=(new Hc).fromJSON(t)
break
case"SkinnedMesh":a=l(t.geometry),o=c(t.material),s=new Oa(a,o),void 0!==t.bindMode&&(s.bindMode=t.bindMode),void 0!==t.bindMatrix&&s.bindMatrix.fromArray(t.bindMatrix),void 0!==t.skeleton&&(s.skeleton=t.skeleton)
break
case"Mesh":a=l(t.geometry),o=c(t.material),s=new oi(a,o)
break
case"InstancedMesh":a=l(t.geometry),o=c(t.material)
const e=t.count,n=t.instanceMatrix,i=t.instanceColor
s=new qa(a,o,e),s.instanceMatrix=new Va(new Float32Array(n.array),16),void 0!==i&&(s.instanceColor=new Va(new Float32Array(i.array),i.itemSize))
break
case"LOD":s=new La
break
case"Line":s=new to(l(t.geometry),c(t.material))
break
case"LineLoop":s=new ro(l(t.geometry),c(t.material))
break
case"LineSegments":s=new io(l(t.geometry),c(t.material))
break
case"PointCloud":case"Points":s=new ho(l(t.geometry),c(t.material))
break
case"Sprite":s=new Ta(c(t.material))
break
case"Group":s=new Qs
break
case"Bone":s=new Fa
break
default:s=new ln}if(s.uuid=t.uuid,void 0!==t.name&&(s.name=t.name),void 0!==t.matrix?(s.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(s.matrixAutoUpdate=t.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(void 0!==t.position&&s.position.fromArray(t.position),void 0!==t.rotation&&s.rotation.fromArray(t.rotation),void 0!==t.quaternion&&s.quaternion.fromArray(t.quaternion),void 0!==t.scale&&s.scale.fromArray(t.scale)),void 0!==t.castShadow&&(s.castShadow=t.castShadow),void 0!==t.receiveShadow&&(s.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(s.shadow.bias=t.shadow.bias),void 0!==t.shadow.normalBias&&(s.shadow.normalBias=t.shadow.normalBias),void 0!==t.shadow.radius&&(s.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&s.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(s.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(s.visible=t.visible),void 0!==t.frustumCulled&&(s.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(s.renderOrder=t.renderOrder),void 0!==t.userData&&(s.userData=t.userData),void 0!==t.layers&&(s.layers.mask=t.layers),void 0!==t.children){const a=t.children
for(let t=0;t<a.length;t++)s.add(this.parseObject(a[t],e,n,i,r))}if(void 0!==t.animations){const e=t.animations
for(let t=0;t<e.length;t++){const n=e[t]
s.animations.push(r[n])}}if("LOD"===t.type){void 0!==t.autoUpdate&&(s.autoUpdate=t.autoUpdate)
const e=t.levels
for(let t=0;t<e.length;t++){const n=e[t],i=s.getObjectByProperty("uuid",n.object)
void 0!==i&&s.addLevel(i,n.distance)}}return s}bindSkeletons(t,e){0!==Object.keys(e).length&&t.traverse((function(t){if(!0===t.isSkinnedMesh&&void 0!==t.skeleton){const n=e[t.skeleton]
void 0===n?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}}))}setTexturePath(t){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(t)}},e.ObjectSpaceNormalMap=1,e.OctahedronBufferGeometry=Rl,e.OctahedronGeometry=Rl,e.OneFactor=201,e.OneMinusDstAlphaFactor=207,e.OneMinusDstColorFactor=209,e.OneMinusSrcAlphaFactor=205,e.OneMinusSrcColorFactor=203,e.OrthographicCamera=Hi,e.PCFShadowMap=1,e.PCFSoftShadowMap=2,e.PMREMGenerator=qi,e.ParametricGeometry=class extends kn{constructor(){console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),super()}},e.Particle=class extends Ta{constructor(t){console.warn("THREE.Particle has been renamed to THREE.Sprite."),super(t)}},e.ParticleBasicMaterial=class extends so{constructor(t){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),super(t)}},e.ParticleSystem=class extends ho{constructor(t,e){console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),super(t,e)}},e.ParticleSystemMaterial=class extends so{constructor(t){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),super(t)}},e.Path=Bo,e.PerspectiveCamera=fi,e.Plane=wi,e.PlaneBufferGeometry=Ci,e.PlaneGeometry=Ci,e.PlaneHelper=class extends to{constructor(t,e=1,n=16776960){const i=n,r=new kn
r.setAttribute("position",new Nn([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),r.computeBoundingSphere(),super(r,new Ya({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e
const s=new kn
s.setAttribute("position",new Nn([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),s.computeBoundingSphere(),this.add(new oi(s,new bn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){let e=-this.plane.constant
Math.abs(e)<1e-8&&(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e<0?1:0,this.lookAt(this.plane.normal),super.updateMatrixWorld(t)}},e.PointCloud=class extends ho{constructor(t,e){console.warn("THREE.PointCloud has been renamed to THREE.Points."),super(t,e)}},e.PointCloudMaterial=class extends so{constructor(t){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),super(t)}},e.PointLight=Ic,e.PointLightHelper=class extends oi{constructor(t,e,n){super(new Pl(e,4,2),new bn({wireframe:!0,fog:!1,toneMapped:!1})),this.light=t,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},e.Points=ho,e.PointsMaterial=so,e.PolarGridHelper=class extends io{constructor(t=10,e=16,n=8,i=64,r=4473924,s=8947848){r=new Wt(r),s=new Wt(s)
const a=[],o=[]
for(let c=0;c<=e;c++){const n=c/e*(2*Math.PI),i=Math.sin(n)*t,l=Math.cos(n)*t
a.push(0,0,0),a.push(i,0,l)
const h=1&c?r:s
o.push(h.r,h.g,h.b),o.push(h.r,h.g,h.b)}for(let c=0;c<=n;c++){const e=1&c?r:s,l=t-t/n*c
for(let t=0;t<i;t++){let n=t/i*(2*Math.PI),r=Math.sin(n)*l,s=Math.cos(n)*l
a.push(r,0,s),o.push(e.r,e.g,e.b),n=(t+1)/i*(2*Math.PI),r=Math.sin(n)*l,s=Math.cos(n)*l,a.push(r,0,s),o.push(e.r,e.g,e.b)}}const l=new kn
l.setAttribute("position",new Nn(a,3)),l.setAttribute("color",new Nn(o,3)),super(l,new Ya({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}},e.PolyhedronBufferGeometry=Wo,e.PolyhedronGeometry=Wo,e.PositionalAudio=class extends lh{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),!0===this.hasPlaybackControl&&!1===this.isPlaying)return
this.matrixWorld.decompose(ch,hh,uh),dh.set(0,0,1).applyQuaternion(hh)
const e=this.panner
if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta
e.positionX.linearRampToValueAtTime(ch.x,t),e.positionY.linearRampToValueAtTime(ch.y,t),e.positionZ.linearRampToValueAtTime(ch.z,t),e.orientationX.linearRampToValueAtTime(dh.x,t),e.orientationY.linearRampToValueAtTime(dh.y,t),e.orientationZ.linearRampToValueAtTime(dh.z,t)}else e.setPosition(ch.x,ch.y,ch.z),e.setOrientation(dh.x,dh.y,dh.z)}},e.PropertyBinding=Eh,e.PropertyMixer=mh,e.QuadraticBezierCurve=Io,e.QuadraticBezierCurve3=No,e.Quaternion=re,e.QuaternionKeyframeTrack=ac,e.QuaternionLinearInterpolant=sc,e.REVISION=n,e.RGBADepthPacking=3201,e.RGBAFormat=S,e.RGBAIntegerFormat=1033,e.RGBA_ASTC_10x10_Format=J,e.RGBA_ASTC_10x5_Format=X,e.RGBA_ASTC_10x6_Format=q,e.RGBA_ASTC_10x8_Format=Y,e.RGBA_ASTC_12x10_Format=Z,e.RGBA_ASTC_12x12_Format=K,e.RGBA_ASTC_4x4_Format=B,e.RGBA_ASTC_5x4_Format=H,e.RGBA_ASTC_5x5_Format=z,e.RGBA_ASTC_6x5_Format=G,e.RGBA_ASTC_6x6_Format=V,e.RGBA_ASTC_8x5_Format=k,e.RGBA_ASTC_8x6_Format=W,e.RGBA_ASTC_8x8_Format=j,e.RGBA_BPTC_Format=Q,e.RGBA_ETC2_EAC_Format=F,e.RGBA_PVRTC_2BPPV1_Format=U,e.RGBA_PVRTC_4BPPV1_Format=N,e.RGBA_S3TC_DXT1_Format=C,e.RGBA_S3TC_DXT3_Format=L,e.RGBA_S3TC_DXT5_Format=P,e.RGBFormat=1022,e.RGB_ETC1_Format=36196,e.RGB_ETC2_Format=O,e.RGB_PVRTC_2BPPV1_Format=I,e.RGB_PVRTC_4BPPV1_Format=D,e.RGB_S3TC_DXT1_Format=R,e.RGFormat=1030,e.RGIntegerFormat=1031,e.RawShaderMaterial=zl,e.Ray=Ue,e.Raycaster=class{constructor(t,e,n=0,i=1/0){this.ray=new Ue(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new qe,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Dh(t,this,n,e),n.sort(Ph),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Dh(t[i],this,n,e)
return n.sort(Ph),n}},e.RectAreaLight=Fc,e.RedFormat=1028,e.RedIntegerFormat=1029,e.ReinhardToneMapping=2,e.RepeatWrapping=h,e.ReplaceStencilOp=7681,e.ReverseSubtractEquation=102,e.RingBufferGeometry=Cl,e.RingGeometry=Cl,e.SRGBColorSpace=lt,e.Scene=la,e.SceneUtils=mu,e.ShaderChunk=Li,e.ShaderLib=Di,e.ShaderMaterial=pi,e.ShadowMaterial=Hl,e.Shape=Ko,e.ShapeBufferGeometry=Ll,e.ShapeGeometry=Ll,e.ShapePath=class{constructor(){this.type="ShapePath",this.color=new Wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Bo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function n(t){const e=[]
for(let n=0,i=t.length;n<i;n++){const i=t[n],r=new Ko
r.curves=i.curves,e.push(r)}return e}function i(t,e){const n=e.length
let i=!1
for(let r=n-1,s=0;s<n;r=s++){let n=e[r],a=e[s],o=a.x-n.x,l=a.y-n.y
if(Math.abs(l)>Number.EPSILON){if(l<0&&(n=e[s],o=-o,a=e[r],l=-l),t.y<n.y||t.y>a.y)continue
if(t.y===n.y){if(t.x===n.x)return!0}else{const e=l*(t.x-n.x)-o*(t.y-n.y)
if(0===e)return!0
if(e<0)continue
i=!i}}else{if(t.y!==n.y)continue
if(a.x<=t.x&&t.x<=n.x||n.x<=t.x&&t.x<=a.x)return!0}}return i}const r=bl.isClockWise,s=this.subPaths
if(0===s.length)return[]
if(!0===e)return n(s)
let a,o,l
const c=[]
if(1===s.length)return o=s[0],l=new Ko,l.curves=o.curves,c.push(l),c
let h=!r(s[0].getPoints())
h=t?!h:h
const u=[],d=[]
let p,m,f=[],g=0
d[g]=void 0,f[g]=[]
for(let v=0,y=s.length;v<y;v++)o=s[v],p=o.getPoints(),a=r(p),a=t?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new Ko,p:p},d[g].s.curves=o.curves,h&&g++,f[g]=[]):f[g].push({h:o,p:p[0]})
if(!d[0])return n(s)
if(d.length>1){let t=!1,e=0
for(let n=0,i=d.length;n<i;n++)u[n]=[]
for(let n=0,r=d.length;n<r;n++){const r=f[n]
for(let s=0;s<r.length;s++){const a=r[s]
let o=!0
for(let r=0;r<d.length;r++)i(a.p,d[r].p)&&(n!==r&&e++,o?(o=!1,u[r].push(a)):t=!0)
o&&u[n].push(a)}}e>0&&!1===t&&(f=u)}for(let v=0,y=d.length;v<y;v++){l=d[v].s,c.push(l),m=f[v]
for(let t=0,e=m.length;t<e;t++)l.holes.push(m[t].h)}return c}},e.ShapeUtils=bl,e.ShortType=1011,e.Skeleton=Ga,e.SkeletonHelper=Vh,e.SkinnedMesh=Oa,e.SmoothShading=2,e.Source=qt,e.Sphere=Ae,e.SphereBufferGeometry=Pl,e.SphereGeometry=Pl,e.Spherical=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6
return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Mt(e/this.radius,-1,1))),this}clone(){return(new this.constructor).copy(this)}},e.SphericalHarmonics3=Bc,e.SplineCurve=Uo,e.SpotLight=Rc,e.SpotLightHelper=class extends ln{constructor(t,e){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e
const n=new kn,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1]
for(let s=0,a=1,o=32;s<o;s++,a++){const t=s/o*Math.PI*2,e=a/o*Math.PI*2
i.push(Math.cos(t),Math.sin(t),1,Math.cos(e),Math.sin(e),1)}n.setAttribute("position",new Nn(i,3))
const r=new Ya({fog:!1,toneMapped:!1})
this.cone=new io(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld()
const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle)
this.cone.scale.set(e,e,t),Bh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Bh),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},e.Sprite=Ta,e.SpriteMaterial=da,e.SrcAlphaFactor=204,e.SrcAlphaSaturateFactor=210,e.SrcColorFactor=202,e.StaticCopyUsage=35046,e.StaticDrawUsage=ut,e.StaticReadUsage=35045,e.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new fi,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new fi,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache
if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,eh.copy(t.projectionMatrix)
const n=e.eyeSep/2,i=n*e.near/e.focus,r=e.near*Math.tan(yt*e.fov*.5)/e.zoom
let s,a
th.elements[12]=-n,$c.elements[12]=n,s=-r*e.aspect+i,a=r*e.aspect+i,eh.elements[0]=2*e.near/(a-s),eh.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(eh),s=-r*e.aspect-i,a=r*e.aspect-i,eh.elements[0]=2*e.near/(a-s),eh.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(eh)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(th),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply($c)}},e.StreamCopyUsage=35042,e.StreamDrawUsage=35040,e.StreamReadUsage=35041,e.StringKeyframeTrack=oc,e.SubtractEquation=101,e.SubtractiveBlending=3,e.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e.TangentSpaceNormalMap=0,e.TetrahedronBufferGeometry=Dl,e.TetrahedronGeometry=Dl,e.TextGeometry=class extends kn{constructor(){console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),super()}},e.Texture=Zt,e.TextureLoader=xc,e.TorusBufferGeometry=Il,e.TorusGeometry=Il,e.TorusKnotBufferGeometry=Nl,e.TorusKnotGeometry=Nl,e.Triangle=_n,e.TriangleFanDrawMode=2,e.TriangleStripDrawMode=1,e.TrianglesDrawMode=0,e.TubeBufferGeometry=Ul,e.TubeGeometry=Ul,e.UVMapping=r,e.Uint16Attribute=class extends Ln{constructor(t,e){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),super(t,e)}},e.Uint16BufferAttribute=Ln,e.Uint32Attribute=class extends Dn{constructor(t,e){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),super(t,e)}},e.Uint32BufferAttribute=Dn,e.Uint8Attribute=class extends An{constructor(t,e){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),super(t,e)}},e.Uint8BufferAttribute=An,e.Uint8ClampedAttribute=class extends Rn{constructor(t,e){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),super(t,e)}},e.Uint8ClampedBufferAttribute=Rn,e.Uniform=Rh,e.UniformsLib=Pi,e.UniformsUtils=di,e.UnsignedByteType=_,e.UnsignedInt248Type=E,e.UnsignedIntType=M,e.UnsignedShort4444Type=1017,e.UnsignedShort5551Type=1018,e.UnsignedShortType=x,e.VSMShadowMap=3,e.Vector2=Rt,e.Vector3=se,e.Vector4=Kt,e.VectorKeyframeTrack=lc,e.Vertex=class extends se{constructor(t,e,n){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),super(t,e,n)}},e.VertexColors=2,e.VideoTexture=po,e.WebGL1Renderer=sa,e.WebGL3DRenderTarget=ne,e.WebGLArrayRenderTarget=te,e.WebGLCubeRenderTarget=_i,e.WebGLMultipleRenderTargets=ie,e.WebGLMultisampleRenderTarget=class extends Qt{constructor(t,e,n){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(t,e,n),this.samples=4}},e.WebGLRenderTarget=Qt,e.WebGLRenderTargetCube=class extends _i{constructor(t,e,n){console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),super(t,n)}},e.WebGLRenderer=ra,e.WebGLUtils=Zs,e.WireframeGeometry=Ol,e.WireframeHelper=class extends io{constructor(t,e){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),super(new Ol(t.geometry),new Ya({color:void 0!==e?e:16777215}))}},e.WrapAroundEnding=rt,e.XHRLoader=class extends gc{constructor(t){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),super(t)}},e.ZeroCurvatureEnding=nt,e.ZeroFactor=200,e.ZeroSlopeEnding=it,e.ZeroStencilOp=0,e._SRGBAFormat=mt,e.sRGBEncoding=ot}}])
