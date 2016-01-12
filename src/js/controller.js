function animate(){
		var left; var top;
		var vcontrol = 0; var hcontrol =0;
		var vstep = 12; var hstep = 7;
		var ball = document.getElementById("ball");
		var pos = getPos(ball);
		left = pos.left; top = pos.top;
		function frame(){
			var height = getWindowHeight(); var width = getWindowWidth();		
			if(vcontrol==0)
				top+=vstep;
			else
				top-=vstep;
			if(hcontrol==0)
				left+=hstep;
			else	
				left-=hstep;
			if(left >= width-100)
				hcontrol=1;
			if(top >= height-100)
				vcontrol=1;
			if(left <= 1)
				hcontrol=0;
			if(top <= 2)
				vcontrol=0;		
			ball.style.left = left + 'px';
			ball.style.top = top + 'px';
		}
		var id = setInterval(frame,1000/60);			
	}