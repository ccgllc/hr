<?php 

namespace App\Dashboard;

use App\Dashboard\Dataset;

class Chart
{
	public $labels = [];
	public $datasets = [];

	public function addLabel($label)
	{
		$this->labels[] = $label;
	}

	public function setData($dataset, $data)
	{
		$this->datasets[0]->setData($data);
	}

	public function addDataset()
	{
		return $this->datasets[] = new Dataset;
	}

}