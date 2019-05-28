// calculate.js
function initialize(){

var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 
			60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 
			53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
var gradeBounds = [
			document.getElementById("max_in").value,
			document.getElementById("a_plus_in").value,
			document.getElementById("a_in").value,
			document.getElementById("a_minus_in").value,
			document.getElementById("b_plus_in").value,
			document.getElementById("b_in").value,
			document.getElementById("b_minus_in").value,
			document.getElementById("c_plus_in").value,
			document.getElementById("c_in").value,
			document.getElementById("c_minus_in").value,
			document.getElementById("d_in").value,
			document.getElementById("f_in").value
			];

// Error handling
for(i = 1; i < gradeBounds.length; i++){
	if(parseInt(gradeBounds[i]) > parseInt(gradeBounds[i-1])){
		document.getElementById("range_overlap").hidden = false;
		break;
	}
	else
		document.getElementById("range_overlap").hidden = true;
}

// for(i = 1; i <= gradeBounds.length; i++){
// 	if(parseInt(gradeBounds[i]))
// 		document.getElementById("range_overlap").hidden = false;
// }





			// <p id="out_of_bounds" hidden>Error: Please ensure that the numeric values are between 0-100.</p>
			// <p id="range_overlap" hidden>Error: Please ensure that the ranges do not overlap.</p>
			// <p id="invalid_input" hidden>Error: Olease ensure that you enter a numeric value.</p>

var grade_count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var histogram = ["", "", "", "", "", "", "", "", "", "", ""];

for (i = 0; i < grades.length; i++) {
	for(j = 1; j <= gradeBounds.length; j++){
		if(grades[i] >= gradeBounds[j] && grades[i] <= gradeBounds[j-1]){
			grade_count[j-1]++;
			break;
		}
	}
}

for (i = 0; i < grade_count.length; i++){
	for(j = 0; j < grade_count[i]; j++)
	histogram[i] += String.fromCodePoint(0x1F984);
}

console.log(histogram);

document.getElementById("a_plus_out").textContent = histogram[0];
document.getElementById("a_out").textContent = histogram[1];
document.getElementById("a_minus_out").textContent = histogram[2];
document.getElementById("b_plus_out").textContent = histogram[3];
document.getElementById("b_out").textContent = histogram[4];
document.getElementById("b_minus_out").textContent = histogram[5];
document.getElementById("c_plus_out").textContent = histogram[6];
document.getElementById("c_out").textContent = histogram[7];
document.getElementById("c_minus_out").textContent = histogram[8];
document.getElementById("d_out").textContent = histogram[9];
document.getElementById("f_out").textContent = histogram[10];
}
