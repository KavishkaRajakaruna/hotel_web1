		function loads() {
			var x = document.getElementsByClassName("tabcontent");
			for (var i = 0; i < x.length; i++) {
				x[i].style.display="none";
			}
			x[0].style.display="block";
			// body...
		}
		function openTab(x){
			var y = document.getElementsByClassName("tabcontent");
			
				for (var i = 0; i <y.length; i++) {
					y[i].style.display="none";
				}
			    y[x].style.display="block";
		}