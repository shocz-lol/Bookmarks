alert('Google Maps Snake Hack 0.1');
(function(){X=R.b.o.b[0].b.x;Y=R.b.o.b[0].b.y;function MS(){x=R.b.o.b[0].b.x;y=R.b.o.b[0].b.y;if(X!==x||Y!==y){X=x;Y=y;if(y<19&&x<20){(x%2==0)?R.s({key:"Up"}):R.s({key:"Down"});if((y==18&&x%2!==0&&x!=19)||(y==0&&x%2==0)){R.s({key:"Right"})}}if(x==19&&y==19){R.s({key:"Left"})}else if(x==0&&y==19){R.s({key:"Up"})}}window.requestAnimationFrame(MS)};window.requestAnimationFrame(MS)})();
