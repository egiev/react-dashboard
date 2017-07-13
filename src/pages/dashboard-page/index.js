import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

import ChartContainer from '../../components/chart-container';
import Section from '../../components/section';

const Dashboard = () => {
	const line_data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: '#002070'
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: '#002A92'
    }]
  };

  const line_option = {
  	legend: {
  		display: false,
  	},
  	responsive: true,
  	maintainAspectRatio: false
  }

  const doughnut_data = {
  	datasets: [{
        data: [10, 20, 30, 40],
        backgroundColor: ['#002070', '#002A92', '#7FA4FF', '#ADC4FF']
    }],
    labels: [
    	'LOL is Life',
    	'Loyal',
    	'Pa-fall',
      'Fuckboy'
    ]
  }

  const doughnut_option = {
  	legend: {
  		display: true,
  		position: 'right'
  	},
  	responsive: true,
  	maintainAspectRatio: false
  }

	return(
		<section>
			<h3>Dashboard</h3>

			<Section sm5>
        <p>Sales</p>
        <ChartContainer>
				  <Doughnut data={doughnut_data} options={doughnut_option} height={220}></Doughnut>
        </ChartContainer>
			</Section>

			<Section sm7>
        <p>Reports</p>
        <ChartContainer>
				  <Line data={line_data} options={line_option} height={220}></Line>
        </ChartContainer>
			</Section>

			<Section sm4>
        <p>Task</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium sint modi, 
        et veniam quod totam aperiam deserunt distinctio ad assumenda nihil atque, culpa facere quo temporibus ipsum. Similique, impedit!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium sint modi, 
        et veniam quod totam aperiam deserunt distinctio ad assumenda nihil atque, culpa facere quo temporibus ipsum. Similique, impedit!</p>
			</Section>

			<Section sm4>
        <p>Messages</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium sint modi, 
        et veniam quod totam aperiam deserunt distinctio ad assumenda nihil atque, culpa facere quo temporibus ipsum. Similique, impedit!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium sint modi, 
        et veniam quod totam aperiam deserunt distinctio ad assumenda nihil atque, culpa facere quo temporibus ipsum. Similique, impedit!</p>
			</Section>

			<Section sm4>
        <p>Activity</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium sint modi, 
        et veniam quod totam aperiam deserunt distinctio ad assumenda nihil atque, culpa facere quo temporibus ipsum. Similique, impedit!</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laudantium sint modi, 
        et veniam quod totam aperiam deserunt distinctio ad assumenda nihil atque, culpa facere quo temporibus ipsum. Similique, impedit!</p>
			</Section>

		</section>
	)
}

export default Dashboard