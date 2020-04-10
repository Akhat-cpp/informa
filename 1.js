function app1(n)
{
	let twoNumber = n.split(" ");
	let counter = 0;
	let counter2 = 0;
 	if (((twoNumber[0] - twoNumber[1]) == 0) || ((twoNumber[0] - twoNumber[1]) == 1) || ((twoNumber[0] - twoNumber[1]) == -1))
	{
		console.log("Absent");
	}
	else
	{
		if (twoNumber[0] < twoNumber[1]) 
		{
			counter = +twoNumber[0] + 1;
			counter2 = +twoNumber[1];
		}
		if (twoNumber[0] > twoNumber[1])
		{
			counter = +twoNumber[1] + 1;
			counter2 = +twoNumber[0];
		}

		while (counter != counter2)
		{
			console.log(counter);
			counter++;
		}
	}
}

// function app2(kolvo, ch)
// {
// 	let kolvoAr = kolvo.split(" ");
// 	let chAr = ch.split(" ");

// 	alert(chAr[5])
// }