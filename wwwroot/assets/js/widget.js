$(function () {

	/* Circle-progress */
	$('#circle').circleProgress({
		value: 0.85,
		size: 70,
		fill: {
		  color: ["#9c52fd"]
		}
    });
	/* Circle-progress closed */

	/* Circle-progress-1 */
	$('#circle-1').circleProgress({
		value: 0.64,
		size: 70,
		fill: {
		 color: ["#09ad95"]
		}
	});
	/* Circle-progress-1 closed */

	/* Circle-progress-2 */
	$('#circle-2').circleProgress({
		value: 0.74,
		size: 70,
		fill: {
		  color: ["#f7b731"]
		}
    });
    /* Circle-progress-2 closed */

	/* Circle-progress-3 */
	$('#circle-3').circleProgress({
		value: 0.55,
		size: 70,
		fill: {
		  gradient: ["#f5334f"]
		}
    });
	/* Circle-progress-3 closed */

	/* Chartjs (#areaChart1) */
	var ctx = document.getElementById('areaChart1').getContext('2d');
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
				label: 'Market value',
				data: [30, 70, 30, 100, 50, 130, 100, 140],
				backgroundColor: 'transparent',
				borderColor: '#0774f8',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:'#0774f8',
				pointBorderColor :'#0774f8',
				pointHoverBorderColor :'#0774f8',
				pointBorderWidth :2,
				pointRadius :2,
				pointHoverRadius :2,
				borderWidth: 4,
                lineTension: 0.3,
            }, ]
        },
        options: {
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
				legend: {
					display: false,
				}
			},
            responsive: true,
            scales: {
                x: {
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    },
                    ticks: {
                        color: 'transparent', 
                    }
                },
                y: {
                    display:false,
                }
            },
        }
    });
	/* Chartjs (#areaChart1) closed */

	/* Chartjs (#areaChart2) */
    var ctx = document.getElementById('areaChart2').getContext('2d');
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
				label: 'Market value',
				data: [30, 70, 30, 100, 50, 130, 100, 140],
				backgroundColor: 'transparent',
				borderColor: '#1fc874',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:'#1fc874',
				pointBorderColor :'#1fc874',
				pointHoverBorderColor :'#1fc874',
				pointBorderWidth :2,
				pointRadius :2,
				pointHoverRadius :2,
				borderWidth: 4,
                lineTension: 0.3,
            }, ]
        },
        options: {
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
				legend: {
					display: false,
				}
			},
            responsive: true,
            scales: {
                x: {
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    },
                    ticks: {
                        color: 'transparent', 
                    }
                },
                y: {
                    display:false,
                }
            },
        }
    });
	/* Chartjs (#areaChart2) closed */

	/* Chartjs (#areaChart3) */
    var ctx = document.getElementById('areaChart3').getContext('2d');
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
				label: 'Market value',
				data: [30, 70, 30, 100, 50, 130, 100, 140],
				backgroundColor: 'transparent',
				borderColor: '#f7b731',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:'#f7b731',
				pointBorderColor :'#f7b731',
				pointHoverBorderColor :'#f7b731',
				pointBorderWidth :2,
				pointRadius :2,
				pointHoverRadius :2,
				borderWidth: 4,
                lineTension: 0.3,
            }, ]
        },
        options: {
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
				legend: {
					display: false,
				}
			},
            responsive: true,
            scales: {
                x: {
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    },
                    ticks: {
                        color: 'transparent', 
                    }
                },
                y: {
                    display:false,
                }
            },
        }
    });
	/* Chartjs (#areaChart3) closed */

	/* Chartjs (#areaChart4) */
    var ctx = document.getElementById('areaChart4').getContext('2d');
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
				label: 'Market value',
				data: [30, 70, 30, 100, 50, 130, 100, 140],
				backgroundColor: 'transparent',
				borderColor: '#f5334f',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:'#f5334f',
				pointBorderColor :'#f5334f',
				pointHoverBorderColor :'#f5334f',
				pointBorderWidth :2,
				pointRadius :2,
				pointHoverRadius :2,
				borderWidth: 4,
                lineTension: 0.3,
            }, ]
        },
        options: {
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
				legend: {
					display: false,
				}
			},
            responsive: true,
            scales: {
                x: {
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    },
                    ticks: {
                        color: 'transparent', 
                    }
                },
                y: {
                    display:false,
                }
            },
        }
    });
	/* Chartjs (#areaChart4) closed */

});





